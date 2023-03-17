/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(n){"use strict";function e(n){const{exifInfo:e,exifName:a,tagName:u}=n;if(!e||!a||!u)return null;const i=e.find((n=>n.name===a));return i?t({tagName:u,tags:i.tags}):null}function t(n){const{tagName:e,tags:t}=n;if(!t||!e)return null;const a=t.find((n=>n.name===e));return a&&a.value||null}n.getExifValue=e,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})}));
