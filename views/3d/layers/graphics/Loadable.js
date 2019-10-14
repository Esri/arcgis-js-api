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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/generatorHelper","../../../../core/tsSupport/awaiterHelper","../../../../core/promiseUtils"],function(t,o,r,e,l){Object.defineProperty(o,"__esModule",{value:!0});var n=function(){function t(){this._abortController=null,this._loadStatus=0,this._loader=null,this.logger=null}return Object.defineProperty(t.prototype,"loadStatus",{get:function(){return this._loadStatus},enumerable:!0,configurable:!0}),t.prototype.load=function(){return e(this,void 0,void 0,function(){var t=this;return r(this,function(o){return this._loader||(this._abortController=l.createAbortController(),this._loader=this.doLoad(this._abortController.signal).then(function(){t._abortController=null,t._loadStatus=1},function(o){throw t._abortController=null,t._loadStatus=2,!l.isAbortError(o)&&t.logger&&o.message&&t.logger.warn(o.message),o})),[2,this._loader]})})},t.prototype.abortLoad=function(){this._abortController?(this._abortController.abort(),this._abortController=null):0===this._loadStatus&&(this._loadStatus=2),this._loader=null},t}();o.Loadable=n});