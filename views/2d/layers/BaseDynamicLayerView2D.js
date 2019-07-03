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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/Handles","../../../core/Logger","../../../core/promiseUtils","../../../core/accessorSupport/decorators","../engine","./LayerView2D","./support/ExportStrategy","../../layers/RefreshableLayerView"],function(t,e,r,n,i,o,a,s,p,u,c,h,d,y){var l=s.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");return function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._handles=new a,e.container=new c.BitmapContainer,e}return r(e,t),e.prototype.hitTest=function(t,e){return null},e.prototype.update=function(t){this._strategy.update(t),this.notifyChange("updating")},e.prototype.attach=function(){this._strategy=new d({container:this.container,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})},e.prototype.detach=function(){this._strategy.destroy(),this._handles.removeAll(),this._strategy=null,this.container.removeAllChildren()},e.prototype.moveStart=function(){},e.prototype.viewChange=function(){},e.prototype.moveEnd=function(){this.requestUpdate()},e.prototype.fetchBitmapData=function(t,e,r){var n=this;return this.layer.fetchImage(t,e,r,{timestamp:this.refreshTimestamp}).then(function(t){return n.notifyChange("updating"),t}).catch(function(t){throw p.isAbortError(t)||l.error("Error while loading image",{error:t}),n.notifyChange("updating"),t})},e.prototype.doRefresh=function(t){return o(this,void 0,void 0,function(){return i(this,function(t){return this.requestUpdate(),[2]})})},e.prototype.isUpdating=function(){return this.attached&&(this._strategy.updating||this.updateRequested)},e=n([u.subclass("esri.views.2d.layers.BaseDynamicLayerView2D")],e)}(u.declared(h,y))});