/**
 * Component for line chart
*/
import React from 'react';
import ReactEcharts from 'echarts-for-react';

function BarEchart(props){

	/** 
	 * function to get all the required options 
	 * */
	const getOptions =() =>{
		const { 	xAxisdata, seriesData, barColor, xAxisShowTicks, yAxisShowTicks,
					xAxisShowLabels, yAxisShowLabels, yAxisShowLine, xAxisShowLine, yAxisSplitLine,
					gridTop, gridLeft, gridbottom, gridRight
				} = props

		const option = {
			color:barColor,
			grid: {
				top:gridTop,
				left: gridLeft, //Values must be in percentages
				right: gridRight,
				bottom: gridbottom,
			},
			xAxis: {
				type: 'category',
				data: xAxisdata,
				axisTick: {
					show: xAxisShowTicks
				},
				axisLabel: {
					show: xAxisShowLabels
				},
				axisLine: {
					show: xAxisShowLine
				}
			},
			yAxis: {
				type: 'value',
				axisTick: {
					show: yAxisShowTicks
				},
				axisLabel: {
					show: yAxisShowLabels
				},
				splitLine: {
					show: yAxisSplitLine
				},
				axisLine: {
					show: yAxisShowLine
				}
			},
			series: seriesData
		}
		return option;
	}

	
		const { height } = props;
		return (
			<ReactEcharts 
				option={getOptions()} 
				style={{height: `${height}`, width: '100%'}}
			/>
		);
	
}

BarEchart.defaultProps = {
	xAxisdata: null,
	seriesData: null,
	barColor: "#3f51b5",
	xAxisShowTicks: true,
	yAxisShowTicks: true,
	xAxisShowLabels: true,
	yAxisShowLabels: true,
	xAxisShowLine: true,
	yAxisShowLine: true,
	yAxisSplitLine: true,	
}

export { BarEchart };