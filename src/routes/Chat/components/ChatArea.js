/**
 * Chat Area Component
 */
import React, { Fragment ,useRef, useState} from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import MessageBlock from './MessageBlock';
import { Scrollbars } from 'react-custom-scrollbars';
import { MenuItem, FormGroup, Input, Button, IconButton, Tooltip, Menu, Avatar, Box, Typography, Divider } from '@material-ui/core';

// actions
import { SEND_MESSAGE_TO_USER} from "actions/Types";

const botMsg = [
	"Howdy",
	"Bye",
	"I'm good. you say?",
	"Okay"
];

const useStyles = makeStyles(theme => ({
	margin: {
		marginRight: 10,
		[theme.breakpoints.down('sm')]: {
			marginRight: 5,
		}
	},
	chatHead: {
		boxShadow: '0 2px 8px 0 rgba(0,0,0,.09)',
		[theme.breakpoints.down('xs')]: {
			'& .options-btn .material-icons': {
				fontSize: 19,
			}
		},
	},
	chatBody: {
		'& .user-thumb': {
			width: 64,
			height: 64,
			'@media (max-width:1560px)': {
				width: 54,
				height: 54,
			},
			[theme.breakpoints.down('xs')]: {
				width: 40,
				height: 40
			},
		}
	},
	pad10: {
		padding: 10,
		[theme.breakpoints.down('sm')]: {
			padding: 4,
		},
	},
	chatFooter: {
		[theme.breakpoints.down('xs')]: {
			'& .bot-button button': {
				padding: '2px 7px',
				minWidth: 'auto',
			}
		},
	},
	sendBtn: {
		border: '3px solid',
		borderColor: theme.palette.primary.main,
		padding: 10,
		[theme.breakpoints.down('sm')]: {
			padding: 8,
		},
	},
	shadow: {
		boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
	}
}));

