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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../Graphic","../../../core/Accessor","../../../core/Collection","../../../core/Error","../../../core/Promise","../../../core/promiseUtils","../../../core/accessorSupport/decorators","../../../tasks/QueryTask","../../../tasks/support/StatisticDefinition"],function(t,e,r,o,i,n,u,a,s,p,c,l,y){return function(e){function n(){var t=null!==e&&e.apply(this,arguments)||this;return t.maxPointCountForAuto=4e3,t.maxRecordCountForAuto=2e3,t.maxVertexCountForAuto=25e4,t}return r(n,e),n.prototype.initialize=function(){var t=this,e=this.layer.when(function(){t._verifyCapabilities()}).then(function(){return t._figureOutMode().then(function(e){return t._createController(e)})}).then(function(e){return t._set("activeController",e)});this.addResolvingPromise(e)},n.prototype.destroy=function(){this.activeController&&(this.activeController.destroy(),this._set("activeController",null))},Object.defineProperty(n.prototype,"countThresholdForAuto",{get:function(){var t,e=this.layer.geometryType;return"polyline"===e||"polygon"===e||"multipoint"===e?t=this.maxRecordCountForAuto:"point"===e&&(t=this.maxPointCountForAuto),t},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"updating",{get:function(){return!1===this.isFulfilled()||!0===this.get("activeController.updating")},enumerable:!0,configurable:!0}),n.prototype._figureOutMode=function(){return this._isStatisticsSupported()?this._checkByStatistics():this._checkByCount()},n.prototype._isStatisticsSupported=function(){if(!this.layer.capabilities.query.supportsStatistics)return!1;var t=/(https?:)?\/\/services.*\.arcgis\.com/i,e=this.layer.parsedUrl;return e&&t.test(e.path)},n.prototype._checkByStatistics=function(){var t=this,e=this.layer,r=e.parsedUrl.path,o=e.createQuery();return o.outStatistics=[new y({statisticType:"exceedslimit",maxPointCount:this.maxPointCountForAuto,maxRecordCount:this.maxRecordCountForAuto,maxVertexCount:this.maxVertexCountForAuto,outStatisticFieldName:"exceedslimit"})],new l({url:r+"/query"}).execute(o).then(function(e){var r=e&&e.features&&e.features[0];if(0===(r&&r.attributes&&r.attributes.exceedslimit)){var o=t.layer,i=o.maxRecordCount;if(o.get("capabilities.query.supportsPagination")||i>=t.countThresholdForAuto)return 0}return 1})},n.prototype._checkByCount=function(){var t=this,e=this.layer;return e.queryFeatureCount().then(function(r){return r<=t.countThresholdForAuto&&r<=e.maxRecordCount?0:1})},n.prototype._createController=function(e){var r=this;return p.create(function(e){return t(["./SnapshotController"],e)}).then(function(t){return new t({layer:r.layer,layerView:r.layerView,graphics:r.graphics})}).catch(function(t){throw new Error("Module path not found for controller type: "+(0===e?"snapshot":"on demand"))})},n.prototype._verifyCapabilities=function(){if(!this.layer.get("capabilities.operations.supportsQuery"))throw new a("graphicscontroller:query-capability-required","Service requires query capabilities to be used as a feature layer",{layer:this.layer})},o([c.property()],n.prototype,"activeController",void 0),o([c.property({dependsOn:["layer.geometryType"]})],n.prototype,"countThresholdForAuto",null),o([c.property({type:u.ofType(i)})],n.prototype,"graphics",void 0),o([c.property()],n.prototype,"layer",void 0),o([c.property()],n.prototype,"layerView",void 0),o([c.property({dependsOn:["activeController.updating"]})],n.prototype,"updating",null),o([c.aliasOf("activeController.update")],n.prototype,"update",void 0),n=o([c.subclass("esri.layers.graphics.controllers.AutoController2D")],n)}(c.declared(n,s))});