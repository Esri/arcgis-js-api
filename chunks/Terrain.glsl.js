/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","./_rollupPluginBabelHelpers","./mat4","./mat4f64","./vec3","./vec3f64","../views/3d/terrain/interfaces","../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexTangent.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/NormalUtils.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl","../views/3d/webgl-engine/core/shaderLibrary/terrain/Overlay.glsl","../views/3d/webgl-engine/core/shaderLibrary/terrain/TerrainTexture.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/WebGL2Utils","../views/3d/webgl-engine/core/shaderModules/Float3PassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/Matrix4DrawUniform","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform"],(function(e,r,a,o,l,i,t,n,s,d,c,g,v,m,u,h,p,w,b,y,C,f,O,x,S,L,T,P,z,F,_,D){"use strict";let N=function(e){function a(){return e.apply(this,arguments)||this}return r._inheritsLoose(a,e),a}(S.OverlayTerrainPassParameters);function M(e){const r=new _.ShaderBuilder,{vertex:o,fragment:i,varyings:N}=r;r.include(v.PositionAttribute),r.include(g.NormalAttribute,e),r.include(m.TextureCoordinateAttribute,e);const M=()=>{r.include(C.NormalUtils,e),o.code.add(z.glsl`
  vec3 decodeNormalTerrain(vec2 e) {
    float z = 1.0 - abs(e.x) - abs(e.y);
    vec3 n = vec3(e + vec2(e.x >= 0.0 ? 1.0 : -1.0, e.y >= 0.0 ? 1.0 : -1.0) * min(z,0.0),z);
    return normalize(n);
  }

  vec3 getNormal() {
    return  ${e.shading?z.glsl`normalize(decodeNormalTerrain(normalCompressed))`:z.glsl`getLocalUp(position, localOrigin)`};
  }
  `)};L.addProjViewLocalOrigin(o,e),r.include(c.Transform,e);const V=e.overlayMode!==x.OverlayMode.Disabled;switch(e.output){case s.ShaderOutput.Color:{r.include(S.TerrainTexture,e),r.include(b.EvaluateSceneLighting,e);const s=e.overlayMode===x.OverlayMode.EnabledWithWater;V&&r.include(S.OverlayTerrain,{...e,pbrMode:f.PBRMode.Water}),s&&r.include(u.VertexTangent,e),N.add("vnormal","vec3"),N.add("vpos","vec3"),M(),(e.atmosphere||e.screenSizePerspective)&&L.addViewNormal(o);const c=e.receiveShadows&&!e.renderOccluded;c&&r.include(n.ForwardLinearDepth,e),e.atmosphere&&N.add("wnormal","vec3"),e.screenSizePerspective&&(N.add("screenSizeDistanceToCamera","float"),N.add("screenSizeCosAngle","float")),o.code.add(z.glsl`
        void main(void) {
          //Position
          vpos = position;
          vec3 positionWorld = position + localOrigin;
          gl_Position = transformPosition(proj, view, vpos);

          //Normal
          vnormal = getNormal();

          ${s?z.glsl`forwardVertexTangent(vnormal);`:z.glsl``}

          ${e.atmosphere?z.glsl`
          wnormal = normalize((viewNormal * vec4(normalize(positionWorld), 1.0)).xyz);`:""}

          //Texture UV
          vec2 uv = getUV0();
          forwardTextureCoordinatesWithTransform(uv);
          ${V?z.glsl`setOverlayVTC(uv);`:""}
          ${e.tileBorders?z.glsl`forwardTextureCoordinates();`:""}

          ${e.screenSizePerspective?z.glsl`
          vec3 viewPos = (view * vec4(vpos, 1.0)).xyz;
          screenSizeDistanceToCamera = length(viewPos);
          vec3 viewSpaceNormal = (viewNormal * vec4(normalize(positionWorld), 1.0)).xyz;
          screenSizeCosAngle = abs(viewSpaceNormal.z);`:""}

          ${c?z.glsl`forwardLinearDepth();`:""}

        }
      `),r.extensions.add("GL_OES_standard_derivatives"),r.extensions.add("GL_EXT_shader_texture_lod"),r.include(d.SliceDraw,e),r.include(b.EvaluateSceneLighting,e),r.include(w.EvaluateAmbientOcclusion,e),r.include(O.ReadShadowMapDraw,e),s&&L.addCameraPosition(i,e),b.addAmbientBoostFactor(i),b.addLightingGlobalFactor(i),i.uniforms.add([o.uniforms.get("localOrigin"),new P.Float3PassUniform("viewDirection",((e,r)=>l.normalize(U,l.set(U,r.camera.viewMatrix[12],r.camera.viewMatrix[13],r.camera.viewMatrix[14]))))]),s&&i.uniforms.add([new D.Texture2DPassUniform("ovWaterTex",((e,r)=>0===r.overlays.length?null:r.overlays[t.OverlayIndex.INNER].getNormalTexture(e.overlaySource))),new F.Matrix4DrawUniform("view",((e,r)=>a.translate($,r.camera.viewMatrix,e.origin)))]),i.code.add(z.glsl`const float sliceOpacity = 0.2;
