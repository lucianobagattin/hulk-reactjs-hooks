/**
 * Using ReactLineChart react component
 */
import React from 'react';
import { Line } from 'react-chartjs-2';

const options = {
	legend: {
		position: 'bottom',
		labels: {
			fontColor: '#fff'
		}
	},
	scales: {
		xAxes: [{
			gridLines: {
				color: '#6878c5',
				zeroLineColor: '#6878c5'
			},
			ticks: {
				fontColor: '#6878c5'
			}
		}],
		yAxes: [{
			gridLines: {
				color: '#6878c5',
				zeroLineColor: '#6878c5'
			},
			ticks: {
				fontColor: '#6878c5'
			}
		}]
	},
	maintainAspectRatio: false
};

function ReactLineChart(props){

	const { data } = props;
	return (
		<Line data={data} redraw height={300} options={options}></Line>
	);
}

export { ReactLineChart };