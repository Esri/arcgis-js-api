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

define(["require","exports","../core/shaderTechnique/CommonUniformStore","../../../webgl/programUtils"],function(r,t,o,e){return function(){function r(r,t){void 0===t&&(t=""),this._rctx=r,this._shaderPrefix=t,this._programCacheByTemplate=new Map,this._commonUniformStore=new o.CommonUniformStore,this._programRefCount=[]}return Object.defineProperty(r.prototype,"context",{get:function(){return this._rctx},enumerable:!0,configurable:!0}),r.prototype.dispose=function(){this._programCacheByTemplate.forEach(function(r){r.programs.forEach(function(r){r.dispose()})}),this._programCacheByTemplate=null,this._programRefCount=null,this._commonUniformStore.dispose(),this._rctx=null},r.prototype.getProgram=function(r,t){var o=this;return this._programCacheByTemplate.has(r)||this.addProgramTemplate(r,function(t){return e.createProgram(o._rctx,r,t,o._shaderPrefix)}),this.getProgramTemplateInstance(r,t)},r.prototype.addProgramTemplate=function(r,t){this._programCacheByTemplate.set(r,{constructor:t,programs:new Map})},r.prototype.getProgramTemplateInstance=function(r,t){var o=this._programCacheByTemplate.get(r);if(o){var e=t?JSON.stringify(t):"default";if(!o.programs.has(e)){var n=o.constructor(t);o.programs.set(e,n)}return o.programs.get(e)}return null},r.prototype.getProgramsUsingUniform=function(r){return this._commonUniformStore.getPrograms(r)},r.prototype.increaseRefCount=function(r){var t=r.id;this._programRefCount[t]?this._programRefCount[t]++:(this._programRefCount[t]=1,this._commonUniformStore.subscribeProgram(r))},r.prototype.decreaseRefCount=function(r){var t=r.id;this._programRefCount[t]>1?this._programRefCount[t]--:(this._commonUniformStore.unsubscribeProgram(r),this._programRefCount[t]=0)},r}()});