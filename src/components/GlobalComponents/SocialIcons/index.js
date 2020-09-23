/**
 * social icon
 */
import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Fab,Box } from '@material-ui/core';

const useStyles = makeStyles({
	root: {
		display: 'inline-block'
	},
	fab:{
		fontSize:'1.75rem',
		marginLeft:'1px',
		backgroundColor:'transparent',
		boxShadow:'none !important',
		transition:'all 0.3s ease-out',
		'&:hover': {
			backgroundColor:'transparent',
		},
	},
	facebook:{
		color:'#3c5a9a !important',
	},
	twitter:{
		color:'#1DA1F2 !important',
	},
	linked:{
		color:'#0073b1 !important',
	},
	insta:{
		color:'#9b3179 !important',
	}
});

export function SocialIcons() {
	const classes = useStyles();

	return (
		<Fragment>
			<Box className={classes.root}>
				<Fab size="small" className={`${classes.fab} ${classes.facebook}`} disableRipple component={Link} to="#">
					<i className="fab fa-facebook-square"></i>
				</Fab>
				<Fab size="small" className={`${classes.fab} ${classes.twitter}`} disableRipple component={Link} to="#">
					<i className="fab fa-twitter"></i>
				</Fab>
				<Fab size="small" className={`${classes.fab} ${classes.linked}`} disableRipple component={Link} to="#">
					<i className="fab fa-linkedin"></i>
				</Fab>
				<Fab size="small" className={`${classes.fab} ${classes.insta}`} disableRipple component={Link} to="#">
					<i className="fab fa-instagram"></i>
				</Fab>
			</Box>
		</Fragment>
	)
}