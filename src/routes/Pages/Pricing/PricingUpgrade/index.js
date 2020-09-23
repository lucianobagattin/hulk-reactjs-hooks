import React, { useState }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Stepper, Grid, Box, RadioGroup, Radio, Typography, Dialog, DialogActions, DialogContent, 
	IconButton, Step, StepLabel, StepContent, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import clsx from 'clsx';
import Payment from '../../../Ecommerce/Checkout/Components/Payment';
import { useHistory } from "react-router-dom";
import IntlMessages from 'util/IntlMessages';
const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
	},
	actionsContainer: {
		marginBottom: theme.spacing(2),
	},
	resetContainer: {
		padding: theme.spacing(3),
	},
	activeBtn: {
		marginTop: theme.spacing(1),
	}
}));

function getSteps() {
	return ['Choose Your Plan', 'Add Your Debit Credit Card', 'Terms & Conditions'];
}
function VerticalLinearStepper(props) {

	let history = useHistory();
	const classes = useStyles();
	const [activeStep, setActiveStep] = useState(0);

	const [value, setValue] = useState({
		selectedPlan: 'plan1'
	});

	const [state, setState] = useState({
		checkedB: true,
		checkedA: true,
	});

	const [validate, setValidate] = useState(false);

	const steps = getSteps();

	const [open, setOpen] = useState(false);

	const showPopup = () => {
		setActiveStep(prevActiveStep => prevActiveStep + 1);
		setOpen(true);
	};

	const handleClose = () => {
		history.goBack();
		setOpen(false);
	};

	const handleNext = () => {
		setActiveStep(prevActiveStep => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep(prevActiveStep => prevActiveStep - 1);
	};

	const handleChange = name => event => {
		setState({ ...state, [name]: event.target.checked });
	};

	const planChange = event => {
		setValue({ ...value, selectedPlan: event.target.value });
	}

	const goToPreviousPath = () => {
		history.goBack()
	}
	const validatePayment = () => {
		setValidate(true);
	};
	return (
		<div className="pricing-update">
			<div className={classes.root}>
				<Grid container direction="row">
					<Grid item xs={12} sm={12} >
						<Grid container direction="row">
							<Grid item xs={12} sm={10} className="up-main-col">
								<Box py={7}>
									<Box display="flex" alignItems="center">
										<IconButton aria-label="close" onClick={goToPreviousPath}>
											<Box color="text.primary" className="fas fa-times"></Box>
										</IconButton>
										<Box pl={1} fontSize="h5.fontSize" fontWeight="h5.fontWeight">
											<IntlMessages id="component.upgradeYourPlanNow"/>
										</Box>
									</Box>
									<Box pl={1} className="vertical-stepper-wrap">
										<Stepper activeStep={activeStep} orientation="vertical">
											<Step>
												<StepLabel>
													<Box my={2}>
														<Typography variant="h6"><IntlMessages id="component.chooseYourPlan"/></Typography>
													</Box>
												</StepLabel>
												<StepContent className="stepper-content">
													<Box mb={2}>
														<Box mb={1}>
															<RadioGroup aria-label="gender" className="group-pack" name="gender1" value={value} onChange={planChange}>
																<div
																	className={clsx("extra-cap pack-1", {
																		[classes.activeBtn]: value.selectedPlan === 'plan1',
																	})}
																>
																	<FormControlLabel value="plan1" control={<Radio />} />
																	<Box className="pack-content">
																		<Box display="flex" justifyContent="space-between" alignItems="center">
																			<Box>
																				<Box>
																					<Typography variant="h5">
																						Silver
																					</Typography>
																				</Box>
																				<Box>
																					<Typography>
																						$55/per month
																					</Typography>
																				</Box>
																			</Box>
																			<Box>
																				<i className="material-icons">
																					verified_user
																				</i>
																			</Box>
																		</Box>
																	</Box>
																</div>
																<div
																	className={clsx("extra-cap pack-2", {
																		[classes.activeBtn]: value.selectedPlan === 'plan2',
																	})}
																>
																	<FormControlLabel value="plan2" control={<Radio />} />
																	<Box className="pack-content">
																		<Box display="flex" justifyContent="space-between" alignItems="center">
																			<Box>
																				<Box>
																					<Typography variant="h5">
																						Platinum
																					</Typography>
																				</Box>
																				<Box>
																					<Typography>
																						$125/per month
																					</Typography>
																				</Box>
																			</Box>
																			<Box>
																				<i className="material-icons">
																					verified_user
																				</i>
																			</Box>
																		</Box>
																	</Box>
																</div>
																<div
																	className={clsx("extra-cap pack-3", {
																		[classes.activeBtn]: value.selectedPlan === 'plan3',
																	})}
																>
																	<FormControlLabel value="plan3" control={<Radio />} />
																	<Box className="pack-content">
																		<Box display="flex" justifyContent="space-between" alignItems="center">
																			<Box>
																				<Box>
																					<Typography variant="h5">
																						Gold
																				</Typography>
																				</Box>
																				<Box>
																					<Typography>
																						$256/per month
																				</Typography>
																				</Box>
																			</Box>
																			<Box>
																				<i className="material-icons">
																					verified_user
																				</i>
																			</Box>
																		</Box>
																	</Box>
																</div>
															</RadioGroup>
														</Box>
														<FormControlLabel className="lg-label"
															control={
																<Checkbox
																	checked={state.checkedB}
																	onChange={handleChange('checkedB')}
																	value="checkedB"
																	color="primary"
																/>
															}
															label="Try for 14 trial day first."
														/>
													</Box>
													<div className={classes.actionsContainer}>
														<div>
															<Button
																variant="contained"
																color="primary"
																onClick={handleNext}
																className={classes.button}
															>
																{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
															</Button>
														</div>
													</div>
												</StepContent>
											</Step>
											<Step>
												<StepLabel>
													<Box my={1}>
														<Typography variant="h6"><IntlMessages id="component.addYourDebitCreditCard"/></Typography>
													</Box>
												</StepLabel>
												<StepContent className="stepper-content">
													<Payment validatePayment={validatePayment} />
													<div className={classes.actionsContainer}>
														<div className="eq-space">
															<Button
																disabled={activeStep === 0}
																onClick={handleBack}
																className={classes.button} variant="contained"
															>
																Back
															</Button>
															{validate &&
																<Button
																	variant="contained"
																	color="primary"
																	onClick={handleNext}
																	className={classes.button}
																>
																	{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
																</Button>
															}
														</div>
													</div>
												</StepContent>
											</Step>
											<Step>
												<StepLabel>
													<Box my={1}>
														<Typography variant="h6"><IntlMessages id="component.termsandconditions"/></Typography>
													</Box>
												</StepLabel>
												<StepContent className="stepper-content">
													<Box className="bg-scroller">
														<p>
															Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
														</p>
														<p>
															Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
														</p>
														<p>
															Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
														</p>
														<p>
															Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
														</p>
														<p>
															Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
														</p>

													</Box>
													<FormControlLabel
														control={
															<Checkbox
																checked={state.checkedA}
																onChange={handleChange('checkedA')}
																value="checkedA"
																color="primary"
															/>
														}
														label="I accept the above stated terms and conditions."
													/>
													<div className={classes.actionsContainer}>
														<Box my={2} className="eq-space">
															<Button variant="contained" color="primary"
																disabled={activeStep === 0}
																onClick={handleBack}
																className={classes.button}
															>
																Back
															</Button>
															<Button variant="contained" color="primary"
																onClick={showPopup}
																className={classes.button}
															>
																Finish
															</Button>
														</Box>
													</div>
												</StepContent>
											</Step>
										</Stepper>
									</Box>
								</Box>
							</Grid>
							<Grid item xs={12} sm={2} className="md-hide">
								<Box className="update-img-wrap">
									<img src={require('assets/Images/update-plan.png')} alt="site logo" width="474" height="559" className="update-img-thumb" />
								</Box>
								<Grid container spacing={3} direction="row">
									<Grid item xs={12} sm={12}>
										<Box bgcolor="primary.main" className="sideline">
										</Box>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</div>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description">

				<DialogContent className="plan-dialog-content">
					<Box>
						<Box display="flex" justifyContent="center" mb={1}>
							<i className="material-icons">done</i>
						</Box>
						<Typography variant="h3">Congratulations !</Typography>
						<Typography>Your Plan Has Been Upgraded.</Typography>
					</Box>
				</DialogContent>
				<DialogActions>
					<Box mb="12px" display="flex" justifyContent="center" width="100%">
						<Button variant="contained" onClick={handleClose} color="primary" autoFocus>
							OK
						</Button>
					</Box>
				</DialogActions>
			</Dialog>
		</div>

	);
}

export default VerticalLinearStepper;
