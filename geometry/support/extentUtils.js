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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","./boundsUtils"],(function(n,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getPolylineExtent=t.getPolygonExtent=t.getPointExtent=t.getMultipointExtent=t.getGeometryExtent=void 0;var e=[];function o(n,t,i,e){return{xmin:n,ymin:t,xmax:i,ymax:e}}function r(n,t,i,e,o,r){return{xmin:n,ymin:t,zmin:i,xmax:e,ymax:o,zmax:r}}function u(n,t,i,e,o,r){return{xmin:n,ymin:t,mmin:i,xmax:e,ymax:o,mmax:r}}function x(n,t,i,e,o,r,u,x){return{xmin:n,ymin:t,zmin:i,mmin:e,xmax:o,ymax:r,zmax:u,mmax:x}}function m(n,t,i){return void 0===t&&(t=!1),void 0===i&&(i=!1),t?i?x(n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7]):r(n[0],n[1],n[2],n[3],n[4],n[5]):i?u(n[0],n[1],n[2],n[3],n[4],n[5]):o(n[0],n[1],n[2],n[3])}function a(n){var t=n.hasZ,o=n.hasM,r=n.points;return m(i.getPointsBounds(e,r,t,o),t,o)}function s(n){var t=n.x,i=n.y,e=n.z,m=n.m,a=null!=m;return null!=e?a?x(t,i,e,m,t,i,e,m):r(t,i,e,t,i,e):a?u(t,i,m,t,i,m):o(t,i,t,i)}function l(n){var t=n.hasZ,o=n.hasM,r=n.rings,u=i.getRingsOrPathsBounds(e,r,t,o);return u?m(u,t,o):null}function d(n){var t=n.hasZ,o=n.hasM,r=n.paths,u=i.getRingsOrPathsBounds(e,r,t,o);return u?m(u,t,o):null}t.getGeometryExtent=function(n){return n?void 0!==(t=n).xmin&&void 0!==t.ymin&&void 0!==t.xmax&&void 0!==t.ymax?n:function(n){return void 0!==n.x&&void 0!==n.y}(n)?s(n):function(n){return void 0!==n.rings}(n)?l(n):function(n){return void 0!==n.paths}(n)?d(n):function(n){return void 0!==n.points}(n)?a(n):null:null;var t},t.getMultipointExtent=a,t.getPointExtent=s,t.getPolygonExtent=l,t.getPolylineExtent=d}));