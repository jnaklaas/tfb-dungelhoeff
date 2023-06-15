import PhotoSwipeLightbox from 'photoswipe/lightbox';

// import CSS
import 'photoswipe/style.css';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	let lightbox = new PhotoSwipeLightbox({
		gallery: '.lightbox',
		children: 'a',
		pswpModule: () => import('photoswipe')
	});

	return {
		lightbox
	};
}
