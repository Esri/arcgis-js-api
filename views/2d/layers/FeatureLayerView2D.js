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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../../core/HandleRegistry","./LayerView2D","./support/FeaturesView2D"],function(e,t,r,o,n,s,i,u){var a=function(e){function t(){e.apply(this,arguments),this._handles=new s,this.featuresView=new u,this.container=this.featuresView.container}return r(t,e),t.prototype.queryGraphics=function(){return this.featuresView.queryGraphics()},t.prototype.queryFeatures=function(e){return this.featuresView.queryFeatures(e)},t.prototype.queryObjectIds=function(e){return this.featuresView.queryObjectIds(e)},t.prototype.queryFeatureCount=function(e){return this.featuresView.queryFeatureCount(e)},t.prototype.queryExtent=function(e){return this.featuresView.queryExtent(e)},t.prototype.hitTest=function(e,t){return this.featuresView.hitTest(e,t)},t.prototype.update=function(e){},t.prototype.attach=function(){var e=this;this.layer.createGraphicsController({layerView:this}).then(function(t){e.attached&&(e._set("controller",t),e.featuresView.mapView=e.view,e.featuresView.graphics=t.graphics,e.featuresView.renderer=e.layer.renderer,e._handles.add(e.layer.watch("renderer",function(){e.featuresView.renderer=e.layer.renderer})))})},t.prototype.detach=function(){this.featuresView.graphics=null,this.featuresView.renderer=null,this._handles.removeAll(),this.controller&&(this.controller.destroy(),this._set("controller",null))},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){},t.prototype.moveEnd=function(){},t.prototype.isUpdating=function(){return null==this.controller||this.get("controller.isQueryInProgress")===!0||0===this.get("controller._socketConnector.status")},o([n.property({readOnly:!0})],t.prototype,"controller",void 0),o([n.property({dependsOn:["controller.isQueryInProgress","controller._socketConnector.status"]})],t.prototype,"updating",void 0),t=o([n.subclass("esri.views.2d.layers.FeatureLayerView2D")],t)}(n.declared(i));return a});