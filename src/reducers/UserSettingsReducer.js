/**
 * Course Student Dashboard Reducer
 */

import {
	EMAIL_ON_SWITCH_CHANGE,
} from 'actions/Types'

const INIT_STATE = {
	announcements: true,
	newsletterWeekly: false,
	promotionalMails: false,
	formDiscussion: false,
}

export default (state = INIT_STATE, action) => {

	switch (action.type) {

		// update email settings
		case EMAIL_ON_SWITCH_CHANGE:
			return { ...state, [action.payload.key]: action.payload.value }

		// default option
		default:
			return { ...state };
	}
}
