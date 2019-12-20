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

define(["require","exports","../../core/has","../../core/promiseUtils","./draco_decoder"],function(e,r,o,n,t){function c(){return!!o("esri-wasm")}function i(){return c()?(a||(a=n.create(function(r){return e(["./draco_decoder"],function(e){s=e({locateFile:u}),r(s)})}).catch(function(e){return n.reject(e)})),a):n.reject(new Error("Draco decompression not available, missing WebAssembly support"))}function u(){return e.toUrl("./draco_decoder.wasm")}Object.defineProperty(r,"__esModule",{value:!0}),function(e){for(var o in e)r.hasOwnProperty(o)||(r[o]=e[o])}(t),r.isSupported=c,r.getDecoderModule=i;var a,s});