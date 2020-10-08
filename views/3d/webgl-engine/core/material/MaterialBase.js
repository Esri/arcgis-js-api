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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports"],(function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.parameterBlock=e.parameter=e.MaterialParameterBlock=e.MaterialBase=void 0;var r=function(){function t(){this._dirty=!0}return t.prototype._setDirty=function(){this._dirty=!0},t.prototype._setClean=function(){if(this._dirty=!1,null!=this._parameterBlocks)for(var t=0,e=this._parameterBlocks;t<e.length;t++){this[e[t]]._setClean()}},Object.defineProperty(t.prototype,"dirty",{get:function(){return this._dirty||this._checkParameterBlocksDirty()},enumerable:!1,configurable:!0}),t.prototype._checkParameterBlocksDirty=function(){if(null==this._parameterBlocks)return!1;for(var t=0,e=this._parameterBlocks;t<e.length;t++){if(this[e[t]].dirty)return!0}return!1},t}();e.MaterialBase=r;var i=function(){function t(){this._dirty=!0}return t.prototype._setDirty=function(){this._dirty=!0},t.prototype._setClean=function(){this._dirty=!1},Object.defineProperty(t.prototype,"dirty",{get:function(){return this._dirty},enumerable:!1,configurable:!0}),t}();e.MaterialParameterBlock=i,e.parameter=function(t){return void 0===t&&(t={}),function(e,r){var i,n=null!==(i=e._parameterCount)&&void 0!==i?i:0;if(e._parameterCount=n+1,t.vectorOps){var o=t.vectorOps;Object.defineProperty(e,r,{get:function(){return this[n]},set:function(t){var e=this[n];if(null==e)this[n]=t;else{if(o.equals(e,t))return;o.copy(e,t)}this._setDirty()}})}else Object.defineProperty(e,r,{get:function(){return this[n]},set:function(e){this[n]!==e&&(t.dispose&&this[n]&&this[n].dispose(),this[n]=e,this._setDirty())}})}},e.parameterBlock=function(){return function(t,e){var r,i=null!==(r=t._parameterCount)&&void 0!==r?r:0;t._parameterCount=i+1,t._parameterBlocks=t._parameterBlocks||[],t._parameterBlocks.push(i),Object.defineProperty(t,e,{get:function(){return this[i]},set:function(t){this[i]!==t&&(this[i]=t,this._setDirty())}})}}}));