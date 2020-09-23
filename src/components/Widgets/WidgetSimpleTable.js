/**
 * Custom Simple Mi ui Table with sorted columns 
*/
import React, { useRef, useState} from 'react';
import { makeStyles, Box, ButtonGroup, Button } from '@material-ui/core';
import { forwardRef } from 'react';
import MaterialTable from 'material-table';
import { CustomCard } from 'components/GlobalComponents';
import { CSVLink } from "react-csv";
import ReactToPrint from 'react-to-print';
import { DeleteOutline, Edit, Check, Clear } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
	TableWrap: {
		'& .MuiTableCell-paddingNone':{
			padding: '0 16px',
		},
		'& >div >.MuiToolbar-root': {
			display: 'block !important',
			padding: 0,
			backgroundColor:'transparent',
			'& >div:first-child':{
				fontSize: '1.25rem',
				fontFamily: "'Roboto', sans-serif",
				fontWeight: 500,
				marginBottom: 12
			},
			'& div:nth-child(4)': {
				display: 'inline-block !important',
				textAlign: 'right',
				width: 100
			},
			'& .MuiFormControl-root': {
				padding: 0,
				width: 'calc(100% - 100px)',
			},
			'& .MuiInput-formControl': {
				minHeight: 44,
				padding: '0 10px',
				borderRadius: 4,
				border: `1px solid ${theme.palette.divider}`,
				'&:before,&:after': {
					display: 'none',
				}
			},
			'& .MuiIconButton-colorInherit': {
				borderRadius: 4,
				padding: '13px 12px',
				color: theme.palette.common.white,
				fontSize: '0.875rem',
				fontWeight: 500,
				fontFamily: `'Roboto', sans-serif`,
				backgroundColor: theme.palette.primary.main,
			}
		},
		'& .MuiTableCell-head': {
			zIndex: 0,
		},
		'& .MuiTableCell-root': {
			'& .MuiIconButton-root': {
				padding: 4,
			}
		}
	},
	link:{
		'&:hover':{
			color:theme.palette.primary.main,
		}
	},
	btn:{
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
	}
}));

export default function WidgetSimpleTable(props) {

	const { title, columns, data, selection } = props;
	const [state, setState] = useState({
		columns: columns,
		data: data,
	});

	const tableIcons = {
		Add: forwardRef((props, ref) => <Box {...props} ref={ref}>Add New</Box>),
		Check: forwardRef((props, ref) => <Box color="primary.main"><Check {...props} ref={ref} /></Box>),
		Clear: forwardRef((props, ref) => <Box color="secondary.main"><Clear {...props} ref={ref} /></Box>),
		Delete: forwardRef((props, ref) => <Box color="secondary.main"><DeleteOutline {...props} ref={ref} /></Box>),
		Edit: forwardRef((props, ref) => <Box color="primary.main"><Edit {...props} ref={ref} /></Box>),
	};
	const classes = useStyles();
	const componentRef = useRef();

	return (
		<CustomCard cardClasses="simple-table-widget">
			<Box textAlign="right" className="btn-sec-wrap">
				<ButtonGroup className="btn-wrap" color="primary" aria-label="outlined primary button group">
					<Button><CSVLink className={classes.link} data={state.data}>Export as CSV</CSVLink></Button>
					<ReactToPrint
						trigger={() => <Button variant="outlined" color="primary" className={`table-btn ${classes.btn}`}>Print</Button>}
						content={() => componentRef.current}
					/> 
				</ButtonGroup>
			</Box>
			<Box className={classes.TableWrap} ref={componentRef}>
				<MaterialTable
					icons={tableIcons}
					title={title}
					style={{ boxShadow: 'none' }}
					columns={state.columns}
					data={state.data}
					options={{
						actionsColumnIndex: -1,
						sorting: true,
						search: true,
						paging: true,
						toolbar: true,
						selection: selection
					}}
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
		</CustomCard>
	);
}