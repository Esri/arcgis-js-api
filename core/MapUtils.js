/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function n(e,n){for(const[t,r]of e)if(n(r,t))return!0;return!1}function t(e,n){for(const[t,r]of e)if(n(r,t))return r;return null}function r(e,n,t){const r=e.get(n);if(void 0!==r)return r;const o=t();return e.set(n,o),o}function o(e){const n=e.values().next();return!0!==n.done?n.value:null}e.findInMap=t,e.first=o,e.getOrCreateMapValue=r,e.someMap=n,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
