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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Handles","../../../core/promiseUtils","../../../core/accessorSupport/decorators","../engine/Container","./LayerView2D","./support/GraphicsView2D"],function(e,t,i,r,p,s,n,o,a,h){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._handles=new p,t.container=new o.Container,t}return i(t,e),t.prototype.attach=function(){this.graphicsView=new h.default({view:this.view,graphics:this.layer.graphics}),this.graphicsView.install(this.container),this._handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler))},t.prototype.detach=function(){this.graphicsView.destroy(),this._handles.removeAll()},t.prototype.hitTest=function(e,t){return this.suspended||!this.graphicsView?s.resolve(null):this.graphicsView.hitTest(e,t)},t.prototype.fetchPopupFeatures=function(e,t){return this.graphicsView?this.graphicsView.searchFeatures(e).then(function(e){return e.filter(function(e){return!!e.popupTemplate})}):s.resolve()},t.prototype.update=function(e){this.graphicsView.update(e)},t.prototype.moveStart=function(){this.requestUpdate()},t.prototype.viewChange=function(){this.requestUpdate()},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.isUpdating=function(){return!this.graphicsView||this.graphicsView.updating},t.prototype.queryGraphics=function(){return s.resolve(this.graphicsView.graphics)},r([n.property()],t.prototype,"graphicsView",void 0),r([n.property({dependsOn:["graphicsView.updating"]})],t.prototype,"updating",void 0),t=r([n.subclass("esri.views.2d.layers.GraphicsLayerView2D")],t)}(n.declared(a))});