// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../../../webgl","./sources/resolver"],(function(e,r,t,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.createProgramTemplate=void 0;var n=function(e){var r="";r+=e[0].toUpperCase();for(var t=1;t<e.length;t++){var a=e[t];a===a.toUpperCase()?(r+="_",r+=a):r+=a.toUpperCase()}return r},s=function(e){var r={};for(var a in e){r[n(a)]=e[a]}return t.glslifyDefineMap(r)};r.createProgramTemplate=function(e,r,t){var n=e+e.substring(e.lastIndexOf("/")),o=r+r.substring(r.lastIndexOf("/"));return{name:name,attributes:t,shaders:function(e){return{vertexShader:s(e)+a.resolveIncludes(n+".vert"),fragmentShader:s(e)+a.resolveIncludes(o+".frag")}}}}}));