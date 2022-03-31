module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontSize: {
				tiny: '11px',
				xs: '13px',
				md: '15px',
				lg: '18px',
			},

			spacing: {
				17: '4.25rem',
				19: '4.75rem',
				22: '5.5rem',
				23: '5.75rem',
			},

			maxWidth: {
				lg: '1110px',
			},
		},
		colors: {
			red: 'red', // for testing purposes
			black: 'hsl(180, 14%, 20%)',
			white: 'hsl(0, 0%, 100%)',
			'desaturated-cyan': 'hsl(180, 29%, 50%)',
			cyan: 'hsl(180, 52%, 96%)',
			'light-cyan': 'hsl(180, 31%, 95%)',
			'dark-cyan': 'hsl(180, 8%, 52%)',
			'very-dark-cyan': 'hsl(180, 14%, 20%)',
			'shadow-cyan': 'hsl(189, 81%, 28%, 15%)',
			'light-brown': 'hsl(0, 0%, 59%)',
			gray: 'hsl(180, 10%, 74%)',
		},
		boxShadow: ({ theme }) => ({
			DEFAULT: `0 15px 20px -5px ${theme('colors.shadow-cyan')}`,
		}),
	},
	plugins: [],
}
