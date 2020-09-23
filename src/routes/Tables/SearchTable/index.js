/**
 * Search Table
*/
import React,{useState} from 'react';
import MaterialTable from 'material-table';
import { Container, Box } from '@material-ui/core';

//Components
import { SmallTitleBar } from 'components/GlobalComponents';
import IntlMessages from 'util/IntlMessages';
export default function SearchTable() {
	const [state, setState] = useState({
		columns: [
			{ title: 'Name', field: 'name' },
			{ title: 'Surname', field: 'surname' },
			{ title: 'Birth Year', field: 'birthYear', type: 'numeric' },
			{ title: 'Birth Place', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } },
		],
		data: [
			{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
			{ name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
			{ name: 'John', surname: 'Doe', birthYear: 1983, birthCity: 34 },
			{ name: 'Marry', surname: 'Johnson', birthYear: 2015, birthCity: 63 },
			{ name: 'Henry', surname: 'Rower', birthYear: 1997, birthCity: 34 },
			{ name: 'Felecia', surname: 'Morgano', birthYear: 2020, birthCity: 63 },
		],
	});

	return (
		<div className="tables-wrapper search-table-wrap">
			<SmallTitleBar
            title={<IntlMessages id="sidebar.searchTable" />}
				center
			/>
			<Container maxWidth="lg">
				<Box px={{ xs: '12px', lg: 0 }} className="page-space">
					<MaterialTable
                  title={<IntlMessages id="sidebar.searchTable" />}
						columns={state.columns}
						data={state.data}
						editable={{
							onRowAdd: newData =>
								new Promise(resolve => {
									setTimeout(() => {
										resolve();
										setState(prevState => {
											const data = [...prevState.data];
											data.push(newData);
											return { ...prevState, data };
										});
									}, 600);
								}),
							onRowUpdate: (newData, oldData) =>
								new Promise(resolve => {
									setTimeout(() => {
										resolve();
										if (oldData) {
											setState(prevState => {
												const data = [...prevState.data];
												data[data.indexOf(oldData)] = newData;
												return { ...prevState, data };
											});
										}
									}, 600);
								}),
							onRowDelete: oldData =>
								new Promise(resolve => {
									setTimeout(() => {
										resolve();
										setState(prevState => {
											const data = [...prevState.data];
											data.splice(data.indexOf(oldData), 1);
											return { ...prevState, data };
										});
									}, 600);
								}),
						}}
					/>
				</Box>
			</Container>
		</div>
	);
}
