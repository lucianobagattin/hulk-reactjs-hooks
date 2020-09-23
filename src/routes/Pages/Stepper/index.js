/**
 * Pages Routing File
 */

import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {
	AsyncHorizontalStepperComponent,
   AsyncVerticalStepperComponent,
   AsyncFullPageUrlsComponent
} from 'components/AsyncComponent/AsyncComponent';

const Stepper = ({ match }) => (
   
   <Switch>
      <Route path={`${match.url}/horizontal-stepper`} component={AsyncHorizontalStepperComponent}></Route>
      <Route path={`${match.url}/vertical-stepper`} component={AsyncVerticalStepperComponent}></Route>
      <Route path={`${match.url}/`} component={AsyncFullPageUrlsComponent}></Route>
   </Switch>
)
export default Stepper;