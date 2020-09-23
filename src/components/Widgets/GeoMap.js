/*
 * News Account Chart Widget
 */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Chart } from "react-google-charts";
import { Box, Grid, TableContainer, Table, TableRow, TableHead, TableBody, TableCell,  } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	overlayContent:{
		zIndex:1,
		position:'absolute',
		top:0,
		left:0,
		right:0,
		bottom:0,
		backgroundColor:'rgba(255,255,255,0.4)',
	},
	profileIcon: {
		width: theme.spacing(10),
		height: theme.spacing(10),
		border:`1px solid ${theme.palette.text.secondary}`
	},
	table: {
		minWidth: 650,
	},
}));

const countryData = [
	{
		icon:'usa.png',
		name:'USA',
		users:300,
		BounceRate:'1.76'
	},
	{
		icon:'india.png',
		name:'India',
		users:800,
		BounceRate:'1.76'
	},
	{
		icon:'russia.png',
		name:'Russia',
		users:300,
		BounceRate:'1.76'
	},
	{
		icon:'canada.png',
		name:'Canada',
		users:600,
		BounceRate:'1.76'
	},
	{
		icon:'germany.png',
		name:'Germany',
		users:700,
		BounceRate:'1.76'
	}
]

export default function GeoMap() {

	const classes = useStyles();

	return (
		<Box pt={3} className="geo-map-wrap">
			<Grid container spacing={0}>
				<Grid item xs={12} sm={12} md={12} lg={6}>
					<div className={"my-pretty-chart-container"}>
						<Chart
							width="100%"
							height="360px"
							chartType="GeoChart"
							data={[
								['Country', 'Users'],
								['United States', 300],
								['India', 800],
								['Russia', 300],
								['Canada', 600],
								['germany', 700],
							]}
							options={{
								
								colorAxis: { colors: ['#a0b9f8','#4d7df2','#a0b9f8','#4d7df2','#4d7df2'] },
							 }}
							mapsApiKey="YOUR_KEY_HERE"
							rootProps={{ 'data-testid': '1' }}
						/>
					</div>
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={6}>
					<Box className="geo-table">
						 <TableContainer>
							<Table className={classes.table} aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell>Country</TableCell>
									<TableCell>Users</TableCell>
									<TableCell>BounceRate</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{countryData.map((country, index) => (
									<TableRow key={index}>
										<TableCell>
											<Box display="flex" alignItems="center">
												<img alt="flag-icon" src={require(`assets/Images/flags/${country.icon}`)} />
												<Box pl={2} fontWeight={500} className="country-name">{country.name}</Box>
											</Box>
										</TableCell>
										<TableCell>{country.users}</TableCell>
										<TableCell>{country.BounceRate}</TableCell>
									</TableRow>
								))}
							</TableBody>
							</Table>
						</TableContainer>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
}