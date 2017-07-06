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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../engine/DOMContainer","./LayerView2D","./support/FeaturesView2D"],function(e,t,r,n,a,o,p,i){var u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._featuresViewMap={},t._targetFeaturesView=null,t._popupTemplates=new Map,t.container=new o,t.featuresViews=[],t}return r(t,e),t.prototype.hitTest=function(e,t){var r,n=this;return this.featuresViews.forEach(function(a){a.hitTest(e,t)&&(r=a.hitTest(e,t),n._targetFeaturesView=a)}),r?r.then(function(e){return e.popupTemplate=n._popupTemplates.get(n._targetFeaturesView),e}):null},t.prototype.update=function(e){},t.prototype.attach=function(){var e=this;this.layer.featureCollections.forEach(function(t){var r=new i;r.graphics=t.source,r.mapView=e.view,r.renderer=t.renderer,e._popupTemplates.set(r,t.popupTemplate),e.featuresViews.push(r),e.container.addChild(r.container)})},t.prototype.detach=function(){this.container.removeAllChildren(),this.featuresViews.forEach(function(e){e.graphics=null,e.mapView=null,e.renderer=null,e=null}),this._featuresViewMap=null,this._targetFeaturesView=null,this._popupTemplates=null},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){},t.prototype.moveEnd=function(){},t}(a.declared(p));return u=n([a.subclass("esri.views.2d.layers.MapNotesLayerView2D")],u)});