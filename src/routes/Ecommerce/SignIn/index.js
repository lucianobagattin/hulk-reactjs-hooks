/**
 * SignIn
 */
import React from 'react';
import { Button, Grid, Typography, TextField, Box, Container } from '@material-ui/core';
import { PageTitleBarWithImage } from 'components/GlobalComponents';
import IntlMessages from 'util/IntlMessages';

function SignIn(props) {
	const onCheckoutPage = (e) => {
		props.history.push('/app/ecommerce/checkout');
	};
	return (
		<div className="ecommerce-sigin-wrap white-btn-color">
			<PageTitleBarWithImage
           title={<IntlMessages id="sidebar.signIn" />}
				desc="Get access to offers, orders, wishlist, recommendations and a lot more."
				image="title-signin.png"
           buttonText={<IntlMessages id="component.getMembership" />}
				buttonLink="/signup"
			/>
			<div className="page-space">
				<Container maxWidth="lg">
					<Box px={{ xs: '12px', lg: 0 }}>
						<Box className="white-container">
						<Grid container direction="row" >
							<Grid item xs={12} sm={6} md={6} className="border-right">
								<Box className="login-side">
                          <Typography variant="h5"><IntlMessages id="component.alreadyHaveAccount?" /></Typography>
									<TextField className="h-input"
										id="standard-full-width"
										label="Login"
										placeholder="Enter Your Email"
										fullWidth
										margin="normal"
										InputLabelProps={{
											shrink: true,
										}}
									/>
									<TextField className="h-input"
										id="standard-full-width"
										label="Password"
										placeholder="Enter Your Password"
										fullWidth
										margin="normal"
										type="password"
										InputLabelProps={{
											shrink: true,
										}}
									/>
									<p>Forgot your password?</p>
									<p>Don't have an account? <Box component="span" style={{ cursor:'pointer'}} color="primary.main">Click here</Box></p>
									<Button variant="outlined" className="primary-bg-btn" onClick={onCheckoutPage} color="primary" >
										Login
								</Button>
								</Box>
							</Grid>
							<Grid item xs={12} sm={6} md={5}>
								<Box className="guest-side">
									<Typography variant="h4">
                             <IntlMessages id="component.continueAsGuest?" />
								   </Typography>
									<Box my={5}>
										<Typography variant="body2">
											If you want to shop as guest then you will not able to track your online orders, access your purchase history, receipts, whishlist and more.
									</Typography>
									</Box>
									<Button variant="outlined" className="primary-bg-btn" color="primary" onClick={onCheckoutPage}>
										Proceed
								</Button>
								</Box>
							</Grid>
						</Grid>
						</Box>
					</Box>
				</Container>
			</div>
		</div>
	);
}

export default SignIn;