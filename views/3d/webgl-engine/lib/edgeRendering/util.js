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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../../../core/arrayUtils","../../../../../core/compilerUtils","../../../support/buffer/typedArrayUtil"],function(r,e,n,t,i){function o(r){if(0===r.length)return!1;for(var e=null,n=0,i=r;n<i.length;n++){var o=i[n],f=o.type;if(u(o))if(t.isNone(e))e=f;else if(e!==f)return!0}return!1}function f(r){if(0===r.length)return!0;for(var e=0;e<r.length;e++){if(u(r[e].material))return!1}return!0}function u(r){return r.size*r.color[3]*r.opacity>0}function a(r){if(Uint16Array.from)return i.isUint16Array(r)?Uint16Array.from(r):Uint32Array.from(r);for(var e=i.isUint16Array(r)?new Uint16Array(r.length):new Uint32Array(r.length),n=0;n<r.length;n++)e[n]=r[n];return e}function l(r,e,n,t){return n*(t/r)*2*Math.tan(.5*e)}function c(r,e){var t=n.binaryIndexOf(r,e,!0);return-1===t?e<r[0]?0:r.length:t}function s(r,e,n){return r.length-c(r,e*n.minimumEdgeLength)}function d(r,e,n,t){for(var i=0;i<r.length;i++){var o=r[i].index,f=e[i],u=e[i+1];if(t)for(var a=f;a<u;a++){var l=t[a];n.set(l,o)}else for(var a=f;a<u;a++)n.set(a,o)}}Object.defineProperty(e,"__esModule",{value:!0}),e.determineRequiresUberRenderer=o,e.determineAllTransparent=f,e.cloneIndices=a,e.estimateLengthAtDistance=l,e.findLowerBoundIndex=c,e.computeEdgeCount=s,e.fillComponenBufferIndices=d});