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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/Accessor","../core/Handles","../core/accessorSupport/decorators","./layers/RefreshableLayerView"],function(e,r,t,n,i,a,s,o){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r._handles=new a,r._currentTick=0,r}return t(r,e),r.prototype.initialize=function(){var e=this;this._handles.add([this.view.allLayerViews.on("after-changes",function(){e.notifyChange("tickInterval"),e._handles.remove("layerViewsUpdating"),e._handles.add(e._getLayerViewHandles(),"layerViewsUpdating")}),this.watch("tickInterval",function(){return e._restartTicking()}),this.watch("view.ready",function(){return e._restartTicking()})]),this._restartTicking()},r.prototype.destroy=function(){this._handles&&(this._handles.destroy(),this._handles=null,this._intervalID&&clearInterval(this._intervalID),this._currentTick=0)},Object.defineProperty(r.prototype,"tickInterval",{get:function(){var e=this.view.allLayerViews.filter(function(e){return o.isRefreshableLayerView(e)});return this._getCommonInterval(e)},enumerable:!0,configurable:!0}),r.prototype._restartTicking=function(){var e=this;this._currentTick=0,this._intervalID&&clearInterval(this._intervalID),this.get("view.ready")&&this.tickInterval&&(this._intervalID=setInterval(function(){var r=Date.now();e._currentTick+=e.tickInterval,e.view.allLayerViews.forEach(function(t){if(o.isRefreshableLayerView(t)){var n=Math.round(6e4*t.refreshInterval),i=e._currentTick%n==0,a=r-t.refreshTimestamp<6e3;n&&i&&!a&&t.refresh(r)}})},this.tickInterval))},r.prototype._getLayerViewHandles=function(){var e=this,r=[],t=function(){return e.notifyChange("tickInterval")};return this.view.allLayerViews.forEach(function(e){o.isRefreshableLayerView(e)&&e.layer&&r.push(e.watch("refreshInterval",t),e.layer.on("refresh",function(){e.refresh(Date.now())}))}),r},r.prototype._getCommonInterval=function(e){var r=function(e,t){return isNaN(e)||isNaN(t)?0:t<=0?e:r(t,e%t)};return e.toArray().reduce(function(e,t){return r(Math.round(6e4*t.refreshInterval),e)},0)},n([s.property()],r.prototype,"view",void 0),n([s.property({readOnly:!0})],r.prototype,"tickInterval",null),r=n([s.subclass("esri.views.RefreshManager")],r)}(s.declared(i))});