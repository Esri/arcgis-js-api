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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","./Program","./Util","./ShaderSourceVariator"],function(r,e,t,i,a){var o=function(){function r(r,e,t,i,a,o){if("string"==typeof r)this._initParams(r,e,t,i,a,o);else{var s=r;this._initObject({programNamePrefix:s.programNamePrefix,shaderSnippetPrefixes:s.shaderSnippetPrefixes,baseDefines:s.baseDefines,snippets:s.snippets,rctx:s.rctx,vertexAttribLocs:s.vertexAttribLocs})}}return r.prototype._initObject=function(r){this._initParams(r.programNamePrefix,r.shaderSnippetPrefixes,r.baseDefines,r.snippets,r.rctx,r.vertexAttribLocs)},r.prototype._initParams=function(r,e,t,i,o,s){this._defaultSnippets=i,this._defaultRctx=o,this._defaultVertexAttribLocs=s,this._sealed=!1,this._programCache=new Map,this._shaderSourceVariator=new a(r,e,t)},r.prototype.addDefine=function(r,e,t,i){this._shaderSourceVariator.addDefine(r,e,t,i)},r.prototype.addBinaryShaderSnippetSuffix=function(r,e,t){this._shaderSourceVariator.addBinaryShaderSnippetSuffix(r,e,t)},r.prototype.addNaryShaderSnippetSuffix=function(r,e){this._shaderSourceVariator.addNaryShaderSnippetSuffix(r,e)},r.prototype.getProgram=function(r,e,a,o){function s(r,e){return r+e.toString()}if(e=e||this._defaultSnippets,a=a||this._defaultRctx,o=o||this._defaultVertexAttribLocs,!e)throw new Error("No ShaderSnippets provided to getProgram nor to ShaderVariations constructor.");if(!a)throw new Error("No RenderingContext provided to getProgram nor to ShaderVariations constructor.");if(!o)throw new Error("No VertexAttributeLocations provided to getProgram nor to ShaderVariations constructor.");this._sealed=!0;var n=r.reduce(s,"");if(this._programCache[n])return this._programCache[n];var p,d,h,f=this._shaderSourceVariator.getShaderVariation(r);p=f.shaderSnippetNames[0],d=e[p],i.assert(null!=d,"shader snippet '"+p+"' does not exist"),p=f.shaderSnippetNames[1],h=e[p],i.assert(null!=h,"shader snippet '"+p+"' does not exist");var c=new t(a,d,h,o,f.defines);return this._programCache[n]=c,c},r}();return o});