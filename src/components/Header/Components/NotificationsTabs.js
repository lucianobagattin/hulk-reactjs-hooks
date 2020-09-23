/**
 * Contacts tab section
*/
import React, {useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';
import { AppBar, Tabs, Tab, Typography, Box } from '@material-ui/core';
import NotificationsList from 'components/Widgets/NotificationsList';
import TaskList from 'components/Widgets/TaskList';

const useStyles = makeStyles(theme => ({
	appWrap: {
		boxShadow: "none",
	},
	toolbar: {
		padding: '10px 0 0',
		marginLeft: -12,
		marginRight: -12,
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
		>
			{value === index && <Box py={3} px={2}>{children}</Box>}
		</Typography>
	);
}

function a11yProps(index) {
	return {
		id: `scrollable-force-tab-${index}`,
		'aria-controls': `scrollable-force-tabpanel-${index}`,
	};
}

const quickAccess = [
	{
		icon:'info',
		title:'Info',
		color:'text-success',
		path:'/app/pages/profile/standard',
	},
	{
		icon:'question_answer',
		title:'Chat',
		color:'text-primary',
		path:'/app/chat',
	},
	{
		icon:'mail_outline',
		title:'E-mail',
		color:'text-danger',
		path:'/app/email',
	},
	{
		icon:'calendar_today',
		title:'Calendar',
		color:'text-secondary',
		path:'/app/calendar',
	},
	{
		icon:'monetization_on',
		title:'Upgrade',
		color:'text-info',
		path:'/app/pages/pricing/pricing-upgrade',
	},
	{
		icon:'layers',
		title:'Blog',
		color:'text-dark',
		path:'/app/blog/blog-grid',
	},
	{
		icon:'help_outline',
		title:"FAQ's",
		color:'text-disabled',
		path:'/app/pages/faq',
	},
	{
		icon:'shopping_cart',
		title:'Shop',
		color:'text-info',
		path:'/app/ecommerce/shop',
	},
	{
		icon:'perm_data_setting',
		title:'Settings',
		color:'text-secondary',
		path:'/app/user-settings',
	},

	{
		icon:'import_contacts',
		title:"Contacts",
		color:'text-success',
		path:'/app/pages/contact-grid',
	},
	{
		icon:'bar_chart',
		title:'Dashboard 1',
		color:'text-primary',
		path:'/app/dashboard/dashboard1',
	},
	{
		icon:'dashboard',
		title:'Dashboard 2',
		color:'text-danger',
		path:'/app/dashboard/dashboard2',
	}
]

function NotificationsTabs() {
	const classes = useStyles();
	const theme = useTheme();
	const [value, setValue] = useState(0);


	const handleChange = (event, value) => {
		setValue(value);
	};

	return (
		<Box width="100%" className="notify-tabs">
			<Box px="12px">
				<AppBar position="static" color="default" className={classes.appWrap}>
					<Tabs
						value={value}
						onChange={handleChange}
						indicatorColor='primary'
						textColor="primary"
						variant="fullWidth"
						scrollButtons="on"
						aria-label="scrollable auto tabs example"
						className={`notifiaction-toolbar ${classes.toolbar}`}
					>
						<Tab label="Quick Access" {...a11yProps(0)} />
						<Tab label="Notifications" {...a11yProps(1)} />
						<Tab label="To Do List" {...a11yProps(2)} />							
					</Tabs>
				</AppBar>
			</Box>
			<SwipeableViews
				axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
				index={value}
			>
				<TabPanel dir={theme.direction}>
					<ul className="list-unstyled quick-access-wrap">
						{quickAccess.map((item, index) => (
							<li key={index}>
								<Link to={item.path}>
									<Box component="span" className={`icon-wrap material-icons-outlined ${item.color}`}>
										{item.icon}
									</Box>
									<Box display="block" component="span" fontSize="1rem" color="text.secondary">
										{item.title}
									</Box>
								</Link>
							</li>
						))}
					</ul>			
				</TabPanel>
				<TabPanel dir={theme.direction}>
					<NotificationsList />
				</TabPanel>
				<TabPanel dir={theme.direction}>
					<div className="today-todo-list">
						<TaskList startIndex={5} />		
					</div>
				</TabPanel>
			</SwipeableViews>
		</Box>
	);
}

export default NotificationsTabs;