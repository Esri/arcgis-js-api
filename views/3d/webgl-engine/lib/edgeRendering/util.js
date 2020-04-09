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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../../core/arrayUtils","../../../../../core/maybe","../../../../../core/typedArrayUtil"],(function(e,r,n,t,i){function a(e){return e.size*e.color[3]*e.opacity>0}function o(e,r){var t=n.binaryIndexOf(e,r,!0);return-1===t?r<e[0]?0:e.length:t}Object.defineProperty(r,"__esModule",{value:!0}),r.determineRendererType=function(e){for(var r=null,n=0,i=e;n<i.length;n++){var o=i[n],f=o.type;if(a(o))if(t.isNone(r))r=f;else if(r!==f)return"uber"}return t.isSome(r)?r:"solid"},r.determineEdgeTransparency=function(e){for(var r=0,n=0,t=e;n<t.length;n++){var i=t[n].material;if(a(i)){if(i.color[3]*i.opacity<1)return 1;r=2}}return r},r.determineObjectTransparency=function(e){for(var r=0,n=0,t=e;n<t.length;n++){var i=t[n].material;if(a(i)){switch(i.objectTransparency){case 1:case 0:return 1}r=2}}return r},r.cloneIndices=function(e){if(Uint16Array.from)return i.isUint16Array(e)?Uint16Array.from(e):Uint32Array.from(e);for(var r=i.isUint16Array(e)?new Uint16Array(e.length):new Uint32Array(e.length),n=0;n<e.length;n++)r[n]=e[n];return r},r.estimateLengthAtDistance=function(e,r,n,t){return n*(t/e)*2*Math.tan(.5*r)},r.findLowerBoundIndex=o,r.computeEdgeCount=function(e,r,n){return e.length-o(e,r*n.minimumEdgeLength)},r.fillComponenBufferIndices=function(e,r,n,t){for(var i=0;i<e.length;i++){var a=e[i].index,o=r[i],f=r[i+1];if(t)for(var u=o;u<f;u++){var c=t[u];n.set(c,a)}else for(u=o;u<f;u++)n.set(u,a)}}}));