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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../SpatialReference"],function(e,n,t){function r(e){return e*g}function i(e){return e*y}function o(e){return null!=e.wkid}function a(e,n,t,r,i){if(e=e,"point"===e.type)y=n(e.x,e.y,r,x),i.x=y[0],i.y=y[1];else if("extent"===e.type)d=n(e.xmin,e.ymin,r,x),i.xmin=d[0],i.ymin=d[1],M=n(e.xmax,e.ymax,r,x),i.xmax=M[0],i.ymax=M[1];else if("polyline"===e.type||"polygon"===e.type){for(var o="polyline"===e.type,a=o?e.paths:e.rings,l=[],c=void 0,u=0,p=a.length;p>u;u++){var s=a[u];c=[],l.push(c);for(var f=0,h=s.length;h>f;f++)c.push(n(s[f][0],s[f][1],r)),s[f].length>2&&c[f].push(s[f][2]),s[f].length>3&&c[f].push(s[f][3])}o?i.paths=l:i.rings=l}else if("multipoint"===e.type){for(var v=e.points,g=[],u=0,p=v.length;p>u;u++)g[u]=n(v[u][0],v[u][1],r),v[u].length>2&&g[u].push(v[u][2]),v[u].length>3&&g[u].push(v[u][3]);i.points=g}return i.spatialReference=t,i;var y,d,M}function l(e,n){var t=e&&(o(e)?e:e.spatialReference),r=n&&(o(n)?n:n.spatialReference);return t&&r?r.equals(t)?!0:r.isWebMercator&&4326===t.wkid||t.isWebMercator&&4326===r.wkid:!1}function c(e,n){var r=e&&e.spatialReference,i=n&&(o(n)?n:n.spatialReference);return l(r,i)?r.equals(i)?e.clone():i.isWebMercator?a(e,u,t.WebMercator,!1,e.clone()):4326===i.wkid?a(e,p,t.WGS84,!1,e.clone()):null:null}function u(e,n,t,r){void 0===r&&(r=[0,0]),n>89.99999?n=89.99999:-89.99999>n&&(n=-89.99999);var o=i(n);return r[0]=i(e)*h,r[1]=.5*h*Math.log((1+Math.sin(o))/(1-Math.sin(o))),r}function p(e,n,t,i){void 0===t&&(t=!1),void 0===i&&(i=[0,0]);var o=r(e/h);return i[0]=t?o:o-360*Math.floor((o+180)/360),i[1]=r(v/2-2*Math.atan(Math.exp(-1*n/h))),i}function s(e,n,r){return void 0===n&&(n=!1),void 0===r&&(r=e.clone()),a(e,u,t.WebMercator,n,r)}function f(e,n,r){return void 0===n&&(n=!1),void 0===r&&(r=e.clone()),a(e,p,t.WGS84,n,r)}var h=6378137,v=3.141592653589793,g=57.29577951308232,y=.017453292519943,x=[0,0];n.canProject=l,n.project=c,n.lngLatToXY=u,n.xyToLngLat=p,n.geographicToWebMercator=s,n.webMercatorToGeographic=f});