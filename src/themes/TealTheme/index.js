import { createMuiTheme, colors } from '@material-ui/core';
import AppConfig from 'constants/AppConfig';

const theme = createMuiTheme({
	palette: {
		common: {
			black: AppConfig.tealThemeColors.black,
			white: AppConfig.tealThemeColors.white
		},
		type: "light",
		primary: {
			contrastText: AppConfig.tealThemeColors.white,
			dark: "rgba(2, 132, 132,0.8)",
			main: AppConfig.tealThemeColors.primary, 
			light: "rgba(2, 132, 132,0.2)"
		},
		secondary: {
			contrastText: AppConfig.tealThemeColors.white,
			dark: AppConfig.tealThemeColors.secondary,
			main: AppConfig.tealThemeColors.secondary,
			light: AppConfig.tealThemeColors.secondary
		},
		success: {
			contrastText: AppConfig.tealThemeColors.white,
			dark: AppConfig.tealThemeColors.success,
			main: AppConfig.tealThemeColors.success,
			light: AppConfig.tealThemeColors.success
		},
		info: {
			contrastText: AppConfig.tealThemeColors.white,
			dark: AppConfig.tealThemeColors.info,
			main: AppConfig.tealThemeColors.info,
			light: AppConfig.tealThemeColors.info
		},
		warning: {
			contrastText: AppConfig.tealThemeColors.white,
			dark: AppConfig.tealThemeColors.warning,
			main: AppConfig.tealThemeColors.warning,
			light: AppConfig.tealThemeColors.warning
		},
		error: {
			contrastText: AppConfig.tealThemeColors.white,
			dark: AppConfig.tealThemeColors.error,
			main: AppConfig.tealThemeColors.error,
			light: AppConfig.tealThemeColors.error
		},
		text: {
			primary: AppConfig.tealThemeColors.textPrimary,
			secondary: AppConfig.tealThemeColors.textSecondary,
			link: AppConfig.tealThemeColors.primary,
		},
		divider: AppConfig.tealThemeColors.divider,
		icon: AppConfig.tealThemeColors.icon,
		background: {
			paper: AppConfig.tealThemeColors.bgPaper,
			default: AppConfig.tealThemeColors.bgDefault, 
		}
	},
	direction: 'ltr',
	typography: {
		htmlFontSize: 16,
		fontFamily: "'Roboto', sans-serif",
		fontSize: 16,
		h1: {
			color: AppConfig.tealThemeColors.textPrimary,
			fontWeight: 500,
			fontSize: '2.75rem',
			letterSpacing: '0',
			lineHeight: '1.5'
		},
		h2: {
			color: AppConfig.tealThemeColors.textPrimary,
			fontWeight: 500,
			fontSize: '2.25rem',
			letterSpacing: '0',
			lineHeight: '1.5'
		},
		h3: {
			color: AppConfig.tealThemeColors.textPrimary,
			fontWeight: 500,
			fontSize: '2rem',
			letterSpacing: '0',
			lineHeight: '1.5'
		},
		h4: {
			color: AppConfig.tealThemeColors.textPrimary,
			fontWeight: 500,
			fontSize: '1.75rem',
			letterSpacing: '0',
			lineHeight: '1.5'
		},
		h5: {
			color: AppConfig.tealThemeColors.textPrimary,
			fontWeight: 500,
			fontSize: '1.5rem',
			letterSpacing: '0',
			lineHeight: '1.5'
		},
		h6: {
			color: AppConfig.tealThemeColors.textPrimary,
			fontWeight: 500,
			fontSize: '1.25rem',
			letterSpacing: '0',
			lineHeight: '1.5'
		},
		subtitle1: {
			color: AppConfig.tealThemeColors.textPrimary,
			fontSize: '1.125rem',
			fontWeight: 400,
			lineHeight: '1.5'
		},
		subtitle2: {
			color: AppConfig.tealThemeColors.textSecondary,
			fontWeight: 400,
			fontSize: '0.875rem',
			letterSpacing: '0',
			lineHeight: '1.5'
		},
		body1: {
			color: AppConfig.tealThemeColors.textSecondary,
			fontSize: '0.75rem',
			letterSpacing: '0',
			lineHeight: '1.5'

		},
		body2: {
			color: AppConfig.tealThemeColors.textPrimary,
			fontSize: '1rem',
			letterSpacing: '0',
			lineHeight: '1.5',
			'@media (max-width:960px)': {
				fontSize: '0.9375rem',
			},
		},
		button: {
			color: AppConfig.tealThemeColors.textPrimary,
			fontSize: '14px',
			textTransform: 'capitalize'
		},
		caption: {
			color: AppConfig.tealThemeColors.textSecondary,
			fontSize: '11px',
			letterSpacing: '0.33px',
			lineHeight: '13px'
		},
		overline: {
			color: AppConfig.tealThemeColors.textSecondary,
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
				color: AppConfig.tealThemeColors.textPrimary,
    			backgroundColor: AppConfig.tealThemeColors.bgPaper,
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
				color: AppConfig.tealThemeColors.textPrimary,
				textTransform: 'capitalize'
			},
			contained: {
				color: AppConfig.tealThemeColors.textPrimary,
				boxShadow:
					'0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)',
				backgroundColor: AppConfig.tealThemeColors.bgPaper,
			}
		},
		MuiBadge: {
			badge: {
				height: 18,
				padding: '0 5px',
				minWidth: 18,
			},
			colorError: {
				backgroundColor: `${AppConfig.tealThemeColors.error} !important`,
			}
		},
		MuiDivider: {
			root: {
				backgroundColor: AppConfig.tealThemeColors.divider,
			}
		},
		MuiTabs: {
			root: {
				backgroundColor: AppConfig.tealThemeColors.bgPaper,
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
				color: AppConfig.tealThemeColors.textSecondary,
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
				color: AppConfig.tealThemeColors.textSecondary,
				fontWeight: 400,
				fontSize: '0.875rem',
				letterSpacing: '0',
				lineHeight: '1.5',
				backgroundColor: colors.grey[50]
			}
		},
		MuiTableCell: {
			root: {
				color: AppConfig.tealThemeColors.textPrimary,
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
				color: AppConfig.tealThemeColors.textPrimary,
				whiteSpace: 'nowrap',
				'& .MuiSvgIcon-root': {
					width: 22,
					height: 22,
				}
			}
		},
		MuiTypography: {
			root: {
				color: AppConfig.tealThemeColors.textPrimary,
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
				color: AppConfig.tealThemeColors.textSecondary,
				'&:hover': {
					backgroundColor: 'transparent'
				}
			}
		},
		MuiInputBase: {
			root: {
				color: AppConfig.tealThemeColors.textSecondary,
				fontFamily: 'Roboto',
				fontSize: '1rem',
			}
		},
		MuiFormLabel: {
			root: {
				color: AppConfig.tealThemeColors.textPrimary,
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
				color: AppConfig.tealThemeColors.textSecondary
			},
		},
		MuiFormControl:{
			root: {
				color: AppConfig.tealThemeColors.textSecondary,
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