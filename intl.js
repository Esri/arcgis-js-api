/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
export{convertDateFormatToIntlOptions,formatDate}from"./intl/date.js";export{convertNumberFormatToIntlOptions,formatNumber}from"./intl/number.js";export{substitute}from"./intl/substitute.js";export{getLocale,onLocaleChange,prefersRTL,setLocale}from"./intl/locale.js";import{registerMessageBundleLoader as e}from"./intl/messages.js";export{fetchMessageBundle,normalizeMessageBundleLocale,registerMessageBundleLoader}from"./intl/messages.js";import{createJSONLoader as t}from"./intl/t9n.js";export{createJSONLoader}from"./intl/t9n.js";import{getAssetUrl as o}from"./assets.js";e(t({pattern:"esri/",location:o}));
