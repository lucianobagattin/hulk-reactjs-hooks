/**
 * Shop Page
 */
import React, { Fragment ,useState } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Typography, TextField, Box, Icon, Hidden, Container, IconButton } from '@material-ui/core';
import ProductList from './Components/ProductList';
import Rating from './Components/Rating';
import PriceSlider from './Components/PriceSlider';
import clsx from 'clsx';
import products from 'assets/Data/Products';
import { PageTitleBarWithImage } from 'components/GlobalComponents';
import IntlMessages from 'util/IntlMessages';
// Redux actions
import { ADD_ITEM_TO_CART, ADD_ITEM_TO_WISHLIST } from "actions/Types";
const useStyles = makeStyles(theme => ({
	active: {
		color: '#000',
	},
	font50: {
		'& >div': {
			fontSize: 28,
			outline: 0,
			color: theme.palette.text.primary,
			[theme.breakpoints.down('xs')]: {
				fontSize: 16,
			},
		}
	},
	productItems: {
		marginLeft: '1.875rem',
		width: 'calc(100% - 240px - 1.875rem)',
		[theme.breakpoints.down('sm')]: {
			marginLeft: 0,
			width: '100%',
		},
	},
	shopFilter: {
		width: 240,
		[theme.breakpoints.down('sm')]: {
			position: 'absolute',
			backgroundColor: theme.palette.background.paper,
			zIndex: 2,
			top: 0,
			bottom: 0,
			left: 0,
			transform: 'translate(-100%)',
			opacity: 0,
			transition: 'all .25s ease',
		},
	},
	showFilter: {
		[theme.breakpoints.down('sm')]: {
			transform: 'translate(0)',
			opacity: 1,
		},
	}
}));

