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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/tsSupport/assignHelper","../../../../geometry","../../../../core/Accessor","../../../../core/Promise","../../../../core/promiseUtils","../../../../core/requireUtils","../../../../core/workers","../../../../core/accessorSupport/decorators","../../../../tasks/support/FeatureSet","./util","module"],function(e,t,o,r,n,i,c,u,s,p,l,a,y,f,d){function S(e){return e&&"esri.layers.graphics.sources.CSVSource"===e.declaredClass}function v(e){return Array.isArray(e)}Object.defineProperty(t,"__esModule",{value:!0});var O=function(t){function n(e){return t.call(this,e)||this}return o(n,t),n.prototype.initialize=function(){var t=this;this.addResolvingPromise(l.open(p.getAbsMid("../features/Pipeline",e,d),{client:this.client,strategy:"dedicated"}).then(function(e){return t._connection=e,t._getStartupOptions(t.layer,t.tileInfo)}).then(function(e){return v(e.service.source)?t._connection.invoke("startup",e,e.service.source):t._connection.invoke("startup",e)}))},n.prototype.destroy=function(){this._connection&&this._connection.close()},n.prototype.configure=function(e){return this._connection.invoke("configure",e)},n.prototype.registerTile=function(e){return this._connection.invoke("registerTile",e.id)},n.prototype.unregisterTile=function(e){return this._connection.invoke("unregisterTile",e.id)},n.prototype.setViewState=function(e){return this._connection.invoke("controller.setViewState",e.toJSON())},n.prototype.queryFeatures=function(e){return this._connection.invoke("controller.queryFeatures",e.toJSON()).then(function(e){return y.fromJSON(e)}).then(function(e){return e&&e.features})},n.prototype.queryObjectIds=function(e){return this._connection.invoke("controller.queryObjectIds",e.toJSON())},n.prototype.queryFeatureCount=function(e){return this._connection.invoke("controller.queryFeatureCount",e.toJSON())},n.prototype.queryExtent=function(e){return this._connection.invoke("controller.queryExtent",e.toJSON()).then(function(e){return{count:e.count,extent:i.Extent.fromJSON(e.extent)}})},n.prototype._getStartupOptions=function(e,t){var o=e.source;return S(o)?o.openPorts().then(function(o){return{service:{capabilities:e.capabilities,fields:e.fields.map(function(e){return e.toJSON()}),fullExtent:e.fullExtent.toJSON(),geometryType:f.toJSONGeometryType(e.geometryType),objectIdField:e.objectIdField,source:o},tileInfo:t.toJSON()}}):s.resolve({service:{capabilities:e.capabilities,fields:e.fields.map(function(e){return e.toJSON()}),fullExtent:e.fullExtent.toJSON(),geometryType:f.toJSONGeometryType(e.geometryType),objectIdField:e.objectIdField,source:e.url+"/"+e.layerId},tileInfo:t.toJSON()})},r([a.property({constructOnly:!0})],n.prototype,"client",void 0),r([a.property({constructOnly:!0})],n.prototype,"layer",void 0),r([a.property({constructOnly:!0})],n.prototype,"tileInfo",void 0),n=r([a.subclass()],n)}(a.declared(c,u));t.default=O});