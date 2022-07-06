/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{a as e}from"./vec2.js";import{a as i}from"./vec2f64.js";import{SliceDraw as o}from"../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js";import{multipassTerrainTest as s}from"../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl.js";import{Float2PassUniform as n}from"../views/3d/webgl-engine/core/shaderModules/Float2PassUniform.js";import{Float4PassUniform as t}from"../views/3d/webgl-engine/core/shaderModules/Float4PassUniform.js";import{FloatPassUniform as d}from"../views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js";import{glsl as a}from"../views/3d/webgl-engine/core/shaderModules/interfaces.js";import{Matrix4Uniform as l}from"../views/3d/webgl-engine/core/shaderModules/Matrix4Uniform.js";import{ShaderBuilder as r}from"../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js";import{VertexAttribute as c}from"../views/3d/webgl-engine/lib/VertexAttribute.js";import{AdjustProjectedPosition as p}from"../views/3d/webgl-engine/shaders/sources/edgeRenderer/AdjustProjectedPosition.glsl.js";import{DiscardByCoverage as P}from"../views/3d/webgl-engine/shaders/sources/edgeRenderer/DiscardByCoverage.glsl.js";import{DiscardNonSilhouetteEdges as u}from"../views/3d/webgl-engine/shaders/sources/edgeRenderer/DiscardNonSilhouetteEdges.glsl.js";import{DiscardShortEdges as g}from"../views/3d/webgl-engine/shaders/sources/edgeRenderer/DiscardShortEdges.glsl.js";import{EdgeUtil as v}from"../views/3d/webgl-engine/shaders/sources/edgeRenderer/EdgeUtil.glsl.js";import{LineAmplitude as f}from"../views/3d/webgl-engine/shaders/sources/edgeRenderer/LineAmplitude.glsl.js";import{LineOffset as m}from"../views/3d/webgl-engine/shaders/sources/edgeRenderer/LineOffset.glsl.js";import{UnpackAttributes as x}from"../views/3d/webgl-engine/shaders/sources/edgeRenderer/UnpackAttributes.glsl.js";function w(i){const w=new r,A=w.vertex,L=w.fragment;return i.legacy&&A.uniforms.add(new l("model")),i.antialiasing&&(A.code.add(a`#define ANTIALIASING 1`),L.code.add(a`#define ANTIALIASING 1`)),w.include(p,i),w.include(v,i),w.include(f,i),w.include(x,i),w.include(m,i),w.include(o,i),w.include(u,i),w.include(P,i),w.include(g,i),w.include(s,i),w.varyings.add("vColor","vec4"),w.varyings.add("vRadius","float"),w.varyings.add("vPosition","vec3"),w.varyings.add("vWorldPosition","vec3"),w.varyings.add("vViewPos","vec3"),w.varyings.add("vLineLengthPixels","float"),w.varyings.add("vSizeFalloffFactor","float"),A.uniforms.add(new n("pixelToNDC",((i,o)=>e(h,2/o.camera.fullViewport[2],2/o.camera.fullViewport[3])))),A.uniforms.add(new t("viewport",((e,i)=>i.camera.fullViewport))),A.uniforms.add(new d("pixelRatio",((e,i)=>i.camera.pixelRatio))),w.attributes.add(c.POSITION0,"vec3"),w.attributes.add(c.POSITION1,"vec3"),w.attributes.add(c.VARIANTOFFSET,"float"),w.attributes.add(c.VARIANTSTROKE,"float"),w.attributes.add(c.VARIANTEXTENSION,"float"),A.code.add(a`const float opaqueCutoff = 1.0 / 255.0;
void calculateGeometricOutputs(vec3 viewPosV0, vec3 viewPosV1, vec3 worldPosV0, vec3 worldPosV1, vec3 worldNormal, UnpackedAttributes unpackedAttributes) {
vec2 sideness = unpackedAttributes.sideness;
vec2 sidenessNorm = unpackedAttributes.sidenessNorm;
vWorldPosition = mix(worldPosV0, worldPosV1, sidenessNorm.y).xyz;
vec3 viewPos = mix(viewPosV0, viewPosV1, sidenessNorm.y);
vViewPos = viewPos;
vec4 projPosV0 = projFromViewPosition(viewPosV0);
vec4 projPosV1 = projFromViewPosition(viewPosV1);
vec4 projPos = projFromViewPosition(viewPos);
vec3 screenSpaceLineNDC = (projPosV1.xyz / projPosV1.w - projPosV0.xyz / projPosV0.w);
vec2 ndcToPixel = viewport.zw * 0.5;
vec2 screenSpaceLinePixels = screenSpaceLineNDC.xy * ndcToPixel;
float lineLengthPixels = length(screenSpaceLinePixels);
float dzPerPixel = screenSpaceLineNDC.z / lineLengthPixels;
vec2 screenSpaceDirection = screenSpaceLinePixels / lineLengthPixels;
vec2 perpendicularScreenSpaceDirection = vec2(screenSpaceDirection.y, -screenSpaceDirection.x) * sideness.x;
float falloffFactor = distanceBasedPerspectiveFactor(-viewPos.z) * pixelRatio;
float lineWidthPixels = unpackedAttributes.lineWidthPixels * falloffFactor;
float extensionLengthPixels = calculateExtensionLength(unpackedAttributes.extensionLengthPixels, lineLengthPixels) * falloffFactor;
float lineAmplitudePixels = calculateLineAmplitude(unpackedAttributes) * pixelRatio;
vSizeFalloffFactor = falloffFactor;
float lineWidthAndAmplitudePixels = lineWidthPixels + lineAmplitudePixels + lineAmplitudePixels;
float extendedLineLengthPixels = lineLengthPixels + extensionLengthPixels + extensionLengthPixels;
#ifdef ANTIALIASING
const float aaPaddingPixels = 1.0;
float halfAAPaddedLineWidthAndAmplitudePixels = lineWidthAndAmplitudePixels * 0.5 + aaPaddingPixels;
float aaPaddedRoundedCapSizePixels = lineWidthPixels * 0.5 + aaPaddingPixels;
#else
float halfAAPaddedLineWidthAndAmplitudePixels = max(lineWidthAndAmplitudePixels, 1.0) * 0.5;
float aaPaddedRoundedCapSizePixels = max(lineWidthPixels, 1.0) * 0.5;
#endif
vec2 halfAAPaddedLineWidthAndAmplitudeNDC = halfAAPaddedLineWidthAndAmplitudePixels * pixelToNDC;
vec2 aaPaddedRoundedCapSizeNDC = aaPaddedRoundedCapSizePixels * pixelToNDC;
vec2 extensionLengthNDC = extensionLengthPixels * pixelToNDC;
vec2 ndcOffset = (
screenSpaceDirection * sideness.y * (aaPaddedRoundedCapSizeNDC + extensionLengthNDC)
+ perpendicularScreenSpaceDirection * halfAAPaddedLineWidthAndAmplitudeNDC
);
projPos.xy += ndcOffset * projPos.w;
projPos.z += (dzPerPixel * (aaPaddedRoundedCapSizePixels + extensionLengthPixels)) * sideness.y * projPos.w;
projPos = adjustProjectedPosition(projPos, worldNormal, 1.0 + max((lineWidthAndAmplitudePixels - 1.0) * 0.5, 0.0));
float aaPaddedLineWithCapsLengthPixels = extendedLineLengthPixels + aaPaddedRoundedCapSizePixels + aaPaddedRoundedCapSizePixels;
float pixelPositionAlongLine = aaPaddedLineWithCapsLengthPixels * sidenessNorm.y - aaPaddedRoundedCapSizePixels;
vPosition = vec3(
halfAAPaddedLineWidthAndAmplitudePixels * sideness.x,
pixelPositionAlongLine,
pixelPositionAlongLine / extendedLineLengthPixels
);
vRadius = lineWidthPixels * 0.5;
vLineLengthPixels = extendedLineLengthPixels;
discardShortEdges(unpackedAttributes, lineLengthPixels);
gl_Position = projPos;
}
void main() {
ComponentData component = readComponentData();
UnpackedAttributes unpackedAttributes = unpackAttributes(component);
vec3 worldPosV0, worldPosV1, viewPosV0, viewPosV1;
worldAndViewFromModelPosition(position0, component.verticalOffset, worldPosV0, viewPosV0);
worldAndViewFromModelPosition(position1, component.verticalOffset, worldPosV1, viewPosV1);
vColor = component.color;
if (vColor.a < opaqueCutoff) {
gl_Position = vec4(10.0, 10.0, 10.0, 1.0);
return;
}
if (discardNonSilhouetteEdges(viewPosV0, worldPosV0)) {
return;
}
calculateGeometricOutputs(viewPosV0, viewPosV1, worldPosV0, worldPosV1, worldNormal(), unpackedAttributes);
calculateStyleOutputs(unpackedAttributes);
}`),w.fragment.code.add(a`
    vec2 lineWithCapsDistance(float radius, vec2 position, float lineLength) {
      float lineOffset = calculateLineOffset();
      float positionX = position.x - lineOffset;

      if (radius < 1.0) {
        // Handle this specifically for subpixel sizes:
        // 1. Compute correct coverage (note coverage is computed by
        //    0.5 - dist, so we make sure that that will lead to correct
        //    subpixel coverage
        // 2. Ignore rounded caps
        float coverageX = clamp(min(radius, positionX + 0.5) - max(-radius, positionX - 0.5), 0.0, 1.0);
        float coverageY = clamp(min(lineLength, position.y + 0.5) - max(0.0, position.y - 0.5), 0.0, 1.0);

        float coverage = min(coverageX, coverageY);

        return vec2(0.5 - coverage, 0.0);
      }
      else {
        // Between -radius -> 0 for start cap, 0 for line, 0 -> radius
        float positionOnCap = position.y - clamp(position.y, 0.0, lineLength);

        vec2 lineToPosition = vec2(positionX, positionOnCap);
        return vec2(length(lineToPosition) - radius, positionOnCap / radius);
      }
    }

    void main() {
      ${i.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, vViewPos.z);":""}
      float radius = vRadius * calculateLinePressure();

      vec2 distance = lineWithCapsDistance(radius, vPosition.xy, vLineLengthPixels);
      float coverage = clamp(0.5 - distance.x, 0.0, 1.0);

      discardByCoverage(radius, coverage);
      discardBySlice(vWorldPosition);

      float alpha = vColor.a * coverage;

      gl_FragColor = vec4(vColor.rgb, alpha);

    }
  `),w}const h=i(),A=Object.freeze(Object.defineProperty({__proto__:null,build:w},Symbol.toStringTag,{value:"Module"}));export{A as E,w as b};
