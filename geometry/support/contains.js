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

define(["require","exports"],(function(n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.polygonContainsCoords=t.polygonContainsPoint=t.extentContainsCoords3D=t.extentContainsCoords2D=t.extentContainsExtent=t.extentContainsMultipoint=t.extentContainsPoint=void 0;var o=[0,0];function r(n,t){return e(n,t[0],t[1])}function e(n,t,o,r){return t>=n.xmin&&t<=n.xmax&&o>=n.ymin&&o<=n.ymax&&(null==r||!n.hasZ||r>=n.zmin&&r<=n.zmax)}function i(n,t){return function(n,t){if(!n)return!1;if(function(n){return!Array.isArray(n[0][0])}(n))return u(!1,n,t);for(var o=!1,r=0,e=n.length;r<e;r++)o=u(o,n[r],t);return o}(n.rings,t)}function u(n,t,o){for(var r=o[0],e=o[1],i=n,u=0,a=0,s=t.length;a<s;a++){++u===s&&(u=0);var x=t[a],f=x[0],C=x[1],c=t[u],l=c[0],y=c[1];(C<e&&y>=e||y<e&&C>=e)&&f+(e-C)/(y-C)*(l-f)<r&&(i=!i)}return i}t.extentContainsPoint=function(n,t){return e(n,t.x,t.y,t.z)},t.extentContainsMultipoint=function(n,t){if(!t.points||t.points.length)return!1;for(var o=0,e=t.points;o<e.length;o++){if(!r(n,e[o]))return!1}return!0},t.extentContainsExtent=function(n,t){var o=t.xmin,r=t.ymin,i=t.zmin,u=t.xmax,a=t.ymax,s=t.zmax;return n.hasZ&&t.hasZ?e(n,o,r,i)&&e(n,o,a,i)&&e(n,u,a,i)&&e(n,u,r,i)&&e(n,o,r,s)&&e(n,o,a,s)&&e(n,u,a,s)&&e(n,u,r,s):e(n,o,r)&&e(n,o,a)&&e(n,u,a)&&e(n,u,r)},t.extentContainsCoords2D=r,t.extentContainsCoords3D=function(n,t){return e(n,t[0],t[1],t[2])},t.polygonContainsPoint=function(n,t){return o[1]=t.y,o[0]=t.x,i(n,o)},t.polygonContainsCoords=i}));