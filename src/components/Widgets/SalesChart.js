/*
 * Sales Widget
 */
import React ,{useEffect,useState} from 'react';
import { Line } from 'react-chartjs-2';
import { Typography, Button } from '@material-ui/core';
import IntlMessages from 'util/IntlMessages';
import { withTheme } from '@material-ui/core/styles';
const options = {
	legend: {
		display: false
	},
	scales: {
		xAxes: [{
			gridLines: {
				display: false,
				color: '#b3b3b2',
				zeroLineColor: '#b3b3b2'
			},
			ticks: {
				fontColor: '#b3b3b2'
			}
		}],
		yAxes: [{
			gridLines: {
				display: false,
				color: '#b3b3b2',
				zeroLineColor: '#b3b3b2'
			},
			ticks: {
				fontColor: '#b3b3b2',
				beginAtZero: true
			}
		}]
	},
	maintainAspectRatio: true
};
// const ;

function SalesChartWidget(props){
	const [data,setData] = useState({
		labels: ["May 8", "May 9", "May 10", "May 11", "May 12", "May 13", "May 14"],
		datasets: [
			{
				label: "My First dataset",
				lineTension: 0,
				borderWidth: 1,
				backgroundColor: props.theme.palette.primary.light,
				borderColor: props.theme.palette.primary.main,
				pointBackgroundColor: props.theme.palette.common.white,
				pointBorderWidth: 2,
				pointRadius: 5,
				data: [100, 100, 20, 20, 20, 35, 50]
			}
		]
	});
	useEffect(() => {
		setData({
			  ...data,
			  datasets: data.datasets.map((d, i) =>
				 i === 0
					? {
						 ...d,
						 backgroundColor: props.theme.palette.primary.light,
						 borderColor: props.theme.palette.primary.main,
					  }
					: d,
			  ),
			})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[]);
	return (
		<div>
			<div className="sale-widget-wrap">
				<div>
					<ul>
						<li>
                    <Typography variant="body2"><IntlMessages id="widgets.totalViews" /></Typography>
							<Typography variant="h3">2498</Typography>
						</li>
						<li>
                    <Typography variant="body2"><IntlMessages id="widgets.totalSales" /></Typography>
							<Typography variant="h3">1467</Typography>
						</li>
					</ul>
				</div>
				<div>
					<Button variant="outlined" className="primary-bg-btn" color="primary">
                 <IntlMessages id="widgets.viewMore" />
					</Button>
				</div>
			</div>
			<Line data={data} redraw height={160} options={options}></Line>
		</div>

	);
}
export default withTheme(SalesChartWidget);