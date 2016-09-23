// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["require","exports","../SpatialReference"],function(e,n,t){function r(e){return e*h}function i(e){return e*x}function o(e){return null!=e.wkid}function a(e,n,t,r,i){if(e=e,"point"===e.type)x=n(e.x,e.y,r,d),i.x=x[0],i.y=x[1];else if("extent"===e.type)M=n(e.xmin,e.ymin,r,d),i.xmin=M[0],i.ymin=M[1],g=n(e.xmax,e.ymax,r,d),i.xmax=g[0],i.ymax=g[1];else if("polyline"===e.type||"polygon"===e.type){for(var o="polyline"===e.type,a=o?e.paths:e.rings,c=[],l=void 0,u=0,p=a.length;p>u;u++){var f=a[u];l=[],c.push(l);for(var s=0,v=f.length;v>s;s++)l.push(n(f[s][0],f[s][1],r))}o?i.paths=c:i.rings=c}else if("multipoint"===e.type){for(var y=e.points,h=[],u=0,p=y.length;p>u;u++)h[u]=n(y[u][0],y[u][1],r);i.points=h}return i.spatialReference=t,i;var x,M,g}function c(e,n){var t=e&&(o(e)?e:e.spatialReference),r=n&&(o(n)?n:n.spatialReference);return t&&r?r.equals(t)?!0:r.isWebMercator&&4326===t.wkid||t.isWebMercator&&4326===r.wkid:!1}function l(e,n){var r=e&&e.spatialReference,i=n&&(o(n)?n:n.spatialReference);return c(r,i)?r.equals(i)?e.clone():i.isWebMercator?a(e,u,t.WebMercator,!1,e.clone()):4326===i.wkid?a(e,p,t.WGS84,!1,e.clone()):null:null}function u(e,n,t,r){void 0===r&&(r=[0,0]),n>89.99999?n=89.99999:-89.99999>n&&(n=-89.99999);var o=i(n);return r[0]=i(e)*v,r[1]=.5*v*Math.log((1+Math.sin(o))/(1-Math.sin(o))),r}function p(e,n,t,i){void 0===t&&(t=!1),void 0===i&&(i=[0,0]);var o=r(e/v);return i[0]=t?o:o-360*Math.floor((o+180)/360),i[1]=r(y/2-2*Math.atan(Math.exp(-1*n/v))),i}function f(e,n,r){return void 0===n&&(n=!1),void 0===r&&(r=e.clone()),a(e,u,t.WebMercator,n,r)}function s(e,n,r){return void 0===n&&(n=!1),void 0===r&&(r=e.clone()),a(e,p,t.WGS84,n,r)}var v=6378137,y=3.141592653589793,h=57.29577951308232,x=.017453292519943,d=[0,0];n.canProject=c,n.project=l,n.lngLatToXY=u,n.xyToLngLat=p,n.geographicToWebMercator=f,n.webMercatorToGeographic=s});