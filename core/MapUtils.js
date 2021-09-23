/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function n(e,n){for(const[t,r]of e)if(n(r,t))return!0;return!1}function t(e,n){for(const[t,r]of e)if(n(r,t))return r;return null}function r(e,n,t){const r=e.get(n);if(void 0!==r)return r;const o=t();return e.set(n,o),o}e.findInMap=t,e.getOrCreateMapValue=r,e.someMap=n,Object.defineProperty(e,"__esModule",{value:!0})}));
