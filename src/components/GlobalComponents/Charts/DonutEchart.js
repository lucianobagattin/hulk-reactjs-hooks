/**
 * Donut EChart component
 */

import React, { useEffect,useState } from 'react';
import ReactEcharts from 'echarts-for-react';
import { withTheme } from '@material-ui/core/styles';

function DonutEchart(props) {
	const [rerender,setRerender] = useState(true);
	
	const getOptions = () => {
		const { data, radius, showLegend, fontSize, centerX, centerY, startAngle, endAngle } = props
		const option = {
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b}: {c} ({d}%)"
			},
			legend: {
				orient: 'horizontal',
				data: data.name,
				show:showLegend,
				bottom:0,
				textStyle:{
					color : props.theme.palette.icon,
				}
			},
			series: [
				{
					type:'pie',
					startAngle: startAngle,
					endAngle: endAngle,
					center: [centerX, centerY],
					radius: [radius, '70%'],
					avoidLabelOverlap: false,
					label: {
						
						normal: {
							show: false,
							position: 'center'
						},
						emphasis: {
							show: false,
							textStyle: {
								fontSize: fontSize,
							}
						}
					},
					labelLine: {
							normal: {
								show: false
							}
					},
					data: data,
				}
			]
		};
		return option;
	}


    useEffect( () => {
       setRerender(true);
    }, [props])


	const { height } = props;
	if(rerender){
		return (
			<ReactEcharts autoresize option={getOptions()} style={{height: `${height}`, width: '100%'}}/>
		);
	} else {
		return null;
	}

}
DonutEchart.defaultProps = {
	data: null,
	radius: '50%',
	showLegend:true,
	height:'190px',
	fontSize:12,
	centerX:'50%',
	centerY:'50%',
	startAngle:90,
	endAngle:0
}

export default withTheme(DonutEchart);