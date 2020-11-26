module.exports = {
	theme: {
		extend: {
			colors: {
				prim: '#8a9597',
				sec: '#283032',
				accent1: '#bfff00',
				accent2: '#5cc8ff',
				dark: '#0e1116'
			},
			height: {
				half: '50%'
			}
		},
		screens: {
			sm: '576px', // 36rem
			md: '768px', // 48rem
			lg: '1056px', // 66rem
			xl: '1200px', // 75rem
			xxl: '1440px' // 90rem
		},
		fontSize: {
			xs: '0.75rem',
			sm: '0.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '4rem'
		},
		fontFamily: {
			sans: ['Lato'],
			title: ['Quicksand']
		}
	},
	variants: {},
	plugins: [],
	purge: false,
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true
	}
};
