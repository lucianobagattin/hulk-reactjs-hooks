/**
 * Redux App Settings Actions
 */
import {
   COLLAPSED_SIDEBAR,
   MINI_SIDEBAR,
   DARK_MODE,
   RTL,
   HORIZONTAL_MENU,
   CHOOSE_THEME,
	SET_LANGUAGE,
	NOTIFICATION_SIDEBAR
} from './Types';

/**
 * Redux Action To Emit Collapse Sidebar
 */
export const collapsedSidebarAction = (isCollapsed) => ({
   type: COLLAPSED_SIDEBAR,
   isCollapsed
});

/**
 * Redux Action To Emit Mini Sidebar
 */
export const miniSidebarAction = (isMiniSidebarActive) => ({
   type: MINI_SIDEBAR,
   isMiniSidebarActive
});

/**
 * Redux Action To Emit Dark Mode
 */
export const darkModeAction = (isActive) => ({
   type: DARK_MODE,
   isActive
});

/**
 * Redux Action To Emit RTL Layout
 */
export const rtlAction = (isActive) => ({
   type: RTL,
   isActive
});

/**
 * Redux Action To Set Language
 */
export const setLanguage = (language) => ({
   type: SET_LANGUAGE,
   payload: language
});

/**
 * Redux Action To Emit Rtl Layout
 *  @param {*boolean} isRtlLayout
 */

/**
 * Redux Action To change Layout
 */
export const horizontalMenuAction = (isActive) => ({
   type: HORIZONTAL_MENU,
   isActive
});

/**
 * Redux Action To change Theme color
 */
export const chooseThemeAction = (theme) => ({
   type: CHOOSE_THEME,
   theme
});

/**
 * Redux Action To Emit Collapse Sidebar
 */
export const notificationSidebarAction = (isNotification) => ({
   type: NOTIFICATION_SIDEBAR,
   isNotification
});