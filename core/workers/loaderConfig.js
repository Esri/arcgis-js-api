/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../has","../../config","../urlUtils","../../request"],(function(a,e,s,n,c){"use strict";const r={};a.DEFAULT_LOADER_URL=null,a.default=function(a){var e;const s={async:a.async,isDebug:a.isDebug,locale:a.locale,baseUrl:a.baseUrl,has:{...a.has},map:{...a.map},packages:a.packages&&a.packages.concat()||[],paths:{...a.paths}};return a.hasOwnProperty("async")||(s.async=!0),a.hasOwnProperty("isDebug")||(s.isDebug=!1),a.baseUrl||(s.baseUrl=r.baseUrl),null==(e=r.packages)||e.forEach((a=>{!function(a,e){for(const s of a)if(s.name===e.name)return;a.push(e)}(s.packages,a)})),s},Object.defineProperty(a,"__esModule",{value:!0})}));
