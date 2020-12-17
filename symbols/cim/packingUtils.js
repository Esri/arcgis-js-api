/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";const e=[1,256,65536,16777216],n=[1/256,1/65536,1/16777216,1/4294967296],r=o(new Uint8ClampedArray([255,255,255,255]));function o(t,e=0){let r=0;for(let o=0;o<4;o++)r+=t[e+o]*n[o];return r}t.packFloatRGBA=function(t,n,o=0){const f=function(t,e,n){if(t<e)return e;if(t>n)return n;return t}(t,0,r);for(let t=0;t<4;t++)n[o+t]=Math.floor(256*((u=f*e[t])-Math.floor(u)));var u},t.unpackFloatRGBA=o,Object.defineProperty(t,"__esModule",{value:!0})}));
