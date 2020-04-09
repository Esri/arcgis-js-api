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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports"],(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){this._dirty=!0}return t.prototype._setDirty=function(){this._dirty=!0},t.prototype._setClean=function(){this._dirty=!1;for(var t=0,e=this.__proto__.__parameterBlocks||[];t<e.length;t++){this[e[t]]._setClean()}},Object.defineProperty(t.prototype,"dirty",{get:function(){return this._dirty||this._checkParameterBlocksDirty()},enumerable:!0,configurable:!0}),t.prototype._checkParameterBlocksDirty=function(){for(var t=0,e=this.__proto__.__parameterBlocks||[];t<e.length;t++){if(this[e[t]].dirty)return!0}return!1},t}();e.MaterialBase=r;var i=function(){function t(){this._dirty=!0}return t.prototype._setDirty=function(){this._dirty=!0},t.prototype._setClean=function(){this._dirty=!1},Object.defineProperty(t.prototype,"dirty",{get:function(){return this._dirty},enumerable:!0,configurable:!0}),t}();e.MaterialParameterBlock=i,e.parameter=function(t){return void 0===t&&(t={}),function(e,r){e.__materialParameters=e.__materialParameters||[],e.__materialParameters.push(r);var i="_"+r;if(t.vectorOps){var n=t.vectorOps;Object.defineProperty(e,r,{get:function(){return this[i]},set:function(t){if(this[i]){if(n.equals(this[i],t))return;n.copy(this[i],t)}else this[i]=t;this._setDirty()}})}else Object.defineProperty(e,r,{get:function(){return this[i]},set:function(e){this[i]!==e&&(t.dispose&&this[i]&&this[i].dispose(),this[i]=e,this._setDirty())}})}},e.parameterBlock=function(){return function(t,e){t.__parameterBlocks=t.__parameterBlocks||[],t.__parameterBlocks.push(e);var r="_"+e;Object.defineProperty(t,e,{get:function(){return this[r]},set:function(t){this[r]!==t&&(this[r]=t,this._setDirty())}})}}}));