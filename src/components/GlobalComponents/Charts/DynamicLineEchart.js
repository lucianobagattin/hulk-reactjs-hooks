/**
 * Component for line chart
 */

import React, { useEffect,useState } from 'react';
import { Box, Switch } from '@material-ui/core';
import ReactEcharts from 'echarts-for-react';
import 'echarts/lib/chart/line';

import { withTheme } from '@material-ui/core/styles';

function randomData() {
	now = new Date(+now + oneDay);
	value = value + Math.random() * 21 - 10;
	return {
		name: now.toString(),
		value: [
			[now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
			Math.round(value)
		]
	};
}

var data = [];
var now = +new Date(1997, 9, 3);
var oneDay = 24 * 3600 * 1000;
var value = Math.random() * 1000;

for (var i = 0; i < 500; i++) {
   data.push(randomData());
}

function DynamicLineEchart(props){
	const [chartData,setChartData] = useState(data);
	const [checked,setChecked] = useState(true);

 	useEffect(() => {
 		const intervalId =  window.setInterval(() => {
	 		changeDataFn();
	 	},1000);
	 	return () => {
		   clearInterval(intervalId);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
 	},[]);
 	
	const changeDataFn = () =>{
		console.log(checked);
		if(checked){
			for (var i = 0; i < 5; i++) {
				data.shift();
				data.push(randomData())				
			}
			setChartData(data);
		}
	}
	const handleChange = (event) => {
		console.log(event)
		setChecked(!checked);
	};

	/** 
	 * function to get all the required options
	 * */
	const getOptions = () => {
		const option = {
			tooltip: {
					trigger: 'axis',
					formatter: function (params) {
						params = params[0];
						var date = new Date(params.name);
						return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
					},
					axisPointer: {
						animation: false
					}
			},
			xAxis: {
				type: 'time',
				splitLine: {
				show: false
				},
				axisLine: {
					show: true,
					lineStyle: {
						color:'rgba(0, 0, 0, 0.4)',
					}
				},
			},
			yAxis: {
				type: 'value',
				boundaryGap: [0, '100%'],
				axisLine: {
					show: true,
					lineStyle: {
						color:'rgba(0, 0, 0, 0.4)',
					}
				},
				splitLine: {
					show: false
				}
			},
			grid: {
				top:'2%',
				left: '6%',
				right: '2%',
				bottom: '5%',
			},
			series: [{
				name: 'Data',
				type: 'line',
				showSymbol: false,
				symbolSize:0,
				hoverAnimation: false,
				areaStyle: {color: props.theme.palette.primary.light},
				lineStyle: {color: props.theme.palette.primary.main	},
				data: chartData
			}]
		}
		return option;
		}    
	const { height } = props
	return (
		<div>
			<Box display="flex" justifyContent="flex-end" alignItems="center" py={3}>
				<Switch 
					color="primary"
					size="small"
					checked={checked}
					className="switch-V2" 
					onClick={() => handleChange(checked)}
				/>
				<Box component="span" fontSize="subtitle2.fontSize" ml={1}>Live Data</Box>
			</Box>
			<ReactEcharts 
				option={getOptions()} 
				style={{height:`${height}`, width: '100%'}}
			/>
		</div>
	);
}

export default withTheme(DynamicLineEchart);