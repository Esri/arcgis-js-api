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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../shaderModules/interfaces"],(function(e,o,n,t){"use strict";var i,r;Object.defineProperty(o,"__esModule",{value:!0}),o.HUDOcclusion=o.HUDOcclusionPass=void 0,o.HUDOcclusionPass=function(e){var o=e;o.vertex.code.add(t.glsl(i||(i=n.__makeTemplateObject(["\n  void main(void) {\n    vec4 posProjCenter;\n    if (dot(position, position) > 0.0) {\n      // Render single point to center of the pixel to avoid subpixel\n      // filtering to affect the marker color\n      ProjectHUDAux projectAux;\n      vec4 posProj = projectPositionHUD(projectAux);\n      posProjCenter = alignToPixelCenter(posProj, viewport.zw);\n\n      vec3 vpos = projectAux.posModel;\n      if (rejectBySlice(vpos)) {\n        // Project out of clip space\n        posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);\n      }\n    }\n    else {\n      // Project out of clip space\n      posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);\n    }\n\n    gl_Position = posProjCenter;\n    gl_PointSize = 1.0;\n  }\n  "],["\n  void main(void) {\n    vec4 posProjCenter;\n    if (dot(position, position) > 0.0) {\n      // Render single point to center of the pixel to avoid subpixel\n      // filtering to affect the marker color\n      ProjectHUDAux projectAux;\n      vec4 posProj = projectPositionHUD(projectAux);\n      posProjCenter = alignToPixelCenter(posProj, viewport.zw);\n\n      vec3 vpos = projectAux.posModel;\n      if (rejectBySlice(vpos)) {\n        // Project out of clip space\n        posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);\n      }\n    }\n    else {\n      // Project out of clip space\n      posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);\n    }\n\n    gl_Position = posProjCenter;\n    gl_PointSize = 1.0;\n  }\n  "])))),o.fragment.uniforms.add("color","vec4"),o.fragment.code.add(t.glsl(r||(r=n.__makeTemplateObject(["\n  void main() {\n    gl_FragColor = color;\n  }\n  "],["\n  void main() {\n    gl_FragColor = color;\n  }\n  "]))))},function(e){e.bindUniforms=function(e){e.setUniform4f("color",1,1,1,1)}}(o.HUDOcclusion||(o.HUDOcclusion={}))}));