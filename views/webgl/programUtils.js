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

define(["require","exports","./Program"],(function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.createProgram=r.glslifyDefineMap=void 0,r.glslifyDefineMap=function(e){var r="";for(var n in e){var i=e[n];if("boolean"==typeof i)i&&(r+="#define "+n+"\n");else if("number"==typeof i)r+="#define "+n+" "+i.toFixed()+"\n";else if("object"==typeof i){var t=i.options,f=0;for(var o in t)r+="#define "+t[o]+" "+(f++).toFixed()+"\n";r+="#define "+n+" "+t[i.value]+"\n"}}return r},r.createProgram=function(e,r,i,t){i=i||{},t=t||"";var f="function"==typeof r.shaders?r.shaders(i):r.shaders;return new n(e,t+f.vertexShader,t+f.fragmentShader,r.attributes)}}));