/**
 * User Activities
 */
import React, { Fragment ,useState} from 'react';
import { Typography, Divider, Avatar, Box } from '@material-ui/core';

//Component
import { CustomCard } from 'components/GlobalComponents';
import InfiniteScroll from 'react-infinite-scroll-component';
import { makeStyles } from '@material-ui/core/styles';
const useractivities = [
	{
		id: 1,
		userimage: 'user-4.jpg',
		name: 'Louise Kate',
		username: '@louisekate',
		postimage: '',
		desc: 'The new common language will be more simple and regular than the existing European languages. It will be as simple as Occiental; in fact, it will be Occidental.'
	},
	{
		id: 2,
		userimage: 'user-1.jpg',
		name: 'Louise Kate',
		username: '@louisekate',
		postimage: 'balls.jpg',
		desc: 'Posted New Photo'
	},
	{
		id: 3,
		userimage: 'user-2.jpg',
		name: 'Louise Kate',
		username: '@louisekate',
		postimage: '',
		desc: 'The new common language will be more simple and regular than the existing European languages. It will be as simple as Occiental; in fact, it will be Occidental.'
	},
	{
		id: 4,
		userimage: 'user-3.jpg',
		name: 'Louise Kate',
		username: '@louisekate',
		postimage: 'balls.jpg',
		desc: 'Posted 2 New Photos'
	},
]

const useStyles = makeStyles(theme => ({
	pad0: {
		padding: 0
	},
	thumbWrap: {
		'& img': {
			borderRadius: 5,
		}
	},
	large: {
		width: theme.spacing(7),
		height: theme.spacing(7),
	},
}));

function UserActivities() {
	const classes = useStyles();
	const [userData,setUserData] = useState(useractivities)

	const fetchMoreData = () => {
		setTimeout(() => {
			setUserData(userData.concat(useractivities));
		}, 1500);
	};

	return (
		<div>
			<InfiniteScroll
				dataLength={userData.length}
				next={fetchMoreData}
				hasMore={true}
				loader={<Box textAlign="center" p={3} fontSize="h6.fontSize">Loading ...</Box>}
				height="600px"
			>
				<CustomCard cardClasses={classes.pad0}>
					{userData.map((item, index) => (
						<Box key={index} className="user-activity">
							<Box display="flex" p={{ xs: 2, md: 3 }}>
								<Box>
									<Avatar className={classes.large} alt="img" src={require(`assets/Images/avatars/${item.userimage}`)} />
								</Box>
								<Box pl={2} pr={{ xs: 0, md: 2 }} className="content-wrap">
									<Box>
										<Box display={{ xs: 'block', sm: 'flex' }} alignItems="center">
											<Box pr="5px" className="user-name" component="span" fontWeight={500}>{item.name}</Box>
											<Typography variant="subtitle2" className="sep-block">{item.username}</Typography>
											<Typography variant="subtitle2">2h</Typography>
										</Box>
										<Typography variant="body2" color="textPrimary">{item.desc}</Typography>
									</Box>
									<Fragment>
										{item.postimage && item.postimage ?
											<Box mt={2} className={classes.thumbWrap}>
												<img src={require(`assets/Images/${item.postimage}`)} height={300} className="img-fluid" alt="user-images" />
											</Box>
											:
											null
										}
									</Fragment>
									<div className="mod-profile-meta mod-post-meta">
										<ul>
											<li>
												<i className="material-icons-outlined text-disabled">favorite_border</i>
												<span>452 Likes</span>
											</li>
											<li>
												<i className="material-icons-outlined text-disabled">chat_bubble_outline</i>
												<span>98 Comments</span>
											</li>
											<li>
												<i className="material-icons-outlined text-disabled">sync</i>
												<span>Retweet</span>
											</li>
										</ul>
									</div>
								</Box>
							</Box>
							<Divider />
						</Box>
					))}
				</CustomCard>
			</InfiniteScroll>

		</div>
	)
}
export default UserActivities;