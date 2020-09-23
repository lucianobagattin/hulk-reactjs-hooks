/*eslint-disable*/
import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/styles';
import { Grid, MenuItem, Select, Button, Box, List, ListItem, FormControl, Icon, IconButton } from '@material-ui/core';

import { AnalyticsData } from 'routes/Dashboard/Dashboard1/data';
import { BarEchart, CustomCard} from 'components/GlobalComponents'
import ELineChart from 'components/GlobalComponents/Charts/ELineChart'

import IntlMessages from 'util/IntlMessages';

import { withTheme } from '@material-ui/core/styles';
const styles = theme => ({
	trendingUsers: {
		borderBottom: `1px solid ${theme.palette.divider}`,
		paddingLeft: 0,
		paddingRight: 0,
		backgroundColor:'rgba(0,0,0,0) !important',
		cursor:'default',
	},
	sectionWrap:{
		[theme.breakpoints.down('sm')]: {
			flexDirection:'column-reverse',
		}
	},
	userType: {
		borderBottom: `1px solid rgba(255, 255, 255, 0.2)`,
	},
	flexItems: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	formControl: {
		minWidth: 120,
		color: theme.palette.text.primary,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	customTabWrap:{
		position:'relative',
		'& .custom-btn':{
			color: theme.palette.text.secondary,
			backgroundColor: 'rgba(0,0,0,0) !important',
			borderRadius: 0,
			boxShadow: 'none !important',
			borderBottom: '2px solid rgba(0,0,0,0)',
			transition:'all 0.3s ease-out',
		},
		'& .active':{
			color: theme.palette.primary.main,
			borderColor: theme.palette.primary.main,
		},
		'& .drop-icon':{
			display:'none',
		},
		[theme.breakpoints.down('xs')]: {
			paddingTop:42,
			'& .res-dropdown':{
				width:'100%',
				height: 'auto',
				left: '-1px',
				top:0,
				position: 'absolute',
				right: '-1px',
				zIndex: 9,
				border: '1px solid #d5d5d5',
				backgroundColor: theme.palette.background.paper,
				padding: '2px 0',
				'& .custom-btn':{
					width:'100%',
					display:'none',
					border:0,
				},
				'& .active':{
					display:'block !important'
				},
			},
			'& .open':{
				'& .custom-btn':{
					display:'block !important',
				},
			},
			'& .drop-icon':{
				display:'inline-block',
				position: 'absolute',
				right: 0,
				top:3,
				zIndex:9,
				display:'block !important',
				width:'auto !important',
				padding:5
			},
		},
	},
});

class AnalyticTabs extends Component {
	state = {
		age: '1',
		AnalyticsData,
		selectedData: [],
		initialSelectedValue: 'users',
		setOpen: true
	}

	optionChange = event => {
		this.setState({ age: event.target.value });
	};

	componentDidMount() {
		this.getTabData('users');
	}

	getTabData(e) {
		this.state.initialSelectedValue = e;
		this.state.selectedData = []
		for (var i = 0; i < AnalyticsData.length; i++) {
			if (AnalyticsData[i].sectionName === e) {
				let updated = this.state.selectedData;
				updated.push(AnalyticsData[i]);
				this.setState({ selectedData: updated });
			}
		}
		this.setState({ setOpen: !this.state.setOpen });
	}

	render() {
		const { selectedData, age, initialSelectedValue, setOpen } = this.state;
		const { classes } = this.props;
		return (
			<div>
				<Grid container spacing={3} className={classes.sectionWrap}>
					<Grid item xs={12} sm={12} md={4}>
						<CustomCard >
							<div className="overview-section">
								<div>
									{selectedData.map((val, i) => (
										<div key={i}>
											<Box mb='5px' fontSize="subtitle1.fontSize" color="text.primary">{val.title}</Box>
											<Box mb={1} fontSize="h3.fontSize" color="text.primary">{val.noOfVistors}</Box>
											<Box component="p" width="100%" py={1} mt={0} mb={2} className={classes.userType} color="text.primary">
												{val.usersDataType}
											</Box>
											<Box mb={3}>
												<BarEchart
													height={'75px'}
													xAxisdata={val.datasets.labels}
													seriesData={val.datasets.data}
													barColor={this.props.theme.palette.primary.main}
													legendIcon='null'
													xAxisShowTicks= {false}
													yAxisShowTicks= {false}
													xAxisShowLabels= {false}
													yAxisShowLabels= {false}
													xAxisShowLine= {false}
													yAxisShowLine= {false}
													yAxisSplitLine= {false}
												/>
											</Box>
											<List component="nav">
												<ListItem component="li" button className={classes.trendingUsers} disableRipple>
													<Box component="p" width="100%" className={classes.flexItems} m={0}>
														<Box component="span" color="text.primary" className="font-weight-bold">Trending Pages</Box>
														<Box component="span" color="text.primary" className="font-weight-bold">Users</Box>
													</Box>
												</ListItem>
												{val.listingData.map((list, i) => (
													<ListItem key={i} component="li" button className={classes.trendingUsers} disableRipple>
														<Box component="p" width="100%" className={classes.flexItems} m={0} >
															<Box component="span" color="text.primary">{list.trandingPage}</Box>
															<Box component="span" color="text.primary">{list.users}</Box>
														</Box>
													</ListItem>
												))}
											</List>
										</div>
									))}
								</div>
							</div>
						</CustomCard>
					</Grid>
					<Grid item xs={12} sm={12} md={8}>
						<CustomCard>
							<div className={classes.customTabWrap}>
								<div className={`res-dropdown ${classNames(setOpen === true ? 'open' : '')}`}>
									<IconButton className="drop-icon" onClick={() => {this.setState({setOpen: !setOpen}) }}>
										<Icon size="small">arrow_drop_down</Icon>
									</IconButton>
									<Button variant="contained" 
										className={`custom-btn ${classNames(initialSelectedValue === 'users' ? "active" : "")}`}
										onClick={() => this.getTabData("users")}
										>
										<i className="fas fa-coins"></i>
                              <Box component="span" ml={1}><IntlMessages id="widgets.users" /></Box>
									</Button>
									<Button variant="contained"
										className={`custom-btn ${classNames(initialSelectedValue === 'revenue' ? "active" : "")}`}
										onClick={() => this.getTabData("revenue")}
										>
										<i className="fa fa-file"></i>
                              <Box component="span" ml={1}><IntlMessages id="widgets.revenue" /></Box>
									</Button>
									<Button variant="contained" 
										className={`custom-btn ${classNames(initialSelectedValue === 'conversionRate' ? "active" : "")}`}
										onClick={() => this.getTabData("conversionRate")}
										>
										<i className="fas fa-wallet"></i>
                              <Box component="span" ml={1}><IntlMessages id="widgets.conversionRate" /></Box>
									</Button>
									<Button variant="contained" 
										className={`custom-btn ${classNames(initialSelectedValue === 'sessions' ? "active" : "")}`}
										onClick={() => this.getTabData("sessions")}
										>
										<i className="fa fa-clock-o"></i>
                              <Box component="span" ml={1}><IntlMessages id="widgets.sessions" /></Box>
									</Button>
								</div>
								<Box component="div">
									{selectedData.map((val, index) => (
										<div key={index}>
											<Box className={classes.flexItems} py={2}>
												<Box>
													<Box className="active-stat" mb="5px">
														<Box  display="inline" pr='5px'>{val.noOfVistors}</Box>
														{val.usersThisWeekorMonth}
													</Box>
													<Box fontSize="subtitle2.fontSize" color="text.secondary">
														<Fragment>
															{val.status ?
																<Box className="stats-sec" color="error.main" fontSize="body2.fontSize" display="inline" pr={1}>
																	<Box component="span" className="fas fa-caret-down" mr="5px"></Box>{val.CompareWithLast}
																</Box>
																:
																<Box className="stats-sec" color="success.main" fontSize="body2.fontSize" display="inline" pr={1}>
																	<Box component="span" className="fas fa-caret-up" mr="5px"></Box>{val.CompareWithLast}
																</Box>
															}
														</Fragment>
														{val.textofusers}
													</Box>
												</Box>
												<FormControl className={classes.formControl}>
													<Select
														labelId="demo-simple-select-label"
														id="demo-simple-select"
														value={age}
														onChange={this.optionChange}
													>
														<MenuItem value={1}>Last 7 days</MenuItem>
														<MenuItem value={2}>Last month</MenuItem>
														<MenuItem value={3}>Last year</MenuItem>
													</Select>
												</FormControl>
											</Box>
											<ELineChart 
												height={'462px'}
												data={val}
												legendShow={true}
												enableXaxisLine={false}
												enableYaxisLine={false}
												enableXaxisTick={true}
												enableYaxisTick={true}
												xShowSplitLines={false}
												yShowSplitLines={true}
												xAxisColor={this.props.theme.palette.divider}
												yAxisColor={this.props.theme.palette.divider}
											/>
										</div>
									))}
								</Box>
							</div>
						</CustomCard>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default withStyles(styles)(withTheme(AnalyticTabs));