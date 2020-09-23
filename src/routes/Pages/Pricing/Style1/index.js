/**
 * Pricing V1
*/
import React, { Fragment ,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Switch from 'react-toggle-switch';
import { Grid, Button, Typography, Box, Container } from '@material-ui/core';

// components
import { SmallTitleBar, CustomCard } from 'components/GlobalComponents';

// data
import PricingData from 'assets/Data/Pricing.json';
import IntlMessages from 'util/IntlMessages';

const useStyles = makeStyles(theme => ({
	pricingPack: {
		padding: '0 0 40px',
		position: 'relative',
	},
	boxWrap: {
		borderTop: '10px solid #262f3d',
		paddingTop: 40
	}
}));

function Style1(){
		const classes = useStyles();
		const [monthlyPlan,setMonthlyPlan] =useState(true);

	// on plan change
	const onPlanChange = (isMonthly) => {
		setMonthlyPlan(!isMonthly);
	}
	const createMarkup = (value) => {
		return { __html: value };
	}
	return (
		<div className="pricing-wrapper">
        <SmallTitleBar title={<IntlMessages id="component.chooseYourPlan" />} center={true} desc="Choose any below plan and take your business to next level" />
			<div className="page-space">
				<Container>
					<Box px={{ xs:'12px', lg:0 }}>
						<Box className="price-list">
							<Box mb={5}>
								<Grid container spacing={3}>
									{PricingData.data.map((item, i) => (
										<Grid item xs={12} sm={6} md={3} key={i}>
											<CustomCard cardClasses={classes.pricingPack}>
												<Box className={`dark-pricing-list ${classes.boxWrap}`}>
													<Box px={3}>
														<Fragment>
															{item.popular ?
																<div className="ribbon ribbon-top-right"><span>POPULAR</span></div>
																:
																null
															}
														</Fragment>
														<Typography variant="h6" style={{ marginBottom: '10px', textAlign: 'center' }}>
                                            <IntlMessages id={item.pack} />
														</Typography>
													</Box>
													<Box>
														{monthlyPlan ?
															<Box mb={2} style={{ textAlign: 'center' }}>
																<Typography variant="h3" style={{ marginBottom: '15px', textAlign: 'center' }} dangerouslySetInnerHTML={createMarkup(`${item.price[1]}`)}>
																</Typography>
																<Box className="label" mb={2} py="3px" fontSize="subtitle2.fontSize" bgcolor="#e8eaf6" color="primary.main">Save ${item.savePrice} per year.</Box>
															</Box>
															:
															<Box mb={2} style={{ textAlign: 'center' }}>
																<Typography variant="h3" style={{ marginBottom: '15px', textAlign: 'center' }} dangerouslySetInnerHTML={createMarkup(`${item.price[0]}`)}></Typography>
																<Box mb={2} className="label" py="3px" fontSize="subtitle2.fontSize" bgcolor="#e8eaf6" color="primary.main">Save ${item.savePrice} a year.</Box>
															</Box>
														}
													</Box>
													<Box px={3} mb={3}>
														{item.features.map((feature, index) => (
															<Fragment key={index}>
																{feature.enable ?
																	<div style={{ marginBottom: '10px' }}>
																		<i className={feature.icon} style={{ marginRight: '10px' }}></i>
																		{feature.feature}
																	</div>
																	:
																	<div className="feature-disable" style={{ marginBottom: '10px' }}>
																		<i className={feature.icon} style={{ marginRight: '10px' }}></i>
																		{feature.feature}
																	</div>
																}
															</Fragment>
														))}
													</Box>
													<Box px={3} textAlign="center">
														<Button variant="outlined" className="primary-bg-btn" color="primary" size="large">
															Purchase
														</Button>
													</Box>
												</Box>
											</CustomCard>
										</Grid>
									))}
								</Grid>
							</Box>
							<Box display="flex" alignItems="center" justifyContent="center" textAlign="center" mb={5}>
                       <Box component="span"><IntlMessages id="component.monthly" /></Box>
								<Box px={2} lineHeight={1}>
									<Switch onClick={() => onPlanChange(monthlyPlan)} on={monthlyPlan} />
								</Box>
                       <Box component="span"><IntlMessages id="component.yearly" /></Box>
							</Box>
						</Box>
					</Box>	
					<div className="text-center bg-white custom-sec">
							<Grid container spacing={3} justify="center">
								<Grid item xs={12} sm={12} md={4}>
									<Typography variant="h3">
										<IntlMessages id="component.stillHaveQueries" />
									</Typography>
									<Typography variant="body2" className="mt-1">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</Typography>
								</Grid>
							</Grid>
							<Grid container spacing={3} justify="center">
								<Grid item xs={12} sm={12} md={3}>
									<div className="text-center">
										<div className="contact-us-item">
											<div className="contact-us--icon">
												<i className="fa fa-phone transform-icon font-xl" aria-hidden="true"></i>
											</div>
											<div className="contact-us--content mt-1">
                                <Typography variant="h5"><IntlMessages id="component.callUsAnyTime" /></Typography>
												<Typography className="mt-1" variant="body2"><a className="text-disabled" href="# ">+0123 45678 90</a></Typography>
												<Typography variant="body2"><a className="text-disabled" href="# ">+0123 45678 90</a></Typography>
											</div>
										</div>
									</div>
								</Grid>
								<Grid item xs={12} sm={12} md={3}>
									<div className="text-center">
										<div className="contact-us-item">
											<div className="contact-us--icon">
												<i className="fa fa fa-envelope-o font-xl" aria-hidden="true"></i>
											</div>
											<div className="contact-us--content mt-1">
                                <Typography variant="h5"><IntlMessages id="component.dropUsALine" /></Typography>
												<Typography className="mt-1 text-over" variant="body2"><a className="text-disabled" href="mailto:support@theironnetwork.org">support@theironnetwork.org</a></Typography>
												<Typography variant="body2" className="text-over"><a href="mailto:support@theironnetwork.org" className="text-disabled">support@theironnetwork.org</a></Typography>
											</div>
										</div>
									</div>
								</Grid>
							</Grid>
						</div>
				</Container>
			</div>
		</div>
	);
}

export default Style1;