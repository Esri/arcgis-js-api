/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{ForwardLinearDepth as e}from"../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl.js";import{Offset as o}from"../views/3d/webgl-engine/core/shaderLibrary/Offset.glsl.js";import{ShaderOutput as r}from"../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions.js";import{SliceDraw as i}from"../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js";import{Transform as a}from"../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl.js";import{InstancedDoublePrecision as t}from"../views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl.js";import{NormalAttribute as l}from"../views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js";import{PositionAttribute as s}from"../views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl.js";import{SymbolColor as n}from"../views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl.js";import{TextureCoordinateAttribute as d}from"../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js";import{VertexColor as c}from"../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl.js";import{VerticalOffset as g}from"../views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl.js";import{DefaultMaterialAuxiliaryPasses as m}from"../views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl.js";import{EvaluateAmbientOcclusion as v}from"../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl.js";import{EvaluateSceneLighting as p}from"../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl.js";import{multipassTerrainTest as b}from"../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl.js";import{PhysicallyBasedRendering as h}from"../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl.js";import{PhysicallyBasedRenderingParameters as u,PBRMode as w}from"../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js";import{ReadShadowMapPass as f,ReadShadowMapDraw as x}from"../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl.js";import{VisualVariables as y}from"../views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl.js";import{symbolAlphaCutoff as C}from"../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff.js";import{DiscardOrAdjustAlphaPass as L}from"../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl.js";import{MixExternalColor as M}from"../views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl.js";import{addProjViewLocalOrigin as j,addCameraPosition as O}from"../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js";import{Float3PassUniform as A}from"../views/3d/webgl-engine/core/shaderModules/Float3PassUniform.js";import{Float4PassUniform as P}from"../views/3d/webgl-engine/core/shaderModules/Float4PassUniform.js";import{FloatPassUniform as F}from"../views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js";import{glsl as S}from"../views/3d/webgl-engine/core/shaderModules/interfaces.js";import{Matrix4Uniform as E}from"../views/3d/webgl-engine/core/shaderModules/Matrix4Uniform.js";import{ShaderBuilder as _}from"../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js";import{Texture2DPassUniform as $}from"../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js";import{TransparencyPassType as T}from"../views/3d/webgl-engine/lib/basicInterfaces.js";import{VertexAttribute as N}from"../views/3d/webgl-engine/lib/VertexAttribute.js";import{ambientBoost as D}from"../views/3d/webgl-engine/lighting/SceneLighting.js";function B(B){const V=new _,I=V.vertex.code,R=V.fragment.code,z=j(V,B);return V.include(s),V.varyings.add("vpos","vec3"),V.include(y,B),V.include(t,B),V.include(g,B),B.output!==r.Color&&B.output!==r.Alpha||(O(V.vertex,B),V.include(l,B),V.include(a),B.offsetBackfaces&&V.include(o),B.instancedColor&&V.attributes.add(N.INSTANCECOLOR,"vec4"),V.varyings.add("vNormalWorld","vec3"),V.varyings.add("localvpos","vec3"),B.hasMultipassTerrain&&V.varyings.add("depth","float"),V.include(d,B),V.include(e,B),V.include(n,B),V.include(c,B),V.vertex.uniforms.add(new P("externalColor",(e=>e.externalColor))),V.varyings.add("vcolorExt","vec4"),I.add(S`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${B.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${S.float(C)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${B.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${B.hasMultipassTerrain?S`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),B.output===r.Alpha&&(V.include(i,B),V.include(L,B),V.include(b,B),V.fragment.uniforms.add([new F("opacity",(e=>e.opacity)),new F("layerOpacity",(e=>e.layerOpacity)),new E("view")]),B.hasColorTexture&&V.fragment.uniforms.add(new $("tex",(e=>e.texture))),V.fragment.include(M),R.add(S`
      void main() {
        discardBySlice(vpos);
        ${B.hasMultipassTerrain?S`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${B.hasColorTexture?S`
                vec4 texColor = texture2D(tex, vuv0);
                ${B.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:S`vec4 texColor = vec4(1.0);`}
        ${B.hasVertexColors?S`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:S`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        gl_FragColor = vec4(opacity_);
      }
    `)),B.output===r.Color&&(V.include(i,B),V.include(p,B),V.include(v,B),V.include(L,B),V.include(B.instancedDoublePrecision?f:x,B),V.include(b,B),O(V.fragment,B),V.fragment.uniforms.add([z,new A("ambient",(e=>e.ambient)),new A("diffuse",(e=>e.diffuse)),new F("opacity",(e=>e.opacity)),new F("layerOpacity",(e=>e.layerOpacity)),new E("view"),new F("lightingGlobalFactor",((e,o)=>o.lighting.globalFactor)),new A("lightingMainIntensity",((e,o)=>o.lighting.mainLight.intensity))]),V.fragment.constants.add("ambientBoostFactor","float",D),B.hasColorTexture&&V.fragment.uniforms.add(new $("tex",(e=>e.texture))),V.include(u,B),V.include(h,B),V.fragment.include(M),V.extensions.add("GL_OES_standard_derivatives"),R.add(S`
      void main() {
        discardBySlice(vpos);
        ${B.hasMultipassTerrain?S`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${B.hasColorTexture?S`
                vec4 texColor = texture2D(tex, vuv0);
                ${B.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:S`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${B.pbrMode===w.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${B.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":B.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${B.hasVertexColors?S`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:S`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${B.snowCover?S`albedo = mix(albedo, vec3(1), 0.9);`:S``}
        ${S`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * lightingMainIntensity;`}
        ${B.pbrMode===w.Normal||B.pbrMode===w.Schematic?B.spherical?S`vec3 normalGround = normalize(vpos + localOrigin);`:S`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:S``}
        ${B.pbrMode===w.Normal||B.pbrMode===w.Schematic?S`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
                ${B.snowCover?S`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:S`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${B.transparencyPassType===T.Color?S`gl_FragColor = premultiplyAlpha(gl_FragColor);`:S``}
      }
    `)),V.include(m,B),V}const V=Object.freeze(Object.defineProperty({__proto__:null,build:B},Symbol.toStringTag,{value:"Module"}));export{V as R,B as b};
