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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports"],(function(n,t){Object.defineProperty(t,"__esModule",{value:!0});var r=[0,0];function e(n,t){return i(n,t[0],t[1])}function i(n,t,r,e){return t>=n.xmin&&t<=n.xmax&&r>=n.ymin&&r<=n.ymax&&(null==e||!n.hasZ||e>=n.zmin&&e<=n.zmax)}function o(n,t){return function(n,t){if(!n)return!1;if(function(n){return!Array.isArray(n[0][0])}(n))return u(!1,n,t);for(var r=!1,e=0,i=n.length;e<i;e++)r=u(r,n[e],t);return r}(n.rings,t)}function u(n,t,r){for(var e=r[0],i=r[1],o=n,u=0,a=0,f=t.length;a<f;a++){++u===f&&(u=0);var s=t[a],x=s[0],c=s[1],m=t[u],l=m[0],y=m[1];(c<i&&y>=i||y<i&&c>=i)&&x+(i-c)/(y-c)*(l-x)<e&&(o=!o)}return o}t.extentContainsPoint=function(n,t){return i(n,t.x,t.y,t.z)},t.extentContainsMultipoint=function(n,t){if(!t.points||t.points.length)return!1;for(var r=0,i=t.points;r<i.length;r++){if(!e(n,i[r]))return!1}return!0},t.extentContainsExtent=function(n,t){var r=t.xmin,e=t.ymin,o=t.zmin,u=t.xmax,a=t.ymax,f=t.zmax;return n.hasZ&&t.hasZ?i(n,r,e,o)&&i(n,r,a,o)&&i(n,u,a,o)&&i(n,u,e,o)&&i(n,r,e,f)&&i(n,r,a,f)&&i(n,u,a,f)&&i(n,u,e,f):i(n,r,e)&&i(n,r,a)&&i(n,u,a)&&i(n,u,e)},t.extentContainsCoords2D=e,t.extentContainsCoords3D=function(n,t){return i(n,t[0],t[1],t[2])},t.polygonContainsPoint=function(n,t){return r[1]=t.y,r[0]=t.x,o(n,r)},t.polygonContainsCoords=o}));