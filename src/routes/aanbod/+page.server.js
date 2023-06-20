import csv from 'fast-csv';
import unitsCsv from '$lib/server/units.csv?raw';
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

const readCsv = async (file, headers = true, delimiter = ';') => {
	return new Promise((resolve, reject) => {
		let units = [];
		csv
			.parseString(unitsCsv, { headers: true, delimiter: ',' })
			.on('error', (error) => console.error(error))
			.on('data', (row) => units.push(row))
			.on('end', (rowCount) => resolve(units));
	});
};

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const units = await getUnitsFromCsv();
	// const units = await getUnitsFromApi();
	return { units };
}

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

const getUnitsFromCsv = async () => {
	let units = await readCsv(unitsCsv, true, ',');
	units = units.filter((unit) => unit.type === 'apartment');
	units = units.map((unit) => {
		unit.available = unit.availability !== 'sold';
		return unit;
	});
	return units;
};

const getUnitsFromApi = async () => {
	try {
		const response = await fetch('https://dungelhoeff.tricksforbricks.be/wp/graphql', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
				// 'Access-Control-Allow-Origin': 'http://127.0.0.1:5173/'
			},
			body: JSON.stringify({
				query: `
				{
					apartments (first:999)  {
						nodes {
							title
							acf {
								rooms
								status
								constructionValue
								surfaceGross
								surfaceTerrace
								surfaceGarden
							}
						}
					}
				}
			`
			})
		});
		const { data } = await response.json();
		const units = data.apartments.nodes.map((apartment) => {
			return {
				id: apartment.title,
				floor: apartment.title.split('.')[0],
				rooms: apartment.acf.rooms,
				status: apartment.acf.status,
				price: apartment.acf.constructionValue,
				surfaceGross: apartment.acf.surfaceGross || 0,
				terraceGarden: 0 + apartment.acf.surfaceTerrace + apartment.acf.surfaceGarden,
				available: apartment.acf.status === 'available'
			};
		});
		units.sort((a, b) => a.id - b.id);
		return units;
	} catch (error) {
		console.log(error);
		const units = await getUnitsFromCsv();
		return units;
	}
};

const getMailOptions = (formData) => {
	const subject = formData.subject ?? 'Contactaanvraag';
	delete formData.subject;
	let mailOptions = {
		from: 'info@dungelhoeff-lier.be',
		// to: ['pm@brix.be', 'maxim@vanhalme.be'],
		// to: 'jo@tricksforbricks.be',
		to: 'janklaas@wildlymild.com',
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
