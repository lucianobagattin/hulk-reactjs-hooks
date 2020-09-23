/**
 * Sent Emails
 */
import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch  } from 'react-redux';

// Components
import EmailListing from './emailListing';
import EmailDetail from './emailDetail';

// Redux actions
import { getSentEmails } from 'actions';

function SentEmails(props) {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getSentEmails());
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

export default SentEmails;
