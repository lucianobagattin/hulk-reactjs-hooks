/**
 * App Bar
 */
import React from 'react';
import { Box, Container } from '@material-ui/core';
import IntlMessages from 'util/IntlMessages';
//Components
import { SmallTitleBar, CustomCard } from 'components/GlobalComponents';
import SimpleAppBar from './components/SimplAppBar';
import PrimarySearchAppBar from './components/PrimarySearchAppBar';
import MenuAppBar from './components/MenuAppBar';

export default function ButtonAppBar() {
	
	return (
		<div className="ui-app-wrapper">
			<SmallTitleBar
            title={<IntlMessages id="sidebar.appBar" />}
				center
			/>
			<div className="page-space">
				<Container>
					<Box px={{ xs:'12px', lg:0 }}>
						<Box mb={4}>
                     <CustomCard title={<IntlMessages id="component.simpleAppBar" />}>
								<Box pt={2}>
									<SimpleAppBar/>
								</Box>
							</CustomCard>
						</Box>
						<Box mb={4}>
                     <CustomCard title={<IntlMessages id="component.appBarWithAPrimarySearchField" />} >
								<Box pt={2}>
									<PrimarySearchAppBar />
								</Box>
							</CustomCard>
						</Box>
						<Box mb={4}>
                     <CustomCard title={<IntlMessages id="component.appBarWithMenu" />}>
								<Box pt={2}>
									<MenuAppBar/>
								</Box>
							</CustomCard>
						</Box>
					</Box>
				</Container>
			</div>
		</div>
	);
}