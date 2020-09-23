import React, { useEffect ,useState} from 'react';
import { makeStyles, useTheme  } from '@material-ui/core/styles';
import { Grid, Paper, Box, Container, Typography, Link, LinearProgress, CardContent } from '@material-ui/core';

import IntlMessages from 'util/IntlMessages';

// Component
import { CustomCard, BarEchart } from 'components/GlobalComponents';
import DonutEchart  from 'components/GlobalComponents/Charts/DonutEchart';
import AnalyticTab from 'components/Widgets/AnalyticTab';
import CustomTableWidget from 'components/Widgets/customTableWidget';


const useStyles = makeStyles(theme => ({
	Paper: {
		padding: '0.75rem',
		backgroundColor: 'transparent',
		boxShadow: 'none',
		'&:first-child': {
			paddingTop: '24px',
		},
		'&:last-child': {
			paddingBottom: '30px',
		}
	}
}));

function Dashboard1(props){
	const classes = useStyles();
	const theme = useTheme();
	const [stats] = useState([
			{
				icon: 'group_add',
				count: '523',
				title: 'widgets.newVisitors',
				iconColor: 'badge-primary'
			},
			{
				icon: 'shopping_cart',
				count: '104',
				title: 'widgets.newSales',
				iconColor: 'badge-success'
			},
			{
				icon: 'call_missed',
				count: '45%',
				title: 'widgets.bounceRate',
				iconColor: 'badge-warning'
			},
			{
				icon: 'attach_money',
				count: '$45,234',
				title: 'widgets.earning',
				iconColor: 'badge-danger'
			}
		]);
	const [datasets] = useState({			
		data: [{
			type: 'bar',
			data: [33, 45, 75, 80, 55, 40, 96, 64, 30, 75, 34, 30],
		}],
		labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
	});
	const [ratings, setRatings] = useState( [
			{ value: 885, name: 'Positive (93.4%)', itemStyle: { color: theme.palette.primary.main } },
			{ value: 215, name: 'Negative (6.6%)', itemStyle: { color: theme.palette.warning.main } }
		]);
	useEffect(()=>{
		let newRatings = ratings;
		for(let i = 0; i< newRatings.length; i++){
			if(i === 0){
				newRatings[i].itemStyle.color = theme.palette.primary.main;
			} else {
				newRatings[i].itemStyle.color = theme.palette.warning.main;				
			}
		}
		setRatings(newRatings);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])

	return (
		<div className="webanalyics-dashboard">
			<Container maxWidth="lg">
				<Box px={2} pt={4} pb={3}>
               <Typography variant="h3"><IntlMessages id="widgets.welcome" /></Typography>
               <Typography variant="body2" color="textSecondary">Explore your own powerful admin panel and keep track of all activity of <span className="hl-text"><IntlMessages id="widgets.quickStats" /> </span></Typography>
				</Box>
				<Paper className={classes.Paper} square>
					<Grid container spacing={3}>
						<Grid item xs={12} sm={12} md={12}>
							<CustomCard cardClasses="welcome-note">
								<Box>
									<Grid container spacing={3}>
										{stats.map((data, i) => (
											<Grid item xs={12} sm={6} md={3} key={i}>
												<Box className="welcome-note-list">
													<Box>
														<i className={`material-icons ${data.iconColor}`}>{data.icon}</i>
													</Box>
													<Typography variant="body2" color="textSecondary"><span className="hl-text text-dark">{data.count}</span> <IntlMessages id={data.title} /></Typography>
												</Box>
											</Grid>
										))}
									</Grid>
									<Grid container spacing={3} className="res-mt-1">
										<Grid item xs={12} sm={12} md={6}>
											<Box>
                                    <Typography variant="body2" className="hl-text"><IntlMessages id="widgets.QuickLinks" /></Typography>
												<ul className="quick-links">
													<li>
														<Link href="#"><i className="material-icons-outlined">comment</i>
															<span className="hl-text">32 </span> New Comments
														</Link>
													</li>
													<li>
														<Link href="#"><i className="material-icons-outlined">chat</i>
															<span className="hl-text">122 </span>New Messages
														</Link>
													</li>
													<li>
														<Link href="#">
															<i className="material-icons-outlined">email</i>
															<span className="hl-text"> 23 </span> Emails
														</Link>
													</li>
													<li>
														<Link href="#">
															<i className="material-icons-outlined">contact_support</i>
															<span className="hl-text">14 </span>Support Requests
														</Link>
													</li>
												</ul>
											</Box>
										</Grid>
										<Grid item xs={12} sm={12} md={6}>
											<Box>
                                    <Typography variant="body2" className="hl-text">
                                       <IntlMessages id="widgets.frequentlyUsedSectiopns" />
                                    </Typography>
												<ul className="quick-links">
													<li>
														<Link href="#"><i className="material-icons-outlined">post_add</i> Add New Post
														</Link>
													</li>
													<li>
														<Link href="#"><i className="material-icons-outlined">supervised_user_circle</i> Manage Users</Link>
													</li>
													<li>
														<Link href="#"><i className="material-icons-outlined">email</i> Email Inbox</Link>
													</li>
													<li>
														<Link href="#"><i className="material-icons-outlined">person_outline</i> Profile Settings</Link>
													</li>
												</ul>
											</Box>
										</Grid>
									</Grid>
								</Box>
							</CustomCard>	
						</Grid>
					</Grid>
				</Paper>
				<Paper className={classes.Paper} square>
					<Grid container spacing={3} className="res-wa-row">
						<Grid item xs={12} sm={12} md={3} className="res-wa-row--col">
                     <CustomCard title={<IntlMessages id="widgets.newUser" />}>
								<CardContent className="text-center p-0">
									<Box display="flex" mt={2} justifyContent="space-between">
										<Box style={{width:'calc(100% - 90px'}}>
											<BarEchart
												height={'90px'}
												xAxisdata={datasets.labels}
												seriesData={datasets.data}
												barColor='#ef6c00'
												legendIcon='null'
												xAxisShowTicks={false}
												yAxisShowTicks={false}
												xAxisShowLabels={false}
												yAxisShowLabels={false}
												xAxisShowLine={false}
												yAxisShowLine={false}
												yAxisSplitLine={false}
												gridTop='5%'
												gridLeft= '0' 
												gridRight= '5%'
												gridBottom= '0'
											/>
										</Box>
										<Box width={90}>
											<Box mb={1}><Typography variant="h5">97%</Typography></Box>
											<Typography className="view-subsec font-lg">
												<span className="text-success"><i style={{ marginRight: 5 }} className="material-icons">trending_up</i> 9.2%</span>
											</Typography>
										</Box>
									</Box>
								</CardContent>
							</CustomCard>
							<Box pt={3}>
                        <CustomCard title={<IntlMessages id="widgets.userGrowth" />}>
									<Box pt="4">
										<Box pt={1} mb="6px">
											<Typography variant="h4" color="primary">45,320</Typography>
										</Box>
										<Box mb={2}>
											<LinearProgress variant="determinate" value={76} style={{ height: '8px' }} />
										</Box>
										<Box display="flex" justifyContent="space-between" alignItems="center">
											<Typography variant="body2" color="textSecondary">
												Since last month
											</Typography>
											<Box color="primary.main" fontSize="body2.fontSize" textAlign="right">
												86%
											</Box>
										</Box>
									</Box>
								</CustomCard>
							</Box>
						</Grid>
						<Grid item xs={12} sm={6} md={3} className="plain-block res-wa-row--col">
							<Box>
                        <CustomCard title={<IntlMessages id="widgets.views" />}>
									<CardContent className="text-center p-0">
										<Typography variant="h2" className="text-primary">37.<span className="font-ls">44k</span></Typography>
										<Typography variant="h5" className="view-subsec"><span className="text-success"><i className="material-icons font-ls">arrow_drop_up</i> 973</span>/<span className="font-sm">day</span>
										</Typography>
									</CardContent>
								</CustomCard>
							</Box>
							<Box pt={3}>
							<CustomCard>
									<CardContent className="p-0">
										<Box mb={1}>
                                 <Typography variant="h6" className=""><IntlMessages id="widgets.avgUsers" /></Typography>
											<Typography className=" font-sm">(Last 30 Days)</Typography>
										</Box>
										<Box mb="9px">
										<Typography variant="h2" className=" font-weight-med">1172</Typography>
										</Box>
									</CardContent>
								</CustomCard>
							</Box>	
						</Grid>
						<Grid item xs={12} sm={6} md={3} className="plain-block res-wa-row--col">
							<Box>
								<CustomCard>
									<CardContent className="p-0">
										<Box mb={1}>
                                 <Typography variant="h6"><IntlMessages id="widgets.growth" /></Typography>
											<Typography className="font-sm">(Last 30 Days)</Typography>
										</Box>
										<Box mb="9px">
											<Typography variant="h2" className="font-weight-med">20.23%</Typography>
										</Box>
									</CardContent>
								</CustomCard>
							</Box>
							<Box pt={3}>
                        <CustomCard title={<IntlMessages id="widgets.avgTime" />}>
                           <CardContent className="text-center p-0">
                              <Typography variant="h2" className="text-success">3:<span className="font-ls">54s</span></Typography>
                              <Typography variant="h5" className="view-subsec"><span className="text-danger"><i className="material-icons font-ls">arrow_drop_down</i> 3.5%</span>/<span className="font-sm">day</span>
                              </Typography>
                           </CardContent>
                        </CustomCard>
							</Box>
						</Grid>
						<Grid item xs={12} sm={12} md={3} className="res-wa-row--col">
                     <CustomCard title={<IntlMessages id="widgets.rating" />}>
								<Box className="relative">
									<DonutEchart
										data={ratings}
										radius='60%'
										showLegend={false}
										height={'256px'}
										fontSize={12}
									/>
									<div className="absolute-center">
										<Box>
											<Typography variant="h6" className="view-subsec">
												93.4%
											</Typography>
											<Typography className="view-subsec">
												Customers
											</Typography>
										</Box>
									</div>
								</Box>
								<Box display="flex" justifyContent="space-between"  alignItems="center">
									<Box>
										<Box display="flex" alignItems="center">
											<span className="dot-circle bg-primary"></span>93.4%
										</Box>
										<Box>Satisfied</Box>
									</Box>
									<Box>
										<Box display="flex" alignItems="center">
											<span className="dot-circle bg-warning"></span>6.6%
										</Box>
										<Box>Unsatisfied</Box> 
									</Box>
								</Box>
							</CustomCard>
						</Grid>
					</Grid>
				</Paper>
				<Paper className={classes.Paper} square>
					<CustomTableWidget/>
				</Paper>
				<Paper className={classes.Paper} square>
					<AnalyticTab />
				</Paper>
			</Container>
		</div>
	);
}

export default Dashboard1;