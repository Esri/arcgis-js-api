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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports"],function(n,t){function i(n){return void 0===n&&(n=t.ZERO),[n[0],n[1],n[2],n[3]]}function r(n){return[n.xmin,n.ymin,n.xmax,n.ymax]}function e(n,t,i){void 0===i&&(i=n);var r=t.declaredClass;return"esri.geometry.Extent"===r?(i[0]=Math.min(n[0],t.xmin),i[1]=Math.min(n[1],t.ymin),i[2]=Math.max(n[2],t.xmax),i[3]=Math.max(n[3],t.ymax)):"esri.geometry.Point"===r?(i[0]=Math.min(n[0],t.x),i[1]=Math.min(n[1],t.y),i[2]=Math.max(n[2],t.x),i[3]=Math.max(n[3],t.y)):l(t)?(i[0]=Math.min(n[0],t[0]),i[1]=Math.min(n[1],t[1]),i[2]=Math.max(n[2],t[2]),i[3]=Math.max(n[3],t[3])):Array.isArray(t)&&(2===t.length||3===t.length)&&(i[0]=Math.min(n[0],t[0]),i[1]=Math.min(n[1],t[1]),i[2]=Math.max(n[2],t[0]),i[3]=Math.max(n[3],t[1])),i}function a(n){for(var t=0;4>t;t++)if(!isFinite(n[t]))return!1;return!0}function u(n){return n[0]>=n[2]?0:n[2]-n[0]}function o(n){return n[1]>=n[3]?0:n[3]-n[1]}function f(n,t){return void 0===t&&(t=[0,0]),t[0]=n[0]+u(n)/2,t[1]=n[1]+o(n)/2,t}function m(n,t){return t[0]>=n[0]&&t[1]>=n[1]&&t[0]<=n[2]&&t[1]<=n[3]}function h(n,t,i){return t[0]>=n[0]-i&&t[1]>=n[1]-i&&t[0]<=n[2]+i&&t[1]<=n[3]+i}function x(n,t,i,r){return void 0===r&&(r=n),r[0]=n[0]+t,r[1]=n[1]+i,r[2]=n[2]+t,r[3]=n[3]+i,r}function c(n,t,i){return void 0===i&&(i=n),i[0]=t[0],i[1]=t[1],i!==n&&(i[2]=n[2],i[3]=n[3]),i}function s(n,t,i){return void 0===i&&(i=n),i[2]=t[0],i[3]=t[1],i!==n&&(i[0]=n[0],i[1]=n[1]),n}function M(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n}function l(n){return 4===n.length}function d(n){return!(0!==u(n)&&isFinite(n[0])||0!==o(n)&&isFinite(n[1]))}function v(n,t,i){if(null==n||null==t)return n===t;if(!l(n)||!l(t))return!1;if(i){for(var r=0;r<n.length;r++)if(!i(n[r],t[r]))return!1}else for(var r=0;r<n.length;r++)if(n[r]!==t[r])return!1;return!0}t.create=i,t.fromExtent=r,t.expand=e,t.allFinite=a,t.width=u,t.height=o,t.center=f,t.contains=m,t.containsWithMargin=h,t.offset=x,t.setMin=c,t.setMax=s,t.set=M,t.is=l,t.isPoint=d,t.equals=v,t.NEGATIVE_INFINITY=[1/0,1/0,-(1/0),-(1/0)],t.ZERO=[0,0,0,0]});