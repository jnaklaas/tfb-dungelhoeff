/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {
			colors: {
				// yellorange
				primary: '#94bb20',
				coolgray: '#646569',
				secondary: '#597533',
				tertiary: '#d49d6f',
				quaternary: 'c7c7c7'
			}
		},
		fontFamily: {
			// montserrat 400 regular, 700 bold
			sans: ['montserrat', 'ui-sans-serif', 'system-ui', 'Helvetica Neue', 'Arial', 'sans-serif'],
			// skolar latin 400 regular, 600 semibold, 700 bold
			serif: ['skolar-latin', 'ui-serif', 'Times New Roman', 'Times', 'serif'],
			heading: ['skolar-latin', 'ui-serif', 'Times New Roman', 'Times', 'serif']
		},
		container: (theme) => ({
			center: true,
			padding: theme('spacing.0'),
			maxWidth: {
				'2xl': '1280px'
			}
		})
	},
	plugins: [require('flowbite/plugin')]
};
