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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../core/PooledArray"],function(e,o,t){Object.defineProperty(o,"__esModule",{value:!0});var r=function(){function e(e){this.arrayConstructor=e,this._pool=new Map}return e.prototype.get=function(e){var o=this._pool.get(e);if(!o||0===o.length)try{return new this.arrayConstructor(e)}catch(o){var t=window.performance&&window.performance.memory,r="";throw t&&(r="\n  totalJSHeapSize: "+t.totalJSHeapSize+", usedJSHeapSize: "+t.usedJSHeapSize+", jsHeapSizeLimit: "+t.jsHeapSizeLimit),console.log("Array allocation of size "+e+" failed: "+o+r),o}return o.pop()},e.prototype.put=function(e){var o=this._pool.get(e.length);o||(o=new t({shrink:!0}),this._pool.set(e.length,o)),o.push(e)},e.prototype.clear=function(){this._pool.clear()},e}();o.ArrayPool=r});