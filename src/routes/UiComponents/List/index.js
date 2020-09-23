/**
 * List 
*/
import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Grid, Typography, Box, List, ListItem, ListItemIcon, ListItemText, Divider, ListSubheader, Collapse,
	ListItemAvatar, Avatar, Checkbox, IconButton, ListItemSecondaryAction, Switch, Container
} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import CommentIcon from '@material-ui/icons/Comment';
import WifiIcon from '@material-ui/icons/Wifi';
import BluetoothIcon from '@material-ui/icons/Bluetooth';
import { listData } from './data.js';
import IntlMessages from 'util/IntlMessages';


//Global Components
import { SmallTitleBar, CustomCard } from 'components/GlobalComponents';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		backgroundColor: theme.palette.background.paper,
	},
	Paper: {
		padding: '0.75rem',
		backgroundColor: 'transparent',
		boxShadow: 'none',
	}
}));

function ListItemLink(props) {
	return <ListItem button component="a" {...props} />;
}

export default function SimpleList() {
	const classes = useStyles();
	const [open, setOpen] = useState(true);
	const [lists] = useState(listData);
	const [checked, setChecked] = useState([0]);
	const [switchOn, setSwitch] = useState(['wifi']);

	const handleSwitch = value => () => {
		const currentIndex = switchOn.indexOf(value);
		const newChecked = [...switchOn];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setSwitch(newChecked);
	};
	const handleToggle = value => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
	};
	const handleClick = () => {
		setOpen(!open);
	};
	return (

		<div className="ui-app-wrapper">
			<SmallTitleBar
            title={<IntlMessages id="sidebar.lists" />}
				center
			/>
			<div className="page-space">
				<Container>
					<Box px={{ xs: '12px', lg: 0 }}>
						<Grid container spacing={3} direction="row">
							<Grid item xs={12} sm={6} md={6}>
                        <CustomCard title={<IntlMessages id="component.simpleList" />}>
									<Box pt={2} pb="24px" className={classes.root}>
										<List component="nav" aria-label="main mailbox folders">
											<ListItem button>
												<ListItemIcon>
													<InboxIcon />
												</ListItemIcon>
												<ListItemText primary="Inbox" />
											</ListItem>
											<ListItem button>
												<ListItemIcon>
													<DraftsIcon />
												</ListItemIcon>
												<ListItemText primary="Drafts" />
											</ListItem>
										</List>
										<Divider />
										<List component="nav" aria-label="secondary mailbox folders">
											<ListItem button>
												<ListItemText primary="Trash" />
											</ListItem>
											<ListItemLink href="#simple-list">
												<ListItemText primary="Spam" />
											</ListItemLink>
										</List>
									</Box>
								</CustomCard>
							</Grid>
							<Grid item xs={12} sm={6} md={6}>
                        <CustomCard title={<IntlMessages id="component.nesteList" />}>
									<Box pt={2} className={classes.root}>
										<List
											component="nav"
											aria-labelledby="nested-list-subheader"
											subheader={
												<ListSubheader component="div" id="nested-list-subheader">
													Nested List Items
                      				</ListSubheader>
											}
											className={classes.root}
										>
											<ListItem button>
												<ListItemIcon>
													<SendIcon />
												</ListItemIcon>
												<ListItemText primary="Sent mail" />
											</ListItem>
											<ListItem button>
												<ListItemIcon>
													<DraftsIcon />
												</ListItemIcon>
												<ListItemText primary="Drafts" />
											</ListItem>
											<ListItem button onClick={handleClick}>
												<ListItemIcon>
													<InboxIcon />
												</ListItemIcon>
												<ListItemText primary="Inbox" />
												{open ? <ExpandLess /> : <ExpandMore />}
											</ListItem>
											<Collapse in={open} timeout="auto" unmountOnExit>
												<List component="div" disablePadding>
													<ListItem button className={classes.nested}>
														<ListItemIcon>
															<StarBorder />
														</ListItemIcon>
														<ListItemText primary="Starred" />
													</ListItem>
												</List>
											</Collapse>
										</List>
									</Box>
								</CustomCard>
							</Grid>
							<Grid item xs={12} sm={6} md={6}>
                        <CustomCard title={<IntlMessages id="component.alignListItems" />}>
									<Box pt={2} className={`align-list-wrap ${classes.root}`}>
										<List>
											{
												lists.map((list, i) => (
													<ListItem alignItems="flex-start" key={i}>
														<ListItemAvatar>
															<Avatar alt="Remy Sharp" src={require(`assets/Images/avatars/${list.image}`)} />
														</ListItemAvatar>
														<ListItemText
															primary={list.primaryText}
															secondary={
																<React.Fragment>
																	<Typography
																		component="span"
																		variant="body1"
																		className={classes.inline}
																		color="textPrimary"
																	>
																		{list.secondaryTextHeading}
																	</Typography>
																	{" — " + list.secondaryTextDetail}
																</React.Fragment>
															}
														/>
													</ListItem>
												))
											}
										</List>
									</Box>
								</CustomCard>
							</Grid>
							<Grid item xs={12} sm={6} md={6}>
                        <CustomCard title={<IntlMessages id="component.listWithCheckBox" />}>
									<Box pt="12px" className={`checkbox-list-wrap ${classes.root}`}>
										<List>
											{[0, 1, 2, 3].map(value => {
												const labelId = `checkbox-list-label-${value}`;
												return (
													<ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
														<ListItemIcon>
															<Checkbox
																color="primary"
																edge="start"
																checked={checked.indexOf(value) !== -1}
																tabIndex={-1}
																disableRipple
																inputProps={{ 'aria-labelledby': labelId }}
															/>
														</ListItemIcon>
														<ListItemText id={labelId} primary={`Line item ${value + 1}`} />
														<ListItemSecondaryAction>
															<IconButton edge="end" aria-label="comments">
																<CommentIcon />
															</IconButton>
														</ListItemSecondaryAction>
													</ListItem>
												);
											})}
										</List>
									</Box>
								</CustomCard>
							</Grid>
							<Grid item xs={12} sm={6} md={6}>
                        <CustomCard title={<IntlMessages id="component.listWithSwitch" />}>
									<Box pt={2} className={`switch-list-wrap ${classes.root}`}>
										<List subheader={<ListSubheader>Settings</ListSubheader>} className={classes.root}>
											<ListItem>
												<ListItemIcon>
													<WifiIcon />
												</ListItemIcon>
												<ListItemText id="switch-list-label-wifi" primary="Wi-Fi" />
												<ListItemSecondaryAction>
													<Switch
														color="primary"
														edge="end"
														onChange={handleSwitch('wifi')}
														checked={switchOn.indexOf('wifi') !== -1}
														inputProps={{ 'aria-labelledby': 'switch-list-label-wifi' }}
													/>
												</ListItemSecondaryAction>
											</ListItem>
											<ListItem>
												<ListItemIcon>
													<BluetoothIcon />
												</ListItemIcon>
												<ListItemText id="switch-list-label-bluetooth" primary="Bluetooth" />
												<ListItemSecondaryAction>
													<Switch
														edge="end"
														onChange={handleSwitch('bluetooth')}
														checked={switchOn.indexOf('bluetooth') !== -1}
														inputProps={{ 'aria-labelledby': 'switch-list-label-bluetooth' }}
													/>
												</ListItemSecondaryAction>
											</ListItem>
										</List>
									</Box>
								</CustomCard>
							</Grid>
						</Grid>
					</Box>
				</Container>
			</div >
		</div >
	);
}