import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

// const APP_BAR_HEIGHT = '64px'
// const BROAD_BAR_HEIGHT = '60px'
// const BROAD_CONTENT_HEIGHT = `calc( 100vh - ${APP_BAR_HEIGHT} - ${BROAD_BAR_HEIGHT})`
// const COLUMN_HEADER_HEIGHT = '48px'
// const COLUMN_FOOTER_HEIGHT = '48px'

// Create a theme instance.
const theme = extendTheme({
	custom: {
	},
	palette: {
		primary: {
			main: '#fff',
			dark: '#000',
			contrastText: 'red',
		},
		text: {
			primary: '#000',
		},
		background: {
			default: '#fff',
			paper: '#d7ebc7'
		}
	},
	typography: {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontCustom: '"Anek Odia", sans-serif'
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					'*::-webkit-scrollbar': {
						width: '4px',
						height: '4px'
					},
					'*::-webkit-scrollbar-thumb': {
						backgroundColor: '#728B74',
						borderRadius: 4
					},
					'*::-webkit-scrollbar-track ': {
						margin: '8px 0'
					},
					'*::-webkit-scrollbar-thumb:hover': {
						backgroundColor: '#4F6F52'
					}
				}
			}
		},
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: 'capitalize'
				}
			}
		},
		MuiFormLabel: {
			styleOverrides: {
				root: ({ theme }) => ({
					color: theme.palette.primary.main,
					fontSize: '0.875rem'
				})
			}
		},
		MuiTypography: {
			styleOverrides: {
				root: {
					'&.MuiTypography-body1': {
						fontSize: '0.875rem'
					}
				}
			}
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: ({ theme }) => ({
					color: theme.palette.primary.main,
					fontSize: '0.875rem',
					'& .MuiOutlinedInput-notchedOutline': {
						borderColor: theme.palette.primary.light,
						borderWidth: '1px !important'
					},
					'&:hover .MuiOutlinedInput-notchedOutline': {
						borderColor: theme.palette.primary.main
					}
				})
			}

		}

	}
})

export default theme
