// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","./spatialReferenceUtils"],function(n,r,e){function t(n){if(!n)return null;if(Array.isArray(n))return n;var r=n.hasZ,e=n.hasM;if("point"===n.type)return e&&r?[n.x,n.y,n.z,n.m]:r?[n.x,n.y,n.z]:e?[n.x,n.y,n.m]:[n.x,n.y];if("polygon"===n.type)return n.rings.slice(0);if("polyline"===n.type)return n.paths.slice(0);if("multipoint"===n.type)return n.points.slice(0);if("extent"===n.type){var t=n.clone().normalize();if(!t)return null;var i=!1,a=!1;return t.forEach(function(n){n.hasZ&&(i=!0),n.hasM&&(a=!0)}),t.map(function(n){var r=[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]];if(i&&n.hasZ)for(var e=.5*(n.zmax-n.zmin),t=0;t<r.length;t++)r[t].push(e);if(a&&n.hasM)for(var o=.5*(n.mmax-n.mmin),t=0;t<r.length;t++)r[t].push(o);return r})}return null}function i(n,r){var e=r[0]-n[0],t=r[1]-n[1];if(n.length>2&&r.length>2){var i=n[2]-r[2];return Math.sqrt(e*e+t*t+i*i)}return Math.sqrt(e*e+t*t)}function a(n,r,e){var t=n[0]+e*(r[0]-n[0]),i=n[1]+e*(r[1]-n[1]);return n.length>2&&r.length>2?[t,i,n[2]+e*(r[2]-n[2])]:[t,i]}function o(n,r){return a(n,r,.5)}function f(n){for(var r=n.length,e=0,t=0;t<r-1;++t)e+=i(n[t],n[t+1]);return e}function l(n,r){if(r<=0)return n[0];for(var e=n.length,t=0,o=0;o<e-1;++o){var f=i(n[o],n[o+1]);if(r-t<f){var l=(r-t)/f;return a(n[o],n[o+1],l)}t+=f}return n[e-1]}function u(n,r,e){for(var t=n.length,i=0,a=0,o=0,f=0;f<t;f++){var l=n[f],u=n[(f+1)%t],s=2;i+=l[0]*u[1]-u[0]*l[1],l.length>2&&u.length>2&&e&&(a+=l[0]*u[2]-u[0]*l[2],s=3),l.length>s&&u.length>s&&r&&(o+=l[0]*u[s]-u[0]*l[s])}return i<=0&&a<=0&&o<=0}function s(n){if("rings"in n){for(var r=0,e=n.rings;r<e.length;r++){var t=e[r];t.length<3||(t[0][0]===t[t.length-1][0]&&t[0][1]===t[t.length-1][1]||t.push(t[0]))}if(n.rings.length>0){if(!u(n.rings[0],n.hasM,n.hasZ))for(var i=0;i<n.rings.length;++i)n.rings[i]=n.rings[i].reverse()}}}function h(n){for(var r=n.length,e=0,t=0;t<r;t++){var i=n[t],a=n[(t+1)%r];e+=i[0]*a[1]-a[0]*i[1]}return e}function g(n){return"polygon"!==n.type&&"polyline"!==n.type?n:(c("polygon"===n.type?n.rings:n.paths,n.spatialReference),n)}function c(n,r){var t=e.getInfo(r);if(t)for(var i=t.valid[0],a=t.valid[1],o=a-i,f=0,l=n;f<l.length;f++){var u=l[f];!function(n){var r=1/0,e=-1/0;n.forEach(function(n){for(var t=n[0];t<i;)t+=o;for(;t>a;)t-=o;r=Math.min(r,t),e=Math.max(e,t),n[0]=t});var t=e-r;o-t<t&&n.forEach(function(n){n[0]<0&&(n[0]+=o)})}(u)}}function m(n,r,e,t){var i=1/0,a=-1/0;n.forEach(function(n){for(var o=n.pos[0];o<r;)o+=t;for(;o>e;)o-=t;i=Math.min(i,o),a=Math.max(a,o),n.unnormalizedPos[0]=o,n.unnormalizedPos[1]=n.pos[1]});var o=a-i;t-o<o&&n.forEach(function(n){n.unnormalizedPos[0]<0&&(n.unnormalizedPos[0]+=t)})}Object.defineProperty(r,"__esModule",{value:!0}),r.geometryToCoordinates=t,r.getLength=i,r.getMidpoint=o,r.getPathLength=f,r.getPointOnPath=l,r.isClockwise=u,r.closeRingsAndFixWinding=s,r.getRingArea=h,r.unnormalizeGeometryOnDatelineCrossing=g,r.unnormalizeVerticesOnDatelineCrossing=c,r.computeUnnormalizedVertexPositionsOnDateLineCrossing=m});