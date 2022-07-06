/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isSome as e}from"../core/maybe.js";import{a as i}from"./vec2.js";import{a as o}from"./vec2f64.js";import{Z as r}from"./vec4f64.js";import{SliceDraw as t}from"../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js";import{AlignPixel as a}from"../views/3d/webgl-engine/core/shaderLibrary/hud/AlignPixel.glsl.js";import{HUD as l}from"../views/3d/webgl-engine/core/shaderLibrary/hud/HUD.glsl.js";import{multipassGeometryTest as n}from"../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassGeometryTest.glsl.js";import{addScreenSizePerspectiveAlignment as s}from"../views/3d/webgl-engine/core/shaderLibrary/util/ScreenSizePerspective.glsl.js";import{Float2PassUniform as d}from"../views/3d/webgl-engine/core/shaderModules/Float2PassUniform.js";import{Float4PassUniform as c}from"../views/3d/webgl-engine/core/shaderModules/Float4PassUniform.js";import{FloatPassUniform as f}from"../views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js";import{glsl as p}from"../views/3d/webgl-engine/core/shaderModules/interfaces.js";import{ShaderBuilder as g}from"../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js";import{VertexAttribute as h}from"../views/3d/webgl-engine/lib/VertexAttribute.js";function S(o){const r=new g;r.include(a),r.include(l,o),r.include(t,o),r.attributes.add(h.UV0,"vec2");const{vertex:S,fragment:u}=r;return S.uniforms.add([new c("viewport",((e,i)=>i.camera.fullViewport)),new f("lineSize",((e,i)=>Math.ceil(e.size)*i.camera.pixelRatio)),new d("pixelToNDC",((e,o)=>i(m,2/o.camera.fullViewport[2],2/o.camera.fullViewport[3]))),new f("borderSize",((i,o)=>e(i.borderColor)?o.camera.pixelRatio:0)),new d("screenOffset",((e,o)=>i(m,e.screenOffset[0]*o.camera.pixelRatio,e.screenOffset[1]*o.camera.pixelRatio)))]),r.varyings.add("coverageSampling","vec4"),r.varyings.add("lineSizes","vec2"),o.hasMultipassGeometry&&r.varyings.add("depth","float"),o.hasScreenSizePerspective&&s(S),S.code.add(p`
    void main(void) {
      ProjectHUDAux projectAux;
      vec4 endPoint = projectPositionHUD(projectAux);

      vec3 vpos = projectAux.posModel;
      if (rejectBySlice(vpos)) {
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      }
    ${o.occlusionTestEnabled?p`
      if (!testVisibilityHUD(endPoint)) {
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      }`:""}

    ${o.hasScreenSizePerspective?p`
      vec4 perspectiveFactor = screenSizePerspectiveScaleFactor(projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
      vec2 screenOffsetScaled = applyScreenSizePerspectiveScaleFactorVec2(screenOffset, perspectiveFactor);
        `:p`
      vec2 screenOffsetScaled = screenOffset;
        `}
      // Add view dependent polygon offset to get exact same original starting point. This is mostly
      // used to get the correct depth value
      vec3 posView = (view * vec4(position, 1.0)).xyz;
      ${o.hasMultipassGeometry?"depth = posView.z;":""}

      applyHUDViewDependentPolygonOffset(auxpos1.w, projectAux.absCosAngle, posView);
      vec4 startPoint = proj * vec4(posView, 1.0);
      // Apply screen offset to both start and end point
      vec2 screenOffsetNorm = screenOffsetScaled * 2.0 / viewport.zw;
      startPoint.xy += screenOffsetNorm * startPoint.w;
      endPoint.xy += screenOffsetNorm * endPoint.w;
      // Align start and end to pixel origin
      vec4 startAligned = alignToPixelOrigin(startPoint, viewport.zw);
      vec4 endAligned = alignToPixelOrigin(endPoint, viewport.zw);
    ${o.depthHudEnabled?o.depthHudAlignStartEnabled?p`endAligned = vec4(endAligned.xy / endAligned.w * startAligned.w, startAligned.zw);`:p`startAligned = vec4(startAligned.xy / startAligned.w * endAligned.w, endAligned.zw);`:""}
      vec4 projectedPosition = mix(startAligned, endAligned, uv0.y);
      // The direction of the line in screen space
      vec2 screenSpaceDirection = normalize(endAligned.xy / endAligned.w - startAligned.xy / startAligned.w);
      vec2 perpendicularScreenSpaceDirection = vec2(screenSpaceDirection.y, -screenSpaceDirection.x);
    ${o.hasScreenSizePerspective?p`
      float lineSizeScaled = applyScreenSizePerspectiveScaleFactorFloat(lineSize, perspectiveFactor);
      float borderSizeScaled = applyScreenSizePerspectiveScaleFactorFloat(borderSize, perspectiveFactor);
        `:p`
      float lineSizeScaled = lineSize;
      float borderSizeScaled = borderSize;
        `}
      float halfPixelSize = lineSizeScaled * 0.5;
      // Calculate a pixel offset from the edge of the pixel, s.t. we keep the line aligned
      // to pixels if it has a full pixel size. Since pixel aligned biases to the bottom-left,
      // we bias the size to the right (for odd sizes) to balance out the bias. Grow sub-pixel
      // sizes towards the left or right s.t. there is a smooth transition (e.g. from 2 to 3 px).
      float halfWholePixelSize = floor(lineSizeScaled) * 0.5;
      float halfPixelSizeInt = floor(halfWholePixelSize);

      // Sub-pixel offset if we need to grow sub-pixels to the left
      float subpixelOffset = -fract(lineSizeScaled) * float(halfWholePixelSize > 0.0);

      // Pixel offset aligning to whole pixels and adding subpixel offset if needed
      float pixelOffset = -halfPixelSizeInt + subpixelOffset;

      // Compute full ndc offset, adding 1px padding for doing anti-aliasing and the border size
      float padding = 1.0 + borderSizeScaled;
      vec2 ndcOffset = (pixelOffset - padding + uv0.x * (lineSizeScaled + padding + padding)) * pixelToNDC;

      // Offset x/y from the center of the line in screen space
      projectedPosition.xy += perpendicularScreenSpaceDirection * ndcOffset * projectedPosition.w;

      // Compute a coverage varying which we can use in the fragment shader to determine
      // how much a pixel is actually covered by the line (i.e. to anti alias the line).
      // This works by computing two coordinates that can be linearly interpolated and then
      // subtracted to find out how far away from the line edge we are.
      float edgeDirection = (uv0.x * 2.0 - 1.0);

      float halfBorderSize = 0.5 * borderSizeScaled;
      float halfPixelSizeAndBorder = halfPixelSize + halfBorderSize;
      float outerEdgeCoverageSampler = edgeDirection * (halfPixelSizeAndBorder + halfBorderSize + 1.0);

      float isOneSided = float(lineSizeScaled < 2.0 && borderSize < 2.0);

      coverageSampling = vec4(
        // Edge coordinate
        outerEdgeCoverageSampler,

        // Border edge coordinate
        outerEdgeCoverageSampler - halfPixelSizeAndBorder * isOneSided,

        // Line offset
        halfPixelSize - 0.5,

        // Border offset
        halfBorderSize - 0.5 + halfPixelSizeAndBorder * (1.0 - isOneSided)
      );

      lineSizes = vec2(lineSizeScaled, borderSizeScaled);

      gl_Position = projectedPosition;
    }
  `),u.uniforms.add([new c("uColor",(e=>v(e.color))),new c("borderColor",(e=>v(e.borderColor)))]),o.hasMultipassGeometry&&(u.include(n,o),u.uniforms.add(new d("inverseViewport",((e,i)=>i.inverseViewport)))),u.code.add(p`
    void main() {
      ${o.hasMultipassGeometry?"if( geometryDepthTest(gl_FragCoord.xy * inverseViewport, depth) ){ discard; }":""}

      // Mix between line and border coverage offsets depending on whether we need
      // a border (based on the sidedness).
      vec2 coverage = min(1.0 - clamp(abs(coverageSampling.xy) - coverageSampling.zw, 0.0, 1.0), lineSizes);

      // Mix between border and line color based on the line coverage (conceptually the line
      // blends on top of the border background).
      //
      // Anti-alias by blending final result using the full (including optional border) coverage
      // and the color alpha
      float borderAlpha = uColor.a * borderColor.a * coverage.y;
      float colorAlpha = uColor.a * coverage.x;

      float finalAlpha = mix(borderAlpha, 1.0, colorAlpha);

    ${o.depthHudEnabled?p`
      if (finalAlpha < 0.01) {
        discard;
      }
      `:p`
      vec3 finalRgb = mix(borderColor.rgb * borderAlpha, uColor.rgb, colorAlpha);
      gl_FragColor = vec4(finalRgb, finalAlpha);
      `}
  }
  `),r}function v(i){return e(i)?i:r}const m=o(),u=Object.freeze(Object.defineProperty({__proto__:null,build:S},Symbol.toStringTag,{value:"Module"}));export{u as L,S as b};
