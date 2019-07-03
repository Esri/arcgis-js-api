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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","./spatialReferenceUtils"],function(n,r,t){function e(n){if(!n)return null;if(Array.isArray(n))return n;var r=n.hasZ,t=n.hasM;if("point"===n.type)return t&&r?[n.x,n.y,n.z,n.m]:r?[n.x,n.y,n.z]:t?[n.x,n.y,n.m]:[n.x,n.y];if("polygon"===n.type)return n.rings.slice(0);if("polyline"===n.type)return n.paths.slice(0);if("multipoint"===n.type)return n.points.slice(0);if("extent"===n.type){var e=n.clone().normalize();if(!e)return null;var i=!1,o=!1;return e.forEach(function(n){n.hasZ&&(i=!0),n.hasM&&(o=!0)}),e.map(function(n){var r=[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]];if(i&&n.hasZ)for(var t=.5*(n.zmax-n.zmin),e=0;e<r.length;e++)r[e].push(t);if(o&&n.hasM)for(var a=.5*(n.mmax-n.mmin),e=0;e<r.length;e++)r[e].push(a);return r})}return null}function i(n,r){var t=r[0]-n[0],e=r[1]-n[1];if(n.length>2&&r.length>2){var i=n[2]-r[2];return Math.sqrt(t*t+e*e+i*i)}return Math.sqrt(t*t+e*e)}function o(n,r,t){var e=n[0]+t*(r[0]-n[0]),i=n[1]+t*(r[1]-n[1]);return n.length>2&&r.length>2?[e,i,n[2]+t*(r[2]-n[2])]:[e,i]}function a(n,r){return o(n,r,.5)}function u(n){for(var r=n.length,t=0,e=0;e<r-1;++e)t+=i(n[e],n[e+1]);return t}function f(n,r){if(r<=0)return n[0];for(var t=n.length,e=0,a=0;a<t-1;++a){var u=i(n[a],n[a+1]);if(r-e<u){var f=(r-e)/u;return o(n[a],n[a+1],f)}e+=u}return n[t-1]}function l(n,r,t){for(var e=n.length,i=0,o=0,a=0,u=0;u<e;u++){var f=n[u],l=n[(u+1)%e],s=2;i+=f[0]*l[1]-l[0]*f[1],f.length>2&&l.length>2&&t&&(o+=f[0]*l[2]-l[0]*f[2],s=3),f.length>s&&l.length>s&&r&&(a+=f[0]*l[s]-l[0]*f[s])}return i<=0&&o<=0&&a<=0}function s(n){for(var r=n.length,t=0,e=0;e<r;e++){var i=n[e],o=n[(e+1)%r];t+=i[0]*o[1]-o[0]*i[1]}return t}function h(n){return"polygon"!==n.type&&"polyline"!==n.type?n:(m("polygon"===n.type?n.rings:n.paths,n.spatialReference),n)}function m(n,r){var e=t.getInfo(r);if(e)for(var i=e.valid[0],o=e.valid[1],a=o-i,u=0,f=n;u<f.length;u++){var l=f[u];!function(n){var r=1/0,t=-1/0;n.forEach(function(n){for(var e=n[0];e<i;)e+=a;for(;e>o;)e-=a;r=Math.min(r,e),t=Math.max(t,e),n[0]=e});var e=t-r;a-e<e&&n.forEach(function(n){n[0]<0&&(n[0]+=a)})}(l)}}function c(n,r,t,e){var i=1/0,o=-1/0;n.forEach(function(n){for(var a=n.pos[0];a<r;)a+=e;for(;a>t;)a-=e;i=Math.min(i,a),o=Math.max(o,a),n.unnormalizedPos[0]=a,n.unnormalizedPos[1]=n.pos[1]});var a=o-i;e-a<a&&n.forEach(function(n){n.unnormalizedPos[0]<0&&(n.unnormalizedPos[0]+=e)})}Object.defineProperty(r,"__esModule",{value:!0}),r.geometryToCoordinates=e,r.getLength=i,r.getMidpoint=a,r.getPathLength=u,r.getPointOnPath=f,r.isClockwise=l,r.getRingArea=s,r.unnormalizeGeometryOnDatelineCrossing=h,r.unnormalizeVerticesOnDatelineCrossing=m,r.computeUnnormalizedVertexPositionsOnDateLineCrossing=c});