import nodemailer from 'nodemailer';
import { sql } from '@vercel/postgres';

const smtpPort = !isNaN(process.env.SMTP_PORT) ? parseInt(process.env.SMTP_PORT) : 465;
const transporter = nodemailer.createTransport({
	host: process.env.SMTP_HOST || '127.0.0.1',
	port: smtpPort,
	secure: smtpPort === 465,
	auth: {
		user: process.env.SMTP_USER,
		pass: process.env.SMTP_PASS
	},
	tls: {
		// do not fail on invalid certs
		rejectUnauthorized: false
	}
});

/** @type {import('./$types').Actions} */
export const actions = {
	default: async (event) => {
		const formDataEntries = await event.request.formData();
		const formData = Object.fromEntries(formDataEntries);
		const mailOptions = getMailOptions(formData);
		const mail2Options = getMail2Options(formData);

		let response = {};

		try {
			// submit to database
			await sql`INSERT INTO dungelhoeff_form_submissions (firstname, lastname, email, tel, city, message)
				VALUES(${formData.firstname ?? ''}, ${formData.lastname ?? ''}, ${formData.email ?? ''}, ${
				formData.tel ?? ''
			}, ${formData.city ?? ''}, ${formData.message ?? ''})`;

			// send email
			await transporter.sendMail(mailOptions);
			await transporter.sendMail(mail2Options);

			// return
			response.success = true;
			response.message = 'Uw bericht werd verzonden.';
		} catch (error) {
			console.error(error);
			response.success = false;
			response.message = 'Er liep iets fout, contacteer ons via info@dungelhoeff-lier.be';
		} finally {
			return { response };
		}
	}
};

const getMailOptions = (formData) => {
	delete formData.subject;

	let mailOptions = {
		from: process.env.MAIL_FROM ?? 'info@tricksforbricks.be',
		to: process.env.MAIL_RECIPIENT.split(',') ?? 'jan-klaas@tricksforbricks.be',
		subject: 'Registratie infoavond Dungelhoeff',
		text: 'Registratie infoavond via dungelhoeff-lier.be\n\n',
		html: '<h2>Registratie infoavond via dungelhoeff-lier.be</h2>'
	};

	mailOptions.text += Object.entries(formData)
		.map(([k, v]) => `${k}: ${v}`)
		.join('\n');

	mailOptions.html +=
		'<table>' +
		Object.entries(formData)
			.map(([k, v]) => {
				return `<tr><td><b>${k}</b>:</td><td>${v}</td></tr>`;
			})
			.join('<br>') +
		'</table>';

	return mailOptions;
};

const getMail2Options = (formData) => {
	let mailOptions = {
		from: process.env.MAIL_FROM ?? 'info@tricksforbricks.be',
		to: formData.email,
		subject: 'Registratie infoavond Dungelhoeff',
		text: '',
		html: ''
	};

	mailOptions.text += `Beste ${formData.firstname},\n\n
		Wij hebben uw inschrijving voor de infoavond van Villa Vigo goed ontvangen. Wij verwachten u op 6 juli 2023 van 17u tot 20u\n\n
		Projectadres:\nKazernedreef\n2500 Lier\n\n
		Met vriendelijke groeten\n\n
		Het Dungelhoeff salesteam`;

	mailOptions.html += `<p>Beste ${formData.firstname},<br><br>
	Wij hebben uw inschrijving voor de infoavond van Villa Vigo goed ontvangen. Wij verwachten u op 6 juli 2023 van 17u tot 20u<br><br>
	Projectadres:<br>Kazernedreef<br>2500 Lier<br><br>
	Met vriendelijke groeten<br><br>
	Het Dungelhoeff salesteam</p>`;

	return mailOptions;
};
