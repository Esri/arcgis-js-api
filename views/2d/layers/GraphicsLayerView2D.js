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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../../Graphic","../../../core/Collection","../../../core/promiseUtils","../../../core/accessorSupport/decorators","./LayerView2D","./graphics/GraphicsView2D","../../layers/LayerView"],(function(e,i,t,r,n,o,s,a,p,c){"use strict";var h={remove:function(){},pause:function(){},resume:function(){}};return function(e){function i(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(i,e),i.prototype.initialize=function(){var e=this;this.graphicsView=new p.default({requestUpdateCallback:function(){return e.requestUpdate()},view:this.view,graphics:this.layer.graphics})},i.prototype.attach=function(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d")},i.prototype.detach=function(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d")},i.prototype.hitTest=function(e,i){return this.suspended||!this.graphicsView?o.resolve(null):this.graphicsView.hitTest(e,i)},i.prototype.fetchPopupFeatures=function(e){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(i){return this.graphicsView?[2,this.graphicsView.searchFeatures(e).then((function(e){return e.filter((function(e){return!!e.popupTemplate}))}))]:[2,void 0]}))}))},i.prototype.update=function(e){this.graphicsView.processUpdate(e)},i.prototype.moveStart=function(){},i.prototype.viewChange=function(){this.graphicsView.viewChange()},i.prototype.moveEnd=function(){},i.prototype.isUpdating=function(){return!this.graphicsView||this.graphicsView.updating},i.prototype.highlight=function(e){var i,t=this;return"number"==typeof e?i=[e]:e instanceof r?i=[e.uid]:Array.isArray(e)&&e.length>0?i="number"==typeof e[0]?e:e.map((function(e){return e&&e.uid})):n.isCollection(e)&&(i=e.map((function(e){return e&&e.uid})).toArray()),(i=i.filter((function(e){return null!=e}))).length?(this.graphicsView.addHighlight(i),{remove:function(){return t.graphicsView.removeHighlight(i)},pause:function(){},resume:function(){}}):h},i.prototype.queryGraphics=function(){return o.resolve(this.graphicsView.graphics)},t.__decorate([s.property()],i.prototype,"graphicsView",void 0),t.__decorate([s.property({dependsOn:["graphicsView.updating"]})],i.prototype,"updating",void 0),i=t.__decorate([s.subclass("esri.views.2d.layers.GraphicsLayerView2D")],i)}(a.LayerView2DMixin(c))}));