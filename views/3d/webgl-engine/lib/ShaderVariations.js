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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["dojo/_base/lang","./Util","../../../webgl/Program","./DefaultVertexAttributeLocations"],function(e,a,r,t){var n=a.assert,i=function(a,i,s,u,p,o,d){n(2===i.length,"you must specify shader snippet prefixes for vertex and fragment shaders"),s&&0!==s.length||(s=[]);var h=[],m=!1,S={};this.addDefine=function(e,a,r,t){n(!m,"you cannot add another variable after the first program has been generated"),n(e,"you must specify a program name suffix"),h.push({programNameSuffixes:["",e],shaderNameSuffixes:t||e,defineStr:a,affectsShaderTypes:r||[!0,!0]})},this.addBinaryShaderSnippetSuffix=function(e,a,r){n(!m,"you cannot add another variable after the first program has been generated"),n(e,"you must specify a program name suffix"),h.push({programNameSuffixes:["",e],shaderSnippetSuffixes:["",a],affectsShaderTypes:r||[!0,!0]})},this.addNaryShaderSnippetSuffix=function(e,a){n(!m,"you cannot add another variable after the first program has been generated");var r=e.map(function(e){return n(null!=e.value,"value must always be specified"),e.value});h.push({values:r,programNameSuffixes:e.map(function(e,a){return null!=e.programNameSuffix?e.programNameSuffix:r[a]}),shaderSnippetSuffixes:e.map(function(e,a){return null!=e.shaderSnippetSuffix?e.shaderSnippetSuffix:r[a]}),affectsShaderTypes:a||[!0,!0]})},this.getShaderVariation=function(r){n(r.length===h.length,"you must specify a value for each variable");for(var t=a,f=e.clone(i),u=e.clone(i),p=e.clone(s),o=0;o<h.length;o++){var d,m=h[o],S=r[o];m.values?(d=m.values.indexOf(S),n(d>=0,"invalid value "+S+" for variable "+o)):d=S?1:0,t+=m.programNameSuffixes[d];for(var l=0;2>l;l++)m.affectsShaderTypes[l]&&(m.shaderSnippetSuffixes&&(f[l]+=m.shaderSnippetSuffixes[d],u[l]+=m.shaderSnippetSuffixes[d]),m.defineStr&&d&&(p.push(m.defineStr),u[l]+=m.shaderNameSuffixes))}return{programName:t,shaderSnippetNames:f,shaderNames:u,defines:p}},this.getProgram=function(e,a,i){a=a||o,i=i||d,m=!0;var s=e.reduce(f,"");if(S[s])return S[s];var p=this.getShaderVariation(e),h=u.get(p.programName);if(h)return h;var l,g,c;return l=p.shaderSnippetNames[0],g=a[l],n(null!=g,"shader snippet '"+l+"' does not exist"),l=p.shaderSnippetNames[1],c=a[l],n(null!=c,"shader snippet '"+l+"' does not exist"),h=new r(i,g,c,t.Default3D,p.defines),S[s]=h,u.add(p.programName,h),h}},f=function(e,a){return e+a.toString()};return i});