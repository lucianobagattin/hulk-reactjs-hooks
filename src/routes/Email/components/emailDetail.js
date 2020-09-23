/**
 * Email Detail
 */
import React, { useEffect } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Box, TextField, Button, Divider, Typography, Tooltip } from '@material-ui/core';
import ReplyIcon from '@material-ui/icons/Reply';
import Avatar from '@material-ui/core/Avatar';
import { Scrollbars } from 'react-custom-scrollbars';

// Global Component
import { CustomCard } from 'components/GlobalComponents'

// Redux actions
import {
	ON_BACK_PRESS_NAVIGATE_TO_EMAIL_LISTING,
	ON_DELETE_MAIL,
	UNSELECT_ALL_EMAILS,
	READ_EMAIL
} from "actions/Types";

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: theme.palette.background.default,
	},
	large: {
		width: theme.spacing(8),
		height: theme.spacing(8),
		'@media (max-width:1560px)': {
			width: theme.spacing(7),
			height: theme.spacing(7),
		},
	},
	editor: {
		'& >div': {
			'&:after, &:before': {
				display: 'none',
			}
		}
	},
	pad0: {
		padding: 0,
	},
	pad10: {
		padding: 10,
	},
	sendBtn: {
		border: '3px solid',
		borderColor: theme.palette.primary.main,
		padding: 10,
	},
	authorThumb:{
		width:90,
		'@media (max-width:1560px)': {
			width:70,
		},
		[theme.breakpoints.down('sm')]: {
			width: '100%'
		}
	},
	authorDesc:{
		width:'calc(100% - 90px)',
		[theme.breakpoints.down('sm')]: {
			width: '100%'
		}
	}
}));

