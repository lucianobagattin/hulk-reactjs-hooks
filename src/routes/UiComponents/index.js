/*
 * UiComponents Routing File 
 */
import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import {
   AsyncAppbarComponent,
   AsyncAvatarsComponent,
   AsyncButtonsComponent,
   AsyncBottomNavigationsComponent,
   AsyncChipComponent,
   AsyncListComponent,
   AsyncModalsComponent,
   AsyncFullPageUrlsComponent
} from 'components/AsyncComponent/AsyncComponent';

const UiComponents = ({ match }) => (
   <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/appbar`}></Redirect>
      <Route path={`${match.url}/appbar`} component={AsyncAppbarComponent}></Route>
      <Route path={`${match.url}/avatars`} component={AsyncAvatarsComponent}></Route>
      <Route path={`${match.url}/buttons`} component={AsyncButtonsComponent}></Route>
      <Route path={`${match.url}/bottom-navigations`} component={AsyncBottomNavigationsComponent}></Route>
      <Route path={`${match.url}/chip`} component={AsyncChipComponent}></Route>
      <Route path={`${match.url}/lists`} component={AsyncListComponent}></Route>            
      <Route path={`${match.url}/modals`} component={AsyncModalsComponent}></Route>
      <Route path={`${match.url}/`} component={AsyncFullPageUrlsComponent}></Route>
   </Switch>
)
export default UiComponents;