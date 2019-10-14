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

define(["require","exports","./Program"],function(e,r,n){function t(e){var r="";for(var n in e){var t=e[n];if("boolean"==typeof t)t&&(r+="#define "+n+"\n");else if("number"==typeof t)r+="#define "+n+" "+t.toFixed()+"\n";else if("object"==typeof t){var f=t.options,i=0;for(var o in f)r+="#define "+f[o]+" "+(i++).toFixed()+"\n";r+="#define "+n+" "+f[t.value]+"\n"}}return r}function f(e,r,t,f){t=t||{},f=f||"";var i="function"==typeof r.shaders?r.shaders(t):r.shaders;return new n(e,f+i.vertexShader,f+i.fragmentShader,r.attributes)}Object.defineProperty(r,"__esModule",{value:!0}),r.glslifyDefineMap=t,r.createProgram=f});