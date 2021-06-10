/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";const e=[1,256,65536,16777216],n=[1/256,1/65536,1/16777216,1/4294967296],o=f(new Uint8ClampedArray([255,255,255,255]));function r(t,n,r=0){const f=u(t,0,o);for(let o=0;o<4;o++)n[r+o]=Math.floor(256*c(f*e[o]))}function f(t,e=0){let o=0;for(let r=0;r<4;r++)o+=t[e+r]*n[r];return o}function u(t,e,n){return t<e?e:t>n?n:t}function c(t){return t-Math.floor(t)}t.packFloatRGBA=r,Object.defineProperty(t,"__esModule",{value:!0})}));
