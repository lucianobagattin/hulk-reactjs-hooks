/**
 * App Language Provider
 * Add more locales here
 */
import { addLocaleData } from 'react-intl';

import enLang from './entries/en-US';
import frLang from './entries/fr_FR';
import arLang from './entries/ar_SA';
import esLang from './entries/es_ES';
import zhLang from './entries/zh-Hans-CN';
import jaLang from './entries/ja_JA';
import koLang from './entries/ko_KO';

const AppLocale = {
   en: enLang,
   fr: frLang,
   ar: arLang,
   es: esLang,
   zh: zhLang,
   ja: jaLang,
   ko: koLang
};

addLocaleData(AppLocale.en.data);
addLocaleData(AppLocale.fr.data);
addLocaleData(AppLocale.zh.data);
addLocaleData(AppLocale.ar.data);
addLocaleData(AppLocale.es.data);
addLocaleData(AppLocale.ja.data);
addLocaleData(AppLocale.ko.data);

export default AppLocale;