// COPYRIGHT © 2016 Esri
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

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","./LayerView2D","./support/GraphicsView2D"],function(t,e,r,i,o,p,n){var s=function(t){function e(){t.apply(this,arguments),this.graphicsView=new n,this.container=this.graphicsView.container}return r(e,t),e.prototype.hitTest=function(t,e){return this.graphicsView.hitTest(t,e)},e.prototype.attach=function(){var t=this;this.layer.createGraphicsController({layerView:this}).then(function(e){t.graphicsView.graphics=e.graphics})},e.prototype.detach=function(){this.graphicsView.graphics=null},e.prototype.update=function(t){},e.prototype.moveStart=function(){},e.prototype.viewChange=function(){},e.prototype.moveEnd=function(){},e=i([o.subclass("esri.views.2d.layers.GraphicsLayerView2D")],e)}(o.declared(p));return s});