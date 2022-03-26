module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		colors: {
			red: 'red', // for testing purposes
			white: 'hsl(0, 0%, 100%)',
			'desaturated-cyan': 'hsl(180, 29%, 50%)',
			cyan: 'hsl(180, 52%, 96%)',
			'light-cyan': 'hsl(180, 31%, 95%)',
			'dark-cyan': 'hsl(180, 8%, 52%)',
			'very-dark-cyan': 'hsl(180, 14%, 20%)',
			'shadow-cyan': 'hsl(189, 81%, 28%, 15%)',
		},
		boxShadow: ({ theme }) => ({
			DEFAULT: `0 15px 20px -5px ${theme('colors.shadow-cyan')}`,
		}),
	},
	plugins: [],
}
