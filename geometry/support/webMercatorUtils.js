// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../SpatialReference"],function(e,n,t){function r(e){return e*y}function i(e){return e*g}function o(e){return null!=e.wkid||null!=e.wkt}function a(e,n,t,r,i){if(e=e,"point"===e.type)v=n(e.x,e.y,r,x),i.x=v[0],i.y=v[1];else if("extent"===e.type)y=n(e.xmin,e.ymin,r,x),i.xmin=y[0],i.ymin=y[1],g=n(e.xmax,e.ymax,r,x),i.xmax=g[0],i.ymax=g[1];else if("polyline"===e.type||"polygon"===e.type){for(var o="polyline"===e.type,a=o?e.paths:e.rings,l=[],u=void 0,c=0;c<a.length;c++){var p=a[c];u=[],l.push(u);for(var s=0;s<p.length;s++)u.push(n(p[s][0],p[s][1],r)),p[s].length>2&&u[s].push(p[s][2]),p[s].length>3&&u[s].push(p[s][3])}o?i.paths=l:i.rings=l}else if("multipoint"===e.type){for(var f=e.points,h=[],c=0;c<f.length;c++)h[c]=n(f[c][0],f[c][1],r),f[c].length>2&&h[c].push(f[c][2]),f[c].length>3&&h[c].push(f[c][3]);i.points=h}return i.spatialReference=t,i;var v,y,g}function l(e,n){var t=e&&(o(e)?e:e.spatialReference),r=n&&(o(n)?n:n.spatialReference);return t&&r?r.equals(t)?!0:r.isWebMercator&&t.isWGS84||t.isWebMercator&&r.isWGS84:!1}function u(e,n){var r=e&&e.spatialReference,i=n&&(o(n)?n:n.spatialReference);return l(r,i)?r.equals(i)?e.clone():i.isWebMercator?a(e,c,t.WebMercator,!1,e.clone()):i.isWGS84?a(e,p,t.WGS84,!1,e.clone()):null:null}function c(e,n,t,r){void 0===r&&(r=[0,0]),n>89.99999?n=89.99999:-89.99999>n&&(n=-89.99999);var o=i(n);return r[0]=i(e)*h,r[1]=.5*h*Math.log((1+Math.sin(o))/(1-Math.sin(o))),r}function p(e,n,t,i){void 0===t&&(t=!1),void 0===i&&(i=[0,0]);var o=r(e/h);return i[0]=t?o:o-360*Math.floor((o+180)/360),i[1]=r(v/2-2*Math.atan(Math.exp(-1*n/h))),i}function s(e,n,r){return void 0===n&&(n=!1),void 0===r&&(r=e.clone()),a(e,c,t.WebMercator,n,r)}function f(e,n,r){return void 0===n&&(n=!1),void 0===r&&(r=e.clone()),a(e,p,t.WGS84,n,r)}Object.defineProperty(n,"__esModule",{value:!0});var h=6378137,v=3.141592653589793,y=57.29577951308232,g=.017453292519943,x=[0,0];n.canProject=l,n.project=u,n.lngLatToXY=c,n.xyToLngLat=p,n.geographicToWebMercator=s,n.webMercatorToGeographic=f});