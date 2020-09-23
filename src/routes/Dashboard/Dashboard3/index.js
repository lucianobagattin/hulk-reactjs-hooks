/**
 * Ecommerce Dashboard 
 */
import React, { useState } from 'react';
import { makeStyles  } from '@material-ui/core/styles';
import { withStyles  } from '@material-ui/core/styles';
import { Paper, Container } from '@material-ui/core';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import { CustomCard } from 'components/GlobalComponents';
import LinearProgress from '@material-ui/core/LinearProgress';
import PieEchart from 'components/GlobalComponents/Charts/PieEchart';
import WidgetSimpleTable from 'components/Widgets/WidgetSimpleTable';
import SalesWidget from 'components/Widgets/SalesChart';
import MarketingChartWidget from 'components/Widgets/MarketingChart';
import NewAccountsChart from 'components/Widgets/NewAccountsChart';
import GeoMap from 'components/Widgets/GeoMap';

import IntlMessages from 'util/IntlMessages';

// Data
import { KeywordSearchAnalysis } from './data';

const useStyles = makeStyles(theme => ({
	overview: {
		padding: 12,
		backgroundColor: theme.palette.primary.main,
		marginBottom: 12,
	},
	Paper: {
		padding: '0.75rem',
		backgroundColor: 'transparent',
		boxShadow: 'none',
		'&:last-child': {
			paddingBottom: '30px',
		}
	}
}));
const BorderLinearProgress = withStyles({
	root: {
		height: 10,
		backgroundColor: 'rgba(239, 108, 0, 0.5)',
	},
	bar: {
		backgroundColor: '#ef6c00',
	},
})(LinearProgress);

