/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder"],(function(e,o,r){"use strict";function t(){const e=new r.ShaderBuilder;return e.attributes.add("position","vec2"),e.attributes.add("uv0","vec2"),e.vertex.uniforms.add("scale","float"),e.vertex.uniforms.add("offset","vec2"),e.varyings.add("uv","vec2"),e.vertex.code.add(o.glsl`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      uv = uv0 * scale + offset;
    }
  `),e.fragment.uniforms.add("tex","sampler2D"),e.fragment.uniforms.add("opacity","float"),e.fragment.code.add(o.glsl`
    void main() {
      vec4 color = texture2D(tex, uv);

      // Note: output in pre-multiplied alpha for correct alpha compositing
      gl_FragColor = vec4(color.xyz, 1.0) * color.a * opacity;
    }
  `),e}var d=Object.freeze({__proto__:null,build:t});e.BlendLayersShader=d,e.build=t}));
