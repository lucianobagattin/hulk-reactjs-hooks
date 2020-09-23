/**
 * Line chart widget
 */
import React, { useRef } from "react";
import { Line } from "react-chartjs-2";
import { Box } from '@material-ui/core';


export default function LineChartV3(props) {
	const data = props.data;
	const chart = useRef();
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
					pointBorderWidth:0,
					pointHoverBackgroundColor: data.pointBackgroundColor,
					pointHoverBorderColor: data.pointBorderColor,
					pointHoverBorderWidth: data.borderWidth,
					pointRadius: 0,
					pointHitRadius: 0,
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
			<Box mb={2} className="chart-wrap">
				<Line ref={chart} data={lineData} options={allOptions} width={60} height="50px" />
			</Box>
		</Box>
	);
}