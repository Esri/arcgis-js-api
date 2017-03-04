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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../../core/requireUtils","../../../Graphic","../../../core/Accessor","../../../core/Collection","../../../core/Promise","../../../tasks/QueryTask","../../../tasks/support/StatisticDefinition"],function(t,e,r,o,n,i,a,u,s,p,c,l){var d;!function(t){t[t.Snapshot=0]="Snapshot",t[t.OnDemand=1]="OnDemand"}(d||(d={}));var h=function(e){function o(){var t=null!==e&&e.apply(this,arguments)||this;return t.controllerModulePaths=(r={},r[d.Snapshot]="./SnapshotController",r[d.OnDemand]="./OnDemandController2D",r),t.maxPointCountForAuto=4e3,t.maxRecordCountForAuto=2e3,t.maxVertexCountForAuto=25e4,t;var r}return r(o,e),o.prototype.initialize=function(){var t=this,e=this.layer.then(function(){return t._figureOutMode().then(function(e){return t._createController(e)})}).then(function(e){return t._set("activeController",e)});this.addResolvingPromise(e)},o.prototype.destroy=function(){this.activeController&&(this.activeController.destroy(),this._set("activeController",null))},Object.defineProperty(o.prototype,"countThresholdForAuto",{get:function(){var t,e=this.layer.geometryType;return"polyline"===e||"polygon"===e||"multipoint"===e?t=this.maxRecordCountForAuto:"point"===e&&(t=this.maxPointCountForAuto),t},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"updating",{get:function(){return this.isFulfilled()===!1||this.get("activeController.updating")===!0},enumerable:!0,configurable:!0}),o.prototype._figureOutMode=function(){return this._isStatisticsSupported()?this._checkByStatistics():this._checkByCount()},o.prototype._isStatisticsSupported=function(){var t=/(https?:)?\/\/services.*\.arcgis\.com/i;return t.test(this.layer.source.parsedUrl.path)},o.prototype._checkByStatistics=function(){var t=this,e=this.layer,r=e.source.parsedUrl.path,o=e.createQuery();o.outStatistics=[new l({statisticType:"exceedslimit",maxPointCount:this.maxPointCountForAuto,maxRecordCount:this.maxRecordCountForAuto,maxVertexCount:this.maxVertexCountForAuto,outStatisticFieldName:"exceedslimit"})];var n=new c({url:r+"/query"});return n.execute(o).then(function(e){var r=e&&e.features&&e.features[0],o=r&&r.attributes&&r.attributes.exceedslimit;if(0===o){var n=t.layer,i=n.maxRecordCount,a=n.advancedQueryCapabilities&&n.advancedQueryCapabilities.supportsPagination;if(a||i>=t.countThresholdForAuto)return d.Snapshot}return d.OnDemand})},o.prototype._checkByCount=function(){var t=this,e=this.layer,r=new c({url:e.source.parsedUrl.path+"/query"});return r.executeForCount(e.createQuery()).then(function(r){return r<=t.countThresholdForAuto&&r<=e.maxRecordCount?d.Snapshot:d.OnDemand})},o.prototype._createController=function(e){var r=this;return i.when(t,this.controllerModulePaths[e]).then(function(t){return new t({layer:r.layer,layerView:r.layerView,graphics:r.graphics})}).otherwise(function(t){throw new Error("Module path not found for controller type: "+(e===d.Snapshot?"snapshot":"on demand"))})},o}(n.declared(u,p));return o([n.property()],h.prototype,"activeController",void 0),o([n.property({dependsOn:["layer.geometryType"]})],h.prototype,"countThresholdForAuto",null),o([n.property()],h.prototype,"controllerModulePaths",void 0),o([n.property({type:s.ofType(a)})],h.prototype,"graphics",void 0),o([n.property()],h.prototype,"layer",void 0),o([n.property()],h.prototype,"layerView",void 0),o([n.property({dependsOn:["activeController.updating"]})],h.prototype,"updating",null),o([n.aliasOf("activeController.update")],h.prototype,"update",void 0),h=o([n.subclass("esri.layers.graphics.controllers.AutoController2D")],h)});