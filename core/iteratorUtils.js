/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(n){"use strict";function t(n){const t=[];return function*(){yield*t;for(const o of n)t.push(o),yield o}}function o(n,t){for(const o of n)if(null!=o&&t(o))return o}function e(n){return null!=n&&"function"==typeof n[Symbol.iterator]}n.cache=t,n.find=o,n.isIterable=e,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})}));
