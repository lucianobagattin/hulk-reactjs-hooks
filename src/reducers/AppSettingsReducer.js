/**
 * App Settings
 */

//action types
import {
  COLLAPSED_SIDEBAR,
  MINI_SIDEBAR,
  DARK_MODE,
  HORIZONTAL_MENU,
  SET_LANGUAGE,
  CHOOSE_THEME,
  RTL,
  NOTIFICATION_SIDEBAR
} from 'actions/Types';

//app config
import AppConfig from "constants/AppConfig";

const INITIAL_STATE = {   
   navCollapsed: AppConfig.navCollapsed,
   isDarkModeActive: AppConfig.isDarkModeActive,
   isHorizontalMenuActive: AppConfig.isHorizontalMenuActive,
   isRtlActive: AppConfig.isRtlActive,
   isMiniSidebarActive: AppConfig.isMiniSidebarActive,
   selectedThemeColor: AppConfig.selectedThemeColor,
   locale: AppConfig.locale,
   languages: [
      {
         languageId: 'english',
         locale: 'en',
         name: 'English',
         icon: 'usa.png',
      },
      {
         languageId: 'french',
         locale: 'fr',
         name: 'French',
         icon: 'france.png',
      },
      {
         languageId: 'saudi-arabia',
         locale: 'ar',
         name: 'Arabic',
         icon: 'saudi-arabia.png',
      },
      {
         languageId: 'spanish',
         locale: 'es',
         name: 'Spanish',
         icon: 'spain.png',
      },
      {
         languageId: 'korean',
         locale: 'ko',
         name: 'Korean',
         icon: 'korean.png',
      },
      {
         languageId: 'japanese',
         locale: 'ja',
         name: 'Japanese',
         icon: 'japanese.png',
      },
      {
         languageId: 'chinese',
         locale: 'zh',
         name: 'Chinese',
         icon: 'chinese.png',
      }
	],
	notificationSidebar: false
}

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case COLLAPSED_SIDEBAR:
        return { ...state, navCollapsed: action.isCollapsed };
      
      case MINI_SIDEBAR:         
        return { ...state, isMiniSidebarActive: action.isMiniSidebarActive };
			
      case DARK_MODE:			
			  return { ...state, isDarkModeActive: action.isActive };
      
		  case RTL:			
        return { ...state, isRtlActive: action.isActive }; 
      
      case HORIZONTAL_MENU:
        return { ...state, isHorizontalMenuActive: action.isActive };
        
      case SET_LANGUAGE:
         return { ...state, locale: action.payload };

      case CHOOSE_THEME:
			return {
				...state, 
				selectedThemeColor: action.theme
			}; 
		case NOTIFICATION_SIDEBAR:
			return { ...state, notificationSidebar: action.isNotification };

      default:
        return { ...state };
   }
}