// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["require","exports","../SpatialReference","./spatialReferenceUtils"],(function(e,t,n,r){Object.defineProperty(t,"__esModule",{value:!0});function i(e){return 57.29577951308232*e}function o(e){return.017453292519943*e}function a(e){return null!=e.wkid||null!=e.wkt}var l=[0,0];function p(e,t,n,r,i){var o,a,p,s=e,u=i;if("point"===s.type&&"point"===u.type)o=t(s.x,s.y,l,0,r),u.x=o[0],u.y=o[1];else if("extent"===s.type&&"extent"===u.type)a=t(s.xmin,s.ymin,l,0,r),u.xmin=a[0],u.ymin=a[1],p=t(s.xmax,s.ymax,l,0,r),u.xmax=p[0],u.ymax=p[1];else if("polyline"===s.type&&"polyline"===u.type||"polygon"===s.type&&"polygon"===u.type){for(var c="polyline"===s.type?s.paths:s.rings,f=[],y=void 0,v=0;v<c.length;v++){var h=c[v];y=[],f.push(y);for(var x=0;x<h.length;x++)y.push(t(h[x][0],h[x][1],[0,0],0,r)),h[x].length>2&&y[x].push(h[x][2]),h[x].length>3&&y[x].push(h[x][3])}"polyline"===u.type?u.paths=f:u.rings=f}else if("multipoint"===s.type&&"multipoint"===u.type){var g=s.points,d=[];for(v=0;v<g.length;v++)d[v]=t(g[v][0],g[v][1],[0,0],0,r),g[v].length>2&&d[v].push(g[v][2]),g[v].length>3&&d[v].push(g[v][3]);u.points=d}else if("mesh"===s.type&&"mesh"===u.type){var M=s.vertexAttributes&&s.vertexAttributes.position,b=u.vertexAttributes&&u.vertexAttributes.position;if(M){var m=[0,0];for(v=0;v<M.length;v+=3)t(M[v],M[v+1],m,0,r),b[v]=m[0],b[v+1]=m[1]}}return u.spatialReference=n,i}function s(e,t){var n=e&&(a(e)?e:e.spatialReference),i=t&&(a(t)?t:t.spatialReference);return!(!n||!i)&&(!!r.equals(i,n)||(r.isWebMercator(i)&&r.isWGS84(n)||r.isWebMercator(n)&&r.isWGS84(i)))}function u(e,t,n,r){void 0===n&&(n=[0,0]),void 0===r&&(r=0),t>89.99999?t=89.99999:t<-89.99999&&(t=-89.99999);var i=o(t);return n[r]=6378137*o(e),n[r+1]=3189068.5*Math.log((1+Math.sin(i))/(1-Math.sin(i))),n}function c(e,t,n,r,o){void 0===n&&(n=[0,0]),void 0===r&&(r=0),void 0===o&&(o=!1);var a=i(e/6378137);return n[r]=o?a:a-360*Math.floor((a+180)/360),n[r+1]=i(1.5707963267948966-2*Math.atan(Math.exp(-1*t/6378137))),n}t.canProject=s,t.project=function(e,t){var i=e&&e.spatialReference,o=t&&(a(t)?t:t.spatialReference);return s(i,o)?r.equals(i,o)?e.clone():r.isWebMercator(o)?p(e,u,n.WebMercator,!1,e.clone()):r.isWGS84(o)?p(e,c,n.WGS84,!1,e.clone()):null:null},t.lngLatToXY=u,t.xyToLngLat=c,t.geographicToWebMercator=function(e,t,r){return void 0===t&&(t=!1),void 0===r&&(r=e.clone()),p(e,u,n.WebMercator,t,r)},t.webMercatorToGeographic=function(e,t,r){return void 0===t&&(t=!1),void 0===r&&(r=e.clone()),p(e,c,n.WGS84,t,r)}}));