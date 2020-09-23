/**
 * Simple App Bar
 */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, IconButton, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
		color:theme.palette.common.white,
	},
}));

export default function SimpleAppBar() {
  	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<IconButton edge="start" className={`menu-icon ${classes.menuButton}`} color="inherit" aria-label="menu">
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						News
					</Typography>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}
