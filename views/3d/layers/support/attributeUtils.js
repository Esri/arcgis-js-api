/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function n(n,t,e){if(!e||null==t)return null;if(!n)return r(t,e);const o=n.get(e);return o?t[o.name]:null}function r(n,r){const t=r.toLowerCase();for(const e in n)if(e.toLowerCase()===t)return n[e];return null}export{n as attributeLookup};
