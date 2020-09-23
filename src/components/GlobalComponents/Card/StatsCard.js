/**
 * StatsCard Component
 */
import React from 'react';
import { Card, CardContent, Typography, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
	card: {
		padding: 0,
		backgroundColor: theme.palette.background.paper,
		boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
		borderRadius: 4,
	},
	title:{
		fontWeight:'500',
		padding: '1.25rem 1.25rem 0',
		marginBottom:0,
	},
	cardContent: {
		padding: '0 1.25rem !important',
	}
}));

function StatsCard(props) {
	const classes = useStyles();
	return (
		<Card className={classes.card}>
			<Typography gutterBottom className={classes.title} variant="subtitle1">
				{props.title}
			</Typography>
			<CardContent className={classes.cardContent}>	
				{props.children}
			</CardContent>
			<div>
			{props.chart}
			</div>
		</Card>
	);
}

StatsCard.defaultProps = {
	title: "",
	titleAlign: "left"
}

export { StatsCard };