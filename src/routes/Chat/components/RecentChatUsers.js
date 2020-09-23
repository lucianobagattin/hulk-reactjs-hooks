/*
 *
 * Recent Chat Users
 */
import React,{useEffect} from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core';

import { List, ListItem, Badge, Box, Avatar } from '@material-ui/core';
import clsx from 'clsx';

// helpers
import { textTruncate } from 'helpers';

// actions
import { CHAT_WITH_SELECTED_USER, GET_RECENT_CHAT_USERS ,GET_DEFAULT_SELECTED_USER} from "actions/Types";
const StyledBadge = withStyles(theme => ({
	badge: {
		backgroundColor: theme.palette.success.main,
		color: theme.palette.success.main,
		boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
		height:15,
		minWidth:15,
		borderRadius:'100%',
		'&::after': {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			borderRadius: '50%',
			animation: '$ripple 1.2s infinite ease-in-out',
			border: '1px solid currentColor',
			content: '""',
		},
		'@media (max-width:1560px)': {
			height:9,
			minWidth:9,
		},
	},
	'@keyframes ripple': {
		'0%': {
			transform: 'scale(.8)',
			opacity: 1,
		},
		'100%': {
			transform: 'scale(2.4)',
			opacity: 0,
		},
	},
}))(Badge);

const useStyles = makeStyles(theme => ({
	root: {
		paddingTop: 0
	},
	large: {
		width: theme.spacing(9),
		height: theme.spacing(9),
		'@media (max-width:1560px)': {
			width: theme.spacing(7),
		height: theme.spacing(7),
		},
	},
	badgeOffline: {
		'& >span':{
			height:15,
			minWidth:15,
			borderRadius:'100%',
			boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
			'@media (max-width:1560px)': {
				height:9,
				minWidth:9,
			},
		}
	},
	chatList: {
		cursor:'pointer',
		padding: '14px 16px',
		borderBottom: `1px solid ${theme.palette.divider}`,
		transition:'all 0.3s ease-out',
		'&:hover':{
			backgroundColor: theme.palette.background.paper,
		},
		'&:last-child': {
			borderBottom: 0
		},
		'& .MuiBadge-colorPrimary': {
			backgroundColor: '#43a047'
		}
	},
	activeList: {
		backgroundColor: theme.palette.background.paper
	},
	contentWrap:{
		width: 'calc(100% - 90px)',
		'@media (max-width:1560px)': {
			width: 'calc(100% - 70px)'
		},
	},
	thumbWrap:{
		width: 90,
		'@media (max-width:1560px)': {
			width: 70,
		},
	}
}));

function RecentChatUsers(props) {
	const classes = useStyles();
	const chatAppReducer = useSelector(state => state.chatAppReducer);

	const dispatch = useDispatch();
	const recentChatUsers = chatAppReducer.recentChatUsers;
	const selectedUser = chatAppReducer.selectedUser;

	useEffect( ()=> {
		fetchRecentChatUsers();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])
	/**
	 * Fetch Recent User
	 */
	const fetchRecentChatUsers = () => {
		dispatch({ type: GET_RECENT_CHAT_USERS });
		dispatch({ type: GET_DEFAULT_SELECTED_USER });
	}

	/**
	 * Swicth Chat With User
	 * @param {*object} user
	 */
	const switchChatWithUser = (user) => {
		dispatch({ type: CHAT_WITH_SELECTED_USER, payload: user });
	}

	if (recentChatUsers.length === 0) {
		return (
			<div className="no-found-user-wrap">
				<h4>No User Found</h4>
			</div>
		);
	}
	return (
		<List className={classes.root}>
			{recentChatUsers.map((user, key) => (
				<ListItem key={key}
					onClick={() => switchChatWithUser(user)}
					className={clsx(classes.chatList, {
						[classes.activeList]: (selectedUser && selectedUser.id === user.id),
					})}
				>
					<Box className={classes.thumbWrap}>
						{user.isActive ?
							<StyledBadge
								overlap="circle"
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								variant="dot"
							>
								<Avatar className={classes.large} src={require(`assets/Images/avatars/${user.photo_url}`)} alt="user-profile" />
							</StyledBadge>
							:
							<Badge color="error" className={classes.badgeOffline} overlap="circle" badgeContent=" ">
								<Avatar className={classes.large} src={require(`assets/Images/avatars/${user.photo_url}`)} alt="user-profile" />
							</Badge>
						}
					</Box>
					<Box className={classes.contentWrap}>
						<Box mb="4px" display="flex" justifyContent="space-between" alignItems="center">
							<Box fontWeight="500" fontSize="subtitle1.fontSize" color="text.primary">{user.first_name}&nbsp;{user.last_name}</Box>
							<Box component="span" fontSize="body1.fontSize" color="text.secondary">6hrs</Box>
						</Box>
						<Box component="span" fontSize="subtitle2.fontSize" color="text.secondary">{textTruncate(user.last_chat, 22)}</Box>
					</Box>
				</ListItem>
			))}
		</List>
	);
}



export default (RecentChatUsers);