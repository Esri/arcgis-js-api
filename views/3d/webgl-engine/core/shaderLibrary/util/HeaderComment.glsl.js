/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces","../../../../../webgl/checkWebGLError"],(function(e,t,u){"use strict";function d(e,d){const o=t.glsl`
  /*
  *  ${d.name}
  *  ${0===d.output?"RenderOutput: Color":1===d.output?"RenderOutput: Depth":3===d.output?"RenderOutput: Shadow":2===d.output?"RenderOutput: Normal":4===d.output?"RenderOutput: Highlight":""}
  */
  `;u.webglValidateShadersEnabled()&&(e.fragment.code.add(o),e.vertex.code.add(o))}e.HeaderComment=d,Object.defineProperty(e,"__esModule",{value:!0})}));
