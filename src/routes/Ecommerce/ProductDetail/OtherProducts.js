/**
 * product Detail Page
 */
import React, { Fragment } from 'react';
import { Button, Grid, Typography, Box, IconButton } from '@material-ui/core';
import { useSelector, useDispatch  } from 'react-redux';
import { ADD_ITEM_TO_CART, ADD_ITEM_TO_WISHLIST } from "actions/Types";

function OtherProducts(props){
	const ecommerce = useSelector(state => state.ecommerce);
	const dispatch = useDispatch();

	const isItemExistInCart = (id) => {
		const { cart } = ecommerce;
		let existence = false
		for (const item of cart) {
			if (item.productID === id) {
				existence = true
			}
		}
		return existence;
	}
	//Add Item to cart
	const onPressAddToCart = (cartItem, e) => {
		setTimeout(() => {
			dispatch({ type: ADD_ITEM_TO_CART, payload: cartItem })
		}, 1000)
		e.preventDefault();
	}
	const onPressAddToWishlist = (wishItem, e) => {
		setTimeout(() => {
			dispatch({ type: ADD_ITEM_TO_WISHLIST, payload: wishItem })
		}, 1000)
		e.preventDefault();
	}
	const isItemExistInWishlist = (id) => {
		const { wishlist } = ecommerce;
		let existence = false
		for (const item of wishlist) {
			if (item.productID === id) {
				existence = true
			}
		}
		return existence;
	}

	const { relatedProducts } = props;
	return (
		<div className="product-detail-page">
			<div className="product-related-wrapper section-space">
				<div className="section-title-wrapper">
					<Typography variant="h5" className="section-title">
						Other Products You May Like
               </Typography>
				</div>
				<Grid container spacing={3} direction="row">
					{relatedProducts.map((product, index) => (
						<Fragment key={index}>
							{index < 4 &&
								<Grid item xs={12} sm={6} md={3} key={index}>
									<Box className="product-list bg-white">
										<Box className="relative" lineHeight={0.9}>
											<img className="img-fluid" alt="product-thumb" src={require(`assets/Images/${product.image}`)} />
											<Fragment>
												{!isItemExistInWishlist(product.productID) ?
													<IconButton className="product-wishlist" onClick={(e) => onPressAddToWishlist(product, e)}>
														<Box component="span" className="material-icons" color="text.primary" >favorite_border</Box>
													</IconButton>
													:
													<IconButton className="product-wishlist">
														<Box component="span" className="material-icons" color="text.primary" >favorite</Box>
													</IconButton>
												}
											</Fragment>
										</Box>
										<Box>
											<Box p={2} pb={0}>
												<Box>
													<Typography variant="h6" className="product-title text-dark d-block text-over">{product.name}</Typography>
												</Box>
												<p className="text-over mt-0">Lorem Ipsum is a dummy text</p>
											</Box>
											<Box className="product-action" display="flex" p={2} alignItems="center" borderColor="grey.200" borderTop={1} justifyContent="space-between">
												<Box>
													{!isItemExistInCart(product.productID) ? (
														<Button variant="outlined" className="primary-bg-btn" color="primary" onClick={(e) => onPressAddToCart(product, e)} >
															Add To Cart
                                                 </Button>
													) : (
															<Button variant="outlined" className="primary-bg-btn" color="primary">
																View Cart
                                             </Button>
														)
													}
												</Box>
												<Box fontWeight="fontWeightMedium">
													<p className="product-price m-0">${product.price}</p>
												</Box>
											</Box>
										</Box>
									</Box>
								</Grid>
							}
						</Fragment>
					))}
				</Grid>
			</div>
		</div>
	)
}

export default OtherProducts;