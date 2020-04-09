// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/compilerUtils","../Extent"],(function(n,t,e,i){function r(n){return void 0===n&&(n=t.ZERO),[n[0],n[1],n[2],n[3]]}function a(n){return n[0]>=n[2]?0:n[2]-n[0]}function u(n){return n[1]>=n[3]?0:n[3]-n[1]}function o(n,t,e){return t>=n[0]&&e>=n[1]&&t<=n[2]&&e<=n[3]}function c(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n}function f(n){return 4===n.length}function h(n,t,e){return n<t?t:n>e?e:n}Object.defineProperty(t,"__esModule",{value:!0}),t.create=r,t.clone=function(n){return[n[0],n[1],n[2],n[3]]},t.fromValues=function(n,t,e,i,a){return void 0===a&&(a=r()),a[0]=n,a[1]=t,a[2]=e,a[3]=i,a},t.fromExtent=function(n,t){return void 0===t&&(t=r()),t[0]=n.xmin,t[1]=n.ymin,t[2]=n.xmax,t[3]=n.ymax,t},t.toExtent=function(n,t){return new i({xmin:n[0],ymin:n[1],xmax:n[2],ymax:n[3],spatialReference:t})},t.expandPointInPlace=function(n,t){t[0]<n[0]&&(n[0]=t[0]),t[0]>n[2]&&(n[2]=t[0]),t[1]<n[1]&&(n[1]=t[1]),t[1]>n[3]&&(n[3]=t[1])},t.expand=function(n,t,i){if(void 0===i&&(i=n),"length"in t)f(t)?(i[0]=Math.min(n[0],t[0]),i[1]=Math.min(n[1],t[1]),i[2]=Math.max(n[2],t[2]),i[3]=Math.max(n[3],t[3])):2!==t.length&&3!==t.length||(i[0]=Math.min(n[0],t[0]),i[1]=Math.min(n[1],t[1]),i[2]=Math.max(n[2],t[0]),i[3]=Math.max(n[3],t[1]));else switch(t.type){case"extent":i[0]=Math.min(n[0],t.xmin),i[1]=Math.min(n[1],t.ymin),i[2]=Math.max(n[2],t.xmax),i[3]=Math.max(n[3],t.ymax);break;case"point":i[0]=Math.min(n[0],t.x),i[1]=Math.min(n[1],t.y),i[2]=Math.max(n[2],t.x),i[3]=Math.max(n[3],t.y);break;default:e.neverReached(t)}return i},t.expandWithNestedArray=function(n,t,e){void 0===e&&(e=n);for(var i=t.length,r=n[0],a=n[1],u=n[2],o=n[3],c=0;c<i;c++){var f=t[c];r=Math.min(r,f[0]),a=Math.min(a,f[1]),u=Math.max(u,f[0]),o=Math.max(o,f[1])}return e[0]=r,e[1]=a,e[2]=u,e[3]=o,e},t.allFinite=function(n){for(var t=0;t<4;t++)if(!isFinite(n[t]))return!1;return!0},t.width=a,t.height=u,t.diameter=function(n){var t=a(n),e=u(n);return Math.sqrt(t*t+e*e)},t.area=function(n){return a(n)*u(n)},t.center=function(n,t){return void 0===t&&(t=[0,0]),t[0]=(n[0]+n[2])/2,t[1]=(n[1]+n[3])/2,t},t.containsPoint=function(n,t){return o(n,t[0],t[1])},t.containsPointObject=function(n,t){return o(n,t.x,t.y)},t.containsXY=o,t.containsPointWithMargin=function(n,t,e){return t[0]>=n[0]-e&&t[1]>=n[1]-e&&t[0]<=n[2]+e&&t[1]<=n[3]+e},t.intersects=function(n,t){return Math.max(t[0],n[0])<=Math.min(t[2],n[2])&&Math.max(t[1],n[1])<=Math.min(t[3],n[3])},t.contains=function(n,t){return t[0]>=n[0]&&t[2]<=n[2]&&t[1]>=n[1]&&t[3]<=n[3]},t.intersection=function(n,t,e){void 0===e&&(e=n);var i=t[0],r=t[1],a=t[2],u=t[3];return e[0]=h(n[0],i,a),e[1]=h(n[1],r,u),e[2]=h(n[2],i,a),e[3]=h(n[3],r,u),e},t.distance=function(n,t){var e=(n[0]+n[2])/2,i=(n[1]+n[3])/2,r=Math.max(Math.abs(t[0]-e)-a(n)/2,0),o=Math.max(Math.abs(t[1]-i)-u(n)/2,0);return Math.sqrt(r*r+o*o)},t.size=function(n,t){t[0]=n[2]-n[0],t[1]=n[3]-n[1]},t.offset=function(n,t,e,i){return void 0===i&&(i=n),i[0]=n[0]+t,i[1]=n[1]+e,i[2]=n[2]+t,i[3]=n[3]+e,i},t.pad=function(n,t,e){return void 0===e&&(e=n),e[0]=n[0]-t,e[1]=n[1]-t,e[2]=n[2]+t,e[3]=n[3]+t,e},t.setMin=function(n,t,e){return void 0===e&&(e=n),e[0]=t[0],e[1]=t[1],e!==n&&(e[2]=n[2],e[3]=n[3]),e},t.setMax=function(n,t,e){return void 0===e&&(e=n),e[2]=t[0],e[3]=t[1],e!==n&&(e[0]=n[0],e[1]=n[1]),n},t.set=c,t.empty=function(n){return n?c(n,t.NEGATIVE_INFINITY):r(t.NEGATIVE_INFINITY)},t.is=f,t.isPoint=function(n){return!(0!==a(n)&&isFinite(n[0])||0!==u(n)&&isFinite(n[1]))},t.equals=function(n,t,e){if(null==n||null==t)return n===t;if(!f(n)||!f(t))return!1;if(e){for(var i=0;i<n.length;i++)if(!e(n[i],t[i]))return!1}else for(i=0;i<n.length;i++)if(n[i]!==t[i])return!1;return!0},t.POSITIVE_INFINITY=[-1/0,-1/0,1/0,1/0],t.NEGATIVE_INFINITY=[1/0,1/0,-1/0,-1/0],t.ZERO=[0,0,0,0],t.UNIT=[0,0,1,1]}));