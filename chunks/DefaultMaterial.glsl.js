/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../views/ViewingMode","../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/Offset.glsl","../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl","../views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeNormalTexture.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/HeaderComment.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/lib/VertexAttribute"],(function(e,a,r,l,o,i,t,n,d,s,c,g,u,v,m,b,p,h,x,w,y,f,C,M,T,A,L,O,S,P,E,N){"use strict";function D(e){const D=new E.ShaderBuilder,_=D.vertex.code,$=D.fragment.code;D.include(O.HeaderComment,{name:"Default Material Shader",output:e.output}),D.vertex.uniforms.add("proj","mat4").add("view","mat4").add("cameraPosition","vec3").add("localOrigin","vec3");const B=e.hasModelTransformation;return B&&D.vertex.uniforms.add("model","mat4"),D.include(s.PositionAttribute),D.varyings.add("vpos","vec3"),D.include(A.VisualVariables,e),D.include(n.InstancedDoublePrecision,e),D.include(m.VerticalOffset,e),e.output!==o.ShaderOutput.Color&&e.output!==o.ShaderOutput.Alpha||(D.include(d.NormalAttribute,e),D.include(t.Transform,{linearDepth:!1,hasModelTransformation:B}),e.normalType===d.NormalAttributeType.Attribute&&e.offsetBackfaces&&D.include(l.Offset),D.include(h.ComputeNormalTexture,e),D.include(v.VertexNormal,e),e.instancedColor&&D.attributes.add(N.VertexAttribute.INSTANCECOLOR,"vec4"),D.varyings.add("localvpos","vec3"),D.include(g.TextureCoordinateAttribute,e),D.include(r.ForwardLinearDepth,e),D.include(c.SymbolColor,e),D.include(u.VertexColor,e),D.vertex.uniforms.add("externalColor","vec4"),D.varyings.add("vcolorExt","vec4"),e.multipassTerrainEnabled&&D.varyings.add("depth","float"),_.add(P.glsl`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${P.glsl.float(L.symbolAlphaCutoff)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${e.normalType===d.NormalAttributeType.Attribute?P.glsl`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.vertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${B?"model,":""} vpos);
          ${e.normalType===d.NormalAttributeType.Attribute&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),e.output===o.ShaderOutput.Alpha&&(D.include(i.Slice,e),D.include(L.DiscardOrAdjustAlpha,e),e.multipassTerrainEnabled&&(D.fragment.include(p.ReadLinearDepth),D.include(y.multipassTerrainTest,e)),D.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&D.fragment.uniforms.add("tex","sampler2D"),D.fragment.include(S.MixExternalColor),$.add(P.glsl`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?P.glsl`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:P.glsl`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?P.glsl`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:P.glsl`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===o.ShaderOutput.Color&&(D.include(i.Slice,e),D.include(w.EvaluateSceneLighting,e),D.include(x.EvaluateAmbientOcclusion,e),D.include(L.DiscardOrAdjustAlpha,e),e.receiveShadows&&D.include(T.ReadShadowMap,e),e.multipassTerrainEnabled&&(D.fragment.include(p.ReadLinearDepth),D.include(y.multipassTerrainTest,e)),D.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&D.fragment.uniforms.add("tex","sampler2D"),D.include(M.PhysicallyBasedRenderingParameters,e),D.include(C.PhysicallyBasedRendering,e),D.fragment.include(S.MixExternalColor),D.include(f.Normals,e),$.add(P.glsl`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?P.glsl`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:P.glsl`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===d.NormalAttributeType.ScreenDerivative?P.glsl`
        vec3 normal = screenDerivativeNormal(localvpos);`:P.glsl`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===M.PBRMode.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.viewingMode===a.ViewingMode.Global?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?P.glsl`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:P.glsl`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${e.hasNormalTexture?P.glsl`
              mat3 tangentSpace = ${e.vertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${e.pbrMode===M.PBRMode.Normal||e.pbrMode===M.PBRMode.Schematic?e.viewingMode===a.ViewingMode.Global?P.glsl`vec3 normalGround = normalize(vpos + localOrigin);`:P.glsl`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:P.glsl``}
        ${e.pbrMode===M.PBRMode.Normal||e.pbrMode===M.PBRMode.Schematic?P.glsl`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.oitEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),D.include(b.DefaultMaterialAuxiliaryPasses,e),D}const _=Object.freeze(Object.defineProperty({__proto__:null,build:D},Symbol.toStringTag,{value:"Module"}));e.DefaultMaterialShader=_,e.build=D}));
