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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../webgl","./sources/resolver"],(function(e,r,n,t){Object.defineProperty(r,"__esModule",{value:!0});var a=function(e){var r="";r+=e[0].toUpperCase();for(var n=1;n<e.length;n++){var t=e[n];t===t.toUpperCase()?(r+="_",r+=t):r+=t.toUpperCase()}return r},s=function(e){var r={};for(var t in e){r[a(t)]=e[t]}return n.glslifyDefineMap(r)};r.createProgramTemplate=function(e,r){var n=e+e.substring(e.lastIndexOf("/"));return{name:name,attributes:r,shaders:function(e){return{vertexShader:s(e)+t.resolveIncludes(n+".vert"),fragmentShader:s(e)+t.resolveIncludes(n+".frag")}}}}}));