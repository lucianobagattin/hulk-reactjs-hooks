/**
 * Custom Table
*/
import React from "react";
import { Container, Box } from '@material-ui/core';

// Components
import { SmallTitleBar } from 'components/GlobalComponents';
import CustomTableWidget from "components/Widgets/customTableWidget";
import IntlMessages from 'util/IntlMessages';

function CustomTable() {
  	return (
     <div className="tables-wrapper">
        <SmallTitleBar title={<IntlMessages id="widgets.customTable" />} center />
			<Container maxWidth="lg">
				<Box px={{ xs:'12px', lg:0}} className="page-space">
					<CustomTableWidget />
				</Box>
			</Container>
		</div>			  
  	);
}

export default CustomTable;