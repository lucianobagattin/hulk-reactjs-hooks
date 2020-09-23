/**
 * Layouts
*/
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Tooltip, Box, Switch, List, ListItem, Button,
	ListItemText, ListItemSecondaryAction, ListSubheader
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	sidebarWrap: {
		paddingTop:20,
		width: 300,
		height: '100vh',
		'& .theme-layout':{
			margin:  '16px 16px 24px',
			paddingBottom:0,
			border: `1px solid ${theme.palette.divider}`,
			borderRadius: 4,
			overflow: 'hidden',
			'& .MuiListSubheader-root':{
				lineHeight:'40px',
				backgroundColor: theme.palette.background.default,
			},
			'& .MuiListItemText-primary':{
				color:theme.palette.text.primary,
				fontSize:15,
			}
		}
	},
	root: {
		'& >div': {
			'& >div:first-child': {
				backgroundColor: theme.palette.background.default,
				'& .Mui-selected': {
					backgroundColor: theme.palette.primary.main,
					'& .MuiTab-wrapper': {
						color: theme.palette.common.white,
					},
				}
			}
		},
		'& button': {
			minHeight: 48,
		}
	},
	pad0:{
		padding:0,
	},
	btn:{
		minWidth:'auto',
		height:40,
		width:40,
		textIndent:-9999999,
		marginRight:10,
	}
}));

export default function Layouts(props) {
	const classes = useStyles();
	const {
		toggleMiniSidebar,
		miniSidebarStatus,
		darkModeStatus,
		toggleDarkMode,
		rtlStatus,
		toggleRtl,
		toggleHorizontalMenu,
		horizontalMenuStatus,
		chooseTheme
	} = props;

	return (
		<div className={`${classes.sidebarWrap}`}>
			<List 
				className="theme-layout"
				subheader={
					<ListSubheader>
						<Box color="text.primary" display="flex" alignItems="center" justifyContent="space-between">
							App Layout
							<Tooltip title="Hulk coming with various layouts. You can customize it as per your requirements. To see the demo please check the options below" placement="bottom">
								<Box component="span" className="material-icons" color="text.secondary" fontSize={20}>help_outline</Box>
							</Tooltip>
						</Box>
					</ListSubheader>
				}
			>
				<ListItem button className="opt-horizontal-menu res-hide">
					<ListItemText primary='Horizontal Menu' secondary="Top header layout" />
					<ListItemSecondaryAction className="res-hide">
						<Box display="flex" alignItems="center">
							<Switch
								size="small"
								edge="end"
								color="primary"
								onChange={(e) => toggleHorizontalMenu(e.target.checked)}
								checked={horizontalMenuStatus}
							/>
							<Box pl={1} fontSize={14}>{horizontalMenuStatus ?
								'On'
								:
								'Off'
							}
							</Box>
						</Box>
					</ListItemSecondaryAction>
				</ListItem>
				<ListItem button className="opt-icon-menu res-hide">
					<ListItemText primary='Mini Sidebar' secondary="Sidebar in minified" />
					<ListItemSecondaryAction className="res-hide">
						<Box display="flex" alignItems="center">
							<Switch
								size="small"
								edge="end"
								color="primary"
								onChange={(e) => toggleMiniSidebar(e.target.checked)}
								checked={miniSidebarStatus}
							/>
							<Box pl={1} fontSize={14}>{miniSidebarStatus ?
								'On'
								:
								'Off'
							}
							</Box>
						</Box>
					</ListItemSecondaryAction>
				</ListItem>
				<ListItem button>
					<ListItemText primary='RTL' secondary="Choose right to left layout" />
					<ListItemSecondaryAction>
						<Box display="flex" alignItems="center">
							<Switch
								size="small"
								edge="end"
								color="primary"
								onChange={(e) => toggleRtl(e.target.checked)}
								checked={rtlStatus}
							/>
							<Box pl={1} fontSize={14}>{rtlStatus ?
								'On'
								:
								'Off'
							}
							</Box>
						</Box>
					</ListItemSecondaryAction>
				</ListItem>
				
			</List>
			<List 
				className="theme-layout"
				subheader={
					<ListSubheader>
						<Box color="text.primary" display="flex" alignItems="center" justifyContent="space-between">
							Choose Theme Mode
						<Tooltip title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." placement="bottom">
								<Box component="span" className="material-icons" color="text.secondary" fontSize={20}>help_outline</Box>
							</Tooltip>
						</Box>
					</ListSubheader>
				}
			>
				<ListItem button>
					<ListItemText primary='Dark Mode' secondary="Dark theme layout" />
					<ListItemSecondaryAction>
						<Box display="flex" alignItems="center">
							<Switch
								size="small"
								edge="end"
								color="primary"
								onChange={(e) => toggleDarkMode(e.target.checked)}
								checked={darkModeStatus}
							/>
							<Box pl={1} fontSize={14}>{darkModeStatus ?
								'On'
								:
								'Off'
							}
							</Box>
						</Box>
					</ListItemSecondaryAction>
				</ListItem>
			</List>
			<List 
				className="theme-layout"
				subheader={
					<ListSubheader>
						<Box color="text.primary" display="flex" alignItems="center" justifyContent="space-between">
							Choose Theme Color
							<Tooltip title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." placement="bottom">
								<Box component="span" className="material-icons" color="text.secondary" fontSize={20}>help_outline</Box>
							</Tooltip>
						</Box>
					</ListSubheader>
				}
			>
				<ListItem className={classes.pad0}>
					<Box px={2} py={3}>
						<Button className={classes.btn} style={{backgroundColor:'#4d7df2'}} variant="contained" onClick={() => chooseTheme("light-theme")}>T 1</Button>
						<Button className={classes.btn} style={{backgroundColor:'#028484'}} variant="contained" onClick={() => chooseTheme("teal-theme")}>T 2</Button>
						<Button className={classes.btn} style={{backgroundColor:'#53419a'}} variant="contained" onClick={() => chooseTheme("violet-theme")}>T 3</Button>
					</Box>
				</ListItem>
			</List>
		</div>
	);
}
