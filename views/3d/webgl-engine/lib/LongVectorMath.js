/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function t(e,t){let n=0;for(let l=0;l<e.length;l++)n+=e[l]*t[l];return n}function n(e,t,n){(n=n||e).length=e.length;for(let l=0;l<e.length;l++)n[l]=e[l]*t[l];return n}function l(e,t,n){(n=n||e).length=e.length;for(let l=0;l<e.length;l++)n[l]=e[l]*t;return n}function r(e,t,n){(n=n||e).length=e.length;for(let l=0;l<e.length;l++)n[l]=e[l]+t[l];return n}e.add=r,e.dotProduct=t,e.elementwiseProduct=n,e.scalarProduct=l,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
