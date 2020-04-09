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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["require","exports","./contains"],(function(n,e,t){function r(n,e){return t.extentContainsPoint(n,e)}function i(n,e){var t,r,i,o=n.hasZ&&e.hasZ;if(n.xmin<=e.xmin){if(t=e.xmin,n.xmax<t)return!1}else if(t=n.xmin,e.xmax<t)return!1;if(n.ymin<=e.ymin){if(r=e.ymin,n.ymax<r)return!1}else if(r=n.ymin,e.ymax<r)return!1;if(o&&e.hasZ)if(n.zmin<=e.zmin){if(i=e.zmin,n.zmax<i)return!1}else if(i=n.zmin,e.zmax<i)return!1;return!0}function o(n,e){for(var r=e.points,i=e.hasZ?t.extentContainsCoords3D:t.extentContainsCoords2D,o=0,a=r;o<a.length;o++){if(i(n,a[o]))return!0}return!1}Object.defineProperty(e,"__esModule",{value:!0}),e.extentIntersectsPoint=r,e.extentIntersectsExtent=i,e.extentIntersectsMultipoint=o;var a=[0,0],s=[0,0],f=[0,0],u=[0,0],x=[a,s,f,u],m=[[f,a],[a,s],[s,u],[u,f]];function l(n,e){a[0]=n.xmin,a[1]=n.ymax,s[0]=n.xmax,s[1]=n.ymax,f[0]=n.xmin,f[1]=n.ymin,u[0]=n.xmax,u[1]=n.ymin;for(var r=0,i=x;r<i.length;r++){var o=i[r];if(t.polygonContainsCoords(e,o))return!0}for(var l=0,c=e.rings;l<c.length;l++){var v=c[l];if(v.length){var g=v[0];if(t.extentContainsCoords2D(n,g))return!0;for(var h=1;h<v.length;h++){var C=v[h];if(t.extentContainsCoords2D(n,C)||y(g,C,m))return!0;g=C}}}return!1}function c(n,e){a[0]=n.xmin,a[1]=n.ymax,s[0]=n.xmax,s[1]=n.ymax,f[0]=n.xmin,f[1]=n.ymin,u[0]=n.xmax,u[1]=n.ymin;for(var r=e.paths,i=0,o=r;i<o.length;i++){var x=o[i];if(r.length){var l=x[0];if(t.extentContainsCoords2D(n,l))return!0;for(var c=1;c<x.length;c++){var v=x[c];if(t.extentContainsCoords2D(n,v)||y(l,v,m))return!0;l=v}}}return!1}e.extentIntersectsPolygon=l,e.extentIntersectsPolyline=c;var v=[0,0];function y(n,e,t){for(var r=0;r<t.length;r++)if(g(n,e,t[r][0],t[r][1]))return!0;return!1}function g(n,e,t,r,i){var o=n[0],a=n[1],s=e[0],f=e[1],u=t[0],x=t[1],m=r[0]-u,l=o-u,c=s-o,v=r[1]-x,y=a-x,g=f-a,h=v*c-m*g;if(0===h)return!1;var C=(m*y-v*l)/h,p=(c*y-g*l)/h;return C>=0&&C<=1&&p>=0&&p<=1&&(i&&(i[0]=o+C*(s-o),i[1]=a+C*(f-a)),!0)}e.isSelfIntersecting=function(n){for(var e=0;e<n.length;e++){for(var t=n[e],r=0;r<t.length-1;r++)for(var i=t[r],o=t[r+1],a=e+1;a<n.length;a++)for(var s=0;s<n[a].length-1;s++){if(g(i,o,x=n[a][s],m=n[a][s+1],v)&&!(v[0]===i[0]&&v[1]===i[1]||v[0]===x[0]&&v[1]===x[1]||v[0]===o[0]&&v[1]===o[1]||v[0]===m[0]&&v[1]===m[1]))return!0}var f=t.length;if(!(f<=4))for(r=0;r<f-3;r++){var u=f-1;0===r&&(u=f-2);for(i=t[r],o=t[r+1],a=r+2;a<u;a++){var x,m;if(g(i,o,x=t[a],m=t[a+1],v)&&!(v[0]===i[0]&&v[1]===i[1]||v[0]===x[0]&&v[1]===x[1]||v[0]===o[0]&&v[1]===o[1]||v[0]===m[0]&&v[1]===m[1]))return!0}}}return!1},e.segmentIntersects=g,e.getExtentIntersector=function(n){switch(n){case"esriGeometryEnvelope":case"extent":return i;case"esriGeometryMultipoint":case"multipoint":return o;case"esriGeometryPoint":case"point":return r;case"esriGeometryPolygon":case"polygon":return l;case"esriGeometryPolyline":case"polyline":return c;case"mesh":return i}}}));