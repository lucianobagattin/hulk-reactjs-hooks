/*
 * Marketing Chart Widget
 */
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Box } from '@material-ui/core';

const options = {
	layout: {
		padding: {
			left: 0,
			right: 0,
			top: 10,
			bottom: 0
		}
	},
	legend: {
		display: false
	},
	scales: {
		xAxes: [{
			gridLines: {
				display: false,
				tickMarkLength: 0,
			},
			ticks: {
				display: false,
				padding: 0,
			}
		}],
		yAxes: [{
			gridLines: {
				display: false,
				tickMarkLength: 0,
			},
			ticks: {
				display: false,
				beginAtZero: true,
				padding: 0,
			}
		}]
	},
	maintainAspectRatio: true
};

function MarketingChartWidget(props) {
	const { allData, title } = props;
	const data = {
		labels: allData.labels,
		datasets: allData.datasets
	};
	return (
		<div>
			<Box p="20px">
				<Box mb="5px" fontSize="body2.fontSize" fontWeight={500} >{title}</Box>
				<Box display="flex" fontSize="subtitle2.fontSize" alignItems="center" color="text.secondary">
					<Box fontSize={20} pr={1} className="material-icons-outlined">visibility</Box>
					View All(5)
				</Box>
			</Box>
			<Line data={data} redraw height={104} options={options}></Line>
		</div>
	);
}

export default MarketingChartWidget;