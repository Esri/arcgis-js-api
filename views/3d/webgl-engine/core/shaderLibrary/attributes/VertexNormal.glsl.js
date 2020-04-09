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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../../../core/tsSupport/makeTemplateObjectHelper","./NormalAttribute.glsl","./VertexPosition.glsl","../../shaderModules/interfaces"],(function(r,o,l,e,a,n){function m(r,o){0===o.normalType||1===o.normalType?(r.include(e.NormalAttribute,o),r.varyings.add("vNormalWorld","vec3"),r.varyings.add("vNormalView","vec3"),r.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),r.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),r.vertex.code.add(n.glsl(d||(d=l(["\n      void forwardNormal() {\n        vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();\n        vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;\n      }\n    "],["\n      void forwardNormal() {\n        vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();\n        vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;\n      }\n    "]))))):2===o.normalType?(r.include(a.VertexPosition,o),r.varyings.add("vNormalWorld","vec3"),r.vertex.code.add(n.glsl(t||(t=l(["\n    void forwardNormal() {\n      vNormalWorld = ","\n    }\n    "],["\n    void forwardNormal() {\n      vNormalWorld = ","\n    }\n    "])),0===o.viewingMode?n.glsl(i||(i=l(["normalize(vPositionWorldCameraRelative);"],["normalize(vPositionWorldCameraRelative);"]))):n.glsl(v||(v=l(["vec3(0.0, 0.0, 1.0);"],["vec3(0.0, 0.0, 1.0);"])))))):r.vertex.code.add(n.glsl(s||(s=l(["\n      void forwardNormal() {}\n    "],["\n      void forwardNormal() {}\n    "]))))}var d,i,v,t,s;Object.defineProperty(o,"__esModule",{value:!0}),o.VertexNormal=m,function(r){r.bindUniforms=function(r,o){r.setUniformMatrix4fv("viewNormal",o.viewInvTransp)}}(m=o.VertexNormal||(o.VertexNormal={}))}));