/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";const n=[1,256,65536,16777216],e=[1/256,1/65536,1/16777216,1/4294967296],o=u(new Uint8ClampedArray([255,255,255,255]));function r(t,e,r=0){const u=c(t,0,o);for(let o=0;o<4;o++)e[r+o]=Math.floor(256*f(u*n[o]))}function u(t,n=0){let o=0;for(let r=0;r<4;r++)o+=t[n+r]*e[r];return o}function c(t,n,e){return t<n?n:t>e?e:t}function f(t){return t-Math.floor(t)}t.packFloatRGBA=r,t.unpackFloatRGBA=u,Object.defineProperty(t,"__esModule",{value:!0})}));
