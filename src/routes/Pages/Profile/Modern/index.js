/**
 * Modern Profile
 */
import React from 'react';
import { Grid, Box, Container } from '@material-ui/core';

//Components
import UserDetail from './Components/UserDetail'
import TodaysThought from './Components/TodaysThought'
import RecentFollowers from './Components/RecentFollowes'
import UserActivities from './Components/UserActivities';
import ProfileGallery from './Components/ProfileGallery';

export default function Modern(){
	return (
		<div className="hk-user-profile">
			<Container maxWidth="lg">
				<Box px={{ xs:'12px', lg:0}} className="page-space">
					<Grid container spacing={3}>
						<Grid item xs={12} sm={12} md={8}>
							<UserDetail />
							<UserActivities />
						</Grid>
						<Grid item xs={12} sm={12} md={4}>
							<Box mb={3}>
								<ProfileGallery />
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