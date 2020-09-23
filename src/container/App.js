/**
 *  App.js :: contains main layout of APP.
 */
import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HulkThemeProvider from './HulkThemeProvider';
import { NotificationContainer } from 'react-notifications';
import { CssBaseline } from '@material-ui/core';

// APP signin and signup imports
import AppSignin from './Signin/SigninFirebase';
import AppSignup from './Signup/SignupFirebase';
import AppForgotPassword from './ForgotPassword/ForgotPassword';
import Login from './Login';
import Register from './Register';
import ForgotPassword2 from './ForgotPassword2';

// deafult layout
import DefaultLayout from './DefaultLayout'

// async components
import {
   AsyncErrorPage404Component,
	AsyncErrorPage500Component,
} from 'components/AsyncComponent/AsyncComponent';

import Auth from '../Auth/Auth';

// callback component
import Callback from "components/Callback/Callback";

//Auth0 Handle Authentication
const auth = new Auth();
const handleAuthentication = ({ location }) => {
   if (/access_token|id_token|error/.test(location.hash)) {
      auth.handleAuthentication();
   }
}
/**
 * Initial Path To Check Whether User Is Logged In Or Not
 */
const InitialPath = ({ component: Component, authUser, ...rest }) =>
	<Route
		{...rest}
		render={props =>
			authUser
				? <Component {...props} />
				: <Redirect
					to={{
						pathname: '/signin',
						state: { from: props.location }
					}}
				/>}
	/>;

function App(props) {
	const authUser = useSelector(state => state.authUser);
	const { user } = authUser;
	const { location, match } = props;
	if (location.pathname === "/") {
		if (user === null) {
			return (<Redirect to="/signin" />);
		} else {
			return (<Redirect to="/app/dashboard/dashboard1" />);
		}
	}
	return (
      <HulkThemeProvider>
			<CssBaseline />
			<NotificationContainer />
			<InitialPath
				path={`${match.url}app`}
				authUser={user}
				component={DefaultLayout}
			/>
			<Route path="/signin" component={AppSignin} />
			<Route path="/signup" component={AppSignup} />
			<Route path="/forgot-password" component={AppForgotPassword} />
			<Route path="/login" component={Login} />
			<Route path="/register" component={Register} />
			<Route path="/forgot-password2" component={ForgotPassword2} />
			<Route path="/error/404" component={AsyncErrorPage404Component} />
         <Route path="/error/500" component={AsyncErrorPage500Component} />
         <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
         }} />
      </HulkThemeProvider>
	);
}

export default App;