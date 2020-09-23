/**
 * Custom Table Widget
*/
import React,{useState} from "react";
import MaterialTable from "material-table";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Typography, Avatar, Tooltip, IconButton } from '@material-ui/core';

//Data
import customTable from "assets/Data/CustomTable";

import IntlMessages from 'util/IntlMessages';

// Components
import { CustomCard, SocialIcons } from 'components/GlobalComponents';

const useStyles = makeStyles(theme => ({
	root: {
		'& .MuiTableCell-paddingNone': {
			padding: '0 16px',
		},
		'& .MuiTableCell-body': {
			lineHeight: 1,
		},
		'& .MuiToolbar-root': {
			paddingRight: 20,
			'& >div:first-child': {
				fontSize: '1.25rem',
				fontFamily: "'Roboto', sans-serif",
				fontWeight: 500,
			}
		}
	},
	content: {

	},
	menuButton: {

	}
}));

function CustomTableWidget(){
	const classes = useStyles();
	const [columns] = useState([
			{ title: 'Avatar', field: 'imageUrl', render: rowData => <img alt="user-thumb" src={require(`assets/Images/avatars/${rowData.imageUrl}`)} className="img-50 bdr-rad-50" /> },
			{ title: 'First Name', field: 'firstName' },
			{ title: 'Last Name', field: 'lastName' },
			{ title: 'Email', field: 'email' },
			{
				title: 'Date Added', field: 'dateAdded', render: rowData =>
				<div>
					<span className="thisIsClass">
						{rowData.dateAdded}
					</span>
					{rowData.icon ?
						<span className="custom-table-arrow">
							<i className="material-icons">arrow_forward_ios</i>
						</span>
						:
						<span></span>
					}
				</div>
			},
		]);
	const [data] = useState(customTable.data);
	const [selectedRow,setSelectedRow] = useState({
			"firstName": "Zachery",
			"lastName": "Terrell",
			"designation": "Web Developer",
			"city": "Chakwal",
			"postal": "352950",
			"address": "Ap #262-5976 Elementum Rd.",
			"country": "Virgin Islands",
			"imageUrl": "user-1.jpg",
			"contactNo": "9876543210",
			"lastModified": "17/3/2019",
			"tableData": {
				"id": 0
			}});
	
	const handleRowClick = (event, rowData) => {
		let tableData = customTable.data

		for (let i = 0; i < tableData.length; i++) {
			if (tableData[i].icon === true) {
				if (i === rowData.tableData.id) {
					tableData[i].icon = true
				} else {
					tableData[i].icon = false;
				}
			} else {
				if (i === rowData.tableData.id) {
					tableData[i].icon = true
				}
			}
		}
		setSelectedRow(rowData);
	}


	return (
		<Grid container spacing={0} className="res-custom-table">
			<Grid item xs={12} sm={12} md={8}>
				<Box className={`custom-table-wrap ${classes.root}`}>
					<MaterialTable
						title={<IntlMessages id="widgets.customTable" />}
						columns={columns}
						data={data}
						options={{
							rowStyle: rowData => ({
								backgroundColor: (selectedRow && selectedRow.tableData.id === rowData.tableData.id) ? '#f3f7fa' : '#FFF'
							})
						}}
						onRowClick={handleRowClick}
					/>
				</Box>
			</Grid>
			<Grid item xs={12} sm={12} md={4}>
				<CustomCard cardClasses="preview-panel">
					{selectedRow ?
						<>
							<Box mb={2} textAlign="center">
								<Avatar alt="user-thumb" className="avatar-wrap" src={require(`assets/Images/avatars/${selectedRow.imageUrl}`)} />
								<Box pl={2}>
									<Box fontWeight={500}>{selectedRow.firstName} {selectedRow.lastName}</Box>
									<Typography variant="subtitle2">{selectedRow.designation}</Typography>
								</Box>
							</Box>
							<Box mb={2} textAlign="center">
								<Tooltip title="Print" placement="bottom">
									<IconButton className="preview-icon-btn" variant="outlined">
										<i className="material-icons-outlined">print</i>
									</IconButton>
								</Tooltip>
								<Tooltip title="Delete" placement="bottom">
									<IconButton className="preview-icon-btn" variant="outlined">
										<i className="material-icons">delete_outline</i>
									</IconButton>
								</Tooltip>
								<Tooltip title="Edit" placement="bottom">
									<IconButton className="preview-icon-btn" variant="outlined">
										<i className="material-icons">edit</i>
									</IconButton>
								</Tooltip>
								<Tooltip title="PageView" placement="bottom">
									<IconButton className="preview-icon-btn" variant="outlined">
										<i className="material-icons-outlined">pageview</i>
									</IconButton>
								</Tooltip>
							</Box>
							<Box mb={2} className="preview-content">
								<Typography variant="body2">
									<span>Address :</span>
									<span>{selectedRow.address}</span>
								</Typography>
								<Typography variant="body2">
									<span>city : </span>
									<span>{selectedRow.city}</span>
								</Typography>
								<Typography variant="body2">
									<span>country :</span>
									<span>{selectedRow.country}</span>
								</Typography>
								<Typography variant="body2">
									<span>postal :</span>
									<span>{selectedRow.postal}</span>
								</Typography>
								<Typography variant="body2">
									<span>Contact No :</span>
									<span>{selectedRow.contactNo}</span>
								</Typography>
								<Typography variant="body2">
									<span>Last Modified :</span>
									<span>{selectedRow.lastModified}</span>
								</Typography>
							</Box>
							<Box textAlign="center">
								<SocialIcons />
							</Box>
						</>
						:
						null
					}
				</CustomCard>
			</Grid>
		</Grid>
	);
}

export default CustomTableWidget;