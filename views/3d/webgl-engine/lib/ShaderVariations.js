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

define(["require","exports","../../../../core/tsSupport/extendsHelper","dojo/_base/lang","./Util","../../../webgl/Program","./DefaultVertexAttributeLocations"],function(e,a,r,s,t,i,n){var p=function(){function e(e,a,r,s,i,n,p){this.variables=[],this.sealed=!1,this.programCache={},t.assert(2===a.length,"you must specify shader snippet prefixes for vertex and fragment shaders"),this.programNamePrefix=e,this.shaderSnippetPrefixes=a,this.baseDefines=r,this.programRep=s,this.shaderRep=i,this.snippets=n,this.rctx=p,this.baseDefines=r?r.slice():[]}return e.prototype.addDefine=function(e,a,r,s){t.assert(!this.sealed,"you cannot add another variable after the first program has been generated"),t.assert(!!e,"you must specify a program name suffix"),this.variables.push({programNameSuffixes:["",e],shaderNameSuffixes:s||e,defineStr:a,affectsShaderTypes:r||[!0,!0]})},e.prototype.addBinaryShaderSnippetSuffix=function(e,a,r){t.assert(!this.sealed,"you cannot add another variable after the first program has been generated"),t.assert(!!e,"you must specify a program name suffix"),this.variables.push({programNameSuffixes:["",e],shaderSnippetSuffixes:["",a],affectsShaderTypes:r||[!0,!0]})},e.prototype.addNaryShaderSnippetSuffix=function(e,a){t.assert(!this.sealed,"you cannot add another variable after the first program has been generated");var r=e.map(function(e){return t.assert(null!=e.value,"value must always be specified"),e.value});this.variables.push({values:r,programNameSuffixes:e.map(function(e,a){return null!=e.programNameSuffix?e.programNameSuffix:r[a]}),shaderSnippetSuffixes:e.map(function(e,a){return null!=e.shaderSnippetSuffix?e.shaderSnippetSuffix:r[a]}),affectsShaderTypes:a||[!0,!0]})},e.prototype.getShaderVariation=function(e){t.assert(e.length===this.variables.length,"you must specify a value for each variable");for(var a=this.programNamePrefix,r=s.clone(this.shaderSnippetPrefixes),i=s.clone(this.shaderSnippetPrefixes),n=s.clone(this.baseDefines),p=0;p<this.variables.length;p++){var f=this.variables[p],o=e[p],h=void 0;f.values?(h=f.values.indexOf(o.toString()),t.assert(h>=0,"invalid value "+o+" for variable "+p)):h=o?1:0,a+=f.programNameSuffixes[h];for(var u=0;2>u;u++)f.affectsShaderTypes[u]&&(f.shaderSnippetSuffixes&&(r[u]+=f.shaderSnippetSuffixes[h],i[u]+=f.shaderSnippetSuffixes[h]),f.defineStr&&h&&(n.push(f.defineStr),i[u]+=f.shaderNameSuffixes))}return{programName:a,shaderSnippetNames:r,shaderNames:i,defines:n}},e.prototype.getProgram=function(e,a,r){void 0===a&&(a=this.snippets),void 0===r&&(r=this.rctx),this.sealed=!0;var s=e.reduce(function(e,a){return e+a.toString()},"");if(this.programCache[s])return this.programCache[s];var p=this.getShaderVariation(e),f=this.programRep.get(p.programName);if(f)return f;var o=p.shaderSnippetNames[0],h=a[o];t.assert(null!=h,"shader snippet '"+o+"' does not exist");var u=p.shaderSnippetNames[1],d=a[u];return t.assert(null!=d,"shader snippet '"+u+"' does not exist"),f=new i(r,h,d,n.Default3D,p.defines),this.programCache[s]=f,this.programRep.add(p.programName,f),f},e}();return p});