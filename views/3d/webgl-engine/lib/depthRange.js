/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports"],(function(n){"use strict";function r(n,r){return{near:n,far:r}}function e(n){return n?t(n,1/0,-1/0):r(1/0,-1/0)}function t(n,r,e){return n.near=r,n.far=e,n}function a(n,r,e=n){return e.near=Math.min(n.near,r.near),e.far=Math.max(n.far,r.far),e}function u(n,r){return n.near<=r&&r<=n.far}n.create=r,n.empty=e,n.set=t,n.union=a,n.within=u,Object.defineProperty(n,"__esModule",{value:!0})}));
