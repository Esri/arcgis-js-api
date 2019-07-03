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

define(["require","exports","../../../../../core/arrayUtils","../../../../../core/maybe","../../../../../core/typedArrayUtil"],function(e,r,n,t,i){function o(e){for(var r=null,n=0,i=e;n<i.length;n++){var o=i[n],a=o.type;if(f(o))if(t.isNone(r))r=a;else if(r!==a)return"uber"}return t.isSome(r)?r:"solid"}function a(e){if(0===e.length)return!0;for(var r=0;r<e.length;r++){if(f(e[r].material))return!1}return!0}function f(e){return e.size*e.color[3]*e.opacity>0}function u(e){if(Uint16Array.from)return i.isUint16Array(e)?Uint16Array.from(e):Uint32Array.from(e);for(var r=i.isUint16Array(e)?new Uint16Array(e.length):new Uint32Array(e.length),n=0;n<e.length;n++)r[n]=e[n];return r}function l(e,r,n,t){return n*(t/e)*2*Math.tan(.5*r)}function c(e,r){var t=n.binaryIndexOf(e,r,!0);return-1===t?r<e[0]?0:e.length:t}function s(e,r,n){return e.length-c(e,r*n.minimumEdgeLength)}function d(e,r,n,t){for(var i=0;i<e.length;i++){var o=e[i].index,a=r[i],f=r[i+1];if(t)for(var u=a;u<f;u++){var l=t[u];n.set(l,o)}else for(var u=a;u<f;u++)n.set(u,o)}}Object.defineProperty(r,"__esModule",{value:!0}),r.determineRendererType=o,r.determineAllTransparent=a,r.cloneIndices=u,r.estimateLengthAtDistance=l,r.findLowerBoundIndex=c,r.computeEdgeCount=s,r.fillComponenBufferIndices=d});