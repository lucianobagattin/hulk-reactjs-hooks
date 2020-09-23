/**
 * User Block Section
*/
import React, { Fragment ,useState} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch  } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, List, ListItem, Button, ListSubheader, Typography, Popover, Tooltip, Avatar } from '@material-ui/core';

// redux action
import { hulkLogoutUserFirebase } from 'actions';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		minWidth: 300,
		padding: 0,
		'& >a': {
			color: theme.palette.text.primary,
			'&:hover': {
				backgroundColor: 'rgba(0,0,0,0.05)'
			}
		},
		'& .top-dropdown-menu--item': {
			padding: '20px 12px',
			borderTop: `1px solid ${theme.palette.divider}`,
		}
	},
	large: {
		width: theme.spacing(10),
		height: theme.spacing(10)
	},
	avatar:{
		'@media (max-width:1560px)': {
			width: 35,
			height: 35,
		}
	}
}));

function HeaderUserBlock(){
	const classes = useStyles();
	const [anchorEl,setAnchorEl] = useState(null);
	const dispatch = useDispatch();
	//Define function for open dropdown
	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};


	//Define function for close dropdown
	const handleClose = () => {
		setAnchorEl(null);
	};
	/*
	 * Logout User
	 */
	const logoutUser = () => {
		dispatch(hulkLogoutUserFirebase());
		setAnchorEl(null);
		// this.props.hulkLogoutUserFirebase();
	}


	const open = Boolean(anchorEl);
	return (
		<div>
			<Tooltip title="User Profile" placement="bottom">
				<IconButton aria-describedby={open ? 'simple-popper' : null} variant="contained" color="primary"
					style={{ padding: '6px' }}
					onClick={handleClick}>
					<Avatar alt="user-thumb" className={classes.avatar} src={require('assets/Images/avatars/user-4.jpg')} />
				</IconButton>
			</Tooltip>
			<Popover
				id="simple-popper"
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
			>
				<Fragment>
					<List className={`${classes.root} top-dropdown-menu`}
						component="nav"
						aria-labelledby="nested-list-subheader"
						subheader={
							<ListSubheader component="div" id="nested-list-subheader">
								<div className="dropdown-header user-info  text-center">
									<Avatar alt="user-thumb" className={classes.large} src={require('assets/Images/avatars/user-4.jpg')} />
									<Typography variant="body2">Abigail Doe</Typography>
									<Typography variant="subtitle2">Associate Manager</Typography>
									<Button className="btn primary-bg-btn" component={Link} to="/app/user-settings" variant="outlined" color="primary">
										Manage your account
									</Button>
								</div>
							</ListSubheader>
						}
					>
						<ListItem component="div" className="top-dropdown-menu--item d-block text-center">
							<Button variant="contained" color="primary" onClick={logoutUser}>
								Sign out
     						</Button>
						</ListItem>
					</List>
				</Fragment>
			</Popover>
		</div>
	);
}

export default HeaderUserBlock;