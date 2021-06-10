/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../geometry/support/Ellipsoid","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl","../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexPosition.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeNormalTexture.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl","../views/3d/webgl-engine/core/shaderLibrary/terrain/Overlay.glsl","../views/3d/webgl-engine/collections/Component/Material/shader/ComponentData.glsl","../views/3d/webgl-engine/collections/Component/Material/shader/VertexDiscardByOpacity.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeMaterialColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeShadingNormal.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ReadBaseColorTexture.glsl"],(function(e,a,r,o,l,t,i,n,d,s,g,c,v,u,m,h,C,p,w,b,y,x,f,T,O){"use strict";const L={position:0,normal:1,normalCompressed:1,color:2,uv0:3,uvRegion:4,componentIndex:5};function M(e){const L=new o.ShaderBuilder;L.include(h.VertexPosition,e),L.include(C.VertexNormal,e),L.include(m.VertexColor,e),L.include(v.TextureCoordinateAttribute,e),L.include(c.ForwardLinearDepth,e),L.include(y.ComponentData,e),L.include(n.DiscardOrAdjustAlpha,e),L.include(l.Slice,e),L.include(O.ReadBaseColorTexture,e),L.include(x.VertexDiscardByOpacity,e),L.fragment.uniforms.add("view","mat4"),1!==e.pbrMode&&2!==e.pbrMode||(L.include(u.PhysicallyBasedRenderingParameters,e),L.include(p.ComputeNormalTexture,e)),3===e.output&&1===e.componentData?L.vertex.code.add(r.glsl`
      #define discardShadows(castShadows) { if(!castShadows) { gl_Position = vec4(1e38, 1e38, 1e38, 1.0); return; } }
    `):L.vertex.code.add(r.glsl`
      #define discardShadows(castShadows) {}
    `);const M=e.overlayEnabled&&0===e.output&&4===e.pbrMode;return e.overlayEnabled&&(L.include(b.Overlay,e),1===e.viewingMode?L.vertex.code.add(r.glsl`
      const float invEllipsoidRadius = ${r.glsl.float(1/(1===e.ellipsoidMode?a.earth.radius:2===e.ellipsoidMode?a.mars.radius:a.moon.radius))};
      vec2 projectOverlay(vec3 pos) {
        return pos.xy / (1.0 + invEllipsoidRadius * pos.z);
      }
      `):L.vertex.code.add(r.glsl`
      vec2 projectOverlay(vec3 pos) { return pos.xy; }
      `)),M&&(L.varyings.add("tbnTangent","vec3"),L.varyings.add("tbnBiTangent","vec3"),L.varyings.add("groundNormal","vec3"),L.varyings.add("positionView","vec3")),L.vertex.code.add(r.glsl`
    void main() {
      bool castShadows;
      vec4 externalColor = forwardExternalColor(castShadows);
      discardShadows(castShadows);

      vertexDiscardByOpacity(externalColor.a);

      if (externalColor.a < ${r.glsl.float(n.symbolAlphaCutoff)}) {
        // Discard this vertex
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      }
      forwardPosition();
      forwardNormal();
      ${M?r.glsl`
        positionView = position_view();
        ${1===e.viewingMode?r.glsl`
        groundNormal = normalize(positionWorld());
        tbnTangent = normalize(cross(vec3(0.0, 0.0, 1.0), groundNormal));
        tbnBiTangent = normalize(cross(groundNormal, tbnTangent));`:r.glsl`
        groundNormal = vec3(0.0, 0.0, 1.0);
        tbnTangent = vec3(1.0, 0.0, 0.0);
        tbnBiTangent = normalize(cross(groundNormal, tbnTangent));`}
        `:""}

      ${e.overlayEnabled?r.glsl`setOverlayVTC(projectOverlay(position));`:""}
      forwardTextureCoordinates();
      forwardVertexColor();
      forwardLinearDepth(); // depends on forwardPosition()
    }
  `),7===e.output&&(L.fragment.include(t.ReadLinearDepth),e.multipassTerrainEnabled&&L.include(d.multipassTerrainTest,e),L.include(f.ComputeMaterialColor,e),L.fragment.code.add(r.glsl`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);
        ${e.multipassTerrainEnabled?r.glsl`terrainDepthTest(gl_FragCoord, vPosition_view.z);`:""}

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
        ${e.overlayEnabled?r.glsl`
        vec4 overlayColorOpaque = getOverlayColor(ovInnerColorTex, ovOuterColorTex, vtcOverlay);
        vec4 overlayColor = overlayOpacity * overlayColorOpaque;
        materialColor = materialColor * (1.0 - overlayColor.a) + overlayColor;`:""}

        gl_FragColor = vec4(materialColor.a);
      }
    `)),0===e.output&&(L.fragment.include(t.ReadLinearDepth),e.multipassTerrainEnabled&&L.include(d.multipassTerrainTest,e),L.include(f.ComputeMaterialColor,e),L.include(T.ComputeShadingNormal,e),L.include(w.EvaluateSceneLighting,e),M&&(L.fragment.uniforms.add("ovInnerNormalTex","sampler2D"),L.fragment.uniforms.add("ovOuterNormalTex","sampler2D")),e.receiveShadows?(L.include(g.ReadShadowMap,e),L.fragment.code.add(r.glsl`
        float evaluateShadow() {
          return readShadowMap(vPositionWorldCameraRelative, linearDepth);
        }
      `)):L.fragment.code.add(r.glsl`
        float evaluateShadow() { return 0.0; }
      `),L.fragment.code.add(r.glsl`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);
        ${e.multipassTerrainEnabled?r.glsl`terrainDepthTest(gl_FragCoord, vPosition_view.z);`:""}

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
        ${e.overlayEnabled?r.glsl`
        vec4 overlayColorOpaque = getOverlayColor(ovInnerColorTex, ovOuterColorTex, vtcOverlay);
        vec4 overlayColor = overlayOpacity * overlayColorOpaque;
        materialColor = materialColor * (1.0 - overlayColor.a) + overlayColor;`:""}
    `),1===e.pbrMode||2===e.pbrMode?(L.fragment.code.add(r.glsl`
        ${1===e.pbrMode?r.glsl`
        applyPBRFactors();
        if (int(externalColorMixMode) == 3) {
          mrr = vec3(0.0, 0.6, 0.2);
        }`:""}
        vec3 normalVertex = shadingNormalWorld();
        float additionalIrradiance = 0.02 * lightingMainIntensity[2];
      `),e.hasNormalTexture?L.fragment.code.add(r.glsl`
        mat3 tangentSpace = computeTangentSpace(normalVertex, vPositionWorldCameraRelative, vuv0);
        vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);
        `):L.fragment.code.add(r.glsl`
        vec3 shadingNormal = normalVertex;
        `),L.fragment.code.add(r.glsl`${1===e.viewingMode?r.glsl`vec3 normalGround = normalize(positionWorld());`:r.glsl`vec3 normalGround = vec3(0.0, 0.0, 1.0);`}
      `),L.fragment.code.add(r.glsl`
        vec3 viewDir = normalize(vPositionWorldCameraRelative);
        float ssao = 1.0 - occlusion * (1.0 - evaluateAmbientOcclusion());
        vec3 additionalLight = evaluateAdditionalLighting(ssao, positionWorld());
        vec4 shadedColor = vec4(evaluateSceneLightingPBR(shadingNormal, materialColor.rgb, evaluateShadow(), ssao, additionalLight, viewDir, normalGround, mrr, emission, additionalIrradiance), materialColor.a);
        `)):(e.receiveShadows?L.fragment.code.add(r.glsl`
      float shadow = evaluateShadow();
        `):1===e.viewingMode?L.fragment.code.add(r.glsl`
      float additionalAmbientScale = _oldHeuristicLighting(positionWorld());
      float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);
        `):L.fragment.code.add(r.glsl`
      float shadow = 0.0;
      `),L.fragment.code.add(r.glsl`
      float ambientOcclusion = evaluateAmbientOcclusion();
      // At global scale we create some additional ambient light based on the main light to simulate global illumination
      vec3 additionalLight = evaluateAdditionalLighting(ambientOcclusion, positionWorld());
      vec4 shadedColor = vec4(evaluateSceneLighting(shadingNormalWorld(), materialColor.rgb, shadow, ambientOcclusion, additionalLight), materialColor.a);
      ${M?r.glsl`
          vec4 overlayWaterMask = getOverlayColor(ovInnerNormalTex, ovOuterNormalTex, vtcOverlay);
          float waterNormalLength = length(overlayWaterMask);
          if (waterNormalLength > 0.95) {
            mat3 tbnMatrix = mat3(tbnTangent, tbnBiTangent, groundNormal);
            vec4 waterOverlayColor = vec4(overlayColorOpaque.xyz, overlayColor.w);
            vec4 waterColorLinear = getOverlayWaterColor(overlayWaterMask, waterOverlayColor, -normalize(vPositionWorldCameraRelative), shadow, groundNormal, tbnMatrix, positionView);
            vec4 waterColorNonLinear = delinearizeGamma(vec4(waterColorLinear.xyz, 1.0));
            // un-gamma the ground color to mix in linear space
            shadedColor = mix(shadedColor, waterColorNonLinear, waterColorLinear.w);
          }`:""}
      `)),L.fragment.code.add(r.glsl`
        gl_FragColor = highlightSlice(shadedColor, vPositionWorldCameraRelative);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),1!==e.output&&3!==e.output||(L.include(s.OutputDepth,e),L.fragment.code.add(r.glsl`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);

        vec4 textureColor = readBaseColorTexture();
        discardOrAdjustAlpha(textureColor);

        outputDepth(linearDepth);
      }
    `)),2===e.output&&(L.include(T.ComputeShadingNormal,e),L.fragment.code.add(r.glsl`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);

        vec4 textureColor = readBaseColorTexture();
        discardOrAdjustAlpha(textureColor);

        // note: the alpha component needs to be 1.0 in order for this material
        // to influence ambient occlusion, see the ssao fragment shader
        float alpha = ${2===e.normalType?"0.0":"1.0"};
        gl_FragColor = vec4(vec3(.5) + .5 * shadingNormal_view(), alpha);
      }
    `)),4===e.output&&(L.include(i.OutputHighlight),L.fragment.code.add(r.glsl`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);

        vec4 textureColor = readBaseColorTexture();
        discardOrAdjustAlpha(textureColor);

        ${e.overlayEnabled?r.glsl`
        vec4 overlayColor = getCombinedOverlayColor();

        if (overlayColor.a == 0.0) {
          gl_FragColor = vec4(0.0);
          return;
        }`:""}

        outputHighlight();
      }
    `)),L}var S=Object.freeze({__proto__:null,attributeLocations:L,build:M});e.ComponentShader=S,e.attributeLocations=L,e.build=M}));
