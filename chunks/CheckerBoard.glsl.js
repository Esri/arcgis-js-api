/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl"],(function(e,a,r,d,i,l){"use strict";function o(e){const o=new r.ShaderBuilder;return o.extensions.add("GL_OES_standard_derivatives"),o.attributes.add("position","vec3"),o.attributes.add("uv0","vec2"),o.vertex.uniforms.add("proj","mat4").add("view","mat4"),o.varyings.add("vUV","vec2"),e.multipassTerrainEnabled&&o.varyings.add("depth","float"),o.vertex.code.add(a.glsl`
    void main(void) {
      vUV = uv0;
      ${e.multipassTerrainEnabled?"depth = (view * vec4(position, 1.0)).z;":""}
      gl_Position = proj * view * vec4(position, 1.0);
    }
  `),e.multipassTerrainEnabled&&(o.fragment.include(i.ReadLinearDepth),o.include(l.multipassTerrainTest,e)),o.fragment.uniforms.add("size","vec2").add("color1","vec4").add("color2","vec4"),o.fragment.include(d.ColorConversion),o.fragment.code.add(a.glsl`
    void main() {
      ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
      vec2 uvScaled = vUV / (2.0 * size);

      vec2 uv = fract(uvScaled - 0.25);
      vec2 ab = clamp((abs(uv - 0.5) - 0.25) / fwidth(uvScaled), -0.5, 0.5);
      float fade = smoothstep(0.25, 0.5, max(fwidth(uvScaled.x), fwidth(uvScaled.y)));
      float t = mix(abs(ab.x + ab.y), 0.5, fade);

      gl_FragColor = mix(color2, color1, t);
      ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    }
  `),o}var t=Object.freeze({__proto__:null,build:o});e.CheckerBoardShader=t,e.build=o}));
