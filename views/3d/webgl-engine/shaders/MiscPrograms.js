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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../lib/DefaultVertexAttributeLocations","./sources/resolver"],function(e,r,s,t){Object.defineProperty(r,"__esModule",{value:!0}),r.blendLayers={name:"blend-layers",shaders:{vertexShader:t.resolveIncludes("misc/blendLayers.vert"),fragmentShader:t.resolveIncludes("misc/blendLayers.frag")},attributes:s.Default3D},r.simple={name:"simple",shaders:{vertexShader:t.resolveIncludes("misc/simple.vert"),fragmentShader:t.resolveIncludes("misc/simple.frag")},attributes:s.Default3D},r.texOnly={name:"tex-only",shaders:{vertexShader:t.resolveIncludes("misc/texOnly.vert"),fragmentShader:t.resolveIncludes("misc/texOnly.frag")},attributes:s.Default3D},r.showDepth={name:"show-depth",shaders:{vertexShader:t.resolveIncludes("misc/showDepth.vert"),fragmentShader:t.resolveIncludes("misc/showDepth.frag")},attributes:s.Default3D}});