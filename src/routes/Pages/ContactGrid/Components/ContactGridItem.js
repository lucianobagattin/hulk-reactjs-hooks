import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardActions, Icon, Avatar, IconButton, Box, Typography } from '@material-ui/core';
import OperationButton from './OperationButton';

const useStyles = makeStyles(theme => ({
	thumb: {
		width: 100,
		height: 100,
		marginBottom: 10,
	}
}));

export default function ContactGridItem(props) {
	const classes = useStyles();
	const { contacts } = props;
	return (
		<Fragment>
			{contacts && contacts.map((contact, index) => (
				<div key={index} className="contact-grid-item">
					<Card>
						<CardContent>
							<div className="contact-grid-action">
								<OperationButton parentEditMethod={() => props.parentEditMethod(contact)} 
									parentMethod={() => props.parentMethod(contact)} 
									data={contact} />
							</div>
							<Avatar alt="Remy Sharp" className={classes.thumb} src={require(`assets/Images/avatars/${contact.image}`)} />
							<div className="contact-grid-content">
								<Box fontSize="subtitle1.fontSize" fontWeight="h6.fontWeight" mb="5px">{contact.name}</Box>
								<Typography variant="subtitle2">{contact.designation}</Typography>
								<Box display="flex" alignItems="center" justifyContent="center">
									<Box component="span" pr="5px" color="text.secondary" fontSize="body1.fontSize" className="icon fas fa-street-view"></Box>
									<Typography variant="subtitle2">{contact.address}</Typography>
								</Box>
							</div>
						</CardContent>
						<CardActions disableSpacing className="footer-icon">
							<IconButton size="small">
								<Icon style={{ fontSize: 20 }}>phone_iphone</Icon>
							</IconButton>
							<IconButton size="small">
								<Icon style={{ fontSize: 20 }}>chat_bubble</Icon>
							</IconButton>
							<IconButton size="small">
								<Icon style={{ fontSize: 20 }}>forum</Icon>
							</IconButton>
						</CardActions>
					</Card>
				</div>
			))};
		</Fragment>
	);
}