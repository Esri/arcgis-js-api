/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isSome as e}from"../core/maybe.js";import{a as o,c as i}from"./vec2.js";import{O as r,a as l}from"./vec2f64.js";import{Z as t}from"./vec4f64.js";import{DEFAULT_TEX_SIZE as a}from"../views/3d/layers/graphics/sdfPrimitives.js";import{ShaderOutput as s}from"../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions.js";import{SliceDraw as n}from"../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js";import{AlignPixel as c}from"../views/3d/webgl-engine/core/shaderLibrary/hud/AlignPixel.glsl.js";import{HUD as d}from"../views/3d/webgl-engine/core/shaderLibrary/hud/HUD.glsl.js";import{HUDOcclusionPass as u}from"../views/3d/webgl-engine/core/shaderLibrary/hud/HUDOcclusionPass.glsl.js";import{OutputHighlight as p}from"../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl.js";import{VisualVariables as v}from"../views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl.js";import{symbolAlphaCutoff as g,defaultMaskAlphaCutoff as f}from"../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff.js";import{ColorConversion as m}from"../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl.js";import{RgbaFloatEncoding as b}from"../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl.js";import{ScreenSizePerspective as h,addScreenSizePerspective as w,addScreenSizePerspectiveAlignment as x}from"../views/3d/webgl-engine/core/shaderLibrary/util/ScreenSizePerspective.glsl.js";import{Float2PassUniform as C}from"../views/3d/webgl-engine/core/shaderModules/Float2PassUniform.js";import{Float4PassUniform as P}from"../views/3d/webgl-engine/core/shaderModules/Float4PassUniform.js";import{Float4sPassUniform as S}from"../views/3d/webgl-engine/core/shaderModules/Float4sPassUniform.js";import{FloatPassUniform as j}from"../views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js";import{FloatsPassUniform as z}from"../views/3d/webgl-engine/core/shaderModules/FloatsPassUniform.js";import{glsl as y}from"../views/3d/webgl-engine/core/shaderModules/interfaces.js";import{ShaderBuilder as F}from"../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js";import{Texture2DPassUniform as O}from"../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js";import{TransparencyPassType as A}from"../views/3d/webgl-engine/lib/basicInterfaces.js";import{VertexAttribute as $}from"../views/3d/webgl-engine/lib/VertexAttribute.js";import{vvColorNumber as D}from"../views/3d/webgl-engine/materials/VisualVariablePassParameters.js";function B(i){const l=new F,B=i.signedDistanceFieldEnabled;if(l.include(c),l.include(d,i),l.include(n,i),i.output===s.Occlusion)return l.include(u,i),l;const{vertex:H,fragment:V}=l;l.include(h),V.include(b),V.include(m),l.include(v,i),l.varyings.add("vcolor","vec4"),l.varyings.add("vtc","vec2"),l.varyings.add("vsize","vec2"),i.binaryHighlightOcclusionEnabled&&l.varyings.add("voccluded","float"),H.uniforms.add([new P("viewport",((e,o)=>o.camera.fullViewport)),new C("screenOffset",((e,i)=>o(U,2*e.screenOffset[0]*i.camera.pixelRatio,2*e.screenOffset[1]*i.camera.pixelRatio))),new C("anchorPosition",(e=>L(e))),new P("materialColor",(e=>e.color)),new j("pixelRatio",((e,o)=>o.camera.pixelRatio))]),B&&(H.uniforms.add(new P("outlineColor",(e=>e.outlineColor))),V.uniforms.add([new P("outlineColor",(e=>_(e)?e.outlineColor:t)),new j("outlineSize",(e=>_(e)?e.outlineSize:0))])),i.hasScreenSizePerspective&&(w(H),x(H)),(i.debugDrawLabelBorder||i.binaryHighlightOcclusionEnabled)&&l.varyings.add("debugBorderCoords","vec4"),l.attributes.add($.UV0,"vec2"),l.attributes.add($.COLOR,"vec4"),l.attributes.add($.SIZE,"vec2"),l.attributes.add($.AUXPOS2,"vec4"),H.code.add(y`
    void main(void) {
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);

      if (rejectBySlice(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }
      vec2 inputSize;
      ${i.hasScreenSizePerspective?y`
      inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
      vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
         `:y`
      inputSize = size;
      vec2 screenOffsetScaled = screenOffset;`}

      ${i.vvSize?"inputSize *= vvScale(auxpos2).xx;":""}

      vec2 combinedSize = inputSize * pixelRatio;
      vec4 quadOffset = vec4(0.0);

      ${i.occlusionTestEnabled||i.binaryHighlightOcclusionEnabled?"bool visible = testVisibilityHUD(posProj);":""}

      ${i.binaryHighlightOcclusionEnabled?"voccluded = visible ? 0.0 : 1.0;":""}
    `);const E=y`vec2 uv01 = floor(uv0);
vec2 uv = uv0 - uv01;
quadOffset.xy = ((uv01 - anchorPosition) * 2.0 * combinedSize + screenOffsetScaled) / viewport.zw * posProj.w;`,T=i.pixelSnappingEnabled?B?y`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:y`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:y`posProj += quadOffset;`;i.vvColor&&H.uniforms.add([new S("vvColorColors",(e=>e.vvColorColors),D),new z("vvColorValues",(e=>e.vvColorValues),D)]),H.uniforms.add(new C("textureCoordinateScaleFactor",(o=>e(o.texture)&&e(o.texture.descriptor.textureCoordinateScaleFactor)?o.texture.descriptor.textureCoordinateScaleFactor:r))),H.code.add(y`
    ${i.occlusionTestEnabled?"if (visible) {":""}
    ${E}
    ${i.vvColor?"vcolor = vvGetColor(auxpos2, vvColorValues, vvColorColors) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

    bool alphaDiscard = vcolor.a < ${y.float(g)};
    ${B?`alphaDiscard = alphaDiscard && outlineColor.a < ${y.float(g)};`:""}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${T}
      gl_Position = posProj;
    }

    vtc = uv * textureCoordinateScaleFactor;

    ${i.debugDrawLabelBorder?"debugBorderCoords = vec4(uv01, 1.5 / combinedSize);":""}
    vsize = inputSize;
    ${i.occlusionTestEnabled?y`} else { vtc = vec2(0.0);
      ${i.debugDrawLabelBorder?"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);}":"}"}`:""}
  }
  `),V.uniforms.add(new O("tex",(e=>e.texture)));const M=i.debugDrawLabelBorder?y`(isBorder > 0.0 ? 0.0 : ${y.float(f)})`:y.float(f),R=y`
    ${i.debugDrawLabelBorder?y`
      float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`:""}

    ${B?y`
      vec4 fillPixelColor = vcolor;

      // Attempt to sample texel centers to avoid that thin cross outlines
      // disappear with large symbol sizes.
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/7058#issuecomment-603041
      const float txSize = ${y.float(a)};
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
          outlineAlphaFactor + fillAlphaFactor < ${M} ||
          fillPixelColor.a + outlinePixelColor.a < ${y.float(g)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        gl_FragColor = vec4(compositeColor, compositeAlpha);
      } else {
        if (fillAlphaFactor < ${M}) {
          discard;
        }

        gl_FragColor = premultiplyAlpha(fillPixelColor);
      }

      // visualize SDF:
      // gl_FragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:y`
          vec4 texColor = texture2D(tex, vtc, -0.5);
          if (texColor.a < ${M}) {
            discard;
          }
          gl_FragColor = texColor * premultiplyAlpha(vcolor);
          `}

    // Draw debug border with transparency, so that original texels along border are still partially visible
    ${i.debugDrawLabelBorder?y`gl_FragColor = mix(gl_FragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`:""}
  `;return i.output===s.Alpha&&V.code.add(y`
      void main() {
        ${R}
        gl_FragColor = vec4(gl_FragColor.a);
      }
      `),i.output===s.Color&&V.code.add(y`
    void main() {
      ${R}
      ${i.transparencyPassType===A.FrontFace?"gl_FragColor.rgb /= gl_FragColor.a;":""}
    }
    `),i.output===s.Highlight&&(l.include(p),V.code.add(y`
    void main() {
      ${R}
      ${i.binaryHighlightOcclusionEnabled?y`
          if (voccluded == 1.0) {
            gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
          } else {
            gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
          }`:"outputHighlight();"}
    }
    `)),l}function _(e){return e.outlineColor[3]>0&&e.outlineSize>0}function L(e,o=U){return e.textureIsSignedDistanceField?H(e.anchorPosition,e.distanceFieldBoundingBox,o):i(o,e.anchorPosition),o}function H(i,r,l){e(r)?o(l,i[0]*(r[2]-r[0])+r[0],i[1]*(r[3]-r[1])+r[1]):o(l,0,0)}const U=l(),V=Object.freeze(Object.defineProperty({__proto__:null,build:B,calculateAnchorPosForRendering:L},Symbol.toStringTag,{value:"Module"}));export{V as H,B as b,L as c};
