/**
 * Email Page
*/
import React, { useEffect,useState } from 'react';
import { useDispatch  } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect, Route, Switch} from 'react-router-dom';
import { Box, Drawer, IconButton, Hidden } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { getInbox } from 'actions';
import Folders from './components/folder';
import EmailSidebar from './components/sidebar'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		height: 'auto',
		zIndex: 1,
		overflow: 'hidden',
		position: 'relative',
		display: 'flex',
		width: '100%',
	},
	drawer: {
		backgroundColor:theme.palette.common.white,
		[theme.breakpoints.up('md')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	menuButton: {
		marginLeft:'7px  !important',
		position: 'absolute',
		top: 25,
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	drawerPaper: {
		width: drawerWidth,
		borderRight:0,
		[theme.breakpoints.up('md')]: {
			position: 'relative',
		},
	},
	content: {
		flexGrow: 1,
		borderLeft:`1px solid ${theme.palette.divider}`,
		backgroundColor: theme.palette.background.paper,
	},
	contentWrap:{
		position:'relative',
	}
}));

const drawer = (
	<div>
	  <EmailSidebar />
	</div>
);

function Email(props){
	const classes = useStyles();
	const [mobileOpen,setMobileOpen] = useState(false);
	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen)
	};

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getInbox());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[]);

	const { match } = props;
	return (
		<Box className="hk-mail-wrapper" >
			<div className={classes.root}>
				<nav className={classes.drawer} aria-label="mailbox folders">
					<Hidden mdUp implementation="css">
						<Drawer
							variant="temporary"
							anchor='left'
							open={mobileOpen}
							onClose={handleDrawerToggle}
							classes={{
								paper: classes.drawerPaper,
							}}
							ModalProps={{
								keepMounted: true,   // Better open performance on mobile.
							}}
						>
							<div>
								<EmailSidebar  closeEmailSidebar={handleDrawerToggle} />
							</div>
						</Drawer>
					</Hidden>
					<Hidden smDown implementation="css">
						<Drawer
							variant="permanent"
							open
							classes={{
								paper: classes.drawerPaper,
							}}								
						>
							{drawer}
						</Drawer>
					</Hidden>
				</nav>
				<main className={classes.content}>
					<Box height="100%" className={classes.contentWrap}>
						<IconButton
							size="small"
							aria-label="open drawer"
							edge="start"
							onClick={handleDrawerToggle}
							className={`email-btn ${classes.menuButton}`}
						>
							<MenuIcon />
						</IconButton>
						<div className="overview-section">
							<Switch>
								<Redirect exact from={`${match.url}/`} to={`${match.url}/folder`} />
								<Route path={`${match.url}/folder`} component={Folders} />
							</Switch>
						</div>
					</Box>
				</main>
			</div>
		</Box>
	);
}

export default Email;