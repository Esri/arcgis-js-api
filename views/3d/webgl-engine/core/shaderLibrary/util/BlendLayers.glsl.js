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

define(["require","exports","../../../../../../core/tsSupport/makeTemplateObjectHelper","../attributes/PositionAttribute.glsl","../../shaderModules/interfaces","../../shaderModules/ShaderBuilder"],function(e,o,t,n,r,i){function a(){var e=new i.ShaderBuilder;return e.include(n.PositionAttribute),e.attributes.add("uv0","vec2"),e.vertex.uniforms.add("scale","float"),e.vertex.uniforms.add("offset","vec2"),e.varyings.add("uv","vec2"),e.vertex.code.add(r.glsl(l||(l=t(["\n    void main(void) {\n      gl_Position = vec4(positionModel(), 1.0);\n      uv = uv0 * scale + offset;\n    }\n  "],["\n    void main(void) {\n      gl_Position = vec4(positionModel(), 1.0);\n      uv = uv0 * scale + offset;\n    }\n  "])))),e.fragment.uniforms.add("tex","sampler2D"),e.fragment.uniforms.add("opacity","float"),e.fragment.code.add(r.glsl(d||(d=t(["\n    void main() {\n      vec4 color = texture2D(tex, uv);\n\n      // Note: output in pre-multiplied alpha for correct alpha compositing\n      gl_FragColor = vec4(color.xyz, 1.0) * color.a * opacity;\n    }\n  "],["\n    void main() {\n      vec4 color = texture2D(tex, uv);\n\n      // Note: output in pre-multiplied alpha for correct alpha compositing\n      gl_FragColor = vec4(color.xyz, 1.0) * color.a * opacity;\n    }\n  "])))),e}Object.defineProperty(o,"__esModule",{value:!0}),o.build=a;var l,d});