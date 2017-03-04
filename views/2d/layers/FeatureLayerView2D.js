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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../../core/HandleRegistry","./LayerView2D","./support/FeaturesView2D"],function(e,t,r,o,n,i,s,u){var a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._handles=new i,t.featuresView=new u,t.container=t.featuresView.container,t}return r(t,e),t.prototype.queryGraphics=function(){return this.featuresView.queryGraphics()},t.prototype.queryFeatures=function(e){return this.featuresView.queryFeatures(e)},t.prototype.queryObjectIds=function(e){return this.featuresView.queryObjectIds(e)},t.prototype.queryFeatureCount=function(e){return this.featuresView.queryFeatureCount(e)},t.prototype.queryExtent=function(e){return this.featuresView.queryExtent(e)},t.prototype.hitTest=function(e,t){return this.featuresView.hitTest(e,t)},t.prototype.update=function(e){this.controller&&this.controller.update&&this.controller.update(e)},t.prototype.attach=function(){var e=this;this.layer.createGraphicsController({layerView:this}).then(function(t){e.attached&&(e._set("controller",t),e.requestUpdate(),e.featuresView.mapView=e.view,e.featuresView.graphics=t.graphics,e.featuresView.layer=e.layer,e.featuresView.renderer=e.layer.renderer,e._handles.add(e.layer.watch("renderer",function(){e.featuresView.renderer=e.layer.renderer})))})},t.prototype.detach=function(){this.featuresView.graphics=null,this.featuresView.renderer=null,this._handles.removeAll(),this.controller&&(this.controller.destroy&&this.controller.destroy(),this._set("controller",null))},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.isUpdating=function(){return null==this.controller||this.get("controller.updating")===!0||0===this.get("controller._socketConnector.status")},t}(n.declared(s));return o([n.property({readOnly:!0})],a.prototype,"controller",void 0),o([n.property({dependsOn:["controller.updating","controller._socketConnector.status"]})],a.prototype,"updating",void 0),a=o([n.subclass("esri.views.2d.layers.FeatureLayerView2D")],a)});