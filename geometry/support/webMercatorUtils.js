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

define(["require","exports","../../core/lang","../SpatialReference","./geodesicConstants","./spatialReferenceUtils"],(function(e,t,n,r,i,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.webMercatorToGeographic=t.geographicToWebMercator=t.xyToLngLat=t.lngLatToXY=t.project=t.canProject=void 0;function o(e){return 57.29577951308232*e}function s(e){return.017453292519943*e}function c(e){return null!=e.wkid||null!=e.wkt}var u=[0,0];function l(e,t,n,r,i){var a,o,s,c=e,l=i;if("x"in c&&"x"in l)a=t(c.x,c.y,u,r),l.x=a[0],l.y=a[1];else if("xmin"in c&&"xmin"in l)o=t(c.xmin,c.ymin,u,r),l.xmin=o[0],l.ymin=o[1],s=t(c.xmax,c.ymax,u,r),l.xmax=s[0],l.ymax=s[1];else if("paths"in c&&"paths"in l||"rings"in c&&"rings"in l){for(var h=("paths"in c?c.paths:c.rings),p=[],f=void 0,v=0;v<h.length;v++){var g=h[v];f=[],p.push(f);for(var x=0;x<g.length;x++)f.push(t(g[x][0],g[x][1],[0,0],r)),g[x].length>2&&f[x].push(g[x][2]),g[x].length>3&&f[x].push(g[x][3])}"paths"in l?l.paths=p:l.rings=p}else if("points"in c&&"points"in l){var d=c.points,M=[];for(v=0;v<d.length;v++)M[v]=t(d[v][0],d[v][1],[0,0],r),d[v].length>2&&M[v].push(d[v][2]),d[v].length>3&&M[v].push(d[v][3]);l.points=M}else if("type"in c&&"mesh"===c.type&&"type"in l&&"mesh"===l.type){var b=c.vertexAttributes&&c.vertexAttributes.position,y=l.vertexAttributes&&l.vertexAttributes.position;if(b){var m=[0,0];for(v=0;v<b.length;v+=3)t(b[v],b[v+1],m,r),y[v]=m[0],y[v+1]=m[1]}}return l.spatialReference=n,i}function h(e,t){var n=e&&(c(e)?e:e.spatialReference),r=t&&(c(t)?t:t.spatialReference);return!(!n||!r)&&(!!a.equals(r,n)||(a.isWebMercator(r)&&a.isWGS84(n)||a.isWebMercator(n)&&a.isWGS84(r)))}function p(e,t,n){void 0===n&&(n=[0,0]),t>89.99999?t=89.99999:t<-89.99999&&(t=-89.99999);var r=s(t);return n[0]=s(e)*i.earthRadius,n[1]=i.halfEarthRadius*Math.log((1+Math.sin(r))/(1-Math.sin(r))),n}function f(e,t,n,r){void 0===n&&(n=[0,0]),void 0===r&&(r=!1);var a=o(e/i.earthRadius);return n[0]=r?a:a-360*Math.floor((a+180)/360),n[1]=o(Math.PI/2-2*Math.atan(Math.exp(-1*t/i.earthRadius))),n}t.canProject=h,t.project=function(e,t){var i=e&&e.spatialReference,o=t&&(c(t)?t:t.spatialReference);return h(i,o)?a.equals(i,o)?n.clone(e):a.isWebMercator(o)?l(e,p,r.WebMercator,!1,n.clone(e)):a.isWGS84(o)?l(e,f,r.WGS84,!1,n.clone(e)):null:null},t.lngLatToXY=p,t.xyToLngLat=f,t.geographicToWebMercator=function(e,t,i){return void 0===t&&(t=!1),void 0===i&&(i=n.clone(e)),l(e,p,r.WebMercator,t,i)},t.webMercatorToGeographic=function(e,t,i){return void 0===t&&(t=!1),void 0===i&&(i=n.clone(e)),l(e,f,r.WGS84,t,i)}}));