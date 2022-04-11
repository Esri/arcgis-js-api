/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../geometry/support/Ellipsoid","../views/ViewingMode","../views/3d/webgl-engine/collections/Component/Material/shader/ComponentData.glsl","../views/3d/webgl-engine/collections/Component/Material/shader/VertexDiscardByOpacity.glsl","../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexPosition.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeMaterialColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeNormalTexture.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeShadingNormal.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ReadBaseColorTexture.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl","../views/3d/webgl-engine/core/shaderLibrary/terrain/Overlay.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/EllipsoidMode","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/lib/VertexAttribute"],(function(e,a,r,o,l,t,i,d,n,s,g,c,u,v,m,h,p,C,b,w,y,x,M,O,f,S,L,T,N,A){"use strict";const P=new Map([[A.VertexAttribute.POSITION,0],[A.VertexAttribute.NORMAL,1],[A.VertexAttribute.NORMALCOMPRESSED,1],[A.VertexAttribute.COLOR,2],[A.VertexAttribute.UV0,3],[A.VertexAttribute.UVREGION,4],[A.VertexAttribute.COMPONENTINDEX,5]]);function R(e){const A=new N.ShaderBuilder;A.include(u.VertexPosition,e),A.include(c.VertexNormal,e),A.include(g.VertexColor,e),A.include(s.TextureCoordinateAttribute,e),A.include(t.ForwardLinearDepth,e),A.include(o.ComponentData,e),A.include(S.DiscardOrAdjustAlpha,e),A.include(d.Slice,e),A.include(M.ReadBaseColorTexture,e),A.include(l.VertexDiscardByOpacity,e),A.fragment.uniforms.add("view","mat4"),e.pbrMode!==x.PBRMode.Normal&&e.pbrMode!==x.PBRMode.Schematic||(A.include(x.PhysicallyBasedRenderingParameters,e),e.hasNormalTexture&&A.include(C.ComputeNormalTexture,e)),e.output===i.ShaderOutput.Shadow&&e.componentData===o.ComponentDataType.Varying?A.vertex.code.add(T.glsl`#define discardShadows(castShadows) { if(!castShadows) { gl_Position = vec4(1e38, 1e38, 1e38, 1.0); return; } }`):A.vertex.code.add(T.glsl`#define discardShadows(castShadows) {}`);const P=e.overlayEnabled&&e.output===i.ShaderOutput.Color&&e.pbrMode===x.PBRMode.WaterOnIntegratedMesh;return e.overlayEnabled&&(A.include(w.EvaluateSceneLighting,e),A.include(f.Overlay,e),e.viewingMode===r.ViewingMode.Global?A.vertex.code.add(T.glsl`
      const float invEllipsoidRadius = ${T.glsl.float(1/(e.ellipsoidMode===L.EllipsoidMode.Earth?a.earth.radius:e.ellipsoidMode===L.EllipsoidMode.Mars?a.mars.radius:a.moon.radius))};
      vec2 projectOverlay(vec3 pos) {
        return pos.xy / (1.0 + invEllipsoidRadius * pos.z);
      }
      `):A.vertex.code.add(T.glsl`vec2 projectOverlay(vec3 pos) { return pos.xy; }`)),P&&(A.varyings.add("tbnTangent","vec3"),A.varyings.add("tbnBiTangent","vec3"),A.varyings.add("groundNormal","vec3"),A.varyings.add("positionView","vec3")),A.vertex.code.add(T.glsl`
    void main() {
      bool castShadows;
      vec4 externalColor = forwardExternalColor(castShadows);
      discardShadows(castShadows);

      vertexDiscardByOpacity(externalColor.a);

      if (externalColor.a < ${T.glsl.float(S.symbolAlphaCutoff)}) {
        // Discard this vertex
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      }
      forwardPosition();
      forwardNormal();
      ${P?T.glsl`
        positionView = position_view();
        ${e.viewingMode===r.ViewingMode.Global?T.glsl`
        groundNormal = normalize(positionWorld());
        tbnTangent = normalize(cross(vec3(0.0, 0.0, 1.0), groundNormal));
        tbnBiTangent = normalize(cross(groundNormal, tbnTangent));`:T.glsl`
        groundNormal = vec3(0.0, 0.0, 1.0);
        tbnTangent = vec3(1.0, 0.0, 0.0);
        tbnBiTangent = normalize(cross(groundNormal, tbnTangent));`}
        `:""}

      ${e.overlayEnabled?T.glsl`setOverlayVTC(projectOverlay(position));`:""}
      forwardTextureCoordinates();
      forwardVertexColor();
      forwardLinearDepth(); // depends on forwardPosition()
    }
  `),e.output===i.ShaderOutput.Alpha&&(A.fragment.include(h.ReadLinearDepth),e.multipassTerrainEnabled&&A.include(y.multipassTerrainTest,e),A.include(p.ComputeMaterialColor,e),A.fragment.code.add(T.glsl`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);
        ${e.multipassTerrainEnabled?T.glsl`terrainDepthTest(gl_FragCoord, vPosition_view.z);`:""}

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
        ${e.overlayEnabled?T.glsl`
        vec4 overlayColorOpaque = getOverlayColor(ovColorTex, vtcOverlay);
        vec4 overlayColor = overlayOpacity * overlayColorOpaque;
        materialColor = materialColor * (1.0 - overlayColor.a) + overlayColor;`:""}

        gl_FragColor = vec4(materialColor.a);
      }
    `)),e.output===i.ShaderOutput.Color&&(A.fragment.include(h.ReadLinearDepth),e.multipassTerrainEnabled&&A.include(y.multipassTerrainTest,e),A.include(p.ComputeMaterialColor,e),A.include(b.ComputeShadingNormal,e),A.include(w.EvaluateSceneLighting,e),P&&A.fragment.uniforms.add("ovNormalTex","sampler2D"),e.receiveShadows?(A.include(O.ReadShadowMap,e),A.fragment.code.add(T.glsl`float evaluateShadow() {
return readShadowMap(vPositionWorldCameraRelative, linearDepth);
}`)):A.fragment.code.add(T.glsl`float evaluateShadow() { return 0.0; }`),A.fragment.code.add(T.glsl`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);
        ${e.multipassTerrainEnabled?T.glsl`terrainDepthTest(gl_FragCoord, vPosition_view.z);`:""}

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
        ${e.overlayEnabled?T.glsl`
        vec4 overlayColorOpaque = getOverlayColor(ovColorTex, vtcOverlay);
        vec4 overlayColor = overlayOpacity * overlayColorOpaque;
        materialColor = materialColor * (1.0 - overlayColor.a) + overlayColor;`:""}
    `),e.pbrMode===x.PBRMode.Normal||e.pbrMode===x.PBRMode.Schematic?(A.fragment.code.add(T.glsl`
        ${e.pbrMode===x.PBRMode.Normal?T.glsl`
        applyPBRFactors();
        if (int(externalColorMixMode) == 3) {
          mrr = vec3(0.0, 0.6, 0.2);
        }`:""}
        vec3 normalVertex = shadingNormalWorld();
        float additionalIrradiance = 0.02 * lightingMainIntensity[2];
      `),e.hasNormalTexture?A.fragment.code.add(T.glsl`mat3 tangentSpace = computeTangentSpace(normalVertex, vPositionWorldCameraRelative, vuv0);
vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);`):A.fragment.code.add(T.glsl`vec3 shadingNormal = normalVertex;`),A.fragment.code.add(T.glsl`${e.viewingMode===r.ViewingMode.Global?T.glsl`vec3 normalGround = normalize(positionWorld());`:T.glsl`vec3 normalGround = vec3(0.0, 0.0, 1.0);`}
      `),A.fragment.code.add(T.glsl`vec3 viewDir = normalize(vPositionWorldCameraRelative);
float ssao = 1.0 - occlusion * (1.0 - evaluateAmbientOcclusion());
vec3 additionalLight = evaluateAdditionalLighting(ssao, positionWorld());
vec4 shadedColor = vec4(evaluateSceneLightingPBR(shadingNormal, materialColor.rgb, evaluateShadow(), ssao, additionalLight, viewDir, normalGround, mrr, emission, additionalIrradiance), materialColor.a);`)):(e.receiveShadows?A.fragment.code.add(T.glsl`float shadow = evaluateShadow();`):e.viewingMode===r.ViewingMode.Global?A.fragment.code.add(T.glsl`float additionalAmbientScale = additionalDirectedAmbientLight(positionWorld());
float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);`):A.fragment.code.add(T.glsl`float shadow = 0.0;`),A.fragment.code.add(T.glsl`
      float ambientOcclusion = evaluateAmbientOcclusion();
      // At global scale we create some additional ambient light based on the main light to simulate global illumination
      vec3 additionalLight = evaluateAdditionalLighting(ambientOcclusion, positionWorld());
      vec4 shadedColor = vec4(evaluateSceneLighting(shadingNormalWorld(), materialColor.rgb, shadow, ambientOcclusion, additionalLight), materialColor.a);
      ${P?T.glsl`
          vec4 overlayWaterMask = getOverlayColor(ovNormalTex, vtcOverlay);
          float waterNormalLength = length(overlayWaterMask);
          if (waterNormalLength > 0.95) {
            mat3 tbnMatrix = mat3(tbnTangent, tbnBiTangent, groundNormal);
            vec4 waterOverlayColor = vec4(overlayColorOpaque.xyz, overlayColor.w);
            vec4 waterColorLinear = getOverlayWaterColor(overlayWaterMask, waterOverlayColor, -normalize(vPositionWorldCameraRelative), shadow, groundNormal, tbnMatrix, positionView, positionWorld());
            vec4 waterColorNonLinear = delinearizeGamma(vec4(waterColorLinear.xyz, 1.0));
            // un-gamma the ground color to mix in linear space
            shadedColor = mix(shadedColor, waterColorNonLinear, waterColorLinear.w);
          }`:""}
      `)),A.fragment.code.add(T.glsl`
        gl_FragColor = highlightSlice(shadedColor, vPositionWorldCameraRelative);
        ${e.oitEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),e.output!==i.ShaderOutput.Depth&&e.output!==i.ShaderOutput.Shadow||(A.include(v.OutputDepth,e),A.fragment.code.add(T.glsl`void main() {
discardBySlice(vPositionWorldCameraRelative);
vec4 textureColor = readBaseColorTexture();
discardOrAdjustAlpha(textureColor);
outputDepth(linearDepth);
}`)),e.output===i.ShaderOutput.Normal&&(A.include(b.ComputeShadingNormal,e),A.fragment.code.add(T.glsl`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);

        vec4 textureColor = readBaseColorTexture();
        discardOrAdjustAlpha(textureColor);

        // note: the alpha component needs to be 1.0 in order for this material
        // to influence ambient occlusion, see the ssao fragment shader
        float alpha = ${e.normalType===n.NormalAttributeType.Ground?"0.0":"1.0"};
        gl_FragColor = vec4(vec3(.5) + .5 * shadingNormal_view(), alpha);
      }
    `)),e.output===i.ShaderOutput.Highlight&&(A.include(m.OutputHighlight),A.fragment.code.add(T.glsl`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);

        vec4 textureColor = readBaseColorTexture();
        discardOrAdjustAlpha(textureColor);

        ${e.overlayEnabled?T.glsl`
        vec4 overlayColor = getCombinedOverlayColor();

        if (overlayColor.a == 0.0) {
          gl_FragColor = vec4(0.0);
          return;
        }`:""}

        outputHighlight();
      }
    `)),A}const V=Object.freeze(Object.defineProperty({__proto__:null,attributeLocations:P,build:R},Symbol.toStringTag,{value:"Module"}));e.ComponentShader=V,e.attributeLocations=P,e.build=R}));
