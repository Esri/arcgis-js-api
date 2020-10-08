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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","./spatialReferenceUtils"],(function(n,e,r){"use strict";function t(n,e){var r=e[0]-n[0],t=e[1]-n[1];if(n.length>2&&e.length>2){var i=n[2]-e[2];return Math.sqrt(r*r+t*t+i*i)}return Math.sqrt(r*r+t*t)}function i(n,e,r){var t=n[0]+r*(e[0]-n[0]),i=n[1]+r*(e[1]-n[1]);return n.length>2&&e.length>2?[t,i,n[2]+r*(e[2]-n[2])]:[t,i]}function o(n,e,r){for(var t=n.length,i=0,o=0,a=0,s=0;s<t;s++){var l=n[s],g=n[(s+1)%t],u=2;i+=l[0]*g[1]-g[0]*l[1],l.length>2&&g.length>2&&r&&(o+=l[0]*g[2]-g[0]*l[2],u=3),l.length>u&&g.length>u&&e&&(a+=l[0]*g[u]-g[0]*l[u])}return i<=0&&o<=0&&a<=0}function a(n,e){var t=r.getInfo(e);if(t)for(var i=t.valid[0],o=t.valid[1],a=o-i,s=function(n){var e=1/0,r=-1/0;n.forEach((function(n){for(var t=n[0];t<i;)t+=a;for(;t>o;)t-=a;e=Math.min(e,t),r=Math.max(r,t),n[0]=t}));var t=r-e;a-t<t&&n.forEach((function(n){n[0]<0&&(n[0]+=a)}))},l=0,g=n;l<g.length;l++){s(g[l])}}Object.defineProperty(e,"__esModule",{value:!0}),e.computeUnnormalizedVertexPositionsOnDateLineCrossing=e.unnormalizeVerticesOnDatelineCrossing=e.unnormalizeGeometryOnDatelineCrossing=e.getRingArea=e.closeRings=e.closeRingsAndFixWinding=e.isClockwise=e.getPointOnPath=e.getPathLength=e.getMidpoint=e.projectPointOnLine=e.getLength=e.geometryToCoordinates=void 0,e.geometryToCoordinates=function(n){if(!n)return null;if(Array.isArray(n))return n;var e=n.hasZ,r=n.hasM;if("point"===n.type)return r&&e?[n.x,n.y,n.z,n.m]:e?[n.x,n.y,n.z]:r?[n.x,n.y,n.m]:[n.x,n.y];if("polygon"===n.type)return n.rings.slice(0);if("polyline"===n.type)return n.paths.slice(0);if("multipoint"===n.type)return n.points.slice(0);if("extent"===n.type){var t=n.clone().normalize();if(!t)return null;var i=!1,o=!1;return t.forEach((function(n){n.hasZ&&(i=!0),n.hasM&&(o=!0)})),t.map((function(n){var e=[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]];if(i&&n.hasZ)for(var r=.5*(n.zmax-n.zmin),t=0;t<e.length;t++)e[t].push(r);if(o&&n.hasM){var a=.5*(n.mmax-n.mmin);for(t=0;t<e.length;t++)e[t].push(a)}return e}))}return null},e.getLength=t,e.projectPointOnLine=function(n,e,r,t){var i=e[0],o=e[1],a=r[t],s=a[0],l=a[1],g=r[t+1],u=g[0]-s,f=g[1]-l,h=u*u+f*f,c=(i-s)*u+(o-l)*f,m=Math.min(1,Math.max(0,c/h));return n[0]=s+u*m,n[1]=l+f*m,n},e.getMidpoint=function(n,e){return i(n,e,.5)},e.getPathLength=function(n){for(var e=n.length,r=0,i=0;i<e-1;++i)r+=t(n[i],n[i+1]);return r},e.getPointOnPath=function(n,e){if(e<=0)return n[0];for(var r=n.length,o=0,a=0;a<r-1;++a){var s=t(n[a],n[a+1]);if(e-o<s){var l=(e-o)/s;return i(n[a],n[a+1],l)}o+=s}return n[r-1]},e.isClockwise=o,e.closeRingsAndFixWinding=function(n){if("rings"in n){for(var e=0,r=n.rings;e<r.length;e++){var t=r[e];t.length<3||(t[0][0]===t[t.length-1][0]&&t[0][1]===t[t.length-1][1]||t.push([t[0][0],t[0][1]]))}if(n.rings.length>0)if(!o(n.rings[0],n.hasM,n.hasZ))for(var i=0;i<n.rings.length;++i)n.rings[i]=n.rings[i].reverse()}},e.closeRings=function(n){if("rings"in n)for(var e=0,r=n.rings;e<r.length;e++){var t=r[e];t.length<3||(t[0][0]===t[t.length-1][0]&&t[0][1]===t[t.length-1][1]||t.push([t[0][0],t[0][1]]))}},e.getRingArea=function(n){for(var e=n.length,r=0,t=0;t<e;t++){var i=n[t],o=n[(t+1)%e];r+=i[0]*o[1]-o[0]*i[1]}return r},e.unnormalizeGeometryOnDatelineCrossing=function(n){return"polygon"!==n.type&&"polyline"!==n.type?n:(a("polygon"===n.type?n.rings:n.paths,n.spatialReference),n)},e.unnormalizeVerticesOnDatelineCrossing=a,e.computeUnnormalizedVertexPositionsOnDateLineCrossing=function(n,e,r,t){var i=1/0,o=-1/0;n.forEach((function(n){for(var a=n.pos[0];a<e;)a+=t;for(;a>r;)a-=t;i=Math.min(i,a),o=Math.max(o,a),n.unnormalizedPos[0]=a,n.unnormalizedPos[1]=n.pos[1],n.pos.length>2&&(n.unnormalizedPos[2]=n.pos[2]),n.pos.length>3&&(n.unnormalizedPos[3]=n.pos[3])}));var a=o-i;t-a<a&&n.forEach((function(n){n.unnormalizedPos[0]<0&&(n.unnormalizedPos[0]+=t)}))}}));