/**
 * Signature pad
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import IntlMessages from 'util/IntlMessages';
import { Grid, Typography, Box, Container, Button, TextField } from '@material-ui/core';
import { SmallTitleBar, CustomCard } from 'components/GlobalComponents';
import ReactToPrint from 'react-to-print';
import SignatureCanvas from 'react-signature-canvas'
import { NotificationManager } from 'react-notifications';

const styles = theme => ({
	root: {
		width: '100%',
	},
	table: {
		minWidth: 700,
	},
	sigCanvas: {
		border: `1px solid ${theme.palette.divider}`
	}
});


class SignaturePad extends Component {
	state = {
		emp_name: 'John Doe',
		subject: 'Promotion Letter',
		date: '1 May 2020',
		owener_name: 'Authorised Officer',
		position: 'CEO',
		ctc: '20,00,000',
		joining_date: 'Jan 07 2011',
	}

	doSubmit(){
		NotificationManager.success('Form has been submitted,');
	}

	render() {
		const { classes } = this.props;
		const componentRef = React.createRef();
		const sigCanvas = React.createRef();

		return (
			<div className="invoice-page">
				<Box className="white-btn-color">
					<SmallTitleBar
						title={<IntlMessages id="component.invoice" />}
						buttonText={<IntlMessages id="component.backToProducts" />}
						buttonLink="/app/ecommerce/shop"
					/>
				</Box>
				<div className="page-space">
					<Container>
						<Box px={{ xs: "12px", lg: 0 }} ref={componentRef}>
							<CustomCard>
								<div className="main-invoice">
									<Grid container spacing={3} direction="row">
										<Grid item xs={12} sm={6}>
											<Box mb="3" className="site-logo">
												<Link to="/" className="logo-mini mb-1 d-block">
													{this.props.isDarkModeActive ?
														<img alt="site logo" width="80" src={require(`assets/Images/hulk-light.png`)} />
														:
														<img alt="site logo" width="80" src={require(`assets/Images/hulk-dark.png`)} />
													}
												</Link>
											</Box>
											<Box fontSize="body2.fontSize" color="text.primary" fontWeight="500">Hulk Solutions LLC</Box>
											<Typography>4502  Poe Road, Conway South Carolina</Typography>

											<Typography className="text-over">Email.invoice@email.com</Typography>
										</Grid>
										<Grid item xs={12} sm={6} className="text-right">
											<ReactToPrint
												trigger={() => <Button variant="outlined" className="primary-bg-btn" color="primary">Print</Button>}
												content={() => componentRef.current}
											/>
										</Grid>

									</Grid>
									<Box my={5} className="content-wrap">
										<div>Date: <TextField className="sig-box" value={this.state.date} onChange={(e) => this.setState({ date: e.target.value })} /></div>
										<div>Subject: <TextField className="sig-box" value={this.state.subject} onChange={(e) => this.setState({ subject: e.target.value })} /></div>
										<div>Dear <TextField className="sig-box" value={this.state.emp_name} onChange={(e) => this.setState({ emp_name: e.target.value })} /></div>

										<div>After through evaluation of your performance, we are glad to inform you that you have been confirmed in the capacity of <TextField className="sig-box" value={this.state.position} onChange={(e) => this.setState({ position: e.target.value })} /> with our organization with effect from  <TextField className="sig-box" value={this.state.joining_date} onChange={(e) => this.setState({ joining_date: e.target.value })} /> . The terms and conditions of your employment and your job responsibilities will continue to remain the same.  </div>
										<div>Your CTC package will be $<TextField className="sig-box" value={this.state.ctc} onChange={(e) => this.setState({ ctc: e.target.value })} />. We thank you for your contributation made to your process and hope that you will perform with equal enthusiam in future. We wish you all the best in all your endeavors.</div>

										<h4>Authorized Signatory</h4>
										<SignatureCanvas className="sig-digital"
											penColor='black'
											canvasProps={{ width: 250, height: 100, className: classes.sigCanvas }}
											ref={sigCanvas}
											backgroundColor="white"
										/>

										<div>Best Regards</div>
										<TextField className="sig-box" value={this.state.owener_name} onChange={(e) => this.setState({ owener_name: e.target.value })} />
									</Box>
									<Box>
									</Box>
								</div>
							</CustomCard>
							<Box pt={3}>
								<Button variant="outlined" className="primary-bg-btn" color="primary" onClick={() => this.doSubmit()}>Submit</Button>
							</Box>
						</Box>
					</Container>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ settings }) => {
	const { isDarkModeActive } = settings;
	return {isDarkModeActive };
};

export default withRouter(connect(mapStateToProps, {
})(withStyles(styles)(SignaturePad)));