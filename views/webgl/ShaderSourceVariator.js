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

define(["require","exports","dojo/_base/lang","./Util"],function(e,a,r,s){var i=function(){function e(e,a,r){var i;"string"==typeof e?i=e:(i=e.programNamePrefix,a=e.shaderSnippetPrefixes,r=e.baseDefines),s.assert(a,"you must specify shader snippet prefixes"),s.assert(2===a.length,"you must specify shader snippet prefixes for vertex and fragment shaders"),r&&0!==r.length||(r=[]),this.programNamePrefix=i,this.shaderSnippetPrefixes=a,this.baseDefines=r,this.variables=[],this.sealed=!1}return e.prototype.addDefine=function(e,a,r,i){s.assert(!this.sealed,"you cannot add another variable after the first program has been generated"),s.assert(e,"you must specify a program name suffix"),this.variables.push({programNameSuffixes:["",e],shaderNameSuffixes:i||e,defineStr:a,affectsShaderTypes:r||[!0,!0]})},e.prototype.addBinaryShaderSnippetSuffix=function(e,a,r){s.assert(!this.sealed,"you cannot add another variable after the first program has been generated"),s.assert(e,"you must specify a program name suffix"),this.variables.push({programNameSuffixes:["",e],shaderSnippetSuffixes:["",a],affectsShaderTypes:r||[!0,!0]})},e.prototype.addNaryShaderSnippetSuffix=function(e,a){s.assert(!this.sealed,"you cannot add another variable after the first program has been generated");var r=e.map(function(e){return s.assert(null!=e.value,"value must always be specified"),e.value});this.variables.push({values:r,programNameSuffixes:e.map(function(e,a){return null!=e.programNameSuffix?e.programNameSuffix:r[a]}),shaderSnippetSuffixes:e.map(function(e,a){return null!=e.shaderSnippetSuffix?e.shaderSnippetSuffix:r[a]}),affectsShaderTypes:a||[!0,!0]})},e.prototype.getShaderVariation=function(e){s.assert(e.length===this.variables.length,"you must specify a value for each variable");for(var a=this.programNamePrefix,i=r.clone(this.shaderSnippetPrefixes),t=r.clone(this.shaderSnippetPrefixes),f=r.clone(this.baseDefines),n=0;n<this.variables.length;n++){var p=this.variables[n],u=e[n],h=void 0;p.values?(h=p.values.indexOf(u),s.assert(h>=0,"invalid value "+u+" for variable "+n)):h=u?1:0,a+=p.programNameSuffixes[h];for(var o=0;2>o;o++)p.affectsShaderTypes[o]&&(p.shaderSnippetSuffixes&&(i[o]+=p.shaderSnippetSuffixes[h],t[o]+=p.shaderSnippetSuffixes[h]),p.defineStr&&h&&(f.push(p.defineStr),t[o]+=p.shaderNameSuffixes))}return{programName:a,shaderSnippetNames:i,shaderNames:t,defines:f}},e}();return i});