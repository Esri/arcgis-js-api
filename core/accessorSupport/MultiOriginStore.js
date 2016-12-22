// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","./PropertyOrigin"],function(i,r,t){var e=function(){function i(){this._propertyOriginMap={},this._originStores=new Array(t.OriginId.NUM),this._values={}}return i.prototype.get=function(i,r){var t=void 0===r?this._values:this._originStores[r];return t?t[i]:void 0},i.prototype.keys=function(){return Object.keys(this._values)},i.prototype.set=function(i,r,e){void 0===e&&(e=t.OriginId.USER);var o=this._originStores[e];if(o||(o={},this._originStores[e]=o),o[i]=r,!(i in this._values)||this._propertyOriginMap[i]<=e){var n=this._values[i];return this._values[i]=r,this._propertyOriginMap[i]=e,n!==r}return!1},i.prototype.clear=function(i,r){void 0===r&&(r=t.OriginId.USER);var e=this._originStores[r];if(e){var o=e[i];if(delete e[i],i in this._values&&this._propertyOriginMap[i]===r){delete this._values[i];for(var n=r-1;n>=0;n--){var s=this._originStores[n];if(s&&i in s){this._values[i]=s[i],this._propertyOriginMap[i]=n;break}}}return o}},i.prototype.has=function(i,r){var t=void 0===r?this._values:this._originStores[r];return t?i in t:!1},i.prototype.revert=function(i,r){for(;r>0&&!this.has(i,r);)--r;var t=this._originStores[r],e=t&&t[i],o=this._values[i];return this._values[i]=e,this._propertyOriginMap[i]=r,o!==e},i.prototype.originOf=function(i,r){return this._propertyOriginMap[i]||t.OriginId.DEFAULTS},i.prototype.getAll=function(i){return this._originStores[i]},i}();Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=e});