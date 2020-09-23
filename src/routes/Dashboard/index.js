/**
 * Courses Routing File
 */

import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {
	AsyncDashboard1Component,
   AsyncFullPageUrlsComponent,
   AsyncDashboard2Component,
   AsyncDashboard3Component
} from 'components/AsyncComponent/AsyncComponent';

const Dashboard = ({ match }) => (
	<Switch>  
		<Route path={`${match.url}/dashboard1`} component={AsyncDashboard1Component}></Route>		
		<Route path={`${match.url}/dashboard2`} component={AsyncDashboard2Component}></Route>
      <Route path={`${match.url}/dashboard3`} component={AsyncDashboard3Component}></Route>
      <Route path={`${match.url}/`} component={AsyncFullPageUrlsComponent}></Route>
	</Switch>
)
export default Dashboard;