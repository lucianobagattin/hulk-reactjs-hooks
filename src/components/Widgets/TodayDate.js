import React, {useState} from 'react';
import moment from 'moment';
import { Typography } from '@material-ui/core';

// Main component
export default function TodayDate() {
	const [currentDay] = useState(moment().format("Do MMMM"));
	const [todayDayName] = useState(moment().format('dddd'));
	return (
		<div className="today-date sidebar-widget">
			<Typography variant="h4">{todayDayName}</Typography>
			<Typography variant="h4">{currentDay}</Typography>
		</div>
	)
}