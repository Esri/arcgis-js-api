// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../webgl","./sources/resolver"],function(e,r,t,a){Object.defineProperty(r,"__esModule",{value:!0});var s=function(e){var r="";r+=e[0].toUpperCase();for(var n=1;n<e.length;n++){var t=e[n];t===t.toUpperCase()?(r+="_",r+=t):r+=t.toUpperCase()}return r},o=function(e){var r={};for(var n in e){r[s(n)]=e[n]}return t.glslifyDefineMap(r)};r.createProgramTemplate=function(e,r){var n=e+e.substring(e.lastIndexOf("/"));return{name:name,attributes:r,shaders:function(e){return{vertexShader:o(e)+a.resolveIncludes(n+".vert"),fragmentShader:o(e)+a.resolveIncludes(n+".frag")}}}}});