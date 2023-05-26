import fs from 'fs';
import csv from 'fast-csv';
import path from 'path';

export const readCSV = async (file, headers = true, delimiter = ';') => {
	return new Promise((resolve, reject) => {
		let data = [];
		file = path.join(process.cwd(), file);

		if (!fs.existsSync(file)) {
			console.error(`CSV file ${file} not found.`);
			resolve(data);
			return;
		}
		fs.createReadStream(file)
			.pipe(csv.parse({ headers, delimiter }))
			.on('data', (row) => data.push(row))
			.on('end', () => {
				// console.log(`CSV file ${file} parsed.`);
				resolve(data);
			});
	});
};

export const writeCSV = (file, csvArray) => {
	// const stream = csv.format({ delimiter: ";", headers: true });
	const stream = csv.format({ delimiter: ';', headers: true }).transform((row) => {
		return row.map((el) => {
			return isNaN(el) ? el : el.toString().replace('.', ',');
		});
	});
	stream.pipe(fs.createWriteStream(file));
	csvArray.forEach((el) => {
		stream.write(el);
	});
	stream.end();
};

export const toLatinLower = (s) => {
	return s
		.toLowerCase()
		.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|ä/g, 'a')
		.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
		.replace(/ì|í|ị|ỉ|ĩ/g, 'i')
		.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|ø/g, 'o')
		.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|ü|oe/g, 'u')
		.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
		.replace(/đ/g, 'd')
		.replace(/ł/g, 'l')
		.replace(/č/g, 'c')
		.replace(/ž/g, 'z')
		.replace(/ß/g, 'ss')
		.replace(/š/g, 's')
		.replace(/ņ/g, 'n');
};

export const slugify = (s) => {
	return s
		.toLowerCase()
		.trim()
		.replace(/[^\w\s-]/g, '')
		.replace(/[\s_-]+/g, '-')
		.replace(/^-+|-+$/g, '');
};
