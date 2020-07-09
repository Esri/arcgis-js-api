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

define(["require","exports","../arrayUtils","../lang"],(function(t,r,e,i){Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function t(){this._propertyOriginMap=new Map,this._originStores=new Array(7),this._values=new Map}return t.prototype.clone=function(r){var e=new t,o=this._originStores[0];o&&o.forEach((function(t,r){e.set(r,i.clone(t),0)}));for(var s=function(t){var o=n._originStores[t];o&&o.forEach((function(o,s){r&&r.has(s)||e.set(s,i.clone(o),t)}))},n=this,a=2;a<7;a++)s(a);return e},t.prototype.get=function(t,r){var e=void 0===r?this._values:this._originStores[r];return e?e.get(t):void 0},t.prototype.keys=function(t){var r=null==t?this._values:this._originStores[t];return r?e.keysOfMap(r):[]},t.prototype.set=function(t,r,e){void 0===e&&(e=6);var i=this._originStores[e];if(i||(i=new Map,this._originStores[e]=i),i.set(t,r),!this._values.has(t)||this._propertyOriginMap.get(t)<=e){var o=this._values.get(t);return this._values.set(t,r),this._propertyOriginMap.set(t,e),o!==r}return!1},t.prototype.delete=function(t,r){void 0===r&&(r=6);var e=this._originStores[r];if(e){var i=e.get(t);if(e.delete(t),this._values.has(t)&&this._propertyOriginMap.get(t)===r){this._values.delete(t);for(var o=r-1;o>=0;o--){var s=this._originStores[o];if(s&&s.has(t)){this._values.set(t,s.get(t)),this._propertyOriginMap.set(t,o);break}}}return i}},t.prototype.has=function(t,r){var e=void 0===r?this._values:this._originStores[r];return!!e&&e.has(t)},t.prototype.revert=function(t,r){for(;r>0&&!this.has(t,r);)--r;var e=this._originStores[r],i=e&&e.get(t),o=this._values.get(t);return this._values.set(t,i),this._propertyOriginMap.set(t,r),o!==i},t.prototype.originOf=function(t){return this._propertyOriginMap.get(t)||0},t.prototype.forEach=function(t){this._values.forEach(t)},t}();r.default=o}));