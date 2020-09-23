/**
 * Code splitting Components
 * AsyncComponents
*/
import React from 'react';
import Loadable from 'react-loadable';
import { HulkPageLoader } from '../GlobalComponents';

// Dasboard Urls
const AsyncFullPageUrlsComponent = Loadable({
   loader: () => import("routes/FullPageUrls"),
	loading: () => <HulkPageLoader />,
	delay: 3000,
});
//  Dashboard 1
const AsyncDashboard1Component = Loadable({
	loader: () => import("routes/Dashboard/Dashboard1"),
	loading: () => <HulkPageLoader />,
	delay: 3000,
});

// Dashboard 2
const AsyncDashboard2Component = Loadable({
	loader: () => import("routes/Dashboard/Dashboard2"),
	loading: () => <HulkPageLoader />,
	delay: 3000,
});
// Dashboard 3
const AsyncDashboard3Component = Loadable({
	loader: () => import("routes/Dashboard/Dashboard3"),
	loading: () => <HulkPageLoader />,
	delay: 3000,
});

// Shop Page
const AsyncShopComponent = Loadable({
	loader: () => import("routes/Ecommerce/Shop"),
	loading: () => <HulkPageLoader />,
	delay: 3000,
});
// Product Detail Page
const AsyncProductDetailComponent = Loadable({
	loader: () => import("routes/Ecommerce/ProductDetail"),
	loading: () => <HulkPageLoader />,
	delay: 3000,
});
// Cart Page
const AsyncCartComponent = Loadable({
	loader: () => import("routes/Ecommerce/Cart"),
	loading: () => <HulkPageLoader />,
	delay: 3000,
});
// Checkout Page
const AsyncCheckoutComponent = Loadable({
	loader: () => import("routes/Ecommerce/Checkout"),
	loading: () => <HulkPageLoader />,
	delay: 3000,
});
// Invoice Page
const AsyncInvoiceComponent = Loadable({
   loader: () => import("routes/Ecommerce/Invoice"),
   loading: () => <HulkPageLoader />,
	delay: 3000,
});
// SignIn Page
const AsyncSignInComponent = Loadable({
	loader: () => import("routes/Ecommerce/SignIn"),
	loading: () => <HulkPageLoader />,
	delay: 3000,
});
// Email Page
const AsyncMailComponent = Loadable({
	loader: () => import("routes/Email"),
	loading: () => <HulkPageLoader />,
	delay: 3000,
});

