/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl"],(function(e,r,a,o,l,i,d){"use strict";function t(e){const t=new o.ShaderBuilder;return t.include(a.Transform,{linearDepth:!1}),t.vertex.uniforms.add("proj","mat4").add("view","mat4"),t.attributes.add("position","vec3"),t.attributes.add("uv0","vec2"),t.varyings.add("vpos","vec3"),t.vertex.uniforms.add("textureCoordinateScaleFactor","vec2"),t.vertex.code.add(r.glsl`
    void main(void) {
      vpos = position;
      vTexCoord = uv0 * textureCoordinateScaleFactor;
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),t.include(i.Slice,e),t.fragment.uniforms.add("tex","sampler2D"),t.fragment.uniforms.add("opacity","float"),t.varyings.add("vTexCoord","vec2"),7===e.output?t.fragment.code.add(r.glsl`
    void main() {
      discardBySlice(vpos);

      float alpha = texture2D(tex, vTexCoord).a * opacity;
      if (alpha  < ${r.glsl.float(d.defaultMaskAlphaCutoff)}) {
        discard;
      }

      gl_FragColor = vec4(alpha);
    }
    `):(t.fragment.include(l.ColorConversion),t.fragment.code.add(r.glsl`
    void main() {
      discardBySlice(vpos);
      gl_FragColor = texture2D(tex, vTexCoord) * opacity;

      if (gl_FragColor.a < ${r.glsl.float(d.defaultMaskAlphaCutoff)}) {
        discard;
      }

      gl_FragColor = highlightSlice(gl_FragColor, vpos);
      ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    }
    `)),t}var s=Object.freeze({__proto__:null,build:t});e.ImageMaterialShader=s,e.build=t}));
