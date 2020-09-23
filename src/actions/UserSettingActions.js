/**
 * User Settings App Actions
 */

import {
	EMAIL_ON_SWITCH_CHANGE,
} from './Types'

/*
* Function to update on switch changes in email settings  
*/
export const emailSwitchChange = (key, value) => ({
	type: EMAIL_ON_SWITCH_CHANGE,
	payload: { key, value }
})
