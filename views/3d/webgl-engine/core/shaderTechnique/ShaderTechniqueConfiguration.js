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

define(["require","exports","../../../../../core/mathUtils"],(function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.parameter=t.ShaderTechniqueConfiguration=void 0;var i=function(){function e(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits.map((function(){return 0}))}return Object.defineProperty(e.prototype,"key",{get:function(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key},enumerable:!1,configurable:!0}),e.prototype.snapshot=function(){for(var e=this._parameterNames,t={key:this.key},r=0,i=e;r<i.length;r++){var a=i[r];t[a]=this[a]}return t},e}();t.ShaderTechniqueConfiguration=i,t.parameter=function(e){return void 0===e&&(e={}),function(t,i){var a,n;t._parameterNames=null!==(a=t._parameterNames)&&void 0!==a?a:[],t._parameterNames.push(i);for(var o=t._parameterNames.length-1,s=e.count||2,u=Math.ceil(r.log2(s)),h=null!==(n=t._parameterBits)&&void 0!==n?n:[0],p=0;h[p]+u>16;)++p>=h.length&&h.push(0);t._parameterBits=h;var m=h[p],f=(1<<u)-1<<m;h[p]+=u,Object.defineProperty(t,i,{get:function(){return this[o]},set:function(e){if(this[o]!==e&&(this[o]=e,this._keyDirty=!0,this._parameterBits[p]=this._parameterBits[p]&~f|+e<<m&f,"number"!=typeof e&&"boolean"!=typeof e))throw"Configuration values must be booleans or numbers!"}})}}}));