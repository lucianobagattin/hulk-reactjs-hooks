import { createMuiTheme, colors } from '@material-ui/core';
import AppConfig from 'constants/AppConfig';

const theme = createMuiTheme({
	palette: {
		common: {
			black: AppConfig.lightThemeColors.black,
			white: AppConfig.lightThemeColors.white
		},
		type: "light",
		primary: {
			contrastText: AppConfig.lightThemeColors.white,
			dark: "rgba(77, 125, 242,0.8)",
			main: AppConfig.lightThemeColors.primary, 
			light: "rgba(77, 125, 242,0.4)"
		},
		secondary: {
			contrastText: AppConfig.lightThemeColors.white,
			dark: AppConfig.lightThemeColors.secondary,
			main: AppConfig.lightThemeColors.secondary,
			light: AppConfig.lightThemeColors.secondary
		},
		success: {
			contrastText: AppConfig.lightThemeColors.white,
			dark: AppConfig.lightThemeColors.success,
			main: AppConfig.lightThemeColors.success,
			light: AppConfig.lightThemeColors.success
		},
		info: {
			contrastText: AppConfig.lightThemeColors.white,
			dark: AppConfig.lightThemeColors.info,
			main: AppConfig.lightThemeColors.info,
			light: AppConfig.lightThemeColors.info
		},
		warning: {
			contrastText: AppConfig.lightThemeColors.white,
			dark: AppConfig.lightThemeColors.warning,
			main: AppConfig.lightThemeColors.warning,
			light: AppConfig.lightThemeColors.warning
		},
		error: {
			contrastText: AppConfig.lightThemeColors.white,
			dark: AppConfig.lightThemeColors.error,
			main: AppConfig.lightThemeColors.error,
			light: AppConfig.lightThemeColors.error
		},
		text: {
			primary: AppConfig.lightThemeColors.textPrimary,
			secondary: AppConfig.lightThemeColors.textSecondary,
			link: AppConfig.lightThemeColors.primary,
		},
		divider: AppConfig.lightThemeColors.divider,
		icon: AppConfig.lightThemeColors.icon,
		background: {
			paper: AppConfig.lightThemeColors.bgPaper,
			default: AppConfig.lightThemeColors.bgDefault, 
		}
	},
	direction: 'ltr',
	typography: {
		htmlFontSize: 16,
		fontFamily: "'Roboto', sans-serif",
		fontSize: 16,
		h1: {
			color: AppConfig.lightThemeColors.textPrimary,
			fontWeight: 500,
			fontSize: '2.75rem',
			letterSpacing: '0',
			lineHeight: '1.5'
		},
		h2: {
			color: AppConfig.lightThemeColors.textPrimary,
			fontWeight: 500,
			fontSize: '2.25rem',
			letterSpacing: '0',
			lineHeight: '1.5'
		},
		h3: {
			color: AppConfig.lightThemeColors.textPrimary,
			fontWeight: 500,
			fontSize: '2rem',
			letterSpacing: '0',
			lineHeight: '1.5'
		},
		h4: {
			color: AppConfig.lightThemeColors.textPrimary,
			fontWeight: 500,
			fontSize: '1.75rem',
			letterSpacing: '0',
			lineHeight: '1.5'
		},
		h5: {
			color: AppConfig.lightThemeColors.textPrimary,
			fontWeight: 500,
			fontSize: '1.5rem',
			letterSpacing: '0',
			lineHeight: '1.5'
		},
		h6: {
			color: AppConfig.lightThemeColors.textPrimary,
			fontWeight: 500,
			fontSize: '1.25rem',
			letterSpacing: '0',
			lineHeight: '1.5'
		},
		subtitle1: {
			color: AppConfig.lightThemeColors.textPrimary,
			fontSize: '1.125rem',
			fontWeight: 400,
			lineHeight: '1.5'
		},
		subtitle2: {
			color: AppConfig.lightThemeColors.textSecondary,
			fontWeight: 400,
			fontSize: '0.875rem',
			letterSpacing: '0',
			lineHeight: '1.5'
		},
		body1: {
			color: AppConfig.lightThemeColors.textSecondary,
			fontSize: '0.75rem',
			letterSpacing: '0',
			lineHeight: '1.5'

		},
		body2: {
			color: AppConfig.lightThemeColors.textPrimary,
			fontSize: '1rem',
			letterSpacing: '0',
			lineHeight: '1.5',
			'@media (max-width:960px)': {
				fontSize: '0.9375rem',
			},
		},
		button: {
			color: AppConfig.lightThemeColors.textPrimary,
			fontSize: '14px',
			textTransform: 'capitalize'
		},
		caption: {
			color: AppConfig.lightThemeColors.textSecondary,
			fontSize: '11px',
			letterSpacing: '0.33px',
			lineHeight: '13px'
		},
		overline: {
			color: AppConfig.lightThemeColors.textSecondary,
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
				color: AppConfig.lightThemeColors.textPrimary,
    			backgroundColor: AppConfig.lightThemeColors.bgPaper,
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
				color: AppConfig.lightThemeColors.textPrimary,
				textTransform: 'capitalize'
			},
			contained: {
				color: AppConfig.lightThemeColors.textPrimary,
				boxShadow:
					'0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)',
				backgroundColor: AppConfig.lightThemeColors.bgPaper,
			}
		},
		MuiBadge: {
			badge: {
				height: 18,
				padding: '0 5px',
				minWidth: 18,
			},
			colorError: {
				backgroundColor: `${AppConfig.lightThemeColors.error} !important`,
			}
		},
		// MuiDivider: {
		// 	backgroundColor: AppConfig.lightThemeColors.divider,
		// },
		MuiDivider: {
			root:{
				backgroundColor: AppConfig.lightThemeColors.divider,
			}
		},
		MuiTabs: {
			root: {
				backgroundColor: AppConfig.lightThemeColors.bgPaper,
				minHeight: '44px'
			},
			scrollButtons: {
				width: 25,
				'& .MuiSvgIcon-root':{
					fill: AppConfig.lightThemeColors.textPrimary,
				}
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
				color: AppConfig.lightThemeColors.textSecondary,
				'&:hover': {
					backgroundColor: 'rgba(0, 0, 0, 0.03)'
				}
			}
		},
		MuiPaper: {
			elevation1: {
				boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
			},
			elevation2: {
				boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
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
				color: AppConfig.lightThemeColors.textSecondary,
				fontWeight: 400,
				fontSize: '0.875rem',
				letterSpacing: '0',
				lineHeight: '1.5',
				backgroundColor: colors.grey[50]
			}
		},
		MuiTableCell: {
			root: {
				color: AppConfig.lightThemeColors.textPrimary,
				fontSize: '1rem',
				letterSpacing: '0',
				lineHeight: '1.5',
				borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
			},
			head: {
				color: 'rgba(0, 0, 0, 0.54) !important',
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
				color: AppConfig.lightThemeColors.textPrimary,
				whiteSpace: 'nowrap',
				'& .MuiSvgIcon-root': {
					width: 22,
					height: 22,
				}
			}
		},
		MuiTypography: {
			root: {
				color: AppConfig.lightThemeColors.textPrimary,
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
				color: AppConfig.lightThemeColors.textSecondary,
				'&:hover': {
					backgroundColor: 'transparent'
				}
			}
		},
		MuiInputBase: {
			root: {
				color: AppConfig.lightThemeColors.textSecondary,
				fontFamily: 'Roboto',
				fontSize: '1rem',
			}
		},
		MuiFormLabel: {
			root: {
				color: AppConfig.lightThemeColors.textPrimary,
				fontSize: 16,
			}
		},
		MuiMenuItem: {
			root: {
				fontSize: '1rem',
				minHeight: 'auto'
			}
		},
		MuiFab: {
			root: {
				color: AppConfig.lightThemeColors.textSecondary
			},
		},
		MuiFormControl:{
			root: {
				color: AppConfig.lightThemeColors.textSecondary,
				fontFamily: 'Roboto',
				fontSize: '1rem',
			}
		},
		MuiStepConnector:{
			line:{
				borderColor:AppConfig.lightThemeColors.divider,
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