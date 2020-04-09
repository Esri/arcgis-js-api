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

define(["require","exports","../../core/has","../../core/promiseUtils","./draco_decoder"],(function(e,r,n,o,c){function t(){return!!n("esri-wasm")}function a(){return e.toUrl("./draco_decoder.wasm")}var d;Object.defineProperty(r,"__esModule",{value:!0}),r.DracoDecoderInstance=c.DracoDecoderInstance,r.DecoderInstance=c.DecoderInstance,r.MeshInstance=c.MeshInstance,r.isSupported=t,r.getDecoderModule=function(){return t()?(d||(d=o.create((function(r){return e(["./draco_decoder"],(function(e){var n=e({locateFile:a,onModuleLoaded:function(){return r(n)}});delete n.then}))})).catch((function(e){return o.reject(e)}))),d):o.reject(new Error("Draco decompression not available, missing WebAssembly support"))}}));