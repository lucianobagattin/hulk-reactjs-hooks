/*
 * Notification Sidebar
 */
import React from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Tooltip, Drawer, Button } from '@material-ui/core';

// Component
import Tabs from './Components/Tabs';

// Actions
import { notificationSidebarAction } from 'actions';

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
		top: 200
	}
})); 

function NotificationSidebar(props) {

   /**
    * function for toggle sidebar
    */
   const classes = useStyles();
   const settings = useSelector(state => state.settings);
	const dispatch = useDispatch();
	const notificationSidebar = settings.notificationSidebar;
	const toggleDrawer = () => event => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}
		const val = !notificationSidebar;
		dispatch(notificationSidebarAction(val));
	};

	return (
		<div>
			<Tooltip title="Notifications" placement="bottom">
				<Button
					variant="contained"
					aria-label="settings"
					className={`custom-btn ${classes.CustomezerBtn}`}
					onClick={toggleDrawer()}
					color="primary"
				>
					<i className={`material-icons-outlined ${props.iconColor}`}>help_outline</i>
				</Button>
			</Tooltip>
			<Drawer
				className={classes.drawer}
				anchor="right"
				open={notificationSidebar}
				onClose={toggleDrawer()}
			>
				<Tabs/>
			</Drawer>
		</div>
	);
}


export default NotificationSidebar;