/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../ensureType","../metadata"],(function(t,e,n){"use strict";const r=Object.prototype.toString;function o(t){const n="__accessorMetadata__"in t?e.ensureType(t):t;return function(...t){if(t.push(n),"number"==typeof t[2])throw new Error("Using @cast has parameter decorator is not supported since 4.16");return a.apply(this,t)}}function a(t,e,r,o){n.getOwnPropertyMetadata(t,e).cast=o}t.cast=function(...t){var e;if(3!==t.length||"string"!=typeof t[1])return 1===t.length&&"[object Function]"===r.call(t[0])?o(t[0]):1===t.length&&"string"==typeof t[0]?(e=t[0],function(t,r){n.getOwnPropertyMetadata(t,e).cast=t[r]}):void 0},Object.defineProperty(t,"__esModule",{value:!0})}));
