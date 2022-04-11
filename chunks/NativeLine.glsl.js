/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/LineStipple.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/lib/VertexAttribute"],(function(e,t,i,l,o,r,s,d,a,n,c){"use strict";function g(e){const g=new n.ShaderBuilder;return g.include(l.Transform,{linearDepth:!1}),g.include(o.VertexColor,e),g.include(s.LineStipple,{...e,stippleRequiresStretchMeasure:!1}),g.vertex.uniforms.add("proj","mat4").add("view","mat4"),e.stippleEnabled&&(g.vertex.uniforms.add("ndcToPixel","vec2"),g.attributes.add(c.VertexAttribute.UV0,"vec2"),g.attributes.add(c.VertexAttribute.AUXPOS1,"vec3")),g.attributes.add(c.VertexAttribute.POSITION,"vec3"),g.varyings.add("vpos","vec3"),g.vertex.code.add(a.glsl`void main(void) {
vpos = position;
forwardNormalizedVertexColor();
gl_Position = transformPosition(proj, view, vpos);`),e.stippleEnabled&&(g.vertex.code.add(a.glsl`vec4 vpos2 = transformPosition(proj, view, auxpos1);
float lineSegmentPixelSize = length((vpos2.xy / vpos2.w - gl_Position.xy / gl_Position.w) * ndcToPixel);`),e.draped||g.vertex.code.add(a.glsl`vec3 segmentCenter = (position + auxpos1) * 0.5;
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),g.vertex.code.add(a.glsl`float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);`),e.draped?g.vertex.code.add(a.glsl`float startPseudoScreen = uv0.y * discreteWorldToScreenRatio - mix(0.0, lineSegmentPixelSize, uv0.x);
float segmentLengthPseudoScreen = lineSegmentPixelSize;`):g.vertex.code.add(a.glsl`float segmentLengthRender = length(position - auxpos1);
float startPseudoScreen = mix(uv0.y, uv0.y - segmentLengthRender, uv0.x) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),g.vertex.code.add(a.glsl`vec2 stippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, lineSegmentPixelSize, stipplePatternPixelSize);
vStippleDistance = mix(stippleDistanceLimits.x, stippleDistanceLimits.y, uv0.x);
vStippleDistance *= gl_Position.w;`)),g.vertex.code.add(a.glsl`}`),e.output===t.ShaderOutput.Highlight&&g.include(r.OutputHighlight),g.include(i.Slice,e),g.fragment.uniforms.add("constantColor","vec4").add("alphaCoverage","float"),g.fragment.code.add(a.glsl`
  void main() {
    discardBySlice(vpos);

    vec4 color = ${e.attributeColor?"vColor":"constantColor"};

    float stippleAlpha = getStippleAlpha();
    discardByStippleAlpha(stippleAlpha, stippleAlphaColorDiscard);

    vec4 finalColor = blendStipple(vec4(color.rgb, color.a * alphaCoverage), stippleAlpha);

    if (finalColor.a < ${a.glsl.float(d.symbolAlphaCutoff)}) {
      discard;
    }

    ${e.output===t.ShaderOutput.Color?a.glsl`gl_FragColor = highlightSlice(finalColor, vpos);`:""}
    ${e.output===t.ShaderOutput.Highlight?a.glsl`outputHighlight();`:""}
  }
  `),g}const p=Object.freeze(Object.defineProperty({__proto__:null,build:g},Symbol.toStringTag,{value:"Module"}));e.NativeLineShader=p,e.build=g}));
