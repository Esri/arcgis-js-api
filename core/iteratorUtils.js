/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports"],(function(n){"use strict";function e(n){const e=[];return function*(){yield*e;for(const t of n)e.push(t),yield t}}function t(n,e){for(const t of n)if(null!=t&&e(t))return t}function o(n){return null!=n&&"function"==typeof n[Symbol.iterator]}n.cache=e,n.find=t,n.isIterable=o,Object.defineProperty(n,"__esModule",{value:!0})}));
