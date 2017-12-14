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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../../core/promiseUtils","../engine/DOMContainer","./LayerView2D","./support/FeaturesView2D"],function(e,t,r,n,o,p,i,a,s){var u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._popupTemplates=new Map,t.container=new i,t.featuresViews=[],t}return r(t,e),t.prototype.hitTest=function(e,t){var r=this;if(this.suspended||!this.featuresViews.length)return p.resolve();var n=this.featuresViews.map(function(r){return r.hitTest(e,t)});return p.all(n).then(function(e){var t=e.filter(function(e,t){return e&&(e.popupTemplate=r._popupTemplates.get(r.featuresViews[t]),e.layer=r.layer),!!e});return t[0]||null})},t.prototype.update=function(e){},t.prototype.attach=function(){var e=this;this.layer.featureCollections.forEach(function(t){var r=new s;r.graphics=t.source,r.mapView=e.view,r.renderer=t.renderer,e._popupTemplates.set(r,t.popupTemplate),e.featuresViews.push(r),e.container.addChild(r.container)})},t.prototype.detach=function(){this.container.removeAllChildren(),this.featuresViews.forEach(function(e){e.graphics=null,e.mapView=null,e.renderer=null,e=null}),this._popupTemplates=null},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){},t.prototype.moveEnd=function(){},t=n([o.subclass("esri.views.2d.layers.MapNotesLayerView2D")],t)}(o.declared(a));return u});