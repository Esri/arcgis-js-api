/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{earth as e,mars as o,moon as r}from"../geometry/support/Ellipsoid.js";import{OverlayIndex as a,RenderTargetType as i}from"../views/3d/terrain/interfaces.js";import{IntegratedMeshMode as l}from"../views/3d/webgl-engine/collections/Component/Material/ComponentTechniqueConfiguration.js";import{ComponentData as t,ComponentDataType as d}from"../views/3d/webgl-engine/collections/Component/Material/shader/ComponentData.glsl.js";import{VertexDiscardByOpacity as n}from"../views/3d/webgl-engine/collections/Component/Material/shader/VertexDiscardByOpacity.glsl.js";import{ForwardLinearDepth as s}from"../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl.js";import{ShaderOutput as c}from"../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions.js";import{SlicePass as m}from"../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js";import{NormalAttributeType as g}from"../views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js";import{TextureCoordinateAttribute as v}from"../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js";import{VertexColor as u}from"../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl.js";import{VertexNormal as h}from"../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl.js";import{VertexPosition as p}from"../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexPosition.glsl.js";import{OutputDepth as C}from"../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl.js";import{OutputHighlight as w}from"../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl.js";import{ReadLinearDepth as b}from"../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl.js";import{ComputeMaterialColor as f}from"../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeMaterialColor.glsl.js";import{ComputeNormalTexture as x}from"../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeNormalTexture.glsl.js";import{ComputeShadingNormal as y}from"../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeShadingNormal.glsl.js";import{EvaluateSceneLighting as M}from"../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl.js";import{multipassTerrainTest as L}from"../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl.js";import{PBRMode as N,PhysicallyBasedRenderingParameters as O}from"../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js";import{ReadBaseColorTexture as j}from"../views/3d/webgl-engine/core/shaderLibrary/shading/ReadBaseColorTexture.glsl.js";import{ReadShadowMapPass as S}from"../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl.js";import{OverlayIM as T,getColorTexture as P}from"../views/3d/webgl-engine/core/shaderLibrary/terrain/Overlay.glsl.js";import{symbolAlphaCutoff as W}from"../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff.js";import{DiscardOrAdjustAlphaDraw as A}from"../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl.js";import{EllipsoidMode as R}from"../views/3d/webgl-engine/core/shaderLibrary/util/EllipsoidMode.js";import{Float3PassUniform as D}from"../views/3d/webgl-engine/core/shaderModules/Float3PassUniform.js";import{FloatPassUniform as B}from"../views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js";import{glsl as _}from"../views/3d/webgl-engine/core/shaderModules/interfaces.js";import{Matrix4Uniform as E}from"../views/3d/webgl-engine/core/shaderModules/Matrix4Uniform.js";import{ShaderBuilder as F}from"../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js";import{Texture2DPassUniform as $}from"../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js";import{TransparencyPassType as z}from"../views/3d/webgl-engine/lib/basicInterfaces.js";import{VertexAttribute as V}from"../views/3d/webgl-engine/lib/VertexAttribute.js";const I=new Map([[V.POSITION,0],[V.NORMAL,1],[V.NORMALCOMPRESSED,1],[V.COLOR,2],[V.UV0,3],[V.UVREGION,4],[V.COMPONENTINDEX,5]]);function G(a){const i=new F;i.include(p,a),i.include(h,a),i.include(u,a),i.include(v,a),i.include(s,a),i.include(t,a),i.include(A,a),i.include(m,a),i.include(j,a),i.include(n,a);const{vertex:V,fragment:I}=i;I.uniforms.add(new E("view")),a.pbrMode!==N.Normal&&a.pbrMode!==N.Schematic||(i.include(O,a),a.hasNormalTexture&&i.include(x,a)),a.output===c.Shadow&&a.componentData===d.Varying?V.code.add(_`#define discardShadows(castShadows) { if(!castShadows) { gl_Position = vec4(1e38, 1e38, 1e38, 1.0); return; } }`):V.code.add(_`#define discardShadows(castShadows) {}`);const G=a.integratedMeshMode===l.ColorOverlay||a.integratedMeshMode===l.ColorOverlayWithWater,k=G&&a.output===c.Color&&a.pbrMode===N.WaterOnIntegratedMesh;return G&&(i.include(M,a),i.include(T,a),a.spherical?V.code.add(_`
      const float invEllipsoidRadius = ${_.float(1/(a.ellipsoidMode===R.Earth?e.radius:a.ellipsoidMode===R.Mars?o.radius:r.radius))};
      vec2 projectOverlay(vec3 pos) {
        return pos.xy / (1.0 + invEllipsoidRadius * pos.z);
      }
      `):V.code.add(_`vec2 projectOverlay(vec3 pos) { return pos.xy; }`)),k&&(i.varyings.add("tbnTangent","vec3"),i.varyings.add("tbnBiTangent","vec3"),i.varyings.add("groundNormal","vec3")),V.code.add(_`
    void main() {
      bool castShadows;
      vec4 externalColor = forwardExternalColor(castShadows);
      discardShadows(castShadows);

      vertexDiscardByOpacity(externalColor.a);

      if (externalColor.a < ${_.float(W)}) {
        // Discard this vertex
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      }

      forwardPosition(readElevationOffset());
      forwardNormal();
      forwardTextureCoordinates();
      forwardVertexColor();
      forwardLinearDepth();
      ${k?a.spherical?_`
                groundNormal = normalize(positionWorld());
                tbnTangent = normalize(cross(vec3(0.0, 0.0, 1.0), groundNormal));
                tbnBiTangent = normalize(cross(groundNormal, tbnTangent));`:_`
                groundNormal = vec3(0.0, 0.0, 1.0);
                tbnTangent = vec3(1.0, 0.0, 0.0);
                tbnBiTangent = vec3(0.0, 1.0, 0.0);`:""}
      ${G?_`setOverlayVTC(projectOverlay(position));`:""}
    }
  `),a.output===c.Alpha&&(I.include(b),i.include(L,a),i.include(f,a),G&&I.uniforms.add(new $("ovColorTex",((e,o)=>P(e,o)))),I.code.add(_`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);
        ${a.hasMultipassTerrain?_`terrainDepthTest(gl_FragCoord, vPosition_view.z);`:""}

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
        ${G?_`
                vec4 overlayColor = getOverlayColor(ovColorTex, vtcOverlay);
                materialColor = materialColor * (1.0 - overlayColor.a) + overlayColor;`:""}

        gl_FragColor = vec4(materialColor.a);
      }
    `)),a.output===c.Color&&(I.include(b),i.include(L,a),i.include(f,a),i.include(y,a),i.include(M,a),a.receiveShadows?(i.include(S,a),I.code.add(_`float evaluateShadow() {
return readShadowMap(vPositionWorldCameraRelative, linearDepth);
}`)):I.code.add(_`float evaluateShadow() { return 0.0; }`),G&&I.uniforms.add(new $("ovColorTex",((e,o)=>P(e,o)))),I.code.add(_`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);
        ${a.hasMultipassTerrain?_`terrainDepthTest(gl_FragCoord, vPosition_view.z);`:""}

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
        ${G?_`vec4 overlayColor = getOverlayColor(ovColorTex, vtcOverlay);`:""}
    `),a.pbrMode===N.Normal||a.pbrMode===N.Schematic?(I.uniforms.add(new D("lightingMainIntensity",((e,o)=>o.lighting.mainLight.intensity))),I.code.add(_`
        ${a.pbrMode===N.Normal?_`
                applyPBRFactors();
                if (int(externalColorMixMode) == 3) {
                  mrr = vec3(0.0, 0.6, 0.2);
                }`:""}
        vec3 normalVertex = shadingNormalWorld();
        float additionalIrradiance = 0.02 * lightingMainIntensity[2];
      `),a.hasNormalTexture?I.code.add(_`mat3 tangentSpace = computeTangentSpace(normalVertex, vPositionWorldCameraRelative, vuv0);
vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);`):I.code.add(_`vec3 shadingNormal = normalVertex;`),I.code.add(_`${a.spherical?_`vec3 normalGround = normalize(positionWorld());`:_`vec3 normalGround = vec3(0.0, 0.0, 1.0);`}
      `),I.code.add(_`
        vec3 viewDir = normalize(vPositionWorldCameraRelative);
        float ssao = 1.0 - occlusion * (1.0 - evaluateAmbientOcclusion());

        ${a.snowCover?_`
                vec3 surfaceNormal = normalize(shadingNormalWorld());
                float snow = smoothstep(0.5, 0.55, dot(surfaceNormal, normalize(positionWorld())));
                materialColor.rgb = mix(materialColor.rgb, vec3(1), snow);

                shadingNormal = mix(shadingNormal, surfaceNormal, snow);
                ssao = mix(ssao, 0.0, snow);
                mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                emission = mix(emission, vec3(0.0), snow);`:""}

        ${G?_` materialColor = materialColor * (1.0 - overlayColor.a) + overlayColor;`:""}

        vec3 additionalLight = evaluateAdditionalLighting(ssao, positionWorld());
        vec4 shadedColor = vec4(evaluateSceneLightingPBR(shadingNormal, materialColor.rgb, evaluateShadow(), ssao, additionalLight, viewDir, normalGround, mrr, emission, additionalIrradiance), materialColor.a);
        `)):(a.receiveShadows?I.code.add(_`float shadow = evaluateShadow();`):a.spherical?(I.uniforms.add(new B("lightingGlobalFactor",((e,o)=>o.lighting.globalFactor))),I.code.add(_`float additionalAmbientScale = additionalDirectedAmbientLight(positionWorld());
float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);`)):I.code.add(_`float shadow = 0.0;`),k&&I.uniforms.add(new $("ovNormalTex",((e,o)=>U(o)))),a.snowCover&&(i.extensions.add("GL_OES_standard_derivatives"),I.code.add(_`vec3 surfaceNormal = normalize(cross(dFdx(vPositionWorldCameraRelative), dFdy(vPositionWorldCameraRelative)));
float snow = smoothstep(0.5, 0.55, dot(surfaceNormal, normalize(positionWorld())));
materialColor.rgb = mix(materialColor.rgb, vec3(1), snow);`)),I.code.add(_`
        float ambientOcclusion = evaluateAmbientOcclusion();
        vec3 additionalLight = evaluateAdditionalLighting(ambientOcclusion, positionWorld());

        ${G?_` materialColor = materialColor * (1.0 - overlayColor.a) + overlayColor;`:""}

        vec4 shadedColor = vec4(evaluateSceneLighting(shadingNormalWorld(), materialColor.rgb, shadow, ambientOcclusion, additionalLight), materialColor.a);
      ${k?_`
              vec4 overlayWaterMask = getOverlayColor(ovNormalTex, vtcOverlay);
              float waterNormalLength = length(overlayWaterMask);
              if (waterNormalLength > 0.95) {
                mat3 tbnMatrix = mat3(tbnTangent, tbnBiTangent, groundNormal);
                vec4 waterColorLinear = getOverlayWaterColor(overlayWaterMask, overlayColor, -normalize(vPositionWorldCameraRelative), shadow, groundNormal, tbnMatrix, vPosition_view, positionWorld());
                vec4 waterColorNonLinear = delinearizeGamma(vec4(waterColorLinear.xyz, 1.0));
                // un-gamma the ground color to mix in linear space
                shadedColor = mix(shadedColor, waterColorNonLinear, waterColorLinear.w);
              }`:""}
      `)),I.code.add(_`
        gl_FragColor = highlightSlice(shadedColor, vPositionWorldCameraRelative);
        ${a.transparencyPassType===z.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),a.output!==c.Depth&&a.output!==c.Shadow||(i.include(C,a),I.code.add(_`void main() {
discardBySlice(vPositionWorldCameraRelative);
vec4 textureColor = readBaseColorTexture();
discardOrAdjustAlpha(textureColor);
outputDepth(linearDepth);
}`)),a.output===c.Normal&&(i.include(y,a),I.code.add(_`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);

        vec4 textureColor = readBaseColorTexture();
        discardOrAdjustAlpha(textureColor);

        // note: the alpha component needs to be 1.0 in order for this material
        // to influence ambient occlusion, see the ssao fragment shader
        float alpha = ${a.normalType===g.Ground?"0.0":"1.0"};
        gl_FragColor = vec4(vec3(.5) + .5 * shadingNormal_view(), alpha);
      }
    `)),a.output===c.Highlight&&(i.include(w),I.code.add(_`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);

        vec4 textureColor = readBaseColorTexture();
        discardOrAdjustAlpha(textureColor);

        ${G?_`
                vec4 overlayColor = getCombinedOverlayColor();
                if (overlayColor.a == 0.0) {
                  gl_FragColor = vec4(0.0);
                  return;
                }`:""}

        outputHighlight();
      }
    `)),i}function U(e){return 0===e.overlays.length?null:e.overlays[a.INNER].getValidTexture(i.Water)}const k=Object.freeze(Object.defineProperty({__proto__:null,attributeLocations:I,build:G,getOverlayNormalTexture:U},Symbol.toStringTag,{value:"Module"}));export{k as C,I as a,G as b,U as g};
