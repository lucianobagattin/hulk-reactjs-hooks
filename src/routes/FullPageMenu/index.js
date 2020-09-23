/**
 * Courses Routing File
 */

import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {
	AsyncFullPageUrlsComponent,
   } from 'components/AsyncComponent/AsyncComponent';

const PageMenu = ({ match }) => (
	<Switch>
		<Route path={`${match.url}/`} component={AsyncFullPageUrlsComponent}></Route>
	</Switch>
)
export default PageMenu;