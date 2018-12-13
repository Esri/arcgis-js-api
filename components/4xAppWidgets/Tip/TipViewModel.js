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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Accessor","../../../core/accessorSupport/decorators","./TipItem"],function(e,t,r,o,s,i,p){"use strict";var a="esri.widgets.Tip.TipViewModel";return function(e){function t(t){return e.call(this)||this}return r(t,e),Object.defineProperty(t.prototype,"dismissed",{get:function(){var e=this._get("dismissed");return void 0!==e?e:this._getLocalStorageDismissed()},set:function(e){if(void 0===e)return void this._clearOverride("dismissed");this._setLocalStorageDismissed(e),this._override("dismissed",e)},enumerable:!0,configurable:!0}),t.prototype._supportsLocalStorage=function(){return"undefined"!=typeof Storage},t.prototype._getLocalStorageDismissed=function(){var e=this.get("tip.id");return!(!e||!this._supportsLocalStorage())&&!!this._getLocalStorageItemJSON()[e]},t.prototype._setLocalStorageDismissed=function(e){var t=this.get("tip.id");if(t&&this._supportsLocalStorage()){var r=this._getLocalStorageItemJSON();r[t]=e,localStorage.setItem(a,JSON.stringify(r))}},t.prototype._getLocalStorageItemJSON=function(){var e=localStorage.getItem(a);return e?JSON.parse(e):{}},o([i.property()],t.prototype,"dismissed",null),o([i.property({type:p})],t.prototype,"tip",void 0),t=o([i.subclass(a)],t)}(i.declared(s))});