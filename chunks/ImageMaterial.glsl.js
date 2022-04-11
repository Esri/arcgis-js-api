/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/lib/VertexAttribute"],(function(e,r,a,i,t,l,o,d,s,n,g){"use strict";function u(e){const u=new n.ShaderBuilder;return u.include(i.Transform,{linearDepth:!1}),u.vertex.uniforms.add("proj","mat4").add("view","mat4"),u.attributes.add(g.VertexAttribute.POSITION,"vec3"),u.attributes.add(g.VertexAttribute.UV0,"vec2"),u.varyings.add("vpos","vec3"),e.multipassTerrainEnabled&&u.varyings.add("depth","float"),u.vertex.uniforms.add("textureCoordinateScaleFactor","vec2"),u.vertex.code.add(s.glsl`
    void main(void) {
      vpos = position;
      ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0 * textureCoordinateScaleFactor;
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),u.include(a.Slice,e),e.multipassTerrainEnabled&&(u.fragment.include(t.ReadLinearDepth),u.include(l.multipassTerrainTest,e)),u.fragment.uniforms.add("tex","sampler2D"),u.fragment.uniforms.add("opacity","float"),u.varyings.add("vTexCoord","vec2"),e.output===r.ShaderOutput.Alpha?u.fragment.code.add(s.glsl`
    void main() {
      discardBySlice(vpos);
      ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}

      float alpha = texture2D(tex, vTexCoord).a * opacity;
      if (alpha  < ${s.glsl.float(o.defaultMaskAlphaCutoff)}) {
        discard;
      }

      gl_FragColor = vec4(alpha);
    }
    `):(u.fragment.include(d.ColorConversion),u.fragment.code.add(s.glsl`
    void main() {
      discardBySlice(vpos);
      ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
      gl_FragColor = texture2D(tex, vTexCoord) * opacity;

      if (gl_FragColor.a < ${s.glsl.float(o.defaultMaskAlphaCutoff)}) {
        discard;
      }

      gl_FragColor = highlightSlice(gl_FragColor, vpos);
      ${e.oitEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    }
    `)),u}const c=Object.freeze(Object.defineProperty({__proto__:null,build:u},Symbol.toStringTag,{value:"Module"}));e.ImageMaterialShader=c,e.build=u}));
