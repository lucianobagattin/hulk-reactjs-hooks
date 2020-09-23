import React, { useState }from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Hidden, Drawer, Box, IconButton }from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

// Component
import ChatArea from './ChatArea';
import UserList from './UserList';

const drawerWidth = 300;

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
		[theme.breakpoints.up('lg')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	menuButton: {
		marginLeft: '18px  !important',
		position: 'absolute',
		top: 18,
		[theme.breakpoints.up('lg')]: {
			display: 'none',
		},
		[theme.breakpoints.down('sm')]: {
			top:11,
			marginLeft:'14px !important',
			'& svg':{
				fontSize:'1.4rem'
			}
		},
		[theme.breakpoints.down('xs')]: {
			marginLeft:'14px !important',
			'& svg':{
				fontSize:'1.25rem'
			}
		},
	},
	drawerPaper: {
		width: drawerWidth,
		borderRight: 0,
		backgroundColor: theme.palette.background.default,
		[theme.breakpoints.up('lg')]: {
			position: 'relative',
		},
	},
	content: {
		position: 'relative',
		flexGrow: 1,
	},
	contentWrap: {
		position: 'relative',
		[theme.breakpoints.down('md')]: {
			'& .rct-scroll':{
				height: 'calc(100vh - 406px) !important',
			}
		},
		[theme.breakpoints.down('sm')]: {
			'& .rct-scroll':{
				height: 'calc(100vh - 324px) !important',
			}
		},
		[theme.breakpoints.down('xs')]: {
			'& .rct-scroll':{
				height: 'calc(100vh - 302px) !important',
			}
		},
	}
}));

function ChatLayout(props) {
	const { container } = props;
	const classes = useStyles();
	const theme = useTheme();
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<Box className="chat-sidebar" bgcolor="background.default">
			<UserList />
		</Box>
	);

	return (
		<div className={classes.root}>
			<nav className={classes.drawer} aria-label="mailbox folders">
				<Hidden lgUp implementation="css">
					<Drawer
						container={container}
						variant="temporary"
						anchor={theme.direction === 'rtl' ? 'right' : 'left'}
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: `chat-drawer ${classes.drawerPaper}`,
						}}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
					>
						{drawer}
					</Drawer>
				</Hidden>
				<Hidden mdDown implementation="css">
					<Drawer
						classes={{
							paper: classes.drawerPaper,
						}}
						variant="permanent"
						open
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
						className={`chat-menu-icon ${classes.menuButton}`}
					>
						<MenuIcon />
					</IconButton>
					<div>
						<ChatArea />
					</div>
				</Box>
			</main>
		</div>
	);
}

export default ChatLayout;