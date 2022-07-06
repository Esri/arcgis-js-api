/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{multipassTerrainTest as e}from"../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl.js";import{ColorConversion as r}from"../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl.js";import{addProjViewLocalOrigin as i}from"../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js";import{Float2PassUniform as o}from"../views/3d/webgl-engine/core/shaderModules/Float2PassUniform.js";import{Float4PassUniform as a}from"../views/3d/webgl-engine/core/shaderModules/Float4PassUniform.js";import{glsl as s}from"../views/3d/webgl-engine/core/shaderModules/interfaces.js";import{ShaderBuilder as t}from"../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js";import{TransparencyPassType as d}from"../views/3d/webgl-engine/lib/basicInterfaces.js";import{VertexAttribute as l}from"../views/3d/webgl-engine/lib/VertexAttribute.js";function n(n){const c=new t;return c.extensions.add("GL_OES_standard_derivatives"),i(c,n),c.attributes.add(l.POSITION,"vec3"),c.attributes.add(l.UV0,"vec2"),c.varyings.add("vUV","vec2"),n.hasMultipassTerrain&&c.varyings.add("depth","float"),c.vertex.code.add(s`
    void main(void) {
      vUV = uv0;
      ${n.hasMultipassTerrain?"depth = (view * vec4(position, 1.0)).z;":""}
      gl_Position = proj * view * vec4(position, 1.0);
    }
  `),c.include(e,n),c.fragment.uniforms.add(new o("size",(e=>e.size))),c.fragment.uniforms.add(new a("color1",(e=>e.color1))),c.fragment.uniforms.add(new a("color2",(e=>e.color2))),c.fragment.include(r),c.fragment.code.add(s`
    void main() {
      ${n.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
      vec2 uvScaled = vUV / (2.0 * size);

      vec2 uv = fract(uvScaled - 0.25);
      vec2 ab = clamp((abs(uv - 0.5) - 0.25) / fwidth(uvScaled), -0.5, 0.5);
      float fade = smoothstep(0.25, 0.5, max(fwidth(uvScaled.x), fwidth(uvScaled.y)));
      float t = mix(abs(ab.x + ab.y), 0.5, fade);

      gl_FragColor = mix(color2, color1, t);
      ${n.transparencyPassType===d.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    }
  `),c}const c=Object.freeze(Object.defineProperty({__proto__:null,build:n},Symbol.toStringTag,{value:"Module"}));export{c as C,n as b};
