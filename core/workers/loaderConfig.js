/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import"../../assets.js";import"../has.js";import"../urlUtils.js";let s=null;const a={};function e(s,a){for(const e of s)if(e.name===a.name)return;s.push(a)}function r(s){const r={async:s.async,isDebug:s.isDebug,locale:s.locale,baseUrl:s.baseUrl,has:{...s.has},map:{...s.map},packages:s.packages&&s.packages.concat()||[],paths:{...s.paths}};return s.hasOwnProperty("async")||(r.async=!0),s.hasOwnProperty("isDebug")||(r.isDebug=!1),s.baseUrl||(r.baseUrl=a.baseUrl),a.packages?.forEach((s=>{e(r.packages,s)})),r}export{s as DEFAULT_LOADER_URL,r as loaderConfig};
