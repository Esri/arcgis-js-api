// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports"],function(t,i){function e(t){return void 0===t&&(t=32),new n(t)}Object.defineProperty(i,"__esModule",{value:!0});var n=function(){function t(t){void 0===t&&(t=32),this._maxBits=t,this._fields=new Map,this._totalBits=0}return t.prototype.field=function(t,i){var e=this._totalBits,n=(1<<i)-1;if(this._totalBits+=i,this._totalBits>this._maxBits)throw Error("Bitset layout number of required bits "+this._totalBits+" exceeds maximum number of bits "+this._maxBits);return this._fields.set(t,{offset:e,bits:i,maxValue:n,mask:n<<e}),this},t.prototype.create=function(){var t=this,i=0,e=new Map;this._fields.forEach(function(t,i){return e.set(i,t)});var n=function(t,e){i=i&~t.mask|e<<t.offset&t.mask};return{set:function(t,i){var r=e.get(t);n(r,i)},setClamped:function(t,i){var r=e.get(t);i=Math.max(Math.min(i,r.maxValue),0),n(r,i)},get:function(t){var n=t,r=e.get(n);return(i&r.mask)>>r.offset},value:function(){return i},binaryString:function(){for(var e="",n=i,r=0;r<t._totalBits;r++)e=(1&n?"1":"0")+e,n>>=1;return e}}},t}();i.bitPackLayout=e});