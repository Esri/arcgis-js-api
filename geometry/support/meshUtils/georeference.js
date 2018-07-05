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

define(["require","exports","../../../views/3d/lib/glMatrix","../../../views/3d/support/projectionUtils"],function(e,r,a,t){function n(e,r,a){var t=r.spatialReference;return t.isWGS84||t.isWebMercator&&(!a||!1!==a.geographic)?i(e,r):o(e,r)}function o(e,r){for(var a=new Float64Array(e.position.length),t=e.position,n=0;n<t.length;n+=3)a[n+0]=t[n+0]+r.x,a[n+1]=t[n+1]+r.y,a[n+2]=t[n+2]+(r.z||0);return{position:a,normal:e.normal}}function i(e,r){var a=r.spatialReference;t.computeLinearTransformation(r.spatialReference,[r.x,r.y,r.z||0],f,t.SphericalECEFSpatialReference);var n=l(e.position,f,r.spatialReference);return{position:n,normal:c(n,e.normal,a)}}function l(e,r,n){for(var o=new Float64Array(e.length),i=0;i<e.length;i+=3){for(var l=0;l<3;l++)p[l]=e[i+l];a.mat4d.multiplyVec3(r,p);for(var l=0;l<3;l++)o[i+l]=p[l]}var c=new Float64Array(e.length);return t.bufferToBuffer(o,t.SphericalECEFSpatialReference,0,c,n,0,o.length/3),c}function c(e,r,n){if(!n.isWebMercator||!r)return r;for(var o=new Float32Array(r.length),i=0;i<r.length;i+=3){var l=t.webMercator.y2lat(e[i+1]),c=Math.cos(l);p[0]=r[i+0]*c,p[1]=r[i+1]*c,p[2]=r[i+2],a.vec3d.normalize(p);for(var f=0;f<3;f++)o[i+f]=p[f]}return o}Object.defineProperty(r,"__esModule",{value:!0}),r.georeference=n;var f=a.mat4d.create(),p=a.vec3d.create()});