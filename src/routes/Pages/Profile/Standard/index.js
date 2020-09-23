/**
 * Extended profile
 */
import React from 'react';
import { Grid, Box, Container } from '@material-ui/core';

//Components
import UserDetail from './Components/UserDetail'
import TodaysTasks from './Components/TodaysTasks'
import TodaysThought from './Components/TodaysThought'
import RecentFollowers from './Components/RecentFollowes'
import UserActivities from './Components/UserActivities';

export default function Standard() {
	return (
		<div className="hk-user-profile">
			<Container maxWidth="lg">
				<Box px={{ xs:'12px', lg:0}} className="page-space">
					<Grid container spacing={3}>
						<Grid item xs={12} sm={4} md={3}>
							<UserDetail />
						</Grid>
						<Grid item xs={12} sm={8} md={6}>
							<UserActivities />
						</Grid>
						<Grid item xs={12} sm={12} md={3}>
							<Box mb={3}>
								<TodaysTasks />
							</Box>
							<Box mb={3}>
								<TodaysThought />
							</Box>
							<Box mb={3}>
								<RecentFollowers />
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</div>
	);
}