// Redux Menu List Actions

import {
   TOGGLE_MENU,
   TOGGLE_THIRD_MENU,
	TOGGLE_FOURTH_MENU,
	ONLOAD_TOGGLE_MENU
} from './Types'

export const toggleMenu = (index) =>({
   type: TOGGLE_MENU,
   index
})

export const toggleThirdMenu = (index) =>({
   type: TOGGLE_THIRD_MENU,
   index
})

export const toggleFourthMenu = (index) => ({
   type: TOGGLE_FOURTH_MENU,
   index
})

export const onLoadToggleMenu = (index) => ({
   type: ONLOAD_TOGGLE_MENU,
   index
})