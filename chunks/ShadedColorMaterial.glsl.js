/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/ScreenSizeScaling.glsl","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder"],(function(e,r,i,l,a,o,d,n,s,t){"use strict";function g(e){const g=new t.ShaderBuilder;return g.include(l.Transform,{linearDepth:!1}),g.include(r.ScreenSizeScaling,{}),g.include(i.Slice,e),g.fragment.include(n.ColorConversion),g.vertex.uniforms.add("proj","mat4").add("view","mat4"),g.fragment.uniforms.add("color","vec4"),g.attributes.add("position","vec3"),g.varyings.add("vWorldPosition","vec3"),e.multipassTerrainEnabled&&g.varyings.add("depth","float"),e.screenSizeEnabled&&g.attributes.add("offset","vec3"),e.shadingEnabled&&(g.vertex.uniforms.add("viewNormal","mat4"),g.fragment.uniforms.add("shadedColor","vec4").add("shadingDirection","vec3"),g.attributes.add("normal","vec3"),g.varyings.add("vViewNormal","vec3")),g.vertex.code.add(s.glsl`
    void main(void) {
      vWorldPosition = ${e.screenSizeEnabled?"screenSizeScaling(offset, position)":"position"};
  `),e.shadingEnabled&&g.vertex.code.add(s.glsl`vec3 worldNormal = normal;
vViewNormal = (viewNormal * vec4(worldNormal, 1)).xyz;`),g.vertex.code.add(s.glsl`
    ${e.multipassTerrainEnabled?"depth = (view * vec4(vWorldPosition, 1.0)).z;":""}
    gl_Position = transformPosition(proj, view, vWorldPosition);
  }
  `),e.multipassTerrainEnabled&&(g.fragment.include(a.ReadLinearDepth),g.include(o.multipassTerrainTest,e)),g.fragment.code.add(s.glsl`
    void main() {
      discardBySlice(vWorldPosition);
      ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
    `),e.shadingEnabled?g.fragment.code.add(s.glsl`vec3 viewNormalNorm = normalize(vViewNormal);
float shadingFactor = 1.0 - clamp(-dot(viewNormalNorm, shadingDirection), 0.0, 1.0);
vec4 finalColor = mix(color, shadedColor, shadingFactor);`):g.fragment.code.add(s.glsl`vec4 finalColor = color;`),g.fragment.code.add(s.glsl`
      if (finalColor.a < ${s.glsl.float(d.symbolAlphaCutoff)}) {
        discard;
      }
      ${7===e.output?s.glsl`gl_FragColor = vec4(finalColor.a);`:""}

      ${0===e.output?s.glsl`gl_FragColor = highlightSlice(finalColor, vWorldPosition); ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}`:""}
    }
    `),g}var c=Object.freeze({__proto__:null,build:g});e.ShadedColorMaterialShader=c,e.build=g}));
