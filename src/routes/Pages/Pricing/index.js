/**
 * Pricing Routing File
 */

import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {
	AsyncPricingV1Component,
   AsyncPricingV2Component,
	AsyncPricingUpgradeComponent,
	AsyncFullPageUrlsComponent
} from 'components/AsyncComponent/AsyncComponent';

const Pricing = ({ match }) => (
   
   <Switch>
      <Route path={`${match.url}/style1`} component={AsyncPricingV1Component}></Route>
      <Route path={`${match.url}/style2`} component={AsyncPricingV2Component}></Route>
      <Route path={`${match.url}/pricing-upgrade`} component={AsyncPricingUpgradeComponent}></Route>
		<Route path={`${match.url}/`} component={AsyncFullPageUrlsComponent}></Route>
   </Switch>
)
export default Pricing;