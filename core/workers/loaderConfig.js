/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../assets","../has","../urlUtils"],(function(a,e,s,n){"use strict";let r=null;const t={};function c(a,e){for(const s of a)if(s.name===e.name)return;a.push(e)}function l(a){var e;const s={async:a.async,isDebug:a.isDebug,locale:a.locale,baseUrl:a.baseUrl,has:{...a.has},map:{...a.map},packages:a.packages&&a.packages.concat()||[],paths:{...a.paths}};return a.hasOwnProperty("async")||(s.async=!0),a.hasOwnProperty("isDebug")||(s.isDebug=!1),a.baseUrl||(s.baseUrl=t.baseUrl),null==(e=t.packages)||e.forEach((a=>{c(s.packages,a)})),s}a.DEFAULT_LOADER_URL=r,a.loaderConfig=l,Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
