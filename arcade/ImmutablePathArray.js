// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["require","exports","./polyfill/tsSupport/extends","./ImmutableArray","./ImmutablePointArray"],(function(t,e,i,s,n){"use strict";return function(t){function e(e,i,s,n,a){var h=t.call(this,e)||this;return h._lazyPath=[],h._hasZ=!1,h._hasM=!1,h._hasZ=s,h._hasM=n,h._spRef=i,h._cacheId=a,h}return i(e,t),e.prototype.get=function(t){if(void 0===this._lazyPath[t]){var e=this._elements[t];if(void 0===e)return;this._lazyPath[t]=new n(e,this._spRef,this._hasZ,this._hasM,this._cacheId,t)}return this._lazyPath[t]},e.prototype.equalityTest=function(t){return t===this||null!==t&&(t instanceof e!=!1&&t.getUniqueHash()===this.getUniqueHash())},e.prototype.getUniqueHash=function(){return this._cacheId.toString()},e}(s)}));