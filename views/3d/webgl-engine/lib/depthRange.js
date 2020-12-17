/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(n){"use strict";function r(n,r){return{near:n,far:r}}function e(n,r,e){return n.near=r,n.far=e,n}n.create=r,n.empty=function(n){return n?e(n,1/0,-1/0):r(1/0,-1/0)},n.set=e,n.union=function(n,r,e=n){return e.near=Math.min(n.near,r.near),e.far=Math.max(n.far,r.far),e},n.within=function(n,r){return n.near<=r&&r<=n.far},Object.defineProperty(n,"__esModule",{value:!0})}));
