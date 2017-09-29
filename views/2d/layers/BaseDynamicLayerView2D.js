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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../../core/HandleRegistry","./LayerView2D","./support/ExportStrategy","../engine/BitmapSource","../engine/Canvas2DContainer"],function(t,e,n,r,o,i,a,s,p,u){var c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._handles=new i,e.container=new u,e}return n(e,t),e.prototype.hitTest=function(t,e){return null},e.prototype.update=function(t){this._strategy.update(t),this.notifyChange("updating")},e.prototype.attach=function(){this._strategy=new s({container:this.container,fetchImage:this.fetchBitmapSource.bind(this),requestUpdate:this.requestUpdate.bind(this)})},e.prototype.detach=function(){this.container.removeAllChildren(),this._strategy.destroy(),this._handles.removeAll(),this._strategy=null},e.prototype.moveStart=function(){},e.prototype.viewChange=function(){},e.prototype.moveEnd=function(){this.requestUpdate()},e.prototype.fetchBitmapSource=function(t,e,n){var r=this;return this.layer.fetchImage(t,e,n).then(function(t){return r.notifyChange("updating"),new p(t)}).otherwise(function(t){return"cancel"!==t.dojoType&&console.error(t),r.notifyChange("updating"),t})},e.prototype.isUpdating=function(){return this.attached&&(this._strategy.updating||this.updateRequested)},e=r([o.subclass("esri.views.2d.layers.BaseDynamicLayerView2D")],e)}(o.declared(a));return c});