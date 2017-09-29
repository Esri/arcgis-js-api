// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../support/PromiseLightweight"],function(t,e,r,i){var o=function(t){function e(e,r){var i=t.call(this)||this;return i.symbol=null,i.graphics3DSymbol=null,i.symbol=e,e.fetchSymbol().then(function(t){if(i.isRejected())throw new Error;i.graphics3DSymbol=r(t)}).then(function(){if(i.isRejected())throw new Error;i.graphics3DSymbol.then(function(){i.isRejected()||i.resolve()},function(t){i.isRejected()||i.reject(t)})}).otherwise(function(t){i.isRejected()||i.reject(t)}),i}return r(e,t),e.prototype.createGraphics3DGraphic=function(t,e){return this.graphics3DSymbol.createGraphics3DGraphic(t,e,this)},e.prototype.layerPropertyChanged=function(t,e){return this.graphics3DSymbol.layerPropertyChanged(t,e)},e.prototype.applyRendererDiff=function(t,e,r){return this.graphics3DSymbol.applyRendererDiff(t,e,r)},e.prototype.getFastUpdateStatus=function(){return this.graphics3DSymbol?this.graphics3DSymbol.getFastUpdateStatus():{loading:1,fast:0,slow:0}},e.prototype.setDrawOrder=function(t,e){return this.graphics3DSymbol.setDrawOrder(t,e)},e.prototype.destroy=function(){this.isFulfilled()||this.reject(),this.graphics3DSymbol&&this.graphics3DSymbol.destroy()},e}(i.Promise);return o});