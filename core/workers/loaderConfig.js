/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../assets","../has","../urlUtils"],(function(a,e,s,n){"use strict";let t=null;const c={};function o(a,e){for(const s of a)if(s.name===e.name)return;a.push(e)}function r(a){const e={async:a.async,isDebug:a.isDebug,locale:a.locale,baseUrl:a.baseUrl,has:{...a.has},map:{...a.map},packages:a.packages&&a.packages.concat()||[],paths:{...a.paths}};return a.hasOwnProperty("async")||(e.async=!0),a.hasOwnProperty("isDebug")||(e.isDebug=!1),a.baseUrl||(e.baseUrl=c.baseUrl),c.packages?.forEach((a=>{o(e.packages??[],a)})),e}a.DEFAULT_LOADER_URL=t,a.loaderConfig=r,Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
