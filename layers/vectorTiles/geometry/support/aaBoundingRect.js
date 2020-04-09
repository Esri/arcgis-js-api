// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["require","exports","../../geometry"],(function(n,t,i){function e(n){return void 0===n&&(n=t.ZERO),[n[0],n[1],n[2],n[3]]}function r(n){return n[0]>=n[2]?0:n[2]-n[0]}function a(n){return n[1]>=n[3]?0:n[3]-n[1]}function u(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n}function o(n){return 4===n.length}function f(n,t,i){return n<t?t:n>i?i:n}Object.defineProperty(t,"__esModule",{value:!0}),t.create=e,t.clone=function(n){return[n[0],n[1],n[2],n[3]]},t.fromValues=function(n,t,i,r,a){return void 0===a&&(a=e()),a[0]=n,a[1]=t,a[2]=i,a[3]=r,a},t.fromExtent=function(n,t){return void 0===t&&(t=e()),t[0]=n.xmin,t[1]=n.ymin,t[2]=n.xmax,t[3]=n.ymax,t},t.toExtent=function(n,t){return new i.Extent({xmin:n[0],ymin:n[1],xmax:n[2],ymax:n[3],spatialReference:t})},t.expandPointInPlace=function(n,t){t[0]<n[0]&&(n[0]=t[0]),t[0]>n[2]&&(n[2]=t[0]),t[1]<n[1]&&(n[1]=t[1]),t[1]>n[3]&&(n[3]=t[1])},t.expand=function(n,t,i){if(void 0===i&&(i=n),"length"in t)o(t)?(i[0]=Math.min(n[0],t[0]),i[1]=Math.min(n[1],t[1]),i[2]=Math.max(n[2],t[2]),i[3]=Math.max(n[3],t[3])):2!==t.length&&3!==t.length||(i[0]=Math.min(n[0],t[0]),i[1]=Math.min(n[1],t[1]),i[2]=Math.max(n[2],t[0]),i[3]=Math.max(n[3],t[1]));else switch(t.type){case"extent":i[0]=Math.min(n[0],t.xmin),i[1]=Math.min(n[1],t.ymin),i[2]=Math.max(n[2],t.xmax),i[3]=Math.max(n[3],t.ymax);break;case"point":i[0]=Math.min(n[0],t.x),i[1]=Math.min(n[1],t.y),i[2]=Math.max(n[2],t.x),i[3]=Math.max(n[3],t.y)}return i},t.expandWithNestedArray=function(n,t,i){void 0===i&&(i=n);for(var e=t.length,r=n[0],a=n[1],u=n[2],o=n[3],f=0;f<e;f++){var c=t[f];r=Math.min(r,c[0]),a=Math.min(a,c[1]),u=Math.max(u,c[0]),o=Math.max(o,c[1])}return i[0]=r,i[1]=a,i[2]=u,i[3]=o,i},t.allFinite=function(n){for(var t=0;t<4;t++)if(!isFinite(n[t]))return!1;return!0},t.width=r,t.height=a,t.diameter=function(n){var t=r(n),i=a(n);return Math.sqrt(t*t+i*i)},t.area=function(n){return r(n)*a(n)},t.center=function(n,t){return void 0===t&&(t=[0,0]),t[0]=n[0]+r(n)/2,t[1]=n[1]+a(n)/2,t},t.containsPoint=function(n,t){return t[0]>=n[0]&&t[1]>=n[1]&&t[0]<=n[2]&&t[1]<=n[3]},t.containsPointWithMargin=function(n,t,i){return t[0]>=n[0]-i&&t[1]>=n[1]-i&&t[0]<=n[2]+i&&t[1]<=n[3]+i},t.intersects=function(n,t){return Math.max(t[0],n[0])<=Math.min(t[2],n[2])&&Math.max(t[1],n[1])<=Math.min(t[3],n[3])},t.contains=function(n,t){return t[0]>=n[0]&&t[2]<=n[2]&&t[1]>=n[1]&&t[3]<=n[3]},t.intersection=function(n,t,i){void 0===i&&(i=n);var e=t[0],r=t[1],a=t[2],u=t[3];return i[0]=f(n[0],e,a),i[1]=f(n[1],r,u),i[2]=f(n[2],e,a),i[3]=f(n[3],r,u),i},t.offset=function(n,t,i,e){return void 0===e&&(e=n),e[0]=n[0]+t,e[1]=n[1]+i,e[2]=n[2]+t,e[3]=n[3]+i,e},t.pad=function(n,t,i){return void 0===i&&(i=n),i[0]=n[0]-t,i[1]=n[1]-t,i[2]=n[2]+t,i[3]=n[3]+t,i},t.setMin=function(n,t,i){return void 0===i&&(i=n),i[0]=t[0],i[1]=t[1],i!==n&&(i[2]=n[2],i[3]=n[3]),i},t.setMax=function(n,t,i){return void 0===i&&(i=n),i[2]=t[0],i[3]=t[1],i!==n&&(i[0]=n[0],i[1]=n[1]),n},t.set=u,t.empty=function(n){return n?u(n,t.NEGATIVE_INFINITY):e(t.NEGATIVE_INFINITY)},t.is=o,t.isPoint=function(n){return!(0!==r(n)&&isFinite(n[0])||0!==a(n)&&isFinite(n[1]))},t.equals=function(n,t,i){if(null==n||null==t)return n===t;if(!o(n)||!o(t))return!1;if(i){for(var e=0;e<n.length;e++)if(!i(n[e],t[e]))return!1}else for(e=0;e<n.length;e++)if(n[e]!==t[e])return!1;return!0},t.POSITIVE_INFINITY=[-1/0,-1/0,1/0,1/0],t.NEGATIVE_INFINITY=[1/0,1/0,-1/0,-1/0],t.ZERO=[0,0,0,0]}));