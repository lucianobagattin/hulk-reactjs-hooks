/*eslint-disable*/
/**
 * Chat Page
 */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { List, Box, ListItem, ListItemText, Collapse, Menu, MenuItem, Button, Hidden} from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';

// Redux action
import { CHAT_CONVERSATIONS_TYPE} from "actions/Types";
import ChatLayout from './components/ChatLayout';

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
		[theme.breakpoints.down('md')]: {
			display: "block",
		}
	},
	chatLayout: {
		width: 'calc(100% - 200px)',
		[theme.breakpoints.down('md')]: {
			width: '100%',
		}
	},
	list: {
		width: 200,
		zIndex: 2,
		boxShadow: 'rgba(0, 0, 0, 0.09) 1px 1px 8px',
		[theme.breakpoints.down('md')]: {
			width: '100%',
		}
	},
	navWrap:{
		[theme.breakpoints.down('md')]: {
			display:'inline-flex',
			'& >div >div:nth-child(1)':{
				whiteSpace:'nowrap',
			}
		}
	},
	nested: {
		paddingLeft: theme.spacing(4),
		color:theme.palette.text.secondary,
	},
	countBadge: {
		height: 20,
		fontSize: 11,
		lineHeight: 1.6,
		minWidth: 20,
		textAlign: "center",
		padding: 2,
		borderRadius: '100%',
		marginLeft:10,
	},
	btn:{
		'& svg':{
			fontSize:'1.3rem',
			marginLeft:5,
		}
	},
	active: {
		color:theme.palette.primary.main,
		'& .MuiListItemText-primary':{
			color:theme.palette.primary.main
		}
	},
	activeNested:{
		color:theme.palette.primary.main,
		'& .MuiListItemText-primary':{
			color:theme.palette.primary.main
		}
	}
}));

function ChatList(props){
	const classes = useStyles();
	const [btnType,setBtnType] = useState('all');
	const [open,setOpen] = useState(true);
	const [anchorEl,setAnchorEl] = useState(null);
	const [mentions,setMentions] = useState('');
	const [recent,setRecent] = useState('');
	const [unread,setUnread] = useState('');
	const [favourite,setFavourite] = useState('');
	const chatAppReducer = useSelector(state => state.chatAppReducer);

	const dispatch = useDispatch();
	const allChatUsers = chatAppReducer.allChatUsers;
	useEffect( () => {
		let mentionsCount = allChatUsers.filter((user)=>{
			return user.mentions == true
		})
		setMentions(mentionsCount.length);

		let recentCount = allChatUsers.filter((user)=>{
			return user.recent == true
		})
		setRecent(recentCount.length);

		let unreadCount = allChatUsers.filter((user)=>{
			return user.unread == true
		})
		setUnread(unreadCount.length);

		let favouriteCount = allChatUsers.filter((user)=>{
			return user.favourite == true
		})
		setFavourite(favouriteCount.length);
	});

	const menuClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
  
	const handleClose = (type) => {
		setAnchorEl(null);
		setBtnType(type);
		setConverTypes(type);
	};

	const handleClick = () => {
		setOpen(!open);
	}

	const setConverTypes = (type) => {
		setBtnType(type);
		dispatch({ type: CHAT_CONVERSATIONS_TYPE, payload: type });
	}

	return (
		<div className="hk-chat-wrap">
			<Box className={classes.root}>
				<Box className={classes.list}>
					<Box p={{ xs:'5px 15px', lg:0 }}>
						<Hidden lgUp>
							<Button className={classes.btn} aria-controls="fade-menu" aria-haspopup="true" onClick={menuClick}>
								{btnType}
								{anchorEl ? <ExpandLess /> : <ExpandMore />}
							</Button>
							<Menu
								id="simple-menu"
								anchorEl={anchorEl}
								keepMounted
								open={Boolean(anchorEl)}
								onClose={() => handleClose()}
							>
								<MenuItem onClick={() => handleClose('all')}>All</MenuItem>
								<MenuItem onClick={() => handleClose('mentions')}>Mentions</MenuItem>
								<MenuItem onClick={() => handleClose('recent')}>Recent</MenuItem>
								<MenuItem onClick={() => handleClose('unread')}>Unread</MenuItem>
								<MenuItem onClick={() => handleClose('favourite')}>Your Favourite</MenuItem>
							</Menu>
						</Hidden>
						<Hidden mdDown>
							<List
								className={`nav-wrap ${classes.navWrap}`}
								component="nav"
								aria-labelledby="nested-list-subheader"
							>
								<ListItem
									className={clsx({
										[classes.active]: btnType == 'all' || btnType == 'mentions' || btnType == 'recent' ,
									}, 'chat-type')}
									button onClick={() => handleClick()}>
									<ListItemText primary="Conversations" />
									{open ? <ExpandLess /> : <ExpandMore />}
								</ListItem>
								<Collapse in={open} timeout="auto" unmountOnExit>
									<List component="div" disablePadding>
										<ListItem 
											button 
											onClick={() => setConverTypes('all')} 
											className={clsx(classes.nested, {
												[classes.activeNested]: btnType == 'all',
											})}
										>
											{
												btnType == 'all' ?
												<Box pr={1} fontSize={18} className="icon fas fa-dot-circle"></Box>
												:
												<Box pr={1} fontSize={18} className="icon far fa-dot-circle"></Box>
											}
											<ListItemText primary="All" />
											<Box className={classes.countBadge} bgcolor="primary.main" color="primary.contrastText">{allChatUsers.length}</Box>
										</ListItem>
										<ListItem 
											className={clsx(classes.nested, {
												[classes.activeNested]: btnType == 'mentions',
											})}
											button onClick={() => setConverTypes('mentions')}
										>
											{
												btnType == 'mentions' ?
												<Box pr={1} fontSize={18} className="icon fas fa-dot-circle"></Box>
												:
												<Box pr={1} fontSize={18} className="icon far fa-dot-circle"></Box>
											}
											<ListItemText primary="Mentions" />
											<Box className={classes.countBadge} bgcolor="primary.main" color="primary.contrastText">{mentions}</Box>
										</ListItem>
										<ListItem 
											className={clsx(classes.nested, {
												[classes.activeNested]: btnType == 'recent',
											})}
											button onClick={() => setConverTypes('recent')}
										>
											{
												btnType == 'recent' ?
												<Box pr={1} fontSize={18} className="icon fas fa-dot-circle"></Box>
												:
												<Box pr={1} fontSize={18} className="icon far fa-dot-circle"></Box>
											}
											<ListItemText primary="Recent" />
											<Box className={classes.countBadge} bgcolor="primary.main" color="primary.contrastText">{recent}</Box>
										</ListItem>
									</List>
								</Collapse>
								<ListItem 
									className={clsx({
										[classes.active]: btnType == 'unread',
									})}
									button onClick={() => setConverTypes('unread')}>
									<ListItemText primary="Unread" />
									{unread > 0 ?
										<Box className={classes.countBadge} bgcolor="primary.main" color="primary.contrastText">{unread}</Box>
										:
										null
									}
									</ListItem>
								<ListItem 
									className={clsx( {
										[classes.active]: btnType == 'favourite',
									})}
									button onClick={() => setConverTypes('favourite')}>

									<ListItemText primary="Your Favourite" />
									<Box className={classes.countBadge} bgcolor="primary.main" color="primary.contrastText">{favourite}</Box>
								</ListItem>
							</List>
						</Hidden>
					</Box>
				</Box>
				<Box className={classes.chatLayout}>
					<ChatLayout />
				</Box>
			</Box>
		</div>
	);
}


export default ChatList;