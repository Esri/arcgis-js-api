/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function t(e,t){let n=0;for(let r=0;r<e.length;r++)n+=e[r]*t[r];return n}function n(e,t,n){(n=n||e).length=e.length;for(let r=0;r<e.length;r++)n[r]=e[r]*t[r];return n}function r(e,t,n){(n=n||e).length=e.length;for(let r=0;r<e.length;r++)n[r]=e[r]*t;return n}function l(e,t,n){(n=n||e).length=e.length;for(let r=0;r<e.length;r++)n[r]=e[r]+t[r];return n}e.add=l,e.dotProduct=t,e.elementwiseProduct=n,e.scalarProduct=r,Object.defineProperty(e,"__esModule",{value:!0})}));
