/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","./intl/date","./intl/number","./intl/substitute","./intl/locale","./intl/messages","./intl/t9n","./assets"],(function(e,t,a,o,r,s,n,l){"use strict";s.registerMessageBundleLoader(n.createJSONLoader({pattern:"esri/",location:l.getAssetUrl})),e.convertDateFormatToIntlOptions=t.convertDateFormatToIntlOptions,e.formatDate=t.formatDate,e.convertNumberFormatToIntlOptions=a.convertNumberFormatToIntlOptions,e.formatNumber=a.formatNumber,e.substitute=o.substitute,e.getLocale=r.getLocale,e.onLocaleChange=r.onLocaleChange,e.prefersRTL=r.prefersRTL,e.setLocale=r.setLocale,e.fetchMessageBundle=s.fetchMessageBundle,e.normalizeMessageBundleLocale=s.normalizeMessageBundleLocale,e.registerMessageBundleLoader=s.registerMessageBundleLoader,e.createJSONLoader=n.createJSONLoader,Object.defineProperty(e,"__esModule",{value:!0})}));
