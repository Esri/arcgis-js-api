/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./_rollupPluginBabelHelpers","./mat4","./mat4f64","./vec3","./vec3f64","../views/3d/terrain/interfaces","../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexTangent.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/NormalUtils.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl","../views/3d/webgl-engine/core/shaderLibrary/terrain/Overlay.glsl","../views/3d/webgl-engine/core/shaderLibrary/terrain/TerrainTexture.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl","../views/3d/webgl-engine/core/shaderModules/Float3PassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/Matrix4DrawUniform","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform"],(function(e,r,a,o,i,l,t,n,s,d,c,g,v,m,u,p,h,w,b,y,C,f,O,S,x,L,T,P,z,F,_){"use strict";let M=function(e){function a(){return e.apply(this,arguments)||this}return r._inheritsLoose(a,e),a}(x.OverlayTerrainPassParameters);function D(e){const r=new F.ShaderBuilder,{vertex:o,fragment:l,varyings:M}=r;r.include(v.PositionAttribute),r.include(g.NormalAttribute,e),r.include(m.TextureCoordinateAttribute,e);const D=()=>{r.include(C.NormalUtils,e),o.code.add(P.glsl`
      vec3 decodeNormalTerrain(vec2 e) {
        float z = 1.0 - abs(e.x) - abs(e.y);
        vec3 n = vec3(e + vec2(e.x >= 0.0 ? 1.0 : -1.0, e.y >= 0.0 ? 1.0 : -1.0) * min(z,0.0),z);
        return normalize(n);
      }

      vec3 getNormal() {
        return  ${e.shading?P.glsl`decodeNormalTerrain(normalCompressed)`:P.glsl`getLocalUp(position, localOrigin)`};
      }
  `)};L.addProjViewLocalOrigin(o,e),r.include(c.Transform,e);const U=e.overlayMode!==S.OverlayMode.Disabled;switch(e.output){case s.ShaderOutput.Color:{r.include(x.TerrainTexture,e),r.include(b.EvaluateSceneLighting,e),U&&r.include(x.OverlayTerrain,{...e,pbrMode:e.pbrMode===f.PBRMode.Terrain?f.PBRMode.TerrainWithWater:f.PBRMode.Water});const s=e.overlayMode===S.OverlayMode.EnabledWithWater;s&&r.include(u.VertexTangent,e),M.add("vnormal","vec3"),M.add("vpos","vec3"),M.add("vup","vec3"),D(),(e.atmosphere||e.screenSizePerspective)&&L.addViewNormal(o);const c=e.receiveShadows&&!e.renderOccluded;c&&r.include(n.ForwardLinearDepth,e),e.atmosphere&&M.add("wnormal","vec3"),e.screenSizePerspective&&(M.add("screenSizeDistanceToCamera","float"),M.add("screenSizeCosAngle","float")),o.code.add(P.glsl`
        void main(void) {
          //Position
          vpos = position;
          vec3 positionWorld = position + localOrigin;
          gl_Position = transformPosition(proj, view, vpos);

          //Normal
          vnormal = getNormal();

          //Up
          vup = getLocalUp(position, localOrigin);

          ${s?P.glsl`forwardVertexTangent(vnormal);`:P.glsl``}

          ${e.atmosphere?P.glsl`wnormal = normalize((viewNormal * vec4(normalize(positionWorld), 1.0)).xyz);`:""}

          //Texture UV
          vec2 uv = getUV0();
          forwardTextureCoordinatesWithTransform(uv);
          ${U?P.glsl`setOverlayVTC(uv);`:""}
          ${e.tileBorders?P.glsl`forwardTextureCoordinates();`:""}

          ${e.screenSizePerspective?P.glsl`
          vec3 viewPos = (view * vec4(vpos, 1.0)).xyz;
          screenSizeDistanceToCamera = length(viewPos);
          vec3 viewSpaceNormal = (viewNormal * vec4(normalize(positionWorld), 1.0)).xyz;
          screenSizeCosAngle = abs(viewSpaceNormal.z);`:""}

          ${c?P.glsl`forwardLinearDepth();`:""}

        }
      `),r.extensions.add("GL_OES_standard_derivatives"),r.extensions.add("GL_EXT_shader_texture_lod"),r.include(d.SliceDraw,e),r.include(b.EvaluateSceneLighting,e),r.include(w.EvaluateAmbientOcclusion,e),r.include(O.ReadShadowMapDraw,e),L.addCameraPosition(l,e),b.addAmbientBoostFactor(l),b.addLightingGlobalFactor(l),l.uniforms.add([o.uniforms.get("localOrigin"),new T.Float3PassUniform("viewDirection",((e,r)=>i.normalize($,i.set($,r.camera.viewMatrix[12],r.camera.viewMatrix[13],r.camera.viewMatrix[14]))))]),s&&l.uniforms.add([new _.Texture2DPassUniform("ovWaterTex",((e,r)=>0===r.overlays.length?null:r.overlays[t.OverlayIndex.INNER].getNormalTexture(e.overlaySource))),new z.Matrix4DrawUniform("view",((e,r)=>a.translate(N,r.camera.viewMatrix,e.origin)))]),l.code.add(P.glsl`const float sliceOpacity = 0.2;
