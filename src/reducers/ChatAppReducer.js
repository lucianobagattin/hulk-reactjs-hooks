/*
 *
 * Chat App Reducers
 */
import update from 'react-addons-update';

// actions types
import {
   CHAT_WITH_SELECTED_USER,
   SEND_MESSAGE_TO_USER,
   UPDATE_USERS_SEARCH,
   SEARCH_USERS,
	GET_RECENT_CHAT_USERS,
	GET_DEFAULT_SELECTED_USER,
   CHAT_CONVERSATIONS_TYPE
} from 'actions/Types';

// chat users
import recentChat from 'assets/Data/ChatAppUsers.json';

const INITIAL_STATE = {
   admin_photo_url: require('assets/Images/avatars/user-6.jpg'),
   recentChatUsers: recentChat.data,
   allRecentChatUsers: recentChat.data,
   allChatUsers: recentChat.data,
   selectedUser: '',
   searchUsers: '',
   isSidebarShow: true,
   conversationType:'all'
};

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
      // get recent chat user
      case GET_RECENT_CHAT_USERS:
			return { ...state, recentChat };
			
		// get selected user
		case GET_DEFAULT_SELECTED_USER:
				let selectUser = 1;
				let user = state.recentChatUsers.filter((item) => item.id === selectUser)
				return update(
					state, 
					{selectedUser:{$set:user[0]}}
				);
		
      // chat with selected user
      case CHAT_WITH_SELECTED_USER:
			let indexOfSelectedUser;
			indexOfSelectedUser = state.recentChatUsers.indexOf(action.payload);
         return update(state, {
            selectedUser: { $set: action.payload },
            recentChatUsers: {
               [indexOfSelectedUser]: {
                  isSelectedChat: { $set: true },
                  new_message_count: { $set: 0 }
               }
            }
         });

      case CHAT_CONVERSATIONS_TYPE:
         state.isSidebarShow = true;
         const filterdata = state.allChatUsers.filter((user) => user[action.payload]);
         state.selectedUser = '';
         
         return { 
           ...state, 
           recentChatUsers: filterdata, 
           selectedUser:filterdata[0]
          };

      case SEND_MESSAGE_TO_USER:
         let adminReplyData = {
            isAdmin: action.payload.isAdmin,
            message: action.payload.message,
            sent: action.payload.time
         };
         let pos = state.selectedUser.previousChats.length;
         return update(state, {
            selectedUser: { previousChats: { $splice: [[pos, 0, adminReplyData]] } }
         })

      // update search
      case UPDATE_USERS_SEARCH:
         return { ...state, searchUsers: action.payload };

      // search user
      case SEARCH_USERS:
         if (action.payload === '') {
            return { ...state, recentChatUsers: state.allChatUsers };
         } else {
            const searchUsers = state.allRecentChatUsers.filter((user) =>
            user.first_name.toLowerCase().indexOf(action.payload.toLowerCase()) > -1);
            return { ...state, recentChatUsers: searchUsers }
         }

      default: return { ...state };
   }
}