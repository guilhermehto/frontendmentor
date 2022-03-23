module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

	theme: {
		extend: {
			fontSize: {
				tiny: '11px',
			},
			boxShadow: ({ theme }) => ({
				neon: `0 0 40px 0 ${theme('colors.green')}`,
			}),
		},
		fontFamily: {
			display: ['Manrope'],
			body: ['Manrope'],
		},
		colors: {
			cyan: 'hsl(193, 38%, 86%)',
			green: 'hsl(150, 100%, 66%)',
			'gray-blue': 'hsl(217, 19%, 38%)',
			'dark-gray-blue': 'hsl(217, 19%, 24%)',
			'dark-blue': 'hsl(218, 23%, 16%)',
		},
		letterSpacing: {
			widest: '.318em',
		},
	},
	plugins: [],
}
