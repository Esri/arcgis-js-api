/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function n(e){const n=[];return function*(){yield*n;for(const t of e)n.push(t),yield t}}function t(e,n){for(const t of e)if(null!=t&&n(t))return t}function o(e){return null!=e&&"function"==typeof e[Symbol.iterator]}e.cache=n,e.find=t,e.isIterable=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
