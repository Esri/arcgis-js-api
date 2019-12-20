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

define(["require","exports"],function(r,e){function o(r){var e=r.__proto__.__configurationParameters,o={};o.key=r.key;for(var i=0,t=e;i<t.length;i++){var n=t[i];o[n]=r[n]}return o}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function r(r,e){this._commonUniformStore=r.commonUniformStore,this._config=o(e),this._program=this.initializeProgram(r),this._commonUniformStore.subscribeProgram(this._program),this._pipeline=this.initializePipeline(r)}return r.prototype.dispose=function(){this._program&&(this._commonUniformStore.unsubscribeProgram(this._program),this._program.dispose(),this._program=null)},r.prototype.reload=function(r){this._program&&(this._commonUniformStore.unsubscribeProgram(this._program),this._program.dispose()),this._program=this.initializeProgram(r),this._commonUniformStore.subscribeProgram(this._program)},Object.defineProperty(r.prototype,"program",{get:function(){return this._program},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"pipeline",{get:function(){return this._pipeline},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"key",{get:function(){return this._config.key},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"configuration",{get:function(){return this._config},enumerable:!0,configurable:!0}),r.prototype.bindPass=function(r,e,o){},r.prototype.bindMaterial=function(r,e){},r.prototype.bindDraw=function(r){},r}();e.ShaderTechnique=i});