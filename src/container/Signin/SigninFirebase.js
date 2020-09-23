

import React, {useState} from 'react';
import { useDispatch,useSelector  } from 'react-redux';
import { TextField, Button, Fab, Box, Typography, Divider ,AppBar,Tabs, Tab  } from "@material-ui/core";
import { CustomCard } from 'components/GlobalComponents';

// redux action
import {
	signinUserWithFirebase,
	signinUserWithGoogle,
	signinUserWithFacebook,
	signinUserWithTwitter,
	signinUserWithGithub,
	signinUserWithJwt
} from 'actions';

import Auth from '../../Auth/Auth';
const auth = new Auth();

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function SigninFirebase(props){
	//constructor
	const [formErrors, setFormErrors] = useState({
				blankEmail: false,
				invalidEmail: false,
				blankPassword: false
			});
	const [value, setValue] = useState(0);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error] = useState('');

	const dispatch = useDispatch();
	const settings = useSelector(state => state.settings);

	/**
	 * Function to login user using Firebase
	 */
	 const onUserLogin = async () => {
		let fieldValidationErrors = formErrors;
		if (email === "") { fieldValidationErrors.blankEmail = true; }
		if (password === "") { fieldValidationErrors.blankPassword = true; }
		if (!validateEmail(email)) { fieldValidationErrors.invalidEmail = true; }
		await setFormErrors(fieldValidationErrors);
		if (email !== '' && password !== '') {
			var userDetails = { email, password }
			dispatch(signinUserWithFirebase(userDetails,props.history))
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
		props.history.push('/signup');
	}
	const onForgotPassword = () => {
		props.history.push('/forgot-password');
	}

	const loginAuth0 = () => {
      auth.login();
   }

   const onJwtLogin = (e) =>{
      if (email && password) {
      	dispatch(signinUserWithJwt({email,password}, props.history));
      }
   }
   const handleChange = (event, value) => {
		setValue(value);
	};

	const { blankEmail, blankPassword, invalidEmail } = formErrors;
	const {isDarkModeActive } = settings;
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
						<div	className="log-tab">
						<AppBar position="static">
							<Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
								<Tab label="Firebase" {...a11yProps(0)} />
								<Tab label="JWT" {...a11yProps(1)} />
							</Tabs>
				      </AppBar>
						</div>
						<TabPanel value={value} index={0} className="log-box">
							<CustomCard>
								<form className="login-form text-center">
									<Typography variant="subtitle2" >Log in to continue to :</Typography>
									<Typography variant="subtitle2" color="textPrimary" className="fw-500">Hulk</Typography>
									<Box my={3}>
										<TextField
											required
											fullWidth
											variant="outlined"
											id="username"
											type="email"
											name="email"
											placeholder="Please enter your email address."
											className="outlined-input"
											value={email}
											onChange={event => setEmail(event.target.value)}
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
											variant="outlined"
											id="login-password"
											placeholder="Please enter your login password."
											className="outlined-input"
											type="password"
											value={password}
											error={blankPassword || error ? true : false}
											onChange={event => setPassword(event.target.value)}
										/>
										{blankPassword &&
											<Box component="span" color="error.main" textAlign="left" display="block" fontSize="subtitle2.fontSize" pt={1}>Password cannot be empty</Box>
										}
									</Box>
									<Box mb="20px">
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
									<Box mb="20px">	
										<Button
                                 color="primary"
											className="btn-block blockBtn w-100"
											variant="contained"
											size="large"
                                 onClick={() => loginAuth0()}
                              >
                                 Sign In With Auth0
                      			</Button>
									</Box>
									
									<Typography variant="subtitle2">Sign in with</Typography>
									<div className="social-login-wrapper">
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
									<Divider></Divider>
									<Box display="flex" justifyContent="center" alignItems="center" pt={2}>
										<Box fontSize="subtitle2.fontSize" className="border-right" pr={1}>
											<Box style={{ cursor: 'pointer' }} color="primary.main" onClick={() => onForgotPassword()}>Can't log in ?</Box>
										</Box>
										<Box fontSize="subtitle2.fontSize" pl={1}>
											<Box style={{ cursor: 'pointer' }} color="primary.main" onClick={() => onUserSignUp()}>Sign up for an account</Box>
										</Box>
									</Box>
								</form>
							</CustomCard>
						</TabPanel>
						<TabPanel value={value} index={1} className="log-box">
							<CustomCard>
								<form className="login-form text-center">
									<Typography variant="subtitle2" >Log in to continue to :</Typography>
									<Typography variant="subtitle2" color="textPrimary" className="fw-500">Hulk</Typography>
                           <Box my={3}>
										<TextField
											required
											fullWidth
											variant="outlined"
											id="username"
											type="email"
											name="email"
											placeholder="Please enter your email address."
											className="outlined-input"
											value={email}
											onChange={event => setEmail(event.target.value)}
										/>
									</Box>										
									<Box mb={3}>
										<TextField
											required
											fullWidth
											variant="outlined"
											id="login-password"
											placeholder="Please enter your login password."
											className="outlined-input"
											type="password"
											value={password}
											onChange={event => setPassword(event.target.value)}
										/>
									
									</Box>
									<Box mb={1}>
										<Button
											color="primary"
											className="btn-block blockBtn w-100"
											variant="contained"
											size="large"
											onClick={() => onJwtLogin()}
										>
											Sign In With JWT
										</Button>
									</Box> 
                        </form>
							</CustomCard>
						</TabPanel>
					</Box>
				</Box>
			</div>
		</div>
	);
}

export default SigninFirebase;