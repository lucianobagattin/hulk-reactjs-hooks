import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Stepper, Container, Box, Step, StepLabel, Button, Typography, Grid, TextField } from '@material-ui/core';

// components
import { SmallTitleBar } from 'components/GlobalComponents';
import IntlMessages from 'util/IntlMessages';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
	},
	button: {
		marginRight: theme.spacing(1),
	},
	instructions: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
}));

function getSteps() {
   return ['component.account', 'component.personal', 'component.finish'];
}
export default function HorizontalLinearStepper() {
	const classes = useStyles();
	const [activeStep, setActiveStep] = useState(0);
	const [skipped, setSkipped] = useState(new Set());
	const steps = getSteps();

	const isStepSkipped = step => {
		return skipped.has(step);
	};

	const handleNext = () => {
		let newSkipped = skipped;
		if (isStepSkipped(activeStep)) {
			newSkipped = new Set(newSkipped.values());
			newSkipped.delete(activeStep);
		}

		setActiveStep(prevActiveStep => prevActiveStep + 1);
		setSkipped(newSkipped);
	};

	const handleBack = () => {
		setActiveStep(prevActiveStep => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	return (
		<div className={classes.root}>
         <SmallTitleBar title={<IntlMessages id="sidebar.horizontalStepper" />} center={true} />
			<div className="page-space horizontal-stepper">
				<Container>						
					<Box px={{ xs: '12px', lg: 0 }}>
						<Grid justify="center" alignItems="center" container spacing={2}>
						<Grid item xs={12} sm={12} lg={10}>
							<Stepper activeStep={activeStep}>
								{steps.map((label, index) => {
									const stepProps = {};
									const labelProps = {};
									return (
										<Step key={label} {...stepProps}>
											<StepLabel {...labelProps}><IntlMessages id={label} /></StepLabel>
										</Step>
									);
								})}
							</Stepper>
						</Grid>
					</Grid>
						<div>
							{activeStep === steps.length ? (
								<div>
									<Typography className={classes.instructions}>
										All steps completed - you&apos;re finished
                           </Typography>
									<Button onClick={handleReset} className={classes.button}>
										Reset
                           </Button>
								</div>
							) : (
									<Box className="stepper-wrapper">
										{activeStep === 0 &&
											<div className="stepper-box">
												<div className="stepper-inner">
                                    <Typography className="stepper-title" variant="h5">
                                       <IntlMessages id="component.accountInformation" />
                                    </Typography>
													<form className={classes.form} noValidate>
														<Grid justify="center"
															alignItems="center" container spacing={2}>
															<Grid item xs={12} sm={12} lg={12}>
																<Box mb={2}>
																	<TextField className="w-100"
																		autoComplete="email"
																		name="email"
																		variant="outlined"
																		required
																		id="email"
																		label="Email"
																		autoFocus
																	/>
																</Box>
																<Box mb={2}>
																	<TextField className="w-100"
																		variant="outlined"
																		required
																		id="userName"
																		label="Username"
																		name="username"
																		autoComplete="uname"
																	/>
																</Box>
																<Box mb={2}>
																	<TextField className="w-100"
																		variant="outlined"
																		required
																		name="password"
																		label="Password"
																		type="password"
																		id="password"
																		autoComplete="current-password"
																	/>

																</Box><Box mb={2}>
																	<TextField className="w-100"
																		variant="outlined"
																		required
																		id="confirmPassword"
																		label="Confirm Password"
																		name="confirmPassword"
																		autoComplete="confirmPassword"
																	/>
																</Box>
															</Grid>
														</Grid>
													</form>
												</div>
											</div>
										} {activeStep === 1 &&
											<div className="stepper-box">
												<div className="stepper-inner">
                                    <Typography className="stepper-title" variant="h5">
                                       <IntlMessages id="component.personalInformation" />
                                    </Typography>
													<form className={classes.form} noValidate>
														<Grid justify="center"
															alignItems="center" container spacing={2}>
															<Grid item xs={12} sm={12} lg={12}>
																<Box mb={2}>
																	<TextField className="w-100"
																		autoComplete="firstname"
																		name="firstname"
																		variant="outlined"
																		required
																		id="firstname"
																		label="First Name"
																		autoFocus
																	/>
																</Box>
																<Box mb={2}>
																	<TextField className="w-100"
																		variant="outlined"
																		required
																		id="lastname"
																		label="Last Name"
																		name="lastname"
																		autoComplete="lastname"
																	/>
																</Box>
																<Box mb={2}>
																	<TextField className="w-100"
																		variant="outlined"
																		required
																		name="contactnumber"
																		label="Contact Number"
																		type="text"
																		id="contactnumber"
																	/>
																</Box>
																<Box mb={2}>
																	<TextField className="w-100"
																		variant="outlined"
																		required
																		id="altcontactnumber"
																		label="Alt Contact Number"
																		name="confirmPassword"
																		autoComplete="confirmPassword"
																	/>
																</Box>
															</Grid>
														</Grid>
													</form>
												</div>
											</div>
										}{activeStep === 2 &&
											<div className="stepper-box">
												<div className="stepper-inner text-center last-level">
													<Typography className="stepper-title" variant="h5">
														<i className="material-icons text-success">check_circle_outline</i>
														You Have Successfully Signed Up
													</Typography>
												</div>
											</div>
										}
										<div className="text-center stepper-footer">
											<Button variant="contained" color="secondary" disabled={activeStep === 0 || activeStep === 2} onClick={handleBack} className={classes.button}>
												Back
                                 </Button>
											<Button
												disabled={activeStep === 2}
												variant="outlined"
												color="primary"
												onClick={handleNext}
												className={`${classes.button} primary-bg-btn`}
											>
												{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
											</Button>
										</div>
									</Box>
								)}
						</div>
					</Box>
				</Container>
			</div >
		</div >
	);
}