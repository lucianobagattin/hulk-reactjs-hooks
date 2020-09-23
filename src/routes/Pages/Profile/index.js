/**
 * Profile Routing File
 */
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {
   AsyncStandardComponent,
   AsyncModernComponent,
   AsyncFullPageUrlsComponent
} from 'components/AsyncComponent/AsyncComponent';

const Profile = ({ match }) => (
   <Switch>
      <Route path={`${match.url}/standard`} component={AsyncStandardComponent} />
      <Route path={`${match.url}/modern`} component={AsyncModernComponent} />
      <Route path={`${match.url}/`} component={AsyncFullPageUrlsComponent}></Route>
   </Switch>
)

export default Profile;