// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../support/PromiseLightweight"],function(t,r,e,i){var o=function(t){function r(r,e){var i=this;t.call(this),this.symbol=null,this.graphics3DSymbol=null,this.symbol=r,r.fetchSymbol().then(function(t){if(i.isRejected())throw new Error;i.graphics3DSymbol=e(t)}).then(function(){if(i.isRejected())throw new Error;i.graphics3DSymbol.then(function(){i.isRejected()||i.resolve()},function(t){throw t})}).otherwise(function(t){i.isRejected()||i.reject(t)})}return e(r,t),r.prototype.createGraphics3DGraphic=function(t,r){return this.graphics3DSymbol.createGraphics3DGraphic(t,r,this)},r.prototype.layerPropertyChanged=function(t,r){return this.graphics3DSymbol.layerPropertyChanged(t,r)},r.prototype.setDrawOrder=function(t,r){return this.graphics3DSymbol.setDrawOrder(t,r)},r.prototype.destroy=function(){this.isFulfilled()||this.reject(),this.graphics3DSymbol&&this.graphics3DSymbol.destroy()},r}(i.Promise);return o});