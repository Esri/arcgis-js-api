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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["require","exports","../SpatialReference","./spatialReferenceUtils"],function(e,t,n,r){function i(e){return e*x}function o(e){return e*g}function a(e){return null!=e.wkid||null!=e.wkt}function l(e,t,n,r,i){var o=e,a=i;if("point"===o.type&&"point"===a.type)M=t(o.x,o.y,d,0,r),a.x=M[0],a.y=M[1];else if("extent"===o.type&&"extent"===a.type)b=t(o.xmin,o.ymin,d,0,r),a.xmin=b[0],a.ymin=b[1],m=t(o.xmax,o.ymax,d,0,r),a.xmax=m[0],a.ymax=m[1];else if("polyline"===o.type&&"polyline"===a.type||"polygon"===o.type&&"polygon"===a.type){for(var l="polyline"===o.type?o.paths:o.rings,p=[],s=void 0,u=0;u<l.length;u++){var c=l[u];s=[],p.push(s);for(var f=0;f<c.length;f++)s.push(t(c[f][0],c[f][1],[0,0],0,r)),c[f].length>2&&s[f].push(c[f][2]),c[f].length>3&&s[f].push(c[f][3])}"polyline"===a.type?a.paths=p:a.rings=p}else if("multipoint"===o.type&&"multipoint"===a.type){for(var v=o.points,y=[],u=0;u<v.length;u++)y[u]=t(v[u][0],v[u][1],[0,0],0,r),v[u].length>2&&y[u].push(v[u][2]),v[u].length>3&&y[u].push(v[u][3]);a.points=y}else if("mesh"===o.type&&"mesh"===a.type){var h=o.vertexAttributes&&o.vertexAttributes.position,x=a.vertexAttributes&&a.vertexAttributes.position;if(h)for(var g=[0,0],u=0;u<h.length;u+=3)t(h[u],h[u+1],g,0,r),x[u]=g[0],x[u+1]=g[1]}return a.spatialReference=n,i;var M,b,m}function p(e,t){var n=e&&(a(e)?e:e.spatialReference),i=t&&(a(t)?t:t.spatialReference);return!(!n||!i)&&(!!r.equals(i,n)||(r.isWebMercator(i)&&r.isWGS84(n)||r.isWebMercator(n)&&r.isWGS84(i)))}function s(e,t){var i=e&&e.spatialReference,o=t&&(a(t)?t:t.spatialReference);return p(i,o)?r.equals(i,o)?e.clone():r.isWebMercator(o)?l(e,u,n.WebMercator,!1,e.clone()):r.isWGS84(o)?l(e,c,n.WGS84,!1,e.clone()):null:null}function u(e,t,n,r){void 0===n&&(n=[0,0]),void 0===r&&(r=0),t>89.99999?t=89.99999:t<-89.99999&&(t=-89.99999);var i=o(t);return n[r]=o(e)*y,n[r+1]=.5*y*Math.log((1+Math.sin(i))/(1-Math.sin(i))),n}function c(e,t,n,r,o){void 0===n&&(n=[0,0]),void 0===r&&(r=0),void 0===o&&(o=!1);var a=i(e/y);return n[r]=o?a:a-360*Math.floor((a+180)/360),n[r+1]=i(h/2-2*Math.atan(Math.exp(-1*t/y))),n}function f(e,t,r){return void 0===t&&(t=!1),void 0===r&&(r=e.clone()),l(e,u,n.WebMercator,t,r)}function v(e,t,r){return void 0===t&&(t=!1),void 0===r&&(r=e.clone()),l(e,c,n.WGS84,t,r)}Object.defineProperty(t,"__esModule",{value:!0});var y=6378137,h=3.141592653589793,x=57.29577951308232,g=.017453292519943,d=[0,0];t.canProject=p,t.project=s,t.lngLatToXY=u,t.xyToLngLat=c,t.geographicToWebMercator=f,t.webMercatorToGeographic=v});