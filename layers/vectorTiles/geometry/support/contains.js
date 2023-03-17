// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["require","exports"],(function(n,t){Object.defineProperty(t,"__esModule",{value:!0});var r=[0,0];function e(n,t,r,e){return t>=n.xmin&&t<=n.xmax&&r>=n.ymin&&r<=n.ymax&&(null==e||!n.hasZ||e>=n.zmin&&e<=n.zmax)}function o(n,t){return function(n,t){if(!n)return!1;if(function(n){return!Array.isArray(n[0][0])}(n))return i(!1,n,t);for(var r=!1,e=0,o=n.length;e<o;e++)r=i(r,n[e],t);return r}(n.rings,t)}function i(n,t,r){for(var e=r[0],o=r[1],i=n,u=0,a=0,x=t.length;a<x;a++){++u===x&&(u=0);var f=t[a],s=f[0],c=f[1],m=t[u],y=m[0],C=m[1];(c<o&&C>=o||C<o&&c>=o)&&s+(o-c)/(C-c)*(y-s)<e&&(i=!i)}return i}t.extentContainsPoint=function(n,t){return e(n,t.x,t.y,t.z)},t.extentContainsExtent=function(n,t){var r=t.xmin,o=t.ymin,i=t.zmin,u=t.xmax,a=t.ymax,x=t.zmax;return n.hasZ&&t.hasZ?e(n,r,o,i)&&e(n,r,a,i)&&e(n,u,a,i)&&e(n,u,o,i)&&e(n,r,o,x)&&e(n,r,a,x)&&e(n,u,a,x)&&e(n,u,o,x):e(n,r,o)&&e(n,r,a)&&e(n,u,a)&&e(n,u,o)},t.extentContainsCoords2D=function(n,t){return e(n,t[0],t[1])},t.extentContainsCoords3D=function(n,t){return e(n,t[0],t[1],t[2])},t.polygonContainsPoint=function(n,t){return r[0]=t.x,r[1]=t.y,o(n,[t.x,t.y])},t.polygonContainsCoords=o}));