import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Scrollbars } from 'react-custom-scrollbars';
import {List, ListItem, ListItemAvatar, ListItemText, Avatar, Button, Box, Typography} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	root:{
		paddingTop:15
	},
	ListItem: {
		paddingLeft:0,
		paddingRight:0,
	},
	large:{
		width: theme.spacing(6),
		height: theme.spacing(6),
		marginRight:10
	},
	btn:{
		[theme.breakpoints.down('xs')]: {
			padding:'1px 5px',
			minWidth:'auto',
		}
	}
}));

const newUsersData = [
	{
		image: "user-1.jpg",
		text1: "Elena",
		text2: "UI/UX Designer, Google Inc",
		value: 79
	},
	{
		image: "user-2.jpg",
		text1: "Ariya",
		text2: "UI/UX Designer, Google Inc",
		value: 65
	},
	{
		image: "user-3.jpg",
		text1: "Shashi Verma",
		text2: "Frontend Developer, Iron Netwrok",
		value: 30
	},
	{
		image: "user-4.jpg",
		text1: "John",
		text2: "UI/UX Designer, Google Inc",
		value: 40
	},
	{
		image: "user-5.jpg",
		text1: "Smith Peters",
		text2: "Backend Developer, Github Inc",
		value: 80
	},
	{
		image: "user-6.jpg",
		text1: "Joe Peters",
		text2: "UI/UX Designer, Google Inc",
		value: 50
	},
	{
		image: "user-1.jpg",
		text1: "Rose Mic",
		text2: "Backend Developer, Github Inc",
		value: 80
	},
	{
		image: "user-2.jpg",
		text1: "Lucile Beck",
		text2: "UI/UX Designer, Google Inc",
		value: 50
	}
]

export default function NewUser() {
	const classes = useStyles();

	return (
		<div className="new-user-list" >
			<Scrollbars
				className="rct-scroll"
				autoHide
				style={{ height: "364px" }}
			>
				<List className={classes.root}>
					{newUsersData.map((item, i) => (
						<ListItem key={i} className={classes.ListItem}>
							<ListItemAvatar>
								<Avatar className={classes.large} src={require(`assets/Images/avatars/${item.image}`)} alt="user-profile" />
							</ListItemAvatar>
							<ListItemText>
								<Box color="text.primary">{item.text1}</Box>
								<Typography>{item.text2}</Typography>
							</ListItemText>
							<Box pl={1} className="action-wrap">
								<Button className={`${classes.btn} primary-bg-btn`} size="small" variant="outlined" color="primary">Follow</Button>
							</Box>
						</ListItem>
					))}
				</List>
			</Scrollbars>
		</div>
	);
}