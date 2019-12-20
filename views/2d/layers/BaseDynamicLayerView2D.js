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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/Logger","../../../core/promiseUtils","../../../core/accessorSupport/decorators","./BitmapLayerView2D","./LayerView2D","./support/ExportStrategy","../../layers/LayerView","../../layers/RefreshableLayerView"],function(t,e,r,i,o,a,n,s,p,u,c,y,h,d){var f=n.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");return function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.hitTest=function(){return null},e.prototype.update=function(t){this.strategy.update(t).catch(function(t){s.isAbortError(t)||f.error(t)}),this.notifyChange("updating")},e.prototype.attach=function(){this.strategy=new y({container:this.container,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})},e.prototype.detach=function(){this.strategy.destroy(),this.strategy=null,this.container.removeAllChildren()},e.prototype.moveStart=function(){},e.prototype.viewChange=function(){},e.prototype.moveEnd=function(){this.requestUpdate()},e.prototype.fetchBitmapData=function(t,e,r){return this.layer.fetchImage(t,e,r,{timestamp:this.refreshTimestamp})},e.prototype.doRefresh=function(){return a(this,void 0,void 0,function(){return o(this,function(t){return this.requestUpdate(),[2]})})},e.prototype.isUpdating=function(){return this.attached&&(this.strategy.updating||this.updateRequested)},i([p.property()],e.prototype,"strategy",void 0),i([p.property({dependsOn:["strategy.updating"]})],e.prototype,"updating",void 0),e=i([p.subclass("esri.views.2d.layers.BaseDynamicLayerView2D")],e)}(p.declared(d.RefreshableLayerView(u.BitmapLayerView2D(c.LayerView2D(h)))))});