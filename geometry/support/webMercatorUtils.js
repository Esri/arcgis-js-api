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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/lang","../../core/wgs84Constants","../SpatialReference","./spatialReferenceUtils"],(function(e,n,t,i,r,a){Object.defineProperty(n,"__esModule",{value:!0});var o=i.wgs84Radius,s=o/2;function l(e){return 57.29577951308232*e}function u(e){return.017453292519943*e}function c(e){return null!=e.wkid||null!=e.wkt}var p=[0,0];function f(e,n,t,i,r){var a,o,s,l=e,u=r;if("x"in l&&"x"in u)a=n(l.x,l.y,p,i),u.x=a[0],u.y=a[1];else if("xmin"in l&&"xmin"in u)o=n(l.xmin,l.ymin,p,i),u.xmin=o[0],u.ymin=o[1],s=n(l.xmax,l.ymax,p,i),u.xmax=s[0],u.ymax=s[1];else if("paths"in l&&"paths"in u||"rings"in l&&"rings"in u){for(var c=("paths"in l?l.paths:l.rings),f=[],h=void 0,v=0;v<c.length;v++){var g=c[v];h=[],f.push(h);for(var x=0;x<g.length;x++)h.push(n(g[x][0],g[x][1],[0,0],i)),g[x].length>2&&h[x].push(g[x][2]),g[x].length>3&&h[x].push(g[x][3])}"paths"in u?u.paths=f:u.rings=f}else if("points"in l&&"points"in u){var M=l.points,d=[];for(v=0;v<M.length;v++)d[v]=n(M[v][0],M[v][1],[0,0],i),M[v].length>2&&d[v].push(M[v][2]),M[v].length>3&&d[v].push(M[v][3]);u.points=d}else if("type"in l&&"mesh"===l.type&&"type"in u&&"mesh"===u.type){var b=l.vertexAttributes&&l.vertexAttributes.position,m=u.vertexAttributes&&u.vertexAttributes.position;if(b){var y=[0,0];for(v=0;v<b.length;v+=3)n(b[v],b[v+1],y,i),m[v]=y[0],m[v+1]=y[1]}}return u.spatialReference=t,r}function h(e,n){var t=e&&(c(e)?e:e.spatialReference),i=n&&(c(n)?n:n.spatialReference);return!(!t||!i)&&(!!a.equals(i,t)||(a.isWebMercator(i)&&a.isWGS84(t)||a.isWebMercator(t)&&a.isWGS84(i)))}function v(e,n,t){void 0===t&&(t=[0,0]),n>89.99999?n=89.99999:n<-89.99999&&(n=-89.99999);var i=u(n);return t[0]=u(e)*o,t[1]=s*Math.log((1+Math.sin(i))/(1-Math.sin(i))),t}function g(e,n,t,i){void 0===t&&(t=[0,0]),void 0===i&&(i=!1);var r=l(e/o);return t[0]=i?r:r-360*Math.floor((r+180)/360),t[1]=l(Math.PI/2-2*Math.atan(Math.exp(-1*n/o))),t}n.canProject=h,n.project=function(e,n){var i=e&&e.spatialReference,o=n&&(c(n)?n:n.spatialReference);return h(i,o)?a.equals(i,o)?t.clone(e):a.isWebMercator(o)?f(e,v,r.WebMercator,!1,t.clone(e)):a.isWGS84(o)?f(e,g,r.WGS84,!1,t.clone(e)):null:null},n.lngLatToXY=v,n.xyToLngLat=g,n.geographicToWebMercator=function(e,n,i){return void 0===n&&(n=!1),void 0===i&&(i=t.clone(e)),f(e,v,r.WebMercator,n,i)},n.webMercatorToGeographic=function(e,n,i){return void 0===n&&(n=!1),void 0===i&&(i=t.clone(e)),f(e,g,r.WGS84,n,i)}}));