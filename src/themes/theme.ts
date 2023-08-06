import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
	palette: {
		primary: {
			main: '#faa233',
		},
		background: {
			default: '#f6f6f6',
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {},
			},
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					fontSize: '14px', // Adjust the font size as needed
					border: 'none', // Remove the borders
				},
			},
		},
		MuiCard: {
			styleOverrides: {
				root: {
					borderRadius: 20,
					// boxShadow: "0px 3px 10px 0px rgba(0, 0, 0, 0.03)",
					boxShadow: 'none',
					backgroundColor: '#efefef',
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				elevation1: {
					boxShadow: 'none',
					backgroundColor: '#fff',
					padding: '16px',
					borderRadius: '25px 25px 0 0',
				},
			},
		},
		MuiListItem: {
			styleOverrides: {
				root: {
					padding: 0,
				},
			},
		},
	},
	shape: {
		borderRadius: 10,
	},
	typography: {
		h1: {
			fontSize: 'clamp(2rem, 1.2857rem + 3.5714vw, 4rem)',
			fontWeight: 800,
		},
		h2: {
			fontSize: 'clamp(1.5rem, 0.9643rem + 1.4286vw, 2.25rem)',
			fontWeight: 800,
		},
		h3: {
			fontSize: '2.25rem',
			fontWeight: 400,
		},
		h4: {
			fontSize: '1.75rem',
			fontWeight: 400,
		},
		h5: {
			fontSize: '1.5rem',
			fontWeight: 400,
		},
		h6: {
			fontSize: '1.25rem',
			fontWeight: 500,
		},
		subtitle1: {
			color: '#a2a1a1',
		},
		subtitle2: {
			color: '#a2a1a1',
			fontWeight: 400,
		},
	},
})
