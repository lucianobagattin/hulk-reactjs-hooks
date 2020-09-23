/**
 * Recent Followers
 */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Box, Typography, Button } from '@material-ui/core';
import IntlMessages from 'util/IntlMessages';
//Component
import { CustomCard } from 'components/GlobalComponents';

const followers = [
	{
		id: 1,
		name: 'Louise Kate',
		image: 'user-1.jpg',
		userName: '@louisekate',
		time: '3mins ago'
	},
	{
		id: 2,
		name: 'Louise Kate',
		image: 'user-2.jpg',
		userName: '@louisekate',
		time: '3mins ago'
	},
	{
		id: 3,
		name: 'Louise Kate',
		image: 'user-3.jpg',
		userName: '@louisekate',
		time: '3mins ago'
	}
]

const useStyles = makeStyles(theme => ({
	large: {
		width: theme.spacing(7),
		height: theme.spacing(7),
	},
}));

export default function RecentFollower() {
	const classes = useStyles();

	return (
		<div>
			<CustomCard cardClasses="recent-followers-wrap" title={<IntlMessages id="component.recentFollowers" />} showDivider={true}>
				<Box pt={3}>
					{followers.map((follower, key) => (
						<Box className="recent-followers--list" key={key} display="flex" justifyContent="space-between" mb={2}>
							<Box display="flex" >
								<Box>
									<Avatar className={classes.large} alt="img" src={require(`assets/Images/avatars/${follower.image}`)} />
								</Box>
								<Box pl={2} className="content-wrap">
									<Box>
										<Box>{follower.name}</Box>
										<Typography variant="subtitle2" >{follower.userName}</Typography>
									</Box>
								</Box>
							</Box>
							<Box>
								<Button className="recent-followers--follow" variant="outlined" color="primary">
									Follow
								</Button>
							</Box>
						</Box>
					))}
				</Box>
			</CustomCard>
		</div>
	);
}