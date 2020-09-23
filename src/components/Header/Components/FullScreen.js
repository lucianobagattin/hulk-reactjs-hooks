/**
 * Functional component to toggle the full screen functionality of the application
 */
import React from 'react'
import {Tooltip, IconButton, Icon } from '@material-ui/core'
import screenfull from 'screenfull'

export default function FullScreen(props) {
	return (
		<Tooltip title="Full Screen" placement="bottom">
			<IconButton aria-label="settings" style={{padding: '6px'}} onClick={() => toggleScreenFull()}>
				<Icon className={props.iconColor}>fullscreen</Icon>
			</IconButton>
		</Tooltip>
	);
}

/**
 * Function to toggle the full screen functionality
 */
function toggleScreenFull() {
	screenfull.toggle();
}