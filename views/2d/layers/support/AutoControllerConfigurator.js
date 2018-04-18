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

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/Accessor","../../../../core/Error","../../../../core/promiseUtils","../../../../core/accessorSupport/decorators","../../../../tasks/QueryTask","../../../../tasks/support/StatisticDefinition","./util"],function(e,r,t,i,o,a,n,s,u,l,p){var c;!function(e){e[e.Snapshot=0]="Snapshot",e[e.OnDemand=1]="OnDemand"}(c||(c={}));return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t(r,e),Object.defineProperty(r.prototype,"_countThresholdForAuto",{get:function(){var e,r=this.layerView.layer.geometryType;return"polyline"===r||"polygon"===r||"multipoint"===r?e=2e3:"point"===r&&(e=4e3),e},enumerable:!0,configurable:!0}),r.prototype.updateControllerConfiguration=function(){var e=this,r=function(){return e.layerView.layer.source&&"esri.layers.graphics.sources.CSVSource"===e.layerView.layer.source.declaredClass};return this._getModePromise().then(function(t){var i=t===c.Snapshot?"snapshot":"on-demand";e._set("controllerConfiguration",{type:i,url:e.layerView.layer.parsedUrl.path,capabilities:{supportsQuantization:e.layerView.layer.capabilities.query.supportsQuantization},definitionExpression:e.layerView.layer.definitionExpression,queryInMainThread:r(),processing:e.layerView.layer.processing&&e.layerView.layer.processing.toWorker()||null,objectIdField:e.layerView.layer.objectIdField,geometryType:p.toJSONGeometryType(e.layerView.layer.geometryType),outFields:e.layerView.layer.outFields,spatialReference:e.layerView.view.spatialReference.toJSON()})})},r.prototype._getModePromise=function(){var e=this;return this.layerView.layer.source.parsedUrl?this.layerView.layer.when(function(){e._verifyCapabilities()}).then(function(){return e._figureOutMode().then(function(e){return e})}):n.reject()},r.prototype._figureOutMode=function(){return this._isStatisticsSupported()?this._checkByStatistics():this._checkByCount()},r.prototype._isStatisticsSupported=function(){return/(https?:)?\/\/services.*\.arcgis\.com/i.test(this.layerView.layer.source.parsedUrl.path)},r.prototype._checkByStatistics=function(){var e=this,r=this.layerView.layer,t=r.source.parsedUrl.path,i=r.createQuery();return i.outStatistics=[new l({statisticType:"exceedslimit",maxPointCount:4e3,maxRecordCount:2e3,maxVertexCount:25e4,outStatisticFieldName:"exceedslimit"})],new u({url:t+"/query"}).execute(i).then(function(r){var t=r&&r.features&&r.features[0];if(0===(t&&t.attributes&&t.attributes.exceedslimit)){var i=e.layerView.layer,o=i.maxRecordCount;if(i.get("capabilities.query.supportsPagination")||o>=e._countThresholdForAuto)return c.Snapshot}return c.OnDemand})},r.prototype._checkByCount=function(){var e=this,r=this.layerView.layer;return r.queryFeatureCount().then(function(t){return t<=e._countThresholdForAuto&&t<=r.maxRecordCount?c.Snapshot:c.OnDemand})},r.prototype._verifyCapabilities=function(){if(!this.layerView.layer.capabilities.operations.supportsQuery)throw new a("graphicscontroller:query-capability-required","Service requires query capabilities to be used as a feature layer",{layer:this.layerView.layer})},i([s.property()],r.prototype,"layerView",void 0),i([s.property({readOnly:!0})],r.prototype,"controllerConfiguration",void 0),r=i([s.subclass("esri.views.2d.layers.support.AutoControllerConfigurator")],r)}(s.declared(o))});