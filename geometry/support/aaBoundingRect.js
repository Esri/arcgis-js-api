// COPYRIGHT © 2019 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../core/compilerUtils","../Extent"],function(n,t,e,i){function r(n){return n}function a(n){return void 0===n&&(n=t.ZERO),r([n[0],n[1],n[2],n[3]])}function u(n){return r([n[0],n[1],n[2],n[3]])}function o(n,t,e,i,r){return void 0===r&&(r=a()),r[0]=n,r[1]=t,r[2]=e,r[3]=i,r}function c(n,t){return void 0===t&&(t=a()),t[0]=n.xmin,t[1]=n.ymin,t[2]=n.xmax,t[3]=n.ymax,t}function f(n,t){return new i({xmin:n[0],ymin:n[1],xmax:n[2],ymax:n[3],spatialReference:t})}function h(n,t){t[0]<n[0]&&(n[0]=t[0]),t[0]>n[2]&&(n[2]=t[0]),t[1]<n[1]&&(n[1]=t[1]),t[1]>n[3]&&(n[3]=t[1])}function m(n,t,i){if(void 0===i&&(i=n),"length"in t)Y(t)?(i[0]=Math.min(n[0],t[0]),i[1]=Math.min(n[1],t[1]),i[2]=Math.max(n[2],t[2]),i[3]=Math.max(n[3],t[3])):2!==t.length&&3!==t.length||(i[0]=Math.min(n[0],t[0]),i[1]=Math.min(n[1],t[1]),i[2]=Math.max(n[2],t[0]),i[3]=Math.max(n[3],t[1]));else switch(t.type){case"extent":i[0]=Math.min(n[0],t.xmin),i[1]=Math.min(n[1],t.ymin),i[2]=Math.max(n[2],t.xmax),i[3]=Math.max(n[3],t.ymax);break;case"point":i[0]=Math.min(n[0],t.x),i[1]=Math.min(n[1],t.y),i[2]=Math.max(n[2],t.x),i[3]=Math.max(n[3],t.y);break;default:e.neverReached(t)}return i}function x(n,t,e){void 0===e&&(e=n);for(var i=t.length,r=n[0],a=n[1],u=n[2],o=n[3],c=0;c<i;c++){var f=t[c];r=Math.min(r,f[0]),a=Math.min(a,f[1]),u=Math.max(u,f[0]),o=Math.max(o,f[1])}return e[0]=r,e[1]=a,e[2]=u,e[3]=o,e}function s(n){for(var t=0;t<4;t++)if(!isFinite(n[t]))return!1;return!0}function M(n){return n[0]>=n[2]?0:n[2]-n[0]}function l(n){return n[1]>=n[3]?0:n[3]-n[1]}function d(n){var t=M(n),e=l(n);return Math.sqrt(t*t+e*e)}function v(n){return M(n)*l(n)}function I(n,t){return void 0===t&&(t=[0,0]),t[0]=n[0]+M(n)/2,t[1]=n[1]+l(n)/2,t}function y(n,t){return E(n,t[0],t[1])}function N(n,t){return E(n,t.x,t.y)}function E(n,t,e){return t>=n[0]&&e>=n[1]&&t<=n[2]&&e<=n[3]}function p(n,t,e){return t[0]>=n[0]-e&&t[1]>=n[1]-e&&t[0]<=n[2]+e&&t[1]<=n[3]+e}function g(n,t){return Math.max(t[0],n[0])<=Math.min(t[2],n[2])&&Math.max(t[1],n[1])<=Math.min(t[3],n[3])}function T(n,t){return t[0]>=n[0]&&t[2]<=n[2]&&t[1]>=n[1]&&t[3]<=n[3]}function F(n,t,e){void 0===e&&(e=n);var i=t[0],r=t[1],a=t[2],u=t[3];return e[0]=j(n[0],i,a),e[1]=j(n[1],r,u),e[2]=j(n[2],i,a),e[3]=j(n[3],r,u),e}function P(n,t){var e=(n[0]+n[2])/2,i=(n[1]+n[3])/2,r=Math.max(Math.abs(t[0]-e)-M(n)/2,0),a=Math.max(Math.abs(t[1]-i)-l(n)/2,0);return Math.sqrt(r*r+a*a)}function b(n,t){t[0]=n[2]-n[0],t[1]=n[3]-n[1]}function _(n,t,e,i){return void 0===i&&(i=n),i[0]=n[0]+t,i[1]=n[1]+e,i[2]=n[2]+t,i[3]=n[3]+e,i}function O(n,t,e){return void 0===e&&(e=n),e[0]=n[0]-t,e[1]=n[1]-t,e[2]=n[2]+t,e[3]=n[3]+t,e}function V(n,t,e){return void 0===e&&(e=n),e[0]=t[0],e[1]=t[1],e!==n&&(e[2]=n[2],e[3]=n[3]),e}function q(n,t,e){return void 0===e&&(e=n),e[2]=t[0],e[3]=t[1],e!==n&&(e[0]=n[0],e[1]=n[1]),n}function A(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n}function R(n){return n?A(n,t.NEGATIVE_INFINITY):a(t.NEGATIVE_INFINITY)}function Y(n){return 4===n.length}function w(n){return!(0!==M(n)&&isFinite(n[0])||0!==l(n)&&isFinite(n[1]))}function G(n,t,e){if(null==n||null==t)return n===t;if(!Y(n)||!Y(t))return!1;if(e){for(var i=0;i<n.length;i++)if(!e(n[i],t[i]))return!1}else for(var i=0;i<n.length;i++)if(n[i]!==t[i])return!1;return!0}function j(n,t,e){return n<t?t:n>e?e:n}Object.defineProperty(t,"__esModule",{value:!0}),t.create=a,t.clone=u,t.fromValues=o,t.fromExtent=c,t.toExtent=f,t.expandPointInPlace=h,t.expand=m,t.expandWithNestedArray=x,t.allFinite=s,t.width=M,t.height=l,t.diameter=d,t.area=v,t.center=I,t.containsPoint=y,t.containsPointObject=N,t.containsPointWithMargin=p,t.intersects=g,t.contains=T,t.intersection=F,t.distance=P,t.size=b,t.offset=_,t.pad=O,t.setMin=V,t.setMax=q,t.set=A,t.empty=R,t.is=Y,t.isPoint=w,t.equals=G,t.POSITIVE_INFINITY=r([-1/0,-1/0,1/0,1/0]),t.NEGATIVE_INFINITY=r([1/0,1/0,-1/0,-1/0]),t.ZERO=r([0,0,0,0]),t.UNIT=r([0,0,1,1])});