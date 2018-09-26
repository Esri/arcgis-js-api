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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Handles","../../../core/promiseUtils","../../../core/accessorSupport/decorators","./LayerView2D","./support/GraphicsView2D"],function(e,r,t,i,o,n,p,a,s){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r._handles=new o,r.graphicsView=new s,r.container=r.graphicsView.container,r}return t(r,e),r.prototype.hitTest=function(e,r){return this.graphicsView.hitTest(e,r)},r.prototype.attach=function(){var e=this;this.layer.createGraphicsController({layerView:this}).then(function(r){e._handles.add(e.layer.on("graphic-update",function(r){return e.graphicsView.graphicUpdateHandler(r)})),e.graphicsView.view=e.view,e.graphicsView.graphics=r.graphics})},r.prototype.detach=function(){this.graphicsView.graphics=null,this._handles.removeAll()},r.prototype.update=function(e){},r.prototype.moveStart=function(){},r.prototype.viewChange=function(){},r.prototype.moveEnd=function(){},r.prototype.queryGraphics=function(){return n.resolve(this.graphicsView.graphics)},r=i([p.subclass("esri.views.2d.layers.GraphicsLayerView2D")],r)}(p.declared(a))});