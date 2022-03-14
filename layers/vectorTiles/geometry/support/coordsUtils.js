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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["require","exports"],(function(n,r){function t(n,r){var t=r[0]-n[0],e=r[1]-n[1];if(n.length>2&&r.length>2){var i=n[2]-r[2];return Math.sqrt(t*t+e*e+i*i)}return Math.sqrt(t*t+e*e)}function e(n,r,t){var e=n[0]+t*(r[0]-n[0]),i=n[1]+t*(r[1]-n[1]);return n.length>2&&r.length>2?[e,i,n[2]+t*(r[2]-n[2])]:[e,i]}Object.defineProperty(r,"__esModule",{value:!0}),r.geometryToCoordinates=function(n){if(!n)return null;if(Array.isArray(n))return n;var r=n.hasZ,t=n.hasM;if("point"===n.type)return t&&r?[n.x,n.y,n.z,n.m]:r?[n.x,n.y,n.z]:t?[n.x,n.y,n.m]:[n.x,n.y];if("polygon"===n.type)return n.rings.slice(0);if("polyline"===n.type)return n.paths.slice(0);if("multipoint"===n.type)return n.points.slice(0);if("extent"===n.type){var e=n.clone().normalize();if(!e)return null;var i=!1,a=!1;return e.forEach((function(n){n.hasZ&&(i=!0),n.hasM&&(a=!0)})),e.map((function(n){var r=[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]];if(i&&n.hasZ)for(var t=.5*(n.zmax-n.zmin),e=0;e<r.length;e++)r[e].push(t);if(a&&n.hasM){var u=.5*(n.mmax-n.mmin);for(e=0;e<r.length;e++)r[e].push(u)}return r}))}return null},r.getLength=t,r.getMidpoint=function(n,r){return e(n,r,.5)},r.getPathLength=function(n){for(var r=n.length,e=0,i=0;i<r-1;++i)e+=t(n[i],n[i+1]);return e},r.getPointOnPath=function(n,r){if(r<=0)return n[0];for(var i=n.length,a=0,u=0;u<i-1;++u){var o=t(n[u],n[u+1]);if(r-a<o){var f=(r-a)/o;return e(n[u],n[u+1],f)}a+=o}return n[i-1]},r.isClockwise=function(n,r,t){for(var e=n.length,i=0,a=0,u=0,o=0;o<e;o++){var f=n[o],l=n[(o+1)%e],h=2;i+=f[0]*l[1]-l[0]*f[1],f.length>2&&l.length>2&&t&&(a+=f[0]*l[2]-l[0]*f[2],h=3),f.length>h&&l.length>h&&r&&(u+=f[0]*l[h]-l[0]*f[h])}return i<=0&&a<=0&&u<=0}}));