float lum(vec3 c) {
return (min(min(c.r, c.g), c.b) + max(max(c.r, c.g), c.b)) * 0.5;
}`),y.addMainLightDirection(i),y.addMainLightIntensity(i),i.code.add(z.glsl`
        void main() {
          vec3 normal = normalize(vnormal);
          float vndl = dot(normal, mainLightDirection);

          float additionalAmbientScale = smoothstep(0.0, 1.0, clamp(vndl*2.5, 0.0, 1.0));
          float shadow = ${e.receiveShadows&&!e.renderOccluded?"readShadowMap(vpos, linearDepth)":e.spherical&&e.shading?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

          float ssao = evaluateAmbientOcclusionInverse();
          vec4 tileColor = getTileColor();

          ${V?z.glsl`
              vec4 overlayColorOpaque = getOverlayColor(ovColorTex, vtcOverlay);
              vec4 overlayColor = overlayOpacity * overlayColorOpaque;
              ${e.transparent?z.glsl`if (overlayColor.a == 0.0) { discard; }`:""}
              vec4 groundColor = tileColor;
              tileColor = tileColor * (1.0 - overlayColor.a) + overlayColor;`:""}
          if (rejectBySlice(vpos)) {
            tileColor *= sliceOpacity;
          }
          ${e.atmosphere?z.glsl`
              float ndotl = clamp(vndl, 0.0, 1.0);
              vec3 atm = vec3(clamp(1.0 - dot(-viewDirection, wnormal), 0.0, 1.0));
              atm *= clamp(1.0 - lum(tileColor.rgb) * 1.5, 0.0, 1.0); // avoid atmosphere on bright base maps
              atm *= clamp(ndotl * 2.0, 0.0, 1.0); // avoid atmosphere on dark side of the globe
              atm *= tileColor.a; // premultiply with tile alpha`:""}

          vec3 albedo = ${e.atmosphere?z.glsl`atm + tileColor.rgb;`:z.glsl`tileColor.rgb;`}

          // heuristic shading function used in the old terrain, now used to add ambient lighting

          vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

          gl_FragColor = vec4(evaluateSceneLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight), tileColor.a);
          ${s?z.glsl`
              vec4 overlayWaterMask = getOverlayColor(ovWaterTex, vtcOverlay);
              float waterNormalLength = length(overlayWaterMask);
              if (waterNormalLength > 0.95) {
                mat3 tbnMatrix = mat3(tbnTangent, tbnBiTangent, vnormal);
                vec4 waterOverlayColor = vec4(overlayColor.w > 0.0 ? overlayColorOpaque.xyz/overlayColor.w : vec3(1.0), overlayColor.w);
                vec4 viewPosition = view*vec4(vpos, 1.0);
                vec4 waterColorLinear = getOverlayWaterColor(overlayWaterMask, waterOverlayColor, -normalize(vpos - cameraPosition), shadow, vnormal, tbnMatrix, viewPosition.xyz,  vpos + localOrigin);
                vec4 waterColorNonLinear = delinearizeGamma(vec4(waterColorLinear.xyz, 1.0));
                // un-gamma the ground color to mix in linear space
                gl_FragColor = mix(groundColor, waterColorNonLinear, waterColorLinear.w);
              }`:""}
          ${e.screenSizePerspective?z.glsl`
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
          ${e.visualizeNormals?e.spherical?z.glsl`
              vec3 localUp = normalize(vpos + localOrigin);
              vec3 right = normalize(cross(vec3(0.0,0.0,1.0),localUp));
              vec3 forward = normalize(cross(localUp,right));
              mat3 tbn = mat3(right, forward, localUp);
              vec3 tNormal = normalize(normal* tbn);
              gl_FragColor = vec4(vec3(0.5) + 0.5 * tNormal, 0.0);
          `:z.glsl`
          vec3 tNormal = normalize(normal);
          gl_FragColor = vec4(vec3(0.5) + 0.5 * tNormal, 0.0);
      `:""}
          ${e.tileBorders?z.glsl`
              vec2 dVuv = fwidth(vuv0);
              vec2 edgeFactors = smoothstep(vec2(0.0), 1.5 * dVuv, min(vuv0, 1.0 - vuv0));
              float edgeFactor = 1.0 - min(edgeFactors.x, edgeFactors.y);
              gl_FragColor = mix(gl_FragColor, vec4(1.0, 0.0, 0.0, 1.0), edgeFactor);`:""}
          gl_FragColor = highlightSlice(gl_FragColor, vpos);
        }
      `)}break;case s.ShaderOutput.Depth:r.include(S.OverlayTerrain,e),r.include(h.OutputDepth,e),n.addLinearDepth(r),n.addNearFar(r),o.code.add(z.glsl`
              void main(void) {
                ${V?z.glsl`setOverlayVTC(getUV0());`:""}
                gl_Position = transformPositionWithDepth(proj, view, position, nearFar, linearDepth);
              }
          `),i.code.add(z.glsl`
              void main() {
                ${V?z.glsl`
                  vec4 overlayColor = getCombinedOverlayColor();
                  ${e.transparent?z.glsl`if (overlayColor.a == 0.0) { discard; }`:""}`:""}
                outputDepth(linearDepth);
              }
          `);break;case s.ShaderOutput.Shadow:case s.ShaderOutput.ShadowHighlight:case s.ShaderOutput.ShadowExludeHighlight:r.include(h.OutputDepth,e),n.addLinearDepth(r),n.addNearFar(r),o.code.add(z.glsl`void main(void) {
gl_Position = transformPositionWithDepth(proj, view, position, nearFar, linearDepth);
}`),i.code.add(z.glsl`void main() {
outputDepth(linearDepth);
}`);break;case s.ShaderOutput.Normal:N.add("vnormal","vec3"),L.addViewNormal(o),M(),o.code.add(z.glsl`void main(void) {
vec3 normal = getNormal();
gl_Position = transformPosition(proj, view, position);
vnormal = normalize((viewNormal * vec4(normal, 1.0)).xyz);
}`),i.code.add(z.glsl`void main() {
vec3 normal = normalize(vnormal);
if (gl_FrontFacing == false) {
normal = -normal;
}
gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 0.0);
}`);break;case s.ShaderOutput.Highlight:r.include(S.OverlayTerrain,e),o.code.add(z.glsl`void main() {
setOverlayVTC(getUV0());
gl_Position = transformPosition(proj, view, position);
}`),r.include(p.OutputHighlight,e),i.code.add(z.glsl`void main() {
vec4 overlayColor = getCombinedOverlayColor();
if (overlayColor.a == 0.0) {
discard;
}
outputHighlight();
}`)}return e.output===s.ShaderOutput.ObjectAndLayerIdColor&&(r.include(S.OverlayTerrain,{...e,pbrMode:f.PBRMode.Disabled}),o.code.add(z.glsl`void main(void) {
gl_Position = transformPosition(proj, view, position);
setOverlayVTC(getUV0());
}`),i.code.add(z.glsl`
        void main() {
          vec2 texDim =  ${T.textureSize(e,"ovColorTex")};
          gl_FragColor =  ${T.texelFetch(e,"ovColorTex","vec2(vtcOverlay.x * 0.5, vtcOverlay.y)*texDim")};
        }
    `)),r}const $=o.create(),U=i.create(),V=Object.freeze(Object.defineProperty({__proto__:null,TerrainPassParameters:N,build:M},Symbol.toStringTag,{value:"Module"}));e.Terrain=V,e.TerrainPassParameters=N,e.build=M}));
