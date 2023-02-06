/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		screens: {
			sm: '375px',
			md: '768px',
			lg: '1280px',
		},
		colors: {
			black: '#050505',
			primary: '#A445ED',
			warning: '#FF5252',
			white: '#FFFFFF',
			'gray-1': '#1F1F1F',
			'gray-2': '#2D2D2D',
			'gray-3': '#3A3A3A',
			'gray-4': '#757575',
			'gray-5': '#E9E9E9',
			'gray-6': '#F4F4F4',
		},
	},
	plugins: [],
}
