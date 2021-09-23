// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["require","exports","./Program","./ShaderSourceVariator","./Util"],(function(t,r,e,i,a){function o(t){return t.reduce((function(t,r,e){return r&&(t|=1<<e),t}),0)}return function(){function t(t,r,e,i,a,o){if("string"==typeof t)this._initParams(t,r,e,i,a,o);else{var n=t;this._initObject({programNamePrefix:n.programNamePrefix,shaderSnippetPrefixes:n.shaderSnippetPrefixes,baseDefines:n.baseDefines,snippets:n.snippets,rctx:n.rctx,vertexAttribLocs:n.vertexAttribLocs})}}return t.prototype.dispose=function(){this._programCache&&(this._programCache.forEach((function(t){return t.dispose()})),this._programCache.clear())},t.prototype._initObject=function(t){this._initParams(t.programNamePrefix,t.shaderSnippetPrefixes,t.baseDefines,t.snippets,t.rctx,t.vertexAttribLocs)},t.prototype._initParams=function(t,r,e,a,o,n){this._defaultSnippets=a,this._defaultRctx=o,this._defaultVertexAttribLocs=n,this._programCache=new Map,this._variationInfo=new Map,this._shaderSourceVariator=new i(t,r,e)},t.prototype.addDefine=function(t,r,e,i){this._shaderSourceVariator.addDefine(t,r,e,i)},t.prototype.addBinaryShaderSnippetSuffix=function(t,r,e){this._shaderSourceVariator.addBinaryShaderSnippetSuffix(t,r,e)},t.prototype.addNaryShaderSnippetSuffix=function(t,r){this._shaderSourceVariator.addNaryShaderSnippetSuffix(t,r)},t.prototype.getProgram=function(t,r,i,n){if(r=r||this._defaultSnippets,i=i||this._defaultRctx,n=n||this._defaultVertexAttribLocs,!r)throw new Error("No ShaderSnippets provided to getProgram nor to ShaderVariations constructor.");if(!i)throw new Error("No RenderingContext provided to getProgram nor to ShaderVariations constructor.");if(!n)throw new Error("No VertexAttributeLocations provided to getProgram nor to ShaderVariations constructor.");var s=o(t);if(this._programCache.has(s))return this._programCache.get(s);var p,h,d,f=this._shaderSourceVariator.getShaderVariation(t);h=r[p=f.shaderSnippetNames[0]],a.assert(null!=h,"shader snippet '"+p+"' does not exist"),d=r[p=f.shaderSnippetNames[1]],a.assert(null!=d,"shader snippet '"+p+"' does not exist");var u=new e(i,h,d,n,f.defines);return this._programCache.set(s,u),u},t.prototype.getProgramByKey=function(t){if(this._programCache.has(t))return this._programCache.get(t);if(!this._variationInfo[t])return null;var r,i,o,n=this._variationInfo[t],s=this._defaultSnippets,p=this._defaultRctx,h=this._defaultVertexAttribLocs;i=s[r=n.shaderSnippetNames[0]],a.assert(null!=i,"shader snippet '"+r+"' does not exist"),o=s[r=n.shaderSnippetNames[1]],a.assert(null!=o,"shader snippet '"+r+"' does not exist");var d=new e(p,i,o,h,n.defines);return this._programCache.set(t,d),d},t.prototype.getProgramInfo=function(t){var r=this._shaderSourceVariator.getShaderVariation(t),e=o(t);return this._variationInfo[e]||(this._variationInfo[e]=r),{name:r.programName,key:e}},t}()}));