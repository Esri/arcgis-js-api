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

define(["require","exports","./sources/resolver"],function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0}),r.highlight={name:"highlight",shaders:{vertexShader:t.resolveIncludes("highlight/textured.vert"),fragmentShader:t.resolveIncludes("highlight/highlight.frag")},attributes:{a_position:0,a_texcoord:1}},r.blur={name:"blur",shaders:{vertexShader:t.resolveIncludes("highlight/textured.vert"),fragmentShader:t.resolveIncludes("highlight/blur.frag")},attributes:{a_position:0,a_texcoord:1}}});