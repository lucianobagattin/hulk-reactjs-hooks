/**
 * Page Not Found
*/
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Grid, Typography, Box, Fab, Tooltip, Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	btn:{
		background:'rgba(0,0,0,0.1)',
		color: theme.palette.common.white,
		marginLeft: theme.spacing(1),
		  marginRight: theme.spacing(1),
		  boxShadow:'none',
	}
 }));

function NotFound() {
	const classes = useStyles();
	
	return (
		<div className="page-404">
			<div className="page-space-top">
				<Container>
					<Box className="">
						<Grid container justify="center" alignItems="center" spacing={3} direction="row" className="vh-100 text-center">
							<Grid item xs={12} sm={7} className="page-404-img-wrap">
								<div className="page-404-img">
									<img src={require('assets/Images/404-img.png')} alt="site logo" className="img-fluid" />
								</div>
								<div className="page-404-content">
									<Typography variant="h5">
										Sorry Not Found
									</Typography>
									<Typography variant="body2">
										The link you followed is probably broken, or the page has been removed
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

export default NotFound;