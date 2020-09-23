/**
 * Blog Routing File
 */
import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import {
   AsyncAgGridComponent,
   AsyncBasicTableComponent,
   AsyncSearchTableComponent,
   AsyncCustomTableComponent,
   AsyncFullPageUrlsComponent
} from 'components/AsyncComponent/AsyncComponent';

const Tables = ({ match }) => (
   <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/ag-grid`}></Redirect>
      <Route path={`${match.url}/ag-grid`} component={AsyncAgGridComponent}></Route>
      <Route path={`${match.url}/basic-table`} component={AsyncBasicTableComponent}></Route>
      <Route path={`${match.url}/search-table`} component={AsyncSearchTableComponent}></Route>
      <Route path={`${match.url}/custom-table`} component={AsyncCustomTableComponent}></Route>
      <Route path={`${match.url}/`} component={AsyncFullPageUrlsComponent}></Route>
   </Switch>
)
export default Tables;