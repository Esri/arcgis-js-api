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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../Graphic","../../../core/Collection","../../../core/Handles","../../../core/promiseUtils","../../../core/accessorSupport/decorators","../engine","./LayerView2D","./graphics/GraphicsView2D"],function(e,t,r,i,n,o,p,s,a,u,c,h,d,l){var f={remove:function(){},pause:function(){},resume:function(){}};return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._handles=new a,t.container=new h.Container,t}return r(t,e),t.prototype.attach=function(){this.graphicsView=new l.default({view:this.view,graphics:this.layer.graphics}),this.graphicsView.install(this.container),this._handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler))},t.prototype.detach=function(){this.graphicsView.destroy(),this._handles.removeAll()},t.prototype.hitTest=function(e,t){return this.suspended||!this.graphicsView?u.resolve(null):this.graphicsView.hitTest(e,t)},t.prototype.fetchPopupFeatures=function(e){return o(this,void 0,void 0,function(){return n(this,function(t){return this.graphicsView?[2,this.graphicsView.searchFeatures(e).then(function(e){return e.filter(function(e){return!!e.popupTemplate})})]:[2]})})},t.prototype.update=function(e){this.graphicsView.update(e)},t.prototype.moveStart=function(){this.requestUpdate()},t.prototype.viewChange=function(){this.requestUpdate()},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.isUpdating=function(){return!this.graphicsView||this.graphicsView.updating},t.prototype.highlight=function(e,t){void 0===t&&(t={});var r;if("number"==typeof e?r=[e]:e instanceof p?r=[e.uid]:Array.isArray(e)&&e.length>0?r="number"==typeof e[0]?e:e.map(function(e){return e&&e.uid}):s.isCollection(e)&&(r=e.map(function(e){return e&&e.uid}).toArray()),r=r.filter(function(e){return null!=e}),!r.length)return f;var i=this.graphicsView.highlight(r);return{remove:function(){return i.remove()},pause:function(){},resume:function(){}}},t.prototype.queryGraphics=function(){return u.resolve(this.graphicsView.graphics)},i([c.property()],t.prototype,"graphicsView",void 0),i([c.property({dependsOn:["graphicsView.updating"]})],t.prototype,"updating",void 0),t=i([c.subclass("esri.views.2d.layers.GraphicsLayerView2D")],t)}(c.declared(d))});