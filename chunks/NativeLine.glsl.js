/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/LineStipple.glsl"],(function(e,i,l,t,o,r,a,s,n){"use strict";function d(e){const d=new t.ShaderBuilder;return d.include(l.Transform,{linearDepth:!1}),d.include(s.VertexColor,e),d.include(n.LineStipple,e),d.vertex.uniforms.add("proj","mat4").add("view","mat4"),d.attributes.add("position","vec3"),d.varyings.add("vpos","vec3"),d.vertex.code.add(i.glsl`
    void main(void) {
      vpos = position;
      forwardNormalizedVertexColor();
      gl_Position = transformPosition(proj, view, vpos);
  `),e.stippleEnabled&&(d.attributes.add("auxpos1","vec3"),d.vertex.uniforms.add("ndcToPixel","vec2"),d.vertex.code.add(i.glsl`
    vec4 vpos2 = transformPosition(proj, view, auxpos1);
    float lineSegmentPixelSize = length((vpos2.xy / vpos2.w - gl_Position.xy / gl_Position.w) * ndcToPixel);

    stipplePatternUv = lineSegmentPixelSize * stipplePatternPixelSizeInv;
    ${e.stippleIntegerRepeatsEnabled?"stipplePatternUv = floor(stipplePatternUv + 0.5);":""}

    // Cancel out perspective correct interpolation because we want this length the really represent
    // the screen distance
    stipplePatternUv *= gl_Position.w;
    `)),d.vertex.code.add(i.glsl`
  }
  `),4===e.output&&d.include(r.OutputHighlight),d.include(o.Slice,e),d.fragment.uniforms.add("constantColor","vec4").add("alphaCoverage","float"),d.fragment.code.add(i.glsl`
  void main() {
    discardBySlice(vpos);

    vec4 color = ${e.attributeColor?"vColor":"constantColor"};

    float stippleAlpha = getStippleAlpha();
    discardByStippleAlpha(stippleAlpha, STIPPLE_ALPHA_COLOR_DISCARD);

    vec4 finalColor = blendStipple(vec4(color.rgb, color.a * alphaCoverage), stippleAlpha);

    if (finalColor.a < ${i.glsl.float(a.symbolAlphaCutoff)}) {
      discard;
    }

    ${0===e.output?i.glsl`gl_FragColor = highlightSlice(finalColor, vpos);`:""}
    ${4===e.output?i.glsl`outputHighlight();`:""}
  }
  `),d}var p=Object.freeze({__proto__:null,build:d});e.NativeLineShader=p,e.build=d}));
