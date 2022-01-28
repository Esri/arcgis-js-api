/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/LineStipple.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder"],(function(e,i,t,o,l,r,s,a,d){"use strict";function n(e){const n=new d.ShaderBuilder;return n.include(t.Transform,{linearDepth:!1}),n.include(o.VertexColor,e),n.include(r.LineStipple,{...e,stippleRequiresStretchMeasure:!1}),n.vertex.uniforms.add("proj","mat4").add("view","mat4"),e.stippleEnabled&&(n.vertex.uniforms.add("ndcToPixel","vec2"),n.attributes.add("uv0","vec2"),n.attributes.add("auxpos1","vec3")),n.attributes.add("position","vec3"),n.varyings.add("vpos","vec3"),n.vertex.code.add(a.glsl`void main(void) {
vpos = position;
forwardNormalizedVertexColor();
gl_Position = transformPosition(proj, view, vpos);`),e.stippleEnabled&&(n.vertex.code.add(a.glsl`vec4 vpos2 = transformPosition(proj, view, auxpos1);
float lineSegmentPixelSize = length((vpos2.xy / vpos2.w - gl_Position.xy / gl_Position.w) * ndcToPixel);`),e.draped||n.vertex.code.add(a.glsl`vec3 segmentCenter = (position + auxpos1) * 0.5;
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),n.vertex.code.add(a.glsl`float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);`),e.draped?n.vertex.code.add(a.glsl`float startPseudoScreen = uv0.y * discreteWorldToScreenRatio - mix(0.0, lineSegmentPixelSize, uv0.x);
float segmentLengthPseudoScreen = lineSegmentPixelSize;`):n.vertex.code.add(a.glsl`float segmentLengthRender = length(position - auxpos1);
float startPseudoScreen = mix(uv0.y, uv0.y - segmentLengthRender, uv0.x) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),n.vertex.code.add(a.glsl`vec2 stippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, lineSegmentPixelSize, stipplePatternPixelSize);
vStippleDistance = mix(stippleDistanceLimits.x, stippleDistanceLimits.y, uv0.x);
vStippleDistance *= gl_Position.w;`)),n.vertex.code.add(a.glsl`}`),4===e.output&&n.include(l.OutputHighlight),n.include(i.Slice,e),n.fragment.uniforms.add("constantColor","vec4").add("alphaCoverage","float"),n.fragment.code.add(a.glsl`
  void main() {
    discardBySlice(vpos);

    vec4 color = ${e.attributeColor?"vColor":"constantColor"};

    float stippleAlpha = getStippleAlpha();
    discardByStippleAlpha(stippleAlpha, stippleAlphaColorDiscard);

    vec4 finalColor = blendStipple(vec4(color.rgb, color.a * alphaCoverage), stippleAlpha);

    if (finalColor.a < ${a.glsl.float(s.symbolAlphaCutoff)}) {
      discard;
    }

    ${0===e.output?a.glsl`gl_FragColor = highlightSlice(finalColor, vpos);`:""}
    ${4===e.output?a.glsl`outputHighlight();`:""}
  }
  `),n}const c=Object.freeze({__proto__:null,build:n});e.NativeLineShader=c,e.build=n}));
