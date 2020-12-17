/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl","../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl","../views/3d/webgl-engine/core/shaderLibrary/Offset.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl","../views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeNormalTexture.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/HeaderComment.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl"],(function(e,a,l,r,o,i,t,d,n,s,c,g,v,u,m,b,h,p,x,y,w,f,C,L,M,O,P){"use strict";function A(e){const A=new r.ShaderBuilder,S=A.vertex.code,E=A.fragment.code;return A.include(O.HeaderComment,{name:"Default Material Shader",output:e.output}),A.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),A.include(p.PositionAttribute),A.varyings.add("vpos","vec3"),A.include(i.VisualVariables,e),A.include(v.InstancedDoublePrecision,e),A.include(d.VerticalOffset,e),0!==e.output&&7!==e.output||(A.include(h.NormalAttribute,e),A.include(l.Transform,{linearDepth:!1}),0===e.normalType&&e.offsetBackfaces&&A.include(b.Offset),A.include(f.ComputeNormalTexture,e),A.include(y.VertexNormal,e),e.instancedColor&&A.attributes.add("instanceColor","vec4"),A.varyings.add("localvpos","vec3"),A.include(u.TextureCoordinateAttribute,e),A.include(c.ForwardLinearDepth,e),A.include(x.SymbolColor,e),A.include(n.VertexColor,e),A.vertex.uniforms.add("externalColor","vec4"),A.varyings.add("vcolorExt","vec4"),S.add(a.glsl`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${a.glsl.float(t.symbolAlphaCutoff)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${0===e.normalType?a.glsl`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.vertexTangets?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${0===e.normalType&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
        }
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),7===e.output&&(A.include(o.Slice,e),A.include(t.DiscardOrAdjustAlpha,e),A.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&A.fragment.uniforms.add("tex","sampler2D"),A.fragment.include(P.MixExternalColor),E.add(a.glsl`
      void main() {
        discardBySlice(vpos);
        ${e.hasColorTexture?a.glsl`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:a.glsl`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?a.glsl`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:a.glsl`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(A.include(o.Slice,e),A.include(L.EvaluateSceneLighting,e),A.include(C.EvaluateAmbientOcclusion,e),A.include(t.DiscardOrAdjustAlpha,e),e.receiveShadows&&A.include(s.ReadShadowMap,e),A.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&A.fragment.uniforms.add("tex","sampler2D"),A.include(m.PhysicallyBasedRenderingParameters,e),A.include(g.PhysicallyBasedRendering,e),A.fragment.include(P.MixExternalColor),A.include(M.Normals,e),E.add(a.glsl`
      void main() {
        discardBySlice(vpos);
        ${e.hasColorTexture?a.glsl`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:a.glsl`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${3===e.normalType?a.glsl`
        vec3 normal = screenDerivativeNormal(localvpos);`:a.glsl`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = _oldHeuristicLighting(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?a.glsl`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:a.glsl`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${e.hasNormalTexture?a.glsl`
              mat3 tangentSpace = ${e.vertexTangets?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?a.glsl`vec3 normalGround = normalize(vpos + localOrigin);`:a.glsl`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:a.glsl``}
        ${1===e.pbrMode||2===e.pbrMode?a.glsl`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),A.include(w.DefaultMaterialAuxiliaryPasses,e),A}var S=Object.freeze({__proto__:null,build:A});e.DefaultMaterialShader=S,e.build=A}));
