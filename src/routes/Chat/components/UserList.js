/**
 * User List
*/
import React  from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';
import {FormControl, Input, InputAdornment, Box, Divider} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

// Components
import RecentChatUsers from './RecentChatUsers';
import { UPDATE_USERS_SEARCH ,SEARCH_USERS } from "actions/Types";
// Redux actions

function UserList(props){
   /**
    * Swicth Chat With User
    * @param {*object} user
    */
   const chatAppReducer = useSelector(state => state.chatAppReducer);
   const searchUsers = chatAppReducer.searchUsers;
   const dispatch = useDispatch();
   /**
    * On Search Chat Users
   */
	const updateSearch = (e) => {
		dispatch({ type: UPDATE_USERS_SEARCH, payload:e.target.value });
		dispatch({ type: SEARCH_USERS, payload:e.target.value });
	}

	return (
		<Box position="relative">
			<Box position="absolute" top='15px' left={16} right={16}>
				<FormControl fullWidth >
					<Input
						type="text"
						name="search-users"
						id="search"
						placeholder="Search"
						onChange={(e) => updateSearch(e)}
						value={searchUsers}
						endAdornment={
							<InputAdornment position="end">
								<SearchIcon />
							</InputAdornment>
						}
					/>
				</FormControl>	
			</Box>
			<Divider />
			<div className="chat-list">
				<Scrollbars
					className="rct-scroll"
					autoHide
					style={{ height: 'calc(100vh - 135px)' }}
				>
					<RecentChatUsers />
				</Scrollbars>
			</div>
		</Box>
	);
}

export default UserList;