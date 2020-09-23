/**
 * Server Not Found
 */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Grid, Typography, Box, Fab, Tooltip, Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	btn: {
		background: '#cccccc',
		color: theme.palette.common.white,
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		boxShadow: 'none',
	}
}));
function ServerNotFound() {
	const classes = useStyles();

	return (
		<div className="page-500">
			<div className="page-space-top">
				<Container>
					<Box className="">
						<Grid container justify="center" alignItems="center"  direction="row">
							<Grid item xs={12} sm={12} md={6} xl={6} className="page-500-img-wrap">
								<div className="page-500-img">
									<img src={require('assets/Images/404-lamp.png')} alt="site logo" />
								</div>
							</Grid>
							<Grid item xs={12} sm={12} md={6} xl={6}>
								<div className="page-500-content">
									<Box component="span" color="text.primary">500</Box>
									<Typography variant="h5">
										Server Not Found
									</Typography>
									<Typography variant="body2">
										Sorry For Inconvenience, We Are Working On It
									</Typography>
									<Box mt={3}>
										<Tooltip title="Previous Page" placement="bottom">
											<Fab aria-label="arrow_back" className={classes.btn} component={Link} to="/app/dashboard/dashboard1">
												<Box fontSize="35px" className="material-icons">arrow_back</Box>
											</Fab>
										</Tooltip>
										<Tooltip title="Home" placement="bottom">
											<Fab aria-label="home" className={classes.btn} component={Link} to="/app/dashboard/dashboard1">
												<Box fontSize="35px" className="material-icons">home</Box>
											</Fab>
										</Tooltip>
										<Tooltip title="Search" placement="bottom">
											<Fab aria-label="search" className={classes.btn} component={Link} to="#">
												<Box fontSize="35px" className="material-icons">search</Box>
											</Fab>
										</Tooltip>
									</Box>
								</div>
							</Grid>
						</Grid>
					</Box>
				</Container>
			</div>
		</div>
	);
}

export default ServerNotFound;