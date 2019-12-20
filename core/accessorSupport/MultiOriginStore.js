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

define(["require","exports","../arrayUtils"],function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(){this._propertyOriginMap=new Map,this._originStores=new Array(7),this._values=new Map}return t.prototype.get=function(t,e){var r=void 0===e?this._values:this._originStores[e];return r?r.get(t):void 0},t.prototype.keys=function(t){var e=null==t?this._values:this._originStores[t];return e?r.keysOfMap(e):[]},t.prototype.set=function(t,e,r){void 0===r&&(r=6);var i=this._originStores[r];if(i||(i=new Map,this._originStores[r]=i),i.set(t,e),!this._values.has(t)||this._propertyOriginMap.get(t)<=r){var s=this._values.get(t);return this._values.set(t,e),this._propertyOriginMap.set(t,r),s!==e}return!1},t.prototype.delete=function(t,e){void 0===e&&(e=6);var r=this._originStores[e];if(r){var i=r.get(t);if(r.delete(t),this._values.has(t)&&this._propertyOriginMap.get(t)===e){this._values.delete(t);for(var s=e-1;s>=0;s--){var o=this._originStores[s];if(o&&o.has(t)){this._values.set(t,o.get(t)),this._propertyOriginMap.set(t,s);break}}}return i}},t.prototype.has=function(t,e){var r=void 0===e?this._values:this._originStores[e];return!!r&&r.has(t)},t.prototype.revert=function(t,e){for(;e>0&&!this.has(t,e);)--e;var r=this._originStores[e],i=r&&r.get(t),s=this._values.get(t);return this._values.set(t,i),this._propertyOriginMap.set(t,e),s!==i},t.prototype.originOf=function(t){return this._propertyOriginMap.get(t)||0},t.prototype.forEach=function(t){this._values.forEach(t)},t}();e.default=i});