/**
 * Dynamic Data Widget
 */
import React, { Component,useState} from 'react';
import { withStyles } from '@material-ui/styles';
import { Grid, Box, LinearProgress, List, ListItem, Typography } from '@material-ui/core';

// Component
import { CustomCard } from 'components/GlobalComponents';

const styles = theme => ({
	listItems: {
		padding: '10px 11px',
	},
	primaryProgress: {
		color: theme.palette.primary.main,
	},
	secondaryProgress: {
		color: theme.palette.secondary.main,
	},
	infoProgress: {
		color: theme.palette.info.main,
	},
	successProgress: {
		color: theme.palette.success.main,
	},
});

function ProgressBars() {
	const classes = useStyles();
	const [progressData,setProgressData] = useState([
		{
			id: 1,
			title: "My Task",
			progress: "79%",
			value: 79
		},
		{
			id: 2,
			title: "My Task",
			progress: "65%",
			value: 65
		},
		{
			id: 3,
			title: "My Task",
			progress: "30%",
			value: 30
      },
		{
			id: 4,
			title: "My Task",
			progress: "40%",
			value: 40
		}
	]);
	return (
		<div>
			<Grid container spacing={3} >
				<Grid item xs={6} sm={6} md={6}>
					<CustomCard title="Progress Bars" showDivider={true}>						
                     <div>
                        <Box mb="4px" className={classes.listWrap}>
                           {progressData && progressData.length > 0 &&
                              <List component="nav" aria-label="secondary mailbox folders">
                                 {progressData && progressData.map((progressData, index) => (
                                    <ListItem key={index} component="li" ripple='false' className={classes.listItems}>
                                       <Box display="block" width="100%">
                                          <Box mb={1} display="flex" justifyContent="space-between" alignItems="center">
                                             <Typography variant="body2" color="textPrimary">
                                                {progressData.title}
                                             </Typography>
                                             <Box color="primary.main" fontSize="body2.fontSize" textAlign="right">
                                                {progressData.progress}
                                             </Box>
                                          </Box>
                                          <LinearProgress variant="determinate" value={progressData.value} style={{ height: '12px' }} />
                                       </Box>
                                    </ListItem>
                                 ))}
                              </List>
                           }
                        </Box>
                     </div>
					</CustomCard>
				</Grid>
			</Grid>
		</div>
	);
}

export default ProgressBars;