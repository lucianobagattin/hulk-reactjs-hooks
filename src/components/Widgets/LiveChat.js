/**
 * Live Chat Support
 */
import React, { useState, useRef, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormGroup, Input, List, ListItem, Avatar, Box, Typography, Menu, MenuItem, IconButton } from '@material-ui/core';

// Component
import { Scrollbars } from 'react-custom-scrollbars';

const useStyles = makeStyles(theme => ({
	shadow: {
		boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
	},
	navList: {
		padding: 0,
		display: 'block',
	},
	btnItem:{
		[theme.breakpoints.down('xs')]: {
			padding:5
		}
	},
	sendBtn: {
		border: '3px solid',
		borderColor: theme.palette.primary.main,
		padding: 10,
	}
}));

function LiveChatSupport() {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = useState(null);
	const [sendMsg,setSendMsg] = useState('');
	const [messages,setMessages] = useState([
			{
				text: "A small river named duden flows by their place and supplies it with the necessary",
				role: "client",
				userName: "Max Wells",
				time: "5 Min Ago",
				image: 'user-2.jpg'
			},
			{
				text: "You better believe it!",
				role: "admin",
				adminName: "Andre Adkins",
				time: "4 Min Ago",
				image: 'user-3.jpg'
			},
			{
				text: "A small river named duden flows by their place and supplies it with the necessary",
				role: "client",
				userName: "Max Wells",
				time: "5 Min Ago",
				image: 'user-4.jpg'
			},
			{
				text: "Vivamus aliquet ligula augue, et suscipit mauris sollicitudin",
				role: "admin",
				adminName: "Andre Adkins",
				time: "2 Min Ago",
				image: 'user-5.jpg'
			},
		]);
	const chatScroll = useRef();
	const [randomMessages] = useState([
			"How are you?",
			"We are glad to know",
			"How can I help you?",
			"We are happy to help you"
		]);
	const [typing,setTyping] = useState(false);


	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
 
	const handleClose = () => {
		setAnchorEl(null);
	};

	const sendMsgOnEnter = (event) => {
		if(event.key === 'Enter'){
			onSubmitMessage(event);		
		}
	}

	const onSubmitMessage = (event) => {
		// event.preventDefault();
		if (sendMsg !== '') {
			messages.push({
				text: sendMsg,
				role: 'admin',
				time: 'Just now',
				image: 'user-1.jpg'
			})
			setSendMsg('');
			setTimeout(() => {
            chatScroll.current.scrollToBottom();
			}, 200);

			setTimeout(() => {
				setTyping(true);
            chatScroll.current.scrollToBottom();
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
		setMessages([
				...messages,
				{
					text: randomMessages[randomMessage],
					role: 'client',
					time: 'Just now',
					image: 'user-2.jpg'
				}
			]
		);

		setTimeout(() => {
			chatScroll.current.scrollToBottom();
		}, 200);
	}

	return (
		<Box className="live-support-wrap" position="relative">
			<Box className="button-wrap" position="absolute" top={{ xs:'-41px', sm:'-53px' }} right={-10} display="flex" justifyContent="flex-end" alignItems="center">
				<IconButton className={classes.btnItem}>
					<Box component="span" color="primary.main" fontSize={{ xs:'20px', sm:'24px' }} className="material-icons">videocam</Box>
				</IconButton>
				<IconButton className={classes.btnItem}>
					<Box component="span" color="primary.main" fontSize={{ xs:'20px', sm:'24px' }}  className="material-icons">phone</Box>
				</IconButton>
				<IconButton  className={classes.btnItem} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
					<Box component="span" fontSize={{ xs:'20px', sm:'24px' }} color="text.secondary" className="material-icons">more_vert</Box>
				</IconButton>
				<Menu
					id="simple-menu"
					anchorEl={anchorEl}
					keepMounted
					open={Boolean(anchorEl)}
					onClose={handleClose}
				>
					<MenuItem onClick={handleClose}>Clear Chat</MenuItem>
					<MenuItem onClick={handleClose}>Mute Notifications</MenuItem>
					<MenuItem onClick={handleClose}>Block</MenuItem>
				</Menu>
			</Box>
			<Box pt={2}>
				<Scrollbars
					className="rct-scroll"
					autoHide
					ref={chatScroll}
					style={{ height: '368px' }}
				>
					<List className="list-unstyled p-0 live-chat-wrap">
						{messages.map((msg, i) => (
							<ListItem key={i} className={classes.navList}>
								{msg.role === "client" ?
									<Box display="flex" alignItems="flex-start" mb="5px" p="5px 10px 5px  0px">
										<Box pr={2} className="user-thumb">
											<Avatar alt="user-profile" src={require(`assets/Images/avatars/${msg.image}`)} />
										</Box>
										<Box>
											<Box mb="5px" p={1} borderRadius="borderRadius" className={`admin-content ${classes.shadow}`}>
												<Typography variant="body2">{msg.text}</Typography>
											</Box>
											<Typography variant="subtitle2">{msg.time}</Typography>
										</Box>
									</Box>
									:
									<Box display="flex" alignItems="flex-start" flexDirection="row-reverse" mb="5px" p="5px 0px 5px  10px">
										<Box pl={2} className="admin-thumb">
											<Avatar alt="admin-thumb" src={require(`assets/Images/avatars/${msg.image}`)} />
										</Box>
										<Box>
											<Box mb="5px" p={1} bgcolor="primary.main" borderRadius="borderRadius">
												<Box fontSize="body2.fontSize" color="primary.contrastText">{msg.text}</Box>
											</Box>
											<Box display="flex" justifyContent="flex-end" alignItems="center">
												<Typography variant="subtitle2">{msg.time}</Typography>
												<Box px="7px" fontSize="subtitle1.fontSize" component="span" color="primary.main" className="material-icons">done_all</Box>
											</Box>
										</Box>
									</Box>
								}
							</ListItem>
						))}
						<Fragment>
							{typing &&
								<ListItem className={classes.navList}>
									<Box display="flex" alignItems="flex-start">
										<Box pr={2}>
											<Avatar src={require('assets/Images/avatars/user-2.jpg')} />
										</Box>
										<Box>
											<Box mb="5px" px={2} py={1} borderRadius="borderRadius" className={`admin-content ${classes.shadow}`}>
												<Typography variant="body2">Typing...</Typography>
											</Box>
										</Box>
									</Box>
								</ListItem>
							}
						</Fragment>
					</List>
				</Scrollbars>
			</Box>
			<Box pt="20px">
				<Box display="flex" alignItems="center" >
					<Box style={{ width: 'calc(100% - 60px' }}>
						<FormGroup className="mb-0">
							<Input
								type="text"
								id="search-msg"
								placeholder="Type your message"
								value={sendMsg}
								className="msg-input"
								onChange={(event) => setSendMsg(event.target.value)}
								onKeyPress={(event) => sendMsgOnEnter(event)}
							/>
						</FormGroup>
					</Box>
					<Box style={{ width: 60 }} textAlign="right" className="send-icon">
						<IconButton className={classes.sendBtn} onClick={(event) => onSubmitMessage(event)}>
							<Box component="span" color="primary.main" fontSize="18px" className="fas fa-paper-plane"></Box>
						</IconButton>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default LiveChatSupport;