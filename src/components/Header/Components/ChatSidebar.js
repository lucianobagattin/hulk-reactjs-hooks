/**
 * Chat Sidebar
 */
import React from 'react';
import { Tooltip, IconButton, Icon } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

export default function ChatSidebar(props) {
	return (
		<Tooltip title="Chat" placement="bottom">
			<IconButton  variant="contained" color="primary"
					style={{padding: '6px'}}>
				<NavLink to="/app/chat" style={{ lineHeight:'20px'}}>
					<Icon className={props.iconColor} style={{ transform: 'scale(0.9)'}}>chat_bubble_outline</Icon>
				</NavLink>
			</IconButton>
		</Tooltip>
	);
}