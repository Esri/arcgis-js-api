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

define(["require","exports"],function(n,t){function r(n,t){return a(n,t.x,t.y,t.z)}function e(n,t){if(!t.points||t.points.length)return!1;for(var r=0,e=t.points;r<e.length;r++){if(!o(n,e[r]))return!1}return!0}function i(n,t){var r=t.xmin,e=t.ymin,i=t.zmin,o=t.xmax,u=t.ymax,f=t.zmax;return n.hasZ&&t.hasZ?a(n,r,e,i)&&a(n,r,u,i)&&a(n,o,u,i)&&a(n,o,e,i)&&a(n,r,e,f)&&a(n,r,u,f)&&a(n,o,u,f)&&a(n,o,e,f):a(n,r,e)&&a(n,r,u)&&a(n,o,u)&&a(n,o,e)}function o(n,t){return a(n,t[0],t[1])}function u(n,t){return a(n,t[0],t[1],t[2])}function a(n,t,r,e){return t>=n.xmin&&t<=n.xmax&&r>=n.ymin&&r<=n.ymax&&(null==e||!n.hasZ||e>=n.zmin&&e<=n.zmax)}function f(n,t){return l[1]=t.y,l[0]=t.x,s(n,l)}function s(n,t){return x(n.rings,t)}function x(n,t){if(!n)return!1;if(c(n))return m(!1,n,t);for(var r=!1,e=0,i=n.length;e<i;e++)r=m(r,n[e],t);return r}function c(n){return!Array.isArray(n[0][0])}function m(n,t,r){for(var e=r[0],i=r[1],o=n,u=0,a=0,f=t.length;a<f;a++){u++,u===f&&(u=0);var s=t[a],x=s[0],c=s[1],m=t[u],l=m[0],y=m[1];(c<i&&y>=i||y<i&&c>=i)&&x+(i-c)/(y-c)*(l-x)<e&&(o=!o)}return o}Object.defineProperty(t,"__esModule",{value:!0});var l=[0,0];t.extentContainsPoint=r,t.extentContainsMultipoint=e,t.extentContainsExtent=i,t.extentContainsCoords2D=o,t.extentContainsCoords3D=u,t.polygonContainsPoint=f,t.polygonContainsCoords=s});