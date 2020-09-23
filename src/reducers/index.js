import { combineReducers } from 'redux'
import AuthUserReducer from './AuthUserReducer'
import ChatAppReducer from './ChatAppReducer';
import ContactReducer from './ContactReducer'
import AppSettingsReducer from './AppSettingsReducer'
import EcommerceReducer from './EcommerceReducer'
import EmailAppReducer from './EmailAppReducer'
import UserSettingsReducer from './UserSettingsReducer'
import MenuListReducer from './MenuListReducer'



const reducers = combineReducers({
	authUser: AuthUserReducer,
	chatAppReducer: ChatAppReducer,
	settings: AppSettingsReducer,
	ecommerce: EcommerceReducer,
   emailApp: EmailAppReducer,
	ContactReducer: ContactReducer,
	UserSettingsReducer:UserSettingsReducer,	
	menuListReducer:MenuListReducer
});

export default reducers;