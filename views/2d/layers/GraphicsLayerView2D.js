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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","./LayerView2D","./support/GraphicsView2D"],function(e,t,r,i,o,n,p){var c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.graphicsView=new p,t.container=t.graphicsView.container,t}return r(t,e),t.prototype.hitTest=function(e,t){return this.graphicsView.hitTest(e,t)},t.prototype.attach=function(){var e=this;this.layer.createGraphicsController({layerView:this}).then(function(t){e.graphicsView.view=e.view,e.graphicsView.graphics=t.graphics})},t.prototype.detach=function(){this.graphicsView.graphics=null},t.prototype.update=function(e){},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){},t.prototype.moveEnd=function(){},t}(o.declared(n));return c=i([o.subclass("esri.views.2d.layers.GraphicsLayerView2D")],c)});