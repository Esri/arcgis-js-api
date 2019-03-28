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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","./sources/resolver","../../../webgl/programUtils"],function(e,r,n,t){Object.defineProperty(r,"__esModule",{value:!0});var o=function(e){return t.glslifyDefineMap({DEPTH_PASS:e.depthPass,DRAW_SCREEN_SIZE:e.drawScreenSize,SLICE:e.slicePlaneEnabled})};r.program={name:"point-renderer",shaders:function(e){return{vertexShader:o(e)+n.resolveIncludes("pointRenderer/pointRenderer.vert"),fragmentShader:o(e)+n.resolveIncludes("pointRenderer/pointRenderer.frag")}},attributes:{aPosition:0,aColor:1}}});