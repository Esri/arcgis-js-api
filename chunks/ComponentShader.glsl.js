/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../geometry/support/Ellipsoid","../views/3d/webgl-engine/collections/Component/Material/shader/ComponentData.glsl","../views/3d/webgl-engine/collections/Component/Material/shader/VertexDiscardByOpacity.glsl","../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexPosition.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeMaterialColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeNormalTexture.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeShadingNormal.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ReadBaseColorTexture.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl","../views/3d/webgl-engine/core/shaderLibrary/terrain/Overlay.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder"],(function(e,a,r,o,l,i,t,n,d,s,g,c,v,u,m,h,p,C,w,b,y,x,f,M,L){"use strict";const T=new Map([["position",0],["normal",1],["normalCompressed",1],["color",2],["uv0",3],["uvRegion",4],["componentIndex",5]]);function O(e){const T=new L.ShaderBuilder;T.include(s.VertexPosition,e),T.include(d.VertexNormal,e),T.include(n.VertexColor,e),T.include(t.TextureCoordinateAttribute,e),T.include(l.ForwardLinearDepth,e),T.include(r.ComponentData,e),T.include(f.DiscardOrAdjustAlpha,e),T.include(i.Slice,e),T.include(b.ReadBaseColorTexture,e),T.include(o.VertexDiscardByOpacity,e),T.fragment.uniforms.add("view","mat4"),1!==e.pbrMode&&2!==e.pbrMode||(T.include(w.PhysicallyBasedRenderingParameters,e),e.hasNormalTexture&&T.include(m.ComputeNormalTexture,e)),3===e.output&&1===e.componentData?T.vertex.code.add(M.glsl`#define discardShadows(castShadows) { if(!castShadows) { gl_Position = vec4(1e38, 1e38, 1e38, 1.0); return; } }`):T.vertex.code.add(M.glsl`#define discardShadows(castShadows) {}`);const O=e.overlayEnabled&&0===e.output&&4===e.pbrMode;return e.overlayEnabled&&(T.include(x.Overlay,e),1===e.viewingMode?T.vertex.code.add(M.glsl`
      const float invEllipsoidRadius = ${M.glsl.float(1/(1===e.ellipsoidMode?a.earth.radius:2===e.ellipsoidMode?a.mars.radius:a.moon.radius))};
      vec2 projectOverlay(vec3 pos) {
        return pos.xy / (1.0 + invEllipsoidRadius * pos.z);
      }
      `):T.vertex.code.add(M.glsl`vec2 projectOverlay(vec3 pos) { return pos.xy; }`)),O&&(T.varyings.add("tbnTangent","vec3"),T.varyings.add("tbnBiTangent","vec3"),T.varyings.add("groundNormal","vec3"),T.varyings.add("positionView","vec3")),T.vertex.code.add(M.glsl`
    void main() {
      bool castShadows;
      vec4 externalColor = forwardExternalColor(castShadows);
      discardShadows(castShadows);

      vertexDiscardByOpacity(externalColor.a);

      if (externalColor.a < ${M.glsl.float(f.symbolAlphaCutoff)}) {
        // Discard this vertex
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      }
      forwardPosition();
      forwardNormal();
      ${O?M.glsl`
        positionView = position_view();
        ${1===e.viewingMode?M.glsl`
        groundNormal = normalize(positionWorld());
        tbnTangent = normalize(cross(vec3(0.0, 0.0, 1.0), groundNormal));
        tbnBiTangent = normalize(cross(groundNormal, tbnTangent));`:M.glsl`
        groundNormal = vec3(0.0, 0.0, 1.0);
        tbnTangent = vec3(1.0, 0.0, 0.0);
        tbnBiTangent = normalize(cross(groundNormal, tbnTangent));`}
        `:""}

      ${e.overlayEnabled?M.glsl`setOverlayVTC(projectOverlay(position));`:""}
      forwardTextureCoordinates();
      forwardVertexColor();
      forwardLinearDepth(); // depends on forwardPosition()
    }
  `),7===e.output&&(T.fragment.include(v.ReadLinearDepth),e.multipassTerrainEnabled&&T.include(C.multipassTerrainTest,e),T.include(u.ComputeMaterialColor,e),T.fragment.code.add(M.glsl`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);
        ${e.multipassTerrainEnabled?M.glsl`terrainDepthTest(gl_FragCoord, vPosition_view.z);`:""}

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
        ${e.overlayEnabled?M.glsl`
        vec4 overlayColorOpaque = getOverlayColor(ovColorTex, vtcOverlay);
        vec4 overlayColor = overlayOpacity * overlayColorOpaque;
        materialColor = materialColor * (1.0 - overlayColor.a) + overlayColor;`:""}

        gl_FragColor = vec4(materialColor.a);
      }
    `)),0===e.output&&(T.fragment.include(v.ReadLinearDepth),e.multipassTerrainEnabled&&T.include(C.multipassTerrainTest,e),T.include(u.ComputeMaterialColor,e),T.include(h.ComputeShadingNormal,e),T.include(p.EvaluateSceneLighting,e),O&&T.fragment.uniforms.add("ovNormalTex","sampler2D"),e.receiveShadows?(T.include(y.ReadShadowMap,e),T.fragment.code.add(M.glsl`float evaluateShadow() {
return readShadowMap(vPositionWorldCameraRelative, linearDepth);
}`)):T.fragment.code.add(M.glsl`float evaluateShadow() { return 0.0; }`),T.fragment.code.add(M.glsl`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);
        ${e.multipassTerrainEnabled?M.glsl`terrainDepthTest(gl_FragCoord, vPosition_view.z);`:""}

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
        ${e.overlayEnabled?M.glsl`
        vec4 overlayColorOpaque = getOverlayColor(ovColorTex, vtcOverlay);
        vec4 overlayColor = overlayOpacity * overlayColorOpaque;
        materialColor = materialColor * (1.0 - overlayColor.a) + overlayColor;`:""}
    `),1===e.pbrMode||2===e.pbrMode?(T.fragment.code.add(M.glsl`
        ${1===e.pbrMode?M.glsl`
        applyPBRFactors();
        if (int(externalColorMixMode) == 3) {
          mrr = vec3(0.0, 0.6, 0.2);
        }`:""}
        vec3 normalVertex = shadingNormalWorld();
        float additionalIrradiance = 0.02 * lightingMainIntensity[2];
      `),e.hasNormalTexture?T.fragment.code.add(M.glsl`mat3 tangentSpace = computeTangentSpace(normalVertex, vPositionWorldCameraRelative, vuv0);
vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);`):T.fragment.code.add(M.glsl`vec3 shadingNormal = normalVertex;`),T.fragment.code.add(M.glsl`${1===e.viewingMode?M.glsl`vec3 normalGround = normalize(positionWorld());`:M.glsl`vec3 normalGround = vec3(0.0, 0.0, 1.0);`}
      `),T.fragment.code.add(M.glsl`vec3 viewDir = normalize(vPositionWorldCameraRelative);
float ssao = 1.0 - occlusion * (1.0 - evaluateAmbientOcclusion());
vec3 additionalLight = evaluateAdditionalLighting(ssao, positionWorld());
vec4 shadedColor = vec4(evaluateSceneLightingPBR(shadingNormal, materialColor.rgb, evaluateShadow(), ssao, additionalLight, viewDir, normalGround, mrr, emission, additionalIrradiance), materialColor.a);`)):(e.receiveShadows?T.fragment.code.add(M.glsl`float shadow = evaluateShadow();`):1===e.viewingMode?T.fragment.code.add(M.glsl`float additionalAmbientScale = additionalDirectedAmbientLight(positionWorld());
float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);`):T.fragment.code.add(M.glsl`float shadow = 0.0;`),T.fragment.code.add(M.glsl`
      float ambientOcclusion = evaluateAmbientOcclusion();
      // At global scale we create some additional ambient light based on the main light to simulate global illumination
      vec3 additionalLight = evaluateAdditionalLighting(ambientOcclusion, positionWorld());
      vec4 shadedColor = vec4(evaluateSceneLighting(shadingNormalWorld(), materialColor.rgb, shadow, ambientOcclusion, additionalLight), materialColor.a);
      ${O?M.glsl`
          vec4 overlayWaterMask = getOverlayColor(ovNormalTex, vtcOverlay);
          float waterNormalLength = length(overlayWaterMask);
          if (waterNormalLength > 0.95) {
            mat3 tbnMatrix = mat3(tbnTangent, tbnBiTangent, groundNormal);
            vec4 waterOverlayColor = vec4(overlayColorOpaque.xyz, overlayColor.w);
            vec4 waterColorLinear = getOverlayWaterColor(overlayWaterMask, waterOverlayColor, -normalize(vPositionWorldCameraRelative), shadow, groundNormal, tbnMatrix, positionView);
            vec4 waterColorNonLinear = delinearizeGamma(vec4(waterColorLinear.xyz, 1.0));
            // un-gamma the ground color to mix in linear space
            shadedColor = mix(shadedColor, waterColorNonLinear, waterColorLinear.w);
          }`:""}
      `)),T.fragment.code.add(M.glsl`
        gl_FragColor = highlightSlice(shadedColor, vPositionWorldCameraRelative);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),1!==e.output&&3!==e.output||(T.include(g.OutputDepth,e),T.fragment.code.add(M.glsl`void main() {
discardBySlice(vPositionWorldCameraRelative);
vec4 textureColor = readBaseColorTexture();
discardOrAdjustAlpha(textureColor);
outputDepth(linearDepth);
}`)),2===e.output&&(T.include(h.ComputeShadingNormal,e),T.fragment.code.add(M.glsl`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);

        vec4 textureColor = readBaseColorTexture();
        discardOrAdjustAlpha(textureColor);

        // note: the alpha component needs to be 1.0 in order for this material
        // to influence ambient occlusion, see the ssao fragment shader
        float alpha = ${2===e.normalType?"0.0":"1.0"};
        gl_FragColor = vec4(vec3(.5) + .5 * shadingNormal_view(), alpha);
      }
    `)),4===e.output&&(T.include(c.OutputHighlight),T.fragment.code.add(M.glsl`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);

        vec4 textureColor = readBaseColorTexture();
        discardOrAdjustAlpha(textureColor);

        ${e.overlayEnabled?M.glsl`
        vec4 overlayColor = getCombinedOverlayColor();

        if (overlayColor.a == 0.0) {
          gl_FragColor = vec4(0.0);
          return;
        }`:""}

        outputHighlight();
      }
    `)),T}var S=Object.freeze({__proto__:null,attributeLocations:T,build:O});e.ComponentShader=S,e.attributeLocations=T,e.build=O}));
