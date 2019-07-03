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

define(["require","exports","../../../../core/PooledArray"],function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){this._factoryCallback=e,this._lengthCallback=t,this._pool=new Map}return e.prototype.acquire=function(e){var t=this._pool.get(e);if(t&&0!==t.length)return t.pop();try{return this._factoryCallback(e)}catch(t){var o=window.performance&&window.performance.memory,r="";throw o&&(r="\n  totalJSHeapSize: "+o.totalJSHeapSize+", usedJSHeapSize: "+o.usedJSHeapSize+", jsHeapSizeLimit: "+o.jsHeapSizeLimit),console.log("Array allocation of size "+e+" failed: "+t+r),t}},e.prototype.release=function(e){var t=this._lengthCallback(e),r=this._pool.get(t);r||(r=new o({shrink:!0}),this._pool.set(t,r)),r.push(e)},e.prototype.clear=function(){this._pool.clear()},Object.defineProperty(e.prototype,"test",{get:function(){return{size:this._pool.size}},enumerable:!0,configurable:!0}),e}();t.BufferPool=r});