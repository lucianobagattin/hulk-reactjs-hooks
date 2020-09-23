/**
 * Forget Password
*/
import React from 'react';
import { useSelector  } from 'react-redux';
import { TextField, Button, Box, Typography, Divider } from "@material-ui/core";
import { CustomCard } from 'components/GlobalComponents';
import { Link } from 'react-router-dom';

function ForgotPasswordFirebase(props){
	const settings = useSelector(state => state.settings);
	const {isDarkModeActive} = settings;
	return (
		<div>
			<div className="session-wrapper session-wrapper-v2">
				<Box className="session-box" mx="auto" display="flex" justifyContent="center" alignItems="center">
					<Box width="100%">
						<Box textAlign="center" className="session-logo" >
							{isDarkModeActive ?
								<img className="img-fluid" alt="img" width="100" src={require(`assets/Images/hulk-light.png`)} />
								:
								<img className="img-fluid" alt="img" width="100" src={require(`assets/Images/hulk-dark.png`)} />
							}
						</Box>
						<CustomCard>
							<form className="login-form text-center">
								<Typography variant="h6" color="textPrimary" className="title">Forgot Your Password?</Typography>
								<Typography variant="body2" color="textSecondary" className="subtitle">Not to worry, we got you! let's get you a new password</Typography>
								<Box my={2}>
									<TextField
										required
										fullWidth
										variant="outlined"
										id="username"
										type="email"
										name="email"
										placeholder="Please enter your email address."
										className="outlined-input"
									/>
								</Box>
								<Box py={3}>
									<Button
										color="primary"
										className="btn-block blockBtn w-100"
										variant="contained"
										size="large"
									>
										Reset My Password
										</Button>
								</Box>
								<Divider></Divider>
								<Box pt={2} fontSize="subtitle2.fontSize">
									<Box style={{ cursor: 'pointer' }} color="primary.main" component={Link} to="/signin" >Back To Sign In</Box>
									
								</Box>
							</form>
						</CustomCard>
					</Box>
				</Box>
			</div>
		</div>
	);
}



export default ForgotPasswordFirebase;