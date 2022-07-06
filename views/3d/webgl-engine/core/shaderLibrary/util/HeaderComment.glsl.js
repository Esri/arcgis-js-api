/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{ShaderOutput as t}from"../ShaderOutputOptions.js";import{glsl as e}from"../../shaderModules/interfaces.js";import{webglValidateShadersEnabled as o}from"../../../../../webgl/checkWebGLError.js";function r(r,u){const p=e`
  /*
  *  ${u.name}
  *  ${u.output===t.Color?"RenderOutput: Color":u.output===t.Depth?"RenderOutput: Depth":u.output===t.Shadow?"RenderOutput: Shadow":u.output===t.Normal?"RenderOutput: Normal":u.output===t.Highlight?"RenderOutput: Highlight":""}
  */
  `;o()&&(r.fragment.code.add(p),r.vertex.code.add(p))}export{r as HeaderComment};
