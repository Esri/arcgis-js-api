/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../geometry/support/Ellipsoid","../views/3d/terrain/interfaces","../views/3d/webgl-engine/collections/Component/Material/ComponentTechniqueConfiguration","../views/3d/webgl-engine/collections/Component/Material/shader/ComponentData.glsl","../views/3d/webgl-engine/collections/Component/Material/shader/VertexDiscardByOpacity.glsl","../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexPosition.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeMaterialColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeNormalTexture.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeShadingNormal.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ReadBaseColorTexture.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl","../views/3d/webgl-engine/core/shaderLibrary/terrain/Overlay.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/EllipsoidMode","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform","../views/3d/webgl-engine/lib/TransparencyPassType"],(function(e,r,o,a,l,t,i,d,n,s,g,c,u,v,h,m,p,C,w,b,y,x,M,T,S,f,O,L,N,P,A,R,B,D){"use strict";function W(e){const o=new R.ShaderBuilder;o.include(v.VertexPosition,e),o.include(u.VertexNormal,e),o.include(c.VertexColor,e),o.include(g.TextureCoordinateAttribute,e),o.include(i.ForwardLinearDepth,e),o.include(l.ComponentData,e),o.include(N.DiscardOrAdjustAlphaDraw,e),o.include(n.SlicePass,e),o.include(S.ReadBaseColorTexture,e),o.include(t.VertexDiscardByOpacity,e);const{vertex:W,fragment:$}=o;e.pbrMode!==T.PBRMode.Normal&&e.pbrMode!==T.PBRMode.Schematic||(o.include(T.PhysicallyBasedRenderingParameters,e),e.hasNormalTexture&&o.include(w.ComputeNormalTexture,e));const E=e.output===d.ShaderOutput.Shadow||e.output===d.ShaderOutput.ShadowHighlight||e.output===d.ShaderOutput.ShadowExludeHighlight;E&&e.componentData===l.ComponentDataType.Varying?W.code.add(A.glsl`#define discardShadows(castShadows) { if(!castShadows) { gl_Position = vec4(1e38, 1e38, 1e38, 1.0); return; } }`):W.code.add(A.glsl`#define discardShadows(castShadows) {}`);const j=e.integratedMeshMode===a.IntegratedMeshMode.ColorOverlay||e.integratedMeshMode===a.IntegratedMeshMode.ColorOverlayWithWater,z=j&&e.output===d.ShaderOutput.Color&&e.pbrMode===T.PBRMode.WaterOnIntegratedMesh;return j&&(o.include(y.EvaluateSceneLighting,e),o.include(O.OverlayIM,e),e.spherical?W.code.add(A.glsl`
      const float invEllipsoidRadius = ${A.glsl.float(1/(e.ellipsoidMode===P.EllipsoidMode.Earth?r.earth.radius:e.ellipsoidMode===P.EllipsoidMode.Mars?r.mars.radius:r.moon.radius))};
      vec2 projectOverlay(vec3 pos) {
        return pos.xy / (1.0 + invEllipsoidRadius * pos.z);
      }
      `):W.code.add(A.glsl`vec2 projectOverlay(vec3 pos) { return pos.xy; }`)),z&&(o.varyings.add("tbnTangent","vec3"),o.varyings.add("tbnBiTangent","vec3"),o.varyings.add("groundNormal","vec3")),W.code.add(A.glsl`
    void main() {
      bool castShadows;
      vec4 externalColor = forwardExternalColor(castShadows);
      discardShadows(castShadows);

      vertexDiscardByOpacity(externalColor.a);

      if (externalColor.a < ${A.glsl.float(L.symbolAlphaCutoff)}) {
        // Discard this vertex
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      }

      forwardPosition(readElevationOffset());
      forwardNormal();
      forwardTextureCoordinates();
      forwardVertexColor();
      forwardLinearDepth();
      ${e.output===d.ShaderOutput.ObjectAndLayerIdColor?A.glsl`forwardObjectAndLayerIdColor();`:""}
      ${z?e.spherical?A.glsl`
                groundNormal = normalize(positionWorld());
                tbnTangent = normalize(cross(vec3(0.0, 0.0, 1.0), groundNormal));
                tbnBiTangent = normalize(cross(groundNormal, tbnTangent));`:A.glsl`
                groundNormal = vec3(0.0, 0.0, 1.0);
                tbnTangent = vec3(1.0, 0.0, 0.0);
                tbnBiTangent = vec3(0.0, 1.0, 0.0);`:""}
      ${j?A.glsl`setOverlayVTC(projectOverlay(position));`:""}
    }
  `),e.output===d.ShaderOutput.Alpha&&($.include(p.ReadLinearDepth),o.include(M.multipassTerrainTest,e),o.include(C.ComputeMaterialColor,e),j&&$.uniforms.add(new B.Texture2DPassUniform("ovColorTex",((e,r)=>O.getColorTexture(e,r)))),$.code.add(A.glsl`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);
        ${e.hasMultipassTerrain?A.glsl`terrainDepthTest(gl_FragCoord, vPosition_view.z);`:""}

        vec4 textureColor = readBaseColorTexture();
        discardOrAdjustAlpha(textureColor);

        vec4 externalColor;
        int externalColorMixMode;
        readExternalColor(externalColor, externalColorMixMode);

        vec4 materialColor = computeMaterialColor(
          textureColor,
          externalColor,
          externalColorMixMode
        );
        ${j?A.glsl`
                vec4 overlayColor = getOverlayColor(ovColorTex, vtcOverlay);
                materialColor = materialColor * (1.0 - overlayColor.a) + overlayColor;`:""}

        gl_FragColor = vec4(materialColor.a);
      }
    `)),e.output===d.ShaderOutput.Color&&($.include(p.ReadLinearDepth),o.include(M.multipassTerrainTest,e),o.include(C.ComputeMaterialColor,e),o.include(b.ComputeShadingNormal,e),o.include(y.EvaluateSceneLighting,e),e.receiveShadows?(o.include(f.ReadShadowMapPass,e),$.code.add(A.glsl`float evaluateShadow() {
return readShadowMap(vPositionWorldCameraRelative, linearDepth);
}`)):$.code.add(A.glsl`float evaluateShadow() { return 0.0; }`),j&&$.uniforms.add(new B.Texture2DPassUniform("ovColorTex",((e,r)=>O.getColorTexture(e,r)))),$.code.add(A.glsl`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);
        ${e.hasMultipassTerrain?A.glsl`terrainDepthTest(gl_FragCoord, vPosition_view.z);`:""}

        vec4 textureColor = readBaseColorTexture();
        discardOrAdjustAlpha(textureColor);

        vec4 externalColor;
        int externalColorMixMode;
        readExternalColor(externalColor, externalColorMixMode);

        vec4 materialColor = computeMaterialColor(
          textureColor,
          externalColor,
          externalColorMixMode
        );
        ${j?A.glsl`vec4 overlayColor = getOverlayColor(ovColorTex, vtcOverlay);`:""}
    `),e.pbrMode===T.PBRMode.Normal||e.pbrMode===T.PBRMode.Schematic?(x.addMainLightIntensity($),$.code.add(A.glsl`
        ${e.pbrMode===T.PBRMode.Normal?A.glsl`
                applyPBRFactors();
                if (int(externalColorMixMode) == 3) {
                  mrr = vec3(0.0, 0.6, 0.2);
                }`:""}
        vec3 normalVertex = shadingNormalWorld();
        float additionalIrradiance = 0.02 * mainLightIntensity[2];
      `),e.hasNormalTexture?$.code.add(A.glsl`mat3 tangentSpace = computeTangentSpace(normalVertex, vPositionWorldCameraRelative, vuv0);
vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);`):$.code.add(A.glsl`vec3 shadingNormal = normalVertex;`),$.code.add(A.glsl`${e.spherical?A.glsl`vec3 normalGround = normalize(positionWorld());`:A.glsl`vec3 normalGround = vec3(0.0, 0.0, 1.0);`}
      `),$.code.add(A.glsl`
        vec3 viewDir = normalize(vPositionWorldCameraRelative);
        float ssao = 1.0 - occlusion * (1.0 - evaluateAmbientOcclusion());

        ${e.snowCover?A.glsl`
                vec3 surfaceNormal = normalize(shadingNormalWorld());
                float snow = smoothstep(0.5, 0.55, dot(surfaceNormal, normalize(positionWorld())));
                materialColor.rgb = mix(materialColor.rgb, vec3(1), snow);

                shadingNormal = mix(shadingNormal, surfaceNormal, snow);
                ssao = mix(ssao, 0.0, snow);
                mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                emission = mix(emission, vec3(0.0), snow);`:""}

        ${j?A.glsl` materialColor = materialColor * (1.0 - overlayColor.a) + overlayColor;`:""}

        vec3 additionalLight = evaluateAdditionalLighting(ssao, positionWorld());
        vec4 shadedColor = vec4(evaluateSceneLightingPBR(shadingNormal, materialColor.rgb, evaluateShadow(), ssao, additionalLight, viewDir, normalGround, mrr, emission, additionalIrradiance), materialColor.a);
        `)):(e.receiveShadows?$.code.add(A.glsl`float shadow = evaluateShadow();`):e.spherical?(y.addLightingGlobalFactor($),$.code.add(A.glsl`float additionalAmbientScale = additionalDirectedAmbientLight(positionWorld());
