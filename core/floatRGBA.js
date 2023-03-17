/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./mathUtils"],(function(t,o){"use strict";function n(t,n,e=0){const l=o.clamp(t,0,a);for(let o=0;o<4;o++)n[e+o]=Math.floor(256*c(l*r[o]))}function e(t,o=0){let n=0;for(let e=0;e<4;e++)n+=t[o+e]*l[e];return n}const r=[1,256,65536,16777216],l=[1/256,1/65536,1/16777216,1/4294967296],a=e(new Uint8ClampedArray([255,255,255,255]));function c(t){return t-Math.floor(t)}t.packFloatRGBA=n,t.unpackFloatRGBA=e,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
