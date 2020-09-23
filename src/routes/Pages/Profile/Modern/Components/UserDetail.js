/**
 * User Detail
 */
import React from 'react';
import { Typography, Box, Button } from '@material-ui/core';

export default function UserDetail() {
	return (
		<div className="mod-profile-wrap">
			<Box py={3} className="mod-profile">
				<div className="mod-profile-header" style={{ backgroundImage: "url(" + require('assets/Images/blog-8.jpg') + ")", backgroundSize: 'cover', backgroundPosition: 'center center' }}>
				</div>
				<Box className="mod-profile-detail">
					<Box>
						<div className="user-avatar">
							<img src={require('assets/Images/avatars/user-4.jpg')} alt="user images" />
						</div>
						<Box>
							<Typography variant="h6">Ethen Blunt</Typography>
							<Typography variant="body2" className="text-disabled" style={{ "marginBottom": "5px" }}>@ethenblunt</Typography>
							<Typography variant="body2" style={{ "marginBottom": "5px" }}>Production Mananger, Mistre Inc</Typography>
							<div className="mod-profile-meta mod-profile-bio">
								<ul>
									<li>
										<i className="material-icons-outlined text-disabled">room</i>
										<span>USA</span>
									</li>
									<li>
										<i className="material-icons-outlined text-disabled">link</i>
										<span>www.loremipsum.com</span>
									</li>
									<li>
										<i className="material-icons-outlined text-disabled">calendar_today</i>
										<span>17 May</span>
									</li>
								</ul>
							</div>
							<div className="mod-profile-meta mod-profile-meta--followers ">
								<ul>
									<li>
										<Typography variant="h6" className="mr-1">123</Typography>
										<Typography variant="body2">Following</Typography>
									</li>
									<li>
										<Typography variant="h6" className="mr-1">22.3k</Typography>
										<Typography variant="body2">Followers</Typography>
									</li>
								</ul>
							</div>
						</Box>
					</Box>
					<Box className="user-detail--btn text-right">
						<Button variant="outlined" color="primary">
							Follow
						</Button>
					</Box>
				</Box>
			</Box>
		</div>
	);
}