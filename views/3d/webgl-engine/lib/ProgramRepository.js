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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","./Util","../../../webgl/programUtils"],function(o,r,t,n){return function(){function o(o,r){void 0===r&&(r=""),this._rctx=o,this._shaderPrefix=r,this._programCacheByTemplate=new Map,this._programRefCount=[],this._commonUniforms={model:[],modelNormal:[],lightDirection:[],proj:[],shadowMapDistance:[],viewportPixelSz:[],lightingMainDirection:[]}}return o.prototype.dispose=function(){this._programCacheByTemplate.forEach(function(o){o.programs.forEach(function(o){o.dispose()})}),this._programCacheByTemplate=null,this._programRefCount=null,this._commonUniforms=null,this._rctx=null},o.prototype.getProgram=function(o,r){var t=this;return this._programCacheByTemplate.has(o)||this.addProgramTemplate(o,function(r){return n.createProgram(t._rctx,o,r,t._shaderPrefix)}),this.getProgramTemplateInstance(o,r)},o.prototype.addProgramTemplate=function(o,r){this._programCacheByTemplate.set(o,{constructor:r,programs:new Map})},o.prototype.getProgramTemplateInstance=function(o,r){var t=this._programCacheByTemplate.get(o);if(t){var n=r?JSON.stringify(r):"default";if(!t.programs.has(n)){var e=t.constructor(r);t.programs.set(n,e)}return t.programs.get(n)}return null},o.prototype.getProgramsUsingUniform=function(o){return this._commonUniforms[o]||[]},o.prototype.increaseRefCount=function(o){var r=o.id;this._programRefCount[r]?this._programRefCount[r]++:(this._programRefCount[r]=1,this._findCommonUniforms(o))},o.prototype.decreaseRefCount=function(o){var r=o.id;this._programRefCount[r]>1?this._programRefCount[r]--:(this._forgetCommonUniforms(o),this._programRefCount[r]=0)},o.prototype._findCommonUniforms=function(o){for(var r in this._commonUniforms)o.hasUniform(r)&&(t.assert(-1===this._commonUniforms[r].indexOf(o),"common uniforms of program have already been determined"),this._commonUniforms[r].push(o))},o.prototype._forgetCommonUniforms=function(o){for(var r in this._commonUniforms){var t=this._commonUniforms[r],n=t.indexOf(o);n>-1&&(t[n]=t[t.length-1],t.pop())}},o}()});