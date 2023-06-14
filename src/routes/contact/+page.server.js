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
		const mailOptions = getMailOptions(formDataEntries);
		let response = {};

		try {
			// submit to database
			await sql`INSERT INTO dungelhoeff_form_submissions (firstname, lastname, email, tel, city, message)
				VALUES(${formData.firstname ?? ''}, ${formData.lastname ?? ''}, ${formData.email ?? ''}, ${
				formData.tel ?? ''
			}, ${formData.city ?? ''}, ${formData.message ?? ''})`;

			// send email
			await transporter.sendMail(mailOptions);

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
	let mailOptions = {
		from: 'info@dungelhoeff-lier.be',
		// to: ['pm@brix.be', 'maxim@vanhalme.be'],
		// to: 'jo@tricksforbricks.be',
		to: 'janklaas@wildlymild.com',
		subject: 'Contactformulier Dungelhoeff',
		text: 'Contactaanvraag via dungelhoeff-lier.be\n\n',
		html: '<h2>Contactaanvraag via dungelhoeff-lier.be</h2>'
	};

	mailOptions.text += [...formData]
		.map((field) => {
			return `${field[0]}: ${field[1]}`;
		})
		.join('\n');

	mailOptions.html +=
		'<table>' +
		[...formData]
			.map((field) => {
				return `<tr><td><b>${field[0]}</b>:</td><td>${field[1]}</td></tr>`;
			})
			.join('<br>') +
		'</table>';

	return mailOptions;
};
