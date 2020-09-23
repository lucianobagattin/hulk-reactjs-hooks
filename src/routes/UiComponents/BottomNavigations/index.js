/**
 * Bottom Navigation
 */
import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, Box, BottomNavigationAction, Container } from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FolderIcon from '@material-ui/icons/Folder';
import IntlMessages from 'util/IntlMessages';
//Global Component
import { SmallTitleBar, CustomCard } from 'components/GlobalComponents';

const useStyles = makeStyles(theme => ({
	root: {
		width: 500,
		[theme.breakpoints.down('xs')]: {
			width: 'auto',
			height: 'auto',
			flexWrap:'wrap',
		},
	},
}));

export default function SimpleBottomNavigation() {

	const classes = useStyles();
	const [value, setValue] = useState(0);
	const [value2, setValue2 ] = useState('recents');

	const handleChange = (event, newValue) => {
		setValue2(newValue);
	};

	return (
		<div className="ui-app-wrapper">
			<SmallTitleBar
            title={<IntlMessages id="sidebar.bottomNavigations" />}
				center
			/>
			<div className="page-space">
				<Container>
					<Box px={{ xs: '12px', lg: 0 }}>
						<Box mb={4}>
							<CustomCard title={<IntlMessages id="component.bottomNavigation" />}>
								<Box py={2}>
									<BottomNavigation
										value={value}
										onChange={(event, newValue) => {
											setValue(newValue);
										}}
										showLabels
										className={classes.root}
									>
										<BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
										<BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
										<BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
									</BottomNavigation>
								</Box>
							</CustomCard>
						</Box>
						<Box mb={4}>
                     <CustomCard title={<IntlMessages id="component.bottomNavigationWithNoLabel" />}>
								<Box py={2}>
									<BottomNavigation value={value2} onChange={handleChange} className={classes.root}>
										<BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
										<BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
										<BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
										<BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
									</BottomNavigation>
								</Box>
							</CustomCard>
						</Box>
					</Box>
				</Container>
			</div>
		</div>
	);
}