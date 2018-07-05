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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/lang","./DefaultVertexAttributeLocations","./Util","../../../webgl/Program"],function(e,a,r,s,t,i,n){return function(){function e(e,a,r,s,t,n){this.variables=[],this.sealed=!1,this.programCache={},i.assert(2===a.length,"you must specify shader snippet prefixes for vertex and fragment shaders"),this.programNamePrefix=e,this.shaderSnippetPrefixes=a,this.baseDefines=r,this.programRep=s,this.snippets=t,this.rctx=n,this.baseDefines=r?r.slice():[]}return e.prototype.addDefine=function(e,a,r,s){i.assert(!this.sealed,"you cannot add another variable after the first program has been generated"),i.assert(!!e,"you must specify a program name suffix"),this.variables.push({programNameSuffixes:["",e],shaderNameSuffixes:s||e,defineStr:a,affectsShaderTypes:r||[!0,!0]})},e.prototype.addBinaryShaderSnippetSuffix=function(e,a,r){i.assert(!this.sealed,"you cannot add another variable after the first program has been generated"),i.assert(!!e,"you must specify a program name suffix"),this.variables.push({programNameSuffixes:["",e],shaderSnippetSuffixes:["",a],affectsShaderTypes:r||[!0,!0]})},e.prototype.addNaryShaderSnippetSuffix=function(e,a){i.assert(!this.sealed,"you cannot add another variable after the first program has been generated");var r=e.map(function(e){return i.assert(null!=e.value,"value must always be specified"),e.value});this.variables.push({values:r,programNameSuffixes:e.map(function(e,a){return null!=e.programNameSuffix?e.programNameSuffix:r[a]}),shaderSnippetSuffixes:e.map(function(e,a){return null!=e.shaderSnippetSuffix?e.shaderSnippetSuffix:r[a]}),affectsShaderTypes:a||[!0,!0]})},e.prototype.getShaderVariation=function(e){i.assert(e.length===this.variables.length,"you must specify a value for each variable");for(var a=this.programNamePrefix,r=s.clone(this.shaderSnippetPrefixes),t=s.clone(this.shaderSnippetPrefixes),n=s.clone(this.baseDefines),p=0;p<this.variables.length;p++){var f=this.variables[p],o=e[p],h=void 0;f.values?(h=f.values.indexOf(o.toString()),i.assert(h>=0,"invalid value "+o+" for variable "+p)):h=o?1:0,a+=f.programNameSuffixes[h];for(var u=0;u<2;u++)f.affectsShaderTypes[u]&&(f.shaderSnippetSuffixes&&(r[u]+=f.shaderSnippetSuffixes[h],t[u]+=f.shaderSnippetSuffixes[h]),f.defineStr&&h&&(n.push(f.defineStr),t[u]+=f.shaderNameSuffixes))}return{programName:a,shaderSnippetNames:r,shaderNames:t,defines:n}},e.prototype.getProgram=function(e,a,r,s){void 0===a&&(a=this.snippets),void 0===r&&(r=this.rctx),void 0===s&&(s=t.Default3D),this.sealed=!0;var p=e.reduce(function(e,a){return e+a.toString()},"");if(this.programCache[p])return this.programCache[p];var f=this.getShaderVariation(e),o=this.programRep.get(f.programName);if(o)return o;var h=f.shaderSnippetNames[0],u=a[h];i.assert(null!=u,"shader snippet '"+h+"' does not exist");var d=f.shaderSnippetNames[1],m=a[d];return i.assert(null!=m,"shader snippet '"+d+"' does not exist"),o=new n(r,u,m,s,f.defines),this.programCache[p]=o,this.programRep.add(f.programName,o),o},e}()});