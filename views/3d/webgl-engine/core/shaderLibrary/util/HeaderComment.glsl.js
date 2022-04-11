/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../ShaderOutputOptions","../../shaderModules/interfaces","../../../../../webgl/checkWebGLError"],(function(e,t,u,d){"use strict";function r(e,r){const o=u.glsl`
  /*
  *  ${r.name}
  *  ${r.output===t.ShaderOutput.Color?"RenderOutput: Color":r.output===t.ShaderOutput.Depth?"RenderOutput: Depth":r.output===t.ShaderOutput.Shadow?"RenderOutput: Shadow":r.output===t.ShaderOutput.Normal?"RenderOutput: Normal":r.output===t.ShaderOutput.Highlight?"RenderOutput: Highlight":""}
  */
  `;d.webglValidateShadersEnabled()&&(e.fragment.code.add(o),e.vertex.code.add(o))}e.HeaderComment=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
