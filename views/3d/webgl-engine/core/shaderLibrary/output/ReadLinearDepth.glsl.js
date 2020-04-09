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

define(["require","exports","../../../../../../core/tsSupport/makeTemplateObjectHelper","../util/RgbaFloatEncoding.glsl","../../shaderModules/interfaces"],(function(e,r,a,n,t){function l(e){e.include(n.RgbaFloatEncoding),e.fragment.code.add(t.glsl(o||(o=a(["\n    float linearDepth(sampler2D depthTex, vec2 uv, vec2 nearFar) {\n      return -(rgba2float(texture2D(depthTex, uv)) * (nearFar[1] - nearFar[0]) + nearFar[0]);\n    }\n  "],["\n    float linearDepth(sampler2D depthTex, vec2 uv, vec2 nearFar) {\n      return -(rgba2float(texture2D(depthTex, uv)) * (nearFar[1] - nearFar[0]) + nearFar[0]);\n    }\n  "]))))}var o;Object.defineProperty(r,"__esModule",{value:!0}),r.ReadLinearDepth=l,function(e){e.bindUniforms=function(e,r){e.setUniform2fv("nearFar",r.nearFar)}}(l=r.ReadLinearDepth||(r.ReadLinearDepth={}))}));