/**
 * Social Widget
 */
import React from 'react';
import { Grid, Box} from '@material-ui/core';

// Component
import { CustomCard } from 'components/GlobalComponents';
import ELineChart from 'components/GlobalComponents/Charts/ELineChart'
export default function SocialWidgets(props) {

	const { socailData } = props;
	return (
		<div className="social-widget-wrap">
			<Grid container spacing={3} >
				{ socailData.map((data, i) =>(
					<Grid item xs={12} sm={12} md={4} key={i}>
						<CustomCard>
							<Box display="flex" alignItems="start" mb={4}>
								<Box>
									<Box color={data.iconColor} component="span" fontSize={{xs:'3rem', md:'6rem'}} className={data.icon}></Box>
								</Box>
								<Box pl={{ xs:2, md:3 }} className="content-wrap">
									<Box fontSize="h4.fontSize">{data.count}</Box>
									<Box lineHeight={1.2}>{data.countType}</Box>                           
									<Box color={data.iconColor} fontWeight="h6.fontWeight" fontSize="h6.fontSize">{data.platform}</Box>
								</Box>
							</Box>
							<Box mb={2}>
								<Box color="text.secondary">{data.monthCount} this month</Box>
								<Box color="text.secondary">{data.growthRate} Growth rate</Box>
							</Box>
							<ELineChart 
								height={'150px'}
								data={data}
								legendShow={true}
								enableXaxisLine={false}
								enableYaxisLine={false}
								enableXaxisTick={true}
								enableYaxisTick={true}
								xShowSplitLines={false}
								yShowSplitLines={true}
							/>
						</CustomCard>
					</Grid>               
				))}
			</Grid>
		</div>
	);
}