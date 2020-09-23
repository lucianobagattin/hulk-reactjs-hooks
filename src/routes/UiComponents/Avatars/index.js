/**
 * Avatars
 */
import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Avatar, Tooltip, Badge, Box, Grid, Container } from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import PageviewIcon from '@material-ui/icons/Pageview';
import AssignmentIcon from '@material-ui/icons/Assignment';
import IntlMessages from 'util/IntlMessages';

import { deepOrange, deepPurple } from '@material-ui/core/colors';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

//Global Component
import { SmallTitleBar, CustomCard } from 'components/GlobalComponents';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		'& > *': {
			margin: theme.spacing(1),
		},
	},
	orange: {
		color: theme.palette.getContrastText(deepOrange[500]),
		backgroundColor: deepOrange[500],
	},
	purple: {
		color: theme.palette.getContrastText(deepPurple[500]),
		backgroundColor: deepPurple[500],
	},
	small: {
		width: theme.spacing(3),
		height: theme.spacing(3),
	},
	large: {
		width: theme.spacing(7),
		height: theme.spacing(7),
	},
}));

const StyledBadge = withStyles(theme => ({
	badge: {
		backgroundColor: '#44b700',
		color: '#44b700',
		boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
		'&::after': {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			borderRadius: '50%',
			animation: '$ripple 1.2s infinite ease-in-out',
			border: '1px solid currentColor',
			content: '""',
		},
	},
	'@keyframes ripple': {
		'0%': {
			transform: 'scale(.8)',
			opacity: 1,
		},
		'100%': {
			transform: 'scale(2.4)',
			opacity: 0,
		},
	},
}))(Badge);

const SmallAvatar = withStyles(theme => ({
	root: {
		width: 22,
		height: 22,
		border: `2px solid ${theme.palette.background.paper}`,
	},
}))(Avatar);


export default function ImageAvatars() {
	const classes = useStyles();
	return (
		<div className="ui-app-wrapper">
			<SmallTitleBar
            title={<IntlMessages id="sidebar.avatars" />}
				center
			/>
			<div className="page-space">
				<Container>
					<Box px={{ xs:'12px', lg:0 }}>
						<Grid container spacing={3} direction="row">
							<Grid item xs={12} sm={6} md={6}>
                        <CustomCard title={<IntlMessages id="component.imagesAvatar" />} >
									<Box pt={2} className={classes.root}>
										<Avatar alt="Remy Sharp" src={require('assets/Images/avatars/user-1.jpg')} />
										<Avatar alt="Travis Howard" src={require('assets/Images/avatars/user-3.jpg')} />
										<Avatar alt="Cindy Baker" src={require('assets/Images/avatars/user-4.jpg')} />
									</Box>
								</CustomCard>
							</Grid>
							<Grid item xs={12} sm={6} md={6}>
                        <CustomCard title={<IntlMessages id="component.letterAvatar" />}>
									<Box pt={2} className={classes.root}>
										<Avatar>H</Avatar>
										<Avatar className={classes.orange}>N</Avatar>
										<Avatar className={classes.purple}>OP</Avatar>
									</Box>
								</CustomCard>
							</Grid>
							<Grid item xs={12} sm={6} md={6}>
                        <CustomCard title={<IntlMessages id="component.sizes" />}>
									<Box pt={2} className={classes.root}>
										<Avatar alt="Remy Sharp" src={require('assets/Images/avatars/user-1.jpg')} className={classes.small} />
										<Avatar alt="Remy Sharp" src={require('assets/Images/avatars/user-1.jpg')} />
										<Avatar alt="Remy Sharp" src={require('assets/Images/avatars/user-1.jpg')} className={classes.large} />
									</Box>
								</CustomCard>
							</Grid>
							<Grid item xs={12} sm={6} md={6}>
								<CustomCard title={<IntlMessages id="component.iconAvatar" />}>
									<Box py={2} className={classes.root}>
										<Avatar>
											<FolderIcon />
										</Avatar>
										<Avatar className={classes.orange}>
											<PageviewIcon />
										</Avatar>
										<Avatar className={classes.purple}>
											<AssignmentIcon />
										</Avatar>
									</Box>
								</CustomCard>
							</Grid>
							<Grid item xs={12} sm={6} md={6}>
                        <CustomCard title={<IntlMessages id="component.grouped" />}>
									<Box py={2}>
										<AvatarGroup>
											<Avatar alt="Remy Sharp" src={require('assets/Images/avatars/user-1.jpg')} />
											<Avatar alt="Travis Howard" src={require('assets/Images/avatars/user-2.jpg')} />
											<Avatar alt="Cindy Baker" src={require('assets/Images/avatars/user-3.jpg')} />
											<Tooltip title="Foo • Bar • Baz">
												<Avatar>+3</Avatar>
											</Tooltip>
										</AvatarGroup>
									</Box>
								</CustomCard>
							</Grid>
							<Grid item xs={12} sm={6} md={6}>
                        <CustomCard title={<IntlMessages id="component.withBadge" />}>
									<Box pt={2} className={classes.root}>
										<StyledBadge
											overlap="circle"
											anchorOrigin={{
												vertical: 'bottom',
												horizontal: 'right',
											}}
											variant="dot"
										>
											<Avatar alt="Remy Sharp" src={require('assets/Images/avatars/user-2.jpg')} />
										</StyledBadge>
										<Badge
											overlap="circle"
											anchorOrigin={{
												vertical: 'bottom',
												horizontal: 'right',
											}}
											badgeContent={<SmallAvatar alt="Remy Sharp" src={require('assets/Images/avatars/user-2.jpg')} />}
										>
											<Avatar alt="Travis Howard" src={require('assets/Images/avatars/user-3.jpg')} />
										</Badge>
									</Box>
								</CustomCard>
							</Grid>
						</Grid>
					</Box>
				</Container>
			</div>
		</div>
	);
}
