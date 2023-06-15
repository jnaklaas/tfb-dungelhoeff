import csv from 'fast-csv';
import unitsCsv from '$lib/server/units.csv?raw';

let mailOptions = {
	// from: 'janklaas@wildlymild.com',
	from: 'info@dungelhoeff-lier.be',
	// to: ['pm@brix.be', 'maxim@vanhalme.be'],
	to: 'janklaas@wildlymild.com',
	subject: 'Download formulier Dungelhoeff',
	text: 'Download via dungelhoeff-lier.be\n\n',
	html: '<h2>Download via dungelhoeff-lier.be</h2>'
};

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
	default: async (event) => {
		const data = await event.request.formData();

		console.log(data);

		mailOptions.text += [...data]
			.map((field) => {
				return `${field[0]}: ${field[1]}`;
			})
			.join('\n');

		mailOptions.html +=
			'<table>' +
			[...data]
				.map((field) => {
					return `<tr><td><b>${field[0]}</b>:</td><td>${field[1]}</td></tr>`;
				})
				.join('<br>') +
			'</table>';

		let response = {};

		await sgMail
			.send(mailOptions)
			.then(() => {
				response.file = [...data].find((field) => {
					return field[0] === 'file';
				})[1];
				response.success = response.file ? true : false;
				response.message = response.file
					? 'Uw download begint zo dadelijk.'
					: 'Er liep iets fout, contacteer ons via info@dungelhoeff-lier.be';
			})
			.catch((error) => {
				console.log(error);
				response.success = false;
				response.message = 'Er liep iets fout, contacteer ons via info@dungelhoeff-lier.be';
			});

		return { response };
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
