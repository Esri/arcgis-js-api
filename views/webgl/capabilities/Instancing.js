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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","./isWebGL2Context"],function(e,n,r){function t(e){if(r.default(e))return{drawArraysInstanced:e.drawArraysInstanced.bind(e),drawElementsInstanced:e.drawElementsInstanced.bind(e),vertexAttribDivisor:e.vertexAttribDivisor.bind(e)};var n=e.getExtension("ANGLE_instanced_arrays");return n?{drawArraysInstanced:n.drawArraysInstancedANGLE.bind(n),drawElementsInstanced:n.drawElementsInstancedANGLE.bind(n),vertexAttribDivisor:n.vertexAttribDivisorANGLE.bind(n)}:null}Object.defineProperty(n,"__esModule",{value:!0}),n.load=t});