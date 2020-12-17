/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";e.attributeLookup=function(e,n,t){if(!t||null==n)return null;if(!e)return function(e,n){const t=n.toLowerCase();for(const n in e)if(n.toLowerCase()===t)return e[n];return null}(n,t);const r=e.get(t);return r?n[r.name]:null},Object.defineProperty(e,"__esModule",{value:!0})}));
