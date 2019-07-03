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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/Accessor","../core/Handles","../core/accessorSupport/decorators"],function(e,t,r,n,i,a,s){function o(e){return"refresh"in e}return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._handles=new a,t._currentTick=0,t}return r(t,e),t.prototype.initialize=function(){var e=this;this._handles.add([this.view.allLayerViews.on("after-changes",function(){e.notifyChange("tickInterval"),e._handles.remove("layerViewsUpdating"),e._handles.add(e._getLayerViewHandles(),"layerViewsUpdating")}),this.watch("tickInterval",function(){return e._restartTicking()}),this.watch("view.ready",function(){return e._restartTicking()})]),this._restartTicking()},t.prototype.destroy=function(){this._handles&&(this._handles.destroy(),this._handles=null,this._intervalID&&clearInterval(this._intervalID),this._currentTick=0)},Object.defineProperty(t.prototype,"tickInterval",{get:function(){var e=this.view.allLayerViews.filter(function(e){return o(e)});return this._getCommonInterval(e)},enumerable:!0,configurable:!0}),t.prototype._restartTicking=function(){var e=this;this._currentTick=0,this._intervalID&&clearInterval(this._intervalID),this.get("view.ready")&&this.tickInterval&&(this._intervalID=setInterval(function(){var t=Date.now();e._currentTick+=e.tickInterval,e.view.allLayerViews.forEach(function(r){if(o(r)){var n=Math.round(6e4*r.refreshInterval),i=e._currentTick%n==0,a=t-r.refreshTimestamp<6e3;n&&i&&!a&&r.refresh(t)}})},this.tickInterval))},t.prototype._getLayerViewHandles=function(){var e=this,t=[],r=function(){return e.notifyChange("tickInterval")};return this.view.allLayerViews.forEach(function(e){o(e)&&e.layer&&t.push(e.watch("refreshInterval",r),e.layer.on("refresh",function(){e.refresh(Date.now())}))}),t},t.prototype._getCommonInterval=function(e){var t=function(e,r){return isNaN(e)||isNaN(r)?0:r<=0?e:t(r,e%r)};return e.toArray().reduce(function(e,r){return t(Math.round(6e4*r.refreshInterval),e)},0)},n([s.property()],t.prototype,"view",void 0),n([s.property({readOnly:!0})],t.prototype,"tickInterval",null),t=n([s.subclass("esri.views.RefreshManager")],t)}(s.declared(i))});