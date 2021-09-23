/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function n(e){const{exifInfo:n,exifName:u,tagName:a}=e;if(!n||!u||!a)return null;const f=n.find((e=>e.name===u));return f?t({tagName:a,tags:f.tags}):null}function t(e){const{tagName:n,tags:t}=e;if(!t||!n)return null;const u=t.find((e=>e.name===n));return u&&u.value||null}e.getExifValue=n,Object.defineProperty(e,"__esModule",{value:!0})}));
