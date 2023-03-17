/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../core/maybe","./vec2","./vec2f64","./vec4f64","../views/3d/support/engineContent/sdfPrimitives","../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/ObjectAndLayerIdColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/hud/AlignPixel.glsl","../views/3d/webgl-engine/core/shaderLibrary/hud/HUD.glsl","../views/3d/webgl-engine/core/shaderLibrary/hud/HUDOcclusionPass.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff","../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/ScreenSizePerspective.glsl","../views/3d/webgl-engine/core/shaderModules/Float2PassUniform","../views/3d/webgl-engine/core/shaderModules/Float4PassUniform","../views/3d/webgl-engine/core/shaderModules/Float4sPassUniform","../views/3d/webgl-engine/core/shaderModules/FloatPassUniform","../views/3d/webgl-engine/core/shaderModules/FloatsPassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform","../views/3d/webgl-engine/lib/TransparencyPassType","../views/3d/webgl-engine/lib/VertexAttribute","../views/3d/webgl-engine/materials/VisualVariablePassParameters"],(function(e,o,l,i,r,a,t,s,n,c,d,u,g,v,p,b,f,h,C,m,w,x,P,S,y,z,F,A,O){"use strict";function j(e){const j=new y.ShaderBuilder,U=e.signedDistanceFieldEnabled;if(j.include(c.AlignPixel),j.include(d.HUD,e),j.include(s.SliceDraw,e),e.occlusionPass)return j.include(u.HUDOcclusionPass,e),j;const{vertex:_,fragment:B}=j;j.include(h.ScreenSizePerspective),B.include(f.RgbaFloatEncoding),B.include(b.ColorConversion),j.include(v.VisualVariables,e),j.include(n.ObjectAndLayerIdColor,e),j.varyings.add("vcolor","vec4"),j.varyings.add("vtc","vec2"),j.varyings.add("vsize","vec2"),e.binaryHighlightOcclusionEnabled&&j.varyings.add("voccluded","float"),_.uniforms.add([new m.Float4PassUniform("viewport",((e,o)=>o.camera.fullViewport)),new C.Float2PassUniform("screenOffset",((e,o)=>l.set(L,2*e.screenOffset[0]*o.camera.pixelRatio,2*e.screenOffset[1]*o.camera.pixelRatio))),new C.Float2PassUniform("anchorPosition",(e=>$(e))),new m.Float4PassUniform("materialColor",(e=>e.color)),new x.FloatPassUniform("pixelRatio",((e,o)=>o.camera.pixelRatio))]),U&&(_.uniforms.add(new m.Float4PassUniform("outlineColor",(e=>e.outlineColor))),B.uniforms.add([new m.Float4PassUniform("outlineColor",(e=>D(e)?e.outlineColor:r.ZEROS)),new x.FloatPassUniform("outlineSize",(e=>D(e)?e.outlineSize:0))])),e.hasScreenSizePerspective&&(h.addScreenSizePerspective(_),h.addScreenSizePerspectiveAlignment(_)),(e.debugDrawLabelBorder||e.binaryHighlightOcclusionEnabled)&&j.varyings.add("debugBorderCoords","vec4"),j.attributes.add(A.VertexAttribute.UV0,"vec2"),j.attributes.add(A.VertexAttribute.COLOR,"vec4"),j.attributes.add(A.VertexAttribute.SIZE,"vec2"),j.attributes.add(A.VertexAttribute.AUXPOS2,"vec4"),_.code.add(S.glsl`
    void main(void) {
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      forwardObjectAndLayerIdColor();

      if (rejectBySlice(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }
      vec2 inputSize;
      ${e.hasScreenSizePerspective?S.glsl`
      inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
      vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
         `:S.glsl`
      inputSize = size;
      vec2 screenOffsetScaled = screenOffset;`}

      ${e.vvSize?"inputSize *= vvScale(auxpos2).xx;":""}

      vec2 combinedSize = inputSize * pixelRatio;
      vec4 quadOffset = vec4(0.0);

      ${e.occlusionTestEnabled||e.binaryHighlightOcclusionEnabled?"bool visible = testVisibilityHUD(posProj);":""}

      ${e.binaryHighlightOcclusionEnabled?"voccluded = visible ? 0.0 : 1.0;":""}
    `);const T=S.glsl`vec2 uv01 = floor(uv0);
vec2 uv = uv0 - uv01;
quadOffset.xy = ((uv01 - anchorPosition) * 2.0 * combinedSize + screenOffsetScaled) / viewport.zw * posProj.w;`,V=e.pixelSnappingEnabled?U?S.glsl`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:S.glsl`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:S.glsl`posProj += quadOffset;`;e.vvColor&&_.uniforms.add([new w.Float4sPassUniform("vvColorColors",(e=>e.vvColorColors),O.vvColorNumber),new P.FloatsPassUniform("vvColorValues",(e=>e.vvColorValues),O.vvColorNumber)]),_.uniforms.add(new C.Float2PassUniform("textureCoordinateScaleFactor",(e=>o.isSome(e.texture)&&o.isSome(e.texture.descriptor.textureCoordinateScaleFactor)?e.texture.descriptor.textureCoordinateScaleFactor:i.ONES))),_.code.add(S.glsl`
    ${e.occlusionTestEnabled?"if (visible) {":""}
    ${T}
    ${e.vvColor?"vcolor = vvGetColor(auxpos2, vvColorValues, vvColorColors) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

    ${e.output===t.ShaderOutput.ObjectAndLayerIdColor?S.glsl`vcolor.a = 1.0;`:""}

    bool alphaDiscard = vcolor.a < ${S.glsl.float(p.symbolAlphaCutoff)};
    ${U?`alphaDiscard = alphaDiscard && outlineColor.a < ${S.glsl.float(p.symbolAlphaCutoff)};`:""}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${V}
      gl_Position = posProj;
    }

    vtc = uv * textureCoordinateScaleFactor;

    ${e.debugDrawLabelBorder?"debugBorderCoords = vec4(uv01, 1.5 / combinedSize);":""}
    vsize = inputSize;
    ${e.occlusionTestEnabled?S.glsl`} else { vtc = vec2(0.0);
      ${e.debugDrawLabelBorder?"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);}":"}"}`:""}
  }
  `),B.uniforms.add(new z.Texture2DPassUniform("tex",(e=>e.texture)));const E=e.debugDrawLabelBorder?S.glsl`(isBorder > 0.0 ? 0.0 : ${S.glsl.float(p.defaultMaskAlphaCutoff)})`:S.glsl.float(p.defaultMaskAlphaCutoff),H=S.glsl`
    ${e.debugDrawLabelBorder?S.glsl`
      float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`:""}

    ${U?S.glsl`
      vec4 fillPixelColor = vcolor;

      // Attempt to sample texel centers to avoid that thin cross outlines
      // disappear with large symbol sizes.
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/7058#issuecomment-603041
      const float txSize = ${S.glsl.float(a.DEFAULT_TEX_SIZE)};
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
          outlineAlphaFactor + fillAlphaFactor < ${E} ||
          fillPixelColor.a + outlinePixelColor.a < ${S.glsl.float(p.symbolAlphaCutoff)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        gl_FragColor = vec4(compositeColor, compositeAlpha);
      } else {
        if (fillAlphaFactor < ${E}) {
          discard;
        }

        gl_FragColor = premultiplyAlpha(fillPixelColor);
      }

      // visualize SDF:
      // gl_FragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:S.glsl`
          vec4 texColor = texture2D(tex, vtc, -0.5);
          if (texColor.a < ${E}) {
            discard;
          }
          gl_FragColor = texColor * premultiplyAlpha(vcolor);
          `}

    // Draw debug border with transparency, so that original texels along border are still partially visible
    ${e.debugDrawLabelBorder?S.glsl`gl_FragColor = mix(gl_FragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`:""}
  `;return e.output===t.ShaderOutput.Alpha&&B.code.add(S.glsl`
      void main() {
        ${H}
        gl_FragColor = vec4(gl_FragColor.a);
      }
      `),e.output===t.ShaderOutput.ObjectAndLayerIdColor&&B.code.add(S.glsl`
      void main() {
        ${H}
        outputObjectAndLayerIdColor();
      }
      `),e.output===t.ShaderOutput.Color&&B.code.add(S.glsl`
    void main() {
      ${H}
      ${e.transparencyPassType===F.TransparencyPassType.FrontFace?"gl_FragColor.rgb /= gl_FragColor.a;":""}
    }
    `),e.output===t.ShaderOutput.Highlight&&(j.include(g.OutputHighlight,e),B.code.add(S.glsl`
    void main() {
      ${H}
      ${e.binaryHighlightOcclusionEnabled?S.glsl`
          if (voccluded == 1.0) {
            gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
          } else {
            gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
          }`:"outputHighlight();"}
    }
    `)),j}function D(e){return e.outlineColor[3]>0&&e.outlineSize>0}function $(e,o=L){return e.textureIsSignedDistanceField?U(e.anchorPosition,e.distanceFieldBoundingBox,o):l.copy(o,e.anchorPosition),o}function U(e,i,r){o.isSome(i)?l.set(r,e[0]*(i[2]-i[0])+i[0],e[1]*(i[3]-i[1])+i[1]):l.set(r,0,0)}const L=i.create(),_=Object.freeze(Object.defineProperty({__proto__:null,build:j,calculateAnchorPosForRendering:$},Symbol.toStringTag,{value:"Module"}));e.HUDMaterial=_,e.build=j,e.calculateAnchorPosForRendering=$}));
