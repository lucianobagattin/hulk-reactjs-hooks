/**
 * Component for line chart
 */
import React from 'react';
import ReactEcharts from 'echarts-for-react';
import 'echarts/lib/chart/line';
import { withTheme } from '@material-ui/core/styles';

function ELineChart(props) {

	/*
	* function to get all the required options 
	*/
	const getOptions = () => {
		const { data, legendShow, legends, legendOrient, legendTop, legendBottom, legendLeft,
			legendRight, legendIcon, legendBgColor, legendLabelColor, legendFontStyle, legendFontWeight,
			 legendFontFamily, legendFontSize, enableXaxisLine, enableYaxisLine, enableXaxisTick, 
			 enableYaxisTick, xAxisColor, yAxisColor, xAxisType, yAxisType,xShowSplitLines, yShowSplitLines } = props

		const option = {
			legend: {
				show: legendShow,
				data: legends,
				orient: legendOrient,
				top: legendTop,
				bottom: legendBottom,
				left: legendLeft,
				right: legendRight,
				type: 'scroll',
				icon: legendIcon,
				backgroundColor: legendBgColor,
				textStyle: {
					color: legendLabelColor,
					fontStyle: legendFontStyle,
					fontWeight: legendFontWeight,
					fontFamily: legendFontFamily,
					fontSize: legendFontSize,
				}
			},
			xAxis: {
				axisPointer:{
					type: 'shadow'
				},
				type: xAxisType,
				boundaryGap: false,
				data: data.labels,
				axisLine: {
					show: enableXaxisLine,
					lineStyle: {
						color: xAxisColor,
					}
				},
				axisTick: {
					show: enableXaxisTick
				},
				splitLine: {
					show: xShowSplitLines,
					lineStyle: {
						color: xAxisColor,
					}
				}

			},
			yAxis: {
				type: yAxisType,
				axisLine: {
					show: enableYaxisLine,
					lineStyle: {
						color: yAxisColor,
					}
				},
				axisTick: {
					show: enableYaxisTick
				},
				splitLine: {
					show: yShowSplitLines,
					lineStyle: {
						color: yAxisColor,
					}
				}
			},
			grid: {
				top:'4%',
				left: '2%',
				right: '2%',
				bottom: '6%',
				containLabel: true
			},
			// data.seriesData
			series: {
				...data.seriesData,
				lineStyle: {
					color: props.theme.palette.primary.main,
				},
				areaStyle: {
					color:props.theme.palette.primary.light
				}
			
			}
		}
		return option;
	}
 
	
		const { height } = props
		return (
			<ReactEcharts 
				autoresize
				option={getOptions()} 
				style={{height: `${height}`, width: '100%'}}
			/>
		);
	
}

ELineChart.defaultProps = {
	data: null,
	legendShow:false,
	legends: null,
	legendOrient: 'horizontal',
	legendTop: 'auto',
	legendBottom: 0,
	legendLeft: 'auto',
	legendRight: 'auto',
	legendIcon: 'roundRect',
	legendBgColor: 'rgba(0,0,0,0)',
	legendLabelColor: '#000',
	legendFontStyle: 'normal',
	legendFontWeight: 'normal',
	legendFontFamily: 'sans-serif',
	legendFontSize: 12,
	enableXaxisLine: false,
	enableYaxisLine: false,
	enableXaxisTick: true,
	enableYaxisTick: false,
	xAxisColor: 'rgba(0, 0, 0, 0.25)',
	yAxisColor: 'rgba(0, 0, 0, 0.25)',
	xAxisType: 'category',
	yAxisType: 'value',
	xShowSplitLines: false,
	yShowSplitLines: false	
}

export default withTheme(ELineChart);