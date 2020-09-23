/*
 * News Account Chart Widget
 */
import React from 'react';
import { Box } from '@material-ui/core';

// Component
import { BarEchart } from 'components/GlobalComponents';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	overlayContent:{
		zIndex:1,
		position:'absolute',
		top:0,
		left:0,
		right:0,
		bottom:0,
		backgroundColor:'rgba(255,255,255,0.4)',
	},
	profileIcon: {
		width: theme.spacing(10),
		height: theme.spacing(10),
		border:`1px solid ${theme.palette.text.secondary}`
	}
}));
export default function NewAccountsChart(props) {

	const { allData, title } = props;
	const datasets = allData;
	const classes = useStyles();

	return (
		<Box position="relative">
			<Box className={`dark-overlay ${classes.overlayContent}`} pt={4} p="20px" display="flex" justifyContent="center" alignItems="center" flexDirection="column">
				<Box mb={3} className={classes.profileIcon} borderRadius="100%" display="inline-flex" alignItems="center" justifyContent="center">
					<Box fontSize={40} component="span" color="text.secondary" className="material-icons-outlined">person_add</Box>
				</Box>
				<Box mb="5px"fontSize="h5.fontSize">{title}</Box>
				<Box mb="5px" fontSize="h2.fontSize" fontWeight={700} >678</Box>
				<Box display="flex" justifyContent="center" alignItems="center" color="text.secondary">
					<Box className="likes-wrap" display="flex" justifyContent="center" alignItems="center" p="3px 8px" mr={1} borderRadius="5px" color="common.white" bgcolor="secondary.main">
						<Box fontSize={20} pr="5px" component="span" className="material-icons">thumb_up_alt</Box>
						89%
					</Box>
					From previous month
				</Box>
			</Box>
			<BarEchart
				height={'300px'}
				xAxisdata={datasets.labels}
				seriesData={datasets.series}
				barColor={datasets.barColor}
				legendIcon='null'
				xAxisShowTicks={false}
				yAxisShowTicks={false}
				xAxisShowLabels={false}
				yAxisShowLabels={false}
				xAxisShowLine={false}
				yAxisShowLine={false}
				yAxisSplitLine={false}
				gridTop='5%'
				gridLeft='0'
				gridRight='0'
				gridBottom='0'
			/>
		</Box>
	);
}