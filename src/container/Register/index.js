import React,{useState} from 'react';
import { useDispatch,useSelector  } from 'react-redux';
import { TextField, Button, Typography, Grid, Box, Checkbox } from "@material-ui/core";

// redux action
import {
	signupUserWithFirebase
} from 'actions';

function Register(props) {
	const [formErrors, setFormErrors] = useState({
				blankEmail: false,
				invalidEmail: false,
				blankPassword: false
			});
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();
	const settings = useSelector(state => state.settings);
	/**
	 * Signup user using firebase
	 */
	const onUserSignup = async() => {
		let fieldValidationErrors =formErrors;
		if (email === "") { fieldValidationErrors.blankEmail = true; }
		if (password === "") { fieldValidationErrors.blankPassword = true; }
		if (!validateEmail(email)) { fieldValidationErrors.validEmail = true; }
		await setFormErrors(fieldValidationErrors);
		if (email !== '' && password !== '') {
			var userDetails = { email, password }
			dispatch(signupUserWithFirebase(userDetails,props.history));
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
	const onUserSignIn = () => {
		props.history.push('/login');
	}

	const { blankEmail, blankPassword, validEmail } = formErrors;
	const {isDarkModeActive } = settings;
	return (
		<div>
			<div className="session-wrapper">
				<Grid container justify="center" alignItems="center">
					<Grid item xs={12} sm={12} md={6} lg={4} className="login-wrap">
						<div className="login-wrapper text-center">
							<div className="w-100">
								<div className="session-logo">
									{isDarkModeActive ?
										<img className="img-fluid" alt="img" width="100" src={require(`assets/Images/hulk-light.png`)} />
										:
										<img className="img-fluid" alt="img" width="100" src={require(`assets/Images/hulk-dark.png`)} />
									}
								</div>
								<form className="signup-form">
									<Box mb={3}>
										<TextField
											required
											fullWidth
											id="fname"
											type="text"
											name="email"
											label="Full Name"
											placeholder="John Doe"
											className=""
										/>
									</Box>
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
											error={blankEmail && validEmail ? true : false}
										/>
										{blankEmail &&
											<Box component="span" color="error.main" textAlign="left" display="block" fontSize="subtitle2.fontSize" pt={1}>Email cannot be empty.</Box>
										}
										{!blankEmail && validEmail &&
											<Box component="span" color="error.main" textAlign="left" display="block" fontSize="subtitle2.fontSize" pt={1}>Invalid email format</Box>
										}
									</Box>
									<Box mb={3}>
										<TextField
											required
											fullWidth
											id="signup-password"
											label="Password"
											placeholder="Please enter your password."
											className=""
											type="password"
											value={password}
											error={blankPassword ? true : false}
											onChange={(event) => setPassword(event.target.value)}
										/>
									</Box>
									
									<Box display="flex" alignItems="center">
										<Checkbox color="primary" value="uncontrolled" inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
										<Box component="span" fontSize="subtitle2.fontSize">I agree to all statements with
											&nbsp;<Box component="span" color="primary.main">terms of services</Box>
										</Box>
									</Box>
									<Box mb="30px" pt="20px">
										<Button
											variant="contained" color="primary"
											className="btn-block blockBtn w-100"
											size="large"
											onClick={onUserSignup}
										>
											Sign Up
										</Button>
									</Box>	
									<Box mb={1}>
										<Typography variant="body2">Already have an account?</Typography>
									</Box>
									<Button variant="outlined" color="primary" onClick={() => onUserSignIn()}>Sign In</Button>
								</form>
							</div>
						</div>
					</Grid>
					<Grid item xs={12} sm={12} md={6} lg={8} className="img-session" style={{ backgroundImage: "url(" + require('assets/Images/session-signup.jpg') + ")", backgroundSize: 'cover', backgroundPosition: 'center right' }}>
						<div className="login-content">
							<Box fontSize="h1.fontSize" fontWeight="h1.fontWeight" mb={4} color="common.white">Already Have An Account?</Box>
							<Button variant="contained" className="btn-block-md" onClick={() => onUserSignIn()}>Sign In</Button>
						</div>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}


export default Register;