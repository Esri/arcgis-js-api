/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../assets","../has","../urlUtils"],(function(s,a,e,t){"use strict";let n=null;const l={};function r(s){const a={async:s.async,isDebug:s.isDebug,locale:s.locale,baseUrl:s.baseUrl,has:{...s.has},map:{...s.map},packages:s.packages&&s.packages.concat()||[],paths:{...s.paths}};return s.hasOwnProperty("async")||(a.async=!0),s.hasOwnProperty("isDebug")||(a.isDebug=!1),s.baseUrl||(a.baseUrl=l.baseUrl),a}s.DEFAULT_LOADER_URL=n,s.loaderConfig=r,Object.defineProperty(s,Symbol.toStringTag,{value:"Module"})}));
