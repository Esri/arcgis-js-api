// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../core/compilerUtils","../Extent"],function(n,t,e,i){function r(n){return n}function a(n){return void 0===n&&(n=t.ZERO),r([n[0],n[1],n[2],n[3]])}function u(n){return r([n[0],n[1],n[2],n[3]])}function o(n,t,e,i,r){return void 0===r&&(r=a()),r[0]=n,r[1]=t,r[2]=e,r[3]=i,r}function f(n,t){return void 0===t&&(t=a()),t[0]=n.xmin,t[1]=n.ymin,t[2]=n.xmax,t[3]=n.ymax,t}function c(n,t){return new i({xmin:n[0],ymin:n[1],xmax:n[2],ymax:n[3],spatialReference:t})}function h(n,t){t[0]<n[0]&&(n[0]=t[0]),t[0]>n[2]&&(n[2]=t[0]),t[1]<n[1]&&(n[1]=t[1]),t[1]>n[3]&&(n[3]=t[1])}function m(n,t,i){if(void 0===i&&(i=n),"length"in t)A(t)?(i[0]=Math.min(n[0],t[0]),i[1]=Math.min(n[1],t[1]),i[2]=Math.max(n[2],t[2]),i[3]=Math.max(n[3],t[3])):2!==t.length&&3!==t.length||(i[0]=Math.min(n[0],t[0]),i[1]=Math.min(n[1],t[1]),i[2]=Math.max(n[2],t[0]),i[3]=Math.max(n[3],t[1]));else switch(t.type){case"extent":i[0]=Math.min(n[0],t.xmin),i[1]=Math.min(n[1],t.ymin),i[2]=Math.max(n[2],t.xmax),i[3]=Math.max(n[3],t.ymax);break;case"point":i[0]=Math.min(n[0],t.x),i[1]=Math.min(n[1],t.y),i[2]=Math.max(n[2],t.x),i[3]=Math.max(n[3],t.y);break;default:e.neverReached(t)}return i}function x(n,t,e){void 0===e&&(e=n);for(var i=t.length,r=n[0],a=n[1],u=n[2],o=n[3],f=0;f<i;f++){var c=t[f];r=Math.min(r,c[0]),a=Math.min(a,c[1]),u=Math.max(u,c[0]),o=Math.max(o,c[1])}return e[0]=r,e[1]=a,e[2]=u,e[3]=o,e}function M(n){for(var t=0;t<4;t++)if(!isFinite(n[t]))return!1;return!0}function s(n){return n[0]>=n[2]?0:n[2]-n[0]}function l(n){return n[1]>=n[3]?0:n[3]-n[1]}function d(n){var t=s(n),e=l(n);return Math.sqrt(t*t+e*e)}function v(n){return s(n)*l(n)}function I(n,t){return void 0===t&&(t=[0,0]),t[0]=n[0]+s(n)/2,t[1]=n[1]+l(n)/2,t}function y(n,t){return t[0]>=n[0]&&t[1]>=n[1]&&t[0]<=n[2]&&t[1]<=n[3]}function E(n,t,e){return t[0]>=n[0]-e&&t[1]>=n[1]-e&&t[0]<=n[2]+e&&t[1]<=n[3]+e}function N(n,t){return Math.max(t[0],n[0])<=Math.min(t[2],n[2])&&Math.max(t[1],n[1])<=Math.min(t[3],n[3])}function p(n,t){return t[0]>=n[0]&&t[2]<=n[2]&&t[1]>=n[1]&&t[3]<=n[3]}function g(n,t,e){void 0===e&&(e=n);var i=t[0],r=t[1],a=t[2],u=t[3];return e[0]=Y(n[0],i,a),e[1]=Y(n[1],r,u),e[2]=Y(n[2],i,a),e[3]=Y(n[3],r,u),e}function F(n,t){var e=(n[0]+n[2])/2,i=(n[1]+n[3])/2,r=Math.max(Math.abs(t[0]-e)-s(n)/2,0),a=Math.max(Math.abs(t[1]-i)-l(n)/2,0);return Math.sqrt(r*r+a*a)}function T(n,t,e,i){return void 0===i&&(i=n),i[0]=n[0]+t,i[1]=n[1]+e,i[2]=n[2]+t,i[3]=n[3]+e,i}function P(n,t,e){return void 0===e&&(e=n),e[0]=n[0]-t,e[1]=n[1]-t,e[2]=n[2]+t,e[3]=n[3]+t,e}function _(n,t,e){return void 0===e&&(e=n),e[0]=t[0],e[1]=t[1],e!==n&&(e[2]=n[2],e[3]=n[3]),e}function b(n,t,e){return void 0===e&&(e=n),e[2]=t[0],e[3]=t[1],e!==n&&(e[0]=n[0],e[1]=n[1]),n}function V(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n}function q(n){return n?V(n,t.NEGATIVE_INFINITY):a(t.NEGATIVE_INFINITY)}function A(n){return 4===n.length}function O(n){return!(0!==s(n)&&isFinite(n[0])||0!==l(n)&&isFinite(n[1]))}function R(n,t,e){if(null==n||null==t)return n===t;if(!A(n)||!A(t))return!1;if(e){for(var i=0;i<n.length;i++)if(!e(n[i],t[i]))return!1}else for(var i=0;i<n.length;i++)if(n[i]!==t[i])return!1;return!0}function Y(n,t,e){return n<t?t:n>e?e:n}Object.defineProperty(t,"__esModule",{value:!0}),t.create=a,t.clone=u,t.fromValues=o,t.fromExtent=f,t.toExtent=c,t.expandPointInPlace=h,t.expand=m,t.expandWithNestedArray=x,t.allFinite=M,t.width=s,t.height=l,t.diameter=d,t.area=v,t.center=I,t.containsPoint=y,t.containsPointWithMargin=E,t.intersects=N,t.contains=p,t.intersection=g,t.distance=F,t.offset=T,t.pad=P,t.setMin=_,t.setMax=b,t.set=V,t.empty=q,t.is=A,t.isPoint=O,t.equals=R,t.POSITIVE_INFINITY=r([-1/0,-1/0,1/0,1/0]),t.NEGATIVE_INFINITY=r([1/0,1/0,-1/0,-1/0]),t.ZERO=r([0,0,0,0])});