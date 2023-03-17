/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../core/maybe","./mat4f64","../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/Offset.glsl","../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl","../views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeNormalTexture.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/TextureTransformUV.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl","../views/3d/webgl-engine/core/shaderModules/Float3PassUniform","../views/3d/webgl-engine/core/shaderModules/Float4PassUniform","../views/3d/webgl-engine/core/shaderModules/FloatPassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform","../views/3d/webgl-engine/lib/TransparencyPassType","../views/3d/webgl-engine/lib/VertexAttribute"],(function(e,r,a,o,l,i,s,t,n,d,c,g,u,m,h,v,b,p,w,x,f,y,T,C,P,M,L,A,O,S,N,V,$,E,D,U,F,_,B,R,I){"use strict";function j(e){const j=new _.ShaderBuilder,{vertex:z,fragment:G,varyings:W}=j;return V.addProjViewLocalOrigin(z,e),j.include(c.PositionAttribute),W.add("vpos","vec3"),j.include(A.VisualVariables,e),j.include(n.InstancedDoublePrecision,e),j.include(v.VerticalOffset,e),e.hasColorTextureTransform&&j.include(L.colorTextureUV),e.output!==i.ShaderOutput.Color&&e.output!==i.ShaderOutput.Alpha||(e.hasNormalTextureTransform&&j.include(L.normalTextureUV),e.hasEmissionTextureTransform&&j.include(L.emissiveTextureUV),e.hasOcclusionTextureTransform&&j.include(L.occlusionTextureUV),e.hasMetallicRoughnessTextureTransform&&j.include(L.metallicRoughnessTextureUV),V.addCameraPosition(z,e),j.include(d.NormalAttribute,e),j.include(t.Transform,e),e.normalType===d.NormalAttributeType.Attribute&&e.offsetBackfaces&&j.include(l.Offset),j.include(p.ComputeNormalTexture,e),j.include(h.VertexNormal,e),e.instancedColor&&j.attributes.add(I.VertexAttribute.INSTANCECOLOR,"vec4"),W.add("localvpos","vec3"),j.include(u.TextureCoordinateAttribute,e),j.include(o.ForwardLinearDepth,e),j.include(g.SymbolColor,e),j.include(m.VertexColor,e),z.uniforms.add(new E.Float4PassUniform("externalColor",(e=>e.externalColor))),W.add("vcolorExt","vec4"),e.hasMultipassTerrain&&W.add("depth","float"),e.hasModelTransformation&&z.uniforms.add(new F.Matrix4PassUniform("model",(e=>r.isSome(e.modelTransformation)?e.modelTransformation:a.IDENTITY))),z.code.add(U.glsl`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${U.glsl.float(O.symbolAlphaCutoff)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${e.normalType===d.NormalAttributeType.Attribute?U.glsl`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${e.hasModelTransformation?"model,":""} vpos);
          ${e.normalType===d.NormalAttributeType.Attribute&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${e.hasColorTextureTransform?U.glsl`forwardColorUV();`:""}
        ${e.hasNormalTextureTransform?U.glsl`forwardNormalUV();`:""}
        ${e.hasEmissionTextureTransform?U.glsl`forwardEmissiveUV();`:""}
        ${e.hasOcclusionTextureTransform?U.glsl`forwardOcclusionUV();`:""}
        ${e.hasMetallicRoughnessTextureTransform?U.glsl`forwardMetallicRoughnessUV();`:""}
      }
    `)),e.output===i.ShaderOutput.Alpha&&(j.include(s.SliceDraw,e),j.include(S.DiscardOrAdjustAlphaPass,e),j.include(y.multipassTerrainTest,e),G.uniforms.add([new D.FloatPassUniform("opacity",(e=>e.opacity)),new D.FloatPassUniform("layerOpacity",(e=>e.layerOpacity))]),e.hasColorTexture&&G.uniforms.add(new B.Texture2DPassUniform("tex",(e=>e.texture))),G.include(N.MixExternalColor),G.code.add(U.glsl`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?U.glsl`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?U.glsl`colorUV`:U.glsl`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:U.glsl`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?U.glsl`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:U.glsl`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===i.ShaderOutput.Color&&(j.include(s.SliceDraw,e),j.include(x.EvaluateSceneLighting,e),j.include(w.EvaluateAmbientOcclusion,e),j.include(S.DiscardOrAdjustAlphaPass,e),j.include(e.instancedDoublePrecision?M.ReadShadowMapPass:M.ReadShadowMapDraw,e),j.include(y.multipassTerrainTest,e),V.addCameraPosition(G,e),G.uniforms.add([z.uniforms.get("localOrigin"),new $.Float3PassUniform("ambient",(e=>e.ambient)),new $.Float3PassUniform("diffuse",(e=>e.diffuse)),new D.FloatPassUniform("opacity",(e=>e.opacity)),new D.FloatPassUniform("layerOpacity",(e=>e.layerOpacity))]),e.hasColorTexture&&G.uniforms.add(new B.Texture2DPassUniform("tex",(e=>e.texture))),j.include(P.PhysicallyBasedRenderingParameters,e),j.include(C.PhysicallyBasedRendering,e),G.include(N.MixExternalColor),j.include(T.Normals,e),x.addAmbientBoostFactor(G),x.addLightingGlobalFactor(G),f.addMainLightIntensity(G),G.code.add(U.glsl`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?U.glsl`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?U.glsl`colorUV`:U.glsl`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:U.glsl`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===d.NormalAttributeType.ScreenDerivative?U.glsl`
                vec3 normal = screenDerivativeNormal(localvpos);`:U.glsl`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===P.PBRMode.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${e.receiveShadows?"readShadowMap(vpos, linearDepth)":e.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?U.glsl`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:U.glsl`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.hasNormalTexture?U.glsl`
                mat3 tangentSpace = ${e.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);`:U.glsl`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${e.spherical?U.glsl`normalize(posWorld);`:U.glsl`vec3(0.0, 0.0, 1.0);`}

        ${e.snowCover?U.glsl`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${e.pbrMode===P.PBRMode.Normal||e.pbrMode===P.PBRMode.Schematic?U.glsl`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?U.glsl`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:U.glsl`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===R.TransparencyPassType.Color?U.glsl`gl_FragColor = premultiplyAlpha(gl_FragColor);`:""}
      }
    `)),j.include(b.DefaultMaterialAuxiliaryPasses,e),j}const z=Object.freeze(Object.defineProperty({__proto__:null,build:j},Symbol.toStringTag,{value:"Module"}));e.DefaultMaterial=z,e.build=j}));
