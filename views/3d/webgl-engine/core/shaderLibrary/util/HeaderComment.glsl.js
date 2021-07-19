/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces","../../../../../webgl/RenderingContext"],(function(e,t,u){"use strict";function d(e,d){const n=t.glsl`
  /*
  *  ${d.name}
  *  ${0===d.output?"RenderOutput: Color":1===d.output?"RenderOutput: Depth":3===d.output?"RenderOutput: Shadow":2===d.output?"RenderOutput: Normal":4===d.output?"RenderOutput: Highlight":""}
  */
  `;u.webglValidateShadersEnabled()&&(e.fragment.code.add(n),e.vertex.code.add(n))}e.HeaderComment=d,Object.defineProperty(e,"__esModule",{value:!0})}));
