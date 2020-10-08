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

define(["require","exports","./contains"],(function(e,t,n){"use strict";function r(e,t){return n.extentContainsPoint(e,t)}function i(e,t){var n,r,i,o=e.hasZ&&t.hasZ;if(e.xmin<=t.xmin){if(n=t.xmin,e.xmax<n)return!1}else if(n=e.xmin,t.xmax<n)return!1;if(e.ymin<=t.ymin){if(r=t.ymin,e.ymax<r)return!1}else if(r=e.ymin,t.ymax<r)return!1;if(o&&t.hasZ)if(e.zmin<=t.zmin){if(i=t.zmin,e.zmax<i)return!1}else if(i=e.zmin,t.zmax<i)return!1;return!0}function o(e,t){for(var r=t.points,i=t.hasZ?n.extentContainsCoords3D:n.extentContainsCoords2D,o=0,s=r;o<s.length;o++){if(i(e,s[o]))return!0}return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.getExtentIntersector=t.segmentIntersects=t.isSelfIntersecting=t.extentIntersectsPolyline=t.extentIntersectsPolygon=t.extentIntersectsMultipoint=t.extentIntersectsExtent=t.extentIntersectsPoint=void 0,t.extentIntersectsPoint=r,t.extentIntersectsExtent=i,t.extentIntersectsMultipoint=o;var s=[0,0],a=[0,0],x=[0,0],f=[0,0],u=[s,a,x,f],m=[[x,s],[s,a],[a,f],[f,x]];function c(e,t){s[0]=e.xmin,s[1]=e.ymax,a[0]=e.xmax,a[1]=e.ymax,x[0]=e.xmin,x[1]=e.ymin,f[0]=e.xmax,f[1]=e.ymin;for(var r=0,i=u;r<i.length;r++){var o=i[r];if(n.polygonContainsCoords(t,o))return!0}for(var c=0,l=t.rings;c<l.length;c++){var v=l[c];if(v.length){var g=v[0];if(n.extentContainsCoords2D(e,g))return!0;for(var h=1;h<v.length;h++){var I=v[h];if(n.extentContainsCoords2D(e,I)||y(g,I,m))return!0;g=I}}}return!1}function l(e,t){s[0]=e.xmin,s[1]=e.ymax,a[0]=e.xmax,a[1]=e.ymax,x[0]=e.xmin,x[1]=e.ymin,f[0]=e.xmax,f[1]=e.ymin;for(var r=t.paths,i=0,o=r;i<o.length;i++){var u=o[i];if(r.length){var c=u[0];if(n.extentContainsCoords2D(e,c))return!0;for(var l=1;l<u.length;l++){var v=u[l];if(n.extentContainsCoords2D(e,v)||y(c,v,m))return!0;c=v}}}return!1}t.extentIntersectsPolygon=c,t.extentIntersectsPolyline=l;var v=[0,0];function y(e,t,n){for(var r=0;r<n.length;r++)if(g(e,t,n[r][0],n[r][1]))return!0;return!1}function g(e,t,n,r,i){var o=e[0],s=e[1],a=t[0],x=t[1],f=n[0],u=n[1],m=r[0]-f,c=o-f,l=a-o,v=r[1]-u,y=s-u,g=x-s,h=v*l-m*g;if(0===h)return!1;var I=(m*y-v*c)/h,C=(l*y-g*c)/h;return I>=0&&I<=1&&C>=0&&C<=1&&(i&&(i[0]=o+I*(a-o),i[1]=s+I*(x-s)),!0)}t.isSelfIntersecting=function(e){for(var t=0;t<e.length;t++){for(var n=e[t],r=0;r<n.length-1;r++)for(var i=n[r],o=n[r+1],s=t+1;s<e.length;s++)for(var a=0;a<e[s].length-1;a++){if(g(i,o,u=e[s][a],m=e[s][a+1],v)&&!(v[0]===i[0]&&v[1]===i[1]||v[0]===u[0]&&v[1]===u[1]||v[0]===o[0]&&v[1]===o[1]||v[0]===m[0]&&v[1]===m[1]))return!0}var x=n.length;if(!(x<=4))for(r=0;r<x-3;r++){var f=x-1;0===r&&(f=x-2);for(i=n[r],o=n[r+1],s=r+2;s<f;s++){var u,m;if(g(i,o,u=n[s],m=n[s+1],v)&&!(v[0]===i[0]&&v[1]===i[1]||v[0]===u[0]&&v[1]===u[1]||v[0]===o[0]&&v[1]===o[1]||v[0]===m[0]&&v[1]===m[1]))return!0}}}return!1},t.segmentIntersects=g,t.getExtentIntersector=function(e){switch(e){case"esriGeometryEnvelope":case"extent":return i;case"esriGeometryMultipoint":case"multipoint":return o;case"esriGeometryPoint":case"point":return r;case"esriGeometryPolygon":case"polygon":return c;case"esriGeometryPolyline":case"polyline":return l;case"mesh":return i}}}));