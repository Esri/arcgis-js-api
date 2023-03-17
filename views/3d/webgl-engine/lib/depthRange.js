/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(n){"use strict";let r=function(){this.near=Number.MAX_VALUE,this.far=-Number.MAX_VALUE};function e(n,r){return{near:n,far:r}}function t(n){return n?a(n,1/0,-1/0):e(1/0,-1/0)}function a(n,r,e){return n.near=r,n.far=e,n}function u(n,r,e=n){return null!=r&&(e.near=Math.min(n.near,r.near),e.far=Math.max(n.far,r.far)),e}function f(n,r){return n.near<=r&&r<=n.far}const i={near:0,far:0};n.DepthRange=r,n.ZERO=i,n.create=e,n.empty=t,n.set=a,n.union=u,n.within=f,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})}));
