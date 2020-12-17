/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../geometry/support/Ellipsoid","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl","../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexPosition.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeNormalTexture.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl","../views/3d/webgl-engine/core/shaderLibrary/terrain/Overlay.glsl","../views/3d/webgl-engine/collections/Component/Material/shader/ComponentData.glsl","../views/3d/webgl-engine/collections/Component/Material/shader/VertexDiscardByOpacity.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeMaterialColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeShadingNormal.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ReadBaseColorTexture.glsl"],(function(e,o,a,r,l,t,i,n,d,s,g,c,v,u,m,C,h,p,w,b,x,y,f){"use strict";const O={position:0,normal:1,normalCompressed:1,color:2,uv0:3,uvRegion:4,componentIndex:5};function M(e){const O=new r.ShaderBuilder;O.include(u.VertexPosition,e),O.include(m.VertexNormal,e),O.include(n.VertexColor,e),O.include(c.TextureCoordinateAttribute,e),O.include(g.ForwardLinearDepth,e),O.include(w.ComponentData,e),O.include(i.DiscardOrAdjustAlpha,e),O.include(l.Slice,e),O.include(f.ReadBaseColorTexture,e),O.include(b.VertexDiscardByOpacity,e),O.fragment.uniforms.add("view","mat4"),1!==e.pbrMode&&2!==e.pbrMode||(O.include(v.PhysicallyBasedRenderingParameters,e),O.include(C.ComputeNormalTexture,e)),3===e.output&&1===e.componentData?O.vertex.code.add(a.glsl`
      #define discardShadows(castShadows) { if(!castShadows) { gl_Position = vec4(1e38, 1e38, 1e38, 1.0); return; } }
    `):O.vertex.code.add(a.glsl`
      #define discardShadows(castShadows) {}
    `);const M=e.overlayEnabled&&0===e.output&&4===e.pbrMode;return e.overlayEnabled&&(O.include(p.Overlay,e),1===e.viewingMode?O.vertex.code.add(a.glsl`
      const float invEllipsoidRadius = ${a.glsl.float(1/(1===e.ellipsoidMode?o.earth.radius:2===e.ellipsoidMode?o.mars.radius:o.moon.radius))};
      vec2 projectOverlay(vec3 pos) {
        return pos.xy / (1.0 + invEllipsoidRadius * pos.z);
      }
      `):O.vertex.code.add(a.glsl`
      vec2 projectOverlay(vec3 pos) { return pos.xy; }
      `)),M&&(O.varyings.add("tbnTangent","vec3"),O.varyings.add("tbnBiTangent","vec3"),O.varyings.add("groundNormal","vec3"),O.varyings.add("positionView","vec3")),O.vertex.code.add(a.glsl`
    void main() {
      bool castShadows;
      vec4 externalColor = forwardExternalColor(castShadows);
      discardShadows(castShadows);

      vertexDiscardByOpacity(externalColor.a);

      if (externalColor.a < ${a.glsl.float(i.symbolAlphaCutoff)}) {
        // Discard this vertex
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      }
      forwardPosition();
      forwardNormal();
      ${M?a.glsl`
        positionView = position_view();
        ${1===e.viewingMode?a.glsl`
        groundNormal = normalize(positionWorld());
        tbnTangent = normalize(cross(vec3(0.0, 0.0, 1.0), groundNormal));
        tbnBiTangent = normalize(cross(groundNormal, tbnTangent));`:a.glsl`
        groundNormal = vec3(0.0, 0.0, 1.0);
        tbnTangent = vec3(1.0, 0.0, 0.0);
        tbnBiTangent = normalize(cross(groundNormal, tbnTangent));`}
        `:""}

      ${e.overlayEnabled?a.glsl`setOverlayVTC(projectOverlay(position));`:""}
      forwardTextureCoordinates();
      forwardVertexColor();
      forwardLinearDepth(); // depends on forwardPosition()
    }
  `),7===e.output&&(O.include(x.ComputeMaterialColor,e),O.fragment.code.add(a.glsl`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);

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
        ${e.overlayEnabled?a.glsl`
        vec4 overlayColorOpaque = getOverlayColor(ovInnerColorTex, ovOuterColorTex, vtcOverlay);
        vec4 overlayColor = overlayOpacity * overlayColorOpaque;
        materialColor = materialColor * (1.0 - overlayColor.a) + overlayColor;`:""}

        gl_FragColor = vec4(materialColor.a);
      }
    `)),0===e.output&&(O.include(x.ComputeMaterialColor,e),O.include(y.ComputeShadingNormal,e),O.include(h.EvaluateSceneLighting,e),M&&(O.fragment.uniforms.add("ovInnerNormalTex","sampler2D"),O.fragment.uniforms.add("ovOuterNormalTex","sampler2D")),e.receiveShadows?(O.include(s.ReadShadowMap,e),O.fragment.code.add(a.glsl`
        float evaluateShadow() {
          return readShadowMap(vPositionWorldCameraRelative, linearDepth);
        }
      `)):O.fragment.code.add(a.glsl`
        float evaluateShadow() { return 0.0; }
      `),O.fragment.code.add(a.glsl`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);

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
        ${e.overlayEnabled?a.glsl`
        vec4 overlayColorOpaque = getOverlayColor(ovInnerColorTex, ovOuterColorTex, vtcOverlay);
        vec4 overlayColor = overlayOpacity * overlayColorOpaque;
        materialColor = materialColor * (1.0 - overlayColor.a) + overlayColor;`:""}
    `),1===e.pbrMode||2===e.pbrMode?(O.fragment.code.add(a.glsl`
        ${1===e.pbrMode?a.glsl`
        applyPBRFactors();
        if (int(externalColorMixMode) == 3) {
          mrr = vec3(0.0, 0.6, 0.2);
        }`:""}
        vec3 normalVertex = shadingNormalWorld();
        float additionalIrradiance = 0.02 * lightingMainIntensity[2];
      `),e.hasNormalTexture?O.fragment.code.add(a.glsl`
        mat3 tangentSpace = computeTangentSpace(normalVertex, vPositionWorldCameraRelative, vuv0);
        vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);
        `):O.fragment.code.add(a.glsl`
        vec3 shadingNormal = normalVertex;
        `),O.fragment.code.add(a.glsl`${1===e.viewingMode?a.glsl`vec3 normalGround = normalize(positionWorld());`:a.glsl`vec3 normalGround = vec3(0.0, 0.0, 1.0);`}
      `),O.fragment.code.add(a.glsl`
        vec3 viewDir = normalize(vPositionWorldCameraRelative);
        float ssao = 1.0 - occlusion * (1.0 - evaluateAmbientOcclusion());
        vec3 additionalLight = evaluateAdditionalLighting(ssao, positionWorld());
        vec4 shadedColor = vec4(evaluateSceneLightingPBR(shadingNormal, materialColor.rgb, evaluateShadow(), ssao, additionalLight, viewDir, normalGround, mrr, emission, additionalIrradiance), materialColor.a);
        `)):(e.receiveShadows?O.fragment.code.add(a.glsl`
      float shadow = evaluateShadow();
        `):1===e.viewingMode?O.fragment.code.add(a.glsl`
      float additionalAmbientScale = _oldHeuristicLighting(positionWorld());
      float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);
        `):O.fragment.code.add(a.glsl`
      float shadow = 0.0;
      `),O.fragment.code.add(a.glsl`
      float ambientOcclusion = evaluateAmbientOcclusion();
      // At global scale we create some additional ambient light based on the main light to simulate global illumination
      vec3 additionalLight = evaluateAdditionalLighting(ambientOcclusion, positionWorld());
      vec4 shadedColor = vec4(evaluateSceneLighting(shadingNormalWorld(), materialColor.rgb, shadow, ambientOcclusion, additionalLight), materialColor.a);
      ${M?a.glsl`
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
      `)),O.fragment.code.add(a.glsl`
        gl_FragColor = highlightSlice(shadedColor, vPositionWorldCameraRelative);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),1!==e.output&&3!==e.output||(O.include(d.OutputDepth,e),O.fragment.code.add(a.glsl`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);

        vec4 textureColor = readBaseColorTexture();
        discardOrAdjustAlpha(textureColor);

        outputDepth(linearDepth);
      }
    `)),2===e.output&&(O.include(y.ComputeShadingNormal,e),O.fragment.code.add(a.glsl`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);

        vec4 textureColor = readBaseColorTexture();
        discardOrAdjustAlpha(textureColor);

        // note: the alpha component needs to be 1.0 in order for this material
        // to influence ambient occlusion, see the ssao fragment shader
        float alpha = ${2===e.normalType?"0.0":"1.0"};
        gl_FragColor = vec4(vec3(.5) + .5 * shadingNormal_view(), alpha);
      }
    `)),4===e.output&&(O.include(t.OutputHighlight),O.fragment.code.add(a.glsl`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);

        vec4 textureColor = readBaseColorTexture();
        discardOrAdjustAlpha(textureColor);

        ${e.overlayEnabled?a.glsl`
        vec4 overlayColor = getCombinedOverlayColor();

        if (overlayColor.a == 0.0) {
          gl_FragColor = vec4(0.0);
          return;
        }`:""}

        outputHighlight();
      }
    `)),O}var S=Object.freeze({__proto__:null,attributeLocations:O,build:M});e.ComponentShader=S,e.attributeLocations=O,e.build=M}));
