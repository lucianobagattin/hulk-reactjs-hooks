/**
 * General Settings
 */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, TextField, Button, Avatar, Box } from '@material-ui/core';

// Component
import { ContentLayout } from 'components/Layouts';

const useStyles = makeStyles(theme => ({
	large: {
		width: theme.spacing(7),
		height: theme.spacing(7),
	},
	profileThumb:{
		'& >div':{
			'& >div':{
				'& >div:first-child':{
					alignSelf:'center'
				}
			}
		}
	},
	fileUpload:{
		'& input':{
			height:'auto',
		}
	}
}));

export default function GeneralSettings() {
	const classes = useStyles();
	
	return (
		<div className="hk-general-settings">
			<form>
				<Box mb={3} className={classes.profileThumb}> 
					<ContentLayout title="Your Profile Image">
						<Box width="100%" display="flex" alignItems="center">
							<Box pr={2} className="avatar-thumb">
								<Avatar src={require('assets/Images/avatars/user-4.jpg')} alt="Remy Sharp" className={classes.large} />
							</Box>
							<Box width="100%">
								<TextField
									fullWidth
									type="file"
									id="profileImage"
									name="profileImage"
									accept="image/*"
									className={classes.fileUpload}
								/>
							</Box>
						</Box>
					</ContentLayout>
				</Box>
				<Box mb={3}>
					<ContentLayout title="First Name">
						<FormControl fullWidth>
							<TextField
								id="firstName"
								name="firstName"
								placeholder="First Name"
								className=""
								type="input"
								value="Abigail"
							/>
						</FormControl>
					</ContentLayout>
				</Box>
				<Box mb={3}>
					<ContentLayout title="Last Name">
						<FormControl fullWidth>
							<TextField
								id="last-name"
								placeholder="Last Name"
								className=""
								type="input"
								value="Doe"
							/>
						</FormControl>
					</ContentLayout>
				</Box>
				<Box mb={3}>
					<ContentLayout title="Gender">
						<FormControl fullWidth>
							<TextField
								id="gender"
								placeholder="Gender"
								className=""
								type="input"
								value="Female"
							/>
						</FormControl>
					</ContentLayout>
				</Box>
				<Box mb={2}>
					<ContentLayout title="Email">
						<FormControl fullWidth>
							<TextField
								id="email"
								placeholder="Email"
								className=""
								type="input"
								value="support@theironnetwork.org"
							/>
						</FormControl>
					</ContentLayout>
				</Box>
				<Box mb={3}>
					<ContentLayout>
						<Button variant="outlined" color="primary" className="primary-bg-btn">Save</Button>
					</ContentLayout>
				</Box>
			</form>
		</div>
	)
}