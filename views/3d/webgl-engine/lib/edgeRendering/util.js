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

define(["require","exports","../../../../../core/arrayUtils"],function(e,r,n){function t(e){if(0===e.length)return!1;for(var r=e[0].type,n=0;n<e.length;n++){if(r!==e[n].type)return!0}return!1}function i(e){if(0===e.length)return!0;for(var r=0;r<e.length;r++){var n=e[r].material;if(n.size*n.color[3]*n.opacity>0)return!1}return!0}function o(e){if(Uint16Array.from)return e instanceof Uint16Array?Uint16Array.from(e):Uint32Array.from(e);for(var r=e instanceof Uint16Array?new Uint16Array(e.length):new Uint32Array(e.length),n=0;n<e.length;n++)r[n]=e[n];return r}function a(e,r,n,t){return n*(t/e)*2*Math.tan(.5*r)}function f(e,r){var t=n.binaryIndexOf(e,r,!0);return-1===t?r<e[0]?0:e.length:t}function u(e,r,n){return e.length-f(e,r*n.minimumEdgeLength)}function l(e,r,n,t){for(var i=0;i<e.length;i++){var o=e[i].index,a=r[i],f=r[i+1];if(t)for(var u=a;u<f;u++){var l=t[u];n.set(l,o)}else for(var u=a;u<f;u++)n.set(u,o)}}Object.defineProperty(r,"__esModule",{value:!0}),r.determineRequiresUberRenderer=t,r.determineAllTransparent=i,r.cloneIndices=o,r.estimateLengthAtDistance=a,r.findLowerBoundIndex=f,r.computeEdgeCount=u,r.fillComponenBufferIndices=l});