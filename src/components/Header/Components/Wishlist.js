import React, { Fragment,useRef,useState } from 'react'
import { withRouter } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/styles';
import { ListItemSecondaryAction, Badge, ListItemText, ListItemAvatar, Button, Divider, IconButton, Box, List, ListItem, ListSubheader, Popover, Tooltip, Typography } from '@material-ui/core';
import { Scrollbars } from 'react-custom-scrollbars';
import { ConfirmationDialog } from 'components/GlobalComponents';

import { deleteItemFromWishlist } from 'actions'

const useStyles = makeStyles(theme => ({
	badgeItem: {
		[theme.breakpoints.down('xs')]: {
			'& .MuiBadge-badge': {
				height: 15,
				padding: '0 4px',
				fontSize: '0.8rem',
				minWidth: 15,
			},
		},
	},
	root: {
		width: '100%',
		minWidth: 270,
		padding: 0,

		'& >li': {
			borderBottom: `1px solid ${theme.palette.divider}`,
		}
	},
	emptyBlock: {
		width: '100%',
		minWidth: 270,
	},
	content: {
		paddingLeft: 5
	},
	avatar: {
		lineHeight: 0.9,
	}
}));

function Wishlist() {
	confirmationDialog = useRef();
	const [anchorEl, setAnchorEl] = useState(null);
	const [item, setItem] = useState(null);
	const ecommerce = useSelector(state => state.ecommerce);
	const dispatch = useDispatch();
	const wishlist = ecommerce.wishlist;

	//Define function for open dropdown
	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};


	//Define function for close dropdown
	const handleClose = () => {
		setAnchorEl(null);
	};

	//Function to delete product from cart
	const onDeleteWishlistItem = (item) => {
		setItem(item);
		confirmationDialog.current.openDialog();
	}

	//Function for delete cart product
	deleteWishlistItem(popupResponse) {
		if (popupResponse) {
			dispatch(deleteItemFromWishlist(item));
			setItem(null);
		}
		setAnchorEl(null);
	}

	const open = Boolean(anchorEl);
	return (
		<div>
			<Tooltip title="Wishlist" placement="bottom">
				<IconButton aria-describedby={open ? 'simple-popper' : null} variant="contained" color="primary"
					style={{ padding: '6px' }}
					onClick={handleClick}>
					{wishlist && wishlist.length > 0 ?
						(
							<Badge className={classes.badgeItem} badgeContent={wishlist.length} color="secondary">
								<Box component="span" className={`material-icons-outlined ${props.iconColor}`}>favorite_border</Box>
							</Badge>
						)
						:
						(
							<Box component="span" className={`material-icons-outlined ${props.iconColor}`}>favorite_border</Box>
						)
					}
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
				<div>
					{(wishlist && wishlist.length > 0) ?
						<Fragment>
							<Scrollbars className="rct-scroll" autoHeight autoHeightMin={100} autoHeightMax={280} autoHide>
								<List className={classes.root}
									component="nav"
									aria-labelledby="nested-list-subheader"
									subheader={
										<ListSubheader component="div" id="nested-list-subheader">
											<div className="dropdown-header text-center">
												
												<Typography variant="body2">Wishlist Items</Typography>
											</div>
										</ListSubheader>
									}
								>
									{wishlist.map((item, index) => (
										<ListItem key={index}>
											<ListItemAvatar className={classes.avatar}>
												<img alt="product-thumb" width="50" height="60" src={require(`assets/Images/${item.image}`)} />
											</ListItemAvatar>
											<ListItemText className={classes.content}>
												<Typography variant="body2">{item.name}</Typography>
												<Typography variant="body1" color="textSecondary">$ {item.price}</Typography>
											</ListItemText>
											<ListItemSecondaryAction>
												<IconButton size="small" edge="end" aria-label="delete" onClick={() => onDeleteWishlistItem(item)}>
													<i className="material-icons-outlined">
														close
													</i>
												</IconButton>
											</ListItemSecondaryAction>
										</ListItem>
									))}
								</List>
							</Scrollbars>
							<Divider />
							<Box textAlign="center" px={2} py={1}>
								<Button variant="outlined" className="primary-bg-btn" color="primary">
									Add to cart
								</Button>
							</Box>
						</Fragment>
						:
						<Fragment>
							<Box className={classes.emptyBlock} p={3} textAlign="center">
								<Box component="span" color="primary.main" className="material-icons">favorite_border</Box>
								<Box color="text.primary">
									No Items Found
								</Box>
							</Box>
						</Fragment>
					}
				</div>
				<ConfirmationDialog
					ref={confirmationDialog}
					onConfirm={(res) => deleteWishlistItem(res)}
				/>
			</Popover>
		</div>
	);
}


export default Wishlist;