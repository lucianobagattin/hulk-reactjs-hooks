/**
 * Today's Tasks
 */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Box } from '@material-ui/core';

//Component
import { CustomCard } from 'components/GlobalComponents';
import IntlMessages from 'util/IntlMessages';

const tasks = [
	{
		id: 1,
		tasks: 'Meet Louise kate at beach with your baggage and please be on time.',
		time: 'At 15.00PM',
		bgColor:'secondary.main'
	},
	{
		id: 2,
		tasks: 'New users from March is promoted as special benefit under promotional offer of 30%.',
		time: 'At 17.00PM',
		bgColor:'info.main'
	},
	{
		id: 3,
		tasks: 'Site goes is down for 6 hours due to maintainance and bug fixing. Please Check ',
		time: 'At 02.00AM',
		bgColor:'primary.main'
	},
	{
		id: 4,
		tasks: 'Bug detected from the development team at the cart module of Fashion store. ',
		time: 'At 16.00PM',
		bgColor:'success.main'
	},
];

const useStyles = makeStyles(theme => ({
	taskList: {
		'&:last-child':{
			marginBottom:0
		}
	}
}));

export default function TodaysTasks() {
	const classes = useStyles();

	return (
		<div>
         <CustomCard title={<IntlMessages id="component.todaysTasks" />} showDivider={true}>
				<Box pt={3}>
					{tasks.map((task, index) => (
						<Box key={index} mb="20px" className={classes.taskList}>
							<Box borderRadius={4} bgcolor={task.bgColor} className="text-white font-sm" p={1} mb={1}>{task.tasks}</Box>
							<Typography className="font-sm" style={{ "textAlign": "right" }}>{task.time}</Typography>
						</Box>
					))}
				</Box>
			</CustomCard>
		</div>
	);
}