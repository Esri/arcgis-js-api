/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../assets","../has","../urlUtils"],(function(a,s,e,n){"use strict";let c=null;const t={};function r(a,s){for(const e of a)if(e.name===s.name)return;a.push(s)}function l(a){var s;const e={async:a.async,isDebug:a.isDebug,locale:a.locale,baseUrl:a.baseUrl,has:{...a.has},map:{...a.map},packages:a.packages&&a.packages.concat()||[],paths:{...a.paths}};return a.hasOwnProperty("async")||(e.async=!0),a.hasOwnProperty("isDebug")||(e.isDebug=!1),a.baseUrl||(e.baseUrl=t.baseUrl),null==(s=t.packages)||s.forEach((a=>{r(e.packages,a)})),e}a.DEFAULT_LOADER_URL=c,a.default=l,Object.defineProperty(a,"__esModule",{value:!0})}));
