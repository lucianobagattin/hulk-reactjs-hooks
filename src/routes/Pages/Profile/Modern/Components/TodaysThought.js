/**
 * Today Thought
 */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Box} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	thoughtBg: {
		backgroundImage: "url(" + require('assets/Images/balls.jpg') + ")",
		overflow: "hidden",
		backgroundSize: "cover",
		backgroundPosition: "center", 
		height: "100%",
		position:"relative"
	}
}));

export default function TodaysThought() {
	const classes = useStyles();

	return (
		<Box textAlign="center">
			<Box className={classes.thoughtBg} borderRadius={5} py={6} px={4}>
				<div className="overlay-dark"></div>
				<Box fontSize="h6.fontSize" mb={2} className="text-white relative">Today's Thought</Box>
				<Typography variant="body2" className="text-white relative">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</Typography>
			</Box>
		</Box>
	);
}