/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/NormalUtils.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/HeaderComment.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexTangent.glsl","../views/3d/webgl-engine/core/shaderLibrary/terrain/Overlay.glsl","../views/3d/webgl-engine/core/shaderLibrary/terrain/Skirts.glsl","../views/3d/webgl-engine/core/shaderLibrary/terrain/TerrainTexture.glsl"],(function(e,o,r,a,i,l,t,n,s,v,c,d,g,m){"use strict";function u(e){const u=new a.ShaderBuilder;if(u.include(v.HeaderComment,{name:"Terrain Shader",output:e.output}),u.include(g.Skirts),u.attributes.add("position","vec3"),u.attributes.add("uv0","vec2"),u.vertex.uniforms.add("proj","mat4").add("view","mat4").add("origin","vec3").add("skirtScale","float"),0===e.output){u.include(r.Transform,{linearDepth:!1}),u.include(n.NormalUtils,e),u.include(m.TerrainTexture,e);const a=0!==e.overlayMode,l=2===e.overlayMode;a&&u.include(d.Overlay,{pbrMode:3,useCustomDTRExponentForWater:!1,ssrEnabled:e.ssrEnabled,highStepCount:e.highStepCount}),l&&u.include(c.VertexTangent,e),u.varyings.add("vnormal","vec3"),u.varyings.add("vpos","vec3"),u.vertex.uniforms.add("viewNormal","mat4"),e.receiveShadows&&u.varyings.add("linearDepth","float"),e.tileBorders&&u.varyings.add("vuv","vec2"),e.atmosphere&&(u.vertex.uniforms.add("lightingMainDirection","vec3"),u.varyings.add("wnormal","vec3"),u.varyings.add("wlight","vec3")),e.screenSizePerspective&&(u.vertex.uniforms.add("screenSizePerspective","vec4"),u.varyings.add("screenSizeDistanceToCamera","float"),u.varyings.add("screenSizeCosAngle","float")),u.vertex.code.add(o.glsl`
      void main(void) {
        vpos = position;
        vnormal = getLocalUp(vpos, origin);

        vec2 uv = uv0;
        vpos = applySkirts(uv, vpos, vnormal, skirtScale);
        ${e.atmosphere?o.glsl`
        wnormal = (viewNormal * vec4(normalize(vpos+origin), 1.0)).xyz;
        wlight = (view  * vec4(-lightingMainDirection, 1.0)).xyz;`:""}
        ${e.tileBorders?o.glsl`vuv = uv;`:""}
        ${e.screenSizePerspective?o.glsl`
        vec3 viewPos = (view * vec4(vpos, 1.0)).xyz;
        screenSizeDistanceToCamera = length(viewPos);
        vec3 viewSpaceNormal = (viewNormal * vec4(normalize(vpos + origin), 1.0)).xyz;
        screenSizeCosAngle = abs(viewSpaceNormal.z);`:""}
        gl_Position = transformPosition(proj, view, vpos);
        ${e.receiveShadows?o.glsl`linearDepth = gl_Position.w;`:""}
        forwardTextureCoordinates(uv);
        ${a?o.glsl`setOverlayVTC(uv);`:""}
        ${l?o.glsl`forwardVertexTangent(vnormal);`:o.glsl``}
      }
    `),u.extensions.add("GL_OES_standard_derivatives"),u.extensions.add("GL_EXT_shader_texture_lod"),u.include(i.Slice,e),u.include(s.EvaluateSceneLighting,e),u.fragment.uniforms.add("camPos","vec3").add("viewDirection","vec3").add("ssaoTex","sampler2D").add("viewportPixelSz","vec4").add("opacity","float"),e.screenSizePerspective&&u.fragment.uniforms.add("screenSizePerspective","vec4"),l&&(u.fragment.uniforms.add("ovInnerWaterTex","sampler2D"),u.fragment.uniforms.add("ovOuterWaterTex","sampler2D"),u.fragment.uniforms.add("view","mat4")),u.fragment.code.add(o.glsl`
      const vec3 ambient = vec3(0.2, 0.2, 0.2);
      const vec3 diffuse = vec3(0.8, 0.8, 0.8);
      const float diffuseHardness = 2.5;
      const float sliceOpacity = 0.2;

      float lum(vec3 c) {
        float max = max(max(c.r, c.g), c.b);
        float min = min(min(c.r, c.g), c.b);
        return (min + max) * 0.5;
      }
      `),e.atmosphere&&u.fragment.code.add(o.glsl`
      vec3 atmosphere(vec3 lightPos, vec3 normal, vec3 view) {
        vec3 surfaceColor   = vec3(0.0);
        vec3 fuzzySpecColor = vec3(1.0);
        vec3 subColor       = vec3(0.0);
        float rollOff       = 1.0;

        vec3 Ln = normalize(lightPos);
        vec3 Nn = normalize(normal);
        vec3 Hn = normalize(view + Ln);

        float ldn = dot(Ln, Nn);
        float diffComp = max(0.0, ldn);
        // clamp necessary here because values might cause flickering: #21549
        float vdn = clamp(1.0 - dot(view, Nn), 0.0, 1.0);
        float ndv = dot(view, Ln);

        vec3 diffContrib = surfaceColor * diffComp;
        float subLamb = max(0.0, smoothstep(-rollOff, 1.0, ldn) - smoothstep(0.0, 1.0, ldn));

        vec3 subContrib = subLamb * subColor;
        vec3 vecColor = vec3(vdn);

        vec3 diffuseContrib = (subContrib + diffContrib);
        vec3 specularContrib = (vecColor * fuzzySpecColor);

        return (diffContrib + specularContrib) * rollOff;
      }
      `),u.fragment.code.add(o.glsl`
      void main() {
        ${e.receiveShadows?o.glsl`float shadow = readShadowMap(vpos, linearDepth);`:o.glsl`float shadow = 0.0;`}
        float vndl = dot(normalize(vnormal), -lightingMainDirection);
        float k = smoothstep(0.0, 1.0, clamp(vndl*diffuseHardness, 0.0, 1.0));
        vec3 d = (1.0 - shadow/1.8) * diffuse * k;

        float ssao = viewportPixelSz.w < .0 ? 1.0 : texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
        vec4 tileColor = getTileColor() * opacity;
        ${a?o.glsl`
            vec4 overlayColorOpaque = getOverlayColor(ovInnerColorTex, ovOuterColorTex, vtcOverlay);
            vec4 overlayColor = overlayOpacity * overlayColorOpaque;
            vec4 groundColor = tileColor;
            tileColor = tileColor * (1.0 - overlayColor.a) + overlayColor;`:""}
        if (rejectBySlice(vpos)) {
          tileColor *= sliceOpacity;
        }
        vec3 atm = vec3(0.0);
        ${e.atmosphere?o.glsl`
            float ndotl = max(0.0, min(1.0, vndl));
            atm = atmosphere(wlight, wnormal, -viewDirection);
            atm *= max(0.0, min(1.0, (1.0-lum(tileColor.rgb)*1.5))); //avoid atmosphere on bright base maps
            atm *= max(0.0, min(1.0, ndotl*2.0)); // avoid atmosphere on dark side of the globe
            atm *= tileColor.a; // premultiply with tile alpha`:""}
        vec3 albedo = atm + tileColor.rgb;
        vec3 normal = normalize(vnormal);

        // heuristic shading function used in the old terrain, now used to add ambient lighting
        float additionalAmbientScale = smoothstep(0.0, 1.0, clamp(vndl*2.5, 0.0, 1.0));
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        gl_FragColor = vec4(evaluateSceneLightingExt(normal, albedo, shadow, 1.0 - ssao, additionalLight), tileColor.a);
        ${l?o.glsl`
            vec4 overlayWaterMask = getOverlayColor(ovInnerWaterTex, ovOuterWaterTex, vtcOverlay);
            float waterNormalLength = length(overlayWaterMask);
            if (waterNormalLength > 0.95) {
              mat3 tbnMatrix = mat3(tbnTangent, tbnBiTangent, vnormal);
              vec4 waterOverlayColor = vec4(overlayColor.w > 0.0 ? overlayColorOpaque.xyz/overlayColor.w : vec3(1.0), overlayColor.w);
              vec4 viewPosition = view*vec4(vpos, 1.0);
              vec4 waterColorLinear = getOverlayWaterColor(overlayWaterMask, waterOverlayColor, -normalize(vpos - camPos), shadow, vnormal, tbnMatrix, viewPosition.xyz);
              vec4 waterColorNonLinear = delinearizeGamma(vec4(waterColorLinear.xyz, 1.0));
              // un-gamma the ground color to mix in linear space
              gl_FragColor = mix(groundColor, waterColorNonLinear, waterColorLinear.w);
            }`:""}
        ${e.screenSizePerspective?o.glsl`
          float perspectiveScale = screenSizePerspectiveScaleFloat(1.0, screenSizeCosAngle, screenSizeDistanceToCamera, screenSizePerspective);
          if (perspectiveScale <= 0.25) {
            gl_FragColor = mix(gl_FragColor, vec4(1.0, 0.0, 0.0, 1.0), perspectiveScale * 4.0);
          }
          else if (perspectiveScale <= 0.5) {
            gl_FragColor = mix(gl_FragColor, vec4(0.0, 0.0, 1.0, 1.0), (perspectiveScale - 0.25) * 4.0);
          }
          else if (perspectiveScale >= 0.99) {
            gl_FragColor = mix(gl_FragColor, vec4(0.0, 1.0, 0.0, 1.0), 0.2);
          }
          else {
            gl_FragColor = mix(gl_FragColor, vec4(1.0, 0.0, 1.0, 1.0), (perspectiveScale - 0.5) * 2.0);
          }`:""}
        ${e.tileBorders?o.glsl`
            vec2 dVuv = fwidth(vuv);
            vec2 edgeFactors = smoothstep(vec2(0.0), 1.5 * dVuv, min(vuv, 1.0 - vuv));
            float edgeFactor = 1.0 - min(edgeFactors.x, edgeFactors.y);
            gl_FragColor = mix(gl_FragColor, vec4(1.0, 0.0, 0.0, 1.0), edgeFactor);`:""}
        gl_FragColor = highlightSlice(gl_FragColor, vpos);
      }
    `)}return 1!==e.output&&3!==e.output||(u.include(r.Transform,{linearDepth:!0}),u.include(t.OutputDepth,{output:e.output}),u.include(n.NormalUtils,e),u.varyings.add("linearDepth","float"),u.vertex.uniforms.add("nearFar","vec2"),u.vertex.code.add(o.glsl`
        void main(void) {
          vec3 normal = getLocalUp(position, origin);
          vec2 uv = uv0;
          vec3 vpos = applySkirts(uv, position, normal.xyz, skirtScale);

          gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, linearDepth);
        }
    `),u.fragment.code.add(o.glsl`
        void main() {
          outputDepth(linearDepth);
        }
    `)),2===e.output&&(u.include(r.Transform,{linearDepth:!1}),u.include(n.NormalUtils,e),u.varyings.add("vnormal","vec3"),u.varyings.add("vpos","vec3"),u.vertex.uniforms.add("viewNormal","mat4"),u.vertex.code.add(o.glsl`
        void main(void) {
          vec3 normal = getLocalUp(position, origin);
          vec2 uv = uv0;
          vpos = applySkirts(uv, position, normal, skirtScale);

          gl_Position = transformPosition(proj, view, vpos);
          vnormal = normalize((viewNormal * vec4(normal, 1.0)).xyz);
        }
    `),u.fragment.code.add(o.glsl`
        void main() {
          vec3 normal = normalize(vnormal);
          if (gl_FrontFacing == false) {
            normal = -normal;
          }
          gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 0.0);
        }
    `)),4===e.output&&(u.include(r.Transform,{linearDepth:!1}),u.include(n.NormalUtils,e),u.include(d.Overlay,{pbrMode:0}),u.vertex.code.add(o.glsl`
          void main() {
            vec3 vnormal = getLocalUp(position, origin);
            vec2 uv = uv0;
            vec3 vpos = applySkirts(uv, position, vnormal, skirtScale);
            setOverlayVTC(uv);

            gl_Position = transformPosition(proj, view, vpos);
          }
      `),u.include(l.OutputHighlight),u.fragment.code.add(o.glsl`
        void main() {
          vec4 overlayColor = getCombinedOverlayColor();

          if (overlayColor.a == 0.0) {
            gl_FragColor = vec4(0.0);
            return;
          }

          outputHighlight();
        }
      `)),u}var p=Object.freeze({__proto__:null,build:u});e.TerrainShader=p,e.build=u}));
