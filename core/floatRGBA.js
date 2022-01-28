/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","./mathUtils"],(function(t,e){"use strict";function n(t,n,o=0){const l=e.clamp(t,0,a);for(let e=0;e<4;e++)n[o+e]=Math.floor(256*c(l*r[e]))}function o(t,e=0){let n=0;for(let o=0;o<4;o++)n+=t[e+o]*l[o];return n}const r=[1,256,65536,16777216],l=[1/256,1/65536,1/16777216,1/4294967296],a=o(new Uint8ClampedArray([255,255,255,255]));function c(t){return t-Math.floor(t)}t.packFloatRGBA=n,t.unpackFloatRGBA=o,Object.defineProperty(t,"__esModule",{value:!0})}));
