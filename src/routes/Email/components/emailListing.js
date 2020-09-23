/**
 * Emails Listing
 */
import React, { Fragment } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Scrollbars } from 'react-custom-scrollbars';
import clsx from 'clsx';
import { List, ListItem, Grid, ListItemIcon, ListItemText, Button, Box, Typography, Checkbox, FormControl, InputLabel, Input, InputAdornment, FormControlLabel, IconButton, Hidden, Tooltip } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

// Redux action
import {
	SEARCH_EMAIL,
	UPDATE_EMAIL_SEARCH,
	READ_EMAIL,
	ON_SELECT_EMAIL,
	SELECT_ALL_EMAILS,
	ON_DELETE_MAIL,
	ON_SPAM_MAIL,
	ON_DRAFT_MAIL,
	UNSELECT_ALL_EMAILS,
	ON_DELETE_EMAIL_FROM_TRASH_FOLDER
}  from "actions/Types";

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		padding: 0,
		backgroundColor: theme.palette.background.paper,
	},
	searchBox:{
		padding:'24px 48px 32px',
		[theme.breakpoints.down('sm')]: {
			padding:'5px 16px 12px 48px'
		},
		[theme.breakpoints.down('xs')]: {
			'& .pagination-wrap':{
				marginTop:'-10px',
			}
		}
	},
	selectWrap:{
		padding:'22px 16px',
		'& label > span:nth-child(2)':{
			fontSize:16
		},
		[theme.breakpoints.down('sm')]: {
			padding:'6px 16px 5px 48px',
			'& label':{
				marginRight:0,
				'& > span:nth-child(2)':{
					display:'none'
				},
			}
		}
	},
	inline: {
		display: 'inline',
	},
	formItem: {
		fontSize: 24,
		[theme.breakpoints.down('xs')]: {
			fontSize: 16
		}
	},
	mailItem: {
		borderTop: '1px solid #e0e0e0',
		paddingLeft: 0,
		cursor:'pointer',
		transition: 'opacity 0.2s ease-out',
		'& >div:first-child': {
			transition: 'opacity 0.2s ease-out',
		},
		'&:hover': {
			'& >div:first-child': {
				opacity: 1
			}
		},
		[theme.breakpoints.down('sm')]: {
			'& >div:first-child': {
				opacity: 1,
				'& >span': {
					marginLeft: 'auto',
					marginRight: 'auto',
				}
			},
		}
	},
	active: {
		backgroundColor: theme.palette.background.paper,
		'& >div:first-child': {
			opacity: 1
		},
	},
	check: {
		marginTop: 2,
		opacity: 0,
		minWidth: 50,
		[theme.breakpoints.down('sm')]: {
			minWidth: 42,
			marginTop: 1,
			'& svg': {
				width: 22,
				height: 22,
			}
		}
	},
	secBtn: {
		color: theme.palette.text.secondary,
		fontSize: '1rem',
		fontWeight: 400,
		[theme.breakpoints.down('sm')]: {
			minWidth:'auto',
			'& span > span:nth-child(2)':{
				display:'none'
			}
		}
	},
	mailIcon: {
		'@media (max-width:1560px)': {
			minWidth: 50,
			'& .material-icons-outlined':{
				fontSize:27,
			}
		},
		[theme.breakpoints.down('sm')]: {
			minWidth: 45
		},
		[theme.breakpoints.down('xs')]: {
			display: 'none'
		}
	},
	desc: {
		width: 'calc(100% - 150px)',
		[theme.breakpoints.down('xs')]: {
			width: 'calc(100% - 55px)',
			paddingRight: 10,
		}
	},
	detail: {
		width: '150px',
		[theme.breakpoints.down('xs')]: {
			width: '55px',
			fontSize: 12
		}
	},
	rctScroll:{ 
		height:'calc(100vh - 178px) !important',
		[theme.breakpoints.down('sm')]: {
			height:'calc(100vh - 139px) !important',
		},
		[theme.breakpoints.down('xs')]: {
			height:'calc(100vh - 165px) !important',
		}
	}
}));

