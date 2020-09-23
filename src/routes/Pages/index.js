/**
 * Pages Routing File
 */

import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Timeline from './Timeline';
import Stepper from './Stepper';
import Pricing from './Pricing';
import SignaturePad from './SignaturePad';
import Payment from './Payment';
import Profile from './Profile';

import {
   AsyncFaqComponent,
	AsyncFullPageUrlsComponent,
	AsyncContactGridComponent,
} from 'components/AsyncComponent/AsyncComponent';

const Pages = ({ match }) => (
   <Switch>
      <Route path={`${match.url}/faq`} component={AsyncFaqComponent}></Route>
		<Route path={`${match.url}/profile`} component={Profile}></Route>
		<Route path={`${match.url}/pricing`} component={Pricing}></Route>
		<Route path={`${match.url}/timeline`} component={Timeline}></Route>
      <Route path={`${match.url}/stepper`} component={Stepper}></Route>
		<Route path={`${match.url}/contact-grid`} component={AsyncContactGridComponent}></Route>
      <Route path={`${match.url}/signature-pad`} component={SignaturePad}></Route>
      <Route path={`${match.url}/payment`} component={Payment}></Route>                  
      <Route path={`${match.url}/`} component={AsyncFullPageUrlsComponent}></Route>
   </Switch>
)
export default Pages;