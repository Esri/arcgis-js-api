/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{ShaderOutput as e}from"../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions.js";import{SliceDraw as o}from"../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js";import{Transform as i}from"../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl.js";import{VertexColor as r}from"../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl.js";import{OutputHighlight as t}from"../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl.js";import{LineStipple as s}from"../views/3d/webgl-engine/core/shaderLibrary/shading/LineStipple.glsl.js";import{symbolAlphaCutoff as l}from"../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff.js";import{addProjViewLocalOrigin as n}from"../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js";import{Float4PassUniform as a}from"../views/3d/webgl-engine/core/shaderModules/Float4PassUniform.js";import{FloatPassUniform as d}from"../views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js";import{glsl as p}from"../views/3d/webgl-engine/core/shaderModules/interfaces.js";import{ShaderBuilder as c}from"../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js";import{VertexAttribute as g}from"../views/3d/webgl-engine/lib/VertexAttribute.js";function m(m){const u=new c;u.include(i),u.include(r,m),u.include(s,m),n(u,m);const{vertex:v,fragment:h}=u;return m.stippleEnabled&&(u.attributes.add(g.UV0,"vec2"),u.attributes.add(g.AUXPOS1,"vec3"),v.uniforms.add(new a("viewport",((e,o)=>o.camera.fullViewport)))),u.attributes.add(g.POSITION,"vec3"),u.varyings.add("vpos","vec3"),v.code.add(p`void main(void) {
vpos = position;
forwardNormalizedVertexColor();
gl_Position = transformPosition(proj, view, vpos);`),m.stippleEnabled&&(v.code.add(p`vec4 vpos2 = transformPosition(proj, view, auxpos1);
vec2 ndcToPixel = viewport.zw * 0.5;
float lineSegmentPixelSize = length((vpos2.xy / vpos2.w - gl_Position.xy / gl_Position.w) * ndcToPixel);`),m.draped?v.uniforms.add(new d("worldToScreenRatio",((e,o)=>1/o.screenToPCSRatio))):v.code.add(p`vec3 segmentCenter = (position + auxpos1) * 0.5;
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),v.code.add(p`float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);`),m.draped?v.code.add(p`float startPseudoScreen = uv0.y * discreteWorldToScreenRatio - mix(0.0, lineSegmentPixelSize, uv0.x);
float segmentLengthPseudoScreen = lineSegmentPixelSize;`):v.code.add(p`float segmentLengthRender = length(position - auxpos1);
float startPseudoScreen = mix(uv0.y, uv0.y - segmentLengthRender, uv0.x) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),v.code.add(p`vec2 stippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, lineSegmentPixelSize, stipplePatternPixelSize);
vStippleDistance = mix(stippleDistanceLimits.x, stippleDistanceLimits.y, uv0.x);
vStippleDistance *= gl_Position.w;`)),v.code.add(p`}`),m.output===e.Highlight&&u.include(t),u.include(o,m),h.uniforms.add(new d("alphaCoverage",((e,o)=>Math.min(1,e.width*o.camera.pixelRatio)))),m.hasVertexColors||h.uniforms.add(new a("constantColor",(e=>e.color))),h.code.add(p`
  void main() {
    discardBySlice(vpos);

    vec4 color = ${m.hasVertexColors?"vColor":"constantColor"};

    float stippleAlpha = getStippleAlpha();
    discardByStippleAlpha(stippleAlpha, stippleAlphaColorDiscard);

    vec4 finalColor = blendStipple(vec4(color.rgb, color.a * alphaCoverage), stippleAlpha);

    if (finalColor.a < ${p.float(l)}) {
      discard;
    }

    ${m.output===e.Color?p`gl_FragColor = highlightSlice(finalColor, vpos);`:""}
    ${m.output===e.Highlight?p`outputHighlight();`:""}
  }
  `),u}const u=Object.freeze(Object.defineProperty({__proto__:null,build:m},Symbol.toStringTag,{value:"Module"}));export{u as N,m as b};
