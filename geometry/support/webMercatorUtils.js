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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../core/lang","../SpatialReference","./spatialReferenceUtils"],function(e,n,t,i,r){function a(e){return e*d}function o(e){return e*M}function s(e){return null!=e.wkid||null!=e.wkt}function l(e,n,t,i,r){var a,o,s,l=e,u=r;if("x"in l&&"x"in u)a=n(l.x,l.y,b,0,i),u.x=a[0],u.y=a[1];else if("xmin"in l&&"xmin"in u)o=n(l.xmin,l.ymin,b,0,i),u.xmin=o[0],u.ymin=o[1],s=n(l.xmax,l.ymax,b,0,i),u.xmax=s[0],u.ymax=s[1];else if("paths"in l&&"paths"in u||"rings"in l&&"rings"in u){for(var c=("paths"in l?l.paths:l.rings),p=[],f=void 0,h=0;h<c.length;h++){var v=c[h];f=[],p.push(f);for(var x=0;x<v.length;x++)f.push(n(v[x][0],v[x][1],[0,0],0,i)),v[x].length>2&&f[x].push(v[x][2]),v[x].length>3&&f[x].push(v[x][3])}"paths"in u?u.paths=p:u.rings=p}else if("points"in l&&"points"in u){for(var g=l.points,d=[],h=0;h<g.length;h++)d[h]=n(g[h][0],g[h][1],[0,0],0,i),g[h].length>2&&d[h].push(g[h][2]),g[h].length>3&&d[h].push(g[h][3]);u.points=d}else if("type"in l&&"mesh"===l.type&&"type"in u&&"mesh"===u.type){var M=l.vertexAttributes&&l.vertexAttributes.position,m=u.vertexAttributes&&u.vertexAttributes.position;if(M)for(var y=[0,0],h=0;h<M.length;h+=3)n(M[h],M[h+1],y,0,i),m[h]=y[0],m[h+1]=y[1]}return u.spatialReference=t,r}function u(e,n){var t=e&&(s(e)?e:e.spatialReference),i=n&&(s(n)?n:n.spatialReference);return!(!t||!i)&&(!!r.equals(i,t)||(r.isWebMercator(i)&&r.isWGS84(t)||r.isWebMercator(t)&&r.isWGS84(i)))}function c(e,n){var a=e&&e.spatialReference,o=n&&(s(n)?n:n.spatialReference);return u(a,o)?r.equals(a,o)?t.clone(e):r.isWebMercator(o)?l(e,p,i.WebMercator,!1,t.clone(e)):r.isWGS84(o)?l(e,f,i.WGS84,!1,t.clone(e)):null:null}function p(e,n,t,i){void 0===t&&(t=[0,0]),void 0===i&&(i=0),n>89.99999?n=89.99999:n<-89.99999&&(n=-89.99999);var r=o(n);return t[i]=o(e)*x,t[i+1]=.5*x*Math.log((1+Math.sin(r))/(1-Math.sin(r))),t}function f(e,n,t,i,r){void 0===t&&(t=[0,0]),void 0===i&&(i=0),void 0===r&&(r=!1);var o=a(e/x);return t[i]=r?o:o-360*Math.floor((o+180)/360),t[i+1]=a(g/2-2*Math.atan(Math.exp(-1*n/x))),t}function h(e,n,r){return void 0===n&&(n=!1),void 0===r&&(r=t.clone(e)),l(e,p,i.WebMercator,n,r)}function v(e,n,r){return void 0===n&&(n=!1),void 0===r&&(r=t.clone(e)),l(e,f,i.WGS84,n,r)}Object.defineProperty(n,"__esModule",{value:!0});var x=6378137,g=3.141592653589793,d=57.29577951308232,M=.017453292519943,b=[0,0];n.canProject=u,n.project=c,n.lngLatToXY=p,n.xyToLngLat=f,n.geographicToWebMercator=h,n.webMercatorToGeographic=v});