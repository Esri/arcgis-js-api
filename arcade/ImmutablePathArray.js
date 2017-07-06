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
// See http://js.arcgis.com/3.21/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/extendsHelper","./ImmutableArray","./ImmutablePointArray"],function(t,e,i,n,r){var a=function(t){function e(e,i,n,r,a){var s=t.call(this,e)||this;return s._lazyPath=[],s._hasZ=!1,s._hasM=!1,s._hasZ=n,s._hasM=r,s._spRef=i,s._cacheId=a,s}return i(e,t),e.prototype.get=function(t){if(void 0===this._lazyPath[t]){var e=this._elements[t];if(void 0===e)return;this._lazyPath[t]=new r(e,this._spRef,this._hasZ,this._hasM,this._cacheId,t)}return this._lazyPath[t]},e.prototype.equalityTest=function(t){return t===this?!0:null===t?!1:t instanceof e==!1?!1:t.getUniqueHash()===this.getUniqueHash()},e.prototype.getUniqueHash=function(){return this._cacheId.toString()},e}(n);return a});