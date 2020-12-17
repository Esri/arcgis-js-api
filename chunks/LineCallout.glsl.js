/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderLibrary/hud/AlignPixel.glsl","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/hud/HUD.glsl"],(function(e,i,o,l,r,t){"use strict";function n(e){const n=new o.ShaderBuilder;return n.include(l.AlignPixel),n.include(t.HUD,e),n.include(r.Slice,e),n.attributes.add("uv0","vec2"),n.vertex.uniforms.add("lineSize","float").add("pixelToNDC","vec2").add("borderSize","float").add("screenOffset","vec2"),n.varyings.add("coverageSampling","vec4"),n.varyings.add("lineSizes","vec2"),n.vertex.code.add(i.glsl`
    void main(void) {
      ProjectHUDAux projectAux;
      vec4 endPoint = projectPositionHUD(projectAux);

      vec3 vpos = projectAux.posModel;
      if (rejectBySlice(vpos)) {
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      }
    ${e.occlusionTestEnabled?i.glsl`
      if (!testVisibilityHUD(endPoint)) {
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      }`:""}

    ${e.screenSizePerspectiveEnabled?i.glsl`
      vec4 perspectiveFactor = screenSizePerspectiveScaleFactor(projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
      vec2 screenOffsetScaled = applyScreenSizePerspectiveScaleFactorVec2(screenOffset, perspectiveFactor);
        `:i.glsl`
      vec2 screenOffsetScaled = screenOffset;
        `}
      // Add view dependent polygon offset to get exact same original starting point. This is mostly
      // used to get the correct depth value
      vec3 posView = (view * vec4(position, 1.0)).xyz;
      applyHUDViewDependentPolygonOffset(auxpos1.w, projectAux.absCosAngle, posView);
      vec4 startPoint = proj * vec4(posView, 1.0);
      // Apply screen offset to both start and end point
      vec2 screenOffsetNorm = screenOffsetScaled * 2.0 / viewport.zw;
      startPoint.xy += screenOffsetNorm * startPoint.w;
      endPoint.xy += screenOffsetNorm * endPoint.w;
      // Align start and end to pixel origin
      vec4 startAligned = alignToPixelOrigin(startPoint, viewport.zw);
      vec4 endAligned = alignToPixelOrigin(endPoint, viewport.zw);
    ${e.depthHudEnabled?e.depthHudAlignStartEnabled?i.glsl`endAligned = vec4(endAligned.xy / endAligned.w * startAligned.w, startAligned.zw);`:i.glsl`startAligned = vec4(startAligned.xy / startAligned.w * endAligned.w, endAligned.zw);`:""}
      vec4 projectedPosition = mix(startAligned, endAligned, uv0.y);
      // The direction of the line in screen space
      vec2 screenSpaceDirection = normalize(endAligned.xy / endAligned.w - startAligned.xy / startAligned.w);
      vec2 perpendicularScreenSpaceDirection = vec2(screenSpaceDirection.y, -screenSpaceDirection.x);
    ${e.screenSizePerspectiveEnabled?i.glsl`
      float lineSizeScaled = applyScreenSizePerspectiveScaleFactorFloat(lineSize, perspectiveFactor);
      float borderSizeScaled = applyScreenSizePerspectiveScaleFactorFloat(borderSize, perspectiveFactor);
        `:i.glsl`
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
  `),n.fragment.uniforms.add("color","vec4"),n.fragment.uniforms.add("borderColor","vec4"),n.fragment.code.add(i.glsl`
    void main() {
      // Mix between line and border coverage offsets depending on whether we need
      // a border (based on the sidedness).
      vec2 coverage = min(1.0 - clamp(abs(coverageSampling.xy) - coverageSampling.zw, 0.0, 1.0), lineSizes);

      // Mix between border and line color based on the line coverage (conceptually the line
      // blends on top of the border background).
      //
      // Anti-alias by blending final result using the full (including optional border) coverage
      // and the color alpha
      float borderAlpha = color.a * borderColor.a * coverage.y;
      float colorAlpha = color.a * coverage.x;

      float finalAlpha = mix(borderAlpha, 1.0, colorAlpha);

    ${e.depthHudEnabled?i.glsl`
      if (finalAlpha < 0.01) {
        discard;
      }
      `:i.glsl`
      // Compute the finalRgb, but keep it pre-multiplied (for unpre-multiplied you
      // need to divide by finalAlpha). We avoid the division here by setting the
      // appropriate blending function in the material.
      vec3 finalRgb = mix(borderColor.rgb * borderAlpha, color.rgb, colorAlpha);
      gl_FragColor = vec4(finalRgb, finalAlpha);
      `}
  }
  `),n}function a(e,i,o){3===o.length?e.setUniform4f(i,o[0],o[1],o[2],1):e.setUniform4fv(i,o)}(e.LineCallout||(e.LineCallout={})).bindUniforms=function(e,i,o){a(e,"color",i.color),e.setUniform1f("pixelRatio",o),e.setUniform2f("screenOffset",i.screenOffset[0]*o,i.screenOffset[1]*o),null!==i.borderColor?(a(e,"borderColor",i.borderColor),e.setUniform1f("borderSize",o)):(e.setUniform4f("borderColor",0,0,0,0),e.setUniform1f("borderSize",0))};var d=Object.freeze({__proto__:null,build:n,get LineCallout(){return e.LineCallout}});e.LineCalloutShader=d,e.build=n}));
