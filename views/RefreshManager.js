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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","../core/Accessor","../core/HandleRegistry"],function(e,r,t,n,i,a,s){var o=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r._handles=new s,r._currentTick=0,r}return t(r,e),r.prototype.initialize=function(){var e=this;this.view.allLayerViews.on("after-changes",function(){e.notifyChange("tickInterval"),e._handles.remove("layerViewsUpdating"),e._handles.add(e._getLayerViewHandles(),"layerViewsUpdating")}),this.watch("tickInterval",function(){return e._restartTicking()}),this._restartTicking()},r.prototype.destroy=function(){this._handles&&(this._handles.destroy(),this._handles=null,this._intervalID&&clearInterval(this._intervalID),this._currentTick=0)},Object.defineProperty(r.prototype,"tickInterval",{get:function(){var e=this.view.allLayerViews.filter(function(e){return null!=e.refresh});return 6e4*this._findCommonDevisorFromLayers(e)},enumerable:!0,configurable:!0}),r.prototype._restartTicking=function(){var e=this;this._currentTick=0,this._intervalID&&clearInterval(this._intervalID),this._intervalID=setInterval(function(){e._currentTick+=e._interval;var r=e.view.allLayerViews.filter(function(e){return!!e.refresh});r.forEach(function(r){r.refreshInterval%e._currentTick===0&&r.refresh()})},this._interval)},r.prototype._getLayerViewHandles=function(){var e=this,r=this.view.allLayerViews.filter(function(e){return!!e.refresh});return r.map(function(r){return r.watch("refreshInterval",function(){return e.notifyChange("tickInterval")})})},r.prototype._findCommonDevisorFromLayers=function(e){var r=function(e,t){return isNaN(e)||isNaN(t)?0:0>=t?e:r(t,e%t)};return e.toArray().reduce(function(e,t){return r(t.refreshInterval,e)},0)},n([i.property()],r.prototype,"view",void 0),n([i.property({readOnly:!0})],r.prototype,"tickInterval",null),r=n([i.subclass("esri.views.RefreshManager")],r)}(i.declared(a));return o});