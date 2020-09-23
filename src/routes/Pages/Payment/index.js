import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { TextField, Button, Container } from '@material-ui/core';
import { SmallTitleBar } from 'components/GlobalComponents';
import { CustomCard } from 'components/GlobalComponents';
import IntlMessages from 'util/IntlMessages';
function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<Typography
			component="div"
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && <Box p={3}>{children}</Box>}
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
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	};
}

const useStyles = makeStyles(theme => ({


}));

export default function VerticalTabs() {
	const classes = useStyles();
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<SmallTitleBar title={<IntlMessages id="components.paymentGateways" />} center={true} />
			<Container>
				<Box px={{ xs:'12px', lg:0 }}>
					<div className="page-space  payment-int-wrap">
						<CustomCard cardClasses="border-t border-l border-r">
							<Box mb={1}>
								<Typography variant="h5"><IntlMessages id="components.connectPaymentGateways" /></Typography>
							</Box>
							<Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quaerat atque, eius odio assumenda officia provident animi molestiae vitae, alias, eligendi nisi ab? Impedit cum laudantium sunt quasi corrupti aliquid?</Typography>
						</CustomCard>
						<div className="payment-int-tab">
							<Tabs
								orientation="vertical"
								variant="scrollable"
								value={value}
								onChange={handleChange}
								indicatorColor="primary"
								aria-label="Vertical tabs example"
								className={`${classes.tabs} payment-sidebar`}
							>
								<Tab style={{ backgroundImage: "url(" + require('assets/Images/stripe-sm.png') + ")", backgroundSize: '85%', backgroundPosition: 'center center' }} className="payment-logo" {...a11yProps(0)} />
								<Tab style={{ backgroundImage: "url(" + require('assets/Images/paypal-sm.png') + ")", backgroundSize: '82%	', backgroundPosition: 'center center' }} className="payment-logo" {...a11yProps(1)} />
							</Tabs>
							<TabPanel value={value} index={0}>
								<Box mb={4}>
									<Typography variant="h6">Live Stripe Account</Typography>
									<Typography variant="body2"><a href='# '>Click here</a> to learn how to connect your payment processor</Typography>
								</Box>
								<Box width="100%" mb={4}>
									<TextField style={{width: '100%'}} id="outlined-basic" label="Public Key" variant="outlined" defaultValue="123xxxxxxxxxxx999" />
								</Box>
								<Box width="100%" mb={4}>
									<TextField style={{width: '100%'}} id="outlined-basic" label="Secret Key" variant="outlined" defaultValue="ZXYxxxxxxxxxxxABS" />
								</Box>
								<Button variant="contained" color="primary">Save</Button>

							</TabPanel>
							<TabPanel value={value} index={1}>
								<Box mb={4}>
									<Typography variant="h6">Live Paypal Account</Typography>
									<Typography variant="body2"><a href="# ">Click here</a> to learn how to connect your payment processor</Typography>
								</Box>
								<Box width="100%" mb={4}>
									<TextField style={{width: '100%'}} id="outlined-basic" label="Public Key" variant="outlined" defaultValue="789xxxxxxxxxxx787" />
								</Box>
								<Box width="100%" mb={4}>
									<TextField style={{width: '100%'}} id="outlined-basic" label="Secret Key" variant="outlined" defaultValue="ABSxxxxxxxxxxxZAY" />
								</Box>
								<Button variant="contained" color="primary">Save</Button>
							</TabPanel>
						</div>
					</div>
				</Box>
			</Container>
		</div>
	);
}
