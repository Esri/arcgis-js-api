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

define(["require","exports","../../../../../../core/tsSupport/makeTemplateObjectHelper","../../shaderModules/interfaces"],function(e,t,i,r){function o(e){e.fragment.uniforms.add("depthTex","sampler2D"),e.fragment.uniforms.add("highlightViewportPixelSz","vec4"),e.fragment.code.add(r.glsl(g||(g=i(["\n    void outputHighlight() {\n      vec4 fragCoord = gl_FragCoord;\n\n      float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;\n      if (fragCoord.z > sceneDepth + 5e-6) {\n        gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);\n      }\n      else {\n        gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);\n      }\n    }\n  "],["\n    void outputHighlight() {\n      vec4 fragCoord = gl_FragCoord;\n\n      float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;\n      if (fragCoord.z > sceneDepth + 5e-6) {\n        gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);\n      }\n      else {\n        gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);\n      }\n    }\n  "]))))}Object.defineProperty(t,"__esModule",{value:!0}),t.OutputHighlight=o,function(e){function t(e,t,i){e.bindTexture(i.highlightDepthTexture,5),t.setUniform1i("depthTex",5),t.setUniform4f("highlightViewportPixelSz",0,0,1/i.viewport[2],1/i.viewport[3])}e.bindOutputHighlight=t}(o=t.OutputHighlight||(t.OutputHighlight={}));var g});