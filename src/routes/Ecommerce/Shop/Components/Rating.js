/**
 * Rating component
 */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Icon } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	ratingIcon: {
		color: theme.palette.warning.main,
		marginRight: 5,
	},
}));

export default function Icons() {
	const classes = useStyles();

	return (
		<div>
			<Box>
				<Icon className={classes.ratingIcon}>star</Icon>
				<Icon className={classes.ratingIcon}>star</Icon>
				<Icon className={classes.ratingIcon}>star</Icon>
				<Icon className={classes.ratingIcon}>star</Icon>
				<Icon className={classes.ratingIcon}>star</Icon>
			</Box>
			<Box>
				<Icon className={classes.ratingIcon}>star</Icon>
				<Icon className={classes.ratingIcon}>star</Icon>
				<Icon className={classes.ratingIcon}>star</Icon>
				<Icon className={classes.ratingIcon}>star</Icon>
				<Icon className={classes.ratingIcon}>star_border</Icon>
			</Box>
			<Box>
				<Icon className={classes.ratingIcon}>star</Icon>
				<Icon className={classes.ratingIcon}>star</Icon>
				<Icon className={classes.ratingIcon}>star</Icon>
				<Icon className={classes.ratingIcon}>star_border</Icon>
				<Icon className={classes.ratingIcon}>star_border</Icon>
			</Box>
			<Box>
				<Icon className={classes.ratingIcon}>star</Icon>
				<Icon className={classes.ratingIcon}>star</Icon>
				<Icon className={classes.ratingIcon}>star_border</Icon>
				<Icon className={classes.ratingIcon}>star_border</Icon>
				<Icon className={classes.ratingIcon}>star_border</Icon>
			</Box>
			<Box>
				<Icon className={classes.ratingIcon}>star</Icon>
				<Icon className={classes.ratingIcon}>star_border</Icon>
				<Icon className={classes.ratingIcon}>star_border</Icon>
				<Icon className={classes.ratingIcon}>star_border</Icon>
				<Icon className={classes.ratingIcon}>star_border</Icon>
			</Box>
		</div>
	);
}