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

define(["require","exports","../../../../../core/arrayUtils","../../../support/buffer/typedArrayUtil"],function(r,e,n,t){function i(r){if(0===r.length)return!1;for(var e=r[0].type,n=0;n<r.length;n++){if(e!==r[n].type)return!0}return!1}function f(r){if(0===r.length)return!0;for(var e=0;e<r.length;e++){var n=r[e].material;if(n.size*n.color[3]*n.opacity>0)return!1}return!0}function o(r){if(Uint16Array.from)return t.isUint16Array(r)?Uint16Array.from(r):Uint32Array.from(r);for(var e=t.isUint16Array(r)?new Uint16Array(r.length):new Uint32Array(r.length),n=0;n<r.length;n++)e[n]=r[n];return e}function a(r,e,n,t){return n*(t/r)*2*Math.tan(.5*e)}function u(r,e){var t=n.binaryIndexOf(r,e,!0);return-1===t?e<r[0]?0:r.length:t}function l(r,e,n){return r.length-u(r,e*n.minimumEdgeLength)}function c(r,e,n,t){for(var i=0;i<r.length;i++){var f=r[i].index,o=e[i],a=e[i+1];if(t)for(var u=o;u<a;u++){var l=t[u];n.set(l,f)}else for(var u=o;u<a;u++)n.set(u,f)}}Object.defineProperty(e,"__esModule",{value:!0}),e.determineRequiresUberRenderer=i,e.determineAllTransparent=f,e.cloneIndices=o,e.estimateLengthAtDistance=a,e.findLowerBoundIndex=u,e.computeEdgeCount=l,e.fillComponenBufferIndices=c});