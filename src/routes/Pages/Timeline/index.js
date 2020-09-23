/**
 * Pages Routing File
 */

import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {
	AsyncVerticalTimelineComponent,
   AsyncHorizontalTimelineComponent,
   AsyncFullPageUrlsComponent
} from 'components/AsyncComponent/AsyncComponent';

const Timeline = ({ match }) => (
   <Switch>
      <Route path={`${match.url}/horizontal-timeline`} component={AsyncHorizontalTimelineComponent}></Route>
      <Route path={`${match.url}/vertical-timeline`} component={AsyncVerticalTimelineComponent}></Route>
      <Route path={`${match.url}/`} component={AsyncFullPageUrlsComponent}></Route>
   </Switch>
)
export default Timeline;