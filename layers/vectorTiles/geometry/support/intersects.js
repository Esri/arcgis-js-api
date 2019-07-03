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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["require","exports","./contains"],function(n,e,r){function t(n,e){return r.extentContainsPoint(n,e)}function i(n,e){var r,t,i,o=n.hasZ&&e.hasZ;if(n.xmin<=e.xmin){if(r=e.xmin,n.xmax<r)return!1}else if(r=n.xmin,e.xmax<r)return!1;if(n.ymin<=e.ymin){if(t=e.ymin,n.ymax<t)return!1}else if(t=n.ymin,e.ymax<t)return!1;if(o&&e.hasZ)if(n.zmin<=e.zmin){if(i=e.zmin,n.zmax<i)return!1}else if(i=n.zmin,e.zmax<i)return!1;return!0}function o(n,e){for(var t=e.points,i=e.hasZ,o=i?r.extentContainsCoords3D:r.extentContainsCoords2D,a=0,s=t;a<s.length;a++){if(o(n,s[a]))return!0}return!1}function a(n,e){l[0]=n.xmin,l[1]=n.ymax,c[0]=n.xmax,c[1]=n.ymax,v[0]=n.xmin,v[1]=n.ymin,y[0]=n.xmax,y[1]=n.ymin;for(var t=0,i=g;t<i.length;t++){var o=i[t];if(r.polygonContainsCoords(e,o))return!0}for(var a=0,s=e.rings;a<s.length;a++){var f=s[a];if(f.length){var x=f[0];if(r.extentContainsCoords2D(n,x))return!0;for(var m=1;m<f.length;m++){var C=f[m];if(r.extentContainsCoords2D(n,C)||u(x,C,h))return!0;x=C}}}return!1}function s(n,e){l[0]=n.xmin,l[1]=n.ymax,c[0]=n.xmax,c[1]=n.ymax,v[0]=n.xmin,v[1]=n.ymin,y[0]=n.xmax,y[1]=n.ymin;for(var t=e.paths,i=0,o=t;i<o.length;i++){var a=o[i];if(t.length){var s=a[0];if(r.extentContainsCoords2D(n,s))return!0;for(var f=1;f<a.length;f++){var x=a[f];if(r.extentContainsCoords2D(n,x)||u(s,x,h))return!0;s=x}}}return!1}function f(n){for(var e=0;e<n.length;e++){for(var r=n[e],t=0;t<r.length-1;t++)for(var i=r[t],o=r[t+1],a=e+1;a<n.length;a++)for(var s=0;s<n[a].length-1;s++){var f=n[a][s],u=n[a][s+1],m=x(i,o,f,u,C);if(m&&!(C[0]===i[0]&&C[1]===i[1]||C[0]===f[0]&&C[1]===f[1]||C[0]===o[0]&&C[1]===o[1]||C[0]===u[0]&&C[1]===u[1]))return!0}var l=r.length;if(!(l<=4))for(var t=0;t<l-3;t++){var c=l-1;0===t&&(c=l-2);for(var i=r[t],o=r[t+1],a=t+2;a<c;a++){var f=r[a],u=r[a+1],m=x(i,o,f,u,C);if(m&&!(C[0]===i[0]&&C[1]===i[1]||C[0]===f[0]&&C[1]===f[1]||C[0]===o[0]&&C[1]===o[1]||C[0]===u[0]&&C[1]===u[1]))return!0}}}return!1}function u(n,e,r){for(var t=0;t<r.length;t++)if(x(n,e,r[t][0],r[t][1]))return!0;return!1}function x(n,e,r,t,i){var o=n[0],a=n[1],s=e[0],f=e[1],u=r[0],x=r[1],m=t[0],l=t[1],c=m-u,v=o-u,y=s-o,g=l-x,h=a-x,C=f-a,p=g*y-c*C;if(0===p)return!1;var d=(c*h-g*v)/p,I=(y*h-C*v)/p;return d>=0&&d<=1&&I>=0&&I<=1&&(i&&(i[0]=o+d*(s-o),i[1]=a+d*(f-a)),!0)}function m(n){switch(n){case"esriGeometryEnvelope":case"extent":return i;case"esriGeometryMultipoint":case"multipoint":return o;case"esriGeometryPoint":case"point":return t;case"esriGeometryPolygon":case"polygon":return a;case"esriGeometryPolyline":case"polyline":return s;case"mesh":return i}}Object.defineProperty(e,"__esModule",{value:!0}),e.extentIntersectsPoint=t,e.extentIntersectsExtent=i,e.extentIntersectsMultipoint=o;var l=[0,0],c=[0,0],v=[0,0],y=[0,0],g=[l,c,v,y],h=[[v,l],[l,c],[c,y],[y,v]];e.extentIntersectsPolygon=a,e.extentIntersectsPolyline=s;var C=[0,0];e.isSelfIntersecting=f,e.segmentIntersects=x,e.getExtentIntersector=m});