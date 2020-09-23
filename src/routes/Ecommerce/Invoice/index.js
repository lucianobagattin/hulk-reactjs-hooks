import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import IntlMessages from 'util/IntlMessages';
import {
	Grid, Typography, Box, Table, TableBody, TableCell,
	TableContainer, TableHead, TableRow, Paper, Divider, Container
} from '@material-ui/core';
import { SmallTitleBar, CustomCard } from 'components/GlobalComponents';

const StyledTableCell = withStyles(theme => ({
	body: {
		fontSize: 14,
		color: theme.palette.text.primary
	},
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
	root: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.background.default,
		},
	},
}))(TableRow);

function createData(name, price, qty, subtotal) {
	return { name, price, qty, subtotal };
}

const rows = [
	createData('Batting Pads', 200, 1, 200),
	createData('Thigh Pads', 25, 1, 25),
	createData('Chestguard', 19, 1, 19),
	createData('Gloves', 15, 2, 30),
	createData('Cricket Bat', 450, 2, 900),
];


const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
	},
	table: {
		minWidth: 700,
	}
}));

export default function Invoice() {
	const classes = useStyles();

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
					<Box px={{ xs: "12px", lg: 0 }}>
						<CustomCard>
							<div className="main-invoice">
								<Grid container spacing={3} direction="row">
									<Grid item xs={12} sm={6}>
										<Box mb={5}>
											<Typography variant="h4">INVOICE</Typography>
										</Box>
										<Box mb="3" className="site-logo">
											<Link to="/" className="logo-mini mb-1 d-block">
												<img src={require('assets/Images/hulk-dark.png')} alt="site logo" width="80" />
											</Link>
										</Box>
										<Box fontSize="body2.fontSize" color="text.primary" fontWeight="500">Hulk Solutions LLC</Box>
										<Typography>4502  Poe Road, Conway South Carolina</Typography>
										<Typography>Zip Code - 29528</Typography>
										<Typography>FAX.843-234-0429</Typography>
										<Typography className="text-over">Email.invoice@email.com</Typography>
									</Grid>
									<Grid item xs={12} sm={6} className="text-right">
										<Typography>Date:Nov 21 2010</Typography>
										<Typography>Invoice No. QWERTY12345TY</Typography>
										<Typography>Payment Due. $10.23</Typography>
									</Grid>
								</Grid>
								<Box my={5}>
									<Box className="border-highlight" fontSize="body2.fontSize" color="primary.contrastText" fontWeight="500" mb="20px">Bill To:</Box>
									<Typography >Kenneth C Thompson</Typography>
									<Typography >1249  Conifer Drive, Everett, Washington</Typography>
									<Typography >Zip Code - 98208</Typography>
									<Typography >Mob.425-359-3066</Typography>
									<Typography className="text-over">Email.rdce7marygo@classesmail.com</Typography>
								</Box>
								<Box>
									<Box mb={4}>
										<TableContainer component={Paper} className="invoice-table">
											<Table className={classes.table} aria-label="customized table">
												<TableHead>
													<TableRow>
														<StyledTableCell>Product Name</StyledTableCell>
														<StyledTableCell align="right">Price</StyledTableCell>
														<StyledTableCell align="right">QTY</StyledTableCell>
														<StyledTableCell align="right">Subtotal</StyledTableCell>
													</TableRow>
												</TableHead>
												<TableBody>
													{rows.map(row => (
														<StyledTableRow key={row.name}>
															<StyledTableCell component="th" scope="row">
																{row.name}
															</StyledTableCell>
															<StyledTableCell align="right">{row.price}</StyledTableCell>
															<StyledTableCell align="right">{row.qty}</StyledTableCell>
															<StyledTableCell align="right">{row.subtotal}</StyledTableCell>
														</StyledTableRow>
													))}
												</TableBody>
											</Table>
										</TableContainer>
									</Box>
									<Box>
										<Box display="flex" justifyContent="flex-end" mb={3}>
											<Box width={250}>
												<Box display="flex" alignItems="center" fontSize="body2.fontSize" color="text.secondary" mb={1}>
													<Box width="50%">Subtotal : </Box>
													<Box width="50%" textAlign="right">$1,174</Box>
												</Box>
												<Box display="flex" alignItems="center" fontSize="body2.fontSize" color="text.secondary" mb={2}>
													<Box width="50%">Vat (10%) :</Box>
													<Box width="50%" textAlign="right">$232</Box>
												</Box>
												<Divider />
												<Box pt={2} display="flex" alignItems="center" fontSize="h6.fontSize" color="primary" mb={1}>
													<Box width="50%">Total :</Box>
													<Box width="50%" textAlign="right">$1,406.00</Box>
												</Box>
											</Box>
										</Box>
									</Box>
								</Box>
							</div>
						</CustomCard>
					</Box>
				</Container>
			</div>
		</div>
	);
}
