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

define(["require","exports","../../../../core/PooledArray"],function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){this._factoryCallback=e,this._lengthCallback=t,this._pool=new Map}return e.prototype.acquire=function(t){if(!e.test.disabled){var o=this._pool.get(t);if(o&&0!==o.length)return o.pop()}try{return this._factoryCallback(t)}catch(e){var i=window.performance&&window.performance.memory,r="";throw i&&(r="\n  totalJSHeapSize: "+i.totalJSHeapSize+", usedJSHeapSize: "+i.usedJSHeapSize+", jsHeapSizeLimit: "+i.jsHeapSizeLimit),console.log("Array allocation of size "+t+" failed: "+e+r),e}},e.prototype.release=function(t){if(!e.test.disabled){var i=this._lengthCallback(t),r=this._pool.get(i);r||(r=new o({shrink:!0}),this._pool.set(i,r)),r.push(t)}},e.prototype.clear=function(){this._pool.clear()},Object.defineProperty(e.prototype,"test",{get:function(){return{size:this._pool.size}},enumerable:!0,configurable:!0}),e.test={disabled:!1},e}();t.BufferPool=i});