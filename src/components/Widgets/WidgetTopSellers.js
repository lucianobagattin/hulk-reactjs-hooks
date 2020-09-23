/**
 * Widget Top Sellers
*/
import React, { Fragment,useState } from 'react'
import { withStyles } from '@material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import { Typography, AppBar, Tabs, Tab, Box, Grid } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating';
import { BarEchart, DonutEchart } from 'components/GlobalComponents'

function TabPanel(props) {
	const { children, value, index, ...other } = props;
	return (
	  <Typography
		 component="div"
		 role="tabpanel"
		 hidden={value !== index}
		 id={`scrollable-force-tabpanel-${index}`}
		 aria-labelledby={`scrollable-force-tab-${index}`}
		 {...other}
	  >
		 {value === index && <Box pt={4}>{children}</Box>}
	  </Typography>
	);
 }

function a11yProps(index) {
	return {
	  id: `scrollable-force-tab-${index}`,
	  'aria-controls': `scrollable-force-tabpanel-${index}`,
	};
}

function WidgetTopSellers(props) {
	/** Constructor */
	const [tabIndex,setTabIndex] = useState(0);
	const [data,setData] = useState([ 40000, 50000, 38000, 37000, 35000, 37000]);
	const [labels,setLabels] = useState(["Computer", "Phone", "Clothing", "Household", "Accessories","Grooming"]);
	const [data2, setData2] = useState([ 42000, 40000, 35000, 25000, 30000, 33000]);
	const [labels2, setLabels2] = useState(["Acme", "Globex", "Soylent", "Initech", "Hooli","Vehement"]);
	const [visitorStats, setVisitorStats] =useState([
				{ value: 335, name: 'Product 1', itemStyle: {color: 'blue'} },
				{ value: 310, name: 'Product 2', itemStyle: {color: 'red'} },
				{ value: 234, name: 'Product 3', itemStyle: {color: 'green'} },
				{ value: 335, name: 'Product 4', itemStyle: {color: 'yellow'} },
				{ value: 310, name: 'Product 5', itemStyle: {color: 'black'} },
				{ value: 234, name: 'Product 6', itemStyle: {color: 'blue'} },
				{ value: 335, name: 'Product 7', itemStyle: {color: 'red'} },
				{ value: 310, name: 'Product 8', itemStyle: {color: 'green'} }
			]);

	/** Function to detect event changes */
	const handleTabChange = (event, value) => {
		setTabIndex(value);
	}

	/** Function to handle change on swipe view */
	const handleChangeIndex = index => {
		setTabIndex(index);
	}

	const { productData,theme } = props;
	return (
		<div style={{marginTop:10}}>
			<AppBar position="static" color="default" style={{ boxShadow: 'none' }}>
				<Tabs 
					value={tabIndex}
					onChange={handleTabChange}
					indicatorColor="primary"
					textColor="primary"
					variant="scrollable"
					scrollButtons="on"
					aria-label="scrollable auto tabs example"
				>
					<Tab 
						label={<><Box component="span" fontSize="subtitle2.fontSize" className="fas fa-lock" mr={1} />Product</>} {...a11yProps(0)} 
					/>
					<Tab 
						label={<><Box component="span" fontSize="subtitle2.fontSize" className="fas fa-tags" mr={1} />Product Category</>} {...a11yProps(1)} 
					/>
					<Tab 
						label={<><Box component="span" fontSize="subtitle2.fontSize" className="fas fa-tag" mr={1} />Brands</>} {...a11yProps(2)} 
					/>
				</Tabs>
			</AppBar>
			<SwipeableViews
				//animateHeight
				axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
				index={tabIndex}
				onChangeIndex={handleChangeIndex}
			>
				<TabPanel dir={theme.direction}>
					{productData && productData.length > 0 &&
						<div className="top-seller-product-wrap" style={{marginTop:'-4px'}}>
							{productData.map(data => (
								<Fragment key={data.id}>
									<Grid container spacing={0}>
										<Grid item xs={12} sm={6} md={5}>
											<Box pr={{xs:0 ,md:7}}>
												<Box mb={1}>
													<img src={require(`assets/Images/${data.image}`)} alt="product-img" className="img-fluid" style={{ borderRadius: '2px' }} />
												</Box>
												<Typography variant="body2">{data.title}</Typography>
												<Box fontSize="body2.fontSize" mb={'4px'} color="text.primary">{data.price}</Box>
												<Rating name="read-only" size="small" value={data.rating} readOnly />
											</Box>
										</Grid>
										<Grid item xs={12} sm={6} md={7}>
											<DonutEchart 
												data={visitorStats} 
												radius='35%'
												showLegend={true}
												height={'460px'}
												fontSize={10}
											/>
											<Box textAlign={{ xs: 'center', md: 'left' }}>
												<Box fontSize="body2.fontSize" fontWeight="500" color="text.primary">Total Sales</Box>
												<Box fontSize="body2.fontSize" fontWeight="500" color="text.primary">88,935 sales</Box>
											</Box>
										</Grid>
									</Grid>
								</Fragment>
							))}
						</div>
					}
				</TabPanel>
				<TabPanel dir={theme.direction}>
					<BarEchart 
						height={'460px'} 
						xAxisdata={labels} 
						seriesData={data} 
						barColor='#3f51b5'
						xAxisShowTicks= {true}
						yAxisShowTicks= {true}
						xAxisShowLabels= {true}
						yAxisShowLabels= {true}
						xAxisShowLine= {true}
						yAxisShowLine= {true}
						yAxisSplitLine= {true}
					/>
				</TabPanel>
				<TabPanel dir={theme.direction}>
					<BarEchart 
						height={'460px'} 
						xAxisdata={labels2} 
						seriesData={data2} 
						barColor='#3f51b5'
						xAxisShowTicks= {true}
						yAxisShowTicks= {true}
						xAxisShowLabels= {true}
						yAxisShowLabels= {true}
						xAxisShowLine= {true}
						yAxisShowLine= {true}
						yAxisSplitLine= {true}
					/>
				</TabPanel>
			</SwipeableViews>
		</div>
	);
}

export default WidgetTopSellers;