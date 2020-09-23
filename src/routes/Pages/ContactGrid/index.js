/**
 * Contacts tab section
*/
import React, { useEffect,useRef,useState} from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { makeStyles ,useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';                                                          
import {
	AppBar, Tabs, Tab, Typography, Button, Icon, IconButton, Box, Input, FormControl, InputAdornment, Container
} from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import IntlMessages from 'util/IntlMessages';

//Components
import UpdateContact from './Components/UpdateContact';
import ConfirmationDialog from './Components/ConfirmationDialog';

//Global component
import { SmallTitleBar } from 'components/GlobalComponents';

// Redux actions
import { DELETE_CONTACT } from "actions/Types";
import ContactList from './Components/ContactList';
import ContactGridItem from './Components/ContactGridItem';
const useStyles = makeStyles(theme => ({
	tabsWrap: {
		boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
	},
	appWrap: {
		boxShadow: "none",
	},
	toolbar: {
		padding: '0',
		marginLeft: -12,
		marginRight: -12,
		'& button': {
			minHeight: 50,
		},
		'& .MuiTab-wrapper': {
			fontSize: '1rem',
		},
		'& .Mui-selected': {
			backgroundColor: `rgba(0,0,0,0.1)`,
		}
	},
	searchBarWrap: {
		'& .MuiInput-underline::before': {
			borderBottom: `1px solid ${theme.palette.common.white}`,
		},
		'& .MuiInputBase-input::placeholder': {
			color: theme.palette.common.white,
		},
		'& .MuiInput-underline:hover:not(.Mui-disabled)::before': {
			borderColor: theme.palette.common.white,
		},
		'& .MuiInput-underline::after': {
			borderBottom: `1px solid ${theme.palette.common.white}`,
		},
		'& .MuiInputBase-root': {
			width: 360,
			'& input': {
				color: theme.palette.common.white,
			},
			[theme.breakpoints.down('xs')]: {
				width: '100%',
				marginBottom: 20,
			},
		},
		'& .MuiSvgIcon-root': {
			fill: theme.palette.common.white,
		}
	}
}));

function TabPanel(props) {
	const { children, value, index, dir, ...other } = props;
	return (
		<Typography
			component="div"
			role="tabpanel"
			hidden={value !== index}
			id={`scrollable-force-tabpanel-${index}`}
			aria-labelledby={`scrollable-force-tab-${index}`}
			{...other}
			dir={dir}
			className="pad-12"
		>
			{value === index && <Box pb={4}>{children}</Box>}
		</Typography>
	);
}

function a11yProps(index) {
	return {
		id: `scrollable-force-tab-${index}`,
		'aria-controls': `scrollable-force-tabpanel-${index}`,
	};
}


function ContactGrid(){
	const classes = useStyles();
	const theme = useTheme();
	const [message,setMessage] = useState('');
	const [value,setValue] = useState(0);
	const [favContacts,setFavContacts] = useState([]);
	const [recentContacts,setRecentContacts] = useState(null);
	const [data,setData] = useState(null);
	const [isUpdated,setIsUpdated] = useState(false);
	const [gridView,setGridView] = useState(true);
	const dispatch = useDispatch();
	const contactReducer = useSelector(state => state.ContactReducer);
	const contactsData  = contactReducer.contactsData;
	const confirmation = useRef(null);
	console.log(confirmation);
	useEffect(() => {
		getFavContact();
		getRecentContact();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[]);

	// Get favourite contact data
	const getFavContact = () => {
		let newArray = [];
		let data = contactsData;
		if (data !== null) {
			for (let Item of data) {
				if (Item.type === 'favourite') {
					newArray.push(Item)
				}
			}
			setFavContacts(newArray);
			setIsUpdated(false);
		}
	}

	// Get recent contact data
	const getRecentContact = () => {
		let newArray = [];
		let data = contactsData;
		if (data !== null) {
			for (let Item of data) {
				if (Item.type === 'recently_added') {
					newArray.push(Item)
				}
			}
			setRecentContacts(newArray);
			setIsUpdated(false);
		}
	}

	const handleChange = (event, value) => {
		setValue(value);
	};

	const ondeleteContact = (data) => {
		setData(data);
		console.log(confirmation);
		confirmation.current.openDialog();
	}

	const deleteContactPermanent = (popupResponse) => {
		if (popupResponse) {
			dispatch({ type: DELETE_CONTACT, payload: data });
			setData('');
		}
	}

	const handleClickEdit = (data) => {
		console.log(data);
		setData(data);
		setIsUpdated(true);
	}

	const onCloseDialog = (popupResponse) => {
		setData(null);
		setIsUpdated(false);		
	}
	
	return (
		<div className="contact-grid">
        <SmallTitleBar title={<IntlMessages id="component.contactGrid" />} />
			<Box className={`title-contact-block ${classes.searchBarWrap}`} pt={0} bgcolor="background.paper" px={{ xs: '12px', md: 0 }} pb={3} >
				<Container>
					<Box  textAlign={{ xs: 'center', sm: 'right' }} display={{ xs: 'block', sm: 'flex' }} alignItems="center" justifyContent="space-between">
                 <Button variant="outlined" color="default"><IntlMessages id="component.addContact" /></Button>
						<Box>
							<FormControl fullWidth >
								<Input
									type="text"
									name="search"
									placeholder="Search Contact"
									onChange={(event) => setMessage(event.target.value)}
									value={message}
									endAdornment={
										<InputAdornment position="end">
											<SearchIcon />
										</InputAdornment>
									}
								/>
							</FormControl>
						</Box>
					</Box>
				</Container>
			</Box>
			<Box className={classes.tabsWrap} bgcolor="background.paper">
				<Container>
					<AppBar position="static" className={classes.appWrap}>
						<Tabs value={value}
							onChange={handleChange}
							indicatorColor='primary'
							textColor="primary"
							variant="scrollable"
							scrollButtons="on"
							aria-label="scrollable auto tabs example"
							className={`${classes.toolbar} contact-grid-tabs`}
						>
                    <Tab label={<IntlMessages id="component.allContacts" />} {...a11yProps(0)} />
                    <Tab label={<IntlMessages id="component.recentlyAdded" />} {...a11yProps(1)} />
							<Tab label={<IntlMessages id="component.favourite" />} {...a11yProps(2)} />
						</Tabs>
					</AppBar>
				</Container>
			</Box>
			<Container>
				<Box textAlign={{ xs: 'center', sm: 'right' }} display={{ xs: 'block', sm: 'flex' }} alignItems="center" justifyContent="space-between">
					<div className="contact-tab-wrap Tab-wrap">
						{(isUpdated && data) &&
							<UpdateContact data={data} onCloseDialog={onCloseDialog} />
						}
						<div>
							<Box textAlign="right" py={3}>
								<IconButton className={gridView === true ? "active": ""} onClick={() => setGridView(true)}>
									<Icon>apps</Icon>
								</IconButton>
								<IconButton className={gridView === false ? "active": ""} onClick={() => setGridView(false)}>
									<Icon>view_list</Icon>
								</IconButton>
							</Box>
							<SwipeableViews
								axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
								index={value}
							>
								<TabPanel dir={theme.direction}>
									{gridView && gridView === true ?
										<div className="contact-grid-wrap">
											<ContactGridItem
												parentEditMethod={(e) => handleClickEdit(e)}
												parentMethod={(e) => ondeleteContact(e)}
												contacts={contactsData}
											/>
										</div>
										:
										<div>
											<ContactList
												parentEditMethod={(e) => handleClickEdit(e)}
												parentMethod={(e) => ondeleteContact(e)}
												contacts={contactsData}
											/>
										</div>
									}
								</TabPanel>
								<TabPanel dir={theme.direction}>
									{gridView && gridView === true ?
										<div className="contact-grid-wrap">
											<ContactGridItem
												parentEditMethod={(e) => handleClickEdit(e)}
												parentMethod={(e) => ondeleteContact(e)}
												contacts={recentContacts}
											/>
										</div>
										:
										<div>
											<ContactList
												parentEditMethod={(e) => handleClickEdit(e)}
												parentMethod={(e) => ondeleteContact(e)}
												contacts={recentContacts}
											/>
										</div>
									}
								</TabPanel>
								<TabPanel dir={theme.direction}>
									{gridView && gridView === true ?
										<div className="contact-grid-wrap">
											<ContactGridItem
												parentEditMethod={(e) => handleClickEdit(e)}
												parentMethod={(e) => ondeleteContact(e)}
												contacts={favContacts}
											/>
										</div>
										:
										<div>
											<ContactList
												parentEditMethod={(e) => handleClickEdit(e)}
												parentMethod={(e) => ondeleteContact(e)}
												contacts={favContacts}
											/>
										</div>
									}
								</TabPanel>
							</SwipeableViews>
						</div>
						<ConfirmationDialog
							ref={confirmation}
							onConfirm={(res) => deleteContactPermanent(res)}
						/>
					</div>
				</Box>
			</Container>
		</div>

	);
}

export default ContactGrid;