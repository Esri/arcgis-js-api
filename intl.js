/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","./intl/locale","./intl/date","./intl/number","./intl/substitute","./intl/messages","./intl/t9n","./assets"],(function(e,t,a,o,r,s,n,l){"use strict";s.registerMessageBundleLoader(n.createJSONLoader({pattern:"esri/",location:l.getAssetUrl})),e.getLocale=t.getLocale,e.onLocaleChange=t.onLocaleChange,e.prefersRTL=t.prefersRTL,e.setLocale=t.setLocale,e.convertDateFormatToIntlOptions=a.convertDateFormatToIntlOptions,e.formatDate=a.formatDate,e.convertNumberFormatToIntlOptions=o.convertNumberFormatToIntlOptions,e.formatNumber=o.formatNumber,e.substitute=r.substitute,e.fetchMessageBundle=s.fetchMessageBundle,e.normalizeMessageBundleLocale=s.normalizeMessageBundleLocale,e.registerMessageBundleLoader=s.registerMessageBundleLoader,e.createJSONLoader=n.createJSONLoader,Object.defineProperty(e,"__esModule",{value:!0})}));
