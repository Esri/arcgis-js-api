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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Handles","../../../core/promiseUtils","../../../core/accessorSupport/decorators","../engine/Container","./LayerView2D","./support/GraphicsView2D"],function(e,t,r,i,n,s,p,o,a,u){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._handles=new n,t._popupTemplates=new Map,t.container=new o.Container,t.graphicsViews=[],t}return r(t,e),t.prototype.hitTest=function(e,t){var r=this;if(this.suspended||!this.graphicsViews.length)return s.resolve();var i=this.graphicsViews.map(function(r){return r.hitTest(e,t)});return s.all(i).then(function(e){return e.filter(function(e,t){return e&&(e.popupTemplate=r._popupTemplates.get(r.graphicsViews[t]),e.layer=r.layer,e.sourceLayer=r.layer),!!e})[0]||null})},t.prototype.update=function(e){if(this.graphicsViews)for(var t=0,r=this.graphicsViews;t<r.length;t++){var i=r[t];i.update(e)}},t.prototype.attach=function(){var e=this;this.layer.featureCollections.forEach(function(t){var r=new u.default({view:e.view,graphics:t.source});r.renderer=t.renderer,e._popupTemplates.set(r,t.popupTemplate),e.graphicsViews.push(r),e.container.addChild(r.container)})},t.prototype.detach=function(){this.container.removeAllChildren(),this.graphicsViews.forEach(function(e){e.destroy(),e.view=null,e.renderer=null}),this.graphicsViews.length=0,this._handles.removeAll(),this._popupTemplates=null},t.prototype.moveStart=function(){this.requestUpdate()},t.prototype.viewChange=function(){this.requestUpdate()},t.prototype.moveEnd=function(){this.requestUpdate()},t=i([p.subclass("esri.views.2d.layers.MapNotesLayerView2D")],t)}(p.declared(a))});