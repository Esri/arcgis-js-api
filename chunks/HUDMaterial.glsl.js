/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","./vec2f64","./vec4f64","./vec2","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl","../views/3d/webgl-engine/core/shaderLibrary/hud/AlignPixel.glsl","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/ScreenSizePerspective.glsl","../views/3d/webgl-engine/core/shaderLibrary/hud/HUD.glsl","../views/3d/webgl-engine/core/shaderLibrary/hud/HUDOcclusionPass.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl"],(function(e,o,l,i,r,t,a,s,n,c,d,u,g,v,f,p){"use strict";function b(e){const o=new t.ShaderBuilder,l=e.signedDistanceFieldEnabled;if(o.include(s.AlignPixel),o.include(d.HUD,e),o.include(n.Slice,e),6===e.output)return o.include(u.HUDOcclusionPass,e),o;o.include(c.ScreenSizePerspective),o.fragment.include(p.RgbaFloatEncoding),o.fragment.include(a.ColorConversion),o.include(v.VisualVariables,e),o.varyings.add("vcolor","vec4"),o.varyings.add("vtc","vec2"),o.varyings.add("vsize","vec2"),e.binaryHighlightOcclusionEnabled&&o.varyings.add("voccluded","float"),o.vertex.uniforms.add("screenOffset","vec2").add("anchorPos","vec2").add("textureCoordinateScaleFactor","vec2").add("materialColor","vec4"),l&&o.vertex.uniforms.add("outlineColor","vec4"),e.screenSizePerspectiveEnabled&&o.vertex.uniforms.add("screenSizePerspective","vec4"),(e.debugDrawBorder||e.binaryHighlightOcclusionEnabled)&&o.varyings.add("debugBorderCoords","vec4"),o.attributes.add("uv0","vec2"),o.attributes.add("color","vec4"),o.attributes.add("size","vec2"),o.attributes.add("auxpos2","vec4"),o.vertex.code.add(r.glsl`
    void main(void) {
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);

      if (rejectBySlice(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }
      vec2 inputSize;
      ${e.screenSizePerspectiveEnabled?r.glsl`
      inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
      vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
         `:r.glsl`
      inputSize = size;
      vec2 screenOffsetScaled = screenOffset;`}

      ${e.vvSize?"inputSize *= vvScale(auxpos2).xx;":""}

      vec2 combinedSize = inputSize * pixelRatio;
      vec4 quadOffset = vec4(0.0);

      ${e.occlusionTestEnabled||e.binaryHighlightOcclusionEnabled?"bool visible = testVisibilityHUD(posProj);":""}

      ${e.binaryHighlightOcclusionEnabled?"voccluded = visible ? 0.0 : 1.0;":""}
    `);const i=r.glsl`
      vec2 uv01 = floor(uv0);
      vec2 uv = uv0 - uv01;
      quadOffset.xy = ((uv01 - anchorPos) * 2.0 * combinedSize + screenOffsetScaled) / viewport.zw * posProj.w;
  `,b=e.pixelSnappingEnabled?l?r.glsl`
  posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:r.glsl`
  posProj += quadOffset;
  if (inputSize.x == size.x) {
    posProj = alignToPixelOrigin(posProj, viewport.zw);
  }`:r.glsl`posProj += quadOffset;`;o.vertex.code.add(r.glsl`
      ${e.occlusionTestEnabled?"if (visible) {":""}
      ${i}
      ${e.vvColor?"vcolor = vvGetColor(auxpos2, vvColorValues, vvColorColors) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

      bool alphaDiscard = vcolor.a < ${r.glsl.float(f.symbolAlphaCutoff)};
      ${l?`alphaDiscard = alphaDiscard && outlineColor.a < ${r.glsl.float(f.symbolAlphaCutoff)};`:""}
      if (alphaDiscard) {
        // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      } else {
        ${b}
        gl_Position = posProj;
      }

      vtc = uv * textureCoordinateScaleFactor;

      ${e.debugDrawBorder?"debugBorderCoords = vec4(uv01, 1.5 / combinedSize);":""}
      vsize = inputSize;
      ${e.occlusionTestEnabled?r.glsl`} else { vtc = vec2(0.0);
        ${e.debugDrawBorder?"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);}":"}"}`:""}
    }
    `),o.fragment.uniforms.add("tex","sampler2D"),l&&(o.fragment.uniforms.add("outlineColor","vec4"),o.fragment.uniforms.add("outlineSize","float"));const h=e.debugDrawBorder?r.glsl`(isBorder > 0.0 ? 0.0 : ${r.glsl.float(f.defaultMaskAlphaCutoff)})`:r.glsl.float(f.defaultMaskAlphaCutoff),C=r.glsl`
    ${e.debugDrawBorder?r.glsl`
      float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`:""}

    ${l?r.glsl`
      vec4 fillPixelColor = vcolor;

      // Attempt to sample texel centers to avoid that thin cross outlines
      // disappear with large symbol sizes.
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/7058#issuecomment-603041
      const float txSize = 128.0;
      const float texelSize = 1.0 / txSize;
      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      vec2 samplePos = vtc + (vec2(1.0, -1.0) * texelSize) * scaleFactor;

      // Get distance and map it into [-0.5, 0.5]
      float d = rgba2float(texture2D(tex, samplePos)) - 0.5;

      // Distance in output units (i.e. pixels)
      float dist = d * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - dist, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${h} ||
          fillPixelColor.a + outlinePixelColor.a < ${r.glsl.float(f.symbolAlphaCutoff)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        gl_FragColor = vec4(compositeColor, compositeAlpha);
      } else {
        if (fillAlphaFactor < ${h}) {
          discard;
        }

        gl_FragColor = premultiplyAlpha(fillPixelColor);
      }

      // visualize SDF:
      // gl_FragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:r.glsl`
          vec4 texColor = texture2D(tex, vtc, -0.5);
          if (texColor.a < ${h}) {
            discard;
          }
          gl_FragColor = texColor * premultiplyAlpha(vcolor);
          `}

    ${e.debugDrawBorder?r.glsl`gl_FragColor = mix(gl_FragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder);`:""}
  `;return 7===e.output&&o.fragment.code.add(r.glsl`
      void main() {
        ${C}
        gl_FragColor = vec4(gl_FragColor.a);
      }
      `),0===e.output&&o.fragment.code.add(r.glsl`
    void main() {
      ${C}
      ${e.FrontFacePass?"gl_FragColor.rgb /= gl_FragColor.a;":""}
    }
    `),4===e.output&&(o.include(g.OutputHighlight),o.fragment.code.add(r.glsl`
    void main() {
      ${C}
      ${e.binaryHighlightOcclusionEnabled?r.glsl`
          if (voccluded == 1.0) {
            gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
          } else {
            gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
          }`:"outputHighlight();"}
    }
    `)),o}function h(e,o=C){var l,r,t;return e.textureIsSignedDistanceField?(l=e.anchorPos,r=e.distanceFieldBoundingBox,(t=o)[0]=l[0]*(r[2]-r[0])+r[0],t[1]=l[1]*(r[3]-r[1])+r[1]):i.copy(o,e.anchorPos),o}(e.HUDMaterial||(e.HUDMaterial={})).bindUniforms=function(e,o,i){e.setUniform4fv("materialColor",o.color),o.textureIsSignedDistanceField&&(o.outlineColor[3]<=0||o.outlineSize<=0?(e.setUniform4fv("outlineColor",l.ZEROS),e.setUniform1f("outlineSize",0)):(e.setUniform4fv("outlineColor",o.outlineColor),e.setUniform1f("outlineSize",o.outlineSize))),e.setUniform2f("screenOffset",2*o.screenOffset[0]*i,2*o.screenOffset[1]*i),e.setUniform2fv("anchorPos",h(o))};const C=o.create();var m=Object.freeze({__proto__:null,build:b,get HUDMaterial(){return e.HUDMaterial},calculateAnchorPosForRendering:h});e.HUDMaterialShader=m,e.build=b,e.calculateAnchorPosForRendering=h}));
