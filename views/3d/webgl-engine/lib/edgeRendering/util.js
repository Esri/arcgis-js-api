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

define(["require","exports","../../../../../core/arrayUtils","../../../../../core/maybe","../../../../../core/typedArrayUtil"],function(r,e,n,t,i){function a(r){for(var e=null,n=0,i=r;n<i.length;n++){var a=i[n],o=a.type;if(u(a))if(t.isNone(e))e=o;else if(e!==o)return"uber"}return t.isSome(e)?e:"solid"}function o(r){for(var e=0,n=0,t=r;n<t.length;n++){var i=t[n].material;if(u(i)){if(i.color[3]*i.opacity<1)return 1;e=2}}return e}function f(r){for(var e=0,n=0,t=r;n<t.length;n++){var i=t[n].material;if(u(i)){switch(i.objectTransparency){case 1:case 0:return 1}e=2}}return e}function u(r){return r.size*r.color[3]*r.opacity>0}function c(r){if(Uint16Array.from)return i.isUint16Array(r)?Uint16Array.from(r):Uint32Array.from(r);for(var e=i.isUint16Array(r)?new Uint16Array(r.length):new Uint32Array(r.length),n=0;n<r.length;n++)e[n]=r[n];return e}function l(r,e,n,t){return n*(t/r)*2*Math.tan(.5*e)}function s(r,e){var t=n.binaryIndexOf(r,e,!0);return-1===t?e<r[0]?0:r.length:t}function y(r,e,n){return r.length-s(r,e*n.minimumEdgeLength)}function d(r,e,n,t){for(var i=0;i<r.length;i++){var a=r[i].index,o=e[i],f=e[i+1];if(t)for(var u=o;u<f;u++){var c=t[u];n.set(c,a)}else for(var u=o;u<f;u++)n.set(u,a)}}Object.defineProperty(e,"__esModule",{value:!0}),e.determineRendererType=a,e.determineEdgeTransparency=o,e.determineObjectTransparency=f,e.cloneIndices=c,e.estimateLengthAtDistance=l,e.findLowerBoundIndex=s,e.computeEdgeCount=y,e.fillComponenBufferIndices=d});