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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["require","exports","./PropertyOrigin"],function(t,r,i){var e=function(){function t(){this._propertyOriginMap={},this._originStores=new Array(i["default"].NUM),this._values={}}return t.prototype.get=function(t,r){var i=void 0===r?this._values:this._originStores[r];return i?i[t]:void 0},t.prototype.keys=function(){return Object.keys(this._values)},t.prototype.set=function(t,r,e){void 0===e&&(e=i["default"].USER);var o=this._originStores[e];if(o||(o={},this._originStores[e]=o),o[t]=r,!(t in this._values)||this._propertyOriginMap[t]<=e){var n=this._values[t];return this._values[t]=r,this._propertyOriginMap[t]=e,n!==r}return!1},t.prototype.clear=function(t,r){void 0===r&&(r=i["default"].USER);var e=this._originStores[r];if(e){var o=e[t];if(delete e[t],t in this._values&&this._propertyOriginMap[t]===r){delete this._values[t];for(var n=r-1;n>=0;n--){var s=this._originStores[n];if(s&&t in s){this._values[t]=s[t],this._propertyOriginMap[t]=n;break}}}return o}},t.prototype.has=function(t,r){var i=void 0===r?this._values:this._originStores[r];return i?t in i:!1},t.prototype.revert=function(t,r){return this.set(t,this.get(t,r))},t.prototype.revertAll=function(t){var r=this.getAll(t),i=[];for(var e in r)this.revert(e,t)&&i.push(e);return i},t.prototype.getOrigin=function(t){return this._propertyOriginMap[t]},t.prototype.getValueOrigin=function(t){var r=this.getOrigin(t);if(void 0===r)return void 0;var i=this.get(t,r),e=r;for(r--;r>=0;){if(this.has(t,r)){if(this.get(t,r)!==i)break;e=r}r--}return e},t.prototype.getAll=function(t){return this._originStores[t]},t.prototype.persist=function(t){var r={};for(var i in this._values)this.getValueOrigin(i)>=t&&(r[i]=this._values[i]);return r},t}();Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=e});