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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","./DefaultVertexAttributeLocations","./DefaultVertexBufferLayouts","../../../webgl/BufferObject","../../../webgl/Texture","../../../webgl/VertexArrayObject"],function(e,t,r,a,o,u,n){function i(e,t){void 0===t&&(t=a.Pos2);var u=t===a.Pos3Tex?new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,-1,1,0,0,1,1,1,0,1,1]):new Float32Array([-1,-1,1,-1,-1,1,1,1]);return new n(e,r.Default3D,{geometry:t},{geometry:o.createVertex(e,35044,u)})}function f(e){return new u(e,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,width:4,height:4})}Object.defineProperty(t,"__esModule",{value:!0}),t.createQuadVAO=i,t.createEmptyTexture=f});