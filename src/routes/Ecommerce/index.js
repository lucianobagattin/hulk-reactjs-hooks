/**
 * Ecommerce Routing File
 */

import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {
	AsyncShopComponent,
	AsyncProductDetailComponent,
	AsyncCartComponent,
	AsyncCheckoutComponent,
	AsyncInvoiceComponent,
   AsyncSignInComponent,
   AsyncFullPageUrlsComponent
} from 'components/AsyncComponent/AsyncComponent';

const Ecommerce = ({ match }) => (
	<Switch>
		<Route path={`${match.url}/shop`} component={AsyncShopComponent}></Route>
		<Route path={`${match.url}/product-detail/:id`} component={AsyncProductDetailComponent}></Route>
		<Route path={`${match.url}/cart`} component={AsyncCartComponent}></Route>
		<Route path={`${match.url}/checkout`} component={AsyncCheckoutComponent}></Route>
		<Route path={`${match.url}/invoice`} component={AsyncInvoiceComponent}></Route>
		<Route path={`${match.url}/signin`} component={AsyncSignInComponent}></Route>
        <Route path={`${match.url}/`} component={AsyncFullPageUrlsComponent}></Route>
	</Switch>
)
export default Ecommerce;