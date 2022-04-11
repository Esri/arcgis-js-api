/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/ScreenSizeScaling.glsl","../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/lib/VertexAttribute"],(function(e,r,i,l,a,o,d,n,t,s,g,c){"use strict";function v(e){const v=new g.ShaderBuilder;return v.include(a.Transform,{linearDepth:!1}),v.include(r.ScreenSizeScaling,{}),v.include(l.Slice,e),v.fragment.include(t.ColorConversion),v.vertex.uniforms.add("proj","mat4").add("view","mat4"),v.fragment.uniforms.add("uColor","vec4"),v.attributes.add(c.VertexAttribute.POSITION,"vec3"),v.varyings.add("vWorldPosition","vec3"),e.multipassTerrainEnabled&&v.varyings.add("depth","float"),e.screenSizeEnabled&&v.attributes.add(c.VertexAttribute.OFFSET,"vec3"),e.shadingEnabled&&(v.vertex.uniforms.add("viewNormal","mat4"),v.fragment.uniforms.add("shadedColor","vec4").add("shadingDirection","vec3"),v.attributes.add(c.VertexAttribute.NORMAL,"vec3"),v.varyings.add("vViewNormal","vec3")),v.vertex.code.add(s.glsl`
    void main(void) {
      vWorldPosition = ${e.screenSizeEnabled?"screenSizeScaling(offset, position)":"position"};
  `),e.shadingEnabled&&v.vertex.code.add(s.glsl`vec3 worldNormal = normal;
vViewNormal = (viewNormal * vec4(worldNormal, 1)).xyz;`),v.vertex.code.add(s.glsl`
    ${e.multipassTerrainEnabled?"depth = (view * vec4(vWorldPosition, 1.0)).z;":""}
    gl_Position = transformPosition(proj, view, vWorldPosition);
  }
  `),e.multipassTerrainEnabled&&(v.fragment.include(o.ReadLinearDepth),v.include(d.multipassTerrainTest,e)),v.fragment.code.add(s.glsl`
    void main() {
      discardBySlice(vWorldPosition);
      ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
    `),e.shadingEnabled?v.fragment.code.add(s.glsl`vec3 viewNormalNorm = normalize(vViewNormal);
float shadingFactor = 1.0 - clamp(-dot(viewNormalNorm, shadingDirection), 0.0, 1.0);
vec4 finalColor = mix(uColor, shadedColor, shadingFactor);`):v.fragment.code.add(s.glsl`vec4 finalColor = uColor;`),v.fragment.code.add(s.glsl`
      if (finalColor.a < ${s.glsl.float(n.symbolAlphaCutoff)}) {
        discard;
      }
      ${e.output===i.ShaderOutput.Alpha?s.glsl`gl_FragColor = vec4(finalColor.a);`:""}

      ${e.output===i.ShaderOutput.Color?s.glsl`gl_FragColor = highlightSlice(finalColor, vWorldPosition); ${e.oitEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}`:""}
    }
    `),v}const u=Object.freeze(Object.defineProperty({__proto__:null,build:v},Symbol.toStringTag,{value:"Module"}));e.ShadedColorMaterialShader=u,e.build=v}));
