/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl"],(function(e,d,a,o){"use strict";function r(e){const r=new a.ShaderBuilder;return r.extensions.add("GL_OES_standard_derivatives"),r.attributes.add("position","vec3"),r.attributes.add("uv0","vec2"),r.vertex.uniforms.add("proj","mat4").add("view","mat4"),r.varyings.add("vUV","vec2"),r.vertex.code.add(d.glsl`
    void main(void) {
      vUV = uv0;
      gl_Position = proj * view * vec4(position.xyz, 1.0);
    }
  `),r.fragment.uniforms.add("size","vec2").add("color1","vec4").add("color2","vec4"),r.fragment.include(o.ColorConversion),r.fragment.code.add(d.glsl`
    void main() {
      vec2 uvScaled = vUV / (2.0 * size);

      vec2 uv = fract(uvScaled - 0.25);
      vec2 ab = clamp((abs(uv - 0.5) - 0.25) / fwidth(uvScaled), -0.5, 0.5);
      float fade = smoothstep(0.25, 0.5, max(fwidth(uvScaled.x), fwidth(uvScaled.y)));
      float t = mix(abs(ab.x + ab.y), 0.5, fade);

      gl_FragColor = mix(color2, color1, t);
      ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    }
  `),r}var i=Object.freeze({__proto__:null,build:r});e.CheckerBoardShader=i,e.build=r}));
