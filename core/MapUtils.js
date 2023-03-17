/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(n){"use strict";function t(n,t){for(const[e,r]of n)if(t(r,e))return!0;return!1}function e(n,t){for(const[e,r]of n)if(t(r,e))return r;return null}function r(n,t,e){const r=n.get(t);if(void 0!==r)return r;const o=e();return n.set(t,o),o}function o(n){const t=n.values().next();return!0!==t.done?t.value:null}n.findInMap=e,n.first=o,n.getOrCreateMapValue=r,n.someMap=t,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})}));
