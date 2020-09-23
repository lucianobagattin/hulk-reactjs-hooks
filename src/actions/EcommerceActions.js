/**
 * Ecommerce Actions
 */
import {
	DELETE_ITEM_FROM_CART,
   ADD_ITEM_TO_CART,
   ON_QUANTITY_CHANGE,
   ADD_ITEM_TO_WISHLIST,
	DELETE_ITEM_FROM_WISHLIST
} from './Types';

//Remove product item
export const deleteItemFromCart = (item) => ({
   type: DELETE_ITEM_FROM_CART,
   payload: item
})

export const onAddItemToCart = (item) => ({
	type: ADD_ITEM_TO_CART,
   payload: item
})

export const onAddItemToWishlist = (item) => ({
   type: ADD_ITEM_TO_WISHLIST,
   payload: item
})

export const onChangeProductQuantity = (quantity, item) => ({
   type: ON_QUANTITY_CHANGE,
   payload: { quantity, item }
})

export const deleteItemFromWishlist = (item) => ({
	type:DELETE_ITEM_FROM_WISHLIST,
	payload: item
})