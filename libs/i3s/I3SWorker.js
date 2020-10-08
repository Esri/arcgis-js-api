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

define(["require","exports","../../assets","../../core/has","../../core/promiseUtils","@dojo/framework/shim/Promise"],(function(e,r,t,n,i){"use strict";function o(e){return t.getAssetUrl("esri/libs/i3s/"+e)}var s;Object.defineProperty(r,"__esModule",{value:!0}),r.getWorkerModule=void 0,r.getWorkerModule=function(){if(!s){var r=n("esri-wasm")?new Promise((function(r,t){e(["./i3s"],r,t)})):new Promise((function(r,t){e(["./i3s_nowasm"],r,t)}));s=i.create((function(e){return r.then((function(r){var t=r({locateFile:o,onRuntimeInitialized:function(){return e(t)}});delete t.then}))})).catch((function(e){return i.reject(e)}))}return s}}));