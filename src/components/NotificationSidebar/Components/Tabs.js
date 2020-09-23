/**
 * Tabs
 */
import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { AppBar, Tabs, Tab, Typography, Box, FormControl, Input, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

// Component
import TaskList from 'components/Widgets/TaskList';
import NotificationsList from 'components/Widgets/NotificationsList';
import WheatherWidget from 'components/Widgets/Weather'
import TodayDate from 'components/Widgets/TodayDate'
import StockWidget from 'components/Widgets/StockWidget'

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<Typography
			component="div"
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			{value === index && <Box py={3}>{children}</Box>}
		</Typography>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		'aria-controls': `full-width-tabpanel-${index}`,
	};
}

const useStyles = makeStyles(theme => ({
	sidebarWrap: {
		width: 450,
		height: '100vh',
		overflowX: 'hidden'
	},
	root: {
		'& >div': {
			'& >div:first-child': {
				backgroundColor: theme.palette.background.default,
				'& .Mui-selected': {
					backgroundColor: theme.palette.primary.main,
					'& .MuiTab-wrapper': {
						color: theme.palette.common.white,
					},
				}
			}
		},
		'& button': {
			minHeight: 48,
		}
	},
}));

export default function FullWidthTabs(props) {
	const classes = useStyles();
	const theme = useTheme();
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleChangeIndex = index => {
		setValue(index);
	};

	const documentations = [
		{
			'title': 'Introduction',
			'body': 'Hulk is the most development-friendly, easy to customizable and fully responsive admin template developed with ReactJS and Material-UI.',
			'link': 'https://docs.theironnetwork.org/hulk/'
		},
		{
			'title': 'Installation Steps',
			'body': 'Install Node.js and NPM: Download Node.js from the official website and install it on your system. Hulk works well with Node.js 10.x. NPM comes bundled with Node.js.',
			'link': 'https://docs.theironnetwork.org/hulk/installation/'
		},
		{
			'title': 'What Files I get after Download?',
			'body': 'Once you download the template from ThemeForest, you will find the below folder structure in the package',
			'link': 'https://docs.theironnetwork.org/hulk/'
		},
		
	]

	const [documentation, setDocumentation] = useState(documentations);

	const updateSearch = e => {
		if (e.target.value === '') {
			setDocumentation(documentations)
		} else {
			let searchedQues = documentation.filter((ques, i) =>
				ques.title.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1);
			setDocumentation(searchedQues)
			console.log("searchedQues", searchedQues)
		}

	}



	return (
		<div className={`${classes.sidebarWrap} sidebar-wrap-cong`}> 
			<AppBar position="static" color="default">
				<Tabs
					className={classes.root}
					value={value}
					onChange={handleChange}
					indicatorColor="primary"
					textColor="primary"
					variant="fullWidth"
					aria-label="full width tabs example"
				>
					<Tab label="Docs" {...a11yProps(0)} />
					<Tab label="Notifications" {...a11yProps(1)} />
					<Tab label="Info" {...a11yProps(2)} />
				</Tabs>
			</AppBar>
			<SwipeableViews
				axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
				index={value}
				onChangeIndex={handleChangeIndex}
			>
				<TabPanel value={value} index={0}>
					<div className="sidebar-widget-wrap">
						<Box className="quick-doc">
							<Box mb={2}>
								<FormControl fullWidth >
									<Input
										type="text"
										name="search-users"
										id="search"
										placeholder="Search"
										onChange={(e) => updateSearch(e)}
										endAdornment={
											<InputAdornment position="end">
												<SearchIcon />
											</InputAdornment>
										}
									/>
								</FormControl>
							</Box>

							{documentation && documentation.length > 0 ?

								documentation.map((data, i) => (
									<Box className="quick-doc-block" key={i}>
										<div className="quick-doc-title">{data.title}</div>
										<Typography variant="body2">{data.body}</Typography>
										<a target="_blank" rel="noopener noreferrer" className="quick-doc-link" href="https://docs.theironnetwork.org/hulk/">{data.link}</a>
									</Box>
								))

								:
								<Box p={5} display="flex" justifyContent="center" alignItems="center">
									<Box lineHeight={0.8} pr={1}>
										<img src={require('assets/Images/search.png')} alt="search" width="45" height="45" />
									</Box>
									<Typography variant="subtitle1">Empty</Typography>
								</Box>
							}

							<Box className="quick-doc-block quick-doc-help">
								<i className="material-icons-outlined">
									help_outline
							</i>
								<div className="quick-doc-title">Still Having Doubt?</div>
								<Typography variant="body2">We are provide online Documentation for hulk. Please check the following link to know more </Typography>
								<a target="_blank" rel="noopener noreferrer" className="quick-doc-link" href="https://docs.theironnetwork.org/hulk/">https://docs.theironnetwork.org/hulk/</a>
							</Box>
						</Box>
					</div>
				</TabPanel>
				<TabPanel value={value} index={1}>
					<NotificationsList />
				</TabPanel>
				<TabPanel value={value} index={2}>
					<div className="sidebar-widget-wrap">
						<TodayDate></TodayDate>
						<WheatherWidget></WheatherWidget>
						<StockWidget></StockWidget>
						<div className="sidebar-todo-widget  sidebar-widget">
							<div className="widget-title">
								<Typography variant="h6">To Do List</Typography>
							</div>
							<div className="widget-box">
								<TaskList
									startIndex={5}
								/>
							</div>
						</div>
					</div>
				</TabPanel>
			</SwipeableViews>
		</div>
	);
}