float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);`)):$.code.add(A.glsl`float shadow = 0.0;`),z&&$.uniforms.add(new B.Texture2DPassUniform("ovNormalTex",((e,r)=>_(r)))),e.snowCover&&(o.extensions.add("GL_OES_standard_derivatives"),$.code.add(A.glsl`vec3 surfaceNormal = normalize(cross(dFdx(vPositionWorldCameraRelative), dFdy(vPositionWorldCameraRelative)));
float snow = smoothstep(0.5, 0.55, dot(surfaceNormal, normalize(positionWorld())));
materialColor.rgb = mix(materialColor.rgb, vec3(1), snow);`)),$.code.add(A.glsl`
        float ambientOcclusion = evaluateAmbientOcclusion();
        vec3 additionalLight = evaluateAdditionalLighting(ambientOcclusion, positionWorld());

        ${j?A.glsl` materialColor = materialColor * (1.0 - overlayColor.a) + overlayColor;`:""}

        vec4 shadedColor = vec4(evaluateSceneLighting(shadingNormalWorld(), materialColor.rgb, shadow, ambientOcclusion, additionalLight), materialColor.a);
      ${z?A.glsl`
              vec4 overlayWaterMask = getOverlayColor(ovNormalTex, vtcOverlay);
              float waterNormalLength = length(overlayWaterMask);
              if (waterNormalLength > 0.95) {
                mat3 tbnMatrix = mat3(tbnTangent, tbnBiTangent, groundNormal);
                vec4 waterColorLinear = getOverlayWaterColor(overlayWaterMask, overlayColor, -normalize(vPositionWorldCameraRelative), shadow, groundNormal, tbnMatrix, vPosition_view, positionWorld());
                vec4 waterColorNonLinear = delinearizeGamma(vec4(waterColorLinear.xyz, 1.0));
                // un-gamma the ground color to mix in linear space
                shadedColor = mix(shadedColor, waterColorNonLinear, waterColorLinear.w);
              }`:""}
      `)),$.code.add(A.glsl`
        gl_FragColor = highlightSlice(shadedColor, vPositionWorldCameraRelative);
        ${e.transparencyPassType===D.TransparencyPassType.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),(e.output===d.ShaderOutput.Depth||E)&&(o.include(h.OutputDepth,e),$.code.add(A.glsl`void main() {
discardBySlice(vPositionWorldCameraRelative);
vec4 textureColor = readBaseColorTexture();
discardOrAdjustAlpha(textureColor);
outputDepth(linearDepth);
}`)),e.output===d.ShaderOutput.Normal&&(o.include(b.ComputeShadingNormal,e),$.code.add(A.glsl`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);

        vec4 textureColor = readBaseColorTexture();
        discardOrAdjustAlpha(textureColor);

        // note: the alpha component needs to be 1.0 in order for this material
        // to influence ambient occlusion, see the ssao fragment shader
        float alpha = ${e.normalType===s.NormalAttributeType.Ground?"0.0":"1.0"};
        gl_FragColor = vec4(vec3(.5) + .5 * shadingNormal_view(), alpha);
      }
    `)),e.output===d.ShaderOutput.ObjectAndLayerIdColor&&o.fragment.code.add(A.glsl`void main() {
discardBySlice(vPositionWorldCameraRelative);
vec4 textureColor = readBaseColorTexture();
discardOrAdjustAlpha(textureColor);
outputObjectAndLayerIdColor();
}`),e.output===d.ShaderOutput.Highlight&&(o.include(m.OutputHighlight,e),$.code.add(A.glsl`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);

        vec4 textureColor = readBaseColorTexture();
        discardOrAdjustAlpha(textureColor);

        ${j?A.glsl`
                vec4 overlayColor = getCombinedOverlayColor();
                if (overlayColor.a == 0.0) {
                  gl_FragColor = vec4(0.0);
                  return;
                }`:""}

        outputHighlight();
      }
    `)),o}function _(e){return 0===e.overlays.length?null:e.overlays[o.OverlayIndex.INNER].getValidTexture(o.RenderTargetType.Water)}const $=Object.freeze(Object.defineProperty({__proto__:null,build:W,getOverlayNormalTexture:_},Symbol.toStringTag,{value:"Module"}));e.ComponentShader=$,e.build=W,e.getOverlayNormalTexture=_}));
