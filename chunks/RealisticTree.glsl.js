/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../views/ViewingMode","../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/Offset.glsl","../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl","../views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/lib/VertexAttribute"],(function(e,a,i,r,l,o,t,d,n,s,c,g,v,u,b,h,p,m,w,f,x,y,C,M,L,O,A,P){"use strict";function S(e){const S=new A.ShaderBuilder,E=S.vertex.code,T=S.fragment.code;return S.vertex.uniforms.add("proj","mat4").add("view","mat4").add("cameraPosition","vec3").add("localOrigin","vec3"),S.include(s.PositionAttribute),S.varyings.add("vpos","vec3"),S.include(C.VisualVariables,e),S.include(d.InstancedDoublePrecision,e),S.include(u.VerticalOffset,e),e.output!==l.ShaderOutput.Color&&e.output!==l.ShaderOutput.Alpha||(S.include(n.NormalAttribute,e),S.include(t.Transform,{linearDepth:!1}),e.offsetBackfaces&&S.include(r.Offset),e.instancedColor&&S.attributes.add(P.VertexAttribute.INSTANCECOLOR,"vec4"),S.varyings.add("vNormalWorld","vec3"),S.varyings.add("localvpos","vec3"),e.multipassTerrainEnabled&&S.varyings.add("depth","float"),S.include(g.TextureCoordinateAttribute,e),S.include(i.ForwardLinearDepth,e),S.include(c.SymbolColor,e),S.include(v.VertexColor,e),S.vertex.uniforms.add("externalColor","vec4"),S.varyings.add("vcolorExt","vec4"),E.add(O.glsl`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${O.glsl.float(M.symbolAlphaCutoff)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${e.multipassTerrainEnabled?O.glsl`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===l.ShaderOutput.Alpha&&(S.include(o.Slice,e),S.include(M.DiscardOrAdjustAlpha,e),e.multipassTerrainEnabled&&(S.fragment.include(h.ReadLinearDepth),S.include(w.multipassTerrainTest,e)),S.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),S.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&S.fragment.uniforms.add("tex","sampler2D"),S.fragment.include(L.MixExternalColor),T.add(O.glsl`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?O.glsl`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?O.glsl`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:O.glsl`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?O.glsl`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:O.glsl`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===l.ShaderOutput.Color&&(S.include(o.Slice,e),S.include(m.EvaluateSceneLighting,e),S.include(p.EvaluateAmbientOcclusion,e),S.include(M.DiscardOrAdjustAlpha,e),e.receiveShadows&&S.include(y.ReadShadowMap,e),e.multipassTerrainEnabled&&(S.fragment.include(h.ReadLinearDepth),S.include(w.multipassTerrainTest,e)),S.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),S.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&S.fragment.uniforms.add("tex","sampler2D"),S.include(x.PhysicallyBasedRenderingParameters,e),S.include(f.PhysicallyBasedRendering,e),S.fragment.include(L.MixExternalColor),T.add(O.glsl`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?O.glsl`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?O.glsl`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:O.glsl`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===x.PBRMode.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.viewingMode===a.ViewingMode.Global?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?O.glsl`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:O.glsl`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${O.glsl`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${e.pbrMode===x.PBRMode.Normal||e.pbrMode===x.PBRMode.Schematic?e.viewingMode===a.ViewingMode.Global?O.glsl`vec3 normalGround = normalize(vpos + localOrigin);`:O.glsl`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:O.glsl``}
        ${e.pbrMode===x.PBRMode.Normal||e.pbrMode===x.PBRMode.Schematic?O.glsl`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.oitEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),S.include(b.DefaultMaterialAuxiliaryPasses,e),S}const E=Object.freeze(Object.defineProperty({__proto__:null,build:S},Symbol.toStringTag,{value:"Module"}));e.RealisticTreeShader=E,e.build=S}));