// Chat Page
const AsyncChatComponent = Loadable({
   loader: () => import("routes/Chat"),
   loading: () => <HulkPageLoader />,
	delay: 3000,
});
// Blog Page
const AsyncBlogGridComponent = Loadable({
   loader: () => import("routes/Blog/BlogGrid"),
   loading: () => <HulkPageLoader />,
	delay: 3000,
});
// Tables Page
const AsyncAgGridComponent = Loadable({
   loader: () => import("routes/Tables/AgGrid"),
   loading: () => <HulkPageLoader />,
	delay: 3000,
});
// Basic Table
const AsyncBasicTableComponent = Loadable({
   loader: () => import("routes/Tables/BasicTable"),
   loading:() => <HulkPageLoader />,
	delay: 3000,
});
//
// Search Table
const AsyncSearchTableComponent = Loadable({
   loader:() => import("routes/Tables/SearchTable"),
   loading:() => <HulkPageLoader />,
	delay: 3000,
});
// Custom Table
const AsyncCustomTableComponent = Loadable({
   loader:() => import("routes/Tables/CustomTable"),
   loading:() => <HulkPageLoader />,
	delay: 3000,
});
// Blog Detail Page
const AsyncBlogDetailComponent = Loadable({
   loader: () => import("routes/Blog/BlogDetail"),
   loading: () => <HulkPageLoader />,
	delay: 3000,
});
// Standard Profile Page
const AsyncStandardComponent = Loadable({
   loader: () => import("routes/Pages/Profile/Standard"),
   loading: () => <HulkPageLoader />,
	delay: 3000,
});
// Modern Feeds
const AsyncModernComponent = Loadable({
   loader: () => import("routes/Pages/Profile/Modern"),
   loading: () => <HulkPageLoader />,
	delay: 3000,
});
// Contact Page
const AsyncContactGridComponent = Loadable({
   loader:  () => import("routes/Pages/ContactGrid"),
   loading: () => <HulkPageLoader />,
	delay: 3000,
});
// Faq Page
const AsyncFaqComponent = Loadable({
   loader: () => import("routes/Pages/Faq"),
   loading: () => <HulkPageLoader />,
	delay: 3000,
});
// Pricing V1 Page
const AsyncPricingV1Component = Loadable({
   loader: () => import("routes/Pages/Pricing/Style1"),
   loading: () => <HulkPageLoader />,
	delay: 3000,
});
// pricing V2 Page
const AsyncPricingV2Component = Loadable({
   loader: () => import("routes/Pages/Pricing/Style2"),
   loading: () => <HulkPageLoader />,
	delay: 3000,
});
// Pricing Upgrade
const AsyncPricingUpgradeComponent = Loadable({
   loader: () => import("routes/Pages/Pricing/PricingUpgrade"),
   loading: () => <HulkPageLoader />,
	delay: 3000,
});
// Vertical Timeline
const AsyncVerticalTimelineComponent = Loadable({
   loader: () => import("routes/Pages/Timeline/VerticalTimeline"),
   loading: () => <HulkPageLoader />,
	delay: 3000,
});
// Horizontal Timeline
const AsyncHorizontalTimelineComponent = Loadable({
   loader: () => import("routes/Pages/Timeline/HorizontalTimeline"),
   loading: () => <HulkPageLoader />,
	delay: 3000,
});
// Horizontal Stepper
const AsyncHorizontalStepperComponent = Loadable({
   loader: () => import("routes/Pages/Stepper/HorizontalStepper"),
   loading: () => <HulkPageLoader />,
	delay: 3000,
});
// Vertical Stepper
const AsyncVerticalStepperComponent = Loadable({
   loader: () => import("routes/Pages/Pricing/PricingUpgrade"),
   loading: () => <HulkPageLoader />,
	delay: 3000,
});
// Ui Components
const AsyncAppbarComponent = Loadable({
   loader: () => import("routes/UiComponents/AppBar"),
   loading: () => <HulkPageLoader />,
	delay: 3000,
});
const AsyncAvatarsComponent = Loadable({
   loader: () => import("routes/UiComponents/Avatars"),
   loading: () => <HulkPageLoader />,
	delay: 3000,
});
const AsyncButtonsComponent = Loadable({
   loader: () => import("routes/UiComponents/Buttons"),
   loading: () => <HulkPageLoader />,
	delay: 3000,
});
const AsyncBottomNavigationsComponent = Loadable({
   loader: () => import("routes/UiComponents/BottomNavigations"),
   loading: () => <HulkPageLoader />,
	delay: 3000,
});
const AsyncChipComponent = Loadable({
   loader: () => import("routes/UiComponents/Chip"),
   loading: () => <HulkPageLoader />,
	delay: 3000,
});
const AsyncListComponent = Loadable({
   loader: () => import("routes/UiComponents/List"),
   loading: () => <HulkPageLoader />,
	delay: 3000,
});
const AsyncModalsComponent = Loadable({
   loader: () => import("routes/UiComponents/Modals"),
   loading: () => <HulkPageLoader />,
	delay: 3000,
});
// Calendar Page
const AsyncCalendarComponent = Loadable({
   loader: () => import("routes/BigCalendar"),
   loading: () => <HulkPageLoader />,
	delay: 3000,
});
// User Settings
const AsyncUserSettingsComponent = Loadable({
	loader: () => import("routes/UserSettings"),
	loading: () => <HulkPageLoader />,
	delay: 3000,
});
// Vedio Player
const AsyncVideoPlayerComponent = Loadable({
   loader: () => import("routes/VideoPlayer"),
   loading:() => <HulkPageLoader />,
	delay: 3000,
});
// Error Page 404
const AsyncErrorPage404Component = Loadable({
	loader: () => import("routes/Error/404"),
	loading: () => <HulkPageLoader />,
	delay: 3000,
});
// Error Page 500
const AsyncErrorPage500Component = Loadable({
	loader: () => import("routes/Error/500"),
	loading: () => <HulkPageLoader />,
	delay: 3000,
});

export {
   AsyncFullPageUrlsComponent,
	AsyncDashboard1Component,
	AsyncDashboard2Component,
	AsyncDashboard3Component,
	AsyncShopComponent,
	AsyncProductDetailComponent,
	AsyncCartComponent,
	AsyncCheckoutComponent,
	AsyncSignInComponent,
   AsyncMailComponent,
   AsyncContactGridComponent,
	AsyncStandardComponent,
	AsyncModernComponent,
   AsyncChatComponent,
	AsyncBlogGridComponent,
	AsyncBlogDetailComponent,
   AsyncFaqComponent,
   AsyncPricingV1Component,
   AsyncPricingV2Component,
   AsyncAppbarComponent,
   AsyncAvatarsComponent,
   AsyncButtonsComponent,
   AsyncBottomNavigationsComponent,
   AsyncSearchTableComponent,
   AsyncCustomTableComponent,
   AsyncChipComponent,
   AsyncListComponent,
   AsyncModalsComponent,
   AsyncAgGridComponent,
   AsyncBasicTableComponent,
	AsyncPricingUpgradeComponent,
	AsyncVerticalTimelineComponent,
   AsyncHorizontalTimelineComponent,
   AsyncHorizontalStepperComponent,
   AsyncVerticalStepperComponent,
	AsyncInvoiceComponent,
	AsyncCalendarComponent,
	AsyncUserSettingsComponent,
	AsyncErrorPage404Component,
	AsyncErrorPage500Component,
   AsyncVideoPlayerComponent
};