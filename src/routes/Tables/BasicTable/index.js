/**
 * Basic Table
*/
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Container, Box } from '@material-ui/core';

// Components
import { SmallTitleBar, CustomCard } from 'components/GlobalComponents';
import IntlMessages from 'util/IntlMessages';
const useStyles = makeStyles({
   table: {
      minWidth: 650,
   },
});

function createData(name, calories, fat, carbs, protein) {
   return { name, calories, fat, carbs, protein };
}

const rows = [
   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
   createData('Eclair', 262, 16.0, 24, 6.0),
   createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
	createData('Doughnut', 305, 3.7, 67, 4.3),
   createData('KitKat', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
   const classes = useStyles();

   return (
      <div className="tables-wrapper">
         <SmallTitleBar
            title={<IntlMessages id="sidebar.basicTable" />}
            center
         />
			<Container maxWidth="lg">
				<Box px={{ xs:'12px', lg:0}} className="page-space">
               <CustomCard title={<IntlMessages id="sidebar.basicTable" />}>
						<Box pt={3}>
							<TableContainer>
								<Table className={classes.table} aria-label="simple table">
									<TableHead>
										<TableRow>
											<TableCell>Dessert (100g serving)</TableCell>
											<TableCell align="left">Calories</TableCell>
											<TableCell align="left">Fat&nbsp;(g)</TableCell>
											<TableCell align="left">Carbs&nbsp;(g)</TableCell>
											<TableCell align="left">Protein&nbsp;(g)</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{rows.map(row => (
											<TableRow key={row.name}>
												<TableCell component="th" scope="row">
													{row.name}
												</TableCell>
												<TableCell align="left">{row.calories}</TableCell>
												<TableCell align="left">{row.fat}</TableCell>
												<TableCell align="left">{row.carbs}</TableCell>
												<TableCell align="left">{row.protein}</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</TableContainer>
						</Box>
					</CustomCard>
				</Box>
			</Container>
      </div>      
   );
}