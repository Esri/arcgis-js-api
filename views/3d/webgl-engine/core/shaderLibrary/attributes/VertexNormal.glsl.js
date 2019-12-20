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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../../../core/tsSupport/makeTemplateObjectHelper","./NormalAttribute.glsl","../../shaderModules/interfaces"],function(r,o,a,l,e){function m(r,o){0===o.normalType||1===o.normalType?(r.include(l.NormalAttribute,o),r.varyings.add("vNormalWorld","vec3"),r.varyings.add("vNormalView","vec3"),r.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),r.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),r.vertex.code.add(e.glsl(n||(n=a(["\n      void forwardNormal() {\n        vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();\n        vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;\n      }\n    "],["\n      void forwardNormal() {\n        vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();\n        vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;\n      }\n    "]))))):r.vertex.code.add(e.glsl(d||(d=a(["\n      void forwardNormal() {}\n    "],["\n      void forwardNormal() {}\n    "]))))}Object.defineProperty(o,"__esModule",{value:!0}),o.VertexNormal=m,function(r){function o(r,o){r.setUniformMatrix4fv("viewNormal",o.viewInvTransp)}r.bindUniforms=o}(m=o.VertexNormal||(o.VertexNormal={}));var n,d});