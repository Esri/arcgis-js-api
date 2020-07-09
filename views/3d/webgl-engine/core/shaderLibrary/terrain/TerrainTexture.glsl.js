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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../shaderModules/interfaces"],(function(e,t,n,r){var a,x,d,c,l,u;Object.defineProperty(t,"__esModule",{value:!0}),t.TerrainTexture=function(e,t){e.varyings.add("vtc","vec2"),e.vertex.uniforms.add("texOffsetAndScale","vec4"),e.fragment.uniforms.add("tex","sampler2D"),t.textureFadingEnabled&&(e.vertex.uniforms.add("nextTexOffsetAndScale","vec4"),e.varyings.add("nvtc","vec2"),e.fragment.uniforms.add("texNext","sampler2D"),e.fragment.uniforms.add("textureFadeFactor","float")),e.vertex.code.add(r.glsl(d||(d=n.__makeTemplateObject(["\n  void forwardTextureCoordinates(in vec2 uv) {\n    vtc = uv * texOffsetAndScale.zw + texOffsetAndScale.xy;\n    ","\n  }\n  "],["\n  void forwardTextureCoordinates(in vec2 uv) {\n    vtc = uv * texOffsetAndScale.zw + texOffsetAndScale.xy;\n    ","\n  }\n  "])),t.textureFadingEnabled?r.glsl(a||(a=n.__makeTemplateObject(["nvtc = uv * nextTexOffsetAndScale.zw + nextTexOffsetAndScale.xy;"],["nvtc = uv * nextTexOffsetAndScale.zw + nextTexOffsetAndScale.xy;"]))):r.glsl(x||(x=n.__makeTemplateObject([""],[""]))))),e.fragment.code.add(r.glsl(u||(u=n.__makeTemplateObject(["\n  vec4 getTileColor() {\n    ","\n  }\n  "],["\n  vec4 getTileColor() {\n    ","\n  }\n  "])),t.textureFadingEnabled?r.glsl(c||(c=n.__makeTemplateObject(["return textureFadeFactor < 1.0 ? mix(texture2D(texNext, nvtc), texture2D(tex, vtc), textureFadeFactor) : texture2D(tex, vtc);"],["return textureFadeFactor < 1.0 ? mix(texture2D(texNext, nvtc), texture2D(tex, vtc), textureFadeFactor) : texture2D(tex, vtc);"]))):r.glsl(l||(l=n.__makeTemplateObject(["return texture2D(tex, vtc);"],["return texture2D(tex, vtc);"])))))}}));