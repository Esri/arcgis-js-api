/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/Offset.glsl","../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl","../views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl","../views/3d/webgl-engine/core/shaderModules/Float3PassUniform","../views/3d/webgl-engine/core/shaderModules/Float4PassUniform","../views/3d/webgl-engine/core/shaderModules/FloatPassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform","../views/3d/webgl-engine/lib/TransparencyPassType","../views/3d/webgl-engine/lib/VertexAttribute"],(function(e,a,r,i,o,l,t,s,n,d,c,g,u,v,h,b,w,p,m,x,y,f,C,P,L,M,O,A,T,S,F,D,E,_){"use strict";function $(e){const $=new F.ShaderBuilder,{vertex:B,fragment:V,varyings:N}=$;return M.addProjViewLocalOrigin(B,e),$.include(n.PositionAttribute),N.add("vpos","vec3"),$.include(f.VisualVariables,e),$.include(t.InstancedDoublePrecision,e),$.include(u.VerticalOffset,e),e.output!==i.ShaderOutput.Color&&e.output!==i.ShaderOutput.Alpha||(M.addCameraPosition($.vertex,e),$.include(s.NormalAttribute,e),$.include(l.Transform,e),e.offsetBackfaces&&$.include(r.Offset),e.instancedColor&&$.attributes.add(_.VertexAttribute.INSTANCECOLOR,"vec4"),N.add("vNormalWorld","vec3"),N.add("localvpos","vec3"),e.hasMultipassTerrain&&N.add("depth","float"),$.include(c.TextureCoordinateAttribute,e),$.include(a.ForwardLinearDepth,e),$.include(d.SymbolColor,e),$.include(g.VertexColor,e),B.uniforms.add(new A.Float4PassUniform("externalColor",(e=>e.externalColor))),N.add("vcolorExt","vec4"),B.code.add(S.glsl`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${S.glsl.float(C.symbolAlphaCutoff)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${e.hasMultipassTerrain?S.glsl`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===i.ShaderOutput.Alpha&&($.include(o.SliceDraw,e),$.include(P.DiscardOrAdjustAlphaPass,e),$.include(p.multipassTerrainTest,e),V.uniforms.add([new T.FloatPassUniform("opacity",(e=>e.opacity)),new T.FloatPassUniform("layerOpacity",(e=>e.layerOpacity))]),e.hasColorTexture&&V.uniforms.add(new D.Texture2DPassUniform("tex",(e=>e.texture))),V.include(L.MixExternalColor),V.code.add(S.glsl`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?S.glsl`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?S.glsl`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?S.glsl`colorUV`:S.glsl`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:S.glsl`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?S.glsl`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:S.glsl`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===i.ShaderOutput.Color&&($.include(o.SliceDraw,e),$.include(b.EvaluateSceneLighting,e),$.include(h.EvaluateAmbientOcclusion,e),$.include(P.DiscardOrAdjustAlphaPass,e),$.include(e.instancedDoublePrecision?y.ReadShadowMapPass:y.ReadShadowMapDraw,e),$.include(p.multipassTerrainTest,e),M.addCameraPosition($.fragment,e),w.addMainLightDirection(V),b.addAmbientBoostFactor(V),b.addLightingGlobalFactor(V),V.uniforms.add([B.uniforms.get("localOrigin"),B.uniforms.get("view"),new O.Float3PassUniform("ambient",(e=>e.ambient)),new O.Float3PassUniform("diffuse",(e=>e.diffuse)),new T.FloatPassUniform("opacity",(e=>e.opacity)),new T.FloatPassUniform("layerOpacity",(e=>e.layerOpacity))]),e.hasColorTexture&&V.uniforms.add(new D.Texture2DPassUniform("tex",(e=>e.texture))),$.include(x.PhysicallyBasedRenderingParameters,e),$.include(m.PhysicallyBasedRendering,e),V.include(L.MixExternalColor),$.extensions.add("GL_OES_standard_derivatives"),w.addMainLightIntensity(V),V.code.add(S.glsl`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?S.glsl`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?S.glsl`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?S.glsl`colorUV`:S.glsl`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:S.glsl`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===x.PBRMode.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?S.glsl`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:S.glsl`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.snowCover?S.glsl`albedo = mix(albedo, vec3(1), 0.9);`:S.glsl``}
        ${S.glsl`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${e.pbrMode===x.PBRMode.Normal||e.pbrMode===x.PBRMode.Schematic?e.spherical?S.glsl`vec3 normalGround = normalize(vpos + localOrigin);`:S.glsl`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:S.glsl``}
        ${e.pbrMode===x.PBRMode.Normal||e.pbrMode===x.PBRMode.Schematic?S.glsl`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?S.glsl`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:S.glsl`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===E.TransparencyPassType.Color?S.glsl`gl_FragColor = premultiplyAlpha(gl_FragColor);`:S.glsl``}
      }
    `)),$.include(v.DefaultMaterialAuxiliaryPasses,e),$}const B=Object.freeze(Object.defineProperty({__proto__:null,build:$},Symbol.toStringTag,{value:"Module"}));e.RealisticTree=B,e.build=$}));
