// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["dojo/_base/lang","./Util","../lib/GLSLProgram","../lib/GLSLShader"],function(e,a,r,n){var s=a.assert,t=function(a,t,f,u,d,p,o){s(2===t.length,"you must specify shader snippet prefixes for vertex and fragment shaders"),f&&0!==f.length?Array.isArray(f[0])||(f=[f,f]):f=[[],[]];var h=[],S=!1,m={},l={};this.addDefine=function(e,a,r,n){s(!S,"you cannot add another variable after the first program has been generated"),s(e,"you must specify a program name suffix"),h.push({programNameSuffixes:["",e],shaderNameSuffixes:n||e,defineStr:a,affectsShaderTypes:r||[!0,!0]})},this.addBinaryShaderSnippetSuffix=function(e,a,r){s(!S,"you cannot add another variable after the first program has been generated"),s(e,"you must specify a program name suffix"),h.push({programNameSuffixes:["",e],shaderSnippetSuffixes:["",a],affectsShaderTypes:r||[!0,!0]})},this.addNaryShaderSnippetSuffix=function(e,a){s(!S,"you cannot add another variable after the first program has been generated");var r=e.map(function(e){return s(null!=e.value,"value must always be specified"),e.value});h.push({values:r,programNameSuffixes:e.map(function(e,a){return null!=e.programNameSuffix?e.programNameSuffix:r[a]}),shaderSnippetSuffixes:e.map(function(e,a){return null!=e.shaderSnippetSuffix?e.shaderSnippetSuffix:r[a]}),affectsShaderTypes:a||[!0,!0]})},this.getShaderVariation=function(r){s(r.length===h.length,"you must specify a value for each variable");for(var n=a,i=e.clone(t),u=e.clone(t),d=e.clone(f),p=0;p<h.length;p++){var o,S=h[p],m=r[p];S.values?(o=S.values.indexOf(m),s(o>=0,"invalid value "+m+" for variable "+p)):o=m?1:0,n+=S.programNameSuffixes[o];for(var l=0;2>l;l++)S.affectsShaderTypes[l]&&(S.shaderSnippetSuffixes&&(i[l]+=S.shaderSnippetSuffixes[o],u[l]+=S.shaderSnippetSuffixes[o]),S.defineStr&&o&&(d[l].push(S.defineStr),u[l]+=S.shaderNameSuffixes))}return{programName:n,shaderSnippetNames:i,shaderNames:u,defines:d}},this.getProgram=function(e,a,t){a=a||p,t=t||o,S=!0;var f=e.reduce(i,"");if(l[f])return l[f];var h=this.getShaderVariation(e),g=u.get(h.programName);if(g)return g;var c,v,x=h.shaderNames[0],y=m[x]||d&&d.shaders[x];y||(c=h.shaderSnippetNames[0],v=a[c],s(null!=v,"shader snippet '"+c+"' does not exist"),y=new n(t.VERTEX_SHADER,v,t,h.defines[0]),m[x]=y,d&&d.add(x,y));var N=h.shaderNames[1],b=m[N]||d&&d.shaders[N];return b||(c=h.shaderSnippetNames[1],v=a[c],s(null!=v,"shader snippet '"+c+"' does not exist"),b=new n(t.FRAGMENT_SHADER,v,t,h.defines[1]),m[N]=b,d&&d.add(N,b)),g=new r([y,b],t),l[f]=g,u.add(h.programName,g),g}},i=function(e,a){return e+a.toString()};return t});