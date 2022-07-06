/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{glsl as i}from"../shaderModules/interfaces.js";import{VertexAttribute as e}from"../../lib/VertexAttribute.js";function o(o,t=!0){o.attributes.add(e.POSITION,"vec2"),t&&o.varyings.add("uv","vec2"),o.vertex.code.add(i`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?i`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}export{o as ScreenSpacePass};
