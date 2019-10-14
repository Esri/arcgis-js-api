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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["require","exports"],function(n,t){function r(n,t){return u(n,t.x,t.y,t.z)}function e(n,t){var r=t.xmin,e=t.ymin,o=t.zmin,i=t.xmax,a=t.ymax,x=t.zmax;return n.hasZ&&t.hasZ?u(n,r,e,o)&&u(n,r,a,o)&&u(n,i,a,o)&&u(n,i,e,o)&&u(n,r,e,x)&&u(n,r,a,x)&&u(n,i,a,x)&&u(n,i,e,x):u(n,r,e)&&u(n,r,a)&&u(n,i,a)&&u(n,i,e)}function o(n,t){return u(n,t[0],t[1])}function i(n,t){return u(n,t[0],t[1],t[2])}function u(n,t,r,e){return t>=n.xmin&&t<=n.xmax&&r>=n.ymin&&r<=n.ymax&&(null==e||!n.hasZ||e>=n.zmin&&e<=n.zmax)}function a(n,t){return m[0]=t.x,m[1]=t.y,x(n,[t.x,t.y])}function x(n,t){return f(n.rings,t)}function f(n,t){if(!n)return!1;if(s(n))return c(!1,n,t);for(var r=!1,e=0,o=n.length;e<o;e++)r=c(r,n[e],t);return r}function s(n){return!Array.isArray(n[0][0])}function c(n,t,r){for(var e=r[0],o=r[1],i=n,u=0,a=0,x=t.length;a<x;a++){u++,u===x&&(u=0);var f=t[a],s=f[0],c=f[1],m=t[u],y=m[0],C=m[1];(c<o&&C>=o||C<o&&c>=o)&&s+(o-c)/(C-c)*(y-s)<e&&(i=!i)}return i}Object.defineProperty(t,"__esModule",{value:!0});var m=[0,0];t.extentContainsPoint=r,t.extentContainsExtent=e,t.extentContainsCoords2D=o,t.extentContainsCoords3D=i,t.polygonContainsPoint=a,t.polygonContainsCoords=x});