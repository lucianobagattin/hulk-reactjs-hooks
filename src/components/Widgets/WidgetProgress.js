/**
 * Widget Progress
 */
import React from 'react';
import { LinearProgress, Box, Typography, makeStyles, List, ListItem } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	root: {
	  width: '100%',
	  maxWidth: '100%',
	  backgroundColor: theme.palette.background.paper,
	},
	listItems:{
		padding:'0.875rem 0 1rem',
		borderBottom:`1px solid ${theme.palette.divider}`
	}
}));
 
export default function WidgetProgress(props) {
	const classes = useStyles();
	const { data } = props;
	return (
		<div className={classes.root}>
			{data && data.length > 0 &&
				<List component="nav" aria-label="secondary mailbox folders">
					{data && data.map((progressData, index) => (
						<ListItem className={classes.listItems} ripple='false' key={progressData.id} component="li">
							<Box display="block" width="100%">
								<Typography variant="subtitle2" color="textPrimary">
									{progressData.name}
								</Typography>
								<Box fontSize="body1.fontSize" textAlign="right" mb={'4px'}>
									{progressData.title}
								</Box>
								<LinearProgress variant="determinate"  value={progressData.value} style={{height:'15px'}}/>
							</Box>
						</ListItem>
					))}
			 </List>
			}
		</div>
	);
}