function Shop(props){
	const classes = useStyles();
	const [allProducts] = useState(products.data);
	const [initialNo,setInitialNo] = useState(6);
	const [listView,setListView] = useState(false);
	const [gridView,setGridView] = useState(true);
	const [categoriesData] = useState([
			'Clothing',
			'Household',
			'Accessories',
			'Grooming'
		]);
	const [filter] = useState(false);
	const ecommerce = useSelector(state => state.ecommerce);
	const dispatch = useDispatch();

	const changeView = (click) => {
		if (click === "grid") {
			setListView(false);
			setGridView(true);
		} else {
			setListView(true);
			setGridView(false);
		}
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

	const onCartPage = (e) => {
		props.history.push('/app/ecommerce/cart');
	}

	const loadMore = () => {
		setInitialNo(initialNo + 3);
	}

	const productDetail = (product) => {
		const { history } = props;
		history.push(`/app/ecommerce/product-detail/${product.productID}`);
	}

	const filterOpen = () => {
		setInitialNo(filter + 3);
	}

	return (
		<div className="shop-wrapper white-btn-color">
			<PageTitleBarWithImage
				title={<IntlMessages id="component.products" />}
				desc="Magna sit amet purus gravida magna sit amet purus gravida magna sit amet purus gravida"
				image="title-ecom.png"
				buttonText={<IntlMessages id="component.signup" />}
				buttonLink="/signup"
			/>
			<div>
				<div className="shop-list-wrapper page-space">
					<Container maxWidth="lg">
						<Box px={{ xs: '12px', lg: 0 }}>
							<div className="search-bar">
								<TextField id="standard-basic" className={classes.font50} placeholder="Search from our 2500+ online products" />
							</div>
						</Box>
					</Container>
					<div className="shop-listing">
						<Container maxWidth="lg">
							<Box className="shop-list" px={{ xs: '12px', lg: 0 }}>
								<Box display="flex" className="change-layout" justifyContent={{ xs: 'space-between', md: 'flex-end' }} mb={4}>
									<Hidden mdUp>
										<IconButton
											size="small"
											onClick={(e) => filterOpen()}
										>
											<Box className="material-icons" px="6px">menu</Box>
										</IconButton>
									</Hidden>
									<Box>
										<IconButton
											size="small"
											onClick={(e) => changeView('grid')}
											className={clsx({
												[classes.active]: gridView,
											})}
										>
											<Box className="material-icons" pt="3px" fontSize={{ md: '35px' }}>view_module</Box>
										</IconButton>
										<IconButton
											size="small"
											onClick={(e) => changeView('list')}
											className={clsx({
												[classes.active]: listView,
											})}
										>
											<Box className="material-icons" fontSize={{ md: '35px' }}>view_list</Box>
										</IconButton>
									</Box>
								</Box>
								<Box display='flex' position="relative" >
									<div className={clsx(classes.shopFilter, { [`filter-open ${classes.showFilter}`]: filter },'shop-sidebar')}>
										<Box>
											<div className="bg-white filter-widget categories-widget">
												<Box px={2}>
													<Typography variant="h6">
														<IntlMessages id="component.categories" />
													</Typography>
												</Box>
												<ProductList data={categoriesData} />
											</div>
											<div className="bg-white filter-widget rating-widget">
												<Box px={2} className="title-content" mb={2}>
													<Typography variant="h6">
														<IntlMessages id="component.rating" />
													</Typography>
												</Box>
												<Box px={2}>
													<Rating />
												</Box>
											</div>
											<div className="bg-white filter-widget price-fil-widget">
												<Box px={2} className="title-content" mb={2}>
													<Typography variant="h6">
														<IntlMessages id="component.priceFilter" />
													</Typography>
												</Box>
												<PriceSlider />
											</div>
										</Box>
									</div>
									<div className={`shop-items ${classes.productItems}`}>
										{gridView ?
											<Grid container spacing={2}>
												{allProducts && allProducts.map((product, index) => (
													<Fragment key={index}>
														{index < initialNo &&
															<Grid item xs={12} sm={6} md={4} lg={4} key={index}>
																<Box className="product-list bg-white">
																	<Box className="relative" lineHeight={0.9} >
																		<img className="img-fluid" alt="img" src={require(`assets/Images/${product.image}`)} />
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
																			<Box mb={1} >
																				<Typography onClick={() => productDetail(product)} variant="h6" className="product-title text-dark d-block text-over">{product.name}</Typography>
																			</Box>
																			<p className="text-over mt-0">{product.desc}</p>
																		</Box>
																		<Box className="product-action" display="flex" p={2} alignItems="center" borderColor="grey.200" borderTop={1} justifyContent="space-between">
																			<Box>
																				{!isItemExistInCart(product.productID) ? (
																					<Button size="small" variant="outlined" onClick={(e) => onPressAddToCart(product, e)} color="primary" className="primary-bg-btn">
																						Add To Cart
																					</Button>
																				) : (
																						<Button size="small" variant="outlined" className="primary-bg-btn" onClick={(e) => onCartPage()} color="primary">
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
												<Box display="flex" justifyContent="center" width="100%" alignSelf="center" mb={6} mt={4}>
													{initialNo === allProducts.length || initialNo > allProducts.length ?
														<Button variant="outlined" className="primary-bg-btn" color="primary" disabled>
															<IntlMessages id="component.loadmore" />
														</Button>
														:
														<Button variant="outlined" className="primary-bg-btn" color="primary" onClick={() => loadMore()}>
															<IntlMessages id="component.loadmore" />
														</Button>
													}
												</Box>
											</Grid>
											:
											<Grid container spacing={2} className="product-list-layout">
												{allProducts && allProducts.map((product, index) => (
													<Fragment key={index}>
														{index < initialNo &&
															<Box m={1} className="product-list bg-white" alignItems="center" mb={2}>
																<Grid container alignItems="center">
																	<Grid item xs={12} sm={12} md={4} lg={3}>
																		<div className="img-holder">
																			<img className="img-fluid" alt="img" width="300" src={require(`assets/Images/${product.image}`)}></img>
																		</div>
																	</Grid>
																	<Grid item xs={12} sm={12} md={4} lg={6}>
																		<Box p={2}>
																			<Box mb={1} >
																				<Typography variant="h6" onClick={() => productDetail(product)} className="product-title text-dark d-block text-over">{product.name}</Typography>
																			</Box>
																			<p className="mt-0 mb-0">{product.desc}</p>
																		</Box>
																	</Grid>
																	<Grid item xs={12} sm={12} md={4} lg={3}>
																		<Box display="flex" flexDirection="column" className="shop-list-btm" p={2} alignItems="flex-end" justifyContent="flex-end">
																			<Box className="list-wish">
																				{!isItemExistInWishlist(product.productID) ?
																					<IconButton onClick={(e) => onPressAddToWishlist(product, e)}>
																						<Icon style={{ color: '#29303b' }}>favorite_border</Icon>
																					</IconButton>
																					:
																					<IconButton>
																						<Icon style={{ color: '#29303b' }}>favorite</Icon>
																					</IconButton>
																				}
																			</Box>
																			<Box fontWeight="fontWeightMedium">
																				<Box mb={{ xs: 0, md: 2 }} className="product-pric">${product.price}</Box>
																			</Box>
																			<Box>
																				{!isItemExistInCart(product.productID) ? (
																					<Button variant="contained" onClick={(e) => onPressAddToCart(product, e)} color="primary">
																						Add To Cart
																					</Button>
																				) : (
																						<Button variant="contained" onClick={(e) => onCartPage()} color="primary">
																							View Cart
																						</Button>
																					)
																				}
																			</Box>
																		</Box>
																	</Grid>
																</Grid>
															</Box>
														}
													</Fragment>
												))}
												<Box display="flex" justifyContent="center" width="100%" alignSelf="center" mb={6} mt={4}>
													{initialNo === allProducts.length || initialNo > allProducts.length ?
														<Button className={classes.button} disabled variant="contained">
															<IntlMessages id="component.loadmore" />
														</Button>
														:
														<Button className={classes.button} variant="contained" color="primary" onClick={() => loadMore()}>
															<IntlMessages id="component.loadmore" />
														</Button>
													}
												</Box>
											</Grid>
										}
									</div>
								</Box>
							</Box>
						</Container>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Shop;