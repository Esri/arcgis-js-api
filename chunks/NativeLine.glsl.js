/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/LineStipple.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff","../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl","../views/3d/webgl-engine/core/shaderModules/Float4PassUniform","../views/3d/webgl-engine/core/shaderModules/FloatPassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/lib/VertexAttribute"],(function(e,i,t,o,l,r,s,a,n,d,c,g,p,u){"use strict";function h(e){const h=new p.ShaderBuilder,{vertex:v,fragment:S}=h;return h.include(o.Transform,e),h.include(l.VertexColor,e),h.include(s.LineStipple,e),n.addProjViewLocalOrigin(v,e),e.stippleEnabled&&(h.attributes.add(u.VertexAttribute.UV0,"vec2"),h.attributes.add(u.VertexAttribute.AUXPOS1,"vec3"),v.uniforms.add(new d.Float4PassUniform("viewport",((e,i)=>i.camera.fullViewport)))),h.attributes.add(u.VertexAttribute.POSITION,"vec3"),h.varyings.add("vpos","vec3"),v.code.add(g.glsl`void main(void) {
vpos = position;
forwardNormalizedVertexColor();
gl_Position = transformPosition(proj, view, vpos);`),e.stippleEnabled&&(v.code.add(g.glsl`vec4 vpos2 = transformPosition(proj, view, auxpos1);
vec2 ndcToPixel = viewport.zw * 0.5;
float lineSegmentPixelSize = length((vpos2.xy / vpos2.w - gl_Position.xy / gl_Position.w) * ndcToPixel);`),e.draped?v.uniforms.add(new c.FloatPassUniform("worldToScreenRatio",((e,i)=>1/i.screenToPCSRatio))):v.code.add(g.glsl`vec3 segmentCenter = (position + auxpos1) * 0.5;
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),v.code.add(g.glsl`float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);`),e.draped?v.code.add(g.glsl`float startPseudoScreen = uv0.y * discreteWorldToScreenRatio - mix(0.0, lineSegmentPixelSize, uv0.x);
float segmentLengthPseudoScreen = lineSegmentPixelSize;`):v.code.add(g.glsl`float segmentLengthRender = length(position - auxpos1);
float startPseudoScreen = mix(uv0.y, uv0.y - segmentLengthRender, uv0.x) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),v.uniforms.add(new c.FloatPassUniform("stipplePatternPixelSize",(e=>s.computePixelSize(e)))),v.code.add(g.glsl`vec2 stippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, lineSegmentPixelSize, stipplePatternPixelSize);
vStippleDistance = mix(stippleDistanceLimits.x, stippleDistanceLimits.y, uv0.x);
vStippleDistance *= gl_Position.w;`)),v.code.add(g.glsl`}`),e.output===i.ShaderOutput.Highlight&&h.include(r.OutputHighlight,e),h.include(t.SliceDraw,e),S.uniforms.add(new c.FloatPassUniform("alphaCoverage",((e,i)=>Math.min(1,e.width*i.camera.pixelRatio)))),e.hasVertexColors||S.uniforms.add(new d.Float4PassUniform("constantColor",(e=>e.color))),S.code.add(g.glsl`
  void main() {
    discardBySlice(vpos);

    vec4 color = ${e.hasVertexColors?"vColor":"constantColor"};

    float stippleAlpha = getStippleAlpha();
    discardByStippleAlpha(stippleAlpha, stippleAlphaColorDiscard);

    vec4 finalColor = blendStipple(vec4(color.rgb, color.a * alphaCoverage), stippleAlpha);

    ${e.output===i.ShaderOutput.ObjectAndLayerIdColor?g.glsl`finalColor.a = 1.0;`:""}

    if (finalColor.a < ${g.glsl.float(a.symbolAlphaCutoff)}) {
      discard;
    }

    ${e.output===i.ShaderOutput.Color?g.glsl`gl_FragColor = highlightSlice(finalColor, vpos);`:""}
    ${e.output===i.ShaderOutput.Highlight?g.glsl`outputHighlight();`:""}
  }
  `),h}const v=Object.freeze(Object.defineProperty({__proto__:null,build:h},Symbol.toStringTag,{value:"Module"}));e.NativeLine=v,e.build=h}));
