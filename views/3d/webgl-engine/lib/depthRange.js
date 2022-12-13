/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports"],(function(n){"use strict";function e(n,e){return{near:n,far:e}}function r(n){return n?t(n,1/0,-1/0):e(1/0,-1/0)}function t(n,e,r){return n.near=e,n.far=r,n}function a(n,e,r=n){return r.near=Math.min(n.near,e.near),r.far=Math.max(n.far,e.far),r}function u(n,e){return n.near<=e&&e<=n.far}const f={near:0,far:0};n.ZERO=f,n.create=e,n.empty=r,n.set=t,n.union=a,n.within=u,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
