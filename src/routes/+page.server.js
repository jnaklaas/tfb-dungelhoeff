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
	contact: async (event) => {
		const formDataEntries = await event.request.formData();
		const formData = Object.fromEntries(formDataEntries);
		const mailOptions = getMailOptions(formData);
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
	},

	download: async (event) => {
		const formDataEntries = await event.request.formData();
		const formData = Object.fromEntries(formDataEntries);
		const mailOptions = getMailOptions(formData);
		let response = {};

		try {
			// submit to database
			const message = `Download plan ${formData.file ?? ''}`;
			await sql`INSERT INTO dungelhoeff_form_submissions (firstname, lastname, email, tel, city, message)
				VALUES(${formData.firstname ?? ''}, ${formData.lastname ?? ''}, ${formData.email ?? ''}, ${
				formData.tel ?? ''
			}, ${formData.city ?? ''}, ${message})`;

			// send email
			await transporter.sendMail(mailOptions);

			if (!formData.file) throw 'Illegal download attempt';
			response.file = formData.file;

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
	const subject = formData.subject ?? 'Contactaanvraag';
	delete formData.subject;
	let mailOptions = {
		from: process.env.MAIL_FROM ?? 'info@tricksforbricks.be',
		to: process.env.MAIL_RECIPIENT.split(',') ?? 'jan-klaas@tricksforbricks.be',
		subject: `${subject} formulier Dungelhoeff`,
		text: `${subject} via dungelhoeff-lier.be\n\n`,
		html: `<h2>${subject} via dungelhoeff-lier.be</h2>`
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
