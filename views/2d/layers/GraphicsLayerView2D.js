// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../Graphic","../../../core/Collection","../../../core/Handles","../../../core/promiseUtils","../../../core/accessorSupport/decorators","../engine/Container","./LayerView2D","./graphics/GraphicsView2D","../../layers/LayerView"],function(e,t,i,r,n,o,s,p,a,c,h,u,l,d,g){var f={remove:function(){},pause:function(){},resume:function(){}};return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._handles=new a,t.container=new u.Container,t}return i(t,e),t.prototype.attach=function(){var e=this;this.graphicsView=new d.default({view:this.view,graphics:this.layer.graphics}),this.graphicsView.install(this.container),this._handles.add([this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),this.clips.on("change",function(){return e.graphicsView.container.setClips(e.clips)})]),this.graphicsView.container.setClips(this.clips)},t.prototype.detach=function(){this.graphicsView.destroy(),this._handles.removeAll()},t.prototype.hitTest=function(e,t){return this.suspended||!this.graphicsView?c.resolve(null):this.graphicsView.hitTest(e,t)},t.prototype.fetchPopupFeatures=function(e){return o(this,void 0,void 0,function(){return n(this,function(t){return this.graphicsView?[2,this.graphicsView.searchFeatures(e).then(function(e){return e.filter(function(e){return!!e.popupTemplate})})]:[2,void 0]})})},t.prototype.update=function(e){this.graphicsView.update(e)},t.prototype.moveStart=function(){this.requestUpdate()},t.prototype.viewChange=function(){this.requestUpdate()},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.isUpdating=function(){return!this.graphicsView||this.graphicsView.updating},t.prototype.highlight=function(e,t){var i=this;void 0===t&&(t={});var r;return"number"==typeof e?r=[e]:e instanceof s?r=[e.uid]:Array.isArray(e)&&e.length>0?r="number"==typeof e[0]?e:e.map(function(e){return e&&e.uid}):p.isCollection(e)&&(r=e.map(function(e){return e&&e.uid}).toArray()),r=r.filter(function(e){return null!=e}),r.length?(this.graphicsView.addHighlight(r),{remove:function(){return i.graphicsView.removeHighlight(r)},pause:function(){},resume:function(){}}):f},t.prototype.queryGraphics=function(){return c.resolve(this.graphicsView.graphics)},r([h.property()],t.prototype,"graphicsView",void 0),r([h.property({dependsOn:["graphicsView.updating"]})],t.prototype,"updating",void 0),t=r([h.subclass("esri.views.2d.layers.GraphicsLayerView2D")],t)}(h.declared(l.LayerView2D(g)))});