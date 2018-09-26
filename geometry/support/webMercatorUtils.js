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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../core/lang","../../core/wgs84Constants","../SpatialReference","./spatialReferenceUtils"],function(e,n,t,i,r,a){function o(e){return e*d}function s(e){return e*M}function l(e){return null!=e.wkid||null!=e.wkt}function u(e,n,t,i,r){var a,o,s,l=e,u=r;if("x"in l&&"x"in u)a=n(l.x,l.y,b,0,i),u.x=a[0],u.y=a[1];else if("xmin"in l&&"xmin"in u)o=n(l.xmin,l.ymin,b,0,i),u.xmin=o[0],u.ymin=o[1],s=n(l.xmax,l.ymax,b,0,i),u.xmax=s[0],u.ymax=s[1];else if("paths"in l&&"paths"in u||"rings"in l&&"rings"in u){for(var c=("paths"in l?l.paths:l.rings),p=[],f=void 0,h=0;h<c.length;h++){var v=c[h];f=[],p.push(f);for(var g=0;g<v.length;g++)f.push(n(v[g][0],v[g][1],[0,0],0,i)),v[g].length>2&&f[g].push(v[g][2]),v[g].length>3&&f[g].push(v[g][3])}"paths"in u?u.paths=p:u.rings=p}else if("points"in l&&"points"in u){for(var x=l.points,d=[],h=0;h<x.length;h++)d[h]=n(x[h][0],x[h][1],[0,0],0,i),x[h].length>2&&d[h].push(x[h][2]),x[h].length>3&&d[h].push(x[h][3]);u.points=d}else if("type"in l&&"mesh"===l.type&&"type"in u&&"mesh"===u.type){var M=l.vertexAttributes&&l.vertexAttributes.position,m=u.vertexAttributes&&u.vertexAttributes.position;if(M)for(var y=[0,0],h=0;h<M.length;h+=3)n(M[h],M[h+1],y,0,i),m[h]=y[0],m[h+1]=y[1]}return u.spatialReference=t,r}function c(e,n){var t=e&&(l(e)?e:e.spatialReference),i=n&&(l(n)?n:n.spatialReference);return!(!t||!i)&&(!!a.equals(i,t)||(a.isWebMercator(i)&&a.isWGS84(t)||a.isWebMercator(t)&&a.isWGS84(i)))}function p(e,n){var i=e&&e.spatialReference,o=n&&(l(n)?n:n.spatialReference);return c(i,o)?a.equals(i,o)?t.clone(e):a.isWebMercator(o)?u(e,f,r.WebMercator,!1,t.clone(e)):a.isWGS84(o)?u(e,h,r.WGS84,!1,t.clone(e)):null:null}function f(e,n,t,i){void 0===t&&(t=[0,0]),void 0===i&&(i=0),n>89.99999?n=89.99999:n<-89.99999&&(n=-89.99999);var r=s(n);return t[i]=s(e)*x,t[i+1]=.5*x*Math.log((1+Math.sin(r))/(1-Math.sin(r))),t}function h(e,n,t,i,r){void 0===t&&(t=[0,0]),void 0===i&&(i=0),void 0===r&&(r=!1);var a=o(e/x);return t[i]=r?a:a-360*Math.floor((a+180)/360),t[i+1]=o(Math.PI/2-2*Math.atan(Math.exp(-1*n/x))),t}function v(e,n,i){return void 0===n&&(n=!1),void 0===i&&(i=t.clone(e)),u(e,f,r.WebMercator,n,i)}function g(e,n,i){return void 0===n&&(n=!1),void 0===i&&(i=t.clone(e)),u(e,h,r.WGS84,n,i)}Object.defineProperty(n,"__esModule",{value:!0});var x=i.wgs84Radius,d=57.29577951308232,M=.017453292519943,b=[0,0];n.canProject=c,n.project=p,n.lngLatToXY=f,n.xyToLngLat=h,n.geographicToWebMercator=v,n.webMercatorToGeographic=g});