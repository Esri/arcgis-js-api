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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../Graphic","../../../core/Accessor","../../../core/Collection","../../../core/Error","../../../core/Promise","../../../core/promiseUtils","../../../core/accessorSupport/decorators","../../../tasks/QueryTask","../../../tasks/support/StatisticDefinition"],function(t,e,r,o,n,i,a,u,s,p,c,l,y){var h;return function(t){t[t.Snapshot=0]="Snapshot",t[t.OnDemand=1]="OnDemand"}(h||(h={})),function(e){function i(){var t=null!==e&&e.apply(this,arguments)||this;return t.maxPointCountForAuto=4e3,t.maxRecordCountForAuto=2e3,t.maxVertexCountForAuto=25e4,t}return r(i,e),i.prototype.initialize=function(){var t=this,e=this.layer.when(function(){t._verifyCapabilities()}).then(function(){return t._figureOutMode().then(function(e){return t._createController(e)})}).then(function(e){return t._set("activeController",e)});this.addResolvingPromise(e)},i.prototype.destroy=function(){this.activeController&&(this.activeController.destroy(),this._set("activeController",null))},Object.defineProperty(i.prototype,"countThresholdForAuto",{get:function(){var t,e=this.layer.geometryType;return"polyline"===e||"polygon"===e||"multipoint"===e?t=this.maxRecordCountForAuto:"point"===e&&(t=this.maxPointCountForAuto),t},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"updating",{get:function(){return!1===this.isFulfilled()||!0===this.get("activeController.updating")},enumerable:!0,configurable:!0}),i.prototype._figureOutMode=function(){return this._isStatisticsSupported()?this._checkByStatistics():this._checkByCount()},i.prototype._isStatisticsSupported=function(){return!!this.layer.source.parsedUrl&&/(https?:)?\/\/services.*\.arcgis\.com/i.test(this.layer.source.parsedUrl.path)},i.prototype._checkByStatistics=function(){var t=this,e=this.layer,r=e.source.parsedUrl.path,o=e.createQuery();return o.outStatistics=[new y({statisticType:"exceedslimit",maxPointCount:this.maxPointCountForAuto,maxRecordCount:this.maxRecordCountForAuto,maxVertexCount:this.maxVertexCountForAuto,outStatisticFieldName:"exceedslimit"})],new l({url:r+"/query"}).execute(o).then(function(e){var r=e&&e.features&&e.features[0];if(0===(r&&r.attributes&&r.attributes.exceedslimit)){var o=t.layer,n=o.maxRecordCount;if(o.get("capabilities.query.supportsPagination")||n>=t.countThresholdForAuto)return h.Snapshot}return h.OnDemand})},i.prototype._checkByCount=function(){var t=this,e=this.layer;return e.queryFeatureCount().then(function(r){return r<=t.countThresholdForAuto&&r<=e.maxRecordCount?h.Snapshot:h.OnDemand})},i.prototype._createController=function(e){var r=this;return(e===h.OnDemand?p.create(function(e){return t(["./OnDemandController2D"],e)}):p.create(function(e){return t(["./SnapshotController"],e)})).then(function(t){return new t({layer:r.layer,layerView:r.layerView,graphics:r.graphics})}).catch(function(t){throw new Error("Module path not found for controller type: "+(e===h.Snapshot?"snapshot":"on demand"))})},i.prototype._verifyCapabilities=function(){if(!this.layer.get("capabilities.operations.supportsQuery"))throw new u("graphicscontroller:query-capability-required","Service requires query capabilities to be used as a feature layer",{layer:this.layer})},o([c.property()],i.prototype,"activeController",void 0),o([c.property({dependsOn:["layer.geometryType"]})],i.prototype,"countThresholdForAuto",null),o([c.property({type:a.ofType(n)})],i.prototype,"graphics",void 0),o([c.property()],i.prototype,"layer",void 0),o([c.property()],i.prototype,"layerView",void 0),o([c.property({dependsOn:["activeController.updating"]})],i.prototype,"updating",null),o([c.aliasOf("activeController.update")],i.prototype,"update",void 0),i=o([c.subclass("esri.layers.graphics.controllers.AutoController2D")],i)}(c.declared(i,s))});