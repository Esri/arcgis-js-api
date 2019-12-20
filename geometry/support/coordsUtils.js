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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","./spatialReferenceUtils"],function(n,r,e){function t(n){if(!n)return null;if(Array.isArray(n))return n;var r=n.hasZ,e=n.hasM;if("point"===n.type)return e&&r?[n.x,n.y,n.z,n.m]:r?[n.x,n.y,n.z]:e?[n.x,n.y,n.m]:[n.x,n.y];if("polygon"===n.type)return n.rings.slice(0);if("polyline"===n.type)return n.paths.slice(0);if("multipoint"===n.type)return n.points.slice(0);if("extent"===n.type){var t=n.clone().normalize();if(!t)return null;var i=!1,o=!1;return t.forEach(function(n){n.hasZ&&(i=!0),n.hasM&&(o=!0)}),t.map(function(n){var r=[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]];if(i&&n.hasZ)for(var e=.5*(n.zmax-n.zmin),t=0;t<r.length;t++)r[t].push(e);if(o&&n.hasM)for(var a=.5*(n.mmax-n.mmin),t=0;t<r.length;t++)r[t].push(a);return r})}return null}function i(n,r){var e=r[0]-n[0],t=r[1]-n[1];if(n.length>2&&r.length>2){var i=n[2]-r[2];return Math.sqrt(e*e+t*t+i*i)}return Math.sqrt(e*e+t*t)}function o(n,r,e){var t=n[0]+e*(r[0]-n[0]),i=n[1]+e*(r[1]-n[1]);return n.length>2&&r.length>2?[t,i,n[2]+e*(r[2]-n[2])]:[t,i]}function a(n,r){return o(n,r,.5)}function l(n){for(var r=n.length,e=0,t=0;t<r-1;++t)e+=i(n[t],n[t+1]);return e}function s(n,r){if(r<=0)return n[0];for(var e=n.length,t=0,a=0;a<e-1;++a){var l=i(n[a],n[a+1]);if(r-t<l){var s=(r-t)/l;return o(n[a],n[a+1],s)}t+=l}return n[e-1]}function f(n,r,e){for(var t=n.length,i=0,o=0,a=0,l=0;l<t;l++){var s=n[l],f=n[(l+1)%t],u=2;i+=s[0]*f[1]-f[0]*s[1],s.length>2&&f.length>2&&e&&(o+=s[0]*f[2]-f[0]*s[2],u=3),s.length>u&&f.length>u&&r&&(a+=s[0]*f[u]-f[0]*s[u])}return i<=0&&o<=0&&a<=0}function u(n){if("rings"in n){for(var r=0,e=n.rings;r<e.length;r++){var t=e[r];t.length<3||(t[0][0]===t[t.length-1][0]&&t[0][1]===t[t.length-1][1]||t.push([t[0][0],t[0][1]]))}if(n.rings.length>0){if(!f(n.rings[0],n.hasM,n.hasZ))for(var i=0;i<n.rings.length;++i)n.rings[i]=n.rings[i].reverse()}}}function g(n){if("rings"in n)for(var r=0,e=n.rings;r<e.length;r++){var t=e[r];t.length<3||(t[0][0]===t[t.length-1][0]&&t[0][1]===t[t.length-1][1]||t.push([t[0][0],t[0][1]]))}}function h(n){for(var r=n.length,e=0,t=0;t<r;t++){var i=n[t],o=n[(t+1)%r];e+=i[0]*o[1]-o[0]*i[1]}return e}function c(n){return"polygon"!==n.type&&"polyline"!==n.type?n:(m("polygon"===n.type?n.rings:n.paths,n.spatialReference),n)}function m(n,r){var t=e.getInfo(r);if(t)for(var i=t.valid[0],o=t.valid[1],a=o-i,l=0,s=n;l<s.length;l++){var f=s[l];!function(n){var r=1/0,e=-1/0;n.forEach(function(n){for(var t=n[0];t<i;)t+=a;for(;t>o;)t-=a;r=Math.min(r,t),e=Math.max(e,t),n[0]=t});var t=e-r;a-t<t&&n.forEach(function(n){n[0]<0&&(n[0]+=a)})}(f)}}function p(n,r,e,t){var i=1/0,o=-1/0;n.forEach(function(n){for(var a=n.pos[0];a<r;)a+=t;for(;a>e;)a-=t;i=Math.min(i,a),o=Math.max(o,a),n.unnormalizedPos[0]=a,n.unnormalizedPos[1]=n.pos[1],n.pos.length>2&&(n.unnormalizedPos[2]=n.pos[2]),n.pos.length>3&&(n.unnormalizedPos[3]=n.pos[3])});var a=o-i;t-a<a&&n.forEach(function(n){n.unnormalizedPos[0]<0&&(n.unnormalizedPos[0]+=t)})}Object.defineProperty(r,"__esModule",{value:!0}),r.geometryToCoordinates=t,r.getLength=i,r.getMidpoint=a,r.getPathLength=l,r.getPointOnPath=s,r.isClockwise=f,r.closeRingsAndFixWinding=u,r.closeRings=g,r.getRingArea=h,r.unnormalizeGeometryOnDatelineCrossing=c,r.unnormalizeVerticesOnDatelineCrossing=m,r.computeUnnormalizedVertexPositionsOnDateLineCrossing=p});