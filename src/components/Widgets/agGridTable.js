/*
 * agGrid Widget
 */
import React, { useRef ,useState} from 'react';
import { AgGridReact } from 'ag-grid-react';
import { Box, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import SampleRowDataFactory from "assets/Data/AgGridData.json";
import { LicenseManager } from "ag-grid-enterprise";
LicenseManager.setLicenseKey("ca0a73e09ea3f32cd1cf9d175d2ec91c");

function AgGridTable(props) {
   const [columnDefs] = useState([
            {
               headerName: 'ID',
               field: 'Id',
               width: 175,
               filter: 'agNumberColumnFilter',
               checkboxSelection: true,
               headerCheckboxSelectionFilteredOnly: true,
               headerCheckboxSelection: true,
            },
            {
               headerName: 'First Name',
               field: 'First Name',
               filter: 'agTextColumnFilter',
               width: 175,
            },
            {
               headerName: 'Last Name',
               field: 'Last Name',
               filter: 'agTextColumnFilter',
               width: 175,
            },
            {
               headerName: 'Email',
               field: 'Email',
               filter: 'agTextColumnFilter',
               width: 250,
               pinned: 'left'
            },
            {
               headerName: 'Address',
               field: 'Address',
               filter: 'agTextColumnFilter',
               width: 250,
            },
            {
               headerName: 'City',
               field: 'City',
               filter: 'agTextColumnFilter',
               width: 150,
            },
            {
               headerName: 'Country',
               field: 'Country',
               filter: 'agTextColumnFilter',
               width: 150,
            },
            {
               headerName: 'Province',
               field: 'Province',
               filter: 'agTextColumnFilter',
               width: 100,
            },
            {
               headerName: 'Contact Number',
               field: 'Contact Number',
               filter: 'agNumberColumnFilter',
               width: 100,
            },
         ]);
   const [rowData] = useState(SampleRowDataFactory);
   const [rowsPerPage,setRowsPerPage] = useState(10);
   const [gridOptions] = useState({
               defaultColDef: {
                  sortable: true,
                  filter: false
               },
               floatingFilter: true,
               pagination:true,
               rowHeight: 60,
               headerHeight:50,
               floatingFiltersHeight:60,
            }
         );
   const gridApi = useRef();

   const onGridReady = params => {
      gridApi.current = params.api;
   };
	
   const onBtnExport = (event) => {
      var params = getParams();
      gridApi.current.exportDataAsCsv(params);
   }
   const searchtext = (event) => {
      onFilterTextBoxChanged();
   }
   const onFilterTextBoxChanged = (event) => {
      gridApi.current.setQuickFilter(document.getElementById('filter-text-box').value);
   }
   const onPageSizeChanged = (newPageSize) => {
		setRowsPerPage(newPageSize.target.value);
      gridApi.current.paginationSetPageSize(Number(newPageSize.target.value));
   }

	return (
		<Box pb={7}>
			<div className="ag-theme-balham" style={{height: '670px', width: '100%'}}>
            <Box display="flex" className="ag-main-filter" justifyContent="space-between" alignItems="center" mb={2}>
					<div className="test-header">
						<FormControl className="selection-wrap">
							<InputLabel id="page-size">Page Size :</InputLabel>
							<Select
								labelId="page-size"
								id="page-size"
								value={rowsPerPage}
								onChange={onPageSizeChanged}
							>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</FormControl>
					</div>
					<Box display="flex" className="ag-main-filter--right" justifyContent="space-between" alignItems="center">
						<input className="filter-text-input" type="text" id="filter-text-box" placeholder="Filter..." onInput={searchtext} />
						<Button variant="contained" color="primary" onClick={onBtnExport}>
							Export CSV
						</Button>
					</Box>
				</Box>
				<div style={{ height: '100%', width: '100%' }} className="ag-fresh">
					<AgGridReact
						gridOptions={gridOptions}
						onGridReady={onGridReady}
						columnDefs={columnDefs}
						rowData={rowData} 
						                
					/>
				</div>
			</div>
		</Box>
	);
}

function getParams() {
   return {
      suppressQuotes:undefined,
      columnSeparator: undefined,
      customHeader: 'none',
      customFooter: 'none'
   };
}
export default AgGridTable;