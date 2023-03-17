/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";function e(t,e){let n=0;for(let r=0;r<t.length;r++)n+=t[r]*e[r];return n}function n(t,e,n){(n=n||t).length=t.length;for(let r=0;r<t.length;r++)n[r]=t[r]*e[r];return n}function r(t,e,n){(n=n||t).length=t.length;for(let r=0;r<t.length;r++)n[r]=t[r]*e;return n}function l(t,e,n){(n=n||t).length=t.length;for(let r=0;r<t.length;r++)n[r]=t[r]+e[r];return n}t.add=l,t.dotProduct=e,t.elementwiseProduct=n,t.scalarProduct=r,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
