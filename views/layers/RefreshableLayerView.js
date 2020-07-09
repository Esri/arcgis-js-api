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

define(["require","exports","tslib","../../core/promiseUtils","../../core/accessorSupport/decorators"],(function(e,r,t,s,o){Object.defineProperty(r,"__esModule",{value:!0}),r.RefreshableLayerView=function(e){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.refreshTimestamp=null,r.refreshDebounced=s.debounce((function(e,s){return t.__awaiter(r,void 0,void 0,(function(){var r;return t.__generator(this,(function(t){switch(t.label){case 0:return"number"==typeof e?r=e:(r=Date.now(),s=e),this._set("refreshTimestamp",r),this.doRefresh?[4,this.doRefresh(s)]:[3,2];case 1:t.sent(),t.label=2;case 2:return[2]}}))}))}),2e3),r}return t.__extends(r,e),r.prototype.refresh=function(e){void 0===e&&(e=Date.now()),this._set("refreshTimestamp",e),this.doRefresh&&this.doRefresh()},t.__decorate([o.property()],r.prototype,"layer",void 0),t.__decorate([o.aliasOf("layer.refreshInterval")],r.prototype,"refreshInterval",void 0),t.__decorate([o.property({readOnly:!0})],r.prototype,"refreshTimestamp",void 0),r=t.__decorate([o.subclass("esri.layers.mixins.RefreshableLayerView")],r)}(e)},r.isRefreshableLayerView=function(e){return"refresh"in e}}));