import React,{useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { TextField, Button, Box, Typography, Checkbox,AppBar,Tabs, Tab } from "@material-ui/core";
import { CustomCard } from 'components/GlobalComponents';
import {
	signupUserWithFirebase,
	signupUserWithJwt
} from 'actions';
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

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


function SignupFirebase(props){
	const [formErrors, setFormErrors] = useState({
				blankEmail: false,
				invalidEmail: false,
				blankPassword: false
			});
	const [value, setValue] = useState(0);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();
	const settings = useSelector(state => state.settings);
	/**
	 * Signup user using firebase
	 */
	const onUserSignup = async  () => {
		let fieldValidationErrors = formErrors;
		if (email === "") { fieldValidationErrors.blankEmail = true; }
		if (password === "") { fieldValidationErrors.blankPassword = true; }
		if (!validateEmail(email)) { fieldValidationErrors.validEmail = true; }
		await setFormErrors(fieldValidationErrors);
		if (email !== '' && password !== '') {
			var userDetails = { email, password }
			dispatch(signupUserWithFirebase(userDetails,props.history))
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
		props.history.push('/signin');
	}

	const onJwtSignUp = () => {
      if (email !== '' && password !== '') {
      	dispatch(signupUserWithJwt({ email, password }, props.history));
      }
   }

   const handleChange = (event, value) => {
		setValue(value);
	};
		const { blankEmail, blankPassword, validEmail } = formErrors;
		const {isDarkModeActive} = settings;
		return (
			<div className="session-wrapper session-wrapper-v2">
				<Box mx="auto" className="sign-box-wrap" >
					<Box textAlign="center" className="session-logo" >
						{isDarkModeActive ?
							<img className="img-fluid" alt="img" width="100" src={require(`assets/Images/hulk-light.png`)} />
							:
							<img className="img-fluid" alt="img" width="100" src={require(`assets/Images/hulk-dark.png`)} />
						}
					</Box>
					<Box className="sign-box" display="flex" justifyContent="center" alignItems="center">
						<div className="left-content log-tab">
							<AppBar position="static">
								<Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
									<Tab label="Firebase" {...a11yProps(0)} />
									<Tab label="JWT" {...a11yProps(1)} />
								</Tabs>
					      </AppBar>
					      <TabPanel value={value} index={0} className="log-box">
								<Box width="100%">
									<CustomCard>
										<form className="signup-form text-center">
											<Typography variant="subtitle2" >Sign up to continue to :</Typography>
											<Typography variant="subtitle2" color="textPrimary" className="fw-500">Hulk</Typography>
											<Box my={3}>
												<TextField
													required
													fullWidth
													variant="outlined"
													className="outlined-input"
													id="fname"
													type="text"
													name="email"
													placeholder="John Doe"
												/>
											</Box>
											<Box mb={3}>
												<TextField
													required
													fullWidth
													variant="outlined"
													id="username"
													className="outlined-input"
													type="email"
													name="email"
													placeholder="Please enter your email address."
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
													variant="outlined"
													id="signup-password"
													className="outlined-input"
													placeholder="Please enter your password."
													type="password"
													value={password}
													error={blankPassword ? true : false}
													onChange={(event) => setPassword(event.target.value)}
												/>
											</Box>
											<Box display="flex" alignItems="center" justifyContent="flex-start">
												<Checkbox color="primary" value="uncontrolled" inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
												<Box component="span" fontSize="subtitle2.fontSize">I agree all&nbsp;
															<Box component="span" color="primary.main">terms of services</Box>
												</Box>
											</Box>
											<Box mb="20px" pt="20px">
												<Button
													variant="contained" color="primary"
													className="btn-block blockBtn w-100"
													size="large"
													onClick={onUserSignup}
												>
													Sign Up
												</Button>
											</Box>
											<Box>
												<Box mb={1}>
													<Typography variant="body2">Already have an account?</Typography>
												</Box>
												<Box fontSize="subtitle2.fontSize">
													<Box style={{ cursor: 'pointer' }} color="primary.main" onClick={() => onUserSignIn()}>Sign In</Box>
												</Box>
											</Box>
										</form>
									</CustomCard>
								</Box>
							</TabPanel>
							<TabPanel value={value} index={1} className="log-box">		
								<Box width="100%">
									<CustomCard>
										<form className="signup-form text-center">
											<Typography variant="subtitle2" >Sign up to continue to :</Typography>
											<Typography variant="subtitle2" color="textPrimary" className="fw-500">Hulk</Typography>
											<Box my={3}>
												<TextField
													required
													fullWidth
													variant="outlined"
													className="outlined-input"
													id="fname"
													type="text"
													name="email"
													placeholder="John Doe"
												/>
											</Box>
											<Box mb={3}>
												<TextField
													required
													fullWidth
													variant="outlined"
													id="username"
													className="outlined-input"
													type="email"
													name="email"
													placeholder="Please enter your email address."
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
													variant="outlined"
													id="signup-password"
													className="outlined-input"
													placeholder="Please enter your password."
													type="password"
													value={password}
													error={blankPassword ? true : false}
													onChange={(event) => setPassword(event.target.value)}
												/>
											</Box>
											<Box display="flex" alignItems="center" justifyContent="flex-start">
												<Checkbox color="primary" value="uncontrolled" inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
												<Box component="span" fontSize="subtitle2.fontSize">I agree all&nbsp;
															<Box component="span" color="primary.main">terms of services</Box>
												</Box>
											</Box>
											<Box mb="20px" pt="20px">
												<Button
													variant="contained" color="primary"
													className="btn-block blockBtn w-100"
													size="large"
													onClick={() => onJwtSignUp()}
												>
													Sign Up With JWT
												</Button>
											</Box>
											<Box>
												<Box mb={1}>
													<Typography variant="body2">Already have an account?</Typography>
												</Box>
												<Box fontSize="subtitle2.fontSize">
													<Box style={{ cursor: 'pointer' }} color="primary.main" onClick={() => onUserSignIn()}>Sign In</Box>
												</Box>
											</Box>
										</form>
									</CustomCard>
								</Box>
							</TabPanel>	
						</div>
						<div className="right-content bg-fix" style={{ backgroundImage: "url(" + require('assets/Images/sign-up.jpg') + ")", backgroundSize: 'cover' }} >
						
								{/* <Box className="thumb-wrap">
									<img className="img-fluid" alt="img" width="330" src={require(`assets/Images/sign-up.jpg`)} />
								</Box> */}
								<div className="overlay-content">
									<div className="content-holder">
										<Typography variant="h6" >You’re in good company</Typography>
										<Typography variant="body2">Over 1,000 customers, in more than 175 countries.</Typography>
									</div>
								</div>
							
						</div>
					</Box>
				</Box>
			</div>
		);
}

export default SignupFirebase;