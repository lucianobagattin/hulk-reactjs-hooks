/**
 * Tabs
 */
import React , {useState} from 'react';
import { Typography, Box, IconButton } from '@material-ui/core';

export default function NotificationsList(props) {

	const notifications = [
		{
			'id': 1,
			'type': 'New Message',
			'icon': 'fa-2x fab fa-instagram',
			'content': 'Lorem Ipsum is simply dummy text of the printing.',
			'class': 'danger-noti'
		}, {
			'id': 2,
			'type': 'New Email',
			'icon': 'fa-2x far fa-envelope',
			'content': 'Lorem Ipsum is simply dummy text of the printing.',
			'class': 'primary-noti'
		}, 
		{
			'id': 3,
			'type': 'Someone like your photo',
			'icon': 'fa-2x fab fa-whatsapp',
			'content': 'Lorem Ipsum is simply dummy text of the printing.',
			'class': 'success-noti'
		}
	]

   const [notification, setNotification] = useState(notifications);
   
   const onDeleteCartItem = (deleteItem) => {
      setNotification(notification.filter((item) => item.id !== deleteItem.id));
   }
   
	return (
		<div className="sidebar-widget-wrap">
			<ul className="sidebar-notifi-list">
            {notification.length > 0 ? 
               notification.map((item, index) => (
                  <li key={index} className={`sidebar-notifi-list--item ${item.class}`}>
                     <Box className="notifi-list--header">
                        <Box display="flex" alignItems="center"><i className={item.icon}></i>
                           <Typography className="ml-1 text-white" variant="body2">{item.type}</Typography>
                         </Box>
                        <IconButton size="small" edge="end" aria-label="delete" onClick={() => onDeleteCartItem(item)}>
                           <i className="material-icons">
                              close
                           </i>
                        </IconButton>
                     </Box>
                     <Box className="notifi-list--content">
                        <Typography>{item.content}</Typography>
                     </Box>
                  </li>
               ))
               : 
               <div>
                  {notification}
                  <li>No Notifications</li>
               </div>
            }
			</ul>
		</div>
	);
}
