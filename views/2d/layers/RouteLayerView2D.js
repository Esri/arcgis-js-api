// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../core/Handles","../../../core/promiseUtils","../../../core/accessorSupport/decorators","./LayerView2D","./graphics/GraphicsView2D","../../layers/LayerView"],(function(e,r,t,i,s,n,a,p,o){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r._handles=new i,r._popupTemplates=new Map,r.graphicsViews=[],r}return t.__extends(r,e),r.prototype.hitTest=function(e,r){var t=this;if(this.suspended||!this.graphicsViews.length)return s.resolve();var i=this.graphicsViews.map((function(t){return t.hitTest(e,r)}));return s.all(i).then((function(e){return e.filter((function(e,r){return e&&(e.popupTemplate=t._popupTemplates.get(t.graphicsViews[r]),e.layer=t.layer,e.sourceLayer=t.layer),!!e}))[0]||null}))},r.prototype.update=function(e){if(this.graphicsViews)for(var r=0,t=this.graphicsViews;r<t.length;r++){t[r].processUpdate(e)}},r.prototype.attach=function(){var e=this;this.layer.featureCollections.forEach((function(r){var t=new p.default({view:e.view,graphics:r.source,requestUpdateCallback:function(){return e.requestUpdate()}});t.renderer=r.renderer,e._popupTemplates.set(t,r.popupTemplate),e.graphicsViews.push(t),e.container.addChild(t.container)}))},r.prototype.detach=function(){this.container.removeAllChildren();for(var e=0,r=this.graphicsViews;e<r.length;e++){var t=r[e];t.destroy(),t.view=null,t.renderer=null}this.graphicsViews.length=0,this._handles.removeAll(),this._popupTemplates=null},r.prototype.moveStart=function(){},r.prototype.moveEnd=function(){},r.prototype.viewChange=function(){for(var e=0,r=this.graphicsViews;e<r.length;e++){r[e].viewChange()}},r=t.__decorate([n.subclass("esri.views.2d.layers.RouteLayerView2D")],r)}(a.LayerView2DMixin(o))}));