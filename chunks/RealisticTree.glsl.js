/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl","../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl","../views/3d/webgl-engine/core/shaderLibrary/Offset.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl"],(function(e,a,o,l,i,r,t,d,n,s,c,g,v,u,b,h,m,p,w,f,x,y,C){"use strict";function L(e){const L=new l.ShaderBuilder,M=L.vertex.code,O=L.fragment.code;return L.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),L.include(p.PositionAttribute),L.varyings.add("vpos","vec3"),L.include(r.VisualVariables,e),L.include(v.InstancedDoublePrecision,e),L.include(d.VerticalOffset,e),0!==e.output&&7!==e.output||(L.include(m.NormalAttribute,e),L.include(o.Transform,{linearDepth:!1}),e.offsetBackfaces&&L.include(h.Offset),e.instancedColor&&L.attributes.add("instanceColor","vec4"),L.varyings.add("vNormalWorld","vec3"),L.varyings.add("localvpos","vec3"),L.include(u.TextureCoordinateAttribute,e),L.include(c.ForwardLinearDepth,e),L.include(w.SymbolColor,e),L.include(n.VertexColor,e),L.vertex.uniforms.add("externalColor","vec4"),L.varyings.add("vcolorExt","vec4"),M.add(a.glsl`
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
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
          }
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),7===e.output&&(L.include(i.Slice,e),L.include(t.DiscardOrAdjustAlpha,e),L.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),L.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&L.fragment.uniforms.add("tex","sampler2D"),L.fragment.include(C.MixExternalColor),O.add(a.glsl`
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
    `)),0===e.output&&(L.include(i.Slice,e),L.include(y.EvaluateSceneLighting,e),L.include(x.EvaluateAmbientOcclusion,e),L.include(t.DiscardOrAdjustAlpha,e),e.receiveShadows&&L.include(s.ReadShadowMap,e),L.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),L.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&L.fragment.uniforms.add("tex","sampler2D"),L.include(b.PhysicallyBasedRenderingParameters,e),L.include(g.PhysicallyBasedRendering,e),L.fragment.include(C.MixExternalColor),O.add(a.glsl`
      void main() {
        discardBySlice(vpos);
        ${e.hasColorTexture?a.glsl`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:a.glsl`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - camPos);
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
        ${a.glsl`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(-viewForward, lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(-viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?a.glsl`vec3 normalGround = normalize(vpos + localOrigin);`:a.glsl`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:a.glsl``}
        ${1===e.pbrMode||2===e.pbrMode?a.glsl`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),L.include(f.DefaultMaterialAuxiliaryPasses,e),L}var M=Object.freeze({__proto__:null,build:L});e.RealisticTreeShader=M,e.build=L}));
