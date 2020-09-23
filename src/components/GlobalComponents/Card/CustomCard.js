/**
 * CustomCard Component
 */
import React, { Fragment } from 'react';
import { Card, CardContent, Typography, makeStyles, Divider } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
	card: {
		padding: '1.25rem',
		backgroundColor: theme.palette.background.paper,
		boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
		borderRadius: 4,
	},
	cardContent: {
		padding: '0 !important',
	},
	divider: {
		marginTop: '0.625rem'
	}
}));

function CustomCard(props) {
	const classes = useStyles();
	return (
		<Card className={`${classes.card} ${props.cardClasses ? props.cardClasses : ''}`}>
			<Fragment>
				{props.title ?
					<Typography variant="h6">
						{props.title}
					</Typography>
					:
					null
				}
			</Fragment>
			{props.showDivider ?
				<Divider className={classes.divider} />
				:
				null
			}
			<CardContent className={classes.cardContent}>
				{props.children}
			</CardContent>
		</Card>
	);
}

CustomCard.defaultProps = {
	title: "",
	titleAlign: "left"
}

export { CustomCard };