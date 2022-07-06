/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function r(r,n){return{near:r,far:n}}function n(n){return n?a(n,1/0,-1/0):r(1/0,-1/0)}function a(r,n,a){return r.near=n,r.far=a,r}function t(r,n,a=r){return a.near=Math.min(r.near,n.near),a.far=Math.max(r.far,n.far),a}function e(r,n){return r.near<=n&&n<=r.far}const f={near:0,far:0};export{f as ZERO,r as create,n as empty,a as set,t as union,e as within};
