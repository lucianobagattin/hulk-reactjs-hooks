/**
 * Ecommerce Dashboard 
 */
import React, { useState,useEffect} from 'react';
import { makeStyles, useTheme  } from '@material-ui/core/styles';
import { Grid, Paper, Container, Box } from '@material-ui/core';

// Components
import StackBarEcharts from 'components/GlobalComponents/Charts/StackBarEcharts'
import { CustomCard } from 'components/GlobalComponents';
import DonutEchart from 'components/GlobalComponents/Charts/DonutEchart';
import TaskList from 'components/Widgets/TaskList';
import NewUser from 'components/Widgets/NewUser';
import LiveChat from 'components/Widgets/LiveChat';
import SocialWidgets from 'components/Widgets/SocialWidgets';
import DynamicDataChart from 'components/Widgets/DynamicDataChart';

import IntlMessages from 'util/IntlMessages';

// Data
import { socailData } from './data';
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
	},
	pad0: {
		padding: 0
	}
}));

function Dashboard2() {
	const classes = useStyles();
	 const theme = useTheme();
	const [stackBarChart] = useState([
			{
				title: "daily",
				data1: [529, 665, 821, 860, 979, 503, 914, 716],
				data2: [595, 628, 773, 912, 511, 926, 825, 609],
				data3: [660, 931, 918, 935, 530, 823, 931, 612],
				data4: [561, 707, 769, 556, 884, 635, 617, 988],
				data5: [608, 644, 681, 600, 711, 935, 909, 916]
			},
			{
				title: "monthly",
				data1: [100, 100, 100, 100, 100, 100, 100, 100],
				data2: [100, 100, 100, 100, 100, 100, 100, 100],
				data3: [100, 100, 100, 100, 100, 100, 100, 100],
				data4: [100, 100, 100, 100, 100, 100, 100, 100],
				data5: [100, 100, 100, 100, 100, 100, 100, 100]
			}
		]);
	const [visitorStats, setVisitorStats] = useState([
			{ value: 335, name: 'New (30%)', itemStyle: { color: theme.palette.primary.main } },
			{ value: 310, name: 'Existing (40%)', itemStyle: { color: theme.palette.secondary.main } },
			{ value: 234, name: 'Returning (30%)', itemStyle: { color: theme.palette.success.main } }
		]);

	useEffect(() => {
		let newVisitorStats = visitorStats;
		for(let i = 0; i< newVisitorStats.length; i++){
			if(i === 0){
				newVisitorStats[i].itemStyle.color = theme.palette.primary.main;
			} else if(i === 1) {
				newVisitorStats[i].itemStyle.color = theme.palette.secondary.main;				
			} else {
				newVisitorStats[i].itemStyle.color = theme.palette.success.main;				
			}
		}
		setVisitorStats(newVisitorStats);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[]);

		return (
			<div className="new-dashboard">
				<Container maxWidth="lg">
					<Box pt={3}>
						<Paper className={classes.Paper} square >
							<DynamicDataChart />
						</Paper>
						<Paper className={classes.Paper} square>
							<Grid container spacing={3} className="stats-wrap">
								<Grid item xs={12} sm={12} md={6}>
                           <CustomCard title={<IntlMessages id="widgets.liveChat" />} showDivider={true}>
										<LiveChat />
									</CustomCard>
								</Grid>
								<Grid item xs={12} sm={12} md={6}>
                           <CustomCard title={<IntlMessages id="widgets.tasksList" />} showDivider={true}>
										<TaskList startIndex={0} />
									</CustomCard>
								</Grid>
							</Grid>
						</Paper>
						<Paper className={classes.Paper} square>
							<Grid container spacing={3} className="stats-wrap">
								<Grid item xs={12} sm={12} md={4}>
                           <CustomCard title={<IntlMessages id="widgets.newUsers" />} showDivider={true}>
										<NewUser />
									</CustomCard>
								</Grid>
								<Grid item xs={12} sm={12} md={4}>
                           <CustomCard title={<IntlMessages id="widgets.dynamicBarChart" />} showDivider={true}>
										<StackBarEcharts data={stackBarChart} />
									</CustomCard>
								</Grid>
								<Grid item xs={12} sm={12} md={4}>
                           <CustomCard title={<IntlMessages id="widgets.visitorsStats" />} showDivider={true}>
										<DonutEchart
											data={visitorStats}
											radius='50%'
											showLegend={true}
											height={'364px'}
											fontSize={10}
										/>
									</CustomCard>
								</Grid>
							</Grid>
						</Paper>
						<Paper className={classes.Paper} square>
							<SocialWidgets socailData={socailData} />
						</Paper>
					</Box>
				</Container>
			</div>
		);
}

export default Dashboard2;