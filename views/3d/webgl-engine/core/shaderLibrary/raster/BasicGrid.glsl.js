/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces"],(function(e,t){"use strict";e.BasicGrid=function(e){e.attributes.add("position","vec2"),e.attributes.add("uv0","vec2"),e.vertex.uniforms.add("u_scale","float"),e.vertex.uniforms.add("u_offset","vec2"),e.varyings.add("v_texcoord","vec2"),e.vertex.code.add(t.glsl`
    void main(void) {
      v_texcoord = uv0 * u_scale + u_offset;
      gl_Position = vec4(position, 0.0, 1.0);
    }
  `)},Object.defineProperty(e,"__esModule",{value:!0})}));
