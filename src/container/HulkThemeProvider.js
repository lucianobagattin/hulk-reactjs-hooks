/**
 * Rct Theme Provider
 */
import React, { Fragment } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { IntlProvider } from 'react-intl';

// App locale
import AppLocale from '../lang';

// themes
import darkTheme from '../themes/DarkTheme';
import lightTheme from '../themes/LightTheme';
import tealTheme from '../themes/TealTheme';
import violetTheme from '../themes/VioletTheme'



function HulkThemeProvider(props){
   const settings = useSelector(state => state.settings);
   const {children} = props;
   const { locale, isDarkModeActive, isRtlActive, selectedThemeColor } = settings;
   const currentAppLocale = AppLocale[locale.locale];
   let theme = '';
   if (isDarkModeActive) {
      theme = darkTheme
   } else {
      if(selectedThemeColor === 'light-theme'){
         theme = lightTheme
      } else if(selectedThemeColor === 'teal-theme'){
         theme = tealTheme
      } else if(selectedThemeColor === 'violet-theme'){
         theme = violetTheme
      } else {
         theme = lightTheme
      }
   }
   
   if (isRtlActive) {
      document.getElementsByTagName("BODY")[0].setAttribute("dir", "rtl")
      theme.direction = 'rtl'
   } else {
      document.getElementsByTagName("BODY")[0].setAttribute("dir", "ltr")
      // document.getElementsByTagName("BODY")[0].removeAttribute("dir");
      theme.direction = 'ltr'
   }
   return (
      <ThemeProvider theme={theme}>
         <IntlProvider
            locale={currentAppLocale.locale}
            messages={currentAppLocale.messages}
         >
            <Fragment>  
               {children}
            </Fragment>
         </IntlProvider>
      </ThemeProvider>
   );
}

export default HulkThemeProvider;