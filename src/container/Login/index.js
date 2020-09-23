import React,{useState} from 'react';
import { useDispatch,useSelector  } from 'react-redux';
import { TextField, Button, Fab, Box, Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';

// redux action
import {
	signinUserWithFirebase,
	signinUserWithGoogle,
	signinUserWithFacebook,
	signinUserWithTwitter,
	signinUserWithGithub
} from 'actions';

function Login(props) {
	//constructor
	const [formErrors, setFormErrors] = useState({
				blankEmail: false,
				invalidEmail: false,
				blankPassword: false
			});
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error] = useState('');

	const dispatch = useDispatch();
	const settings = useSelector(state => state.settings);
	/**
	 * Function to login user using Firebase
	 */
	const onUserLogin = async ()  => {
		let fieldValidationErrors = formErrors;
		if (email === "") { fieldValidationErrors.blankEmail = true; }
		if (password === "") { fieldValidationErrors.blankPassword = true; }
		if (!validateEmail(email)) { fieldValidationErrors.invalidEmail = true; }
		await setFormErrors(fieldValidationErrors);
		if (email !== '' && password !== '') {
			var userDetails = { email, password }
			dispatch(signinUserWithFirebase(userDetails,props.history));
		}
	}

	/**
	* Function is use for check the email validation.
	*/
	const validateEmail = (email) => {
		let emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
		return emailValid;
	}

	/**
	 * On User Sign Up
	 */
	const onUserSignUp = () => {
		props.history.push('/register');
	}
	const onForgotPassword = () => {
		props.history.push('/forgot-password2');
	}

	// main render function
		const { blankEmail, blankPassword, invalidEmail } = formErrors;
		const { isDarkModeActive } = settings;
		return (
			<div>
				<div className="session-wrapper">
					<Grid container justify="center" alignItems="center">
						<Grid item  xs={12} sm={12} md={6} lg={4} className="login-wrap">
							<div className="login-wrapper text-center" >
								<div className="w-100">
									<div className="session-logo">
										{isDarkModeActive ?
											<img className="img-fluid" alt="img" width="100" src={require(`assets/Images/hulk-light.png`)} />
											:
											<img className="img-fluid" alt="img" width="100" src={require(`assets/Images/hulk-dark.png`)} />
										}
									</div>
									<form className="login-form">
										<Box mb={3}>
											<TextField
												required
												fullWidth
												id="username"
												type="email"
												name="email"
												label="Email Address"
												placeholder="Please enter your email address."
												className=""
												value={email}
												onChange={(event) => setEmail(event.target.value)}
												error={blankEmail || invalidEmail || error ? true : false}
											/>
											{blankEmail &&
												<Box component="span" color="error.main" textAlign="left" display="block" fontSize="subtitle2.fontSize" pt={1}>Email cannot be empty.</Box>
											}
											{!blankEmail && invalidEmail &&
												<Box component="span" color="error.main" textAlign="left" display="block" fontSize="subtitle2.fontSize" pt={1}>The email address is badly formatted.</Box>
											}
										</Box>										
										<Box mb={3}>
											<TextField
												required
												fullWidth
												id="login-password"
												label="Password"
												placeholder="Please enter your login password."
												className=""
												type="password"
												value={password}
												error={blankPassword || error ? true : false}
												onChange={(event) => setPassword(event.target.value)}
											/>
											{blankPassword &&
												<Box component="span" color="error.main" textAlign="left" display="block" fontSize="subtitle2.fontSize" pt={1}>Password cannot be empty</Box>
											}
										</Box>
										<Box mb="40px" pt="20px">
											<Button
												color="primary"
												className="btn-block blockBtn w-100"
												variant="contained"
												size="large"
												onClick={onUserLogin}
											>
												Sign In
											</Button>
										</Box>
										<Box fontSize="subtitle2.fontSize">
											<Box style={{ cursor:'pointer'}} color="primary.main" onClick={() => onForgotPassword()}>Forgot password?</Box>
										</Box>
										<div className="social-login-wrapper">
											<Typography variant="body2">Sign in with</Typography>
											<div className="social-list">
												<Fab size="small" variant="round" className="text-white facebook-color"
													onClick={() => dispatch(signinUserWithFacebook(props.history))}
												>
													<i className="fab fa-facebook-f"></i>
												</Fab>
												<Fab size="small" variant="round" className="text-white google-color"
													onClick={() => dispatch(signinUserWithGoogle(props.history))}
												>
													<i className="fab fa-google-plus-g"></i>
												</Fab>
												<Fab size="small" variant="round" className="text-white twitter-color"
													onClick={() => dispatch(signinUserWithTwitter(props.history))}
												>
													<i className="fab fa-twitter"></i>
												</Fab>
												<Fab size="small" className="text-white github-color"
													onClick={() => dispatch(signinUserWithGithub(props.history))}
												>
													<i className="fab fa-github-alt"></i>
												</Fab>
											</div>
										</div>
										<div className="or-sign-up">
											<Typography variant="body2">Not Having an Account</Typography>
											<Button variant="outlined" size="large" color="primary" onClick={() => onUserSignUp()}>Sign Up</Button>
										</div>
									</form>
								</div>
							</div>
						</Grid>
						<Grid item xs={12} sm={12} md={6} lg={8} style={{ backgroundImage: "url(" + require('assets/Images/session1bg.jpg') + ")", backgroundSize: 'cover', backgroundPosition: 'center right' }} className="img-session">
							<div className="login-content">
								<Box fontSize="h1.fontSize" fontWeight="h1.fontWeight" mb={4} color="common.white">
									Benefit Yourself With Our 100+ Designs
								</Box>
								<Button variant="contained" className="btn-block-md" onClick={() => onUserSignUp()}>Sign Up</Button>
							</div>
						</Grid>
					</Grid>
				</div>
			</div>
		);
}


export default Login;