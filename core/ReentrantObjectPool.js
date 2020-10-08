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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","./maybe","./ObjectPool"],(function(t,e,o,s,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ReentrantObjectPool=void 0;var i=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._set=new Set,e}return o.__extends(e,t),e.prototype.destroy=function(){t.prototype.destroy.call(this),this._set=s.nullifyNonnullableForDispose(this._set)},e.prototype.acquire=function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];var s=t.prototype.acquire.apply(this,e);return this._set.delete(s),s},e.prototype.release=function(e){e&&!this._set.has(e)&&(t.prototype.release.call(this,e),this._set.add(e))},e.prototype._dispose=function(e){this._set.delete(e),t.prototype._dispose.call(this,e)},e}(r);e.ReentrantObjectPool=i}));