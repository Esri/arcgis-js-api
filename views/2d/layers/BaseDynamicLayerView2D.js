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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../core/Logger","../../../core/promiseUtils","../../../core/accessorSupport/decorators","../engine/BitmapContainer","./LayerView2D","./support/ExportStrategy","../../layers/LayerView","../../layers/RefreshableLayerView"],(function(t,e,r,i,n,o,a,s,p,u,c){var y=i.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");return function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.container=new a.BitmapContainer,e}return r.__extends(e,t),e.prototype.hitTest=function(){return null},e.prototype.update=function(t){this.strategy.update(t).catch((function(t){n.isAbortError(t)||y.error(t)})),this.notifyChange("updating")},e.prototype.attach=function(){this.strategy=new p({container:this.container,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})},e.prototype.detach=function(){this.strategy.destroy(),this.strategy=null,this.container.removeAllChildren()},e.prototype.moveStart=function(){},e.prototype.viewChange=function(){},e.prototype.moveEnd=function(){this.requestUpdate()},e.prototype.fetchBitmapData=function(t,e,r){return this.layer.fetchImage(t,e,r,{timestamp:this.refreshTimestamp})},e.prototype.doRefresh=function(){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(t){return this.requestUpdate(),[2]}))}))},e.prototype.isUpdating=function(){return this.strategy.updating||this.updateRequested},r.__decorate([o.property()],e.prototype,"strategy",void 0),r.__decorate([o.property({dependsOn:["strategy.updating"]})],e.prototype,"updating",void 0),e=r.__decorate([o.subclass("esri.views.2d.layers.BaseDynamicLayerView2D")],e)}(c.RefreshableLayerView(s.LayerView2DMixin(u)))}));