function Dashboard3() {
	const classes = useStyles();
	const [columns2] = useState([
		{ title: 'Keyword', field: 'keywords', render: rowData => <div> <Box component="span" className="keyword">{rowData.keywords} </Box></div> },
		{ title: 'No. Of Clicks', field: 'clicks' },
		{
			title: 'Trend', field: 'trend', render: rowData =>
				<div>{rowData.trendHigh ?
					<Box display="inline-flex" className="status-wrap" alignItems="center">
						<Box component="span" pr="5px" fontSize="subtitle2.fontSize" color="success.main" className="fas fa-arrow-up"></Box>
						{rowData.trend}
					</Box>
					:
					<Box display="inline-flex" alignItems="center" className="TT">
						<Box component="span" pr="5px" fontSize="subtitle2.fontSize" color="error.main" className="fas fa-arrow-down"></Box>
						{rowData.trend}
					</Box>}
				</div>
		},
		{ title: 'CPC', field: 'cpc' },
		{ title: 'Location', field: 'location' },
		{ title: 'Competition', field: 'competition' },
	]);

	const [marketing] = useState({
			labels: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"],
			datasets: [
				{
					lineTension: 0.4,
					borderWidth: 1,
					backgroundColor: "rgba(77, 125, 242, 0.2)",
					borderColor: "rgba(77, 125, 242, 0.2)",
					pointRadius: 0,
					data: [0, 27, 38, 40, 37, 32, 27, 22, 17, 12, 7]
				}
			]
		});

	const [sales] = useState({
		labels: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"],
		datasets: [
			{
				lineTension: 0.4,
				borderWidth: 1,
				backgroundColor: "rgba(77, 125, 242, 0.2)",
				borderColor: "rgba(77, 125, 242, 0.2)",
				pointRadius: 0,
				data: [20, 23, 24, 23.5, 22, 19, 14, 9, 3, 0, 0]
			},
			{
				lineTension: 0.4,
				borderWidth: 1,
				backgroundColor: "rgba(77, 125, 242, 0.2)",
				borderColor: "rgba(77, 125, 242, 0.2)",
				pointRadius: 0,
				data: [0, 5, 12, 18, 25, 32, 38, 42, 44, 45, 45]
			}
		]
	});
	const [newAccounts] = useState({
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'august', 'september'],
			barColor: ['rgba(77, 125, 242, 0.2)', 'rgba(77, 125, 242, 0.3)'],
			series: [
				{
					name: 'latest',
					type: 'bar',
					barWidth: 20,
					data: [65, 59, 80, 81, 56, 55, 40, 60, 80],
					itemStyle: {
						barBorderRadius: [50, 50, 0, 0]
					}
				},
				{
					name: 'old',
					type: 'bar',
					barWidth: 20,
					data: [60, 55, 75, 78, 53, 52, 37, 50, 74],
					itemStyle: {
						barBorderRadius: [50, 50, 0, 0]
					},
				},
			]
		})

	return (
		<div className="ecommerce-dashboard">
			<Container maxWidth="lg">
				<Paper className={classes.Paper} square>
					<Grid container spacing={3} className="stats-wrap">
						<Grid item xs={12} sm={12} md={12}>
							<Grid container spacing={3} className="stats-wrap mt-1">
								<Grid item xs={12} sm={12} md={3}>
									<CustomCard>
										<Typography variant="h3">14,458</Typography>
										<Box mb={2}>
                                <Typography variant="h6" className="font-weight-med text-disabled"><IntlMessages id="widgets.recipients" /></Typography>
										</Box>
										<BorderLinearProgress
											variant="determinate"
											color="primary"
											value={50}
										/>
									</CustomCard>
								</Grid>
								<Grid item xs={12} sm={12} md={3}>
									<CustomCard>
										<Typography variant="h3">24.3%</Typography>
										<Box mb={2}>
                                <Typography variant="h6" className="font-weight-med text-disabled"><IntlMessages id="widgets.openRate" /></Typography>
										</Box>
										<BorderLinearProgress
											variant="determinate"
											color="primary"
											value={50}
										/>
									</CustomCard>
								</Grid>
								<Grid item xs={12} sm={12} md={6}>
                          <CustomCard title={<IntlMessages id="widgets.howmanyuserscamefromABC?" />} showDivider={true}>
										<Grid container spacing={3}>
											<Grid item xs={12} sm={12} md={4}>
												<Box mt={2}>
													<Typography variant="h5">14,458</Typography>
													<Box>
                                         <Typography className="font-weight-med text-disabled"><IntlMessages id="widgets.recipients" /></Typography>
													</Box>
												</Box>
											</Grid>
											<Grid item xs={12} sm={12} md={4}>
												<Box mt={2}>
													<Typography variant="h5">14,458</Typography>
													<Box>
                                         <Typography className="font-weight-med text-disabled"><IntlMessages id="widgets.recipients" /></Typography>
													</Box>
												</Box>
											</Grid>
											<Grid item xs={12} sm={12} md={4}>
												<Box mt={2}>
													<Typography variant="h5">14,458</Typography>
													<Box>
                                         <Typography className="font-weight-med text-disabled"><IntlMessages id="widgets.recipients" /></Typography>
													</Box>
												</Box>
											</Grid>
										</Grid>
									</CustomCard>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Paper>
				<Paper className={classes.Paper} square>
					<Grid container spacing={3}>
						<Grid item xs={12} sm={12} md={6}>
							<CustomCard>
								<SalesWidget />
							</CustomCard>
						</Grid>
						<Grid item md={6}>
							<Grid container spacing={3}>
								<Grid item xs={12} sm={12} md={6}>
									<CustomCard cardClasses="p-0 sales-chart-wrap">
										<MarketingChartWidget
                                title={<IntlMessages id="widgets.marketing" />}
											allData={marketing}
										/>
									</CustomCard>
								</Grid>
								<Grid item xs={12} sm={12} md={6}>
									<CustomCard cardClasses="p-0 marketing-chart-wrap">
										<MarketingChartWidget
                                title={<IntlMessages id="widgets.sales" />}
											allData={sales}
										/>
									</CustomCard>
								</Grid>

							</Grid>
							<Grid container spacing={3}>
								<Grid item xs={12} sm={12} md={12}>
									<CustomCard cardClasses="p-0 new-account-wrap">
                             <NewAccountsChart title={<IntlMessages id="widgets.newAccounts" />} allData={newAccounts} />
									</CustomCard>
								</Grid>
							</Grid>

						</Grid>
						<Grid item xs={12} sm={12} md={4}>
                    <CustomCard title={<IntlMessages id="widgets.topProducts" />} showDivider={true}>
								<ul className="top-hits">
									<li>
										<div className="top-product">
											<div className="top-product-detail">
												<div className="top-product-thumb">
													<img alt="Remy Sharp" width={50} src={require(`assets/Images/accessroies/a-1-a.jpg`)} />
												</div>
												<Box>
													<Typography className="top-product-title">Apple Watch 3</Typography>
													<Box display="flex">
														<Box display="flex" alignItems="center" className="top-product-meta" mr={1}>
															<Typography>
																<i className="material-icons mr-1"> remove_red_eye </i> 1680 Views	</Typography>
														</Box>
													</Box>
												</Box>
											</div>
										</div>
										<div className="top-product-sale text-center">
											<Typography>469 <span>Sales</span></Typography>
										</div>
									</li>
									<li>
										<div className="top-product">
											<div className="top-product-detail">
												<div className="top-product-thumb">
													<img alt="Remy Sharp" width={50} src={require(`assets/Images/accessroies/a-2-a.jpg`)} />
												</div>
												<Box>
													<Typography className="top-product-title">Vintage Clock</Typography>
													<Box display="flex">
														<Box display="flex" alignItems="center" className="top-product-meta" mr={1}>
															<Typography>
																<i className="material-icons mr-1"> remove_red_eye </i> 1021 Views	</Typography>
														</Box>
													</Box>
												</Box>
											</div>
										</div>
										<div className="top-product-sale text-center">
											<Typography>221 <span>Sales</span></Typography>
										</div>
									</li>
									<li>
										<div className="top-product">
											<div className="top-product-detail">
												<div className="top-product-thumb">
													<img alt="Remy Sharp" width={50} src={require(`assets/Images/accessroies/a-3-a.jpg`)} />
												</div>
												<Box>
													<Typography className="top-product-title">Water Bottle</Typography>
													<Box display="flex">
														<Box display="flex" alignItems="center" className="top-product-meta" mr={1}>
															<Typography>
																<i className="material-icons mr-1"> remove_red_eye </i> 880 Views</Typography>
														</Box>
													</Box>
												</Box>
											</div>
										</div>
										<div className="top-product-sale text-center">
											<Typography>120 <span>Sales</span></Typography>
										</div>
									</li>
									<li>
										<div className="top-product">
											<div className="top-product-detail">
												<div className="top-product-thumb">
													<img alt="Remy Sharp" width={50} src={require(`assets/Images/accessroies/a-4-a.jpg`)} />
												</div>
												<Box>
													<Typography className="top-product-title">Study Nootbook</Typography>
													<Box display="flex">
														<Box display="flex" alignItems="center" className="top-product-meta" mr={1}>
															<Typography>
																<i className="material-icons mr-1"> remove_red_eye </i> 180 Views</Typography>
														</Box>
													</Box>
												</Box>
											</div>
										</div>
										<div className="top-product-sale text-center">
											<Typography>20 <span>Sales</span></Typography>
										</div>
									</li>
								</ul>
							</CustomCard>
						</Grid>
						<Grid item xs={12} sm={12} md={4}>
							<div className="user-card">
								<CustomCard cardClasses="text-center">
									<div className="user-card--queue">
										<ul>
											<li className="user-card--queue--thumb">
												<img alt="Remy Sharp" width={35} src={require(`assets/Images/avatars/user-1.jpg`)} />
											</li>
											<li className="user-card--queue--thumb">
												<img alt="Remy Sharp" width={35} src={require(`assets/Images/avatars/user-2.jpg`)} />
											</li>
										</ul>
									
									</div>
									<div className="user-card--thumb">
										<img alt="Remy Sharp" width={100} src={require(`assets/Images/avatars/user-6.jpg`)} />
									</div>
									<div className="user-card--detail">
										<Typography variant="h4" className="">Maria Doe</Typography>
										<div>
											<span className="user-card">Ohio, USA</span>
										</div>
										<div className="user-card--social">
											<ul>
												<li>
													<a href="# "><i className="fab fa-facebook-square"></i></a>
												</li>
												<li>
													<a href="# "><i className="fab fa-twitter-square"></i></a>
												</li>
												<li>
													<a href="# "><i className="fab fa-instagram"></i></a>
												</li>
											</ul>
										</div>
										<Typography variant="body2" className="user-card--bio">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</Typography>
										<Button variant="contained" color="secondary" style={{ marginRight: 10 }} >  Confirm  </Button>
										<Button variant="contained">  Decline  </Button>
									</div>
								</CustomCard>
							</div>
						</Grid>
						<Grid item xs={12} sm={12} md={4}>
							 <CustomCard title={<IntlMessages id="widgets.visitorsDevicesUsed" />} showDivider={true}>
								<Box mt={1}>
									<PieEchart showLabel={false} />
								</Box>
							</CustomCard>
						</Grid>
					</Grid>
				</Paper>
				<Paper className={classes.Paper} square>
					<Grid container spacing={3}>
						<Grid item xs={12} sm={12} md={12}>
                    <CustomCard title={<IntlMessages id="widgets.analyticsWebSessionsByRegion" />} showDivider={true}>
								<GeoMap />
							</CustomCard>
						</Grid>
					</Grid>
				</Paper>
				<Paper className={classes.Paper} square>
					<Grid container spacing={3}>
						<Grid item xs={12} sm={12} md={12}>
                    <WidgetSimpleTable title={<IntlMessages id="widgets.keywordSearch" />} selection={true} showDivider={true} columns={columns2} data={KeywordSearchAnalysis} />
						</Grid>
					</Grid>
				</Paper>
			</Container>
		</div>
	);
}

export default (Dashboard3);