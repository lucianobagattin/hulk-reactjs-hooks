import React from 'react'
import { ESmoothLineChart } from '../GlobalComponents'

function SmoothLineChart(props){
	return (
		<ESmoothLineChart xAxisdata={props.xAxisdata} seriesData={props.seriesData} />
	);
}

export default SmoothLineChart;