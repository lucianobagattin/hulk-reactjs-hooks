/**
 * Using ECharts react component
 */
import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { withTheme } from '@material-ui/core/styles';

function PieEchart(props) {
	const getOptions = (position, showLabel) => {
		const option = {
			backgroundColor: props.theme.palette.background.paper,
			title: {
				left: 'center',
				top: 20,
				textStyle: {
					color: 'black'
				}
			},
			visualMap: {
				show: false,
				min: 80,
				max: 600,
				inRange: {
					colorLightness: [0, 1]
				}
			},
			legend: {
				show: true,
				orient: 'horizontal',
				data: ['Android (20%)', 'Mac (15%)', 'Ios (10%)', 'Other Devices (25%)', 'Windows (30%)'],
				bottom: 10,
				textStyle:{
					color : props.theme.palette.icon,
				}
			},
			series: [
				{
					type: 'pie',
					radius: '70%',
					center: ['50%', '50%'],
					data: [
						{ value: 335, name: "Android (20%)", itemStyle: {color: props.theme.palette.primary.main}},
						{ value: 310, name: "Mac (15%)", itemStyle: {color: props.theme.palette.primary.main} },
						{ value: 274, name: "Ios (10%)", itemStyle: {color: props.theme.palette.primary.main} },
						{ value: 235, name: "Other Devices (25%)", itemStyle: {color: props.theme.palette.primary.main} },
						{ value: 400, name: "Windows (30%)", itemStyle: {color: props.theme.palette.primary.main} },
					].sort(function (a, b) { return a.value - b.value; }),
					roseType: 'radius',
					itemStyle: {
						normal: {
							label: {
								show: false
							},
							labelLine: {
								show: false
							},
							shadowBlur: 200,
							shadowColor: 'rgba(0, 0, 0, 0)'
						}
					},
					animationType: 'scale',
					animationEasing: 'elasticOut',
					animationDelay: function (idx) {
						return Math.random() * 200;
					}
				}
			]
		};
	
		return option;
	}

	const { showLabel } = props;
	return (
		<ReactEcharts 
			option={getOptions(showLabel)} 
			style={{height:'340px', width: '100%'}}
		/>
	);
	
}
// default prop values
PieEchart.defaultProps = {
	showLabel: true
}

export default withTheme(PieEchart);