function EmailDetail(props){
	const classes = useStyles();
	const emailApp = useSelector(state => state.emailApp);
	const currentEmail = emailApp.currentEmail;
	const dispatch = useDispatch();
	useEffect(()=> {
		const { match } = props;
		dispatch({ type: READ_EMAIL, payload: parseInt(match.params.id) });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])

	// On Back Press Naviagte To Email Listing Page
	const onBackPress = () => {
		const { history } = props;
		dispatch({ type: ON_BACK_PRESS_NAVIGATE_TO_EMAIL_LISTING });
		dispatch({ type: UNSELECT_ALL_EMAILS });
		history.goBack();
	}

	// On Delete Email
	const onDeleteEmail = () => {
		const { history } = props;
		dispatch({ type: ON_DELETE_MAIL });
		history.goBack();
	}

	return (
		<Box className={classes.root} >
			<Box pl={{xs:6, md:3}} pr={3} py={2} display="inline-flex">
				<Box mr={1}>
					<IconButton onClick={() => onBackPress()}>
						<Box component="span" className="material-icons">arrow_back</Box>
					</IconButton>
				</Box>
				<Box mr={1}>
					<IconButton>
						<Box component="span" className="material-icons">folder_open</Box>
					</IconButton>
				</Box>
				<Box mr={1}>
					<IconButton>
						<Box component="span" className="material-icons">error_outline</Box>
					</IconButton>
				</Box>
				<Box>
					<IconButton onClick={() => onDeleteEmail()}>
						<Box component="span" className="material-icons-outlined">delete</Box>
					</IconButton>
				</Box>
			</Box>
			<Divider />
			<Scrollbars
				className="rct-scroll"
				autoHide
				style={{ height: "calc(100vh - 150px)" }}
			>
				{currentEmail !== null &&
					<Box p={{xs:2, md:3}}>
						<Typography variant="h5">" {currentEmail.email_subject} "</Typography>
						<Box display={{xs:'block', md:'flex'}} alignItems="center" mb="20px" mt={2}>
							<Box pr={3} mb={{xs:2, md:0}} className={`author-thumb ${classes.authorThumb}`}>
								{currentEmail.from.avatar !== '' ?
									<Avatar className={classes.large} src={currentEmail.from.avatar} alt="user profile" />
									:
									<Avatar className={classes.large} >{currentEmail.from.name.charAt(0)}</Avatar>
								}
							</Box>
							<Box display={{xs:'block', sm:'flex'}} alignItems="center" justifyContent="space-between" className={classes.authorDesc}>
								<Box>
									<Box>
										{currentEmail.from.name}
										<Box pl={1} component="span" fontSize="subtitle2.fontSize" color="text.secondary">&lt;{currentEmail.from.email}&gt;</Box>
									</Box>
									<Box component="span" ><Box component="a" href="#" fontSize="subtitle2.fontSize" color="text.secondary" style={{ textDecoration: "underline" }}>Unsubscribe</Box></Box>
								</Box>
								<Box display="flex" alignItems="center">
									<Box pr={2} component="span" fontSize="subtitle2.fontSize" color="text.secondary">Jan 25, 2020, 8:00 AM ({currentEmail.received_time})</Box>
									<Tooltip title="Reply" placement="bottom">
										<IconButton size="small">
											<ReplyIcon />
										</IconButton>
									</Tooltip>
								</Box>
							</Box>
						</Box>
						<Box mb={3}>{currentEmail.email_content}</Box>
						<Box mb={4} display="inline-flex" alignItems="center">
							<Box mr={2} display="inline-block" className="reply-btn">
								<Button color="primary" variant="outlined" className="primary-bg-btn">
									<Box component="span" fontSize="22px" mr={1} className="material-icons">reply</Box>
									Reply
								</Button>
							</Box>
							<Box display="inline-block">
								<Button color="primary" variant="outlined" className="primary-bg-btn">
									<Box component="span" fontSize="22px" mr={1} className="material-icons">fast_forward</Box>
									Forward
								</Button>
							</Box>
						</Box>
						<Box>
							<Box display={{xs:'block', md:'flex'}} alignItems="start" mb={4}>
								<Box pr={3} mb={{xs:3, md:0}} className={`author-thumb ${classes.authorThumb}`}>
									<Avatar className={classes.large} src={require('assets/Images/avatars/user-1.jpg')} alt="user profile" />
								</Box>
								<Box  className={classes.authorDesc} >
									<CustomCard cardClasses={classes.pad0}>
										<Box py={2} px={2}>
											<Box display="flex" alignItems="center">
												<Box style={{ width: '65px' }} display="flex" alignItems="center">
													<IconButton size="small">
														<Box component="span" color="text.primary" fontSize="22px" className="material-icons">reply</Box>
													</IconButton>
													<Box pl="12px" component="span" fontSize="subtitle2.fontSize" color="text.primary">To</Box>
												</Box>
												<Box style={{ width: 'calc(100% - 65px)' }}>
													<TextField fullWidth id="standard-basic" value="lorem@example.com" />
												</Box>
											</Box>
											<Box pt={1}>
												<TextField
													className={classes.editor}
													id="standard-multiline-static"
													multiline
													fullWidth
													rows="7"
													defaultValue=""
												/>
											</Box>
										</Box>
										<Divider />
										<Box py={1} pl={2} pr={1} display="flex" alignItems="center" justifyContent="space-between">
											<Box display="flex" alignItems="center">
												<Tooltip title="Send Mail" placement="bottom">
													<IconButton className={classes.sendBtn}>
														<Box component="span" color="primary.main" fontSize="18px" className="fas fa-paper-plane"></Box>
													</IconButton>
												</Tooltip>
												<Tooltip title="Attachment" placement="bottom">
													<IconButton className={classes.pad10}>
														<Box component="span" fontSize="18px" color="text.secondary" className="fas fa-paperclip"></Box>
													</IconButton>
												</Tooltip>
												<Tooltip title="Smiley" placement="bottom">
													<IconButton className={classes.pad10}>
														<Box component="span" fontSize="18px" color="text.secondary" className="far fa-laugh"></Box>
													</IconButton>
												</Tooltip>
												<Tooltip title="Insert Image" placement="bottom">
													<IconButton className={classes.pad10}>
														<Box component="span" fontSize="18px" color="text.secondary" className="far fa-image"></Box>
													</IconButton>
												</Tooltip>
											</Box>
											<Box borderLeft={1} pl="5px" className="border-left" >
												<Tooltip title="Delete" placement="bottom">
													<IconButton className={classes.pad10}>
														<Box component="span" fontSize="18px" color="text.secondary" className="far fa-trash-alt"></Box>
													</IconButton>
												</Tooltip>
											</Box>
										</Box>
									</CustomCard>
								</Box>
							</Box>
						</Box>
					</Box>
				}
			</Scrollbars>
		</Box>
	);
}



export default EmailDetail;