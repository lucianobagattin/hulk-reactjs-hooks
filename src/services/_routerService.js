/**
 * Router service file
*/
import Ecommerce from 'routes/Ecommerce'
import Dashboard from 'routes/Dashboard'
import Blog from 'routes/Blog'
import Pages from 'routes/Pages'
import UiComponents from 'routes/UiComponents'
import Tables from 'routes/Tables'
import FullPageMenu from 'routes/FullPageMenu'

// Async component
import {
   AsyncMailComponent,
	AsyncChatComponent,
	AsyncInvoiceComponent,
	AsyncCalendarComponent,
	AsyncUserSettingsComponent,
   AsyncVideoPlayerComponent
} from 'components/AsyncComponent/AsyncComponent';

export default [
   {
      path: 'fullpagemenu',
      component: FullPageMenu
   },
	{
		path: 'dashboard',
		component: Dashboard
	},
	{
		path: 'ecommerce',
		component: Ecommerce
	},
   {
      path: 'chat',
      component: AsyncChatComponent
   },
   {
      path: 'email',
      component: AsyncMailComponent
   },
   {
      path: 'blog',
      component: Blog
   },
   {
      path: 'pages',
      component: Pages
   },
   {
      path: 'uicomponents',
      component: UiComponents
   },
   {
      path: 'invoice',
      component: AsyncInvoiceComponent
	},
	{
		path: 'calendar',
      component: AsyncCalendarComponent		
	},
	{
		path: 'user-settings',
      component:AsyncUserSettingsComponent
	},
	{
		path: 'tables',
      component: Tables		
	},
   {
      path: 'video-player',
      component:AsyncVideoPlayerComponent
   },
]