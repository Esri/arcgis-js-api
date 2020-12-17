/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";const e=[1,256,65536,16777216],r=[1/256,1/65536,1/16777216,1/4294967296],n=function(t,e=0){let n=0;for(let o=0;o<4;o++)n+=t[e+o]*r[o];return n}(new Uint8ClampedArray([255,255,255,255]));t.packFloatRGBA=function(t,r,o=0){const f=function(t,e,r){if(t<e)return e;if(t>r)return r;return t}(t,0,n);for(let t=0;t<4;t++)r[o+t]=Math.floor(256*((u=f*e[t])-Math.floor(u)));var u},Object.defineProperty(t,"__esModule",{value:!0})}));
