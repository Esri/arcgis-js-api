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

define(["require","exports","./boundsUtils"],function(n,t,i){function r(n){return void 0!==n.xmin&&void 0!==n.ymin&&void 0!==n.xmax&&void 0!==n.ymax}function e(n){return void 0!==n.points}function o(n){return void 0!==n.x&&void 0!==n.y}function u(n){return void 0!==n.paths}function m(n){return void 0!==n.rings}function x(n,t,i,r){return{xmin:n,ymin:t,xmax:i,ymax:r}}function a(n,t,i,r,e,o){return{xmin:n,ymin:t,zmin:i,xmax:r,ymax:e,zmax:o}}function s(n,t,i,r,e,o){return{xmin:n,ymin:t,mmin:i,xmax:r,ymax:e,mmax:o}}function d(n,t,i,r,e,o,u,m){return{xmin:n,ymin:t,zmin:i,mmin:r,xmax:e,ymax:o,zmax:u,mmax:m}}function f(n,t,i){return void 0===t&&(t=!1),void 0===i&&(i=!1),t?i?d(n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7]):a(n[0],n[1],n[2],n[3],n[4],n[5]):i?s(n[0],n[1],n[2],n[3],n[4],n[5]):x(n[0],n[1],n[2],n[3])}function c(n){return n?r(n)?n:o(n)?y(n):m(n)?l(n):u(n)?g(n):e(n)?v(n):null:null}function v(n){var t=n.hasZ,r=n.hasM,e=n.points;return f(i.getPointsBounds(h,e,t,r),t,r)}function y(n){var t=n.x,i=n.y,r=n.z,e=n.m,o=null!=r,u=null!=e;return o?u?d(t,i,r,e,t,i,r,e):a(t,i,r,t,i,r):u?s(t,i,e,t,i,e):x(t,i,t,i)}function l(n){var t=n.hasZ,r=n.hasM,e=n.rings;return f(i.getRingsOrPathsBounds(h,e,t,r),t,r)}function g(n){var t=n.hasZ,r=n.hasM,e=n.paths;return f(i.getRingsOrPathsBounds(h,e,t,r),t,r)}Object.defineProperty(t,"__esModule",{value:!0});var h=[];t.getGeometryExtent=c,t.getMultipointExtent=v,t.getPointExtent=y,t.getPolygonExtent=l,t.getPolylineExtent=g});