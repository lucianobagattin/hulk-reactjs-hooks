/**
 * Email Sidebar
 */
import React, { Fragment, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory  } from 'react-router-dom';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import {
	Hidden, List, ListItem, ListItemIcon, ListSubheader, ListItemText, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField,Box, Divider
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ReactQuill from 'react-quill';

import IntlMessages from 'util/IntlMessages';

const modules = {
	toolbar: [
		[{ 'header': [1, 2, 3, 4, 5, 6, false] }],
		[{ 'font': [] }],
		['bold', 'italic', 'underline', 'strike', 'blockquote'],
		[{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
		['link', 'image'],
		['clean'],
		[{ 'align': [] }]
	],
};

const formats = [
	'header',
	'font',
	'bold', 'italic', 'underline', 'strike', 'blockquote',
	'list', 'bullet', 'indent',
	'link', 'image', 'align'
];

const useStyles = makeStyles(theme => ({
	root:{
		width: '100%',
		paddingTop: '15px',
		paddingBottom: '15px',
	},
	nested: {
		paddingLeft: theme.spacing(4),
	},
	dialog: {
		width: '100%',
		maxWidth: '60vw',
		'@media (max-width:960px)':{
			maxWidth: '80vw'
		},
		'@media (max-width:600px)':{
			maxWidth: '95vw',
			marginLeft: 15,
			marginRight: 15,
		}
	},
	subheader:{
		color:theme.palette.text.primary,
		lineHeight:'40px',
		fontSize:theme.typography.body1.fontSize,
	},
	listItem:{
		padding:'4px 16px',
	},
	listIcon:{
		minWidth:30,
		'& span': {
			fontSize:'1.25rem',
		},
	},
	listActive:{
		backgroundColor:theme.palette.background.default,
		boxShadow: '0 0 3px 0 rgba(0, 0, 0, .12)',
		'& span': {
			color:theme.palette.primary.main,
		},
	},
	divider:{
		'&:First-child':{
			display:'none',
		}
	}
}));

function EmailSidebar(props) {
	const classes = useStyles();
	const [open,setOpen] = useState(false);
	const [selected,setSelected] = useState(1);
	const emailApp = useSelector(state => state.emailApp);
	const history = useHistory();
	const navigateTo = (key,i) => {
		history.push(`/app/email/folder/${key}`);
		setSelected(i);
	}

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const { folders } = emailApp;
	return (
		<div>
			<Box px={3} pt={4} pb={2} textAlign="center" bgcolor="back">
				<Button size="large" startIcon={<AddIcon />} className={`${classes.button} primary-bg-btn compose-btn`} onClick={() => handleClickOpen()}
					variant="outlined" color="primary"
				>
               <IntlMessages id="components.compose" />
				</Button>
			</Box>
			<Box>
				{folders.map((folder, key) => (
					<Fragment key={key}>
						<Box mx={2} className={classes.divider}><Divider /></Box>
						<List
							aria-labelledby="nested-list-subheader"
							subheader={
								<ListSubheader className={classes.subheader} component="div" id="nested-list-subheader">
									{folder.viewBy}
								</ListSubheader>
							}
							className={classes.root}
						>
							<Hidden mdUp implementation="css">
								{folder.links.map((folder, i) => (
									<ListItem
										className={clsx(classes.listItem, {
											[classes.listActive]: folder.id === selected,
										})}
										button
										key={i}
										onClick={() => {
											navigateTo(folder.path, folder.id);
											props.closeEmailSidebar();
										}}
									>
										<ListItemIcon className={classes.listIcon}>
											<Box component="span" className="material-icons-outlined">{folder.icon}</Box>
										</ListItemIcon>
                              <ListItemText primary={<IntlMessages id={folder.name} />} />
									</ListItem>
								))
								}
							</Hidden>
							<Hidden smDown implementation="css">
								{folder.links.map((folder, i) => (
									<ListItem
										className={clsx(classes.listItem, {
											[classes.listActive]: folder.id === selected,
										}, "list-item")}
										button
										key={i}
										onClick={() => navigateTo(folder.path, folder.id)}
									>
										<ListItemIcon className={classes.listIcon}>
											<Box component="span" className="material-icons-outlined">{folder.icon}</Box>
										</ListItemIcon>
                              <ListItemText primary={<IntlMessages id={folder.name} />} />

									</ListItem>
								))
								}
							</Hidden>
						</List>
					</Fragment>
				))}
			</Box>
			{/* Compose Dialog Box */}
			<Dialog
				aria-labelledby="customized-dialog-title"
				open={open}
				classes={{ paper: classes.dialog }}
				onClose={() => handleClose()}
			>
				<DialogTitle id="customized-dialog-title">
               <IntlMessages id="components.composer" />
       		</DialogTitle>
				<DialogContent dividers>
					<Box mb={1}>
						<TextField fullWidth	label="To" />
					</Box>
					<Box mb={1}>
						<TextField fullWidth	label="CC" />
					</Box>
					<Box mb={1}>
						<TextField fullWidth	label="BCC" />
					</Box>
					<Box mb={3}>
						<TextField fullWidth	label="Subject" />
					</Box>
					<Box height="100%">
						<ReactQuill
							modules={modules}
							formats={formats}
							placeholder="Enter Your Message.."
						/>
					</Box>
				</DialogContent>
				<DialogActions>
					<Box py={1} px={2}>
						<Box display="inline-block" mr={2}>
							<Button variant="outlined" className="primary-bg-btn" color="primary" onClick={() => handleClose()}>
								<Box component="span" fontSize="20px" mr={1} className="material-icons">cancel_schedule_send</Box>
								Cancel
							</Button>
						</Box>
						<Button variant="outlined" className="primary-bg-btn" color="primary" autoFocus onClick={() => handleClose()}>
							<Box component="span" fontSize="18px" mr={1} className="material-icons">send</Box>
							Send
						</Button>
					</Box>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default EmailSidebar;