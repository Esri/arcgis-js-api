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

define(["require","exports","./boundsUtils"],(function(n,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r=[];function u(n,t,i,r){return{xmin:n,ymin:t,xmax:i,ymax:r}}function e(n,t,i,r,u,e){return{xmin:n,ymin:t,zmin:i,xmax:r,ymax:u,zmax:e}}function o(n,t,i,r,u,e){return{xmin:n,ymin:t,mmin:i,xmax:r,ymax:u,mmax:e}}function m(n,t,i,r,u,e,o,m){return{xmin:n,ymin:t,zmin:i,mmin:r,xmax:u,ymax:e,zmax:o,mmax:m}}function x(n,t,i){return void 0===t&&(t=!1),void 0===i&&(i=!1),t?i?m(n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7]):e(n[0],n[1],n[2],n[3],n[4],n[5]):i?o(n[0],n[1],n[2],n[3],n[4],n[5]):u(n[0],n[1],n[2],n[3])}function a(n){var t=n.hasZ,u=n.hasM,e=n.points;return x(i.getPointsBounds(r,e,t,u),t,u)}function s(n){var t=n.x,i=n.y,r=n.z,x=n.m,a=null!=x;return null!=r?a?m(t,i,r,x,t,i,r,x):e(t,i,r,t,i,r):a?o(t,i,x,t,i,x):u(t,i,t,i)}function l(n){var t=n.hasZ,u=n.hasM,e=n.rings,o=i.getRingsOrPathsBounds(r,e,t,u);return o?x(o,t,u):null}function d(n){var t=n.hasZ,u=n.hasM,e=n.paths,o=i.getRingsOrPathsBounds(r,e,t,u);return o?x(o,t,u):null}t.getGeometryExtent=function(n){return n?void 0!==(t=n).xmin&&void 0!==t.ymin&&void 0!==t.xmax&&void 0!==t.ymax?n:function(n){return void 0!==n.x&&void 0!==n.y}(n)?s(n):function(n){return void 0!==n.rings}(n)?l(n):function(n){return void 0!==n.paths}(n)?d(n):function(n){return void 0!==n.points}(n)?a(n):null:null;var t},t.getMultipointExtent=a,t.getPointExtent=s,t.getPolygonExtent=l,t.getPolylineExtent=d}));