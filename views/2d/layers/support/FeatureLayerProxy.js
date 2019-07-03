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

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/tsSupport/assignHelper","../../../../core/tsSupport/generatorHelper","../../../../core/tsSupport/awaiterHelper","../../../../core/Accessor","../../../../core/Promise","../../../../core/promiseUtils","../../../../core/requireUtils","../../../../core/workers","../../../../core/accessorSupport/decorators","module"],function(e,t,o,r,n,i,c,s,u,l,a,p,d,y){function f(e){return Array.isArray(e)}Object.defineProperty(t,"__esModule",{value:!0});var v=function(t){function n(e){return t.call(this,e)||this}return o(n,t),n.prototype.initialize=function(){this._controller=l.createAbortController(),this.addResolvingPromise(this._startWorker(this._controller.signal))},n.prototype.destroy=function(){this._connection.close(),this._controller.abort()},Object.defineProperty(n.prototype,"tileRenderer",{set:function(e){this.client.tileRenderer=e},enumerable:!0,configurable:!0}),n.prototype.startup=function(e,t,o){var r=this._controller.signal,n=f(o.source)?{transferList:o.source,signal:r}:void 0,i=e.tileInfo.toJSON(),c={service:o,config:t,tileInfo:i};return this._connection.invoke("startup",c,n)},n.prototype.update=function(e,t){var o={config:e,options:t};return this._connection.invoke("update",o)},n.prototype.refresh=function(){return this._connection.invoke("controller.refresh")},n.prototype.redraw=function(){return this._connection.invoke("controller.redraw")},n.prototype.setViewState=function(e){return this._connection.invoke("setViewState",e.toJSON())},n.prototype.queryFeatures=function(e,t){return this._connection.invoke("controller.queryFeatures",e.toJSON(),t)},n.prototype.queryObjectIds=function(e,t){return this._connection.invoke("controller.queryObjectIds",e.toJSON(),t)},n.prototype.queryFeatureCount=function(e,t){return this._connection.invoke("controller.queryFeatureCount",e.toJSON(),t)},n.prototype.queryExtent=function(e,t){return this._connection.invoke("controller.queryExtent",e.toJSON(),t)},n.prototype.queryLatestObservations=function(e,t){return this._connection.invoke("controller.queryLatestObservations",e.toJSON(),t)},n.prototype.getObjectId=function(e){return this._connection.invoke("controller.getObjectId",e)},n.prototype.getLocalId=function(e){return this._connection.invoke("controller.getLocalId",e)},n.prototype.mapValidLocalIds=function(e){return this._connection.invoke("controller.mapValidLocalIds",e)},n.prototype.onEdits=function(e){var t=e.addedFeatures,o=e.deletedFeatures,r=e.updatedFeatures;return this._connection.invoke("controller.onEdits",{addedFeatures:t,deletedFeatures:o,updatedFeatures:r})},n.prototype.enableEvent=function(e,t){return this._connection.invoke("controller.enableEvent",{name:e,value:t})},n.prototype._startWorker=function(t){return c(this,void 0,void 0,function(){var o,r;return i(this,function(n){switch(n.label){case 0:return o=a.getAbsMid("../features/Pipeline",e,y),[4,p.open(o,{client:this.client,strategy:"dedicated",signal:t})];case 1:return r=n.sent(),this._connection=r,[2]}})})},r([d.property()],n.prototype,"client",void 0),r([d.property()],n.prototype,"tileRenderer",null),n=r([d.subclass("esri.views.2d.layers.support.FeatureLayerProxy")],n)}(d.declared(s,u));t.default=v});