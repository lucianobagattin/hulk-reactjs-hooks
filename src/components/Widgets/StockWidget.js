/*
 * Task List Widget
 */
import React, {useState} from 'react';
import { Box, List, ListItem, Typography } from '@material-ui/core';
import { Scrollbars } from 'react-custom-scrollbars';
import LineChartV3 from './LineChartV3'
// Data
import Stocksdata from 'assets/Data/Stocks.json';

function StockWidget(props) {
	const [data] = useState(Stocksdata);

	return (
		<Box position="relative" className="sidebar-widget">
			<div className="widget-title">
				<Typography variant="h6">Stock Market</Typography>
			</div>
			<div className="widget-box">
				<Scrollbars
					className="rct-scroll"
					autoHide
					style={{ height: "350px" }}
				>
					<List>
						{data && data.map((item, index) => (
							<ListItem key={index} disableRipple button>
								<div className="stock-widget-wrap">
									<div className="stock-title">
										<Typography variant="body2">{item.stockName}</Typography>
										<Typography className="text-over">{item.desc}</Typography>
									</div>
									<div className="stock-chart">
										<LineChartV3 data={item.data}></LineChartV3>
									</div>
									<div className="stock-data">
										<Typography className="stock-current">{item.total}</Typography>
										<Typography className="stock-diff bg-success text-white">{item.profile}</Typography>
									</div>
								</div>
							</ListItem>
						))}
					</List>
				</Scrollbars>
			</div>
		</Box>
	)
}
export default StockWidget;