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

define(["require","exports"],(function(e,r){Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function e(e,r){r&&(this._config=function(e){var r=e.__proto__.__configurationParameters||[],o={};o.key=e.key;for(var t=0,i=r;t<i.length;t++){var n=i[t];o[n]=e[n]}return o}(r)),this._program=this.initializeProgram(e),e.commonUniformStore&&(this._commonUniformStore=e.commonUniformStore,this._commonUniformStore.subscribeProgram(this._program)),this._pipeline=this.initializePipeline(e)}return e.prototype.dispose=function(){this._program&&(this._commonUniformStore&&this._commonUniformStore.unsubscribeProgram(this._program),this._program.dispose(),this._program=null)},e.prototype.reload=function(e){this._program&&(this._commonUniformStore&&this._commonUniformStore.unsubscribeProgram(this._program),this._program.dispose()),this._program=this.initializeProgram(e),this._commonUniformStore&&this._commonUniformStore.subscribeProgram(this._program)},Object.defineProperty(e.prototype,"program",{get:function(){return this._program},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"pipeline",{get:function(){return this._pipeline},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"key",{get:function(){return this._config.key},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"configuration",{get:function(){return this._config},enumerable:!0,configurable:!0}),e.prototype.bindPass=function(e,r,o){},e.prototype.bindMaterial=function(e,r,o){},e.prototype.bindDraw=function(e,r,o){},e.prototype.bindPipelineState=function(e){e.setPipelineState(this.pipeline)},e.prototype.ensureAttributeLocations=function(e){this.program.assertCompatibleVertexAttributeLocations(e)},Object.defineProperty(e.prototype,"primitiveType",{get:function(){return 4},enumerable:!0,configurable:!0}),e}();r.ShaderTechnique=o}));