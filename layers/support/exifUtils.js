/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";e.getExifValue=function(e){const{exifInfo:n,exifName:t,tagName:u}=e;if(!n||!t||!u)return null;const a=n.find((e=>e.name===t));return a?function(e){const{tagName:n,tags:t}=e;if(!t||!n)return null;const u=t.find((e=>e.name===n));return u&&u.value||null}({tagName:u,tags:a.tags}):null},Object.defineProperty(e,"__esModule",{value:!0})}));
