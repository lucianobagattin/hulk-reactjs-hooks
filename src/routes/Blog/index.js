/**
 * Blog Routing File
 */
import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import {
   AsyncBlogGridComponent,
   AsyncBlogDetailComponent,   
   AsyncFullPageUrlsComponent
} from 'components/AsyncComponent/AsyncComponent';

const Blog = ({ match }) => (
   <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/blog-grid`}></Redirect>
      <Route path={`${match.url}/blog-grid`} component={AsyncBlogGridComponent}></Route>
      <Route path={`${match.url}/blog-detail/:id`} component={AsyncBlogDetailComponent}></Route>    
      <Route path={`${match.url}/`} component={AsyncFullPageUrlsComponent}></Route>  
   </Switch>
)
export default Blog;