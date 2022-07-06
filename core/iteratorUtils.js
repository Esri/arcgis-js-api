/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function n(n){const o=[];return function*(){yield*o;for(const t of n)o.push(t),yield t}}function o(n,o){for(const t of n)if(null!=t&&o(t))return t}function t(n){return null!=n&&"function"==typeof n[Symbol.iterator]}export{n as cache,o as find,t as isIterable};