function EmailListing(props){
	const classes = useStyles();
	const emailApp = useSelector(state => state.emailApp);
	const selectedEmails = emailApp.selectedEmails;
	const emails = emailApp.emails;
	const searchEmailText = emailApp.searchEmailText;
	const dispatch = useDispatch();
	const readEmail = (email) => {
		const { match, history } = props;
		dispatch({ type: READ_EMAIL, payload: parseInt(email.id) });
		history.push(`${match.url}/${email.id}`);
	}

	const onSelectEmail = (e, email) => {
		e.stopPropagation();
		dispatch({ type: ON_SELECT_EMAIL, payload: email });
	}

	const onAllEMailSelect = (e) => {
		const selectAll = selectedEmails < emails.length;
		if (selectAll) {
			dispatch({ type: SELECT_ALL_EMAILS });
		} else {
			dispatch({ type: UNSELECT_ALL_EMAILS });
		}
	}

	const onSearchEmail = (e) => {
		dispatch({ type: UPDATE_EMAIL_SEARCH,payload: e.target.value});
		dispatch({ type: SEARCH_EMAIL,payload: e.target.value });
	}

	const deleteEmail = () => {
		const { match} = props;
		if (match.path === '/app/email/folder/trash') {
			dispatch({ type: ON_DELETE_EMAIL_FROM_TRASH_FOLDER});
		} else {
			dispatch({ type: ON_DELETE_MAIL});
		}
	}

	const spamEmail = () => {
		dispatch({ type: ON_SPAM_MAIL});
	}

	const draftEmail = () => {
		dispatch({ type: ON_DRAFT_MAIL});
	}

   return (
		<div>
			{selectedEmails > 0 ?
				<Box className={classes.selectWrap} bgcolor="background.default">
					<Grid container spacing={2} >
						<Grid item xs={12} sm={12} md={12}>
							<Box display="inline-flex" alignItems="center">
								<Box>
									<FormControlLabel
										control={
											<Checkbox color="primary"
												indeterminate={selectedEmails > 0 && selectedEmails < emails.length}
												checked={selectedEmails > 0}
												onChange={(e) => onAllEMailSelect(e)}
												value="SelectMail"
											/>
										}
										label="Select All"
									/>
								</Box>
								<Box display="inline-flex" alignItems="center">
									<Box mr={{xs:'3px', md:1}}>
										<Tooltip title="Archive" placement="bottom">
											<Button onClick={() => draftEmail()} className={classes.secBtn}>
												<Box component="span" fontSize="22px" mr={{md:1}} className="material-icons-outlined">folder</Box>
												<Box component="span">Archive</Box>
											</Button>
										</Tooltip>	
									</Box>
									<Box mr={{xs:'3px', md:1}}>
										<Tooltip title="Mark As Spam" placement="bottom">
											<Button onClick={() => spamEmail()} className={classes.secBtn}>
												<Box component="span" fontSize="22px" mr={1} className="material-icons-outlined">error</Box>
												<Box component="span">Mark As Spam</Box>
											</Button>
										</Tooltip>	
									</Box>
									<Box>
										<Tooltip title="Delete" placement="bottom">
											<Button onClick={() => deleteEmail()} className={classes.secBtn}>
												<Box component="span" fontSize="22px" mr={1} className="material-icons-outlined">delete</Box>
												<Box component="span">Delete</Box>
											</Button>
										</Tooltip>
									</Box>
								</Box>
							</Box>
							<Box>
								<Box>{selectedEmails === emails.length ? 'All' : selectedEmails} Email Selected</Box>
							</Box>
						</Grid>
					</Grid>
				</Box>
				:
				<Box className={`search-box ${classes.searchBox}`}>
					<Grid container spacing={3} >
						<Grid item xs={12} sm={7} md={7}>
							<FormControl fullWidth >
								<InputLabel className={classes.formItem} htmlFor="standard-adornment-password">Search</InputLabel>
								<Input
									className={classes.formItem}
									type="text"
									name="search"
									id="search-todo"
									placeholder="Search Mail"
									onChange={(e) => onSearchEmail(e)}
									value={searchEmailText}
									endAdornment={
										<InputAdornment position="end">
											<SearchIcon />
										</InputAdornment>
									}
								/>
							</FormControl>
						</Grid>
						<Grid item xs={12} sm={5} md={5}>
							<Box className="pagination-wrap" height="100%" display="flex" alignItems={{ xs: "center", sm: 'flex-end' }} justifyContent={{ xs: "flex-start", sm: 'flex-end' }}>
								<Box color="text.secondary" fontSize="body2.fontSize">1-31 of 31</Box>
								<Box display="flex" alignItems="center">
									<IconButton size="small">
										<Box component="span" className="material-icons">chevron_left</Box>
									</IconButton>
									<IconButton size="small">
										<Box component="span" className="material-icons">chevron_right</Box>
									</IconButton>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Box>
			}
			<Scrollbars
				className={`rct-scroll ${classes.rctScroll}`}
				autoHide
			>
				{(emails && emails.length > 0 && emails !== null) ?
					<List className={`email-list-wrap ${classes.root}`}>
						{emails.map((email, index) => (
							<ListItem
								className={clsx(classes.mailItem, {
									[classes.active]: email.selected,
								})}
								alignItems="flex-start"
								key={index}
								onClick={() => readEmail(email)}
							>
								<ListItemIcon className={classes.check}>
									<Checkbox
										checked={email.selected}
										onClick={(e) => onSelectEmail(e, email)}
										id={'cb-' + index}
										color="primary"
										inputProps={{ 'aria-label': 'primary checkbox' }}
									/>
								</ListItemIcon>
								<ListItemIcon className={classes.mailIcon}>
									{email.read ?
										<Box component="span" fontSize={{ xs: '25px', md: '32px' }} mr={1} className="material-icons-outlined">drafts</Box>
										:
										<Box component="span" color="primary.main" fontSize={{ xs: '25px', md: '32px' }} mr={1} className="material-icons-outlined">mail</Box>
									}
								</ListItemIcon>
								<ListItemText>
									<Box display="flex" alignItems='center'>
										<Box className={`content-desc ${classes.desc}`} pr={3}>
											<Box className="list-desc" fontSize="subtitle1.fontSize" color="primary.main" style={{ cursor: 'pointer' }}>
												<Hidden smDown implementation="css">
													{email.email_subject}
												</Hidden>
												<Hidden mdUp implementation="css">
													{email.email_subject.length > 38 ? email.email_subject.substring(0, 38) + '...' : email.email_subject}
												</Hidden>
											</Box>
											<Fragment>
												<Hidden smDown implementation="css">
													<Typography
														component="span"
														variant="body2"
														className={classes.inline}
														color="textPrimary"
													>
														{email.email_content.length > 150 ? email.email_content.substring(0, 150) + '...' : email.email_content}
													</Typography>
												</Hidden>
												<Hidden mdUp implementation="css">
													<Typography
														component="span"
														variant="body2"
														className={classes.inline}
														color="textPrimary"
													>
														{email.email_content.length > 40 ? email.email_content.substring(0, 40) + '...' : email.email_content}
													</Typography>
												</Hidden>
											</Fragment>
										</Box>
										<Box display="flex" justifyContent={{ xs: 'flex-end', md: 'flex-start' }} alignItems='center' className={`list-detail ${classes.detail}`}>
											<Box fontSize="subtitle2.fontSize" display={{ xs: 'none', sm: 'inline-block' }} pr={{ sm: 1, md: 3 }}>{email.email_size} </Box>
											<Box fontSize="subtitle2.fontSize" pl={{ sm: 1, md: 3 }} color="text.primary">{email.received_time}</Box>
										</Box>
									</Box>
								</ListItemText>
							</ListItem>
						))}
					</List>
					:
					<Box height="100%" display="flex" alignItems="center" justifyContent="center">
						<Box fontSize="h5.fontSize" color="text.secondary">No Emails Found</Box>
					</Box>
				}
			</Scrollbars>
		</div>
	);
}

export default EmailListing;