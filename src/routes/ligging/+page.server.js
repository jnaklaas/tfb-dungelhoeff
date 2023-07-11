import ImgEnv46 from '$lib/images/env46.jpg?w=1600&format=webp&meta';
import ImgEnv27 from '$lib/images/env27.jpg?w=1600&format=webp&meta';

const images = [
	{
		id: 0,
		name: 'Dungelhoeff - Villa Vigo - Omgeving',
		imgurl: ImgEnv46.src,
		src: ImgEnv46.src,
		height: ImgEnv46.height,
		width: ImgEnv46.width
	},
	{
		id: 1,
		name: 'Dungelhoeff - Villa Vigo - Omgeving',
		imgurl: ImgEnv27.src,
		src: ImgEnv27.src,
		height: ImgEnv27.height,
		width: ImgEnv27.width
	}
];

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	return { images };
}
