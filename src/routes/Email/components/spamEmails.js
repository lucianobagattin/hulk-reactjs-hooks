/**
 * Spam Emails
*/
import React, { useEffect } from 'react';
import { useDispatch  } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

// Components
import EmailListing from './emailListing';
import EmailDetail from './emailDetail';

// Redux actions
import { getSpamEmails } from 'actions';

function SpamEmails(props) {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getSpamEmails());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[]);

	const { match } = props;

	return (
		<Switch>
			<Route exact path={match.url} component={EmailListing} />
			<Route path={`${match.url}/:id`} component={EmailDetail} />
		</Switch>
	);
}

export default SpamEmails;
