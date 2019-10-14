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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","./boundsUtils"],function(n,t,i){function r(n){return void 0!==n.xmin&&void 0!==n.ymin&&void 0!==n.xmax&&void 0!==n.ymax}function u(n){return void 0!==n.points}function e(n){return void 0!==n.x&&void 0!==n.y}function o(n){return void 0!==n.paths}function m(n){return void 0!==n.rings}function x(n,t,i,r){return{xmin:n,ymin:t,xmax:i,ymax:r}}function a(n,t,i,r,u,e){return{xmin:n,ymin:t,zmin:i,xmax:r,ymax:u,zmax:e}}function s(n,t,i,r,u,e){return{xmin:n,ymin:t,mmin:i,xmax:r,ymax:u,mmax:e}}function l(n,t,i,r,u,e,o,m){return{xmin:n,ymin:t,zmin:i,mmin:r,xmax:u,ymax:e,zmax:o,mmax:m}}function d(n,t,i){return void 0===t&&(t=!1),void 0===i&&(i=!1),t?i?l(n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7]):a(n[0],n[1],n[2],n[3],n[4],n[5]):i?s(n[0],n[1],n[2],n[3],n[4],n[5]):x(n[0],n[1],n[2],n[3])}function f(n){return n?r(n)?n:e(n)?v(n):m(n)?y(n):o(n)?g(n):u(n)?c(n):null:null}function c(n){var t=n.hasZ,r=n.hasM,u=n.points;return d(i.getPointsBounds(h,u,t,r),t,r)}function v(n){var t=n.x,i=n.y,r=n.z,u=n.m,e=null!=r,o=null!=u;return e?o?l(t,i,r,u,t,i,r,u):a(t,i,r,t,i,r):o?s(t,i,u,t,i,u):x(t,i,t,i)}function y(n){var t=n.hasZ,r=n.hasM,u=n.rings,e=i.getRingsOrPathsBounds(h,u,t,r);return e?d(e,t,r):null}function g(n){var t=n.hasZ,r=n.hasM,u=n.paths,e=i.getRingsOrPathsBounds(h,u,t,r);return e?d(e,t,r):null}Object.defineProperty(t,"__esModule",{value:!0});var h=[];t.getGeometryExtent=f,t.getMultipointExtent=c,t.getPointExtent=v,t.getPolygonExtent=y,t.getPolylineExtent=g});