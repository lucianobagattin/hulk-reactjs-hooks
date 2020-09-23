/**
 * Ag Grid Table
*/
import React from 'react';
import { Box, Container } from '@material-ui/core';

// Component
import { SmallTitleBar, CustomCard } from 'components/GlobalComponents';
import AgGridTable from 'components/Widgets/agGridTable'
import IntlMessages from 'util/IntlMessages';
function AgGrid() {
   return (
      <div className="tables-wrapper">
			<SmallTitleBar
            title={<IntlMessages id="component.aggridTable" />}
				center
			/>
			<Container maxWidth="lg">
				<Box px={{ xs: '12px', lg: 0 }} className="page-space">
               <CustomCard title={<IntlMessages id="component.aggridTable" />}>
						<Box pt={3}>
							<AgGridTable></AgGridTable>
						</Box>
					</CustomCard>
				</Box>
         </Container>
      </div>
   )
}
export default AgGrid;