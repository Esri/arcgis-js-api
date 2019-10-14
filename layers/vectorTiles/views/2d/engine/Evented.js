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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","dojo/aspect","dojo/on"],function(t,n,e,o,r){function i(t){return function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e(n,t),n.prototype.on=function(t,n){return o.after(this,"on"+t,n,!0)},n.prototype.once=function(t,n){return r.once(this,t,n)},n.prototype.emit=function(t,n){r.emit(this,t,n)},n.prototype.hasEventListener=function(t){var n="on"+t;return!(!this[n]||!this[n].after)},n}(t)}Object.defineProperty(n,"__esModule",{value:!0});var u=function(){function t(){}return t.prototype.on=function(t,n){return o.after(this,"on"+t,n,!0)},t.prototype.once=function(t,n){return r.once(this,t,n)},t.prototype.emit=function(t){r.emit(this,t,this)},t.prototype.hasEventListener=function(t){var n="on"+t;return!(!this[n]||!this[n].after)},t}();n.Evented=u,n.EventedMixin=i});