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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/paramHelper","../../../core/Error","../../../core/Handles","../../../core/promiseUtils","../../../core/accessorSupport/decorators","../../../layers/graphics/QueryEngine","../../../layers/graphics/controllers/support/controllerUtils","../engine/DOMContainer","./LayerView2D","./support/FeaturesView2D","../../layers/RefreshableLayerView"],function(e,r,t,n,i,o,u,s,a,p,l,c,y,h,d){function f(e){return e&&null!=e.update}return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r._handles=new u,r.container=new c,r}return t(r,e),r.prototype.queryGraphics=function(){return this._queryEngine?this._queryEngine.queryFeatures():this._rejectQuery()},r.prototype.queryFeatures=function(e){return this._queryEngine?this._queryEngine.queryFeatures(e):this._rejectQuery()},r.prototype.queryFeaturesJSON=function(e){return this._queryEngine?this._queryEngine.queryFeatures(e).then(function(e){return e.toJSON()}):this._rejectQuery()},r.prototype.queryObjectIds=function(e){return this._queryEngine?this._queryEngine.queryObjectIds(e):this._rejectQuery()},r.prototype.queryFeatureCount=function(e){return this._queryEngine?this._queryEngine.queryFeatureCount(e):this._rejectQuery()},r.prototype.queryExtent=function(e){return this._queryEngine?this._queryEngine.queryExtent(e):this._rejectQuery()},r.prototype.hitTest=function(e,r){return this.suspended||!this.featuresView?s.resolve():this.featuresView.hitTest(e,r)},r.prototype.update=function(e){f(this.controller)?this.controller.update(e):f(this.featuresView)&&this.featuresView.update(e)},r.prototype.attach=function(){var e=this;this.layer.createGraphicsController({layerView:this}).then(function(r){if(e.attached){e._set("controller",r),e.requestUpdate();var t=new h;t.mapView=e.view,t.graphics=r.graphics,t.layer=e.layer,t.renderer=e.layer.renderer,e._handles.add(e.layer.watch("renderer",function(){t.renderer=e.layer.renderer})),e._handles.add(e.layer.on("graphic-update",function(e){return t.graphicUpdateHandler(e)})),e.featuresView=t,e._queryEngine=new p({layer:e.layer,dataSpatialReference:e.view.spatialReference,objectIdField:e.layer.objectIdField}),e._queryEngine.features=r.graphics,e._queryEngine.objectIdField=e.layer.objectIdField,e.container.addChild(t.container)}})},r.prototype.detach=function(){this.container.removeAllChildren(),this._handles.removeAll(),this.featuresView&&(this.featuresView.destroy(),this.featuresView=null),this.controller&&(this.controller.destroy&&this.controller.destroy(),this._set("controller",null))},r.prototype.moveStart=function(){this.requestUpdate()},r.prototype.viewChange=function(){this.requestUpdate()},r.prototype.moveEnd=function(){this.requestUpdate()},r.prototype.doRefresh=function(){this.updateRequested||this.suspended||this.controller&&l.isRefreshable(this.controller.activeController)&&this.controller.activeController.refresh()},r.prototype.isUpdating=function(){return null==this.featuresView||!0===this.get("controller.updating")},r.prototype._rejectQuery=function(){return s.reject(new o("FeatureLayerView2D","Not ready to execute query"))},n([a.property({readOnly:!0})],r.prototype,"controller",void 0),n([a.property()],r.prototype,"featuresView",void 0),n([a.property({dependsOn:["controller.updating","featuresView","featuresView.updating"]})],r.prototype,"updating",void 0),r=n([a.subclass("esri.views.2d.layers.FeatureLayerView2DLegacy")],r)}(a.declared(y,d))});