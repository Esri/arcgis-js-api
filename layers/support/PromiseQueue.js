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

define(["require","exports","../../core/promiseUtils"],function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(){this._deferreds=[],this._values=[]}return e.prototype.push=function(e){var t=this;return r.create(function(r,s){t._deferreds.push({resolve:r,reject:s}),t._values.push(e)})},e.prototype.unshift=function(e){var t=this;return r.create(function(r,s){t._deferreds.unshift({resolve:r,reject:s}),t._values.unshift(e)})},Object.defineProperty(e.prototype,"length",{get:function(){return this._deferreds.length},enumerable:!0,configurable:!0}),e.prototype.process=function(){return 0!==this.length&&(this._deferreds.shift().resolve(this._values.shift()),!0)},e.prototype.cancelAll=function(){for(var e=r.createAbortError(),t=0,s=this._deferreds;t<s.length;t++){s[t].reject(e)}this._deferreds.length=0,this._values.length=0},e}();t.PromiseQueue=s});