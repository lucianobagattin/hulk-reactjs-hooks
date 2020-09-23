/**
 * Customizer
 */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Tooltip, Drawer, Button } from '@material-ui/core';

// Component
import Layouts from './Components/Layouts';

const useStyles = makeStyles(theme => ({
	drawer: {
		width: 260,
		flexShrink: 0,
	},
	CustomezerBtn: {
		fontSize: '1.125rem',
		height: '2.625rem',
		minWidth: '2.625rem',
		borderRadius: 0,
		padding: 0,
		zIndex: 99,
		right: -1,
		position: 'fixed',
		top: 150
	},
	// #262d37
	drawerWrap:{
		'& .customizer-wrap':{
			backgroundColor:theme.palette.background.paper,
		}
	}
}));

export default function CustomezerDrawer(props) {
	const classes = useStyles();
	const [state, setState] = useState({
		right: false,
	});

   const { toggleSidebar, toggleMiniSidebar, open, miniSidebarStatus, darkModeStatus, toggleDarkMode, rtlStatus, toggleRtl, toggleHorizontalMenu,
		horizontalMenuStatus, chooseTheme } = props;
	const toggleDrawer = (side, open) => event => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}
		setState({ ...state, [side]: open });
	};

	return (
		<div className={classes.drawerWrap}>
			<Tooltip title="Customization" placement="top">
				<Button
					variant="contained"
					aria-label="settings"
					className={`custom-btn ${classes.CustomezerBtn}`}
					onClick={toggleDrawer('right', true)}
					color="primary"
				>
					<i className={`material-icons-outlined  ${props.iconColor}`}>settings</i>
				</Button>
			</Tooltip>
			<Drawer
				className={`${classes.drawer} ${classes.drawerWrap}`}
				anchor="right"
				open={state.right}
				onClose={toggleDrawer('right', false)}
			>
				<div className="customizer-wrap">
					<Layouts
						openStatus={open}
						toggleSidebar={toggleSidebar}
						toggleMiniSidebar={toggleMiniSidebar}
						miniSidebarStatus={miniSidebarStatus}
						darkModeStatus={darkModeStatus}
						toggleDarkMode={toggleDarkMode}
						rtlStatus={rtlStatus}
						toggleRtl={toggleRtl}
						toggleHorizontalMenu={toggleHorizontalMenu}
						horizontalMenuStatus={horizontalMenuStatus}
						chooseTheme={chooseTheme}
					/>
				</div>
			</Drawer>
		</div>
	);
}
