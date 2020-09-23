/* 
 * App Routes
 *
 */
import React from 'react';
import { Route } from 'react-router-dom';

// app default layout
import HulkAppLayout from 'components/HulkAppLayout';

// router service
import routerService from "../services/_routerService";

function DefaultLayout(props){
	const { match } = props;
	return (
		<HulkAppLayout>
			{routerService && routerService.map((route, key) =>
				<Route key={key} path={`${match.url}/${route.path}`} component={route.component} />
			)}
		</HulkAppLayout>
	);
}

export default DefaultLayout;