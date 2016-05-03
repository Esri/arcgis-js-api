// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["require","exports","./aaBoundingRect"],function(n,t,i){function a(n){return void 0===n&&(n=t.ZERO),[n[0],n[1],n[2],n[3],n[4],n[5]]}function r(n){return[n.xmin,n.ymin,n.zmin,n.xmax,n.ymax,n.zmax]}function e(n,t,a){void 0===a&&(a=n);var r=t.declaredClass;return"esri.geometry.Extent"===r?(a[0]=Math.min(n[0],t.xmin),a[1]=Math.min(n[1],t.ymin),a[3]=Math.max(n[3],t.xmax),a[4]=Math.max(n[4],t.ymax),t.hasZ&&(a[2]=Math.min(n[2],t.zmin),a[5]=Math.max(n[5],t.zmax))):"esri.geometry.Point"===r?(a[0]=Math.min(n[0],t.x),a[1]=Math.min(n[1],t.y),a[3]=Math.max(n[3],t.x),a[4]=Math.max(n[4],t.y),t.hasZ&&(a[2]=Math.min(n[2],t.z),a[5]=Math.min(n[5],t.z))):y(t)?(a[0]=Math.min(n[0],t[0]),a[1]=Math.min(n[1],t[1]),a[2]=Math.min(n[2],t[2]),a[3]=Math.max(n[3],t[3]),a[4]=Math.max(n[4],t[4]),a[5]=Math.max(n[5],t[5])):i.is(t)?(a[0]=Math.min(n[0],t[0]),a[1]=Math.min(n[1],t[1]),a[3]=Math.max(n[3],t[2]),a[4]=Math.max(n[4],t[3])):Array.isArray(t)&&(2===t.length?(a[0]=Math.min(n[0],t[0]),a[1]=Math.min(n[1],t[1]),a[3]=Math.max(n[3],t[0]),a[4]=Math.max(n[4],t[1])):3===t.length&&(a[0]=Math.min(n[0],t[0]),a[1]=Math.min(n[1],t[1]),a[2]=Math.min(n[2],t[2]),a[3]=Math.max(n[3],t[0]),a[4]=Math.max(n[4],t[1]),a[5]=Math.max(n[5],t[2]))),a}function u(n){for(var t=0;6>t;t++)if(!isFinite(n[t]))return!1;return!0}function m(n){return n[0]>=n[3]?0:n[3]-n[0]}function h(n){return n[1]>=n[4]?0:n[4]-n[1]}function o(n){return n[2]>=n[5]?0:n[5]-n[2]}function M(n,t){return void 0===t&&(t=[0,0,0]),t[0]=n[0]+m(n)/2,t[1]=n[1]+h(n)/2,t[2]=n[2]+o(n)/2,t}function f(n,t){return t[0]>=n[0]&&t[1]>=n[1]&&t[2]>=n[2]&&t[0]<=n[3]&&t[1]<=n[4]&&t[2]<=n[5]}function x(n,t,i){return t[0]>=n[0]-i&&t[1]>=n[1]-i&&t[2]>=n[2]-i&&t[0]<=n[3]+i&&t[1]<=n[4]+i&&t[2]<=n[5]+i}function c(n,t,i,a,r){return void 0===r&&(r=n),r[0]=n[0]+t,r[1]=n[1]+i,r[2]=n[2]+a,r[3]=n[3]+t,r[4]=n[4]+i,r[5]=n[5]+a,r}function s(n,t,i){return void 0===i&&(i=n),i[0]=t[0],i[1]=t[1],i[2]=t[2],i!==n&&(i[3]=n[3],i[4]=n[4],i[5]=n[5]),i}function l(n,t,i){return void 0===i&&(i=n),i[3]=t[0],i[4]=t[1],i[5]=t[2],i!==n&&(i[0]=n[0],i[1]=n[1],i[2]=n[2]),n}function d(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n}function g(n,t){return t||(t=i.create()),t[0]=n[0],t[1]=n[1],t[2]=n[3],t[3]=n[4],t}function v(n,t){return n[0]=t[0],n[1]=t[1],n[3]=t[2],n[4]=t[3],n}function y(n){return 6===n.length}function I(n){return 0===m(n)&&0===h(n)&&0===o(n)}function E(n,t,i){if(null==n||null==t)return n===t;if(!y(n)||!y(t))return!1;if(i){for(var a=0;a<n.length;a++)if(!i(n[a],t[a]))return!1}else for(var a=0;a<n.length;a++)if(n[a]!==t[a])return!1;return!0}t.create=a,t.fromExtent=r,t.expand=e,t.allFinite=u,t.width=m,t.depth=h,t.height=o,t.center=M,t.contains=f,t.containsWithMargin=x,t.offset=c,t.setMin=s,t.setMax=l,t.set=d,t.toRect=g,t.fromRect=v,t.is=y,t.isPoint=I,t.equals=E,t.POSITIVE_INFINITY=[-1/0,-1/0,-1/0,1/0,1/0,1/0],t.NEGATIVE_INFINITY=[1/0,1/0,1/0,-1/0,-1/0,-1/0],t.ZERO=[0,0,0,0,0,0]});