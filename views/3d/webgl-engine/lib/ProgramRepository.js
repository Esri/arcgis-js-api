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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","./Util"],function(o,r,t){return function(){function o(){this.shaderVariators={},this._nextId=0,this._programsByName={},this._namesById=[],this._programRefCount=[],this._commonUniforms={model:[],modelNormal:[],lightDirection:[],proj:[],shadowMapDistance:[],viewportPixelSz:[],lightingMainDirection:[]}}return o.prototype.dispose=function(){for(var o in this._programsByName)this._programsByName[o].dispose();this._programsByName=null,this._namesById=null,this._programRefCount=null},o.prototype.add=function(o,r){t.assert(null==this._programsByName[o]),this._programsByName[o]=r,this._namesById[r.id]=o},o.prototype.get=function(o){return this._programsByName[o]},o.prototype.addShaderVariations=function(o,r){this.shaderVariators[o]=r},o.prototype.getShaderVariations=function(o){return this.shaderVariators[o]},o.prototype.getShaderVariationsProgram=function(o,r,t,n,i){var e=this.getShaderVariations(o);return e&&e.getProgram(r,t,n,i)},o.prototype.getProgramsUsingUniform=function(o){return this._commonUniforms[o]||[]},o.prototype.increaseRefCount=function(o){var r=o.id;this._programRefCount[r]?this._programRefCount[r]++:(this._programRefCount[r]=1,this._findCommonUniforms(o))},o.prototype.decreaseRefCount=function(o){var r=o.id;this._programRefCount[r]>1?this._programRefCount[r]--:(this._forgetCommonUniforms(o),this._programRefCount[r]=0)},o.prototype._getNextId=function(){return this._nextId++},o.prototype._findCommonUniforms=function(o){for(var r in this._commonUniforms)o.hasUniform(r)&&(t.assert(-1===this._commonUniforms[r].indexOf(o),"common uniforms of program have already been determined"),this._commonUniforms[r].push(o))},o.prototype._forgetCommonUniforms=function(o){for(var r in this._commonUniforms){var t=this._commonUniforms[r],n=t.indexOf(o);n>-1&&(t[n]=t[t.length-1],t.pop())}},o}()});