/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder"],(function(e,r,a,i,l,o,d,t,s){"use strict";function n(e){const n=new s.ShaderBuilder;return n.include(a.Transform,{linearDepth:!1}),n.vertex.uniforms.add("proj","mat4").add("view","mat4"),n.attributes.add("position","vec3"),n.attributes.add("uv0","vec2"),n.varyings.add("vpos","vec3"),e.multipassTerrainEnabled&&n.varyings.add("depth","float"),n.vertex.uniforms.add("textureCoordinateScaleFactor","vec2"),n.vertex.code.add(t.glsl`
    void main(void) {
      vpos = position;
      ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0 * textureCoordinateScaleFactor;
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),n.include(r.Slice,e),e.multipassTerrainEnabled&&(n.fragment.include(i.ReadLinearDepth),n.include(l.multipassTerrainTest,e)),n.fragment.uniforms.add("tex","sampler2D"),n.fragment.uniforms.add("opacity","float"),n.varyings.add("vTexCoord","vec2"),7===e.output?n.fragment.code.add(t.glsl`
    void main() {
      discardBySlice(vpos);
      ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}

      float alpha = texture2D(tex, vTexCoord).a * opacity;
      if (alpha  < ${t.glsl.float(o.defaultMaskAlphaCutoff)}) {
        discard;
      }

      gl_FragColor = vec4(alpha);
    }
    `):(n.fragment.include(d.ColorConversion),n.fragment.code.add(t.glsl`
    void main() {
      discardBySlice(vpos);
      ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
      gl_FragColor = texture2D(tex, vTexCoord) * opacity;

      if (gl_FragColor.a < ${t.glsl.float(o.defaultMaskAlphaCutoff)}) {
        discard;
      }

      gl_FragColor = highlightSlice(gl_FragColor, vpos);
      ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    }
    `)),n}var g=Object.freeze({__proto__:null,build:n});e.ImageMaterialShader=g,e.build=n}));
