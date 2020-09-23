/**
 * Widget Top Sellers Ecommerce Dashboard
 */

import React, { Fragment, useState } from 'react';
import { Typography, AppBar, Tabs, Tab, Box} from '@material-ui/core';

//Components
import BillingForm from './BillingForm';
import Payment from './Payment';
import IntlMessages from 'util/IntlMessages';
/** Function is responsible to display Tab panel content */
function TabContent(props) {
	const { children, dir } = props;
	return (
		<Typography component="div" dir={dir}>
			{children}
		</Typography>
	);
}

function CheckOutForm(props) {
	/** Constructor */
	const [tabIndex,setTabIndex] = useState(0);
	
	/** Function to detect event changes */
	 const handleTabChange = (event,value) => {
	 	if (tabIndex === 0){
	 		setTabIndex(1);	
	 	}		
	}

	/** Function to handle change on swipe view */
	// const handleChangeIndex = index => {
	// 	setTabIndex(index);
	// }

	/** main function */
	return (
		<div className="checkout-tabs">
			<AppBar position="static" color="default" style={{ boxShadow: 'none' }}>
				<Tabs
					value={tabIndex}
					onChange={handleTabChange}
					indicatorColor="primary"
					textColor="primary"
				>
					<Tab
						disabled
                 label={<Fragment><Box component="span" fontSize="subtitle2.fontSize" mr={1} /><IntlMessages id="component.shippingAddress" /></Fragment>}
					/>
					<Tab
						disabled
                 label={<Fragment><Box component="span" fontSize="subtitle2.fontSize" mr={1} /><IntlMessages id="component.payment" /></Fragment>}
					/>
				</Tabs>
			</AppBar>
			{tabIndex === 0 && <TabContent><BillingForm onComplete={handleTabChange} /></TabContent>}
			{tabIndex === 1 && <TabContent><Box py={8}><Payment /></Box></TabContent>}
		</div>
	);
}

export default CheckOutForm;