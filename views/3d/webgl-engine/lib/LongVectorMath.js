/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";e.add=function(e,t,n){(n=n||e).length=e.length;for(let r=0;r<e.length;r++)n[r]=e[r]+t[r];return n},e.dotProduct=function(e,t){let n=0;for(let r=0;r<e.length;r++)n+=e[r]*t[r];return n},e.elementwiseProduct=function(e,t,n){(n=n||e).length=e.length;for(let r=0;r<e.length;r++)n[r]=e[r]*t[r];return n},e.scalarProduct=function(e,t,n){(n=n||e).length=e.length;for(let r=0;r<e.length;r++)n[r]=e[r]*t;return n},Object.defineProperty(e,"__esModule",{value:!0})}));
