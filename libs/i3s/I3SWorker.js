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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../assets","../../core/has","../../core/promiseUtils","@dojo/framework/shim/Promise"],(function(e,n,r,t,i){function o(e){return r.getAssetUrl("esri/libs/i3s/"+e)}var s;Object.defineProperty(n,"__esModule",{value:!0}),n.getWorkerModule=function(){if(!s){var n=t("esri-wasm")?new Promise((function(n,r){e(["./i3s"],n,r)})):new Promise((function(n,r){e(["./i3s_nowasm"],n,r)}));s=i.create((function(e){return n.then((function(n){var r=n({locateFile:o,onRuntimeInitialized:function(){return e(r)}});delete r.then}))})).catch((function(e){return i.reject(e)}))}return s}}));