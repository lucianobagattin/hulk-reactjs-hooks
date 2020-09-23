/**
 * Ecommerce reducer
 */

import {
	ADD_ITEM_TO_CART,
	DELETE_ITEM_FROM_CART,
   DELETE_ITEM_FROM_WISHLIST,
	ADD_ITEM_TO_WISHLIST,
	ON_QUANTITY_CHANGE
} from 'actions/Types'

import { NotificationManager } from 'react-notifications';

import update from 'immutability-helper';

const INIT_STATE = {
	cart: [
		{
			productID: 1,
			name: 'Speaker',
			image: "gadgets/g-5-a.jpg",
			description: 'Rechargeable Battery',
			brand: 'JBL',
			price: 50,
			productQuantity: 1,
			discount: "",
			totalPrice: 50
		},
		{
			productID: 2,
			name: 'Headphone',
			image: "gadgets/g-1-a.jpg",
			description: 'Clear Sound',
			brand: 'JBL',
			price: 45,
			productQuantity: 1,
			discount: "15% off",
			totalPrice: 45
		}
	],
	wishlist: [
		{
			productID: 1,
			name: 'Speaker',
			image: "product1.jpg",
			description: 'Rechargeable Battery',
			brand: 'JBL',
			price: 50,
			productQuantity: 1,
			discount: "",
			totalPrice: 50
		}
	],
	newCartItem: {
		productID: "",
		// name: "",
		image: "",
		description: "",
		brand: "",
		price: null,
		productQuantity: null,
		totalPrice: null,
		discount: "",
	},
}

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		case DELETE_ITEM_FROM_CART:
			let removeItem = action.payload;
         let cart = state.cart.filter((item) => item.productID !== removeItem.productID)
         NotificationManager.success('Product Deleted From Cart');
			return {
				...state,
				cart
			}
		case DELETE_ITEM_FROM_WISHLIST:
			let deleteItem = action.payload;
			let wishlist = state.wishlist.filter((item) => item.productID !== deleteItem.productID)
			return {
				...state,
				wishlist
			}
		case ON_QUANTITY_CHANGE:
			let newData = action.payload.item;
			let newCartData = [];
			for (const item of state.cart) {
				if (item.productID === newData.productID) {
					item.productQuantity = action.payload.quantity;
					item.totalPrice = item.price * item.productQuantity
				}
				newCartData.push(item)
			}
			return {
				...state,
				cart: newCartData,
				totalPrice: state.totalPrice
			}

      case ADD_ITEM_TO_CART:
         let newCartItem = {
            productID: action.payload.productID,
            name: action.payload.name,
            image: action.payload.image,
            description: action.payload.description,
            brand: action.payload.brand,
            price: action.payload.price,
            productQuantity: 1,
            totalPrice: action.payload.price
         };
         NotificationManager.success('Product Added In Cart');
         return update(state, {
            cart: {
               $push: [newCartItem]
            }
         })
      case ADD_ITEM_TO_WISHLIST:
         let newWishItem = {
            productID: action.payload.productID,
            name: action.payload.name,
            image: action.payload.image,
            description: action.payload.description,
            brand: action.payload.brand,
            price: action.payload.price,
            productQuantity: 1,
            totalPrice: action.payload.price
         };
         NotificationManager.success('Product Added In Wishlist');
         return update(state, {
            wishlist: {
               $push: [newWishItem]
            }
         })   
		default:
			return { ...state }
	}
}