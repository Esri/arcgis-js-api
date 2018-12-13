// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","./Util","../../../webgl/programUtils"],function(o,r,t,e){return function(){function o(o){this._programCacheByTemplate=new Map,this._globalOptions={viewingMode:"global"},this._rctx=o,this._programRefCount=[],this._commonUniforms={model:[],modelNormal:[],lightDirection:[],proj:[],shadowMapDistance:[],viewportPixelSz:[],lightingMainDirection:[]}}return Object.defineProperty(o.prototype,"globalOptions",{get:function(){return this._globalOptions},enumerable:!0,configurable:!0}),o.prototype.dispose=function(){this._programCacheByTemplate.forEach(function(o){o.programs.forEach(function(o){o.dispose()})}),this._programCacheByTemplate=null,this._programRefCount=null},o.prototype.getProgram=function(o,r){var t=this;return this._programCacheByTemplate.has(o)||this.addProgramTemplate(o,function(r){return e.createProgram(t._rctx,o,r)}),this.getProgramTemplateInstance(o,r)},o.prototype.addProgramTemplate=function(o,r){this._programCacheByTemplate.set(o,{constructor:r,programs:new Map})},o.prototype.getProgramTemplateInstance=function(o,r){var t=this._programCacheByTemplate.get(o);if(t){var e=r?JSON.stringify(r):"default";if(!t.programs.has(e)){var n=t.constructor(r);t.programs.set(e,n)}return t.programs.get(e)}return null},o.prototype.getProgramsUsingUniform=function(o){return this._commonUniforms[o]||[]},o.prototype.increaseRefCount=function(o){var r=o.id;this._programRefCount[r]?this._programRefCount[r]++:(this._programRefCount[r]=1,this._findCommonUniforms(o))},o.prototype.decreaseRefCount=function(o){var r=o.id;this._programRefCount[r]>1?this._programRefCount[r]--:(this._forgetCommonUniforms(o),this._programRefCount[r]=0)},o.prototype._findCommonUniforms=function(o){for(var r in this._commonUniforms)o.hasUniform(r)&&(t.assert(-1===this._commonUniforms[r].indexOf(o),"common uniforms of program have already been determined"),this._commonUniforms[r].push(o))},o.prototype._forgetCommonUniforms=function(o){for(var r in this._commonUniforms){var t=this._commonUniforms[r],e=t.indexOf(o);e>-1&&(t[e]=t[t.length-1],t.pop())}},o}()});