function ChatArea(props){
	const classes = useStyles();
	const [message,setMessage] = useState('');
	const [anchorEl,setAnchorEl] = useState(null);
	const [chatOptions] = useState([
			'Mute Notifications',
			'Block',
			'Clear Chat',
			'Send Contact',
		]);
	const [typing,setTyping] = useState(false);
	const [randomMessages] = useState([
			"How are you?",
			"We are glad to know",
			"How can I help you?",
			"We are happy to help you"
		]);
	const chatAppReducer = useSelector(state => state.chatAppReducer);

	const dispatch = useDispatch();
	const selectedUser = chatAppReducer.selectedUser;
	const admin_photo_url = chatAppReducer.admin_photo_url;
	const chatScroll = useRef();

	const scrollToBottom = () => {
	    chatScroll.current.scrollToBottom({ behavior: "smooth" })
	}

	const handleClose = () => {
		setAnchorEl(null);
	};

	const chatOptionsHandler = event => {
		setAnchorEl(event.currentTarget);
	}
	const onbotmsg = (msg) => {
		if (msg !== '') {
			let data = {
				user: chatAppReducer.selectedUser,
				message: msg,
				isAdmin: true,
				time: 'Just Now'
			}
			dispatch({ type: SEND_MESSAGE_TO_USER, payload: data });
			setMessage('');
			setTimeout(() => {
				scrollToBottom();
			}, 200);
			setTimeout(() => {
				setTyping(true);
				scrollToBottom();
			}, 1000);
			setTimeout(() => {
				setTyping(false);
				getReply();
			}, 3000);
		}
	}

	const sendMsgOnEnter = (event) => {
		if (event.key === 'Enter') {
			onSubmitMessage(event);
		}
	}

	const onSubmitMessage = (event) => {
		if (message !== '') {
			let data = {
				user: chatAppReducer.selectedUser,
				message: message,
				isAdmin: true,
				time: 'Just Now'
			}
			dispatch({ type: SEND_MESSAGE_TO_USER, payload: data });
			setMessage('');
			setTimeout(() => {
				scrollToBottom();
			}, 200);
			setTimeout(() => {
				setTyping(true);
				scrollToBottom();
			}, 1000);
			setTimeout(() => {
				setTyping(false);
				getReply();
			}, 3000);
		}
	}

	const getReply = () => {
		let randomMessage = Math.floor(
			Math.random() * randomMessages.length
		);
		let reply = {
			id: new Date().getTime(),
			message: randomMessages[randomMessage],
			user: chatAppReducer.selectedUser,
			isAdmin: false,
			time: "Just Now"
		};

		dispatch({ type: SEND_MESSAGE_TO_USER, payload: reply });
		scrollToBottom();
	}
		
		return (
			<Fragment>
				<Box className="chat-main-body" bgcolor="background.paper">
					<Box className={`button-wrap ${classes.chatHead}`}>
						<Box pl={{ xs: '50px', md: 3 }} pr='5px' py={{ xs: '10px', md: '20px' }} display="flex" alignItems="center">
							<Box style={{ width: 'calc(100% - 150px)' }} textAlign={{ xs: 'left', md: 'center' }}>
								<Typography variant="h6">{selectedUser.first_name}&nbsp;{selectedUser.last_name}</Typography>
							</Box>
							<Box className='options-btn' width={150} textAlign="right">
								<IconButton className={classes.margin} size="small">
									<Box component="span" className="material-icons">star_border</Box>
								</IconButton>
								<IconButton className={classes.margin} size="small">
									<Box component="span" className="material-icons-outlined">videocam</Box>
								</IconButton>
								<IconButton size="small" style={{ marginRight: "4px" }}>
									<Box component="span" className="material-icons-outlined" style={{ transform: 'rotate(270deg)' }}>call</Box>
								</IconButton>
								<IconButton size="small" aria-owns={anchorEl ? 'simple-menu' : null} aria-haspopup="true" onClick={chatOptionsHandler} >
									<Box component="span" className="material-icons">more_vert</Box>
								</IconButton>
								<Menu
									id="simple-menu"
									anchorEl={anchorEl}
									open={Boolean(anchorEl)}
									onClose={handleClose}
								>
									{chatOptions.map((option, index) => (
										<MenuItem key={index} onClick={handleClose}>{option}</MenuItem>
									))}
								</Menu>
							</Box>
						</Box>
					</Box>
					<Scrollbars
						className="rct-scroll"
						autoHide
						ref={chatScroll}
						style={{ height: 'calc(100vh - 350px)' }}
					>
						<Box className={classes.chatBody} pt={3}>
							{selectedUser.previousChats && selectedUser.previousChats.map((previousChat, index) => (
								<Box key={index}>
									<MessageBlock
										even={!previousChat.isAdmin}
										selectedUserPhotoUrl={selectedUser.photo_url}
										data={previousChat}
										adminPhotoUrl={admin_photo_url}
										textBlock={classes.shadow}
									/>
								</Box>
							))}
							{typing ?
								<Box display="flex" alignItems="flex-start" p="5px  20px">
									<Box pr={2} className="thumb-wrap">
										<Avatar className="user-thumb" src={require(`assets/Images/avatars/${selectedUser.photo_url}`)} />
									</Box>
									<Box pt="5px">
										<Box mb="5px" px={{xs:1, sm:2}} py={{xs:'4px', sm:1}} borderRadius="borderRadius" className={`admin-content ${classes.shadow}`}>
											<Typography variant="body2">Typing...</Typography>
										</Box>
									</Box>
								</Box>
								:
								null
							}
						</Box>
					</Scrollbars>
					<div className={classes.chatFooter}>
						<Box p={{ xs: '10px 20px', md: '20px' }} className="bot-button">
							<Box mb={1} fontSize="subtitle2.fontSize" color="text.primary">Bot Suggestions</Box>
							{botMsg.map((item, index) => {
								return (
									<Fragment key={index}>
										<Button size="small"
											className={`${classes.margin} primary-bg-btn`} variant="outlined" color="primary" onClick={(event) => onbotmsg(item)}>
											{item}
										</Button>
									</Fragment>
								)
							})}
						</Box>
						<Divider />
						<Box p={{ xs: '10px 20px', md: '20px' }}>
							<Box display="flex" alignItems="center" >
								<Box style={{ width: 'calc(100% - 60px' }}>
									<Box className="mr-3 w-100">
										<FormGroup className="mb-0">
											<Input
												type="text"
												id="search-msg"
												placeholder="Type your message"
												value={message}
												className="msg-input"
												onChange={(event) => setMessage(event.target.value)}
												onKeyPress={(event) => sendMsgOnEnter(event)}
											/>
										</FormGroup>
									</Box>
								</Box>
								<Box style={{ width: 60 }} textAlign="right" className="send-icon">
									<Tooltip title="Send Mail" placement="bottom">
										<IconButton className={classes.sendBtn} onClick={(event) => onSubmitMessage(event)}>
											<Box component="span" color="primary.main" fontSize="18px" className="fas fa-paper-plane"></Box>
										</IconButton>
									</Tooltip>
								</Box>
							</Box>
							<Box display="flex" alignItems="center">
								<Tooltip title="Attachment" placement="bottom">
									<IconButton className={classes.pad10}>
										<Box component="span" fontSize={{ xs: 14, md: 18 }} color="text.secondary" className="fas fa-paperclip"></Box>
									</IconButton>
								</Tooltip>
								<Tooltip title="Smiley" placement="bottom">
									<IconButton className={classes.pad10}>
										<Box component="span" fontSize={{ xs: 14, md: 18 }} color="text.secondary" className="far fa-laugh"></Box>
									</IconButton>
								</Tooltip>
								<Tooltip title="Insert Image" placement="bottom">
									<IconButton className={classes.pad10}>
										<Box component="span" fontSize={{ xs: 14, md: 18 }} color="text.secondary" className="far fa-image"></Box>
									</IconButton>
								</Tooltip>
							</Box>
						</Box>
					</div>
				</Box>
			</Fragment>
		);
}


export default ChatArea;