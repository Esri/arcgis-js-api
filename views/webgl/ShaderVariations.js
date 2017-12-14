// COPYRIGHT © 2017 Esri
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

define(["require","exports","./Program","./Util","./ShaderSourceVariator"],function(r,t,e,i,a){function o(r){return r.reduce(function(r,t,e){return t&&(r|=1<<e),r},0)}var n=function(){function r(r,t,e,i,a,o){if("string"==typeof r)this._initParams(r,t,e,i,a,o);else{var n=r;this._initObject({programNamePrefix:n.programNamePrefix,shaderSnippetPrefixes:n.shaderSnippetPrefixes,baseDefines:n.baseDefines,snippets:n.snippets,rctx:n.rctx,vertexAttribLocs:n.vertexAttribLocs})}}return r.prototype._initObject=function(r){this._initParams(r.programNamePrefix,r.shaderSnippetPrefixes,r.baseDefines,r.snippets,r.rctx,r.vertexAttribLocs)},r.prototype._initParams=function(r,t,e,i,o,n){this._defaultSnippets=i,this._defaultRctx=o,this._defaultVertexAttribLocs=n,this._programCache=new Map,this._variationInfo=new Map,this._shaderSourceVariator=new a(r,t,e)},r.prototype.addDefine=function(r,t,e,i){this._shaderSourceVariator.addDefine(r,t,e,i)},r.prototype.addBinaryShaderSnippetSuffix=function(r,t,e){this._shaderSourceVariator.addBinaryShaderSnippetSuffix(r,t,e)},r.prototype.addNaryShaderSnippetSuffix=function(r,t){this._shaderSourceVariator.addNaryShaderSnippetSuffix(r,t)},r.prototype.getProgram=function(r,t,a,n){if(t=t||this._defaultSnippets,a=a||this._defaultRctx,n=n||this._defaultVertexAttribLocs,!t)throw new Error("No ShaderSnippets provided to getProgram nor to ShaderVariations constructor.");if(!a)throw new Error("No RenderingContext provided to getProgram nor to ShaderVariations constructor.");if(!n)throw new Error("No VertexAttributeLocations provided to getProgram nor to ShaderVariations constructor.");var s=o(r);if(this._programCache[s])return this._programCache[s];var p,h,d,f=this._shaderSourceVariator.getShaderVariation(r);p=f.shaderSnippetNames[0],h=t[p],i.assert(null!=h,"shader snippet '"+p+"' does not exist"),p=f.shaderSnippetNames[1],d=t[p],i.assert(null!=d,"shader snippet '"+p+"' does not exist");var u=new e(a,h,d,n,f.defines);return this._programCache[s]=u,u},r.prototype.getProgramByKey=function(r){if(this._programCache[r])return this._programCache[r];if(!this._variationInfo[r])return null;var t,a,o,n=this._variationInfo[r],s=this._defaultSnippets,p=this._defaultRctx,h=this._defaultVertexAttribLocs;t=n.shaderSnippetNames[0],a=s[t],i.assert(null!=a,"shader snippet '"+t+"' does not exist"),t=n.shaderSnippetNames[1],o=s[t],i.assert(null!=o,"shader snippet '"+t+"' does not exist");var d=new e(p,a,o,h,n.defines);return this._programCache[r]=d,d},r.prototype.getProgramInfo=function(r){var t=this._shaderSourceVariator.getShaderVariation(r),e=o(r);return this._variationInfo[e]||(this._variationInfo[e]=t),{name:t.programName,key:e}},r}();return n});