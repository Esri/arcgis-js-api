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

define(["require","exports","../../../../core/tsSupport/extendsHelper","./symbolComplexity","../../support/PromiseLightweight"],function(t,e,r,o,i){return function(t){function e(e,r){var o=t.call(this)||this;return o.symbol=e,o.graphics3DSymbol=null,o.referenced=0,e.fetchSymbol().then(function(t){if(o.isRejected())throw new Error;t.id=o.symbol.id,o.graphics3DSymbol=r(t)}).then(function(){if(o.isRejected())throw new Error;o.graphics3DSymbol.then(function(){o.isRejected()||o.resolve()},function(t){o.isRejected()||o.reject(t)})}).catch(function(t){o.isRejected()||o.reject(t)}),o}return r(e,t),e.prototype.getSymbolLayerSize=function(t,e){e(null)},e.prototype.createGraphics3DGraphic=function(t){return this.graphics3DSymbol.createGraphics3DGraphic(t,this)},Object.defineProperty(e.prototype,"complexity",{get:function(){return this.graphics3DSymbol?this.graphics3DSymbol.complexity:o.emptySymbolComplexity},enumerable:!0,configurable:!0}),e.prototype.globalPropertyChanged=function(t,e){return this.graphics3DSymbol.globalPropertyChanged(t,e)},e.prototype.applyRendererDiff=function(t,e){return this.graphics3DSymbol.applyRendererDiff(t,e)},e.prototype.prepareSymbolPatch=function(t){this.graphics3DSymbol&&this.graphics3DSymbol.prepareSymbolPatch(t)},e.prototype.updateGeometry=function(t,e){return!!this.graphics3DSymbol&&this.graphics3DSymbol.updateGeometry(t,e)},e.prototype.getFastUpdateStatus=function(){return this.graphics3DSymbol?this.graphics3DSymbol.getFastUpdateStatus():{loading:1,fast:0,slow:0}},e.prototype.setDrawOrder=function(t,e){this.graphics3DSymbol&&this.graphics3DSymbol.setDrawOrder(t,e)},e.prototype.destroy=function(){this.isFulfilled()||this.reject(),this.graphics3DSymbol&&this.graphics3DSymbol.destroy(),this.graphics3DSymbol=void 0},Object.defineProperty(e.prototype,"destroyed",{get:function(){return void 0===this.graphics3DSymbol},enumerable:!0,configurable:!0}),e}(i.default)});