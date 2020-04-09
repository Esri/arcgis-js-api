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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["require","exports"],(function(t,n){"use strict";var r=new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$","i");function e(t){for(var n="",r=0;r<t;r++)n+=(65536*(1+Math.random())|0).toString(16).substring(1);return n}return function(){function t(n){if(this.value="",!n)throw new TypeError("Invalid argument; `value` has no value.");this.value=t.EMPTY,n&&n instanceof t?this.value=n.toString():n&&"[object String]"===Object.prototype.toString.call(n)&&t.isGuid(n)&&(this.value=n)}return t.prototype.equals=function(n){return t.isGuid(n)&&this.value===n},t.prototype.isEmpty=function(){return this.value===t.EMPTY},t.prototype.toString=function(){return this.value},t.prototype.toJSON=function(){return this.value},t.isGuid=function(n){return n&&(n instanceof t||r.test(n.toString()))},t.create=function(){return new t([e(2),e(1),e(1),e(1),e(3)].join("-"))},t.raw=function(){return[e(2),e(1),e(1),e(1),e(3)].join("-")},t.EMPTY="00000000-0000-0000-0000-000000000000",t}()}));