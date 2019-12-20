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

define(["require","exports"],function(t,e){function r(t){return void 0===t&&(t={}),function(e,r){e.__materialParameters=e.__materialParameters||[],e.__materialParameters.push(r);var i="_"+r;if(t.vectorOps){var n=t.vectorOps;Object.defineProperty(e,r,{get:function(){return this[i]},set:function(t){if(this[i]){if(n.equals(this[i],t))return;n.copy(this[i],t)}else this[i]=t;this._setDirty()}})}else Object.defineProperty(e,r,{get:function(){return this[i]},set:function(e){this[i]!==e&&(t.dispose&&this[i]&&this[i].dispose(),this[i]=e,this._setDirty())}})}}function i(){return function(t,e){t.__parameterBlocks=t.__parameterBlocks||[],t.__parameterBlocks.push(e);var r="_"+e;Object.defineProperty(t,e,{get:function(){return this[r]},set:function(t){this[r]!==t&&(this[r]=t,this._setDirty())}})}}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(){this._dirty=!0}return t.prototype._setDirty=function(){this._dirty=!0},t.prototype._setClean=function(){this._dirty=!1;for(var t=this.__proto__.__parameterBlocks||[],e=0,r=t;e<r.length;e++){this[r[e]]._setClean()}},Object.defineProperty(t.prototype,"dirty",{get:function(){return this._dirty||this._checkParameterBlocksDirty()},enumerable:!0,configurable:!0}),t.prototype._checkParameterBlocksDirty=function(){for(var t=this.__proto__.__parameterBlocks||[],e=0,r=t;e<r.length;e++){if(this[r[e]].dirty)return!0}return!1},t}();e.MaterialBase=n;var o=function(){function t(){this._dirty=!0}return t.prototype._setDirty=function(){this._dirty=!0},t.prototype._setClean=function(){this._dirty=!1},Object.defineProperty(t.prototype,"dirty",{get:function(){return this._dirty},enumerable:!0,configurable:!0}),t}();e.MaterialParameterBlock=o,e.parameter=r,e.parameterBlock=i});