float lum(vec3 c) {
return (min(min(c.r, c.g), c.b) + max(max(c.r, c.g), c.b)) * 0.5;
}`),y.addMainLightDirection(l),y.addMainLightIntensity(l),l.code.add(P.glsl`
        void main() {
          vec3 normal = normalize(vnormal);
          float vndl = dot(normal, mainLightDirection);

          float additionalAmbientScale = smoothstep(0.0, 1.0, clamp(vndl*2.5, 0.0, 1.0));
          float shadow = ${e.receiveShadows&&!e.renderOccluded?"readShadowMap(vpos, linearDepth)":e.spherical&&e.shading?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

          float ssao = evaluateAmbientOcclusionInverse();
          vec4 tileColor = getTileColor();

          ${U?P.glsl`
              vec4 overlayColorOpaque = getOverlayColor(ovColorTex, vtcOverlay);
              vec4 overlayColor = overlayOpacity * overlayColorOpaque;
              ${e.invisible?P.glsl`if (overlayColor.a == 0.0) { discard; }`:""}
              vec4 groundColor = tileColor;
              tileColor = tileColor * (1.0 - overlayColor.a) + overlayColor;`:""}

          // If combined alpha is 0 we can discard pixel. The performance impact by having a discard here
          // is neglectable because terrain typically renders first into the framebuffer.
          if(tileColor.a <= 0.0) {
            discard;
          }

          bool sliced = rejectBySlice(vpos);
          if (sliced) {
            tileColor *= sliceOpacity;
          }
          ${e.atmosphere?P.glsl`
              float ndotl = clamp(vndl, 0.0, 1.0);
              vec3 atm = vec3(clamp(1.0 - dot(-viewDirection, wnormal), 0.0, 1.0));
              atm *= clamp(1.0 - lum(tileColor.rgb) * 1.5, 0.0, 1.0); // avoid atmosphere on bright base maps
              atm *= clamp(ndotl * 2.0, 0.0, 1.0); // avoid atmosphere on dark side of the globe
              atm *= tileColor.a; // premultiply with tile alpha`:""}

          vec3 albedo = ${e.atmosphere?P.glsl`atm + tileColor.rgb;`:P.glsl`tileColor.rgb;`}

          // heuristic shading function used in the old terrain, now used to add ambient lighting

          vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

          ${e.pbrMode===f.PBRMode.Terrain||e.pbrMode===f.PBRMode.TerrainWithWater?P.glsl`gl_FragColor = vec4(evaluateTerrainLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight, normalize(vpos - cameraPosition), vup), tileColor.a);`:P.glsl`gl_FragColor = vec4(evaluateSceneLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight), tileColor.a);`}
          ${s?P.glsl`
              vec4 overlayWaterMask = getOverlayColor(ovWaterTex, vtcOverlay);
              float waterNormalLength = length(overlayWaterMask);
              if (waterNormalLength > 0.95) {
                mat3 tbnMatrix = mat3(tbnTangent, tbnBiTangent, vnormal);
                vec4 waterOverlayColor = vec4(overlayColor.w > 0.0 ? overlayColorOpaque.xyz/overlayColor.w : vec3(1.0), overlayColor.w);
                vec4 viewPosition = view*vec4(vpos, 1.0);
                vec4 waterColorLinear = getOverlayWaterColor(overlayWaterMask, waterOverlayColor, -normalize(vpos - cameraPosition), shadow, vnormal, tbnMatrix, viewPosition.xyz,  vpos + localOrigin);
                vec4 waterColorNonLinear = delinearizeGamma(vec4(waterColorLinear.xyz, 1.0));
                float opacity = sliced ? sliceOpacity : 1.0;
                // un-gamma the ground color to mix in linear space
                gl_FragColor = mix(groundColor, waterColorNonLinear, waterColorLinear.w) * opacity;
              }`:""}
          ${e.screenSizePerspective?P.glsl`
            float perspectiveScale = screenSizePerspectiveScaleFloat(1.0, screenSizeCosAngle, screenSizeDistanceToCamera, vec4(0.0, 0.0, 0.0, 0.0));
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
          ${e.visualizeNormals?e.spherical?P.glsl`
                  vec3 localUp = normalize(vpos + localOrigin);
                  vec3 right = normalize(cross(vec3(0.0, 0.0, 1.0), localUp));
                  vec3 forward = normalize(cross(localUp, right));
                  mat3 tbn = mat3(right, forward, localUp);
                  vec3 tNormal = normalize(normal * tbn);
                  gl_FragColor = vec4(vec3(0.5) + 0.5 * tNormal, 0.0);
              `:P.glsl`
                  vec3 tNormal = normalize(normal);
                  gl_FragColor = vec4(vec3(0.5) + 0.5 * tNormal, 0.0);
              `:""}
          ${e.tileBorders?P.glsl`
              vec2 dVuv = fwidth(vuv0);
              vec2 edgeFactors = smoothstep(vec2(0.0), 1.5 * dVuv, min(vuv0, 1.0 - vuv0));
              float edgeFactor = 1.0 - min(edgeFactors.x, edgeFactors.y);
              gl_FragColor = mix(gl_FragColor, vec4(1.0, 0.0, 0.0, 1.0), edgeFactor);`:""}
          gl_FragColor = highlightSlice(gl_FragColor, vpos);
        }
      `)}break;case s.ShaderOutput.Depth:U&&r.include(x.OverlayTerrain,e),r.include(p.OutputDepth,e),n.addLinearDepth(r),n.addNearFar(r),o.code.add(P.glsl`
              void main(void) {
                ${U?P.glsl`setOverlayVTC(getUV0());`:""}
                gl_Position = transformPositionWithDepth(proj, view, position, nearFar, linearDepth);
              }
          `),l.code.add(P.glsl`
              void main() {
                ${U&&e.invisible?P.glsl`if (getCombinedOverlayColor().a == 0.0) { discard; }`:""}
                outputDepth(linearDepth);
              }
          `);break;case s.ShaderOutput.Shadow:case s.ShaderOutput.ShadowHighlight:case s.ShaderOutput.ShadowExcludeHighlight:r.include(p.OutputDepth,e),n.addLinearDepth(r),n.addNearFar(r),o.code.add(P.glsl`void main(void) {
gl_Position = transformPositionWithDepth(proj, view, position, nearFar, linearDepth);
}`),l.code.add(P.glsl`void main() {
outputDepth(linearDepth);
}`);break;case s.ShaderOutput.Normal:U&&r.include(x.OverlayTerrain,e),M.add("vnormal","vec3"),L.addViewNormal(o),D(),o.code.add(P.glsl`
            void main(void) {
              ${U?P.glsl`setOverlayVTC(getUV0());`:""}
              gl_Position = transformPosition(proj, view, position);
              vnormal = normalize((viewNormal * vec4(getNormal(), 1.0)).xyz);
            }
        `),l.code.add(P.glsl`
            void main() {
              ${U&&e.invisible?P.glsl`if (getCombinedOverlayColor().a == 0.0) { discard; }`:""}
              vec3 normal = normalize(vnormal);
              if (gl_FrontFacing == false) {
                normal = -normal;
              }
              gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 0.0);
            }
        `);break;case s.ShaderOutput.Highlight:U&&r.include(x.OverlayTerrain,e),o.code.add(P.glsl`
          void main() {
            ${U?P.glsl`setOverlayVTC(getUV0());`:""}
            gl_Position = transformPosition(proj, view, position);
          }
        `),r.include(h.OutputHighlight,e),l.code.add(P.glsl`
          void main() {
            ${U?P.glsl`if (getCombinedOverlayColor().a == 0.0) { discard; }`:""}
            outputHighlight();
          }
        `)}return e.output===s.ShaderOutput.ObjectAndLayerIdColor&&(r.include(x.OverlayTerrain,{...e,pbrMode:f.PBRMode.Disabled}),o.code.add(P.glsl`void main(void) {
gl_Position = transformPosition(proj, view, position);
setOverlayVTC(getUV0());
}`),l.code.add(P.glsl`void main() {
gl_FragColor = getOverlayColorTexel(vtcOverlay);
}`)),r}const N=o.create(),$=l.create(),U=Object.freeze(Object.defineProperty({__proto__:null,TerrainPassParameters:M,build:D},Symbol.toStringTag,{value:"Module"}));e.Terrain=U,e.TerrainPassParameters=M,e.build=D}));
