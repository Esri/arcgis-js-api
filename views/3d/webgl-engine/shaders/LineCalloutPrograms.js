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

define(["require","exports","../lib/DefaultVertexAttributeLocations","./sources/resolver","../../../webgl/programUtils"],function(e,t,r,l,a){Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){return a.glslifyDefineMap({OCCL_TEST:e.occlTest,VERTICAL_OFFSET:e.verticalOffset,SCREEN_SIZE_PERSPECTIVE:e.screenSizePerspective,DEPTH_HUD:e.depthHud,DEPTH_HUD_ALIGN_START:e.depthHudAlignStart,CENTER_OFFSET_UNITS_SCREEN:e.centerOffsetUnitsScreen,SLICE:e.slice})};t.program={name:"line-callout",shaders:function(e){return{vertexShader:i(e)+l.resolveIncludes("materials/lineCallout/lineCallout.vert"),fragmentShader:i(e)+l.resolveIncludes("materials/lineCallout/lineCallout.frag")}},attributes:r.Default3D}});