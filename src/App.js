/**
 * Main APP
 */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

// Firebase
import './firebase';

// Hulk CSS
import './lib/hulkCss';
// App Conatiner
import App from './container/App';

// Store
import { store } from './store';

// setup fake backend
import { configureFakeBackend } from './_helpers';
configureFakeBackend();

function MainApp() {
	return (
      <Provider store={store}>
			<MuiPickersUtilsProvider utils={MomentUtils}>
				<Router>
					<Switch>
						<Route path="/" component={App} />
					</Switch>
				</Router>
			</MuiPickersUtilsProvider>
      </Provider>
	);
}

export default MainApp;