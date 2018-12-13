// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

var __extends=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();define(["require","exports","./ImmutableArray","./ImmutablePointArray"],function(t,e,n,r){"use strict";return function(t){function e(e,n,r,i,o){var s=t.call(this,e)||this;return s._lazyPath=[],s._hasZ=!1,s._hasM=!1,s._hasZ=r,s._hasM=i,s._spRef=n,s._cacheId=o,s}return __extends(e,t),e.prototype.get=function(t){if(void 0===this._lazyPath[t]){var e=this._elements[t];if(void 0===e)return;this._lazyPath[t]=new r(e,this._spRef,this._hasZ,this._hasM,this._cacheId,t)}return this._lazyPath[t]},e.prototype.equalityTest=function(t){return t===this||null!==t&&(t instanceof e!=!1&&t.getUniqueHash()===this.getUniqueHash())},e.prototype.getUniqueHash=function(){return this._cacheId.toString()},e}(n)});