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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../Extent"],function(n,t,i){function e(n){return n}function r(n){return void 0===n&&(n=t.ZERO),e([n[0],n[1],n[2],n[3]])}function a(n){return e([n[0],n[1],n[2],n[3]])}function u(n,t,i,e,a){return void 0===a&&(a=r()),a[0]=n,a[1]=t,a[2]=i,a[3]=e,a}function o(n,t){return void 0===t&&(t=r()),t[0]=n.xmin,t[1]=n.ymin,t[2]=n.xmax,t[3]=n.ymax,t}function f(n,t){return new i({xmin:n[0],ymin:n[1],xmax:n[2],ymax:n[3],spatialReference:t})}function c(n,t){t[0]<n[0]&&(n[0]=t[0]),t[0]>n[2]&&(n[2]=t[0]),t[1]<n[1]&&(n[1]=t[1]),t[1]>n[3]&&(n[3]=t[1])}function h(n,t,i){if(void 0===i&&(i=n),"length"in t)q(t)?(i[0]=Math.min(n[0],t[0]),i[1]=Math.min(n[1],t[1]),i[2]=Math.max(n[2],t[2]),i[3]=Math.max(n[3],t[3])):2!==t.length&&3!==t.length||(i[0]=Math.min(n[0],t[0]),i[1]=Math.min(n[1],t[1]),i[2]=Math.max(n[2],t[0]),i[3]=Math.max(n[3],t[1]));else switch(t.type){case"extent":i[0]=Math.min(n[0],t.xmin),i[1]=Math.min(n[1],t.ymin),i[2]=Math.max(n[2],t.xmax),i[3]=Math.max(n[3],t.ymax);break;case"point":i[0]=Math.min(n[0],t.x),i[1]=Math.min(n[1],t.y),i[2]=Math.max(n[2],t.x),i[3]=Math.max(n[3],t.y)}return i}function m(n,t,i){void 0===i&&(i=n);for(var e=t.length,r=n[0],a=n[1],u=n[2],o=n[3],f=0;f<e;f++){var c=t[f];r=Math.min(r,c[0]),a=Math.min(a,c[1]),u=Math.max(u,c[0]),o=Math.max(o,c[1])}return i[0]=r,i[1]=a,i[2]=u,i[3]=o,i}function x(n){for(var t=0;t<4;t++)if(!isFinite(n[t]))return!1;return!0}function M(n){return n[0]>=n[2]?0:n[2]-n[0]}function s(n){return n[1]>=n[3]?0:n[3]-n[1]}function d(n){var t=M(n),i=s(n);return Math.sqrt(t*t+i*i)}function l(n){return M(n)*s(n)}function v(n,t){return void 0===t&&(t=[0,0]),t[0]=n[0]+M(n)/2,t[1]=n[1]+s(n)/2,t}function I(n,t){return t[0]>=n[0]&&t[1]>=n[1]&&t[0]<=n[2]&&t[1]<=n[3]}function y(n,t,i){return t[0]>=n[0]-i&&t[1]>=n[1]-i&&t[0]<=n[2]+i&&t[1]<=n[3]+i}function E(n,t){return Math.max(t[0],n[0])<=Math.min(t[2],n[2])&&Math.max(t[1],n[1])<=Math.min(t[3],n[3])}function N(n,t){return t[0]>=n[0]&&t[2]<=n[2]&&t[1]>=n[1]&&t[3]<=n[3]}function p(n,t,i){void 0===i&&(i=n);var e=t[0],r=t[1],a=t[2],u=t[3];return i[0]=Y(n[0],e,a),i[1]=Y(n[1],r,u),i[2]=Y(n[2],e,a),i[3]=Y(n[3],r,u),i}function g(n,t){var i=(n[0]+n[2])/2,e=(n[1]+n[3])/2,r=Math.max(Math.abs(t[0]-i)-M(n)/2,0),a=Math.max(Math.abs(t[1]-e)-s(n)/2,0);return Math.sqrt(r*r+a*a)}function F(n,t,i,e){return void 0===e&&(e=n),e[0]=n[0]+t,e[1]=n[1]+i,e[2]=n[2]+t,e[3]=n[3]+i,e}function T(n,t,i){return void 0===i&&(i=n),i[0]=n[0]-t,i[1]=n[1]-t,i[2]=n[2]+t,i[3]=n[3]+t,i}function P(n,t,i){return void 0===i&&(i=n),i[0]=t[0],i[1]=t[1],i!==n&&(i[2]=n[2],i[3]=n[3]),i}function _(n,t,i){return void 0===i&&(i=n),i[2]=t[0],i[3]=t[1],i!==n&&(i[0]=n[0],i[1]=n[1]),n}function V(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n}function b(n){return n?V(n,t.NEGATIVE_INFINITY):r(t.NEGATIVE_INFINITY)}function q(n){return 4===n.length}function A(n){return!(0!==M(n)&&isFinite(n[0])||0!==s(n)&&isFinite(n[1]))}function O(n,t,i){if(null==n||null==t)return n===t;if(!q(n)||!q(t))return!1;if(i){for(var e=0;e<n.length;e++)if(!i(n[e],t[e]))return!1}else for(var e=0;e<n.length;e++)if(n[e]!==t[e])return!1;return!0}function Y(n,t,i){return n<t?t:n>i?i:n}Object.defineProperty(t,"__esModule",{value:!0}),t.create=r,t.clone=a,t.fromValues=u,t.fromExtent=o,t.toExtent=f,t.expandPointInPlace=c,t.expand=h,t.expandWithNestedArray=m,t.allFinite=x,t.width=M,t.height=s,t.diameter=d,t.area=l,t.center=v,t.containsPoint=I,t.containsPointWithMargin=y,t.intersects=E,t.contains=N,t.intersection=p,t.distance=g,t.offset=F,t.pad=T,t.setMin=P,t.setMax=_,t.set=V,t.empty=b,t.is=q,t.isPoint=A,t.equals=O,t.POSITIVE_INFINITY=e([-1/0,-1/0,1/0,1/0]),t.NEGATIVE_INFINITY=e([1/0,1/0,-1/0,-1/0]),t.ZERO=e([0,0,0,0])});