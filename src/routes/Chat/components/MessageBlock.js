/**
 * Message Block Component
 */
import React from 'react';
import { Avatar, Box, Typography } from '@material-ui/core';

const Message = ({ textBlock, even, adminPhotoUrl, data, selectedUserPhotoUrl }) => {
	if (even) {
		return (
			<Box display="flex" alignItems="flex-start" mb="5px" p="5px 20px">
				<Box pr={2} className="thumb-wrap">
					<Avatar className="user-thumb" alt="user-profile" src={require(`assets/Images/avatars/${selectedUserPhotoUrl}`)} />
				</Box>
				<Box pt="5px">
					<Box mb="5px" px={{xs:1, sm:2}} py={{xs:'4px', sm:1}} borderRadius="borderRadius" className={`admin-content ${textBlock}`}>
						<Typography variant="body2">{data.message}</Typography>
					</Box>
					<Typography variant="body1">{data.sent}</Typography>
				</Box>
			</Box>
		);
	}
	return (
		<Box display="flex" alignItems="flex-start" flexDirection="row-reverse" mb="5px" p="5px 20px">
			<Box pl={2} className="user-thumb-wrap">
				<Avatar className="user-thumb" alt="admin-thumb" src={adminPhotoUrl} />
			</Box>
			<Box pt="5px">
				<Box mb="5px" px={{xs:1, sm:2}} py={{xs:'4px', sm:1}} bgcolor="primary.main" className={textBlock} borderRadius="borderRadius">
					<Box fontSize="body2.fontSize" color="primary.contrastText">{data.message}</Box>
				</Box>
				<Box display="flex" justifyContent="flex-end" alignItems="center">
					<Typography variant="body1">{data.sent}</Typography>
					<Box px="7px" fontSize="subtitle1.fontSize" component="span" color="primary.main" className="material-icons">done_all</Box>
				</Box>
			</Box>
		</Box>
	)
};

export default Message;
