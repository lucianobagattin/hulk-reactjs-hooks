import { createMuiTheme } from '@material-ui/core';
import AppConfig from 'constants/AppConfig';

const theme = createMuiTheme({
	palette: {
		type: "dark",
		common: {
			black: AppConfig.darkThemeColors.black,
			white: AppConfig.darkThemeColors.white
		},
		primary: {
			contrastText: AppConfig.darkThemeColors.white,
			dark: "rgba(77, 125, 242,0.8)",
			main: AppConfig.lightThemeColors.primary, 
			light: "rgba(77, 125, 242,0.4)"
		},
		secondary: {
			contrastText: AppConfig.darkThemeColors.white,
			dark: AppConfig.darkThemeColors.secondary,
			main: AppConfig.darkThemeColors.secondary,
			light: AppConfig.darkThemeColors.secondary
		},
		success: {
			contrastText: AppConfig.darkThemeColors.white,
			dark: AppConfig.darkThemeColors.success,
			main: AppConfig.darkThemeColors.success,
			light: AppConfig.darkThemeColors.success
		},
		info: {
			contrastText: AppConfig.darkThemeColors.white,
			dark: AppConfig.darkThemeColors.info,
			main: AppConfig.darkThemeColors.info,
			light: AppConfig.darkThemeColors.info
		},
		warning: {
			contrastText: AppConfig.darkThemeColors.white,
			dark: AppConfig.darkThemeColors.warning,
			main: AppConfig.darkThemeColors.warning,
			light: AppConfig.darkThemeColors.warning
		},
		error: {
			contrastText: AppConfig.darkThemeColors.white,
			dark: AppConfig.darkThemeColors.error,
			main: AppConfig.darkThemeColors.error,
			light: AppConfig.darkThemeColors.error
		},
		text: {
			primary: AppConfig.darkThemeColors.textPrimary,
			secondary: AppConfig.darkThemeColors.textSecondary,
			link: AppConfig.darkThemeColors.primary,
		},
		divider: AppConfig.darkThemeColors.divider,
		icon: AppConfig.darkThemeColors.icon,
		background: {
			paper: AppConfig.darkThemeColors.bgPaper,
			default: AppConfig.darkThemeColors.bgDefault, 
		}
	},
	direction: 'ltr',
	typography: {
		htmlFontSize: 16,
		fontFamily: "'Roboto', sans-serif",
		fontSize: 16,
		h1: {
			color: AppConfig.darkThemeColors.textPrimary,
			fontWeight: 500,
			fontSize: '2.75rem',
			letterSpacing: '0',
			lineHeight: '1.5'
		},
		h2: {
			color: AppConfig.darkThemeColors.textPrimary,
			fontWeight: 500,
			fontSize: '2.25rem',
			letterSpacing: '0',
			lineHeight: '1.5'
		},
		h3: {
			color: AppConfig.darkThemeColors.textPrimary,
			fontWeight: 500,
			fontSize: '2rem',
			letterSpacing: '0',
			lineHeight: '1.5'
		},
		h4: {
			color: AppConfig.darkThemeColors.textPrimary,
			fontWeight: 500,
			fontSize: '1.75rem',
			letterSpacing: '0',
			lineHeight: '1.5'
		},
		h5: {
			color: AppConfig.darkThemeColors.textPrimary,
			fontWeight: 500,
			fontSize: '1.5rem',
			letterSpacing: '0',
			lineHeight: '1.5'
		},
		h6: {
			color: AppConfig.darkThemeColors.textPrimary,
			fontWeight: 500,
			fontSize: '1.25rem',
			letterSpacing: '0',
			lineHeight: '1.5'
		},
		subtitle1: {
			color: AppConfig.darkThemeColors.textPrimary,
			fontSize: '1.125rem',
			fontWeight: 400,
			lineHeight: '1.5'
		},
		subtitle2: {
			color: AppConfig.darkThemeColors.textSecondary,
			fontWeight: 400,
			fontSize: '0.875rem',
			letterSpacing: '0',
			lineHeight: '1.5'
		},
		body1: {
			color: AppConfig.darkThemeColors.textSecondary,
			fontSize: '0.75rem',
			letterSpacing: '0',
			lineHeight: '1.5'

		},
		body2: {
			color: AppConfig.darkThemeColors.textPrimary,
			fontSize: '1rem',
			letterSpacing: '0',
			lineHeight: '1.5',
			'@media (max-width:960px)': {
				fontSize: '0.9375rem',
			},
		},
		button: {
			color: AppConfig.darkThemeColors.white,
			fontSize: '14px',
			textTransform: 'capitalize'
		},
		caption: {
			color: AppConfig.darkThemeColors.textSecondary,
			fontSize: '11px',
			letterSpacing: '0.33px',
			lineHeight: '13px'
		},
		overline: {
			color: AppConfig.darkThemeColors.textSecondary,
			fontSize: '11px',
			fontWeight: 500,
			letterSpacing: '0.33px',
			lineHeight: '13px',
			textTransform: 'uppercase'
		}
	},
	// Overrides the component
	overrides: {
		MuiContainer: {
			root: {
				paddingLeft: 12,
				paddingRight: 12,
				'@media (min-width:960px)': {
					paddingLeft: 12,
					paddingRight: 12,
				},
				'@media (min-width:600px)': {
					paddingLeft: 12,
					paddingRight: 12,
				}
			},
			maxWidthLg: {
				'@media (min-width:1280px)': {
					maxWidth: '90%',
				}
			}
		},
		MuiAppBar:{

			colorDefault:{
				color: AppConfig.darkThemeColors.textPrimary,
    			backgroundColor: AppConfig.darkThemeColors.bgPaper,
			}
		},
		MuiLink: {
			underlineHover: {
				textDecoration: 'none',
				'&:hover':{
					textDecoration: 'none',
				}
			},
			underlineAlways: {
				textDecoration: 'none',
			}
		},
		MuiButton: {
			root: {
				color: AppConfig.darkThemeColors.white,
				textTransform: 'capitalize'
			},
			contained: {
				color: AppConfig.darkThemeColors.white,
				boxShadow:
					'0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)',
				backgroundColor: AppConfig.darkThemeColors.bgPaper,
			}
		},
		MuiBadge: {
			badge: {
				height: 18,
				padding: '0 5px',
				minWidth: 18,
			},
			colorError: {
				backgroundColor: `${AppConfig.darkThemeColors.error} !important`,
			}
		},
		MuiDivider: {
			root: {
				backgroundColor: AppConfig.darkThemeColors.divider,
			}
		},
		MuiTabs: {
			root: {
				backgroundColor: AppConfig.darkThemeColors.bgPaper,
				minHeight: '44px'
			},
			scrollButtons: {
				width: 25,
			}
		},
		MuiTab: {
			root: {
				minWidth: 'auto !important',
				padding: '0 16px',
				minHeight: '42px',
			},
			wrapper: {
				flexDirection: 'row',
				textTransform: 'capitalize',
				fontSize: 14,
				letterSpacing: 0,
			}
		},
		MuiLinearProgress: {
			root: {
				borderRadius: 2,
				height: 12,
			},
			bar: {
				borderRadius: 2,
			}
		},
		MuiIconButton: {
			root: {
				color: AppConfig.darkThemeColors.textSecondary,
				'&:hover': {
					backgroundColor: 'rgba(0, 0, 0, 0.03)'
				}
			}
		},
		MuiPaper: {
			elevation1: {
				boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.09)'
			},
			elevation2: {
				boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
			}
		},
		MuiTable: {
			root: {
				padding: '0 1.5rem',
				minWidth: '620px',
			}
		},
		MuiTableHead: {
			root: {
				color: AppConfig.darkThemeColors.textSecondary,
				fontWeight: 400,
				fontSize: '0.875rem',
				letterSpacing: '0',
				lineHeight: '1.5',
				backgroundColor:AppConfig.darkThemeColors.bgDefault,
			}
		},
		MuiTableRow:{
			backgroundColor:AppConfig.darkThemeColors.bgPaper,
		},
		MuiTableCell: {
			root: {
				color: AppConfig.darkThemeColors.textPrimary,
				fontSize: '1rem',
				letterSpacing: '0',
				lineHeight: '1.5',
				borderBottom: '1px solid rgba(255,255, 255, 0.12)'
			},
			head: {
				color: AppConfig.darkThemeColors.textPrimary,
				fontSize: '0.875rem',
				height: '60px',
				fontWeight: 500,
				whiteSpace: 'nowrap',

				'& .MuiSvgIcon-root': {
					width: 22,
					height: 22,
				}
			},
			body: {
				fontSize: '0.875rem',
				height: '60px',
				color: AppConfig.darkThemeColors.textPrimary,
				whiteSpace: 'nowrap',
				'& .MuiSvgIcon-root': {
					width: 22,
					height: 22,
				}
			},
			footer:{
				borderBottom: 0
			}
		},
		MuiMenu:{
			paper:{
				backgroundColor:AppConfig.darkThemeColors.bgDefault,
			}
		},
		MuiMenuItem: {
			root: {
				fontSize: '1rem',
				minHeight: 'auto',
				color: `${AppConfig.darkThemeColors.textPrimary} !important`,
			}
		},
		MuiTypography: {
			root: {
				color: AppConfig.darkThemeColors.textPrimary,
				fontSize: '1rem',
				letterSpacing: '0',
				lineHeight: '1.5'
			},
			gutterBottom: {
				marginBottom: 8
			}
		},
		MuiListItemText: {
			primary: {
				fontSize: '1rem'
			},
			secondary: {
				fontSize: '0.75rem'
			}
		},
		MuiListItemIcon: {
			root: {
				color: AppConfig.darkThemeColors.textPrimary,
				'&:hover': {
					backgroundColor: 'transparent'
				}
			}
		},
		MuiInputBase: {
			root: {
				color: AppConfig.darkThemeColors.textPrimary,
				fontFamily: 'Roboto',
				fontSize: '1rem',
			}
		},
		MuiFormLabel: {
			root: {
				color: AppConfig.darkThemeColors.textPrimary,
				fontSize: 16,
			}
		},
		MuiFab: {
			root: {
				color: AppConfig.darkThemeColors.textSecondary
			},
		},
		MuiFormControl:{
			root: {
				color: AppConfig.darkThemeColors.textPrimary,
				fontFamily: 'Roboto',
				fontSize: '1rem',
			}
		}
	},
	zIndex: {
		appBar: 1200,
		drawer: 1100
	},
	"@global": {
		html: {
			fontSize: 16,
			'@media (max-width:960px)': {
				fontSize: 15
			},
			'@media (max-width:600px)': {
				fontSize: 14
			}
		}
	}
});

export default theme;