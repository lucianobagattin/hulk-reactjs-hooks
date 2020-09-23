/**
 * Line chart widget
 */
import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { Box } from '@material-ui/core';


export default function LineChartV2(props){


	const { color } = props;
	const { data, icon, title, total, trade } = props.data;
	
	const lineData = (canvas) => {
		return {
			labels: data.labels,
			datasets: [
				{
					label: data.label,
					fill: false,
					lineTension: 0,
					fillOpacity: 0.3,
					borderColor: data.borderColor,
					borderWidth: data.borderWidth,
					pointBorderColor: data.pointBorderColor,
					pointBackgroundColor: data.pointBackgroundColor,
					pointBorderWidth:6,
					pointHoverBackgroundColor: data.pointBackgroundColor,
					pointHoverBorderColor: data.pointBorderColor,
					pointHoverBorderWidth: data.borderWidth,
					pointRadius: 1,
					pointHitRadius: 10,
					data: data.chartdata
				}
			]
		}
	}
	// chart options
	const allOptions = {
		responsive: true,
		legend: {
			display: false
		},
		tooltips: {
			mode: "point"
		},
		scales: {
			xAxes: [{
				display: false,
				ticks: {
					min: 0
				},
				gridLines: {
					display: false
				}
			}],
			yAxes: [{
				display: false,
				ticks: {
					suggestedMin: 0,
					beginAtZero: true
				}
			}]
		}
	};
	return (
		<Box p={3}>
			<Box mb={2} display="flex" justifyContent="flex-start" alignItems="center">
				<Box color={color} fontSize="h6.fontSize" pr={1} component="span" className={icon}></Box>
				<Box color="text.primary" fontSize="h6.fontSize" fontWeight="h6.fontWeight">{title}</Box>
			</Box>
			<Box mb={2} className="chart-wrap">
				<Line ref="chart" data={lineData} options={allOptions} height={data.height} />
			</Box>
			<Box display="flex" justifyContent="space-between" alignItems="center">
				<Box color={color} className="stats-main-font">+ {total}</Box>
				<Box color={color}>Trade : {trade}%</Box>
			</Box>
		</Box>
	);
}