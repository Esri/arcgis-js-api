/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","./mathUtils"],(function(t,e){"use strict";function o(t,o,n=0){const r=e.clamp(t,0,a);for(let e=0;e<4;e++)o[n+e]=Math.floor(256*u(r*l[e]))}function n(t,e=0){let o=0;for(let n=0;n<4;n++)o+=t[e+n]*r[n];return o}const l=[1,256,65536,16777216],r=[1/256,1/65536,1/16777216,1/4294967296],a=n(new Uint8ClampedArray([255,255,255,255]));function u(t){return t-Math.floor(t)}t.packFloatRGBA=o,t.unpackFloatRGBA=n,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
