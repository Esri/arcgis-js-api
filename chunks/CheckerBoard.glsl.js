/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl","../views/3d/webgl-engine/core/shaderModules/Float2PassUniform","../views/3d/webgl-engine/core/shaderModules/Float4PassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/lib/TransparencyPassType","../views/3d/webgl-engine/lib/VertexAttribute"],(function(e,r,i,a,s,o,l,d,t,n){"use strict";function c(e){const c=new d.ShaderBuilder;c.extensions.add("GL_OES_standard_derivatives");const{vertex:u,fragment:v}=c;return a.addProjViewLocalOrigin(u,e),c.attributes.add(n.VertexAttribute.POSITION,"vec3"),c.attributes.add(n.VertexAttribute.UV0,"vec2"),c.varyings.add("vUV","vec2"),e.hasMultipassTerrain&&c.varyings.add("depth","float"),u.code.add(l.glsl`
    void main(void) {
      vUV = uv0;
      ${e.hasMultipassTerrain?"depth = (view * vec4(position, 1.0)).z;":""}
      gl_Position = proj * view * vec4(position, 1.0);
    }
  `),c.include(r.multipassTerrainTest,e),v.uniforms.add(new s.Float2PassUniform("size",(e=>e.size))),v.uniforms.add(new o.Float4PassUniform("color1",(e=>e.color1))),v.uniforms.add(new o.Float4PassUniform("color2",(e=>e.color2))),v.include(i.ColorConversion),v.code.add(l.glsl`
    void main() {
      ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
      vec2 uvScaled = vUV / (2.0 * size);

      vec2 uv = fract(uvScaled - 0.25);
      vec2 ab = clamp((abs(uv - 0.5) - 0.25) / fwidth(uvScaled), -0.5, 0.5);
      float fade = smoothstep(0.25, 0.5, max(fwidth(uvScaled.x), fwidth(uvScaled.y)));
      float t = mix(abs(ab.x + ab.y), 0.5, fade);

      gl_FragColor = mix(color2, color1, t);
      ${e.transparencyPassType===t.TransparencyPassType.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    }
  `),c}const u=Object.freeze(Object.defineProperty({__proto__:null,build:c},Symbol.toStringTag,{value:"Module"}));e.CheckerBoard=u,e.build=c}));
