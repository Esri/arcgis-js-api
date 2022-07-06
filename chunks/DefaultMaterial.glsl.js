/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isSome as e}from"../core/maybe.js";import{I as r}from"./mat4f64.js";import{ForwardLinearDepth as o}from"../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl.js";import{Offset as a}from"../views/3d/webgl-engine/core/shaderLibrary/Offset.glsl.js";import{ShaderOutput as i}from"../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions.js";import{SliceDraw as t}from"../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js";import{Transform as l}from"../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl.js";import{InstancedDoublePrecision as s}from"../views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl.js";import{NormalAttribute as n,NormalAttributeType as d}from"../views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js";import{PositionAttribute as c}from"../views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl.js";import{SymbolColor as m}from"../views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl.js";import{TextureCoordinateAttribute as g}from"../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js";import{VertexColor as p}from"../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl.js";import{VertexNormal as v}from"../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl.js";import{VerticalOffset as u}from"../views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl.js";import{DefaultMaterialAuxiliaryPasses as h}from"../views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl.js";import{ComputeNormalTexture as b}from"../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeNormalTexture.glsl.js";import{EvaluateAmbientOcclusion as f}from"../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl.js";import{EvaluateSceneLighting as w}from"../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl.js";import{multipassTerrainTest as x}from"../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl.js";import{Normals as y}from"../views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl.js";import{PhysicallyBasedRendering as C}from"../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl.js";import{PhysicallyBasedRenderingParameters as j,PBRMode as M}from"../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js";import{ReadShadowMapPass as L,ReadShadowMapDraw as T}from"../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl.js";import{VisualVariables as P}from"../views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl.js";import{symbolAlphaCutoff as O}from"../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff.js";import{DiscardOrAdjustAlphaPass as A}from"../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl.js";import{HeaderComment as S}from"../views/3d/webgl-engine/core/shaderLibrary/util/HeaderComment.glsl.js";import{MixExternalColor as $}from"../views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl.js";import{addProjViewLocalOrigin as N,addCameraPosition as E}from"../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js";import{Float3PassUniform as D}from"../views/3d/webgl-engine/core/shaderModules/Float3PassUniform.js";import{Float4PassUniform as _}from"../views/3d/webgl-engine/core/shaderModules/Float4PassUniform.js";import{FloatPassUniform as F}from"../views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js";import{glsl as V}from"../views/3d/webgl-engine/core/shaderModules/interfaces.js";import{Matrix4PassUniform as B}from"../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform.js";import{ShaderBuilder as I}from"../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js";import{Texture2DPassUniform as z}from"../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js";import{TransparencyPassType as G}from"../views/3d/webgl-engine/lib/basicInterfaces.js";import{VertexAttribute as R}from"../views/3d/webgl-engine/lib/VertexAttribute.js";import{ambientBoost as U}from"../views/3d/webgl-engine/lighting/SceneLighting.js";function k(k){const W=new I,H=W.vertex.code,q=W.fragment.code;W.include(S,{name:"Default Material Shader",output:k.output});const J=N(W,k);return W.include(c),W.varyings.add("vpos","vec3"),W.include(P,k),W.include(s,k),W.include(u,k),k.output!==i.Color&&k.output!==i.Alpha||(E(W.vertex,k),W.include(n,k),W.include(l,{linearDepth:!1,hasModelTransformation:k.hasModelTransformation}),k.normalType===d.Attribute&&k.offsetBackfaces&&W.include(a),W.include(b,k),W.include(v,k),k.instancedColor&&W.attributes.add(R.INSTANCECOLOR,"vec4"),W.varyings.add("localvpos","vec3"),W.include(g,k),W.include(o,k),W.include(m,k),W.include(p,k),W.vertex.uniforms.add(new _("externalColor",(e=>e.externalColor))),W.varyings.add("vcolorExt","vec4"),k.hasMultipassTerrain&&W.varyings.add("depth","float"),k.hasModelTransformation&&W.vertex.uniforms.add(new B("model",(o=>e(o.modelTransformation)?o.modelTransformation:r))),H.add(V`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${k.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${V.float(O)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${k.normalType===d.Attribute?V`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${k.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${k.hasModelTransformation?"model,":""} vpos);
          ${k.normalType===d.Attribute&&k.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${k.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),k.output===i.Alpha&&(W.include(t,k),W.include(A,k),W.include(x,k),W.fragment.uniforms.add([new F("opacity",(e=>e.opacity)),new F("layerOpacity",(e=>e.layerOpacity))]),k.hasColorTexture&&W.fragment.uniforms.add(new z("tex",(e=>e.texture))),W.fragment.include($),q.add(V`
      void main() {
        discardBySlice(vpos);
        ${k.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${k.hasColorTexture?V`
                vec4 texColor = texture2D(tex, vuv0);
                ${k.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:V`vec4 texColor = vec4(1.0);`}
        ${k.hasVertexColors?V`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:V`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        gl_FragColor = vec4(opacity_);
      }
    `)),k.output===i.Color&&(W.include(t,k),W.include(w,k),W.include(f,k),W.include(A,k),W.include(k.instancedDoublePrecision?L:T,k),W.include(x,k),E(W.fragment,k),W.fragment.uniforms.add([J,new D("ambient",(e=>e.ambient)),new D("diffuse",(e=>e.diffuse)),new F("opacity",(e=>e.opacity)),new F("layerOpacity",(e=>e.layerOpacity)),new F("lightingGlobalFactor",((e,r)=>r.lighting.globalFactor)),new D("lightingMainIntensity",((e,r)=>r.lighting.mainLight.intensity))]),W.fragment.constants.add("ambientBoostFactor","float",U),k.hasColorTexture&&W.fragment.uniforms.add(new z("tex",(e=>e.texture))),W.include(j,k),W.include(C,k),W.fragment.include($),W.include(y,k),q.add(V`
      void main() {
        discardBySlice(vpos);
        ${k.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${k.hasColorTexture?V`
                vec4 texColor = texture2D(tex, vuv0);
                ${k.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:V`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${k.normalType===d.ScreenDerivative?V`
                vec3 normal = screenDerivativeNormal(localvpos);`:V`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${k.pbrMode===M.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        ${k.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":k.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${k.hasVertexColors?V`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:V`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${k.hasNormalTexture?V`
                mat3 tangentSpace = ${k.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);`:V`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${k.spherical?V`normalize(vpos + localOrigin);`:V`vec3(0.0, 0.0, 1.0);`}

        ${k.snowCover?V`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${k.pbrMode===M.Normal||k.pbrMode===M.Schematic?V`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
                ${k.snowCover?V`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:V`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${k.transparencyPassType===G.Color?V`gl_FragColor = premultiplyAlpha(gl_FragColor);`:""}
      }
    `)),W.include(h,k),W}const W=Object.freeze(Object.defineProperty({__proto__:null,build:k},Symbol.toStringTag,{value:"Module"}));export{W as D,k as b};
