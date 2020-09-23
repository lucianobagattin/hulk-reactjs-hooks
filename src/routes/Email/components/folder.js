
/**
 * Email Listing Component
 */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// folders
import Inbox from './inbox';
import SentEmails from './sentEmails';
import DraftsEmails from './draftEmails';
import SpamEmails from './spamEmails';
import TrashEmails from './trashEmails';

function Folders(props) {
	const { match } = props;
	return (
		<div className="list-wrap">
			<Switch>
				<Redirect exact from={`${match.url}/`} to={`${match.url}/inbox`} />
				<Route path={`${match.url}/inbox`} component={Inbox} />
				<Route path={`${match.url}/sent`} component={SentEmails} />
				<Route path={`${match.url}/drafts`} component={DraftsEmails} />
				<Route path={`${match.url}/spam`} component={SpamEmails} />
				<Route path={`${match.url}/trash`} component={TrashEmails} />
				<Route path={`${match.url}/Primary`} component={Inbox} />
				<Route path={`${match.url}/Social`} component={Inbox} />
				<Route path={`${match.url}/Marketing`} component={Inbox} />
			</Switch>
		</div>
	);
}


export default Folders;
