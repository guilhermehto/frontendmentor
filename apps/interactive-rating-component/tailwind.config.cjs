/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			display: ['Overpass'],
			body: ['Overpass'],
		},
		extend: {
			backgroundImage: {
				'dark-gradient': 'radial-gradient(#232A34, #181E27)',
			},
			colors: {
				'very-dark-blue': '#131518',
				'dark-blue': '#262E38',
				'light-gray': '#969FAD',
				'medium-gray': '#7C8798',
				orange: '#FC7614',
			},
		},
	},
	plugins: [],
}
