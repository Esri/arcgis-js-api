"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[9746],{32078:(e,t,r)=>{r.d(t,{D:()=>k,b:()=>W});var i=r(70586),o=r(13598),n=r(1391),a=r(62707),s=r(55039),l=r(51546),c=r(77171),d=r(47624),u=r(64267),h=r(37099),f=r(76056),m=r(135),p=r(11317),g=r(15719),v=r(92555),_=r(89136),x=r(15817),T=r(72160),b=r(89753),A=r(5802),E=r(42001),w=r(19419),S=r(26322),y=r(85504),C=r(22539),R=r(57806),M=r(82550),O=r(96310),P=r(85787),N=r(90692),I=r(93669),L=r(172),D=r(71250),F=r(21437),H=r(74709),B=r(8319),U=r(33680),z=r(98069),V=r(93144),G=r(35065);function W(e){const t=new U.kG,{vertex:r,fragment:W,varyings:k}=t;return(0,I.Sv)(r,e),t.include(h.f),k.add("vpos","vec3"),t.include(M.k,e),t.include(d.f,e),t.include(v.L,e),e.hasColorTextureTransform&&t.include(R.av),e.output!==s.H.Color&&e.output!==s.H.Alpha||(e.hasNormalTextureTransform&&t.include(R.NI),e.hasEmissionTextureTransform&&t.include(R.R5),e.hasOcclusionTextureTransform&&t.include(R.jF),e.hasMetallicRoughnessTextureTransform&&t.include(R.DT),(0,I.hY)(r,e),t.include(u.O,e),t.include(c.w,e),e.normalType===u.h.Attribute&&e.offsetBackfaces&&t.include(a.w),t.include(x.Q,e),t.include(g.Bb,e),e.instancedColor&&t.attributes.add(G.T.INSTANCECOLOR,"vec4"),k.add("localvpos","vec3"),t.include(m.D,e),t.include(n.qj,e),t.include(f.R,e),t.include(p.c,e),r.uniforms.add(new D.N("externalColor",(e=>e.externalColor))),k.add("vcolorExt","vec4"),e.hasMultipassTerrain&&k.add("depth","float"),e.hasModelTransformation&&r.uniforms.add(new B.g("model",(e=>(0,i.pC)(e.modelTransformation)?e.modelTransformation:o.I))),r.code.add(H.H`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${H.H.float(O.b)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${e.normalType===u.h.Attribute?H.H`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${e.hasModelTransformation?"model,":""} vpos);
          ${e.normalType===u.h.Attribute&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${e.hasColorTextureTransform?H.H`forwardColorUV();`:""}
        ${e.hasNormalTextureTransform?H.H`forwardNormalUV();`:""}
        ${e.hasEmissionTextureTransform?H.H`forwardEmissiveUV();`:""}
        ${e.hasOcclusionTextureTransform?H.H`forwardOcclusionUV();`:""}
        ${e.hasMetallicRoughnessTextureTransform?H.H`forwardMetallicRoughnessUV();`:""}
      }
    `)),e.output===s.H.Alpha&&(t.include(l.f5,e),t.include(P.z,e),t.include(E.l,e),W.uniforms.add([new F.p("opacity",(e=>e.opacity)),new F.p("layerOpacity",(e=>e.layerOpacity))]),e.hasColorTexture&&W.uniforms.add(new z.A("tex",(e=>e.texture))),W.include(N.y),W.code.add(H.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?H.H`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?H.H`colorUV`:H.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:H.H`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?H.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:H.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===s.H.Color&&(t.include(l.f5,e),t.include(b.XP,e),t.include(T.K,e),t.include(P.z,e),t.include(e.instancedDoublePrecision?C.hb:C.XE,e),t.include(E.l,e),(0,I.hY)(W,e),W.uniforms.add([r.uniforms.get("localOrigin"),new L.J("ambient",(e=>e.ambient)),new L.J("diffuse",(e=>e.diffuse)),new F.p("opacity",(e=>e.opacity)),new F.p("layerOpacity",(e=>e.layerOpacity))]),e.hasColorTexture&&W.uniforms.add(new z.A("tex",(e=>e.texture))),t.include(y.jV,e),t.include(S.T,e),W.include(N.y),t.include(w.k,e),(0,b.PN)(W),(0,b.sC)(W),(0,A.F1)(W),W.code.add(H.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?H.H`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?H.H`colorUV`:H.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:H.H`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===u.h.ScreenDerivative?H.H`
                vec3 normal = screenDerivativeNormal(localvpos);`:H.H`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===y.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${e.receiveShadows?"readShadowMap(vpos, linearDepth)":e.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?H.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:H.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.hasNormalTexture?H.H`
                mat3 tangentSpace = ${e.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);`:H.H`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${e.spherical?H.H`normalize(posWorld);`:H.H`vec3(0.0, 0.0, 1.0);`}

        ${e.snowCover?H.H`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${e.pbrMode===y.f7.Normal||e.pbrMode===y.f7.Schematic?H.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?H.H`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:H.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===V.A.Color?H.H`gl_FragColor = premultiplyAlpha(gl_FragColor);`:""}
      }
    `)),t.include(_.s,e),t}const k=Object.freeze(Object.defineProperty({__proto__:null,build:W},Symbol.toStringTag,{value:"Module"}))},41846:(e,t,r)=>{r.d(t,{R:()=>H,b:()=>F});var i=r(1391),o=r(62707),n=r(55039),a=r(51546),s=r(77171),l=r(47624),c=r(64267),d=r(37099),u=r(76056),h=r(135),f=r(11317),m=r(92555),p=r(89136),g=r(72160),v=r(89753),_=r(5802),x=r(42001),T=r(26322),b=r(85504),A=r(22539),E=r(82550),w=r(96310),S=r(85787),y=r(90692),C=r(93669),R=r(172),M=r(71250),O=r(21437),P=r(74709),N=r(33680),I=r(98069),L=r(93144),D=r(35065);function F(e){const t=new N.kG,{vertex:r,fragment:F,varyings:H}=t;return(0,C.Sv)(r,e),t.include(d.f),H.add("vpos","vec3"),t.include(E.k,e),t.include(l.f,e),t.include(m.L,e),e.output!==n.H.Color&&e.output!==n.H.Alpha||((0,C.hY)(t.vertex,e),t.include(c.O,e),t.include(s.w,e),e.offsetBackfaces&&t.include(o.w),e.instancedColor&&t.attributes.add(D.T.INSTANCECOLOR,"vec4"),H.add("vNormalWorld","vec3"),H.add("localvpos","vec3"),e.hasMultipassTerrain&&H.add("depth","float"),t.include(h.D,e),t.include(i.qj,e),t.include(u.R,e),t.include(f.c,e),r.uniforms.add(new M.N("externalColor",(e=>e.externalColor))),H.add("vcolorExt","vec4"),r.code.add(P.H`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${P.H.float(w.b)}) {
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
          ${e.hasMultipassTerrain?P.H`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===n.H.Alpha&&(t.include(a.f5,e),t.include(S.z,e),t.include(x.l,e),F.uniforms.add([new O.p("opacity",(e=>e.opacity)),new O.p("layerOpacity",(e=>e.layerOpacity))]),e.hasColorTexture&&F.uniforms.add(new I.A("tex",(e=>e.texture))),F.include(y.y),F.code.add(P.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?P.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?P.H`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?P.H`colorUV`:P.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:P.H`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?P.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:P.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===n.H.Color&&(t.include(a.f5,e),t.include(v.XP,e),t.include(g.K,e),t.include(S.z,e),t.include(e.instancedDoublePrecision?A.hb:A.XE,e),t.include(x.l,e),(0,C.hY)(t.fragment,e),(0,_.Pe)(F),(0,v.PN)(F),(0,v.sC)(F),F.uniforms.add([r.uniforms.get("localOrigin"),r.uniforms.get("view"),new R.J("ambient",(e=>e.ambient)),new R.J("diffuse",(e=>e.diffuse)),new O.p("opacity",(e=>e.opacity)),new O.p("layerOpacity",(e=>e.layerOpacity))]),e.hasColorTexture&&F.uniforms.add(new I.A("tex",(e=>e.texture))),t.include(b.jV,e),t.include(T.T,e),F.include(y.y),t.extensions.add("GL_OES_standard_derivatives"),(0,_.F1)(F),F.code.add(P.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?P.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?P.H`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?P.H`colorUV`:P.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:P.H`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===b.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?P.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:P.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.snowCover?P.H`albedo = mix(albedo, vec3(1), 0.9);`:P.H``}
        ${P.H`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${e.pbrMode===b.f7.Normal||e.pbrMode===b.f7.Schematic?e.spherical?P.H`vec3 normalGround = normalize(vpos + localOrigin);`:P.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:P.H``}
        ${e.pbrMode===b.f7.Normal||e.pbrMode===b.f7.Schematic?P.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?P.H`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:P.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===L.A.Color?P.H`gl_FragColor = premultiplyAlpha(gl_FragColor);`:P.H``}
      }
    `)),t.include(p.s,e),t}const H=Object.freeze(Object.defineProperty({__proto__:null,build:F},Symbol.toStringTag,{value:"Module"}))},25377:(e,t,r)=>{r.d(t,{S:()=>v,b:()=>m,g:()=>p});var i=r(70586),o=r(4307),n=r(97323),a=r(51666),s=r(5543),l=r(20787),c=r(19693),d=r(21437),u=r(74709),h=r(33680),f=r(98069);function m(){const e=new h.kG,t=e.fragment;return e.include(a.k),t.include(s.S),e.include(l.G),t.uniforms.add(new d.p("radius",((e,t)=>p(t.camera)))),t.code.add(u.H`vec3 sphere[16];
void fillSphere() {
sphere[0] = vec3(0.186937, 0.0, 0.0);
sphere[1] = vec3(0.700542, 0.0, 0.0);
sphere[2] = vec3(-0.864858, -0.481795, -0.111713);
sphere[3] = vec3(-0.624773, 0.102853, -0.730153);
sphere[4] = vec3(-0.387172, 0.260319, 0.007229);
sphere[5] = vec3(-0.222367, -0.642631, -0.707697);
sphere[6] = vec3(-0.01336, -0.014956, 0.169662);
sphere[7] = vec3(0.122575, 0.1544, -0.456944);
sphere[8] = vec3(-0.177141, 0.85997, -0.42346);
sphere[9] = vec3(-0.131631, 0.814545, 0.524355);
sphere[10] = vec3(-0.779469, 0.007991, 0.624833);
sphere[11] = vec3(0.308092, 0.209288,0.35969);
sphere[12] = vec3(0.359331, -0.184533, -0.377458);
sphere[13] = vec3(0.192633, -0.482999, -0.065284);
sphere[14] = vec3(0.233538, 0.293706, -0.055139);
sphere[15] = vec3(0.417709, -0.386701, 0.442449);
}
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn-bias, 0.0);
}`),t.code.add(u.H`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),t.uniforms.add([new c.A("nearFar",((e,t)=>t.camera.nearFar)),new f.A("normalMap",(e=>e.normalTexture)),new f.A("depthMap",(e=>e.depthTexture)),new c.A("zScale",((e,t)=>(0,l.R)(t))),new d.p("projScale",(e=>e.projScale)),new f.A("rnm",(e=>e.noiseTexture)),new c.A("rnmScale",((e,t)=>(0,o.s)(g,t.camera.fullWidth/(0,i.Wg)(e.noiseTexture).descriptor.width,t.camera.fullHeight/(0,i.Wg)(e.noiseTexture).descriptor.height))),new d.p("intensity",(e=>e.intensity)),new c.A("screenSize",((e,t)=>(0,o.s)(g,t.camera.fullWidth,t.camera.fullHeight)))]),t.code.add(u.H`
    void main(void) {
      fillSphere();
      vec3 fres = normalize((texture2D(rnm, uv * rnmScale).xyz * 2.0) - vec3(1.0));
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth>nearFar.y || -currentPixelDepth<nearFar.x) {
        gl_FragColor = vec4(0.0);
        return;
      }

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy,currentPixelDepth);

      // get the normal of current fragment
      vec4 norm4 = texture2D(normalMap, uv);
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;
      bool isTerrain = norm4.w<0.5;

      float sum = .0;
      vec3 tapPixelPos;

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${u.H.int(16)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        //don't use current or very nearby samples
        if ( abs(offset.x)<2.0 || abs(offset.y)<2.0) continue;

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        if (isTerrain) {
          bool isTerrainTap = texture2D(normalMap, tcTap).w<0.5;
          if (isTerrainTap) {
            continue;
          }
        }

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum+= aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${u.H.int(16)}),0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4)/2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;
      gl_FragColor = vec4(A);
    }
  `),e}function p(e){return Math.max(10,20*e.computeRenderPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const g=(0,n.a)(),v=Object.freeze(Object.defineProperty({__proto__:null,build:m,getRadius:p},Symbol.toStringTag,{value:"Module"}))},59915:(e,t,r)=>{r.d(t,{S:()=>m,b:()=>f});var i=r(17896),o=r(51666),n=r(5543),a=r(98925),s=r(19693),l=r(21437),c=r(74709),d=r(33680),u=r(16374),h=r(98069);function f(){const e=new d.kG,t=e.fragment;return e.include(o.k),t.include(n.S),t.uniforms.add([new h.A("depthMap",(e=>e.depthTexture)),new u.R("tex",(e=>e.colorTexture)),new a.q("blurSize",(e=>e.blurSize)),new l.p("projScale",((e,t)=>{const r=(0,i.i)(t.camera.eye,t.camera.center);return r>5e4?Math.max(0,e.projScale-(r-5e4)):e.projScale})),new s.A("nearFar",((e,t)=>t.camera.nearFar))]),t.code.add(c.H`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture2D(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${c.H.float(.08)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),t.code.add(c.H`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${c.H.int(4)}; r <= ${c.H.int(4)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      gl_FragColor = vec4(b / w_total);
    }
  `),e}const m=Object.freeze(Object.defineProperty({__proto__:null,build:f},Symbol.toStringTag,{value:"Module"}))},14682:(e,t,r)=>{function i(){const e=new Float32Array(9);return e[0]=1,e[4]=1,e[8]=1,e}function o(e,t,r,i,o,n,a,s,l){const c=new Float32Array(9);return c[0]=e,c[1]=t,c[2]=r,c[3]=i,c[4]=o,c[5]=n,c[6]=a,c[7]=s,c[8]=l,c}r.d(t,{c:()=>i,f:()=>o}),Object.freeze(Object.defineProperty({__proto__:null,clone:function(e){const t=new Float32Array(9);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t},create:i,createView:function(e,t){return new Float32Array(e,t,9)},fromValues:o},Symbol.toStringTag,{value:"Module"}))},1265:(e,t,r)=>{function i(){return new Float32Array(2)}function o(e,t){const r=new Float32Array(2);return r[0]=e,r[1]=t,r}function n(){return i()}function a(){return o(1,1)}function s(){return o(1,0)}function l(){return o(0,1)}r.d(t,{O:()=>d,Z:()=>c,c:()=>i,f:()=>o});const c=n(),d=a(),u=s(),h=l();Object.freeze(Object.defineProperty({__proto__:null,ONES:d,UNIT_X:u,UNIT_Y:h,ZEROS:c,clone:function(e){const t=new Float32Array(2);return t[0]=e[0],t[1]=e[1],t},create:i,createView:function(e,t){return new Float32Array(e,t,2)},fromValues:o,ones:a,unitX:s,unitY:l,zeros:n},Symbol.toStringTag,{value:"Module"}))},20773:(e,t,r)=>{r.d(t,{a:()=>n,b:()=>l,n:()=>s,s:()=>a,t:()=>o});var i=r(72220);function o(e,t,r){if(e.count!==t.count)return void i.c.error("source and destination buffers need to have the same number of elements");const o=e.count,n=r[0],a=r[1],s=r[2],l=r[4],c=r[5],d=r[6],u=r[8],h=r[9],f=r[10],m=r[12],p=r[13],g=r[14],v=e.typedBuffer,_=e.typedBufferStride,x=t.typedBuffer,T=t.typedBufferStride;for(let e=0;e<o;e++){const t=e*_,r=e*T,i=x[r],o=x[r+1],b=x[r+2];v[t]=n*i+l*o+u*b+m,v[t+1]=a*i+c*o+h*b+p,v[t+2]=s*i+d*o+f*b+g}}function n(e,t,r){if(e.count!==t.count)return void i.c.error("source and destination buffers need to have the same number of elements");const o=e.count,n=r[0],a=r[1],s=r[2],l=r[3],c=r[4],d=r[5],u=r[6],h=r[7],f=r[8],m=e.typedBuffer,p=e.typedBufferStride,g=t.typedBuffer,v=t.typedBufferStride;for(let e=0;e<o;e++){const t=e*p,r=e*v,i=g[r],o=g[r+1],_=g[r+2];m[t]=n*i+l*o+u*_,m[t+1]=a*i+c*o+h*_,m[t+2]=s*i+d*o+f*_}}function a(e,t,r){const i=Math.min(e.count,t.count),o=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let e=0;e<i;e++){const t=e*n,i=e*s;o[t]=r*a[i],o[t+1]=r*a[i+1],o[t+2]=r*a[i+2]}}function s(e,t){const r=Math.min(e.count,t.count),i=e.typedBuffer,o=e.typedBufferStride,n=t.typedBuffer,a=t.typedBufferStride;for(let e=0;e<r;e++){const t=e*o,r=e*a,s=n[r],l=n[r+1],c=n[r+2],d=s*s+l*l+c*c;if(d>0){const e=1/Math.sqrt(d);i[t]=e*s,i[t+1]=e*l,i[t+2]=e*c}}}function l(e,t,r){const i=Math.min(e.count,t.count),o=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let e=0;e<i;e++){const t=e*n,i=e*s;o[t]=a[i]>>r,o[t+1]=a[i+1]>>r,o[t+2]=a[i+2]>>r}}Object.freeze(Object.defineProperty({__proto__:null,normalize:s,scale:a,shiftRight:l,transformMat3:n,transformMat4:o},Symbol.toStringTag,{value:"Module"}))},56067:(e,t,r)=>{function i(e,t,r){const i=e.typedBuffer,o=e.typedBufferStride,n=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let l=(r&&r.dstIndex?r.dstIndex:0)*o,c=(r&&r.srcIndex?r.srcIndex:0)*a;for(let e=0;e<s;++e)i[l]=n[c],i[l+1]=n[c+1],i[l+2]=n[c+2],l+=o,c+=a}function o(e,t,r,i,o){const n=e.typedBuffer,a=e.typedBufferStride,s=o?.count??e.count;let l=(o?.dstIndex??0)*a;for(let e=0;e<s;++e)n[l]=t,n[l+1]=r,n[l+2]=i,l+=a}r.d(t,{c:()=>i,f:()=>o}),Object.freeze(Object.defineProperty({__proto__:null,copy:i,fill:o},Symbol.toStringTag,{value:"Module"}))},88669:(e,t,r)=>{function i(){return[0,0,0,0]}function o(e,t,r,i){return[e,t,r,i]}function n(e,t){return new Float64Array(e,t,4)}function a(){return o(1,1,1,1)}function s(){return o(1,0,0,0)}function l(){return o(0,1,0,0)}function c(){return o(0,0,1,0)}function d(){return o(0,0,0,1)}r.d(t,{a:()=>n,c:()=>i,f:()=>o});const u=a(),h=s(),f=l(),m=c(),p=d();Object.freeze(Object.defineProperty({__proto__:null,ONES:u,UNIT_W:p,UNIT_X:h,UNIT_Y:f,UNIT_Z:m,ZEROS:[0,0,0,0],clone:function(e){return[e[0],e[1],e[2],e[3]]},create:i,createView:n,fromArray:function(e){const t=[0,0,0,0],r=Math.min(4,e.length);for(let i=0;i<r;++i)t[i]=e[i];return t},fromValues:o,ones:a,unitW:d,unitX:s,unitY:l,unitZ:c,zeros:function(){return[0,0,0,0]}},Symbol.toStringTag,{value:"Module"}))},32243:(e,t,r)=>{function i(e){return e=e||globalThis.location.hostname,c.some((t=>null!=e?.match(t)))}function o(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(n)||null!=t.match(s)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(a)||null!=t.match(l)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}r.d(t,{XO:()=>i,pJ:()=>o});const n=/^devext.arcgis.com$/,a=/^qaext.arcgis.com$/,s=/^[\w-]*\.mapsdevext.arcgis.com$/,l=/^[\w-]*\.mapsqa.arcgis.com$/,c=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,n,a,/^jsapps.esri.com$/,s,l]},72220:(e,t,r)=>{r.d(t,{c:()=>i});const i=r(92604).Z.getLogger("esri.views.3d.support.buffer.math")},16996:(e,t,r)=>{r.d(t,{Ue:()=>l,nF:()=>d,zk:()=>c});var i=r(22021),o=r(22807),n=r(17896),a=r(65617),s=r(12981);function l(e){return e?{origin:(0,a.a)(e.origin),vector:(0,a.a)(e.vector)}:{origin:(0,a.c)(),vector:(0,a.c)()}}function c(e,t,r=l()){return(0,n.c)(r.origin,e),(0,n.b)(r.vector,t,e),r}function d(e,t,r){return function(e,t,r,o,a){const{vector:l,origin:c}=e,d=(0,n.b)(s.WM.get(),t,c),u=(0,n.e)(l,d)/(0,n.p)(l);return(0,n.g)(a,l,(0,i.uZ)(u,0,1)),(0,n.a)(a,a,e.origin)}(e,t,0,0,r)}(0,a.c)(),(0,a.c)(),new o.x((()=>l()))},69746:(e,t,r)=>{r.r(t),r.d(t,{fetch:()=>hr,gltfToEngineResources:()=>mr,parseUrl:()=>fr});var i=r(32243),o=r(70586),n=r(21787),a=r(46521),s=r(52138),l=r(13598),c=r(17896),d=r(65617),u=r(60437),h=r(56481),f=r(20773),m=r(11077),p=r(8323),g=r(40270),v=r(91695),_=r(91911),x=r(15317),T=r(14682),b=r(1265);function A(e){if((0,o.Wi)(e))return null;const t=(0,o.pC)(e.offset)?e.offset:b.Z,r=(0,o.pC)(e.rotation)?e.rotation:0,i=(0,o.pC)(e.scale)?e.scale:b.O,a=(0,T.f)(1,0,0,0,1,0,t[0],t[1],1),s=(0,T.f)(Math.cos(r),-Math.sin(r),0,Math.sin(r),Math.cos(r),0,0,0,1),l=(0,T.f)(i[0],0,0,0,i[1],0,0,0,1),c=(0,T.c)();return(0,n.m)(c,s,l),(0,n.m)(c,a,c),c}class E{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class w{constructor(e,t,r){this.name=e,this.lodThreshold=t,this.pivotOffset=r,this.stageResources=new E,this.numberOfVertices=0}}var S=r(3172),y=r(66643),C=r(43090),R=r(20102),M=r(92604);class O{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(e,t){return this._outer.get(e)?.get(t)}set(e,t,r){const i=this._outer.get(e);i?i.set(t,r):this._outer.set(e,new Map([[t,r]]))}delete(e,t){const r=this._outer.get(e);r&&(r.delete(t),0===r.size&&this._outer.delete(e))}forEach(e){this._outer.forEach(((t,r)=>e(t,r)))}}var P=r(95330),N=r(23670);async function I(e,t){const{data:r}=await(0,S.default)(e,{responseType:"image",...t});return r}var L=r(51417),D=r(47026),F=r(1533);function H(e){if(e.length<F.DB)return Array.from(e);if(Array.isArray(e))return Float64Array.from(e);switch(e.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(e);case 2:return Uint16Array.from(e);case 4:return Float32Array.from(e);default:return Float64Array.from(e)}}var B=r(44553),U=r(11726);class z{constructor(e,t,r,i){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.indices=r,this.position=i,this._children=void 0,(0,U.hu)(e.length>=1),(0,U.hu)(r.length%this._numIndexPerPrimitive==0),(0,U.hu)(r.length>=e.length*this._numIndexPerPrimitive),(0,U.hu)(3===i.size||4===i.size);const{data:o,size:n}=i,a=e.length;let s=n*r[this._numIndexPerPrimitive*e[0]];V.clear(),V.push(s);const l=(0,d.f)(o[s],o[s+1],o[s+2]),u=(0,d.a)(l);for(let t=0;t<a;++t){const i=this._numIndexPerPrimitive*e[t];for(let e=0;e<this._numIndexPerPrimitive;++e){s=n*r[i+e],V.push(s);let t=o[s];l[0]=Math.min(t,l[0]),u[0]=Math.max(t,u[0]),t=o[s+1],l[1]=Math.min(t,l[1]),u[1]=Math.max(t,u[1]),t=o[s+2],l[2]=Math.min(t,l[2]),u[2]=Math.max(t,u[2])}}this.bbMin=l,this.bbMax=u;const h=(0,c.h)((0,d.c)(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(u[0]-l[0],u[1]-l[1]),u[2]-l[2]);let f=this.radius*this.radius;for(let e=0;e<V.length;++e){s=V.getItemAt(e);const t=o[s]-h[0],r=o[s+1]-h[1],i=o[s+2]-h[2],n=t*t+r*r+i*i;if(n<=f)continue;const a=Math.sqrt(n),l=.5*(a-this.radius);this.radius=this.radius+l,f=this.radius*this.radius;const c=l/a;h[0]+=t*c,h[1]+=r*c,h[2]+=i*c}this.center=h,V.clear()}getChildren(){if(this._children||(0,c.d)(this.bbMin,this.bbMax)<=1)return this._children;const e=(0,c.h)((0,d.c)(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,r=new Uint8Array(t),i=new Array(8);for(let e=0;e<8;++e)i[e]=0;const{data:o,size:n}=this.position;for(let a=0;a<t;++a){let t=0;const s=this._numIndexPerPrimitive*this.primitiveIndices[a];let l=n*this.indices[s],c=o[l],d=o[l+1],u=o[l+2];for(let e=1;e<this._numIndexPerPrimitive;++e){l=n*this.indices[s+e];const t=o[l],r=o[l+1],i=o[l+2];t<c&&(c=t),r<d&&(d=r),i<u&&(u=i)}c<e[0]&&(t|=1),d<e[1]&&(t|=2),u<e[2]&&(t|=4),r[a]=t,++i[t]}let a=0;for(let e=0;e<8;++e)i[e]>0&&++a;if(a<2)return;const s=new Array(8);for(let e=0;e<8;++e)s[e]=i[e]>0?new Uint32Array(i[e]):void 0;for(let e=0;e<8;++e)i[e]=0;for(let e=0;e<t;++e){const t=r[e];s[t][i[t]++]=this.primitiveIndices[e]}this._children=new Array;for(let e=0;e<8;++e)void 0!==s[e]&&this._children.push(new z(s[e],this._numIndexPerPrimitive,this.indices,this.position));return this._children}static prune(){V.prune()}}const V=new B.Z({deallocator:null});var G=r(17662),W=r(4726),k=r(22807),$=r(16996);function q(e,t,r){return(0,c.b)(j,t,e),(0,c.b)(X,r,e),(0,c.l)((0,c.f)(j,j,X))/2}r(12981),new k.x($.Ue),new k.x((()=>{return e?{p0:(0,d.a)(e.p0),p1:(0,d.a)(e.p1),p2:(0,d.a)(e.p2)}:{p0:(0,d.c)(),p1:(0,d.c)(),p2:(0,d.c)()};var e}));const j=(0,d.c)(),X=(0,d.c)(),J=(0,d.c)(),Y=(0,d.c)(),K=(0,d.c)(),Z=(0,d.c)();var Q=r(54388),ee=r(99001);class te{constructor(e){this.channel=e,this.id=(0,ee.D)()}}var re=r(35065);r(9820),(0,d.c)(),new Float32Array(6);class ie extends G.c{constructor(e,t,r=[],i=null,o=W.U.Mesh,n=null,a=-1){super(),this.material=e,this.mapPositions=i,this.type=o,this.objectAndLayerIdColor=n,this.edgeIndicesLength=a,this.visible=!0,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[e,r]of t)r&&this._vertexAttributes.set(e,{...r});if(null==r||0===r.length){const e=function(e){const t=e.values().next().value;return null==t?0:t.data.length/t.size}(this._vertexAttributes),t=(0,Q.p)(e);this.edgeIndicesLength=this.edgeIndicesLength<0?e:this.edgeIndicesLength;for(const e of this._vertexAttributes.keys())this._indices.set(e,t)}else for(const[e,t]of r)t&&(this._indices.set(e,(0,Q.mi)(t)),e===re.T.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(e).length:this.edgeIndicesLength))}instantiate(e={}){const t=new ie(e.material||this.material,[],void 0,this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._vertexAttributes.forEach(((e,r)=>{e.exclusive=!1,t._vertexAttributes.set(r,e)})),this._indices.forEach(((e,r)=>t._indices.set(r,e))),t._boundingInfo=this._boundingInfo,t.transformation=e.transformation||this.transformation,t}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){let t=this._vertexAttributes.get(e);return t&&!t.exclusive&&(t={...t,exclusive:!0,data:H(t.data)},this._vertexAttributes.set(e,t)),t}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get faceCount(){return this.indexCount/3}get boundingInfo(){return(0,o.Wi)(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return!!(this.type===W.U.Mesh?this._computeAttachmentOriginTriangles(e):this.type===W.U.Line?this._computeAttachmentOriginLines(e):this._computeAttachmentOriginPoints(e))&&((0,o.pC)(this._transformation)&&(0,c.m)(e,e,this._transformation),!0)}_computeAttachmentOriginTriangles(e){const t=this.indices.get(re.T.POSITION);return function(e,t,r){if(!e||!t)return!1;const{size:i,data:o}=e;(0,c.s)(r,0,0,0),(0,c.s)(Z,0,0,0);let n=0,a=0;for(let e=0;e<t.length-2;e+=3){const s=t[e+0]*i,l=t[e+1]*i,d=t[e+2]*i;(0,c.s)(J,o[s+0],o[s+1],o[s+2]),(0,c.s)(Y,o[l+0],o[l+1],o[l+2]),(0,c.s)(K,o[d+0],o[d+1],o[d+2]);const u=q(J,Y,K);u?((0,c.a)(J,J,Y),(0,c.a)(J,J,K),(0,c.g)(J,J,1/3*u),(0,c.a)(r,r,J),n+=u):((0,c.a)(Z,Z,J),(0,c.a)(Z,Z,Y),(0,c.a)(Z,Z,K),a+=3)}return!(0===a&&0===n||(0!==n?((0,c.g)(r,r,1/n),0):0===a||((0,c.g)(r,Z,1/a),0)))}(this.vertexAttributes.get(re.T.POSITION),t,e)}_computeAttachmentOriginLines(e){const t=this.vertexAttributes.get(re.T.POSITION),r=this.indices.get(re.T.POSITION);return function(e,t,r,i){if(!e)return!1;(0,c.s)(i,0,0,0),(0,c.s)(Z,0,0,0);let o=0,n=0;const{size:a,data:s}=e,l=t?t.length-1:s.length/a-1,d=l+(r?2:0);for(let e=0;e<d;e+=2){const r=e<l?e:l,d=e<l?e+1:0,u=(t?t[r]:r)*a,h=(t?t[d]:d)*a;J[0]=s[u],J[1]=s[u+1],J[2]=s[u+2],Y[0]=s[h],Y[1]=s[h+1],Y[2]=s[h+2],(0,c.g)(J,(0,c.a)(J,J,Y),.5);const f=(0,c.j)(J,Y);f>0?((0,c.a)(i,i,(0,c.g)(J,J,f)),o+=f):0===o&&((0,c.a)(Z,Z,J),n++)}return 0!==o?((0,c.g)(i,i,1/o),!0):0!==n&&((0,c.g)(i,Z,1/n),!0)}(t,r,r&&function(e,t,r){return!(!("isClosed"in e)||!e.isClosed)&&(r?r.length>2:t.data.length>6)}(this.material.parameters,t,r),e)}_computeAttachmentOriginPoints(e){const t=this.indices.get(re.T.POSITION);return function(e,t,r){if(!e||!t)return!1;const{size:i,data:o}=e;(0,c.s)(r,0,0,0);let n=-1,a=0;for(let e=0;e<t.length;e++){const s=t[e]*i;n!==s&&(r[0]+=o[s+0],r[1]+=o[s+1],r[2]+=o[s+2],a++),n=s}return a>1&&(0,c.g)(r,r,1/a),a>0}(this.vertexAttributes.get(re.T.POSITION),t,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get(re.T.POSITION),t=this.vertexAttributes.get(re.T.POSITION);if(!e||0===e.length||!t)return null;const r=this.type===W.U.Mesh?3:1;(0,U.hu)(e.length%r==0,"Indexing error: "+e.length+" not divisible by "+r);const i=(0,Q.p)(e.length/r);return new z(i,r,e,t)}get transformation(){return(0,o.Pt)(this._transformation,l.I)}set transformation(e){this._transformation=e&&e!==l.I?(0,l.b)(e):null}get shaderTransformation(){return(0,o.pC)(this._shaderTransformer)?this._shaderTransformer(this.transformation):this.transformation}get shaderTransformer(){return this._shaderTransformer}set shaderTransformer(e){this._shaderTransformer=e}get hasVolatileTransformation(){return(0,o.pC)(this._shaderTransformer)}addHighlight(){const e=new te(D.V_.Highlight);return this.highlights=(t=this.highlights,r=e,(0,o.Wi)(t)&&(t=[]),t.push(r),t),e;var t,r}removeHighlight(e){this.highlights=function(e,t){if((0,o.Wi)(e))return null;const r=e.filter((e=>e!==t));return 0===r.length?null:r}(this.highlights,e)}}var oe=r(74085),ne=r(32448),ae=r(22021),se=r(17452),le=r(85958),ce=r(88669),de=r(51666),ue=r(71250),he=r(74709),fe=r(33680),me=r(98069);class pe extends he.K{constructor(){super(...arguments),this.color=(0,ce.f)(1,1,1,1)}}Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:pe,build:function(){const e=new fe.kG;return e.include(de.k),e.fragment.uniforms.add([new me.A("tex",(e=>e.texture)),new ue.N("uColor",(e=>e.color))]),e.fragment.code.add(he.H`void main() {
vec4 texColor = texture2D(tex, uv);
gl_FragColor = texColor * uColor;
}`),e}},Symbol.toStringTag,{value:"Module"}));var ge=r(99880);let ve;var _e;!function(e){e[e.ETC1_RGB=0]="ETC1_RGB",e[e.ETC2_RGBA=1]="ETC2_RGBA",e[e.BC1_RGB=2]="BC1_RGB",e[e.BC3_RGBA=3]="BC3_RGBA",e[e.BC4_R=4]="BC4_R",e[e.BC5_RG=5]="BC5_RG",e[e.BC7_M6_RGB=6]="BC7_M6_RGB",e[e.BC7_M5_RGBA=7]="BC7_M5_RGBA",e[e.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",e[e.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",e[e.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",e[e.ATC_RGB=11]="ATC_RGB",e[e.ATC_RGBA=12]="ATC_RGBA",e[e.FXT1_RGB=17]="FXT1_RGB",e[e.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",e[e.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",e[e.ETC2_EAC_R11=20]="ETC2_EAC_R11",e[e.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",e[e.RGBA32=13]="RGBA32",e[e.RGB565=14]="RGB565",e[e.BGR565=15]="BGR565",e[e.RGBA4444=16]="RGBA4444"}(_e||(_e={}));var xe=r(35371),Te=r(75656),be=r(45762);let Ae=null,Ee=null;async function we(){return(0,o.Wi)(Ee)&&(Ee=function(){if((0,o.Wi)(ve)){const e=e=>(0,ge.V)(`esri/libs/basisu/${e}`);ve=r.e(1421).then(r.bind(r,21421)).then((e=>e.b)).then((({default:t})=>t({locateFile:e}).then((e=>(e.initializeBasis(),delete e.then,e)))))}return ve}(),Ae=await Ee),Ee}function Se(e,t,r,i,o){const n=(0,be.RG)(t?xe.q_.COMPRESSED_RGBA8_ETC2_EAC:xe.q_.COMPRESSED_RGB8_ETC2),a=o&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(r*i*n*a)}function ye(e){return e.getNumImages()>=1&&!e.isUASTC()}function Ce(e){return e.getFaces()>=1&&e.isETC1S()}function Re(e,t,r,i,o,n,a,s){const{compressedTextureETC:l,compressedTextureS3TC:c}=e.capabilities,[d,u]=l?i?[_e.ETC2_RGBA,xe.q_.COMPRESSED_RGBA8_ETC2_EAC]:[_e.ETC1_RGB,xe.q_.COMPRESSED_RGB8_ETC2]:c?i?[_e.BC3_RGBA,xe.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[_e.BC1_RGB,xe.q_.COMPRESSED_RGB_S3TC_DXT1_EXT]:[_e.RGBA32,xe.VI.RGBA],h=t.hasMipmap?r:Math.min(1,r),f=[];for(let e=0;e<h;e++)f.push(new Uint8Array(a(e,d))),s(e,d,f[e]);const m=f.length>1,p=m?xe.cw.LINEAR_MIPMAP_LINEAR:xe.cw.LINEAR,g={...t,samplingMode:p,hasMipmap:m,internalFormat:u,width:o,height:n};return new Te.x(e,g,{type:"compressed",levels:f})}const Me=M.Z.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function Oe(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const Pe=Oe("DXT1"),Ne=Oe("DXT3"),Ie=Oe("DXT5");var Le,De,Fe=r(89917),He=r(54738),Be=r(33696);class Ue extends G.c{constructor(e,t){super(),this._data=e,this.type=W.U.Texture,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new ne.Z,this._passParameters=new pe,this.params=t||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:xe.e8.REPEAT,t:xe.e8.REPEAT},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||D.CE.STRETCH,this.estimatedTexMemRequired=Ue._estimateTexMemRequired(this._data,this.params),this._startPreload()}_startPreload(){const e=this._data;(0,o.Wi)(e)||(e instanceof HTMLVideoElement?this._startPreloadVideoElement(e):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!((0,se.jc)(e.src)||"auto"===e.preload&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const t=!e.paused;if(e.src=e.src,t&&e.autoplay){const t=()=>{e.removeEventListener("canplay",t),e.play()};e.addEventListener("canplay",t)}}}_startPreloadImageElement(e){(0,se.HK)(e.src)||(0,se.jc)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static _getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static _estimateTexMemRequired(e,t){if((0,o.Wi)(e))return 0;if((0,F.eP)(e)||(0,F.lq)(e))return t.encoding===D.Ti.KTX2_ENCODING?function(e,t){if((0,o.Wi)(Ae))return e.byteLength;const r=new Ae.KTX2File(new Uint8Array(e)),i=Ce(r)?Se(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),i}(e,!!t.mipmap):t.encoding===D.Ti.BASIS_ENCODING?function(e,t){if((0,o.Wi)(Ae))return e.byteLength;const r=new Ae.BasisFile(new Uint8Array(e)),i=ye(r)?Se(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),i}(e,!!t.mipmap):e.byteLength;const{width:r,height:i}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?Ue._getDataDimensions(e):t;return(t.mipmap?4/3:1)*r*i*(t.components||4)||0}dispose(){this._data=void 0}get width(){return this.params.width}get height(){return this.params.height}_createDescriptor(e){return{target:xe.No.TEXTURE_2D,pixelFormat:xe.VI.RGBA,dataType:xe.Br.UNSIGNED_BYTE,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?xe.cw.LINEAR_MIPMAP_LINEAR:xe.cw.LINEAR,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:this.params.maxAnisotropy??(this.params.mipmap?e.parameters.maxMaxAnisotropy:1)}}get glTexture(){return this._glTexture}load(e,t){if((0,o.pC)(this._glTexture))return this._glTexture;if((0,o.pC)(this._loadingPromise))return this._loadingPromise;const r=this._data;return(0,o.Wi)(r)?(this._glTexture=new Te.x(e,this._createDescriptor(e),null),this._glTexture):"string"==typeof r?this._loadFromURL(e,t,r):r instanceof Image?this._loadFromImageElement(e,t,r):r instanceof HTMLVideoElement?this._loadFromVideoElement(e,t,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this._loadFromImage(e,r,t):((0,F.eP)(r)||(0,F.lq)(r))&&this.params.encoding===D.Ti.DDS_ENCODING?(this._data=void 0,this._loadFromDDSData(e,r)):((0,F.eP)(r)||(0,F.lq)(r))&&this.params.encoding===D.Ti.KTX2_ENCODING?(this._data=void 0,this._loadFromKTX2(e,r)):((0,F.eP)(r)||(0,F.lq)(r))&&this.params.encoding===D.Ti.BASIS_ENCODING?(this._data=void 0,this._loadFromBasis(e,r)):(0,F.lq)(r)?this._loadFromPixelData(e,r):(0,F.eP)(r)?this._loadFromPixelData(e,new Uint8Array(r)):null}get requiresFrameUpdates(){return this._data instanceof HTMLVideoElement}frameUpdate(e,t,r){if(!(this._data instanceof HTMLVideoElement)||(0,o.Wi)(this._glTexture))return r;if(this._data.readyState<Le.HAVE_CURRENT_DATA||r===this._data.currentTime)return r;if((0,o.pC)(this._powerOfTwoStretchInfo)){const{framebuffer:r,vao:i,sourceTexture:o}=this._powerOfTwoStretchInfo;o.setData(this._data),this._drawStretchedTexture(e,t,r,i,o,this._glTexture)}else{const{videoWidth:e,videoHeight:t}=this._data,{width:r,height:i}=this._glTexture.descriptor;e!==r||t!==i?this._glTexture.updateData(0,0,0,Math.min(e,r),Math.min(t,i),this._data):this._glTexture.setData(this._data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.params.updateCallback&&this.params.updateCallback(),this._data.currentTime}_loadFromDDSData(e,t){return this._glTexture=function(e,t,r){const{textureData:i,internalFormat:n,width:a,height:s}=(0,o.s3)(function(e,t){const r=new Int32Array(e,0,31);if(542327876!==r[0])return Me.error("Invalid magic number in DDS header"),null;if(!(4&r[20]))return Me.error("Unsupported format, must contain a FourCC code"),null;const i=r[21];let o,n;switch(i){case Pe:o=8,n=xe.q_.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case Ne:o=16,n=xe.q_.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case Ie:o=16,n=xe.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return Me.error("Unsupported FourCC code:",function(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}(i)),null}let a=1,s=r[4],l=r[3];0==(3&s)&&0==(3&l)||(Me.warn("Rounding up compressed texture size to nearest multiple of 4."),s=s+3&-4,l=l+3&-4);const c=s,d=l;let u,h;131072&r[2]&&!1!==t&&(a=Math.max(1,r[7])),1===a||(0,ae.wt)(s)&&(0,ae.wt)(l)||(Me.warn("Ignoring mipmaps of non power of two sized compressed texture."),a=1);let f=r[1]+4;const m=[];for(let t=0;t<a;++t)h=(s+3>>2)*(l+3>>2)*o,u=new Uint8Array(e,f,h),m.push(u),f+=h,s=Math.max(1,s>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:m},internalFormat:n,width:c,height:d}}(r,t.hasMipmap??!1));return t.samplingMode=i.levels.length>1?xe.cw.LINEAR_MIPMAP_LINEAR:xe.cw.LINEAR,t.hasMipmap=i.levels.length>1,t.internalFormat=n,t.width=a,t.height=s,new Te.x(e,t,i)}(e,this._createDescriptor(e),t),this._glTexture}_loadFromKTX2(e,t){return this._loadAsync((()=>async function(e,t,r){(0,o.Wi)(Ae)&&(Ae=await we());const i=new Ae.KTX2File(new Uint8Array(r));if(!Ce(i))return null;i.startTranscoding();const n=Re(e,t,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),((e,t)=>i.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,r)=>i.transcodeImage(r,e,0,0,t,0,-1,-1)));return i.close(),i.delete(),n}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromBasis(e,t){return this._loadAsync((()=>async function(e,t,r){(0,o.Wi)(Ae)&&(Ae=await we());const i=new Ae.BasisFile(new Uint8Array(r));if(!ye(i))return null;i.startTranscoding();const n=Re(e,t,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),((e,t)=>i.getImageTranscodedSizeInBytes(0,e,t)),((e,t,r)=>i.transcodeImage(r,0,e,t,0,0)));return i.close(),i.delete(),n}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromPixelData(e,t){(0,U.hu)(this.params.width>0&&this.params.height>0);const r=this._createDescriptor(e);return r.pixelFormat=1===this.params.components?xe.VI.LUMINANCE:3===this.params.components?xe.VI.RGB:xe.VI.RGBA,r.width=this.params.width,r.height=this.params.height,this._glTexture=new Te.x(e,r,t),this._glTexture}_loadFromURL(e,t,r){return this._loadAsync((async i=>{const o=await I(r,{signal:i});return(0,P.k_)(i),this._loadFromImage(e,o,t)}))}_loadFromImageElement(e,t,r){return r.complete?this._loadFromImage(e,r,t):this._loadAsync((async i=>{const o=await(0,le.fY)(r,r.src,!1,i);return(0,P.k_)(i),this._loadFromImage(e,o,t)}))}_loadFromVideoElement(e,t,r){return r.readyState>=Le.HAVE_CURRENT_DATA?this._loadFromImage(e,r,t):this._loadFromVideoElementAsync(e,t,r)}_loadFromVideoElementAsync(e,t,r){return this._loadAsync((i=>new Promise(((n,a)=>{const s=()=>{r.removeEventListener("loadeddata",l),r.removeEventListener("error",c),(0,o.hw)(d)},l=()=>{r.readyState>=Le.HAVE_CURRENT_DATA&&(s(),n(this._loadFromImage(e,r,t)))},c=e=>{s(),a(e||new R.Z("Failed to load video"))};r.addEventListener("loadeddata",l),r.addEventListener("error",c);const d=(0,P.fu)(i,(()=>c((0,P.zE)())))}))))}_loadFromImage(e,t,r){const i=Ue._getDataDimensions(t);this.params.width=i.width,this.params.height=i.height;const o=this._createDescriptor(e);return o.pixelFormat=3===this.params.components?xe.VI.RGB:xe.VI.RGBA,!this._requiresPowerOfTwo(e,o)||(0,ae.wt)(i.width)&&(0,ae.wt)(i.height)?(o.width=i.width,o.height=i.height,this._glTexture=new Te.x(e,o,t),this._glTexture):(this._glTexture=this._makePowerOfTwoTexture(e,t,i,o,r),this._glTexture)}_loadAsync(e){const t=new AbortController;this._loadingController=t;const r=e(t.signal);this._loadingPromise=r;const i=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null)};return r.then(i,i),r}_requiresPowerOfTwo(e,t){const r=xe.e8.CLAMP_TO_EDGE,i="number"==typeof t.wrapMode?t.wrapMode===r:t.wrapMode.s===r&&t.wrapMode.t===r;return e.type===He.zO.WEBGL1&&(t.hasMipmap||!i)}_makePowerOfTwoTexture(e,t,r,i,o){const{width:n,height:a}=r,s=(0,ae.Sf)(n),l=(0,ae.Sf)(a);let c;switch(i.width=s,i.height=l,this.params.powerOfTwoResizeMode){case D.CE.PAD:i.textureCoordinateScaleFactor=[n/s,a/l],c=new Te.x(e,i),c.updateData(0,0,0,n,a,t);break;case D.CE.STRETCH:case null:case void 0:c=this._stretchToPowerOfTwo(e,t,i,o());break;default:(0,oe.Bg)(this.params.powerOfTwoResizeMode)}return i.hasMipmap&&c.generateMipmap(),c}_stretchToPowerOfTwo(e,t,r,i){const o=new Te.x(e,r),n=new Be.X(e,{colorTarget:xe.Lm.TEXTURE,depthStencilTarget:xe.OU.NONE},o),a=new Te.x(e,{target:xe.No.TEXTURE_2D,pixelFormat:r.pixelFormat,dataType:xe.Br.UNSIGNED_BYTE,wrapMode:xe.e8.CLAMP_TO_EDGE,samplingMode:xe.cw.LINEAR,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},t),s=(0,Fe.ow)(e),l=e.getBoundFramebufferObject();return this._drawStretchedTexture(e,i,n,s,a,o),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:s,sourceTexture:a,framebuffer:n}:(s.dispose(!0),a.dispose(),n.detachColorTexture(),n.dispose()),e.bindFramebuffer(l),o}_drawStretchedTexture(e,t,r,i,o,n){this._passParameters.texture=o,e.bindFramebuffer(r);const a=e.getViewport();e.setViewport(0,0,n.descriptor.width,n.descriptor.height),e.bindTechnique(t,this._passParameters,null),e.bindVAO(i),e.drawArrays(xe.MX.TRIANGLE_STRIP,0,(0,be._V)(i,"geometry")),e.bindFramebuffer(null),e.setViewport(a.x,a.y,a.width,a.height),this._passParameters.texture=null}unload(){if((0,o.pC)(this._powerOfTwoStretchInfo)){const{framebuffer:e,vao:t,sourceTexture:r}=this._powerOfTwoStretchInfo;t.dispose(!0),r.dispose(),e.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if((0,o.pC)(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),(0,o.pC)(this._loadingController)){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}(De=Le||(Le={}))[De.HAVE_NOTHING=0]="HAVE_NOTHING",De[De.HAVE_METADATA=1]="HAVE_METADATA",De[De.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",De[De.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",De[De.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA";var ze=r(80442),Ve=r(64822),Ge=r(65576),We=r(55039),ke=r(19419),$e=r(85504),qe=r(60537),je=r(82791),Xe=r(93144),Je=r(27097);const Ye=(0,Je.wK)(xe.zi.SRC_ALPHA,xe.zi.ONE,xe.zi.ONE_MINUS_SRC_ALPHA,xe.zi.ONE_MINUS_SRC_ALPHA),Ke=(0,Je.if)(xe.zi.ONE,xe.zi.ONE),Ze=(0,Je.if)(xe.zi.ZERO,xe.zi.ONE_MINUS_SRC_ALPHA);function Qe(e){return e===Xe.A.FrontFace?null:e===Xe.A.Alpha?Ze:Ke}const et={factor:-1,units:-2};function tt(e,t=xe.wb.LESS){return e===Xe.A.NONE||e===Xe.A.FrontFace?t:xe.wb.LEQUAL}var rt,it;(it=rt||(rt={}))[it.INTEGRATED_MESH=0]="INTEGRATED_MESH",it[it.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",it[it.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",it[it.TRANSPARENT_MATERIAL=3]="TRANSPARENT_MATERIAL",it[it.TRANSPARENT_TERRAIN=4]="TRANSPARENT_TERRAIN",it[it.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=5]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",it[it.OCCLUDED_TERRAIN=6]="OCCLUDED_TERRAIN",it[it.OCCLUDER_MATERIAL=7]="OCCLUDER_MATERIAL",it[it.TRANSPARENT_OCCLUDER_MATERIAL=8]="TRANSPARENT_OCCLUDER_MATERIAL",it[it.OCCLUSION_PIXELS=9]="OCCLUSION_PIXELS",it[it.POSTPROCESSING_ENVIRONMENT_OPAQUE=10]="POSTPROCESSING_ENVIRONMENT_OPAQUE",it[it.POSTPROCESSING_ENVIRONMENT_TRANSPARENT=11]="POSTPROCESSING_ENVIRONMENT_TRANSPARENT",it[it.LASERLINES=12]="LASERLINES",it[it.LASERLINES_CONTRAST_CONTROL=13]="LASERLINES_CONTRAST_CONTROL",it[it.HUD_MATERIAL=14]="HUD_MATERIAL",it[it.LABEL_MATERIAL=15]="LABEL_MATERIAL",it[it.LINE_CALLOUTS=16]="LINE_CALLOUTS",it[it.LINE_CALLOUTS_HUD_DEPTH=17]="LINE_CALLOUTS_HUD_DEPTH",it[it.DRAPED_MATERIAL=18]="DRAPED_MATERIAL",it[it.DRAPED_WATER=19]="DRAPED_WATER",it[it.VOXEL=20]="VOXEL",it[it.MAX_SLOTS=21]="MAX_SLOTS";var ot=r(51305),nt=r(94961),at=r(72119),st=r(29268);const lt=(0,d.c)(),ct=(0,d.c)(),dt=(0,d.c)(),ut=new class{constructor(e=0){this.offset=e,this.sphere=(0,st.c)(),this.tmpVertex=(0,d.c)()}applyToVertex(e,t,r){const i=this.objectTransform.transform;let o=i[0]*e+i[4]*t+i[8]*r+i[12],n=i[1]*e+i[5]*t+i[9]*r+i[13],a=i[2]*e+i[6]*t+i[10]*r+i[14];const s=this.offset/Math.sqrt(o*o+n*n+a*a);o+=o*s,n+=n*s,a+=a*s;const l=this.objectTransform.inverse;return this.tmpVertex[0]=l[0]*o+l[4]*n+l[8]*a+l[12],this.tmpVertex[1]=l[1]*o+l[5]*n+l[9]*a+l[13],this.tmpVertex[2]=l[2]*o+l[6]*n+l[10]*a+l[14],this.tmpVertex}applyToMinMax(e,t){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const i=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*i,t[1]+=t[1]*i,t[2]+=t[2]*i}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/t;return this.sphere[0]=e[0]+e[0]*r,this.sphere[1]=e[1]+e[1]*r,this.sphere[2]=e[2]+e[2]*r,this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}};new class{constructor(e=0){this.componentLocalOriginLength=0,this._tmpVertex=(0,d.c)(),this._mbs=(0,st.c)(),this._obb={center:(0,d.c)(),halfSize:(0,at.c)(),quaternion:null},this._totalOffset=0,this._offset=0,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}applyToVertex(e,t,r){const i=e,o=t,n=r+this.componentLocalOriginLength,a=this._totalOffset/Math.sqrt(i*i+o*o+n*n);return this._tmpVertex[0]=e+i*a,this._tmpVertex[1]=t+o*a,this._tmpVertex[2]=r+n*a,this._tmpVertex}applyToAabb(e){const t=e[0],r=e[1],i=e[2]+this.componentLocalOriginLength,o=e[3],n=e[4],a=e[5]+this.componentLocalOriginLength,s=t*o<0?0:Math.min(Math.abs(t),Math.abs(o)),l=r*n<0?0:Math.min(Math.abs(r),Math.abs(n)),c=i*a<0?0:Math.min(Math.abs(i),Math.abs(a)),d=Math.sqrt(s*s+l*l+c*c);if(d<this._totalOffset)return e[0]-=t<0?this._totalOffset:0,e[1]-=r<0?this._totalOffset:0,e[2]-=i<0?this._totalOffset:0,e[3]+=o>0?this._totalOffset:0,e[4]+=n>0?this._totalOffset:0,e[5]+=a>0?this._totalOffset:0,e;const u=Math.max(Math.abs(t),Math.abs(o)),h=Math.max(Math.abs(r),Math.abs(n)),f=Math.max(Math.abs(i),Math.abs(a)),m=Math.sqrt(u*u+h*h+f*f),p=this._totalOffset/m,g=this._totalOffset/d;return e[0]+=t*(t>0?p:g),e[1]+=r*(r>0?p:g),e[2]+=i*(i>0?p:g),e[3]+=o*(o<0?p:g),e[4]+=n*(n<0?p:g),e[5]+=a*(a<0?p:g),e}applyToMbs(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this._totalOffset/t;return this._mbs[0]=e[0]+e[0]*r,this._mbs[1]=e[1]+e[1]*r,this._mbs[2]=e[2]+e[2]*r,this._mbs[3]=e[3]+e[3]*this._totalOffset/t,this._mbs}applyToObb(e){const t=e.center,r=this._totalOffset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);this._obb.center[0]=t[0]+t[0]*r,this._obb.center[1]=t[1]+t[1]*r,this._obb.center[2]=t[2]+t[2]*r,(0,c.q)(this._obb.halfSize,e.halfSize,e.quaternion),(0,c.a)(this._obb.halfSize,this._obb.halfSize,e.center);const i=this._totalOffset/Math.sqrt(this._obb.halfSize[0]*this._obb.halfSize[0]+this._obb.halfSize[1]*this._obb.halfSize[1]+this._obb.halfSize[2]*this._obb.halfSize[2]);return this._obb.halfSize[0]+=this._obb.halfSize[0]*i,this._obb.halfSize[1]+=this._obb.halfSize[1]*i,this._obb.halfSize[2]+=this._obb.halfSize[2]*i,(0,c.b)(this._obb.halfSize,this._obb.halfSize,e.center),(0,ot.c)(ht,e.quaternion),(0,c.q)(this._obb.halfSize,this._obb.halfSize,ht),this._obb.halfSize[0]*=this._obb.halfSize[0]<0?-1:1,this._obb.halfSize[1]*=this._obb.halfSize[1]<0?-1:1,this._obb.halfSize[2]*=this._obb.halfSize[2]<0?-1:1,this._obb.quaternion=e.quaternion,this._obb}},new class{constructor(e=0){this.offset=e,this.tmpVertex=(0,d.c)()}applyToVertex(e,t,r){const i=e+this.localOrigin[0],o=t+this.localOrigin[1],n=r+this.localOrigin[2],a=this.offset/Math.sqrt(i*i+o*o+n*n);return this.tmpVertex[0]=e+i*a,this.tmpVertex[1]=t+o*a,this.tmpVertex[2]=r+n*a,this.tmpVertex}applyToAabb(e){for(let t=0;t<3;++t)lt[t]=e[0+t]+this.localOrigin[t],ct[t]=e[3+t]+this.localOrigin[t],dt[t]=lt[t];const t=this.applyToVertex(lt[0],lt[1],lt[2]);for(let r=0;r<3;++r)e[r]=t[r],e[r+3]=t[r];const r=t=>{const r=this.applyToVertex(t[0],t[1],t[2]);for(let t=0;t<3;++t)e[t+0]=Math.min(e[t+0],r[t]),e[t+3]=Math.max(e[t+3],r[t])};for(let e=1;e<8;++e){for(let t=0;t<3;++t)dt[t]=0==(e&1<<t)?lt[t]:ct[t];r(dt)}let i=0;for(let e=0;e<3;++e)lt[e]*ct[e]<0&&(i|=1<<e);if(0!==i&&7!==i)for(let e=0;e<8;++e)if(0==(i&e)){for(let t=0;t<3;++t)i[t]?dt[t]=0:dt[t]=0!=(e&1<<t)?lt[t]:ct[t];r(dt)}for(let t=0;t<3;++t)e[t+0]-=this.localOrigin[t],e[t+3]-=this.localOrigin[t];return e}};const ht=(0,nt.a)();function ft(e,t,r,i){const o=r.typedBuffer,n=r.typedBufferStride,a=e.length;i*=n;for(let r=0;r<a;++r){const a=2*e[r];o[i]=t[a],o[i+1]=t[a+1],i+=n}}function mt(e,t,r,i,o){const n=r.typedBuffer,a=r.typedBufferStride,s=e.length;if(i*=a,null==o||1===o)for(let r=0;r<s;++r){const o=3*e[r];n[i]=t[o],n[i+1]=t[o+1],n[i+2]=t[o+2],i+=a}else for(let r=0;r<s;++r){const s=3*e[r];for(let e=0;e<o;++e)n[i]=t[s],n[i+1]=t[s+1],n[i+2]=t[s+2],i+=a}}function pt(e,t,r,i,o=1){const n=r.typedBuffer,a=r.typedBufferStride,s=e.length;if(i*=a,1===o)for(let r=0;r<s;++r){const o=4*e[r];n[i]=t[o],n[i+1]=t[o+1],n[i+2]=t[o+2],n[i+3]=t[o+3],i+=a}else for(let r=0;r<s;++r){const s=4*e[r];for(let e=0;e<o;++e)n[i]=t[s],n[i+1]=t[s+1],n[i+2]=t[s+2],n[i+3]=t[s+3],i+=a}}function gt(e,t,r,i,o,n=1){if(!r)return void mt(e,t,i,o,n);const a=i.typedBuffer,l=i.typedBufferStride,c=e.length,d=r[0],u=r[1],h=r[2],f=r[4],m=r[5],p=r[6],g=r[8],v=r[9],_=r[10],x=r[12],T=r[13],b=r[14];o*=l;let A=0,E=0,w=0;const S=(0,s.y)(r)?e=>{A=t[e]+x,E=t[e+1]+T,w=t[e+2]+b}:e=>{const r=t[e],i=t[e+1],o=t[e+2];A=d*r+f*i+g*o+x,E=u*r+m*i+v*o+T,w=h*r+p*i+_*o+b};if(1===n)for(let t=0;t<c;++t)S(3*e[t]),a[o]=A,a[o+1]=E,a[o+2]=w,o+=l;else for(let t=0;t<c;++t){S(3*e[t]);for(let e=0;e<n;++e)a[o]=A,a[o+1]=E,a[o+2]=w,o+=l}}function vt(e,t,r,i,o,n=1){if(!r)return void mt(e,t,i,o,n);const a=r,l=i.typedBuffer,c=i.typedBufferStride,d=e.length,u=a[0],h=a[1],f=a[2],m=a[4],p=a[5],g=a[6],v=a[8],_=a[9],x=a[10],T=!(0,s.z)(a),b=1e-6,A=1-b;o*=c;let E=0,w=0,S=0;const y=(0,s.y)(a)?e=>{E=t[e],w=t[e+1],S=t[e+2]}:e=>{const r=t[e],i=t[e+1],o=t[e+2];E=u*r+m*i+v*o,w=h*r+p*i+_*o,S=f*r+g*i+x*o};if(1===n)if(T)for(let t=0;t<d;++t){y(3*e[t]);const r=E*E+w*w+S*S;if(r<A&&r>b){const e=1/Math.sqrt(r);l[o]=E*e,l[o+1]=w*e,l[o+2]=S*e}else l[o]=E,l[o+1]=w,l[o+2]=S;o+=c}else for(let t=0;t<d;++t)y(3*e[t]),l[o]=E,l[o+1]=w,l[o+2]=S,o+=c;else for(let t=0;t<d;++t){if(y(3*e[t]),T){const e=E*E+w*w+S*S;if(e<A&&e>b){const t=1/Math.sqrt(e);E*=t,w*=t,S*=t}}for(let e=0;e<n;++e)l[o]=E,l[o+1]=w,l[o+2]=S,o+=c}}function _t(e,t,r,i,o,n=1){if(!r)return void pt(e,t,i,o,n);const a=r,l=i.typedBuffer,c=i.typedBufferStride,d=e.length,u=a[0],h=a[1],f=a[2],m=a[4],p=a[5],g=a[6],v=a[8],_=a[9],x=a[10],T=!(0,s.z)(a),b=1e-6,A=1-b;if(o*=c,1===n)for(let r=0;r<d;++r){const i=4*e[r],n=t[i],a=t[i+1],s=t[i+2],d=t[i+3];let E=u*n+m*a+v*s,w=h*n+p*a+_*s,S=f*n+g*a+x*s;if(T){const e=E*E+w*w+S*S;if(e<A&&e>b){const t=1/Math.sqrt(e);E*=t,w*=t,S*=t}}l[o]=E,l[o+1]=w,l[o+2]=S,l[o+3]=d,o+=c}else for(let r=0;r<d;++r){const i=4*e[r],a=t[i],s=t[i+1],d=t[i+2],E=t[i+3];let w=u*a+m*s+v*d,S=h*a+p*s+_*d,y=f*a+g*s+x*d;if(T){const e=w*w+S*S+y*y;if(e<A&&e>b){const t=1/Math.sqrt(e);w*=t,S*=t,y*=t}}for(let e=0;e<n;++e)l[o]=w,l[o+1]=S,l[o+2]=y,l[o+3]=E,o+=c}}function xt(e,t,r,i,o,n=1){const a=i.typedBuffer,s=i.typedBufferStride,l=e.length;if(o*=s,r!==t.length||4!==r)if(1!==n)if(4!==r)for(let r=0;r<l;++r){const i=3*e[r];for(let e=0;e<n;++e)a[o]=t[i],a[o+1]=t[i+1],a[o+2]=t[i+2],a[o+3]=255,o+=s}else for(let r=0;r<l;++r){const i=4*e[r];for(let e=0;e<n;++e)a[o]=t[i],a[o+1]=t[i+1],a[o+2]=t[i+2],a[o+3]=t[i+3],o+=s}else{if(4===r){for(let r=0;r<l;++r){const i=4*e[r];a[o]=t[i],a[o+1]=t[i+1],a[o+2]=t[i+2],a[o+3]=t[i+3],o+=s}return}for(let r=0;r<l;++r){const i=3*e[r];a[o]=t[i],a[o+1]=t[i+1],a[o+2]=t[i+2],a[o+3]=255,o+=s}}else{a[o]=t[0],a[o+1]=t[1],a[o+2]=t[2],a[o+3]=t[3];const e=new Uint32Array(i.typedBuffer.buffer,i.start),r=s/4,c=e[o/=4];o+=r;const d=l*n;for(let t=1;t<d;++t)e[o]=c,o+=r}}function Tt(e,t,r,i,o=1){const n=t.typedBuffer,a=t.typedBufferStride;if(i*=a,1===o)for(let t=0;t<r;++t)n[i]=e[0],n[i+1]=e[1],n[i+2]=e[2],n[i+3]=e[3],i+=a;else for(let t=0;t<r;++t)for(let t=0;t<o;++t)n[i]=e[0],n[i+1]=e[1],n[i+2]=e[2],n[i+3]=e[3],i+=a}class bt{constructor(e){this.vertexBufferLayout=e}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(re.T.POSITION).length}write(e,t,r,i,n){!function(e,t,r,i,n,a){for(const s of t.fieldNames){const t=e.vertexAttributes.get(s),l=e.indices.get(s);if(t&&l)switch(s){case re.T.POSITION:{(0,U.hu)(3===t.size);const e=n.getField(s,h.ct);(0,U.hu)(!!e,`No buffer view for ${s}`),e&&gt(l,t.data,r,e,a);break}case re.T.NORMAL:{(0,U.hu)(3===t.size);const e=n.getField(s,h.ct);(0,U.hu)(!!e,`No buffer view for ${s}`),e&&vt(l,t.data,i,e,a);break}case re.T.UV0:{(0,U.hu)(2===t.size);const e=n.getField(s,h.Eu);(0,U.hu)(!!e,`No buffer view for ${s}`),e&&ft(l,t.data,e,a);break}case re.T.COLOR:case re.T.SYMBOLCOLOR:{(0,U.hu)(3===t.size||4===t.size);const e=n.getField(s,h.mc);(0,U.hu)(!!e,`No buffer view for ${s}`),e&&xt(l,t.data,t.size,e,a);break}case re.T.TANGENT:{(0,U.hu)(4===t.size);const e=n.getField(s,h.ek);(0,U.hu)(!!e,`No buffer view for ${s}`),e&&_t(l,t.data,i,e,a);break}case re.T.PROFILERIGHT:case re.T.PROFILEUP:case re.T.PROFILEVERTEXANDNORMAL:case re.T.FEATUREVALUE:{(0,U.hu)(4===t.size);const e=n.getField(s,h.ek);(0,U.hu)(!!e,`No buffer view for ${s}`),e&&pt(l,t.data,e,a)}}else if(s===re.T.OBJECTANDLAYERIDCOLOR&&(0,o.pC)(e.objectAndLayerIdColor)){const t=e.indices.get(re.T.POSITION);if((0,U.hu)(!!t,`No buffer view for ${s}`),t){const r=t.length,i=n.getField(s,h.mc);Tt(e.objectAndLayerIdColor,i,r,a)}}}}(r,this.vertexBufferLayout,e,t,i,n)}}var At=r(57790),Et=r(64267),wt=r(135),St=r(15719),yt=r(96310),Ct=r(78869),Rt=r(14589),Mt=r(83475),Ot=r(59377);xe.wb.LESS,xe.wb.ALWAYS;const Pt={mask:255},Nt={function:{func:xe.wb.ALWAYS,ref:D.hU.OutlineVisualElementMask,mask:D.hU.OutlineVisualElementMask},operation:{fail:xe.xS.KEEP,zFail:xe.xS.KEEP,zPass:xe.xS.ZERO}},It={function:{func:xe.wb.ALWAYS,ref:D.hU.OutlineVisualElementMask,mask:D.hU.OutlineVisualElementMask},operation:{fail:xe.xS.KEEP,zFail:xe.xS.KEEP,zPass:xe.xS.REPLACE}};xe.wb.EQUAL,D.hU.OutlineVisualElementMask,D.hU.OutlineVisualElementMask,xe.xS.KEEP,xe.xS.KEEP,xe.xS.KEEP,xe.wb.NOTEQUAL,D.hU.OutlineVisualElementMask,D.hU.OutlineVisualElementMask,xe.xS.KEEP,xe.xS.KEEP,xe.xS.KEEP;var Lt=r(32078);class Dt extends St.d4{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=(0,d.f)(0,1,.5),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=D.Vr.Back,this.emissiveFactor=(0,d.f)(0,0,0),this.instancedDoublePrecision=!1,this.normalType=Et.h.Attribute,this.receiveSSAO=!0,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=(0,d.f)(.2,.2,.2),this.diffuse=(0,d.f)(.8,.8,.8),this.externalColor=(0,ce.f)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,d.c)(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSizeEnabled=!1,this.vvSizeMinSize=[1,1,1],this.vvSizeMaxSize=[100,100,100],this.vvSizeOffset=[0,0,0],this.vvSizeFactor=[1,1,1],this.vvSizeValue=[1,1,1],this.vvColorEnabled=!1,this.vvColorValues=[0,0,0,0,0,0,0,0],this.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],this.vvSymbolAnchor=[0,0,0],this.vvSymbolRotationMatrix=(0,a.c)(),this.vvOpacityEnabled=!1,this.vvOpacityValues=[],this.vvOpacityOpacities=[],this.transparent=!1,this.writeDepth=!0,this.customDepthTest=D.Gv.Less,this.textureAlphaMode=D.JJ.Blend,this.textureAlphaCutoff=yt.F,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=je.yD.Occlude}}class Ft extends Rt.A{initializeConfiguration(e,t){t.hasWebGL2Context=e.rctx.type===He.zO.WEBGL2,t.spherical=e.viewingMode===Ve.JY.Global,t.doublePrecisionRequiresObfuscation=e.rctx.driverTest.doublePrecisionRequiresObfuscation.result,t.textureCoordinateType=t.hasColorTexture||t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture||t.hasNormalTexture?wt.N.Default:wt.N.None,t.objectAndLayerIdColorInstanced=t.instanced}initializeProgram(e){return this._initializeProgram(e,Ft.shader)}_initializeProgram(e,t){return new Ot.$(e.rctx,t.get().build(this.configuration),Mt.i)}_convertDepthTestFunction(e){return e===D.Gv.Lequal?xe.wb.LEQUAL:xe.wb.LESS}_makePipeline(e,t){const r=this.configuration,i=e===Xe.A.NONE,o=e===Xe.A.FrontFace;return(0,Je.sm)({blending:r.output!==We.H.Color&&r.output!==We.H.Alpha||!r.transparent?null:i?Ye:Qe(e),culling:Ht(r)?(0,Je.zp)(r.cullFace):null,depthTest:{func:tt(e,this._convertDepthTestFunction(r.customDepthTest))},depthWrite:(i||o)&&r.writeDepth?Je.LZ:null,colorWrite:Je.BK,stencilWrite:r.hasOccludees?Pt:null,stencilTest:r.hasOccludees?t?It:Nt:null,polygonOffset:i||o?null:(n=r.enableOffset,n?et:null)});var n}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}function Ht(e){return e.cullFace!==D.Vr.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}Ft.shader=new Ct.J(Lt.D,(()=>r.e(9291).then(r.bind(r,79291))));var Bt=r(43697),Ut=r(51354),zt=r(67498);class Vt extends Ut.m{constructor(){super(...arguments),this.hasWebGL2Context=!1}}(0,Bt._)([(0,Ut.o)({constValue:!0})],Vt.prototype,"hasSliceHighlight",void 0),(0,Bt._)([(0,Ut.o)({constValue:!1})],Vt.prototype,"hasSliceInVertexProgram",void 0),(0,Bt._)([(0,Ut.o)({constValue:!1})],Vt.prototype,"instancedDoublePrecision",void 0),(0,Bt._)([(0,Ut.o)({constValue:!1})],Vt.prototype,"useLegacyTerrainShading",void 0),(0,Bt._)([(0,Ut.o)({constValue:!1})],Vt.prototype,"hasModelTransformation",void 0),(0,Bt._)([(0,Ut.o)({constValue:zt.P.Pass})],Vt.prototype,"pbrTextureBindType",void 0),(0,Bt._)([(0,Ut.o)()],Vt.prototype,"hasWebGL2Context",void 0);class Gt extends Vt{constructor(){super(...arguments),this.output=We.H.Color,this.alphaDiscardMode=D.JJ.Opaque,this.doubleSidedMode=ke.q.None,this.pbrMode=$e.f7.Disabled,this.cullFace=D.Vr.None,this.transparencyPassType=Xe.A.NONE,this.normalType=Et.h.Attribute,this.textureCoordinateType=wt.N.None,this.customDepthTest=D.Gv.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}(0,Bt._)([(0,Ut.o)({count:We.H.COUNT})],Gt.prototype,"output",void 0),(0,Bt._)([(0,Ut.o)({count:D.JJ.COUNT})],Gt.prototype,"alphaDiscardMode",void 0),(0,Bt._)([(0,Ut.o)({count:ke.q.COUNT})],Gt.prototype,"doubleSidedMode",void 0),(0,Bt._)([(0,Ut.o)({count:$e.f7.COUNT})],Gt.prototype,"pbrMode",void 0),(0,Bt._)([(0,Ut.o)({count:D.Vr.COUNT})],Gt.prototype,"cullFace",void 0),(0,Bt._)([(0,Ut.o)({count:Xe.A.COUNT})],Gt.prototype,"transparencyPassType",void 0),(0,Bt._)([(0,Ut.o)({count:Et.h.COUNT})],Gt.prototype,"normalType",void 0),(0,Bt._)([(0,Ut.o)({count:wt.N.COUNT})],Gt.prototype,"textureCoordinateType",void 0),(0,Bt._)([(0,Ut.o)({count:D.Gv.COUNT})],Gt.prototype,"customDepthTest",void 0),(0,Bt._)([(0,Ut.o)()],Gt.prototype,"spherical",void 0),(0,Bt._)([(0,Ut.o)()],Gt.prototype,"hasVertexColors",void 0),(0,Bt._)([(0,Ut.o)()],Gt.prototype,"hasSymbolColors",void 0),(0,Bt._)([(0,Ut.o)()],Gt.prototype,"hasVerticalOffset",void 0),(0,Bt._)([(0,Ut.o)()],Gt.prototype,"hasSlicePlane",void 0),(0,Bt._)([(0,Ut.o)()],Gt.prototype,"hasSliceHighlight",void 0),(0,Bt._)([(0,Ut.o)()],Gt.prototype,"hasColorTexture",void 0),(0,Bt._)([(0,Ut.o)()],Gt.prototype,"hasMetallicRoughnessTexture",void 0),(0,Bt._)([(0,Ut.o)()],Gt.prototype,"hasEmissionTexture",void 0),(0,Bt._)([(0,Ut.o)()],Gt.prototype,"hasOcclusionTexture",void 0),(0,Bt._)([(0,Ut.o)()],Gt.prototype,"hasNormalTexture",void 0),(0,Bt._)([(0,Ut.o)()],Gt.prototype,"hasScreenSizePerspective",void 0),(0,Bt._)([(0,Ut.o)()],Gt.prototype,"hasVertexTangents",void 0),(0,Bt._)([(0,Ut.o)()],Gt.prototype,"hasOccludees",void 0),(0,Bt._)([(0,Ut.o)()],Gt.prototype,"hasMultipassTerrain",void 0),(0,Bt._)([(0,Ut.o)()],Gt.prototype,"hasModelTransformation",void 0),(0,Bt._)([(0,Ut.o)()],Gt.prototype,"offsetBackfaces",void 0),(0,Bt._)([(0,Ut.o)()],Gt.prototype,"vvSize",void 0),(0,Bt._)([(0,Ut.o)()],Gt.prototype,"vvColor",void 0),(0,Bt._)([(0,Ut.o)()],Gt.prototype,"receiveShadows",void 0),(0,Bt._)([(0,Ut.o)()],Gt.prototype,"receiveAmbientOcclusion",void 0),(0,Bt._)([(0,Ut.o)()],Gt.prototype,"textureAlphaPremultiplied",void 0),(0,Bt._)([(0,Ut.o)()],Gt.prototype,"instanced",void 0),(0,Bt._)([(0,Ut.o)()],Gt.prototype,"instancedColor",void 0),(0,Bt._)([(0,Ut.o)()],Gt.prototype,"objectAndLayerIdColorInstanced",void 0),(0,Bt._)([(0,Ut.o)()],Gt.prototype,"instancedDoublePrecision",void 0),(0,Bt._)([(0,Ut.o)()],Gt.prototype,"doublePrecisionRequiresObfuscation",void 0),(0,Bt._)([(0,Ut.o)()],Gt.prototype,"writeDepth",void 0),(0,Bt._)([(0,Ut.o)()],Gt.prototype,"transparent",void 0),(0,Bt._)([(0,Ut.o)()],Gt.prototype,"enableOffset",void 0),(0,Bt._)([(0,Ut.o)()],Gt.prototype,"cullAboveGround",void 0),(0,Bt._)([(0,Ut.o)()],Gt.prototype,"snowCover",void 0),(0,Bt._)([(0,Ut.o)()],Gt.prototype,"hasColorTextureTransform",void 0),(0,Bt._)([(0,Ut.o)()],Gt.prototype,"hasEmissionTextureTransform",void 0),(0,Bt._)([(0,Ut.o)()],Gt.prototype,"hasNormalTextureTransform",void 0),(0,Bt._)([(0,Ut.o)()],Gt.prototype,"hasOcclusionTextureTransform",void 0),(0,Bt._)([(0,Ut.o)()],Gt.prototype,"hasMetallicRoughnessTextureTransform",void 0),(0,Bt._)([(0,Ut.o)({constValue:!0})],Gt.prototype,"hasVvInstancing",void 0),(0,Bt._)([(0,Ut.o)({constValue:!1})],Gt.prototype,"useCustomDTRExponentForWater",void 0),(0,Bt._)([(0,Ut.o)({constValue:!1})],Gt.prototype,"supportsTextureAtlas",void 0),(0,Bt._)([(0,Ut.o)({constValue:!0})],Gt.prototype,"useFillLights",void 0);var Wt=r(41846);class kt extends Ft{initializeConfiguration(e,t){super.initializeConfiguration(e,t),t.hasMetallicRoughnessTexture=!1,t.hasEmissionTexture=!1,t.hasOcclusionTexture=!1,t.hasNormalTexture=!1,t.hasModelTransformation=!1,t.normalType=Et.h.Attribute,t.doubleSidedMode=ke.q.WindingOrder,t.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,kt.shader)}}kt.shader=new Ct.J(Wt.R,(()=>r.e(8096).then(r.bind(r,38096))));class $t extends je.F5{constructor(e){super(e,jt),this.supportsEdges=!0,this._configuration=new Gt,this._vertexBufferLayout=function(e){const t=(0,Ge.U$)().vec3f(re.T.POSITION).vec3f(re.T.NORMAL),r=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId;return e.hasVertexTangents&&t.vec4f(re.T.TANGENT),r&&t.vec2f(re.T.UV0),e.hasVertexColors&&t.vec4u8(re.T.COLOR),e.hasSymbolColors&&t.vec4u8(re.T.SYMBOLCOLOR),(0,ze.Z)("enable-feature:objectAndLayerId-rendering")&&t.vec4u8(re.T.OBJECTANDLAYERIDCOLOR),t}(this.parameters)}isVisibleForOutput(e){return e!==We.H.Shadow&&e!==We.H.ShadowExcludeHighlight&&e!==We.H.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const{instanced:t,hasVertexColors:r,hasSymbolColors:i,vvColorEnabled:n}=e,a=(0,o.pC)(t)&&t.includes("color"),s="replace"===e.colorMixMode,l=e.opacity>0,c=e.externalColor&&e.externalColor[3]>0;return r&&(a||n||i)?!!s||l:r?s?c:l:a||n||i?!!s||l:s?c:l}getConfiguration(e,t){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=!!this.parameters.instanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=this.parameters.vvSizeEnabled,this._configuration.hasVerticalOffset=(0,o.pC)(this.parameters.verticalOffset),this._configuration.hasScreenSizePerspective=(0,o.pC)(this.parameters.screenSizePerspective),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,(0,o.pC)(this.parameters.customDepthTest)&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?D.Vr.None:this.parameters.cullFace,this._configuration.hasMultipassTerrain=t.multipassTerrain.enabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=(0,o.pC)(this.parameters.modelTransformation),e!==We.H.Color&&e!==We.H.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=ke.q.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?ke.q.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?ke.q.WindingOrder:ke.q.None,this._configuration.instancedColor=(0,o.pC)(this.parameters.instanced)&&this.parameters.instanced.includes("color"),this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=!!t.ssaoHelper.active&&this.parameters.receiveSSAO,this._configuration.vvColor=this.parameters.vvColorEnabled,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?$e.f7.Schematic:$e.f7.Normal:$e.f7.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<5e5,this._configuration.snowCover=this.hasSnowCover(t),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return(0,o.pC)(e.weather)&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}intersect(e,t,r,i,n,a){if((0,o.pC)(this.parameters.verticalOffset)){const e=r.camera;(0,c.s)(Qt,t[12],t[13],t[14]);let o=null;switch(r.viewingMode){case Ve.JY.Global:o=(0,c.n)(Kt,Qt);break;case Ve.JY.Local:o=(0,c.c)(Kt,Yt)}let a=0;const s=(0,c.b)(er,Qt,e.eye),l=(0,c.l)(s),d=(0,c.g)(s,s,1/l);let u=null;this.parameters.screenSizePerspective&&(u=(0,c.e)(o,d)),a+=(0,At.Hx)(e,l,this.parameters.verticalOffset,u??0,this.parameters.screenSizePerspective),(0,c.g)(o,o,a),(0,c.t)(Zt,o,r.transform.inverseRotation),i=(0,c.b)(Xt,i,Zt),n=(0,c.b)(Jt,n,Zt)}var s;(0,At.Bw)(e,r,i,n,(s=r.verticalOffset,(0,o.pC)(s)?(ut.offset=s,ut):null),a)}requiresSlot(e,t){return!(t!==We.H.Color&&t!==We.H.Alpha&&t!==We.H.Depth&&t!==We.H.Normal&&t!==We.H.Shadow&&t!==We.H.ShadowHighlight&&t!==We.H.ShadowExcludeHighlight&&t!==We.H.Highlight&&t!==We.H.ObjectAndLayerIdColor||e!==(this.parameters.transparent?this.parameters.writeDepth?rt.TRANSPARENT_MATERIAL:rt.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:rt.OPAQUE_MATERIAL)&&e!==rt.DRAPED_MATERIAL)}createGLMaterial(e){return new qt(e)}createBufferWriter(){return new bt(this._vertexBufferLayout)}}class qt extends qe.F{constructor(e){super({...e,...e.material.parameters})}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){this._output!==We.H.Color&&this._output!==We.H.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e));const t=this._material.parameters;this.updateTexture(t.textureId);const r=e.camera.viewInverseTransposeMatrix;return(0,c.s)(t.origin,r[3],r[7],r[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(t.treeRendering?kt:Ft,e)}}const jt=new class extends Dt{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}},Xt=(0,d.c)(),Jt=(0,d.c)(),Yt=(0,d.f)(0,0,1),Kt=(0,d.c)(),Zt=(0,d.c)(),Qt=(0,d.c)(),er=(0,d.c)(),tr=M.Z.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");function rr(e){throw new R.Z("",`Request for object resource failed: ${e}`)}function ir(e){const t=e.params,r=t.topology;let i=!0;switch(t.vertexAttributes||(tr.warn("Geometry must specify vertex attributes"),i=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(tr.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),i=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(tr.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),i=!1)):(tr.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),i=!1)}}else tr.warn("Indexed geometries must specify faces"),i=!1;break}default:tr.warn(`Unsupported topology '${r}'`),i=!1}e.params.material||(tr.warn("Geometry requires material"),i=!1);const o=e.params.vertexAttributes;for(const e in o)o[e].values||(tr.warn("Geometries with externally defined attributes are not yet supported"),i=!1);return i}function or(e){const t=(0,u.cS)();return e.forEach((e=>{const r=e.boundingInfo;(0,o.pC)(r)&&((0,u.pp)(t,r.bbMin),(0,u.pp)(t,r.bbMax))})),t}function nr(e){switch(e){case"mask":return D.JJ.Mask;case"maskAndTransparency":return D.JJ.MaskBlend;case"none":return D.JJ.Opaque;default:return D.JJ.Blend}}function ar(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const sr=new N.G(1,2,"wosr");var lr=r(57758),cr=r(10816),dr=r(75488),ur=r(56067);async function hr(e,t){const r=fr((0,i.pJ)(e));if("wosr"===r.fileType){const e=await(t.cache?t.cache.loadWOSR(r.url,t):async function(e,t){const r=await async function(e,t){const r=(0,o.pC)(t)&&t.streamDataRequester;if(r)return async function(e,t,r){const i=await(0,y.q6)(t.request(e,"json",r));if(!0===i.ok)return i.value;(0,P.r9)(i.error),rr(i.error.details.url)}(e,r,t);const i=await(0,y.q6)((0,S.default)(e,(0,o.Wg)(t)));if(!0===i.ok)return i.value.data;(0,P.r9)(i.error),rr(i.error)}(e,t),i=await async function(e,t){const r=[];for(const i in e){const n=e[i],a=n.images[0].data;if(!a){tr.warn("Externally referenced texture data is not yet supported");continue}const s=n.encoding+";base64,"+a,l="/textureDefinitions/"+i,c="rgba"===n.channels?n.alphaChannelUsage||"transparency":"none",d={noUnpackFlip:!0,wrap:{s:xe.e8.REPEAT,t:xe.e8.REPEAT},preMultiplyAlpha:nr(c)!==D.JJ.Opaque},u=(0,o.pC)(t)&&t.disableTextures?Promise.resolve(null):I(s,t);r.push(u.then((e=>({refId:l,image:e,params:d,alphaChannelUsage:c}))))}const i=await Promise.all(r),n={};for(const e of i)n[e.refId]=e;return n}(r.textureDefinitions??{},t);let n=0;for(const e in i)if(i.hasOwnProperty(e)){const t=i[e];n+=t?.image?t.image.width*t.image.height*4:0}return{resource:r,textures:i,size:n+(0,C.Ul)(r)}}(r.url,t)),{engineResources:i,referenceBoundingBox:n}=function(e,t){const r=new Array,i=new Array,n=new Array,a=new O,s=e.resource,l=N.G.parse(s.version||"1.0","wosr");sr.validate(l);const c=s.model.name,u=s.model.geometries,h=s.materialDefinitions??{},f=e.textures;let m=0;const p=new Map;for(let e=0;e<u.length;e++){const s=u[e];if(!ir(s))continue;const l=ar(s),c=s.params.vertexAttributes,g=[];for(const e in c){const t=c[e],r=t.values;g.push([e,new L.a(r,t.valuesPerElement,!0)])}const v=[];if("PerAttributeArray"!==s.params.topology){const e=s.params.faces;for(const t in e)v.push([t,e[t].values])}const _=l.texture,x=f&&f[_];if(x&&!p.has(_)){const{image:e,params:t}=x,r=new Ue(e,t);i.push(r),p.set(_,r)}const T=p.get(_),b=T?T.id:void 0,A=l.material;let E=a.get(A,_);if((0,o.Wi)(E)){const e=h[A.substring(A.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=x&&x.alphaChannelUsage,i=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,n=x?nr(x.alphaChannelUsage):void 0,s={ambient:(0,d.d)(e.diffuse),diffuse:(0,d.d)(e.diffuse),opacity:1-(e.transparency||0),transparent:i,textureAlphaMode:n,textureAlphaCutoff:.33,textureId:b,initTextureTransparent:!0,doubleSided:!0,cullFace:D.Vr.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!!x&&!!x.params.preMultiplyAlpha};(0,o.pC)(t)&&t.materialParamsMixin&&Object.assign(s,t.materialParamsMixin),E=new $t(s),a.set(A,_,E)}n.push(E);const w=new ie(E,g,v);m+=v.position?v.position.length:0,r.push(w)}return{engineResources:[{name:c,stageResources:{textures:i,materials:n,geometries:r},pivotOffset:s.model.pivotOffset,numberOfVertices:m,lodThreshold:null}],referenceBoundingBox:or(r)}}(e,t);return{lods:i,referenceBoundingBox:n,isEsriSymbolResource:!1,isWosr:!0}}const n=await(t.cache?t.cache.loadGLTF(r.url,t,!!t.usePBR):(0,v.Q)(new g.C(t.streamDataRequester),r.url,t,t.usePBR)),a=(0,o.U2)(n.model.meta,"ESRI_proxyEllipsoid"),u=n.meta.isEsriSymbolResource&&(0,o.pC)(a)&&n.meta.uri.includes("/RealisticTrees/");u&&!n.customMeta.esriTreeRendering&&(n.customMeta.esriTreeRendering=!0,function(e,t){for(let r=0;r<e.model.lods.length;++r){const i=e.model.lods[r];for(const n of i.parts){const i=n.attributes.normal;if((0,o.Wi)(i))return;const a=n.attributes.position,u=a.count,f=(0,d.c)(),m=(0,d.c)(),g=(0,d.c)(),v=(0,p.gS)(h.mc,u),_=(0,p.gS)(h.ct,u),x=(0,s.a)((0,l.c)(),n.transform);for(let o=0;o<u;o++){a.getVec(o,m),i.getVec(o,f),(0,c.m)(m,m,n.transform),(0,c.b)(g,m,t.center),(0,c.C)(g,g,t.radius);const s=g[2],l=(0,c.l)(g),d=Math.min(.45+.55*l*l,1);(0,c.C)(g,g,t.radius),null!==x&&(0,c.m)(g,g,x),(0,c.n)(g,g),r+1!==e.model.lods.length&&e.model.lods.length>1&&(0,c.h)(g,g,f,s>-1?.2:Math.min(-4*s-3.8,1)),_.setVec(o,g),v.set(o,0,255*d),v.set(o,1,255*d),v.set(o,2,255*d),v.set(o,3,255)}n.attributes.normal=_,n.attributes.color=v}}}(n,a));const f=!!t.usePBR,m=n.meta.isEsriSymbolResource?{usePBR:f,isSchematic:!1,treeRendering:u,mrrFactors:[0,1,.2]}:{usePBR:f,isSchematic:!1,treeRendering:!1,mrrFactors:[0,1,.5]},_={...t.materialParamsMixin,treeRendering:u},{engineResources:x,referenceBoundingBox:T}=mr(n,m,_,t.skipHighLods&&null==r.specifiedLodIndex?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:r.specifiedLodIndex});return{lods:x,referenceBoundingBox:T,isEsriSymbolResource:n.meta.isEsriSymbolResource,isWosr:!1}}function fr(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function mr(e,t,r,i){const a=e.model,s=new Array,l=new Map,c=new Map,d=a.lods.length,g=(0,u.cS)();return a.lods.forEach(((e,v)=>{const T=!0===i.skipHighLods&&(d>1&&0===v||d>3&&1===v)||!1===i.skipHighLods&&null!=i.singleLodIndex&&v!==i.singleLodIndex;if(T&&0!==v)return;const b=new w(e.name,e.lodThreshold,[0,0,0]);e.parts.forEach((e=>{const i=T?new $t({}):function(e,t,r,i,n,a,s){const l=t.material+(t.attributes.normal?"_normal":"")+(t.attributes.color?"_color":"")+(t.attributes.texCoord0?"_texCoord0":"")+(t.attributes.tangent?"_tangent":""),c=e.materials.get(t.material),d=(0,o.pC)(t.attributes.texCoord0),u=(0,o.pC)(t.attributes.normal);if((0,o.Wi)(c))return null;const h=function(e){switch(e){case"BLEND":return D.JJ.Blend;case"MASK":return D.JJ.Mask;case"OPAQUE":case null:case void 0:return D.JJ.Opaque}}(c.alphaMode);if(!a.has(l)){if(d){const t=(t,r=!1)=>{if((0,o.pC)(t)&&!s.has(t)){const i=e.textures.get(t);if((0,o.pC)(i)){const e=i.data;s.set(t,new Ue((0,x.$A)(e)?e.data:e,{...i.parameters,preMultiplyAlpha:!(0,x.$A)(e)&&r,encoding:(0,x.$A)(e)&&(0,o.pC)(e.encoding)?e.encoding:void 0}))}}};t(c.textureColor,h!==D.JJ.Opaque),t(c.textureNormal),t(c.textureOcclusion),t(c.textureEmissive),t(c.textureMetallicRoughness)}const r=c.color[0]**(1/lr.K),f=c.color[1]**(1/lr.K),m=c.color[2]**(1/lr.K),p=c.emissiveFactor[0]**(1/lr.K),g=c.emissiveFactor[1]**(1/lr.K),v=c.emissiveFactor[2]**(1/lr.K),_=(0,o.pC)(c.textureColor)&&d?s.get(c.textureColor):null;a.set(l,new $t({...i,transparent:h===D.JJ.Blend,customDepthTest:D.Gv.Lequal,textureAlphaMode:h,textureAlphaCutoff:c.alphaCutoff,diffuse:[r,f,m],ambient:[r,f,m],opacity:c.opacity,doubleSided:c.doubleSided,doubleSidedType:"winding-order",cullFace:c.doubleSided?D.Vr.None:D.Vr.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:u?Et.h.Attribute:Et.h.ScreenDerivative,castShadows:!0,receiveSSAO:!0,textureId:(0,o.pC)(_)?_.id:void 0,colorMixMode:c.colorMixMode,normalTextureId:(0,o.pC)(c.textureNormal)&&d?s.get(c.textureNormal).id:void 0,textureAlphaPremultiplied:(0,o.pC)(_)&&!!_.params.preMultiplyAlpha,occlusionTextureId:(0,o.pC)(c.textureOcclusion)&&d?s.get(c.textureOcclusion).id:void 0,emissiveTextureId:(0,o.pC)(c.textureEmissive)&&d?s.get(c.textureEmissive).id:void 0,metallicRoughnessTextureId:(0,o.pC)(c.textureMetallicRoughness)&&d?s.get(c.textureMetallicRoughness).id:void 0,emissiveFactor:[p,g,v],mrrFactors:[c.metallicFactor,c.roughnessFactor,i.mrrFactors[2]],isSchematic:!1,colorTextureTransformMatrix:A(c.colorTextureTransform),normalTextureTransformMatrix:A(c.normalTextureTransform),occlusionTextureTransformMatrix:A(c.occlusionTextureTransform),emissiveTextureTransformMatrix:A(c.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:A(c.metallicRoughnessTextureTransform),...n}))}const f=a.get(l);if(r.stageResources.materials.push(f),d){const e=e=>{(0,o.pC)(e)&&r.stageResources.textures.push(s.get(e))};e(c.textureColor),e(c.textureNormal),e(c.textureOcclusion),e(c.textureEmissive),e(c.textureMetallicRoughness)}return f}(a,e,b,t,r,l,c),{geometry:s,vertexCount:d}=function(e,t){const r=e.attributes.position.count,i=function(e,t){switch(t){case xe.MX.TRIANGLES:return(0,_.nh)(e);case xe.MX.TRIANGLE_STRIP:return(0,_.DA)(e);case xe.MX.TRIANGLE_FAN:return(0,_.jX)(e)}}(e.indices||r,e.primitiveType),a=(0,p.gS)(h.ct,r);(0,f.t)(a,e.attributes.position,e.transform);const s=[[re.T.POSITION,new L.a(a.typedBuffer,a.elementCount,!0)]],l=[[re.T.POSITION,i]];if((0,o.pC)(e.attributes.normal)){const t=(0,p.gS)(h.ct,r);(0,n.b)(pr,e.transform),(0,f.a)(t,e.attributes.normal,pr),s.push([re.T.NORMAL,new L.a(t.typedBuffer,t.elementCount,!0)]),l.push([re.T.NORMAL,i])}if((0,o.pC)(e.attributes.tangent)){const t=(0,p.gS)(h.ek,r);(0,n.b)(pr,e.transform),(0,m.t)(t,e.attributes.tangent,pr),s.push([re.T.TANGENT,new L.a(t.typedBuffer,t.elementCount,!0)]),l.push([re.T.TANGENT,i])}if((0,o.pC)(e.attributes.texCoord0)){const t=(0,p.gS)(h.Eu,r);(0,cr.n)(t,e.attributes.texCoord0),s.push([re.T.UV0,new L.a(t.typedBuffer,t.elementCount,!0)]),l.push([re.T.UV0,i])}if((0,o.pC)(e.attributes.color)){const t=(0,p.gS)(h.mc,r);if(4===e.attributes.color.elementCount)e.attributes.color instanceof h.ek?(0,m.s)(t,e.attributes.color,255):e.attributes.color instanceof h.mc?(0,dr.c)(t,e.attributes.color):e.attributes.color instanceof h.v6&&(0,m.s)(t,e.attributes.color,1/256);else{(0,dr.f)(t,255,255,255,255);const r=new h.ne(t.buffer,0,4);e.attributes.color instanceof h.ct?(0,f.s)(r,e.attributes.color,255):e.attributes.color instanceof h.ne?(0,ur.c)(r,e.attributes.color):e.attributes.color instanceof h.mw&&(0,f.s)(r,e.attributes.color,1/256)}s.push([re.T.COLOR,new L.a(t.typedBuffer,t.elementCount,!0)]),l.push([re.T.COLOR,i])}return{geometry:new ie(t,s,l),vertexCount:r}}(e,(0,o.pC)(i)?i:new $t({})),E=s.boundingInfo;(0,o.pC)(E)&&0===v&&((0,u.pp)(g,E.bbMin),(0,u.pp)(g,E.bbMax)),(0,o.pC)(i)&&(b.stageResources.geometries.push(s),b.numberOfVertices+=d)})),T||s.push(b)})),{engineResources:s,referenceBoundingBox:g}}const pr=(0,a.c)()},65576:(e,t,r)=>{r.d(t,{U$:()=>s});var i=r(56481),o=r(79583);class n{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const t of e.fieldNames){const r=e.fields.get(t);this[t]=new r.constructor(this.buffer,r.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const r=this[e];return r&&r.elementCount===t.ElementCount&&r.elementType===t.ElementType?r:null}slice(e,t){return new n(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t,r,i){const o=this.stride;if(o%4==0){const n=new Uint32Array(e.buffer,t*o,i*o/4);new Uint32Array(this.buffer,r*o,i*o/4).set(n)}else{const n=new Uint8Array(e.buffer,t*o,i*o);new Uint8Array(this.buffer,r*o,i*o).set(n)}}}class a{constructor(){this.stride=0,this.fields=new Map,this.fieldNames=[]}vec2f(e,t){return this._appendField(e,i.Eu,t),this}vec2f64(e,t){return this._appendField(e,i.q6,t),this}vec3f(e,t){return this._appendField(e,i.ct,t),this}vec3f64(e,t){return this._appendField(e,i.fP,t),this}vec4f(e,t){return this._appendField(e,i.ek,t),this}vec4f64(e,t){return this._appendField(e,i.Cd,t),this}mat3f(e,t){return this._appendField(e,i.gK,t),this}mat3f64(e,t){return this._appendField(e,i.ey,t),this}mat4f(e,t){return this._appendField(e,i.bj,t),this}mat4f64(e,t){return this._appendField(e,i.O1,t),this}vec4u8(e,t){return this._appendField(e,i.mc,t),this}f32(e,t){return this._appendField(e,i.ly,t),this}f64(e,t){return this._appendField(e,i.oS,t),this}u8(e,t){return this._appendField(e,i.D_,t),this}u16(e,t){return this._appendField(e,i.av,t),this}i8(e,t){return this._appendField(e,i.Hz,t),this}vec2i8(e,t){return this._appendField(e,i.Vs,t),this}vec2i16(e,t){return this._appendField(e,i.or,t),this}vec2u8(e,t){return this._appendField(e,i.xA,t),this}vec4u16(e,t){return this._appendField(e,i.v6,t),this}u32(e,t){return this._appendField(e,i.Nu,t),this}_appendField(e,t,r){const i=t.ElementCount*(0,o.n1)(t.ElementType),n=this.stride;this.fields.set(e,{size:i,constructor:t,offset:n,optional:r}),this.stride+=i,this.fieldNames.push(e)}alignTo(e){return this.stride=Math.floor((this.stride+e-1)/e)*e,this}hasField(e){return this.fieldNames.includes(e)}createBuffer(e){return new n(this,e)}createView(e){return new n(this,e)}clone(){const e=new a;return e.stride=this.stride,e.fields=new Map,this.fields.forEach(((t,r)=>e.fields.set(r,t))),e.fieldNames=this.fieldNames.slice(),e.BufferType=this.BufferType,e}}function s(){return new a}},1391:(e,t,r)=>{r.d(t,{Zu:()=>l,bA:()=>c,qj:()=>d});var i=r(55039),o=r(2095),n=r(19693),a=r(74709);function s(e){e.varyings.add("linearDepth","float")}function l(e){e.vertex.uniforms.add(new n.A("nearFar",((e,t)=>t.camera.nearFar)))}function c(e){e.vertex.code.add(a.H`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function d(e,t){const{vertex:r}=e;switch(t.output){case i.H.Color:if(t.receiveShadows)return s(e),void r.code.add(a.H`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case i.H.Depth:case i.H.Shadow:case i.H.ShadowHighlight:case i.H.ShadowExcludeHighlight:return e.include(o.up,t),s(e),l(e),c(e),void r.code.add(a.H`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(a.H`void forwardLinearDepth() {}`)}},62707:(e,t,r)=>{r.d(t,{w:()=>o});var i=r(74709);function o(e){e.vertex.code.add(i.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},51666:(e,t,r)=>{r.d(t,{k:()=>n});var i=r(74709),o=r(35065);function n(e,t=!0){e.attributes.add(o.T.POSITION,"vec2"),t&&e.varyings.add("uv","vec2"),e.vertex.code.add(i.H`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?i.H`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}},55039:(e,t,r)=>{var i;r.d(t,{H:()=>i}),function(e){e[e.Color=0]="Color",e[e.Depth=1]="Depth",e[e.Normal=2]="Normal",e[e.Shadow=3]="Shadow",e[e.ShadowHighlight=4]="ShadowHighlight",e[e.ShadowExcludeHighlight=5]="ShadowExcludeHighlight",e[e.Highlight=6]="Highlight",e[e.Alpha=7]="Alpha",e[e.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",e[e.COUNT=9]="COUNT"}(i||(i={}))},51546:(e,t,r)=>{r.d(t,{f5:()=>d});var i=r(70586),o=r(52138),n=r(13598),a=r(17896),s=r(65617),l=r(70582),c=(r(172),r(74709));function d(e,t){!function(e,t,r){if(!t.hasSlicePlane){const r=c.H`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return t.hasSliceInVertexProgram&&e.vertex.code.add(r),void e.fragment.code.add(r)}e.extensions.add("GL_OES_standard_derivatives"),t.hasSliceInVertexProgram&&e.vertex.uniforms.add(r),e.fragment.uniforms.add(r);const i=c.H`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,o=c.H`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,n=t.hasSliceHighlight?c.H`
        ${o}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:c.H`#define highlightSlice(_color_, _pos_) (_color_)`;t.hasSliceInVertexProgram&&e.vertex.code.add(i),e.fragment.code.add(i),e.fragment.code.add(n)}(e,t,[new l.B("slicePlaneOrigin",((e,r)=>function(e,t,r){if((0,i.Wi)(r.slicePlane))return s.Z;const o=u(e,t,r),n=h(o,r.slicePlane),l=f(e,o,r);return(0,i.pC)(l)?(0,a.m)(g,n,l):n}(t,e,r))),new l.B("slicePlaneBasis1",((e,r)=>m(t,e,r,(0,i.Wg)(r.slicePlane)?.basis1))),new l.B("slicePlaneBasis2",((e,r)=>m(t,e,r,(0,i.Wg)(r.slicePlane)?.basis2)))])}function u(e,t,r){return e.instancedDoublePrecision?(0,a.s)(p,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function h(e,t){return(0,i.pC)(e)?(0,a.b)(g,t.origin,e):t.origin}function f(e,t,r){return e.hasSliceTranslatedView?(0,i.pC)(t)?(0,o.w)(_,r.camera.viewMatrix,t):r.camera.viewMatrix:null}function m(e,t,r,o){if((0,i.Wi)(o)||(0,i.Wi)(r.slicePlane))return s.Z;const n=u(e,t,r),l=h(n,r.slicePlane),c=f(e,n,r);return(0,i.pC)(c)?((0,a.a)(v,o,l),(0,a.m)(g,l,c),(0,a.m)(v,v,c),(0,a.b)(v,v,g)):o}const p=(0,s.c)(),g=(0,s.c)(),v=(0,s.c)(),_=(0,n.c)()},77171:(e,t,r)=>{r.d(t,{w:()=>n});var i=r(1391),o=r(74709);function n(e,t){if((0,i.bA)(e),t.hasModelTransformation)return e.vertex.code.add(o.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, mat4 model, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * (model * vec4(pos, 1.0));
depth = calculateLinearDepth(nearFar, eye.z);
return proj * eye;
}`),void e.vertex.code.add(o.H`vec4 transformPosition(mat4 proj, mat4 view, mat4 model, vec3 pos) {
return proj * (view * (model * vec4(pos, 1.0)));
}`);e.vertex.code.add(o.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),e.vertex.code.add(o.H`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},47624:(e,t,r)=>{r.d(t,{f:()=>p});var i=r(43697),o=r(17896),n=r(65617),a=r(55039),s=r(89243),l=r(93669),c=r(70582),d=r(74709),u=r(51354),h=r(35065),f=r(9820);class m extends u.m{constructor(){super(...arguments),this.instancedDoublePrecision=!1}}function p(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add(h.T.MODELORIGINHI,"vec3"),e.attributes.add(h.T.MODELORIGINLO,"vec3"),e.attributes.add(h.T.MODEL,"mat3"),e.attributes.add(h.T.MODELNORMAL,"mat3"));const r=e.vertex;t.instancedDoublePrecision&&(r.include(s.$,t),r.uniforms.add(new c.B("viewOriginHi",((e,t)=>(0,f.U8)((0,o.s)(g,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),g)))),r.uniforms.add(new c.B("viewOriginLo",((e,t)=>(0,f.GB)((0,o.s)(g,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),g))))),r.code.add(d.H`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `),r.code.add(d.H`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?d.H`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),r.code.add(d.H`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `),t.output===a.H.Normal&&((0,l._8)(r),r.code.add(d.H`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),t.hasVertexTangents&&r.code.add(d.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `)}(0,i._)([(0,u.o)()],m.prototype,"instancedDoublePrecision",void 0);const g=(0,n.c)()},64267:(e,t,r)=>{r.d(t,{O:()=>c,h:()=>a});var i=r(74085),o=r(74709);function n(e){const t=o.H`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;e.vertex.code.add(t)}var a,s,l=r(35065);function c(e,t){switch(t.normalType){case a.CompressedAttribute:e.include(n),e.attributes.add(l.T.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(o.H`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`);break;case a.Attribute:e.attributes.add(l.T.NORMAL,"vec3"),e.vertex.code.add(o.H`vec3 normalModel() {
return normal;
}`);break;case a.ScreenDerivative:e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(o.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:(0,i.Bg)(t.normalType);case a.COUNT:case a.Ground:}}(s=a||(a={}))[s.Attribute=0]="Attribute",s[s.CompressedAttribute=1]="CompressedAttribute",s[s.Ground=2]="Ground",s[s.ScreenDerivative=3]="ScreenDerivative",s[s.COUNT=4]="COUNT"},37099:(e,t,r)=>{r.d(t,{f:()=>n});var i=r(74709),o=r(35065);function n(e){e.attributes.add(o.T.POSITION,"vec3"),e.vertex.code.add(i.H`vec3 positionModel() { return position; }`)}},76056:(e,t,r)=>{r.d(t,{R:()=>c});var i=r(6206),o=r(74709);function n(e){e.vertex.code.add(o.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${o.H.int(i.a9.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${o.H.int(i.a9.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${o.H.int(i.a9.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${o.H.int(i.a9.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}var a=r(15736),s=r(35065),l=r(57790);function c(e,t){t.hasSymbolColors?(e.include(n),e.attributes.add(s.T.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(o.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new a._("colorMixMode",(e=>l.FZ[e.colorMixMode]))),e.vertex.code.add(o.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}},135:(e,t,r)=>{r.d(t,{D:()=>l,N:()=>i});var i,o,n=r(74085),a=r(74709),s=r(35065);function l(e,t){switch(t.textureCoordinateType){case i.Default:return e.attributes.add(s.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(a.H`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case i.Compressed:return e.attributes.add(s.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(a.H`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case i.Atlas:return e.attributes.add(s.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(s.T.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(a.H`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:(0,n.Bg)(t.textureCoordinateType);case i.None:return void e.vertex.code.add(a.H`void forwardTextureCoordinates() {}`);case i.COUNT:return}}(o=i||(i={}))[o.None=0]="None",o[o.Default=1]="Default",o[o.Atlas=2]="Atlas",o[o.Compressed=3]="Compressed",o[o.COUNT=4]="COUNT"},11317:(e,t,r)=>{r.d(t,{c:()=>n});var i=r(74709),o=r(35065);function n(e,t){t.hasVertexColors?(e.attributes.add(o.T.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(i.H`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(i.H`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(i.H`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}},15719:(e,t,r)=>{r.d(t,{Bb:()=>d,d4:()=>u});var i=r(74085),o=r(46521),n=(r(88669),r(64267)),a=r(2095),s=r(74709),l=r(52114),c=r(19850);function d(e,t){switch(t.normalType){case n.h.Attribute:case n.h.CompressedAttribute:e.include(n.O,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add([new l.j("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel)),new c.c("transformNormalViewFromGlobal",(e=>e.transformNormalViewFromGlobal))]),e.vertex.code.add(s.H`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case n.h.Ground:e.include(a.up,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(s.H`
        void forwardNormal() {
          vNormalWorld = ${t.spherical?s.H`normalize(vPositionWorldCameraRelative);`:s.H`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case n.h.ScreenDerivative:e.vertex.code.add(s.H`void forwardNormal() {}`);break;default:(0,i.Bg)(t.normalType);case n.h.COUNT:}}class u extends a.su{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,o.c)()}}},2095:(e,t,r)=>{r.d(t,{su:()=>p,up:()=>m});var i=r(46521),o=r(13598),n=(r(72119),r(65617)),a=r(37099),s=r(89243),l=r(70582),c=r(172),d=r(74709),u=r(52114),h=r(19850),f=r(8319);function m(e,t){e.include(a.f);const r=e.vertex;r.include(s.$,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),r.uniforms.add([new c.J("transformWorldFromViewTH",(e=>e.transformWorldFromViewTH)),new c.J("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL)),new h.c("transformViewFromCameraRelativeRS",(e=>e.transformViewFromCameraRelativeRS)),new f.g("transformProjFromView",(e=>e.transformProjFromView)),new u.j("transformWorldFromModelRS",(e=>e.transformWorldFromModelRS)),new l.B("transformWorldFromModelTH",(e=>e.transformWorldFromModelTH)),new l.B("transformWorldFromModelTL",(e=>e.transformWorldFromModelTL))]),r.code.add(d.H`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(d.H`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${t.spherical?d.H`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:d.H`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),e.fragment.uniforms.add(new c.J("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL))),r.code.add(d.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.code.add(d.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class p extends d.K{constructor(){super(...arguments),this.transformWorldFromViewTH=(0,n.c)(),this.transformWorldFromViewTL=(0,n.c)(),this.transformViewFromCameraRelativeRS=(0,i.c)(),this.transformProjFromView=(0,o.c)()}}},91982:(e,t,r)=>{r.d(t,{i:()=>s});var i=r(74085),o=r(135),n=r(74709);function a(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(n.H`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}function s(e,t){switch(e.include(o.D,t),e.fragment.code.add(n.H`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),t.textureCoordinateType){case o.N.Default:case o.N.Compressed:return void e.fragment.code.add(n.H`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return texture2D(texture, params.uv);
}`);case o.N.Atlas:return e.include(a),void e.fragment.code.add(n.H`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return textureAtlasLookup(texture, params.size, params.uv, vuvRegion);
}`);default:(0,i.Bg)(t.textureCoordinateType);case o.N.None:case o.N.COUNT:return}}},92555:(e,t,r)=>{r.d(t,{L:()=>d});var i=r(98766),o=r(88669),n=r(71250),a=r(74709);function s(e){e.vertex.code.add(a.H`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),e.vertex.code.add(a.H`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(a.H`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),e.vertex.code.add(a.H`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),e.vertex.code.add(a.H`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(a.H`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),e.vertex.code.add(a.H`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}const l=(0,o.c)();var c=r(93669);function d(e,t){const r=e.vertex;t.hasVerticalOffset?(function(e){e.uniforms.add(new n.N("verticalOffset",((e,t)=>{const{minWorldLength:r,maxWorldLength:o,screenLength:n}=e.verticalOffset,a=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),s=t.camera.pixelRatio||1;return(0,i.s)(u,n*s,a,r,o)})))}(r),t.hasScreenSizePerspective&&(e.include(s),function(e){e.uniforms.add(new n.N("screenSizePerspectiveAlignment",(e=>function(e){return(0,i.s)(l,e.parameters.divisor,e.parameters.offset,e.parameters.minPixelSize,e.paddingPixelsOverride)}(e.screenSizePerspectiveAlignment||e.screenSizePerspective))))}(r),(0,c.hY)(e.vertex,t)),r.code.add(a.H`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${t.spherical?a.H`vec3 worldNormal = normalize(worldPos + localOrigin);`:a.H`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${t.hasScreenSizePerspective?a.H`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:a.H`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(a.H`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const u=(0,o.c)()},89136:(e,t,r)=>{r.d(t,{s:()=>M});var i=r(70586),o=r(13598),n=r(1391),a=r(55039),s=r(51546),l=r(77171),c=r(64267),d=r(74709),u=r(35065);function h(e,t){const r=t.output===a.H.ObjectAndLayerIdColor,i=t.objectAndLayerIdColorInstanced;r&&(e.varyings.add("objectAndLayerIdColorVarying","vec4"),i?e.attributes.add(u.T.OBJECTANDLAYERIDCOLOR_INSTANCED,"vec4"):e.attributes.add(u.T.OBJECTANDLAYERIDCOLOR,"vec4")),e.vertex.code.add(d.H`
     void forwardObjectAndLayerIdColor() {
      ${r?i?d.H`objectAndLayerIdColorVarying = objectAndLayerIdColor_instanced * 0.003921568627451;`:d.H`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:d.H``} }`),e.fragment.code.add(d.H`
      void outputObjectAndLayerIdColor() {
        ${r?d.H`gl_FragColor = objectAndLayerIdColorVarying;`:d.H``} }`)}var f=r(135),m=r(15719),p=r(20285);function g(e,t){switch(e.fragment.include(p.n),t.output){case a.H.Shadow:case a.H.ShadowHighlight:case a.H.ShadowExcludeHighlight:e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(d.H`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`);break;case a.H.Depth:e.fragment.code.add(d.H`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}}var v=r(88669),_=r(87449),x=r(98069),T=r(4511);const b=(0,v.f)(1,1,0,1),A=(0,v.f)(1,0,1,1);function E(e,t){e.fragment.uniforms.add((0,x.J)("depthTex",((e,t)=>t.highlightDepthTexture),t.hasWebGL2Context?T.D.None:T.D.InvSize)),e.fragment.constants.add("occludedHighlightFlag","vec4",b).add("unoccludedHighlightFlag","vec4",A),e.fragment.code.add(d.H`
    void outputHighlight() {
      vec3 fragCoord = gl_FragCoord.xyz;

      float sceneDepth = ${(0,_.b6)(t,"depthTex","fragCoord.xy")}.x;
      if (fragCoord.z > sceneDepth + 5e-7) {
        gl_FragColor = occludedHighlightFlag;
      }
      else {
        gl_FragColor = unoccludedHighlightFlag;
      }
    }
  `)}var w=r(82550),S=r(85787),y=r(93669),C=r(8319),R=r(47026);function M(e,t){const{vertex:r,fragment:u}=e,p=t.hasModelTransformation;p&&r.uniforms.add(new C.g("model",(e=>(0,i.pC)(e.modelTransformation)?e.modelTransformation:o.I)));const v=t.hasColorTexture&&t.alphaDiscardMode!==R.JJ.Opaque;switch(t.output){case a.H.Depth:case a.H.Shadow:case a.H.ShadowHighlight:case a.H.ShadowExcludeHighlight:case a.H.ObjectAndLayerIdColor:(0,y.Sv)(r,t),e.include(l.w,t),e.include(f.D,t),e.include(w.k,t),e.include(g,t),e.include(s.f5,t),e.include(h,t),(0,n.Zu)(e),e.varyings.add("depth","float"),v&&u.uniforms.add(new x.A("tex",(e=>e.texture))),r.code.add(d.H`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPositionWithDepth(proj, view, ${p?"model,":""} vpos, nearFar, depth);
            forwardTextureCoordinates();
            forwardObjectAndLayerIdColor();
          }
        `),e.include(S.z,t),u.code.add(d.H`
          void main(void) {
            discardBySlice(vpos);
            ${v?d.H`
                    vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?d.H`colorUV`:d.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${t.output===a.H.ObjectAndLayerIdColor?d.H`outputObjectAndLayerIdColor();`:d.H`outputDepth(depth);`}
          }
        `);break;case a.H.Normal:(0,y.Sv)(r,t),e.include(l.w,t),e.include(c.O,t),e.include(m.Bb,t),e.include(f.D,t),e.include(w.k,t),v&&u.uniforms.add(new x.A("tex",(e=>e.texture))),e.varyings.add("vPositionView","vec3"),r.code.add(d.H`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            ${t.normalType===c.h.Attribute?d.H`
            vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${p?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),e.include(s.f5,t),e.include(S.z,t),u.code.add(d.H`
          void main() {
            discardBySlice(vpos);
            ${v?d.H`
                    vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?d.H`colorUV`:d.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${t.normalType===c.h.ScreenDerivative?d.H`
                vec3 normal = screenDerivativeNormal(vPositionView);`:d.H`
                vec3 normal = normalize(vNormalWorld);
                if (gl_FrontFacing == false) normal = -normal;`}
            gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
          }
        `);break;case a.H.Highlight:(0,y.Sv)(r,t),e.include(l.w,t),e.include(f.D,t),e.include(w.k,t),v&&u.uniforms.add(new x.A("tex",(e=>e.texture))),r.code.add(d.H`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${p?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),e.include(s.f5,t),e.include(S.z,t),e.include(E,t),u.code.add(d.H`
          void main() {
            discardBySlice(vpos);
            ${v?d.H`
                    vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?d.H`colorUV`:d.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}},5543:(e,t,r)=>{r.d(t,{S:()=>n});var i=r(20285),o=r(74709);function n(e){e.include(i.n),e.code.add(o.H`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}},15817:(e,t,r)=>{r.d(t,{Q:()=>f});var i=r(135),o=r(91982),n=r(19419),a=r(87449),s=r(74709),l=r(16374),c=r(98069),d=r(4511),u=r(67498),h=r(35065);function f(e,t){const r=e.fragment;if(t.hasVertexTangents?(e.attributes.add(h.T.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===n.q.WindingOrder?r.code.add(s.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(s.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(e.extensions.add("GL_OES_standard_derivatives"),r.code.add(s.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),t.textureCoordinateType!==i.N.None){e.include(o.i,t);const i=t.supportsTextureAtlas?t.hasWebGL2Context?d.D.None:d.D.Size:d.D.None;r.uniforms.add(t.pbrTextureBindType===u.P.Pass?(0,c.J)("normalTexture",(e=>e.textureNormal),i):(0,l.F)("normalTexture",(e=>e.textureNormal),i)),r.code.add(s.H`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?s.H`vtc.size = ${(0,a.w_)(t,"normalTexture")};`:""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `)}}},72160:(e,t,r)=>{r.d(t,{K:()=>g});var i=r(87449),o=r(74709),n=r(98069),a=r(4511),s=(r(4307),r(89917),r(78869)),l=r(14589),c=r(83475),d=r(59377),u=r(59915),h=r(27097);class f extends l.A{initializeProgram(e){return new d.$(e.rctx,f.shader.get().build(),c.i)}initializePipeline(){return(0,h.sm)({colorWrite:h.BK})}}f.shader=new s.J(u.S,(()=>r.e(8092).then(r.bind(r,88092))));var m=r(25377);class p extends l.A{initializeProgram(e){return new d.$(e.rctx,p.shader.get().build(),c.i)}initializePipeline(){return(0,h.sm)({colorWrite:h.BK})}}function g(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add((0,n.J)("ssaoTex",((e,t)=>t.ssaoHelper.colorTexture),t.hasWebGL2Context?a.D.None:a.D.InvSize)),r.constants.add("blurSizePixelsInverse","float",.5),r.code.add(o.H`
      float evaluateAmbientOcclusionInverse() {
        vec2 ssaoTextureSizeInverse = ${(0,i.w_)(t,"ssaoTex",!0)};
        return texture2D(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).a;
      }

      float evaluateAmbientOcclusion() {
        return 1.0 - evaluateAmbientOcclusionInverse();
      }
    `)):r.code.add(o.H`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}p.shader=new s.J(m.S,(()=>r.e(9243).then(r.bind(r,49243)))),r(97323),r(35371),r(33696),r(75656),r(45762)},89753:(e,t,r)=>{r.d(t,{XP:()=>S,PN:()=>E,sC:()=>w});var i=r(74085),o=r(17896),n=r(65617),a=r(98766),s=r(88669),l=r(85504),c=r(172),d=r(71250),u=r(74709);function h(e,t){const r=e.fragment,i=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===i?(r.uniforms.add(new c.J("lightingAmbientSH0",((e,t)=>(0,o.s)(f,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),r.code.add(u.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===i?(r.uniforms.add([new d.N("lightingAmbientSH_R",((e,t)=>(0,a.s)(m,t.lighting.sh.r[0],t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3]))),new d.N("lightingAmbientSH_G",((e,t)=>(0,a.s)(m,t.lighting.sh.g[0],t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3]))),new d.N("lightingAmbientSH_B",((e,t)=>(0,a.s)(m,t.lighting.sh.b[0],t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3])))]),r.code.add(u.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===i&&(r.uniforms.add([new c.J("lightingAmbientSH0",((e,t)=>(0,o.s)(f,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new d.N("lightingAmbientSH_R1",((e,t)=>(0,a.s)(m,t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3],t.lighting.sh.r[4]))),new d.N("lightingAmbientSH_G1",((e,t)=>(0,a.s)(m,t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3],t.lighting.sh.g[4]))),new d.N("lightingAmbientSH_B1",((e,t)=>(0,a.s)(m,t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3],t.lighting.sh.b[4]))),new d.N("lightingAmbientSH_R2",((e,t)=>(0,a.s)(m,t.lighting.sh.r[5],t.lighting.sh.r[6],t.lighting.sh.r[7],t.lighting.sh.r[8]))),new d.N("lightingAmbientSH_G2",((e,t)=>(0,a.s)(m,t.lighting.sh.g[5],t.lighting.sh.g[6],t.lighting.sh.g[7],t.lighting.sh.g[8]))),new d.N("lightingAmbientSH_B2",((e,t)=>(0,a.s)(m,t.lighting.sh.b[5],t.lighting.sh.b[6],t.lighting.sh.b[7],t.lighting.sh.b[8])))]),r.code.add(u.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),t.pbrMode!==l.f7.Normal&&t.pbrMode!==l.f7.Schematic||r.code.add(u.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const f=(0,n.c)(),m=(0,s.c)();var p=r(72160),g=r(5802),v=r(26322),_=r(27754),x=r(79884),T=r(67498);class b extends x.x{constructor(e,t){super(e,"bool",T.P.Pass,((r,i,o)=>r.setUniform1b(e,t(i,o))))}}var A=r(21437);function E(e){e.constants.add("ambientBoostFactor","float",.4)}function w(e){e.uniforms.add(new A.p("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)))}function S(e,t){const r=e.fragment;switch(e.include(p.K,t),t.pbrMode!==l.f7.Disabled&&e.include(v.T,t),e.include(h,t),e.include(_.e),r.code.add(u.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===l.f7.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),E(r),w(r),(0,g.Pe)(r),r.code.add(u.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?u.H`normalize(vPosWorld)`:u.H`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),(0,g.F1)(r),r.code.add(u.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case l.f7.Disabled:case l.f7.WaterOnIntegratedMesh:case l.f7.Water:e.include(g.kR,t),r.code.add(u.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case l.f7.Normal:case l.f7.Schematic:r.code.add(u.H`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(u.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?r.uniforms.add(new b("hasFillLights",((e,t)=>t.enableFillLights))):r.constants.add("hasFillLights","bool",!1),r.code.add(u.H`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add([new A.p("lightingSpecularStrength",((e,t)=>t.lighting.mainLight.specularStrength)),new A.p("lightingEnvironmentStrength",((e,t)=>t.lighting.mainLight.environmentStrength))]),r.code.add(u.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(u.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode===l.f7.Schematic?u.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:u.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case l.f7.Terrain:case l.f7.TerrainWithWater:e.include(g.kR,t),r.code.add(u.H`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluateTerrainLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:(0,i.Bg)(t.pbrMode);case l.f7.COUNT:}}r(22021),(0,n.c)(),(0,n.c)()},5802:(e,t,r)=>{r.d(t,{F1:()=>s,Pe:()=>a,kR:()=>l});var i=r(172),o=r(21437),n=r(74709);function a(e){e.uniforms.add(new i.J("mainLightDirection",((e,t)=>t.lighting.mainLight.direction)))}function s(e){e.uniforms.add(new i.J("mainLightIntensity",((e,t)=>t.lighting.mainLight.intensity)))}function l(e,t){const r=e.fragment;a(r),s(r),function(e,t){t.useLegacyTerrainShading?e.uniforms.add(new o.p("lightingFixedFactor",((e,t)=>t.lighting.noonFactor*(1-t.lighting.globalFactor)))):e.constants.add("lightingFixedFactor","float",0)}(r,t),r.code.add(n.H`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}},42001:(e,t,r)=>{r.d(t,{l:()=>s});var i=r(5543),o=r(19693),n=r(74709),a=r(98069);function s(e,t){t.hasMultipassTerrain&&(e.fragment.include(i.S),e.fragment.uniforms.add(new a.A("terrainDepthTexture",((e,t)=>t.multipassTerrain.linearDepthTexture))),e.fragment.uniforms.add(new o.A("nearFar",((e,t)=>t.camera.nearFar))),e.fragment.uniforms.add(new o.A("inverseViewport",((e,t)=>t.inverseViewport))),e.fragment.code.add(n.H`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `))}},19419:(e,t,r)=>{r.d(t,{k:()=>s,q:()=>i});var i,o,n=r(74085),a=r(74709);function s(e,t){const r=e.fragment;switch(r.code.add(a.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case i.None:r.code.add(a.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case i.View:r.code.add(a.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case i.WindingOrder:r.code.add(a.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,n.Bg)(t.doubleSidedMode);case i.COUNT:}}(o=i||(i={}))[o.None=0]="None",o[o.View=1]="View",o[o.WindingOrder=2]="WindingOrder",o[o.COUNT=3]="COUNT"},26322:(e,t,r)=>{r.d(t,{T:()=>s});var i=r(74709);function o(e){const t=e.fragment.code;t.add(i.H`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(i.H`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(i.H`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}var n=r(85504),a=r(27754);function s(e,t){const r=e.fragment.code;e.include(a.e),t.pbrMode!==n.f7.Normal&&t.pbrMode!==n.f7.Schematic&&t.pbrMode!==n.f7.Terrain&&t.pbrMode!==n.f7.TerrainWithWater||(r.add(i.H`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(i.H`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),t.pbrMode!==n.f7.Normal&&t.pbrMode!==n.f7.Schematic||(e.include(o),r.add(i.H`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(i.H`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(i.H`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(i.H`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}},85504:(e,t,r)=>{r.d(t,{f7:()=>i,jV:()=>p});var i,o,n=r(72119),a=r(91982),s=r(87449),l=r(70582),c=r(172),d=r(74709),u=r(16374),h=r(98069),f=r(4511),m=r(67498);function p(e,t){const r=e.fragment,o=t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;if(t.pbrMode===i.Normal&&o&&e.include(a.i,t),t.pbrMode!==i.Schematic)if(t.pbrMode!==i.Disabled){if(t.pbrMode===i.Normal){r.code.add(d.H`vec3 mrr;
vec3 emission;
float occlusion;`);const e=t.supportsTextureAtlas?t.hasWebGL2Context?f.D.None:f.D.Size:f.D.None,i=t.pbrTextureBindType;t.hasMetallicRoughnessTexture&&(r.uniforms.add(i===m.P.Pass?(0,h.J)("texMetallicRoughness",(e=>e.textureMetallicRoughness),e):(0,u.F)("texMetallicRoughness",(e=>e.textureMetallicRoughness),e)),r.code.add(d.H`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add(i===m.P.Pass?(0,h.J)("texEmission",(e=>e.textureEmissive),e):(0,u.F)("texEmission",(e=>e.textureEmissive),e)),r.code.add(d.H`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add(i===m.P.Pass?(0,h.J)("texOcclusion",(e=>e.textureOcclusion),e):(0,u.F)("texOcclusion",(e=>e.textureOcclusion),e)),r.code.add(d.H`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(d.H`float getBakedOcclusion() { return 1.0; }`),r.uniforms.add(i===m.P.Pass?[new c.J("emissionFactor",(e=>e.emissiveFactor)),new c.J("mrrFactors",(e=>e.mrrFactors))]:[new l.B("emissionFactor",(e=>e.emissiveFactor)),new l.B("mrrFactors",(e=>e.mrrFactors))]),r.code.add(d.H`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${o?d.H`vtc.uv = vuv0;`:""}
      ${t.hasMetallicRoughnessTextureTransform?d.H`vtc.uv = metallicRoughnessUV;`:""}
      ${t.hasMetallicRoughnessTexture?t.supportsTextureAtlas?d.H`
                vtc.size = ${(0,s.w_)(t,"texMetallicRoughness")};
                applyMetallnessAndRoughness(vtc);`:d.H`applyMetallnessAndRoughness(vtc);`:""}
      ${t.hasEmissiveTextureTransform?d.H`vtc.uv = emissiveUV;`:""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?d.H`
                vtc.size = ${(0,s.w_)(t,"texEmission")};
                applyEmission(vtc);`:d.H`applyEmission(vtc);`:""}
      ${t.hasOcclusionTextureTransform?d.H`vtc.uv = occlusionUV;`:""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?d.H`
                vtc.size = ${(0,s.w_)(t,"texOcclusion")};
                applyOcclusion(vtc);`:d.H`applyOcclusion(vtc);`:""}
    }
  `)}}else r.code.add(d.H`float getBakedOcclusion() { return 1.0; }`);else r.code.add(d.H`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}r(60537),(0,n.f)(0,.6,.2),(o=i||(i={}))[o.Disabled=0]="Disabled",o[o.Normal=1]="Normal",o[o.Schematic=2]="Schematic",o[o.Water=3]="Water",o[o.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",o[o.Terrain=5]="Terrain",o[o.TerrainWithWater=6]="TerrainWithWater",o[o.COUNT=7]="COUNT"},27754:(e,t,r)=>{r.d(t,{e:()=>o});var i=r(74709);function o(e){e.vertex.code.add(i.H`const float PI = 3.141592653589793;`),e.fragment.code.add(i.H`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}},22539:(e,t,r)=>{r.d(t,{XE:()=>p,hb:()=>m}),r(65617);var i=r(20285),o=r(87449),n=r(71250),a=r(15736),s=r(74709),l=r(79884),c=r(67498);class d extends l.x{constructor(e,t,r){super(e,"mat4",c.P.Draw,((r,i,o)=>r.setUniformMatrix4fv(e,t(i,o))),r)}}class u extends l.x{constructor(e,t,r){super(e,"mat4",c.P.Pass,((r,i,o)=>r.setUniformMatrix4fv(e,t(i,o))),r)}}var h=r(98069),f=r(4511);function m(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new u("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),g(e,t))}function p(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new d("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),g(e,t))}function g(e,t){const r=e.fragment;r.include(i.n),r.uniforms.add([...(0,h.J)("shadowMapTex",((e,t)=>t.shadowMap.depthTexture),t.hasWebGL2Context?f.D.None:f.D.Size),new a._("numCascades",((e,t)=>t.shadowMap.numCascades)),new n.N("cascadeDistances",((e,t)=>t.shadowMap.cascadeDistances))]),r.code.add(s.H`
    int chooseCascade(float depth, out mat4 mat) {
      vec4 distance = cascadeDistances;

      // choose correct cascade
      int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;

      mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];

      return i;
    }

    vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
      vec4 lv = mat * vec4(_vpos, 1.0);
      lv.xy /= lv.w;
      return 0.5 * lv.xyz + vec3(0.5);
    }

    vec2 cascadeCoordinates(int i, vec3 lvpos) {
      return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
    }

    float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
      return rgba2float(texture2D(_depthTex, uv));
    }

    float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
      return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
    }

    float filterShadow(vec2 uv, vec3 lvpos, float textureSize, sampler2D _depthTex) {
      float halfPixelSize = 0.5 / textureSize;

      // filter, offset by half pixels
      vec2 st = fract((vec2(halfPixelSize) + uv) * textureSize);

      float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
      float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);

      return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
    }

    float readShadowMap(const in vec3 _vpos, float _linearDepth) {
      mat4 mat;
      int i = chooseCascade(_linearDepth, mat);

      if (i >= numCascades) { return 0.0; }

      vec3 lvpos = lightSpacePosition(_vpos, mat);

      // vertex completely outside? -> no shadow
      if (lvpos.z >= 1.0) { return 0.0; }
      if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }

      // calc coord in cascade texture
      vec2 uv = cascadeCoordinates(i, lvpos);

      vec2 textureSize = ${(0,o.w_)(t,"shadowMapTex")};

      return filterShadow(uv, lvpos, textureSize.x, shadowMapTex);
    }
  `)}},57806:(e,t,r)=>{r.d(t,{DT:()=>u,NI:()=>l,R5:()=>c,av:()=>s,jF:()=>d});var i=r(70586),o=r(14682),n=r(74709),a=r(19850);function s(e){e.vertex.uniforms.add(new a.c("colorTextureTransformMatrix",(e=>(0,i.pC)(e.colorTextureTransformMatrix)?e.colorTextureTransformMatrix:(0,o.c)()))),e.varyings.add("colorUV","vec2"),e.vertex.code.add(n.H`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function l(e){e.vertex.uniforms.add(new a.c("normalTextureTransformMatrix",(e=>(0,i.pC)(e.normalTextureTransformMatrix)?e.normalTextureTransformMatrix:(0,o.c)()))),e.varyings.add("normalUV","vec2"),e.vertex.code.add(n.H`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function c(e){e.vertex.uniforms.add(new a.c("emissiveTextureTransformMatrix",(e=>(0,i.pC)(e.emissiveTextureTransformMatrix)?e.emissiveTextureTransformMatrix:(0,o.c)()))),e.varyings.add("emissiveUV","vec2"),e.vertex.code.add(n.H`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function d(e){e.vertex.uniforms.add(new a.c("occlusionTextureTransformMatrix",(e=>(0,i.pC)(e.occlusionTextureTransformMatrix)?e.occlusionTextureTransformMatrix:(0,o.c)()))),e.varyings.add("occlusionUV","vec2"),e.vertex.code.add(n.H`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function u(e){e.vertex.uniforms.add(new a.c("metallicRoughnessTextureTransformMatrix",(e=>(0,i.pC)(e.metallicRoughnessTextureTransformMatrix)?e.metallicRoughnessTextureTransformMatrix:(0,o.c)()))),e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.code.add(n.H`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}},82550:(e,t,r)=>{r.d(t,{k:()=>u});var i=r(172),o=r(79884),n=r(67498);class a extends o.x{constructor(e,t,r){super(e,"vec4",n.P.Pass,((r,i,o)=>r.setUniform4fv(e,t(i,o))),r)}}class s extends o.x{constructor(e,t,r){super(e,"float",n.P.Pass,((r,i,o)=>r.setUniform1fv(e,t(i,o))),r)}}var l=r(74709),c=r(19850),d=r(35065);function u(e,t){t.hasVvInstancing&&(t.vvSize||t.vvColor)&&e.attributes.add(d.T.INSTANCEFEATUREATTRIBUTE,"vec4");const r=e.vertex;t.vvSize?(r.uniforms.add(new i.J("vvSizeMinSize",(e=>e.vvSizeMinSize))),r.uniforms.add(new i.J("vvSizeMaxSize",(e=>e.vvSizeMaxSize))),r.uniforms.add(new i.J("vvSizeOffset",(e=>e.vvSizeOffset))),r.uniforms.add(new i.J("vvSizeFactor",(e=>e.vvSizeFactor))),r.uniforms.add(new c.c("vvSymbolRotationMatrix",(e=>e.vvSymbolRotationMatrix))),r.uniforms.add(new i.J("vvSymbolAnchor",(e=>e.vvSymbolAnchor))),r.code.add(l.H`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(l.H`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.hasVvInstancing?l.H`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(l.H`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(r.constants.add("vvColorNumber","int",8),t.hasVvInstancing&&r.uniforms.add([new s("vvColorValues",(e=>e.vvColorValues),8),new a("vvColorColors",(e=>e.vvColorColors),8)]),r.code.add(l.H`
      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${t.hasVvInstancing?l.H`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):r.code.add(l.H`vec4 vvColor() { return vec4(1.0); }`)}r(46521),r(65617),r(82791)},96310:(e,t,r)=>{r.d(t,{F:()=>i,b:()=>o});const i=.1,o=.001},85787:(e,t,r)=>{r.d(t,{z:()=>l});var i=r(96310),o=r(74709);function n(e){e.fragment.code.add(o.H`
    #define discardOrAdjustAlpha(color) { if (color.a < ${o.H.float(i.b)}) { discard; } }
  `)}r(79884),r(67498);var a=r(21437),s=r(47026);function l(e,t){!function(e,t,r){const i=e.fragment;switch(t.alphaDiscardMode!==s.JJ.Mask&&t.alphaDiscardMode!==s.JJ.MaskBlend||i.uniforms.add(r),t.alphaDiscardMode){case s.JJ.Blend:return e.include(n);case s.JJ.Opaque:i.code.add(o.H`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case s.JJ.Mask:i.code.add(o.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case s.JJ.MaskBlend:e.fragment.code.add(o.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}(e,t,new a.p("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}},20787:(e,t,r)=>{r.d(t,{G:()=>d,R:()=>h});var i=r(4307),o=r(97323),n=r(98766),a=r(88669),s=r(19693),l=r(71250),c=r(74709);function d(e){e.fragment.uniforms.add(new l.N("projInfo",((e,t)=>function(e){const t=e.camera.projectionMatrix;return 0===t[11]?(0,n.s)(u,2/(e.camera.fullWidth*t[0]),2/(e.camera.fullHeight*t[5]),(1+t[12])/t[0],(1+t[13])/t[5]):(0,n.s)(u,-2/(e.camera.fullWidth*t[0]),-2/(e.camera.fullHeight*t[5]),(1-t[8])/t[0],(1-t[9])/t[5])}(t)))),e.fragment.uniforms.add(new s.A("zScale",((e,t)=>h(t)))),e.fragment.code.add(c.H`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}const u=(0,a.c)();function h(e){return 0===e.camera.projectionMatrix[11]?(0,i.s)(f,0,1):(0,i.s)(f,1,0)}const f=(0,o.a)()},89243:(e,t,r)=>{r.d(t,{$:()=>o});var i=r(74709);function o({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(i.H`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(i.H`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}},90692:(e,t,r)=>{r.d(t,{y:()=>a});var i=r(6206),o=r(74709);function n(e){e.code.add(o.H`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function a(e){e.include(n),e.code.add(o.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${o.H.int(i.a9.Multiply)}) {
        return allMixed;
      }
      if (mode == ${o.H.int(i.a9.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${o.H.int(i.a9.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${o.H.int(i.a9.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${o.H.int(i.a9.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}},20285:(e,t,r)=>{r.d(t,{n:()=>o});var i=r(74709);function o(e){e.code.add(i.H`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}},93669:(e,t,r)=>{r.d(t,{hY:()=>f,Sv:()=>m,_8:()=>v});var i=r(52138),o=r(10937),n=r(17896),a=r(65617),s=r(70582),l=r(172),c=r(79884),d=r(67498);class u extends c.x{constructor(e,t){super(e,"mat4",d.P.Draw,((r,i,o)=>r.setUniformMatrix4fv(e,t(i,o))))}}var h=r(8319);function f(e,t){t.instancedDoublePrecision?e.constants.add("cameraPosition","vec3",a.Z):e.uniforms.add(new s.B("cameraPosition",((e,t)=>(0,n.s)(g,t.camera.viewInverseTransposeMatrix[3]-e.origin[0],t.camera.viewInverseTransposeMatrix[7]-e.origin[1],t.camera.viewInverseTransposeMatrix[11]-e.origin[2]))))}function m(e,t){if(!t.instancedDoublePrecision)return void e.uniforms.add([new h.g("proj",((e,t)=>t.camera.projectionMatrix)),new u("view",((e,t)=>(0,i.w)(p,t.camera.viewMatrix,e.origin))),new s.B("localOrigin",(e=>e.origin))]);const r=e=>(0,n.s)(g,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]);e.uniforms.add([new h.g("proj",((e,t)=>t.camera.projectionMatrix)),new h.g("view",((e,t)=>(0,i.w)(p,t.camera.viewMatrix,r(t)))),new l.J("localOrigin",((e,t)=>r(t)))])}const p=(0,o.c)(),g=(0,a.c)();function v(e){e.uniforms.add(new h.g("viewNormal",((e,t)=>t.camera.viewInverseTransposeMatrix)))}},87449:(e,t,r)=>{r.d(t,{aU:()=>n,b6:()=>s,o_:()=>o,w_:()=>a});var i=r(74709);const o="Size",n="InvSize";function a(e,t,r=!1,a=0){if(e.hasWebGL2Context){const e=i.H`vec2(textureSize(${t}, ${i.H.int(a)}))`;return r?"(1.0 / "+e+")":e}return r?t+n:t+o}function s(e,t,r,o=null,a=0){if(e.hasWebGL2Context)return i.H`texelFetch(${t}, ivec2(${r}), ${i.H.int(a)})`;let s=i.H`texture2D(${t}, ${r} * `;return s+=o?i.H`(${o}))`:i.H`${t+n})`,s}},98925:(e,t,r)=>{r.d(t,{q:()=>n});var i=r(79884),o=r(67498);class n extends i.x{constructor(e,t){super(e,"vec2",o.P.Draw,((r,i,o,n)=>r.setUniform2fv(e,t(i,o,n))))}}},19693:(e,t,r)=>{r.d(t,{A:()=>n});var i=r(79884),o=r(67498);class n extends i.x{constructor(e,t){super(e,"vec2",o.P.Pass,((r,i,o)=>r.setUniform2fv(e,t(i,o))))}}},70582:(e,t,r)=>{r.d(t,{B:()=>n});var i=r(79884),o=r(67498);class n extends i.x{constructor(e,t){super(e,"vec3",o.P.Draw,((r,i,o,n)=>r.setUniform3fv(e,t(i,o,n))))}}},172:(e,t,r)=>{r.d(t,{J:()=>n});var i=r(79884),o=r(67498);class n extends i.x{constructor(e,t){super(e,"vec3",o.P.Pass,((r,i,o)=>r.setUniform3fv(e,t(i,o))))}}},71250:(e,t,r)=>{r.d(t,{N:()=>n});var i=r(79884),o=r(67498);class n extends i.x{constructor(e,t){super(e,"vec4",o.P.Pass,((r,i,o)=>r.setUniform4fv(e,t(i,o))))}}},21437:(e,t,r)=>{r.d(t,{p:()=>n});var i=r(79884),o=r(67498);class n extends i.x{constructor(e,t){super(e,"float",o.P.Pass,((r,i,o)=>r.setUniform1f(e,t(i,o))))}}},15736:(e,t,r)=>{r.d(t,{_:()=>n});var i=r(79884),o=r(67498);class n extends i.x{constructor(e,t){super(e,"int",o.P.Pass,((r,i,o)=>r.setUniform1i(e,t(i,o))))}}},52114:(e,t,r)=>{r.d(t,{j:()=>n});var i=r(79884),o=r(67498);class n extends i.x{constructor(e,t){super(e,"mat3",o.P.Draw,((r,i,o)=>r.setUniformMatrix3fv(e,t(i,o))))}}},19850:(e,t,r)=>{r.d(t,{c:()=>n});var i=r(79884),o=r(67498);class n extends i.x{constructor(e,t){super(e,"mat3",o.P.Pass,((r,i,o)=>r.setUniformMatrix3fv(e,t(i,o))))}}},8319:(e,t,r)=>{r.d(t,{g:()=>n});var i=r(79884),o=r(67498);class n extends i.x{constructor(e,t){super(e,"mat4",o.P.Pass,((r,i,o)=>r.setUniformMatrix4fv(e,t(i,o))))}}},33680:(e,t,r)=>{r.d(t,{kG:()=>l});var i=r(20102),o=r(92604),n=r(70586);const a=o.Z.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class s{constructor(){this._includedModules=new Map}include(e,t){if(this._includedModules.has(e)){const r=this._includedModules.get(e);if(r!==t){a.error("Trying to include shader module multiple times with different sets of options.");const t=new Set;for(const i of Object.keys(r))r[i]!==e[i]&&t.add(i);for(const i of Object.keys(e))r[i]!==e[i]&&t.add(i);t.forEach((t=>console.error(`  ${t}: current ${r[t]} new ${e[t]}`)))}}else this._includedModules.set(e,t),e(this.builder,t)}}class l extends s{constructor(){super(...arguments),this.vertex=new u,this.fragment=new u,this.attributes=new h,this.varyings=new f,this.extensions=new m,this.constants=new p}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),i=this.varyings.generateSource(),o="vertex"===e?this.vertex:this.fragment,n=o.uniforms.generateSource(),a=o.code.generateSource(),s="vertex"===e?v:g,l=this.constants.generateSource().concat(o.constants.generateSource());return`\n${t.join("\n")}\n\n${s}\n\n${l.join("\n")}\n\n${n.join("\n")}\n\n${r.join("\n")}\n\n${i.join("\n")}\n\n${a.join("\n")}`}generateBind(e,t){const r=new Map;this.vertex.uniforms.entries.forEach((t=>{const i=t.bind[e];(0,n.pC)(i)&&r.set(t.name,i)})),this.fragment.uniforms.entries.forEach((t=>{const i=t.bind[e];(0,n.pC)(i)&&r.set(t.name,i)}));const i=Array.from(r.values()),o=i.length;return(e,r,n)=>{for(let a=0;a<o;++a)i[a](t,e,r,n)}}}class c{constructor(){this._entries=new Map}add(e){if(!Array.isArray(e))return this._add(e);for(const t of e)this._add(t)}get(e){return this._entries.get(e)}_add(e){if((0,n.Wi)(e))a.error(`Trying to add null Uniform from ${(new Error).stack}.`);else{if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new i.Z(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}}generateSource(){return Array.from(this._entries.values()).map((e=>(0,n.pC)(e.arraySize)?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`))}get entries(){return Array.from(this._entries.values())}}class d{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class u extends s{constructor(){super(...arguments),this.uniforms=new c,this.code=new d,this.constants=new p}get builder(){return this}}class h{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`attribute ${e[1]} ${e[0]};`))}}class f{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(){return this._entries.map((e=>`varying ${e[1]} ${e[0]};`))}}class m{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?m.ALLOWLIST_VERTEX:m.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}m.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],m.ALLOWLIST_VERTEX=[];class p{constructor(){this._entries=new Set}add(e,t,r){let i="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":i=p._numberToFloatStr(r);break;case"int":i=p._numberToIntStr(r);break;case"bool":i=r.toString();break;case"vec2":i=`vec2(${p._numberToFloatStr(r[0])},                            ${p._numberToFloatStr(r[1])})`;break;case"vec3":i=`vec3(${p._numberToFloatStr(r[0])},                            ${p._numberToFloatStr(r[1])},                            ${p._numberToFloatStr(r[2])})`;break;case"vec4":i=`vec4(${p._numberToFloatStr(r[0])},                            ${p._numberToFloatStr(r[1])},                            ${p._numberToFloatStr(r[2])},                            ${p._numberToFloatStr(r[3])})`;break;case"ivec2":i=`ivec2(${p._numberToIntStr(r[0])},                             ${p._numberToIntStr(r[1])})`;break;case"ivec3":i=`ivec3(${p._numberToIntStr(r[0])},                             ${p._numberToIntStr(r[1])},                             ${p._numberToIntStr(r[2])})`;break;case"ivec4":i=`ivec4(${p._numberToIntStr(r[0])},                             ${p._numberToIntStr(r[1])},                             ${p._numberToIntStr(r[2])},                             ${p._numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${t}(${Array.prototype.map.call(r,(e=>p._numberToFloatStr(e))).join(", ")})`}return this._entries.add(`const ${t} ${e} = ${i};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const g="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",v="precision highp float;\nprecision highp sampler2D;"},16374:(e,t,r)=>{r.d(t,{F:()=>h,R:()=>u});var i=r(70586),o=r(4307),n=r(97323),a=r(87449),s=r(98925),l=r(4511),c=r(79884),d=r(67498);class u extends c.x{constructor(e,t){super(e,"sampler2D",d.P.Draw,((r,i,o)=>r.bindTexture(e,t(i,o))))}}function h(e,t,r=l.D.None){const c=[new u(e,t)];if(r&l.D.Size){const r=e+a.o_;c.push(new s.q(r,((e,r)=>{const a=t(e,r);return(0,i.pC)(a)?(0,o.s)(f,a.descriptor.width,a.descriptor.height):n.Z})))}if(r&l.D.InvSize){const r=e+a.aU;c.push(new s.q(r,((e,r)=>{const a=t(e,r);return(0,i.pC)(a)?(0,o.s)(f,1/a.descriptor.width,1/a.descriptor.height):n.Z})))}return c}const f=(0,n.a)()},98069:(e,t,r)=>{r.d(t,{A:()=>u,J:()=>h});var i=r(70586),o=r(4307),n=r(97323),a=r(87449),s=r(19693),l=r(4511),c=r(79884),d=r(67498);class u extends c.x{constructor(e,t){super(e,"sampler2D",d.P.Pass,((r,i,o)=>r.bindTexture(e,t(i,o))))}}function h(e,t,r=l.D.None){const c=[new u(e,t)];if(r&l.D.Size){const r=e+a.o_;c.push(new s.A(r,((e,r)=>{const a=t(e,r);return(0,i.pC)(a)?(0,o.s)(f,a.descriptor.width,a.descriptor.height):n.Z})))}if(r&l.D.InvSize){const r=e+a.aU;c.push(new s.A(r,((e,r)=>{const a=t(e,r);return(0,i.pC)(a)?(0,o.s)(f,1/a.descriptor.width,1/a.descriptor.height):n.Z})))}return c}const f=(0,n.a)()},4511:(e,t,r)=>{var i;r.d(t,{D:()=>i}),function(e){e[e.None=0]="None",e[e.Size=1]="Size",e[e.InvSize=2]="InvSize"}(i||(i={}))},79884:(e,t,r)=>{r.d(t,{x:()=>n});var i=r(70586),o=r(67498);class n{constructor(e,t,r,n,a=null){this.name=e,this.type=t,this.arraySize=a,this.bind={[o.P.Pass]:null,[o.P.Draw]:null},(0,i.pC)(r)&&(0,i.pC)(n)&&(this.bind[r]=n)}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}},74709:(e,t,r)=>{r.d(t,{H:()=>o,K:()=>i});const i=class{};function o(e,...t){let r="";for(let i=0;i<t.length;i++)r+=e[i]+t[i];return r+=e[e.length-1],r}var n;(n=o||(o={})).int=function(e){return Math.round(e).toString()},n.float=function(e){return e.toPrecision(8)}},67498:(e,t,r)=>{var i;r.d(t,{P:()=>i}),function(e){e[e.Pass=0]="Pass",e[e.Draw=1]="Draw"}(i||(i={}))},78869:(e,t,r)=>{r.d(t,{J:()=>i});class i{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}},14589:(e,t,r)=>{r.d(t,{A:()=>n});var i=r(70586),o=r(35371);class n{constructor(e,t,r){this.release=r,this.initializeConfiguration(e,t),this._configuration=t.snapshot(),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}destroy(){this._program=(0,i.M2)(this._program),this._pipeline=this._configuration=null}reload(e){(0,i.M2)(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}bindPipelineState(e,t=null,r){e.setPipelineState(this.getPipelineState(t,r))}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return o.MX.TRIANGLES}getPipelineState(e,t){return this._pipeline}initializeConfiguration(e,t){}}},51354:(e,t,r)=>{r.d(t,{m:()=>o,o:()=>n});var i=r(74709);class o extends i.K{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map((()=>0)):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}}function n(e={}){return(t,r)=>{if(t._parameterNames=t._parameterNames??[],t._parameterNames.push(r),null!=e.constValue)Object.defineProperty(t,r,{get:()=>e.constValue});else{const i=t._parameterNames.length-1,o=e.count||2,n=Math.ceil(Math.log2(o)),a=t._parameterBits??[0];let s=0;for(;a[s]+n>16;)s++,s>=a.length&&a.push(0);t._parameterBits=a;const l=a[s],c=(1<<n)-1<<l;a[s]+=n,Object.defineProperty(t,r,{get(){return this[i]},set(e){if(this[i]!==e&&(this[i]=e,this._keyDirty=!0,this._parameterBits[s]=this._parameterBits[s]&~c|+e<<l&c,"number"!=typeof e&&"boolean"!=typeof e))throw new Error("Configuration value for "+r+" must be boolean or number, got "+typeof e)}})}}}},17662:(e,t,r)=>{r.d(t,{c:()=>o});var i=r(99001);class o{constructor(){this.id=(0,i.D)()}unload(){}}},4726:(e,t,r)=>{var i;r.d(t,{U:()=>i}),function(e){e[e.Layer=0]="Layer",e[e.Object=1]="Object",e[e.Mesh=2]="Mesh",e[e.Line=3]="Line",e[e.Point=4]="Point",e[e.Material=5]="Material",e[e.Texture=6]="Texture",e[e.COUNT=7]="COUNT"}(i||(i={}))},83475:(e,t,r)=>{r.d(t,{i:()=>o});var i=r(35065);const o=new Map([[i.T.POSITION,0],[i.T.NORMAL,1],[i.T.UV0,2],[i.T.COLOR,3],[i.T.SIZE,4],[i.T.TANGENT,4],[i.T.AUXPOS1,5],[i.T.SYMBOLCOLOR,5],[i.T.AUXPOS2,6],[i.T.FEATUREATTRIBUTE,6],[i.T.INSTANCEFEATUREATTRIBUTE,6],[i.T.INSTANCECOLOR,7],[i.T.OBJECTANDLAYERIDCOLOR,7],[i.T.OBJECTANDLAYERIDCOLOR_INSTANCED,7],[i.T.MODEL,8],[i.T.MODELNORMAL,12],[i.T.MODELORIGINHI,11],[i.T.MODELORIGINLO,15]])},60537:(e,t,r)=>{r.d(t,{F:()=>l});var i=r(70586),o=r(95330),n=r(74709),a=r(47026);class s{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}ensureTechnique(e,t){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(this._output,t),this._technique),this._technique}ensureResources(e){return a.Rw.LOADED}}class l extends s{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId,(e=>this._texture=e)),this._acquire(e.normalTextureId,(e=>this._textureNormal=e)),this._acquire(e.emissiveTextureId,(e=>this._textureEmissive=e)),this._acquire(e.occlusionTextureId,(e=>this._textureOcclusion=e)),this._acquire(e.metallicRoughnessTextureId,(e=>this._textureMetallicRoughness=e))}dispose(){this._texture=(0,i.RY)(this._texture),this._textureNormal=(0,i.RY)(this._textureNormal),this._textureEmissive=(0,i.RY)(this._textureEmissive),this._textureOcclusion=(0,i.RY)(this._textureOcclusion),this._textureMetallicRoughness=(0,i.RY)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?a.Rw.LOADED:a.Rw.LOADING}get textureBindParameters(){return new c((0,i.pC)(this._texture)?this._texture.glTexture:null,(0,i.pC)(this._textureNormal)?this._textureNormal.glTexture:null,(0,i.pC)(this._textureEmissive)?this._textureEmissive.glTexture:null,(0,i.pC)(this._textureOcclusion)?this._textureOcclusion.glTexture:null,(0,i.pC)(this._textureMetallicRoughness)?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){((0,i.Wi)(this._texture)||e!==this._texture.id)&&(this._texture=(0,i.RY)(this._texture),this._textureId=e,this._acquire(this._textureId,(e=>this._texture=e)))}_acquire(e,t){if((0,i.Wi)(e))return void t(null);const r=this._textureRepository.acquire(e);if((0,o.y8)(r))return++this._numLoading,void r.then((e=>{if(this._disposed)return(0,i.RY)(e),void t(null);t(e)})).finally((()=>--this._numLoading));t(r)}}class c extends n.K{constructor(e=null,t=null,r=null,i=null,o=null){super(),this.texture=e,this.textureNormal=t,this.textureEmissive=r,this.textureOcclusion=i,this.textureMetallicRoughness=o}}},54388:(e,t,r)=>{r.d(t,{$z:()=>n,DX:()=>d,mi:()=>o,p:()=>c});var i=r(1533);function o(e){if(Array.isArray(e)){if(e.length<i.DB)return e;for(const t of e)if(t>=65536)return new Uint32Array(e);return new Uint16Array(e)}if(e.length<i.DB)return Array.from(e);if(e.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return e;for(const t of e)if(t>=65536)return e;return new Uint16Array(e)}function n(e){const t=3*e;return t<=i.DB?new Array(t):t<=65536?new Uint16Array(t):new Uint32Array(t)}let a=(()=>{const e=new Uint32Array(131072);for(let t=0;t<e.length;++t)e[t]=t;return e})();const s=[0],l=(()=>{const e=new Uint16Array(65536);for(let t=0;t<e.length;++t)e[t]=t;return e})();function c(e){if(1===e)return s;if(e<i.DB)return Array.from(new Uint16Array(l.buffer,0,e));if(e<l.length)return new Uint16Array(l.buffer,0,e);if(e>a.length){const t=Math.max(2*a.length,e);a=new Uint32Array(t);for(let e=0;e<a.length;e++)a[e]=e}return new Uint32Array(a.buffer,0,e)}function d(e){if(1===e)return s;if(e<i.DB)return Array.from(new Uint16Array(l.buffer,0,e));if(e<l.length)return new Uint16Array(l.slice(0,e));if(e>a.length){const t=new Uint32Array(e);for(let e=0;e<t.length;e++)t[e]=e;return t}return new Uint32Array(a.slice(0,e))}},82791:(e,t,r)=>{r.d(t,{F5:()=>u,yD:()=>i});var i,o,n=r(70586),a=r(65617),s=(r(74709),r(17662)),l=r(4726),c=r(83475),d=r(57790);class u extends s.c{constructor(e,t){super(),this.type=l.U.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=c.i,this._pp0=(0,a.f)(0,0,1),this._pp1=(0,a.f)(0,0,0),this._parameters=(0,d.Uf)(e,t),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e,t=!0){(0,d.LO)(this._parameters,e)&&(this.validateParameters(this._parameters),t&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&0!=(this.renderOccluded&e.renderOccludedMask)}isVisibleForOutput(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){(0,n.pC)(this.repository)&&this.repository.materialChanged(this)}intersectDraped(e,t,r,i,o,n){return this._pp0[0]=this._pp1[0]=i[0],this._pp0[1]=this._pp1[1]=i[1],this.intersect(e,t,r,this._pp0,this._pp1,o)}}(o=i||(i={}))[o.Occlude=1]="Occlude",o[o.Transparent=2]="Transparent",o[o.OccludeAndTransparent=4]="OccludeAndTransparent",o[o.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",o[o.Opaque=16]="Opaque"},59377:(e,t,r)=>{r.d(t,{$:()=>s});var i=r(70586),o=r(44553),n=r(67498),a=r(49300);class s{constructor(e,t,r){this._context=e,this._locations=r,this._textures=new Map,this._freeTextureUnits=new o.Z({deallocator:null}),this._glProgram=e.programCache.acquire(t.generate("vertex"),t.generate("fragment"),r),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=t.generateBind(n.P.Pass,this),this.bindDraw=t.generateBind(n.P.Draw,this),this._fragmentUniforms=(0,a.hZ)()?t.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get compiled(){return this._glProgram.compiled}setUniform1b(e,t){this._glProgram.setUniform1i(e,t?1:0)}setUniform1i(e,t){this._glProgram.setUniform1i(e,t)}setUniform1f(e,t){this._glProgram.setUniform1f(e,t)}setUniform2fv(e,t){this._glProgram.setUniform2fv(e,t)}setUniform3fv(e,t){this._glProgram.setUniform3fv(e,t)}setUniform4fv(e,t){this._glProgram.setUniform4fv(e,t)}setUniformMatrix3fv(e,t){this._glProgram.setUniformMatrix3fv(e,t)}setUniformMatrix4fv(e,t){this._glProgram.setUniformMatrix4fv(e,t)}setUniform1fv(e,t){this._glProgram.setUniform1fv(e,t)}setUniform1iv(e,t){this._glProgram.setUniform1iv(e,t)}setUniform2iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform3iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform4iv(e,t){this._glProgram.setUniform4iv(e,t)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if((0,i.Wi)(t)||null==t.glName){const t=this._textures.get(e);return t&&(this._context.bindTexture(null,t.unit),this._freeTextureUnit(t),this._textures.delete(e)),null}let r=this._textures.get(e);return null==r?(r=this._allocTextureUnit(t),this._textures.set(e,r)):r.texture=t,this._context.useProgram(this),this.setUniform1i(e,r.unit),this._context.bindTexture(t,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)})),(0,i.pC)(this._fragmentUniforms)&&this._fragmentUniforms.forEach((e=>{"sampler2D"!==e.type&&"samplerCube"!==e.type||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)}))}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}},93144:(e,t,r)=>{var i;r.d(t,{A:()=>i}),function(e){e[e.Color=0]="Color",e[e.Alpha=1]="Alpha",e[e.FrontFace=2]="FrontFace",e[e.NONE=3]="NONE",e[e.COUNT=4]="COUNT"}(i||(i={}))},11726:(e,t,r)=>{r.d(t,{hu:()=>o,yK:()=>n}),r(97323),r(98766),(0,r(88669).c)();class i{constructor(e){this.message=e}toString(){return`AssertException: ${this.message}`}}function o(e,t){if(!e){t=t||"Assertion";const e=new Error(t).stack;throw new i(`${t} at ${e}`)}}function n(e,t,r,i){let o,n=(r[0]-e[0])/t[0],a=(i[0]-e[0])/t[0];n>a&&(o=n,n=a,a=o);let s=(r[1]-e[1])/t[1],l=(i[1]-e[1])/t[1];if(s>l&&(o=s,s=l,l=o),n>l||s>a)return!1;s>n&&(n=s),l<a&&(a=l);let c=(r[2]-e[2])/t[2],d=(i[2]-e[2])/t[2];return c>d&&(o=c,c=d,d=o),!(n>d||c>a||(d<a&&(a=d),a<0))}},89917:(e,t,r)=>{r.d(t,{ow:()=>g});var i=r(83475),o=r(35065),n=r(35371),a=r(21968);new a.G(o.T.POSITION,3,n.g.FLOAT,0,12),new a.G(o.T.POSITION,3,n.g.FLOAT,0,20),new a.G(o.T.UV0,2,n.g.FLOAT,12,20),new a.G(o.T.POSITION,3,n.g.FLOAT,0,32),new a.G(o.T.NORMAL,3,n.g.FLOAT,12,32),new a.G(o.T.UV0,2,n.g.FLOAT,24,32),new a.G(o.T.POSITION,3,n.g.FLOAT,0,16),new a.G(o.T.COLOR,4,n.g.UNSIGNED_BYTE,12,16);const s=[new a.G(o.T.POSITION,2,n.g.FLOAT,0,8)],l=[new a.G(o.T.POSITION,2,n.g.FLOAT,0,16),new a.G(o.T.UV0,2,n.g.FLOAT,8,16)];var c=r(92604),d=r(70586),u=r(45762);const h=c.Z.getLogger("esri.views.webgl.VertexArrayObject");let f=class{constructor(e,t,r,i,o=null){this._context=e,this._locations=t,this._layout=r,this._buffers=i,this._indexBuffer=o,this._glName=null,this._initialized=!1,e.instanceCounter.increment(n._g.VertexArrayObject,this)}get glName(){return this._glName}get context(){return this._context}get vertexBuffers(){return this._buffers}get indexBuffer(){return this._indexBuffer}get size(){return Object.keys(this._buffers).reduce(((e,t)=>e+this._buffers[t].size),(0,d.pC)(this._indexBuffer)?this._indexBuffer.size:0)}get layout(){return this._layout}get locations(){return this._locations}dispose(e=!0){if(this._context){if(this._glName){const e=this._context?.capabilities?.vao;e?(e.deleteVertexArray(this._glName),this._glName=null):h.warn("Leaked WebGL VAO")}if(this._context.getBoundVAO()===this&&this._context.bindVAO(null),e){for(const e in this._buffers)this._buffers[e]?.dispose(),delete this._buffers[e];this._indexBuffer=(0,d.M2)(this._indexBuffer)}this._context.instanceCounter.decrement(n._g.VertexArrayObject,this),this._context=(0,d.wN)(this._context)}else(this._glName||e&&Object.getOwnPropertyNames(this._buffers).length>0)&&h.warn("Leaked WebGL VAO")}initialize(){if(this._initialized)return;const e=this._context.capabilities.vao;if(e){const t=e.createVertexArray();e.bindVertexArray(t),this._bindLayout(),e.bindVertexArray(null),this._glName=t}this._initialized=!0}bind(){this.initialize();const e=this._context.capabilities.vao;e?e.bindVertexArray(this.glName):(this._context.bindVAO(null),this._bindLayout())}_bindLayout(){const{_buffers:e,_layout:t,_indexBuffer:r}=this;e||h.error("Vertex buffer dictionary is empty!");const i=this._context.gl;for(const r in e){const i=e[r];i||h.error("Vertex buffer is uninitialized!");const o=t[r];o||h.error("Vertex element descriptor is empty!"),(0,u.XP)(this._context,this._locations,i,o)}(0,d.pC)(r)&&(this._context.capabilities.vao?i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,r.glName):this._context.bindBuffer(r))}unbind(){this.initialize();const e=this._context.capabilities.vao;e?e.bindVertexArray(null):this._unbindLayout()}_unbindLayout(){const{_buffers:e,_layout:t}=this;e||h.error("Vertex buffer dictionary is empty!");for(const r in e){const i=e[r];i||h.error("Vertex buffer is uninitialized!");const o=t[r];(0,u.UF)(this._context,this._locations,i,o)}(0,d.pC)(this._indexBuffer)&&this._context.unbindBuffer(this._indexBuffer.bufferType)}};class m extends f{}var p=r(63587);function g(e,t=s,r=i.i,o=-1,a=1){let c=null;return c=t===l?new Float32Array([o,o,0,0,a,o,1,0,o,a,0,1,a,a,1,1]):new Float32Array([o,o,a,o,o,a,a,a]),new m(e,r,{geometry:t},{geometry:p.f.createVertex(e,n.l1.STATIC_DRAW,c)})}r(75656)},57790:(e,t,r)=>{r.d(t,{FZ:()=>C,Uf:()=>w,Bw:()=>p,LO:()=>S,Hx:()=>E});var i=r(67676),o=r(22021),n=r(70586),a=r(17896),s=r(65617),l=r(60437),c=r(4726);function d(e,t,r,i){return function(e,t){return Math.max((0,o.t7)(e*t.scale,e,t.factor),function(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}(e,t))}(e,function(e,t,r){const i=r.parameters,o=r.paddingPixelsOverride;return u.scale=Math.min(i.divisor/(t-i.offset),1),u.factor=function(e){return Math.abs(e*e*e)}(e),u.minPixelSize=i.minPixelSize,u.paddingPixels=o,u}(t,r,i))}r(64822),(0,o.Vl)(10),(0,o.Vl)(12),(0,o.Vl)(70),(0,o.Vl)(40);const u={scale:0,factor:0,minPixelSize:0,paddingPixels:0};var h=r(11726),f=r(35065);const m=(0,l.Ue)();function p(e,t,r,i,o,n){if(e.visible)if(e.boundingInfo){(0,h.hu)(e.type===c.U.Mesh);const a=t.tolerance;v(e.boundingInfo,r,i,a,o,n)}else{const t=e.indices.get(f.T.POSITION),a=e.vertexAttributes.get(f.T.POSITION);x(r,i,0,t.length/3,t,a,void 0,o,n)}}const g=(0,s.c)();function v(e,t,r,i,o,s){if((0,n.Wi)(e))return;const c=function(e,t,r){return(0,a.s)(r,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}(t,r,g);if((0,l.op)(m,e.bbMin),(0,l.Tn)(m,e.bbMax),(0,n.pC)(o)&&o.applyToAabb(m),function(e,t,r,i){return function(e,t,r,i,o){const n=(e[0]-i-t[0])*r[0],a=(e[3]+i-t[0])*r[0];let s=Math.min(n,a),l=Math.max(n,a);const c=(e[1]-i-t[1])*r[1],d=(e[4]+i-t[1])*r[1];if(l=Math.min(l,Math.max(c,d)),l<0)return!1;if(s=Math.max(s,Math.min(c,d)),s>l)return!1;const u=(e[2]-i-t[2])*r[2],h=(e[5]+i-t[2])*r[2];return l=Math.min(l,Math.max(u,h)),!(l<0)&&(s=Math.max(s,Math.min(u,h)),!(s>l)&&s<1/0)}(e,t,r,i)}(m,t,c,i)){const{primitiveIndices:n,indices:a,position:l}=e,c=n?n.length:a.length/3;if(c>R){const n=e.getChildren();if(void 0!==n){for(const e of n)v(e,t,r,i,o,s);return}}x(t,r,0,c,a,l,n,o,s)}}const _=(0,s.c)();function x(e,t,r,i,o,a,s,l,c){if(s)return function(e,t,r,i,o,a,s,l,c){const{data:d,stride:u}=a,h=e[0],f=e[1],m=e[2],p=t[0]-h,g=t[1]-f,v=t[2]-m;for(let e=r;e<i;++e){const t=s[e];let r=3*t,i=u*o[r++],a=d[i++],x=d[i++],T=d[i];i=u*o[r++];let b=d[i++],E=d[i++],w=d[i];i=u*o[r];let S=d[i++],y=d[i++],C=d[i];(0,n.pC)(l)&&([a,x,T]=l.applyToVertex(a,x,T,e),[b,E,w]=l.applyToVertex(b,E,w,e),[S,y,C]=l.applyToVertex(S,y,C,e));const R=b-a,M=E-x,O=w-T,P=S-a,N=y-x,I=C-T,L=g*I-N*v,D=v*P-I*p,F=p*N-P*g,H=R*L+M*D+O*F;if(Math.abs(H)<=Number.EPSILON)continue;const B=h-a,U=f-x,z=m-T,V=B*L+U*D+z*F;if(H>0){if(V<0||V>H)continue}else if(V>0||V<H)continue;const G=U*O-M*z,W=z*R-O*B,k=B*M-R*U,$=p*G+g*W+v*k;if(H>0){if($<0||V+$>H)continue}else if($>0||V+$<H)continue;const q=(P*G+N*W+I*k)/H;q>=0&&c(q,A(R,M,O,P,N,I,_),t,!1)}}(e,t,r,i,o,a,s,l,c);const{data:d,stride:u}=a,h=e[0],f=e[1],m=e[2],p=t[0]-h,g=t[1]-f,v=t[2]-m;for(let e=r,t=3*r;e<i;++e){let r=u*o[t++],i=d[r++],a=d[r++],s=d[r];r=u*o[t++];let x=d[r++],T=d[r++],b=d[r];r=u*o[t++];let E=d[r++],w=d[r++],S=d[r];(0,n.pC)(l)&&([i,a,s]=l.applyToVertex(i,a,s,e),[x,T,b]=l.applyToVertex(x,T,b,e),[E,w,S]=l.applyToVertex(E,w,S,e));const y=x-i,C=T-a,R=b-s,M=E-i,O=w-a,P=S-s,N=g*P-O*v,I=v*M-P*p,L=p*O-M*g,D=y*N+C*I+R*L;if(Math.abs(D)<=Number.EPSILON)continue;const F=h-i,H=f-a,B=m-s,U=F*N+H*I+B*L;if(D>0){if(U<0||U>D)continue}else if(U>0||U<D)continue;const z=H*R-C*B,V=B*y-R*F,G=F*C-y*H,W=p*z+g*V+v*G;if(D>0){if(W<0||U+W>D)continue}else if(W>0||U+W<D)continue;const k=(M*z+O*V+P*G)/D;k>=0&&c(k,A(y,C,R,M,O,P,_),e,!1)}}const T=(0,s.c)(),b=(0,s.c)();function A(e,t,r,i,o,n,s){return(0,a.s)(T,e,t,r),(0,a.s)(b,i,o,n),(0,a.f)(s,T,b),(0,a.n)(s,s),s}function E(e,t,r,i,a){let s=(r.screenLength||0)*e.pixelRatio;(0,n.pC)(a)&&(s=d(s,i,t,a));const l=s*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return(0,o.uZ)(l*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}function w(e,t){const r=t?w(t):{};for(const t in e){let i=e[t];i&&i.forEach&&(i=y(i)),null==i&&t in r||(r[t]=i)}return r}function S(e,t){let r=!1;for(const o in t){const n=t[o];void 0!==n&&(Array.isArray(n)?null===e[o]?(e[o]=n.slice(),r=!0):(0,i.Vx)(e[o],n)&&(r=!0):e[o]!==n&&(r=!0,e[o]=n))}return r}function y(e){const t=[];return e.forEach((e=>t.push(e))),t}const C={multiply:1,ignore:2,replace:3,tint:4},R=1e3},63587:(e,t,r)=>{r.d(t,{f:()=>u});var i=r(67676),o=r(92604),n=r(70586),a=r(1533),s=r(49300),l=r(54738),c=r(35371);const d=o.Z.getLogger("esri.views.webgl.BufferObject");class u{static createIndex(e,t,r){return new u(e,c.w0.ELEMENT_ARRAY_BUFFER,t,r)}static createVertex(e,t,r){return new u(e,c.w0.ARRAY_BUFFER,t,r)}static createUniform(e,t,r){if(e.type!==l.zO.WEBGL2)throw new Error("Uniform buffers are supported in WebGL2 only!");return new u(e,c.w0.UNIFORM_BUFFER,t,r)}static createPixelPack(e,t=c.l1.STREAM_READ,r){if(e.type!==l.zO.WEBGL2)throw new Error("Pixel pack buffers are supported in WebGL2 only!");const i=new u(e,c.w0.PIXEL_PACK_BUFFER,t);return r&&i.setSize(r),i}static createPixelUnpack(e,t=c.l1.STREAM_DRAW,r){if(e.type!==l.zO.WEBGL2)throw new Error("Pixel unpack buffers are supported in WebGL2 only!");return new u(e,c.w0.PIXEL_UNPACK_BUFFER,t,r)}constructor(e,t,r,i){this._context=e,this.bufferType=t,this.usage=r,this._glName=null,this._size=-1,this._indexType=void 0,e.instanceCounter.increment(c._g.BufferObject,this),this._glName=this._context.gl.createBuffer(),(0,s.zu)(this._context.gl),i&&this.setData(i)}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get byteSize(){return this.bufferType===c.w0.ELEMENT_ARRAY_BUFFER?this._indexType===c.g.UNSIGNED_INT?4*this._size:2*this._size:this._size}get _isVAOAware(){return this.bufferType===c.w0.ELEMENT_ARRAY_BUFFER||this.bufferType===c.w0.ARRAY_BUFFER}dispose(){this._context?.gl?(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement(c._g.BufferObject,this),this._context=(0,n.wN)(this._context)):this._glName&&d.warn("Leaked WebGL buffer object")}setSize(e,t=null){if(e<=0&&d.error("Buffer size needs to be positive!"),this.bufferType===c.w0.ELEMENT_ARRAY_BUFFER&&(0,n.pC)(t))switch(this._indexType=t,t){case c.g.UNSIGNED_SHORT:e*=2;break;case c.g.UNSIGNED_INT:e*=4}this._setBufferData(e)}setData(e){if(!e)return;let t=e.byteLength;this.bufferType===c.w0.ELEMENT_ARRAY_BUFFER&&((0,a.Uc)(e)&&(t/=2,this._indexType=c.g.UNSIGNED_SHORT),(0,a.ZY)(e)&&(t/=4,this._indexType=c.g.UNSIGNED_INT)),this._setBufferData(t,e)}_setBufferData(e,t=null){this._size=e;const r=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const i=this._context.gl;(0,n.pC)(t)?i.bufferData(this.bufferType,t,this.usage):i.bufferData(this.bufferType,e,this.usage),(0,s.zu)(i),this._isVAOAware&&this._context.bindVAO(r)}setSubData(e,t,r,i){if(!e)return;(t<0||t*e.BYTES_PER_ELEMENT>=this.byteSize)&&d.error("offset is out of range!"),r>=i&&d.error("end must be bigger than start!"),(t+(i-r))*e.BYTES_PER_ELEMENT>this.byteSize&&d.error("An attempt to write beyond the end of the buffer!");const o=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const n=this._context.gl;if(this._context.type===l.zO.WEBGL2)n.bufferSubData(this.bufferType,t*e.BYTES_PER_ELEMENT,e,r,i-r);else{const o=0===r&&i===e.length?e:e.subarray(r,i);n.bufferSubData(this.bufferType,t*e.BYTES_PER_ELEMENT,o)}(0,s.zu)(n),this._isVAOAware&&this._context.bindVAO(o)}getSubData(e,t=0,r,o){if(this._context.type!==l.zO.WEBGL2)return void d.error("Get buffer subdata is supported in WebGL2 only!");if(r<0||o<0)return void d.error("Problem getting subdata: offset and length were less than zero!");const n=function(e){return(0,i.zG)(e)}(e)?e.BYTES_PER_ELEMENT:1;if(n*((r??0)+(o??0))>e.byteLength)return void d.error("Problem getting subdata: offset and length exceeded destination size!");t+n*(o??0)>this.byteSize&&d.warn("Potential problem getting subdata: requested data exceeds buffer size!");const a=this._context.gl;this._context.bindBuffer(this,c.w0.COPY_READ_BUFFER),a.getBufferSubData(c.w0.COPY_READ_BUFFER,t,e,r,o),this._context.unbindBuffer(c.w0.COPY_READ_BUFFER)}async getSubDataAsync(e,t=0,r,i){this._context.type===l.zO.WEBGL2?(await this._context.clientWaitAsync(),this.getSubData(e,t,r,i)):d.error("Get buffer subdata is supported in WebGL2 only!")}}},33696:(e,t,r)=>{r.d(t,{X:()=>h});var i=r(92604),o=r(70586),n=r(63587),a=r(49300),s=r(54738),l=r(35371);class c{constructor(e,t){this._context=e,this._desc=t,this.type="renderbuffer",this._context.instanceCounter.increment(l._g.Renderbuffer,this);const r=this._context.gl;this.glName=r.createRenderbuffer(),this._context.bindRenderbuffer(this);const{width:i,height:o,internalFormat:n,multisampled:a}=t;if(a){if(this._context.type!==s.zO.WEBGL2)throw new Error("Multisampled renderbuffers are not supported in WebGL1!");r.renderbufferStorageMultisample(r.RENDERBUFFER,this.samples,n,i,o)}else r.renderbufferStorage(r.RENDERBUFFER,n,i,o)}get descriptor(){return this._desc}get samples(){const e=this._desc.samples,t=this._context.parameters.maxSamples;return e?Math.min(e,t):t}resize(e,t){const r=this._desc;if(r.width===e&&r.height===t)return;r.width=e,r.height=t;const i=this._context.gl;this._context.bindRenderbuffer(this),r.multisampled?i.renderbufferStorageMultisample(i.RENDERBUFFER,this.samples,r.internalFormat,r.width,r.height):i.renderbufferStorage(i.RENDERBUFFER,r.internalFormat,r.width,r.height)}dispose(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(l._g.Renderbuffer,this),this._context=(0,o.wN)(this._context))}}var d=r(75656),u=r(45762);class h{constructor(e,t,r=null,i=null){if(this._context=e,this._glName=null,this._depthAttachment=null,this._stencilAttachment=null,this._colorAttachments=new Map,this._depthStencilTexture=null,this._initialized=!1,this._desc={...t},e.instanceCounter.increment(l._g.FramebufferObject,this),(0,o.pC)(r)){Array.isArray(r)||(r=[r]);for(let e=0;e<r.length;++e){const t=r[e],i=l.VY.COLOR_ATTACHMENT0+e;let o;p(t)?(f(t)?(o=t.descriptor,this._colorAttachments.set(i,t)):(o=t,this._colorAttachments.set(i,new d.x(this._context,o))),g(o,this._desc)):(m(t)?(o=t.descriptor,this._colorAttachments.set(i,t)):(o=t,this._colorAttachments.set(i,new c(this._context,o))),v(o,this._desc)),this._validateColorAttachmentPoint(i)}}if((0,o.pC)(i)){let e,t;if(p(i))this._context.capabilities.depthTexture||console.error("Setting the depth/stencil texture as an attachment requires WEBGL_depth_texture or WebGL2"),f(i)?(t=i.descriptor,this._depthStencilTexture=i):(t=i,this._depthStencilTexture=new d.x(this._context,t)),g(t,this._desc);else{m(i)?(t=i.descriptor,e=i):(t=i,e=new c(this._context,t));const r=this._desc.depthStencilTarget??l.OU.DEPTH_STENCIL_RENDER_BUFFER;r===l.OU.STENCIL_RENDER_BUFFER?this._stencilAttachment=e:r===l.OU.DEPTH_RENDER_BUFFER||r===l.OU.DEPTH_STENCIL_RENDER_BUFFER?this._depthAttachment=e:console.error('If a Renderbuffer is provided, "depthStencilTarget" must be one of STENCIL_RENDER_BUFFER, DEPTH_RENDER_BUFFER or DEPTH_STENCIL_RENDER_BUFFER'),this._desc.depthStencilTarget=r,v(t,this._desc)}}}dispose(){if(!this._desc)return;const e=this._context.getBoundFramebufferObject();this._disposeColorAttachments(),this._disposeDepthStencilAttachments(),this._glName&&(this._context.gl.deleteFramebuffer(this._glName),this._glName=null),this._context.bindFramebuffer(e),this._context.instanceCounter.decrement(l._g.FramebufferObject,this),this._desc=null}get glName(){return this._glName}get descriptor(){return this._desc}get colorTexture(){const e=this._colorAttachments.get(l.VY.COLOR_ATTACHMENT0);return e&&f(e)?e:null}get colorAttachment(){return this._colorAttachments.get(l.VY.COLOR_ATTACHMENT0)}get depthStencilAttachment(){return this._depthStencilTexture||this._depthAttachment||this._stencilAttachment}get depthStencilTexture(){return this._depthStencilTexture}get width(){return this._desc.width??0}get height(){return this._desc.height??0}get gpuMemoryUsage(){return[...this._colorAttachments].reduce(((e,[t,r])=>e+(0,u.un)(r)),0)+(0,u.un)(this.depthStencilAttachment)}getColorTexture(e){const t=this._colorAttachments.get(e);return t&&f(t)?t:null}attachColorTexture(e,t=l.VY.COLOR_ATTACHMENT0){e&&(this._validateColorAttachmentPoint(t),g(e.descriptor,this._desc),this._disposeColorAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(e.glName,t)),this._colorAttachments.set(t,e))}detachColorTexture(e=l.VY.COLOR_ATTACHMENT0){const t=this._colorAttachments.get(e);if(f(t)){const r=t;return this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e)),this._colorAttachments.delete(e),r}}setColorTextureTarget(e,t=l.VY.COLOR_ATTACHMENT0){const r=this._colorAttachments.get(t);f(r)&&this._framebufferTexture2D(r.glName,t,e)}attachDepthStencilTexture(e){if((0,o.Wi)(e))return;const t=e.descriptor;t.pixelFormat!==l.VI.DEPTH_STENCIL&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),t.dataType!==l.Br.UNSIGNED_INT_24_8&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!"),g(t,this._desc),this._desc.depthStencilTarget&&this._desc.depthStencilTarget!==l.OU.DEPTH_STENCIL_TEXTURE&&(this._desc.depthStencilTarget=l.OU.DEPTH_STENCIL_TEXTURE),this._disposeDepthStencilAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(e.glName,l.Lu)),this._depthStencilTexture=e}detachDepthStencilTexture(){const e=this._depthStencilTexture;return e&&this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,l.Lu)),this._depthStencilTexture=null,e}attachDepthStencilBuffer(e){if((0,o.Wi)(e))return;const t=e.descriptor;if(t.internalFormat!==l.Tg.DEPTH_STENCIL&&t.internalFormat!==l.Tg.DEPTH_COMPONENT16&&console.error("Depth/Stencil buffer must have correct internalFormat"),v(t,this._desc),this._disposeDepthStencilAttachments(),this._desc.depthStencilTarget=t.internalFormat===l.Tg.DEPTH_STENCIL?l.OU.DEPTH_STENCIL_RENDER_BUFFER:l.OU.DEPTH_RENDER_BUFFER,this._initialized){this._context.bindFramebuffer(this);const t=this._context.gl,r=this._desc.depthStencilTarget===l.OU.DEPTH_RENDER_BUFFER?t.DEPTH_ATTACHMENT:t.DEPTH_STENCIL_ATTACHMENT;t.framebufferRenderbuffer(l.qi.FRAMEBUFFER,r,t.RENDERBUFFER,e.glName)}this._depthAttachment=e}detachDepthStencilBuffer(){const e=this._context.gl,t=this._depthAttachment;if(t&&this._initialized){this._context.bindFramebuffer(this);const t=this._desc.depthStencilTarget===l.OU.DEPTH_RENDER_BUFFER?e.DEPTH_ATTACHMENT:e.DEPTH_STENCIL_ATTACHMENT;e.framebufferRenderbuffer(l.qi.FRAMEBUFFER,t,e.RENDERBUFFER,null)}return this._depthAttachment=null,t}detachAll(){this._colorAttachments.forEach(((e,t)=>this._detachColorAttachment(t))),this.detachDepthStencilBuffer(),this.detachDepthStencilTexture()}copyToTexture(e,t,r,i,o,n,a){(e<0||t<0||o<0||n<0)&&console.error("Offsets cannot be negative!"),(r<=0||i<=0)&&console.error("Copy width and height must be greater than zero!");const s=this._desc,c=a.descriptor;a.descriptor.target!==l.No.TEXTURE_2D&&console.error("Texture target must be TEXTURE_2D!"),(null==s?.width||null==s?.height||null==c?.width||null==c?.height||e+r>s.width||t+i>s.height||o+r>c.width||n+i>c.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");const u=this._context,h=u.bindTexture(a,d.x.TEXTURE_UNIT_FOR_UPDATES);u.setActiveTexture(d.x.TEXTURE_UNIT_FOR_UPDATES),u.bindFramebuffer(this),u.gl.copyTexSubImage2D(l.No.TEXTURE_2D,0,o,n,e,t,r,i),u.bindTexture(h,d.x.TEXTURE_UNIT_FOR_UPDATES)}readPixels(e,t,r,i,o,n,a){(r<=0||i<=0)&&console.error("Copy width and height must be greater than zero!"),a||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this),this._context.gl.readPixels(e,t,r,i,o,n,a)}async readPixelsAsync(e,t,r,i,o,c,d){if(this._context.type!==s.zO.WEBGL2)return(0,a.hZ)()&&console.warn("Attempting to read pixels using pixel buffer object without WebGL2"),void this.readPixels(e,t,r,i,o,c,d);const u=this._context.gl,h=n.f.createPixelPack(this._context,l.l1.STREAM_READ,d.byteLength);this._context.bindBuffer(h),this._context.bindFramebuffer(this),u.readPixels(e,t,r,i,o,c,0),this._context.unbindBuffer(l.w0.PIXEL_PACK_BUFFER),await h.getSubDataAsync(d),h.dispose()}resize(e,t){const r=this._desc;if(r.width!==e||r.height!==t){if(r.width=e,r.height=t,!this._initialized)return this._colorAttachments.forEach((r=>{r&&r.resize(e,t)})),void(this._depthStencilTexture&&this._depthStencilTexture.resize(e,t));this._colorAttachments.forEach((r=>{r&&r.resize(e,t)})),null!=this._depthStencilTexture?this._depthStencilTexture.resize(e,t):(this._depthAttachment||this._stencilAttachment)&&(this._depthAttachment&&this._depthAttachment.resize(e,t),this._stencilAttachment&&this._stencilAttachment.resize(e,t)),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1}}initializeAndBind(e=l.qi.FRAMEBUFFER){const t=this._context.gl;if(this._initialized)return void t.bindFramebuffer(e,this.glName);this._glName&&t.deleteFramebuffer(this._glName);const r=this._context,i=t.createFramebuffer(),o=this._desc,n=o.colorTarget??l.Lm.RENDER_BUFFER,s=o.width??1,u=o.height??1;if(t.bindFramebuffer(e,i),0===this._colorAttachments.size)if(n===l.Lm.TEXTURE||n===l.Lm.CUBEMAP)this._colorAttachments.set(l.VY.COLOR_ATTACHMENT0,function(e,t,r){return new d.x(e,{target:r,pixelFormat:l.VI.RGBA,dataType:l.Br.UNSIGNED_BYTE,samplingMode:l.cw.NEAREST,wrapMode:l.e8.CLAMP_TO_EDGE,width:t.width,height:t.height})}(r,o,this.descriptor.colorTarget===l.Lm.CUBEMAP?l.No.TEXTURE_CUBE_MAP:l.No.TEXTURE_2D));else{const e=new c(r,{internalFormat:l.lP.RGBA4,width:s,height:u});this._colorAttachments.set(l.VY.COLOR_ATTACHMENT0,e)}this._colorAttachments.forEach(((r,i)=>{r&&(f(r)?this._framebufferTexture2D(r.glName,i,_(r),e):t.framebufferRenderbuffer(e,i,t.RENDERBUFFER,r.glName))}));const h=o.depthStencilTarget??l.OU.NONE;switch(h){case l.OU.DEPTH_RENDER_BUFFER:case l.OU.DEPTH_STENCIL_RENDER_BUFFER:{this._depthAttachment||(this._depthAttachment=new c(r,{internalFormat:o.depthStencilTarget===l.OU.DEPTH_RENDER_BUFFER?l.Tg.DEPTH_COMPONENT16:l.Tg.DEPTH_STENCIL,width:s,height:u}));const i=h===l.OU.DEPTH_RENDER_BUFFER?t.DEPTH_ATTACHMENT:t.DEPTH_STENCIL_ATTACHMENT;t.framebufferRenderbuffer(e,i,t.RENDERBUFFER,this._depthAttachment.glName);break}case l.OU.STENCIL_RENDER_BUFFER:this._stencilAttachment||(this._stencilAttachment=new c(r,{internalFormat:l.Tg.STENCIL_INDEX8,width:s,height:u})),t.framebufferRenderbuffer(e,t.STENCIL_ATTACHMENT,t.RENDERBUFFER,this._stencilAttachment.glName);break;case l.OU.DEPTH_STENCIL_TEXTURE:if(!this._depthStencilTexture){r.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!");const e={target:l.No.TEXTURE_2D,pixelFormat:l.VI.DEPTH_STENCIL,dataType:l.Br.UNSIGNED_INT_24_8,samplingMode:l.cw.NEAREST,wrapMode:l.e8.CLAMP_TO_EDGE,width:s,height:u};this._depthStencilTexture=new d.x(r,e)}this._framebufferTexture2D(this._depthStencilTexture.glName,t.DEPTH_STENCIL_ATTACHMENT,_(this._depthStencilTexture),e)}(0,a.hZ)()&&t.checkFramebufferStatus(e)!==t.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!"),this._glName=i,this._initialized=!0}_framebufferTexture2D(e,t=l.VY.COLOR_ATTACHMENT0,r=l.No.TEXTURE_2D,i=l.qi.FRAMEBUFFER,o=0){this._context.gl.framebufferTexture2D(i,t,r,e,o)}_detachColorAttachment(e){(0,a.hZ)()&&console.warn("Detaching an FBO attachment can be a slow due to invalidating framebuffer completeness!");const t=this._context.gl,r=this._colorAttachments.get(e);return f(r)?this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e)):this._initialized&&(this._context.bindFramebuffer(this),t.framebufferRenderbuffer(l.qi.FRAMEBUFFER,e,t.RENDERBUFFER,null)),this._colorAttachments.delete(e),r}_disposeColorAttachments(){this._colorAttachments.forEach(((e,t)=>{this._detachColorAttachment(t),e.dispose()})),this._colorAttachments.clear()}_disposeDepthStencilAttachments(){const e=this._context.gl;if(this._depthAttachment){if(this._initialized){this._context.bindFramebuffer(this);const t=this._desc.depthStencilTarget===l.OU.DEPTH_RENDER_BUFFER?e.DEPTH_ATTACHMENT:e.DEPTH_STENCIL_ATTACHMENT;e.framebufferRenderbuffer(l.qi.FRAMEBUFFER,t,e.RENDERBUFFER,null)}this._depthAttachment.dispose(),this._depthAttachment=null}this._stencilAttachment&&(this._initialized&&(this._context.bindFramebuffer(this),e.framebufferRenderbuffer(l.qi.FRAMEBUFFER,e.STENCIL_ATTACHMENT,e.RENDERBUFFER,null)),this._stencilAttachment.dispose(),this._stencilAttachment=null),this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e.DEPTH_STENCIL_ATTACHMENT)),this._depthStencilTexture.dispose(),this._depthStencilTexture=null)}_validateColorAttachmentPoint(e){if(-1===h._MAX_COLOR_ATTACHMENTS){const e=this._context.capabilities.drawBuffers;if(e){const t=this._context.gl;h._MAX_COLOR_ATTACHMENTS=t.getParameter(e.MAX_COLOR_ATTACHMENTS)}else h._MAX_COLOR_ATTACHMENTS=1}const t=e-l.VY.COLOR_ATTACHMENT0;t+1>h._MAX_COLOR_ATTACHMENTS&&i.Z.getLogger("esri.views.webgl.FrameBufferObject").error("esri.FrameBufferObject",`illegal attachment point for color attachment: ${t+1}. Implementation supports up to ${h._MAX_COLOR_ATTACHMENTS} color attachments`)}}function f(e){return null!=e&&"type"in e&&"texture"===e.type}function m(e){return null!=e&&"type"in e&&"renderbuffer"===e.type}function p(e){return f(e)||null!=e&&"pixelFormat"in e}function g(e,t){e.target!==l.No.TEXTURE_2D&&e.target!==l.No.TEXTURE_CUBE_MAP&&console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"),void 0!==t.width&&t.width>=0&&void 0!==t.height&&t.height>=0?t.width===e.width&&t.height===e.height||console.error("Color attachment texture must match the framebuffer's!"):(t.width=e.width,t.height=e.height)}function v(e,t){void 0!==t.width&&t.width>=0&&void 0!==t.height&&t.height>=0?t.width===e.width&&t.height===e.height||console.error("Renderbuffer dimensions must match the framebuffer's!"):(t.width=e.width,t.height=e.height)}function _(e){return e.descriptor.target===l.No.TEXTURE_CUBE_MAP?l.No.TEXTURE_CUBE_MAP_POSITIVE_X:l.No.TEXTURE_2D}h._MAX_COLOR_ATTACHMENTS=-1},75656:(e,t,r)=>{r.d(t,{x:()=>c}),r(80442);var i=r(22021),o=r(70586),n=r(49300),a=r(54738),s=r(35371);const l={target:s.No.TEXTURE_2D,samplingMode:s.cw.LINEAR,wrapMode:s.e8.REPEAT,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1,isImmutable:!1};let c=class{constructor(e,t,r=null){this._context=e,this.type="texture",this._glName=null,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._wasImmutablyAllocated=!1,e.instanceCounter.increment(s._g.Texture,this),this._descriptor={...l,...t};for(const e in l)void 0===this._descriptor[e]&&(this._descriptor[e]=l[e]);if(e.type!==a.zO.WEBGL2&&(this._descriptor.isImmutable&&(this._descriptor.isImmutable=!1),h(this._descriptor.target)))throw new Error("3D and array textures are not supported in WebGL1");this._descriptor.target===s.No.TEXTURE_CUBE_MAP?this._setDataCubeMap(r):this.setData(r)}get glName(){return this._glName}get descriptor(){return this._descriptor}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._context.gl&&this._glName&&(this._context.unbindTexture(this),this._context.gl.deleteTexture(this._glName),this._glName=null,this._context.instanceCounter.decrement(s._g.Texture,this))}release(){this.dispose()}resize(e,t){const r=this._descriptor;if(r.width!==e||r.height!==t){if(this._wasImmutablyAllocated)throw new Error("Immutable textures can't be resized!");r.width=e,r.height=t,this._descriptor.target===s.No.TEXTURE_CUBE_MAP?this._setDataCubeMap(null):this.setData(null)}}_setDataCubeMap(e=null){for(let t=s.No.TEXTURE_CUBE_MAP_POSITIVE_X;t<=s.No.TEXTURE_CUBE_MAP_NEGATIVE_Z;t++)this._setData(e,t)}setData(e){this._setData(e)}_setData(e,t){if(!this._context||!this._context.gl)return;const r=this._context.gl;this._glName||(this._glName=r.createTexture()),void 0===e&&(e=null);const i=this._descriptor,a=t??i.target,l=h(a);null===e&&(i.width=i.width||4,i.height=i.height||4,l&&(i.depth=i.depth??1));const m=this._context.bindTexture(this,c.TEXTURE_UNIT_FOR_UPDATES);this._context.setActiveTexture(c.TEXTURE_UNIT_FOR_UPDATES),c._validateTexture(this._context,i),this._configurePixelStorage(),(0,n.zu)(r);const p=i.pixelFormat;let g=i.internalFormat??this._deriveInternalFormat(p,i.dataType);if(u(e)){let t=e.width,o=e.height;const s=1;e instanceof HTMLVideoElement&&(t=e.videoWidth,o=e.videoHeight),i.width&&i.height,l&&i.depth,i.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(a,g,i.hasMipmap,t,o,s),this._texImage(a,0,g,t,o,s,e),(0,n.zu)(r),i.hasMipmap&&this.generateMipmap(),void 0===i.width&&(i.width=t),void 0===i.height&&(i.height=o),l&&void 0===i.depth&&(i.depth=s)}else{const{width:t,height:c,depth:u}=i;if(null==t||null==c)throw new Error("Width and height must be specified!");if(l&&null==u)throw new Error("Depth must be specified!");if(i.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(a,g,i.hasMipmap,t,c,u),r.DEPTH24_STENCIL8&&g===r.DEPTH_STENCIL&&(g=r.DEPTH24_STENCIL8),d(e)){const n=e.levels,l=f(a,t,c,u),d=Math.min(l-1,n.length-1);(0,o.pC)(this._context.gl2)?r.texParameteri(i.target,this._context.gl2.TEXTURE_MAX_LEVEL,d):i.hasMipmap=i.hasMipmap&&l===n.length;const h=g;if(!function(e){return e in s.q_}(h))throw new Error("Attempting to use compressed data with an umcompressed format!");this._forEachMipmapLevel(((e,t,r,i)=>{const o=n[Math.min(e,n.length-1)];this._compressedTexImage(a,e,h,t,r,i,o)}),d)}else(0,o.pC)(e)?(this._texImage(a,0,g,t,c,u,e),(0,n.zu)(r),i.hasMipmap&&this.generateMipmap()):this._forEachMipmapLevel(((e,t,i,o)=>{this._texImage(a,e,g,t,i,o,null),(0,n.zu)(r)}))}c._applySamplingMode(r,this._descriptor),c._applyWrapMode(r,this._descriptor),c._applyAnisotropicFilteringParameters(this._context,this._descriptor),(0,n.zu)(r),this._context.bindTexture(m,c.TEXTURE_UNIT_FOR_UPDATES)}updateData(e,t,r,i,n,a,s=0){a||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const l=this._context.gl,h=this._descriptor,{pixelFormat:f,dataType:m,target:p,isImmutable:g}=h,v=h.internalFormat??this._deriveInternalFormat(f,m);if(g&&!this._wasImmutablyAllocated)throw new Error("Cannot update immutable texture before allocation!");const _=this._context.bindTexture(this,c.TEXTURE_UNIT_FOR_UPDATES,!0);if((t<0||r<0||i>h.width||n>h.height||t+i>h.width||r+n>h.height)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),s){if((0,o.Wi)(this._context.gl2))return void console.error("Webgl2 must be enabled to use dataRowOffset!");l.pixelStorei(this._context.gl2.UNPACK_SKIP_ROWS,s)}if(u(a)?(0,o.pC)(this._context.gl2)?this._context.gl2.texSubImage2D(p,e,t,r,i,n,f,m,a):l.texSubImage2D(p,e,t,r,f,m,a):d(a)?l.compressedTexSubImage2D(p,e,t,r,i,n,v,a.levels[e]):l.texSubImage2D(p,e,t,r,i,n,f,m,a),s){if((0,o.Wi)(this._context.gl2))return void console.error("Webgl2 must be enabled to use dataRowOffset!");l.pixelStorei(this._context.gl2.UNPACK_SKIP_ROWS,0)}this._context.bindTexture(_,c.TEXTURE_UNIT_FOR_UPDATES)}updateData3D(e,t,r,i,n,a,s,l){l||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const u=this._context.gl2;if((0,o.Wi)(u))throw new Error("3D textures are not supported in WebGL1");const f=this._descriptor,{pixelFormat:m,dataType:p,isImmutable:g,target:v}=f,_=f.internalFormat??this._deriveInternalFormat(m,p);if(g&&!this._wasImmutablyAllocated)throw new Error("Cannot update immutable texture before allocation!");h(v)||console.warn("Attempting to set 3D texture data on a non-3D texture");const x=this._context.bindTexture(this,c.TEXTURE_UNIT_FOR_UPDATES);if(this._context.setActiveTexture(c.TEXTURE_UNIT_FOR_UPDATES),(t<0||r<0||i<0||n>f.width||a>f.height||s>f.depth||t+n>f.width||r+a>f.height||i+s>f.depth)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),d(l))l=l.levels[e],u.compressedTexSubImage3D(v,e,t,r,i,n,a,s,_,l);else{const o=l;u.texSubImage3D(v,e,t,r,i,n,a,s,m,p,o)}this._context.bindTexture(x,c.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const e=this._descriptor;if(!e.hasMipmap){if(this._wasImmutablyAllocated)throw new Error("Cannot add mipmaps to immutable texture after allocation");e.hasMipmap=!0,this._samplingModeDirty=!0,c._validateTexture(this._context,e)}e.samplingMode===s.cw.LINEAR?(this._samplingModeDirty=!0,e.samplingMode=s.cw.LINEAR_MIPMAP_NEAREST):e.samplingMode===s.cw.NEAREST&&(this._samplingModeDirty=!0,e.samplingMode=s.cw.NEAREST_MIPMAP_NEAREST);const t=this._context.bindTexture(this,c.TEXTURE_UNIT_FOR_UPDATES);this._context.setActiveTexture(c.TEXTURE_UNIT_FOR_UPDATES),this._context.gl.generateMipmap(e.target),this._context.bindTexture(t,c.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,this._samplingModeDirty=!0)}setWrapMode(e){e!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=e,c._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const e=this._context.gl,t=this._descriptor;this._samplingModeDirty&&(c._applySamplingMode(e,t),this._samplingModeDirty=!1),this._wrapModeDirty&&(c._applyWrapMode(e,t),this._wrapModeDirty=!1)}_deriveInternalFormat(e,t){if(this._context.type===a.zO.WEBGL1)return e;switch(t){case s.Br.FLOAT:switch(e){case s.VI.RGBA:return s.lP.RGBA32F;case s.VI.RGB:return s.lP.RGB32F;default:throw new Error("Unable to derive format")}case s.Br.UNSIGNED_BYTE:switch(e){case s.VI.RGBA:return s.lP.RGBA8;case s.VI.RGB:return s.lP.RGB8}default:return e}}_configurePixelStorage(){const e=this._context.gl,{unpackAlignment:t,flipped:r,preMultiplyAlpha:i}=this._descriptor;e.pixelStorei(e.UNPACK_ALIGNMENT,t),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r?1:0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i?1:0)}_texStorage(e,t,r,i,n,a){const l=this._context.gl2;if((0,o.Wi)(l))throw new Error("Immutable textures are not supported in WebGL1");if(!function(e){return e in s.lP}(t))throw new Error("Immutable textures must have a sized internal format");if(!this._descriptor.isImmutable)return;const c=r?f(e,i,n,a):1;if(h(e)){if(null==a)throw new Error("Missing depth dimension for 3D texture upload");l.texStorage3D(e,c,t,i,n,a)}else l.texStorage2D(e,c,t,i,n);this._wasImmutablyAllocated=!0}_texImage(e,t,r,i,n,s,l){const c=this._context.gl;let d=null;const f=this._context.type===a.zO.WEBGL2,m=h(e),{isImmutable:p,pixelFormat:g,dataType:v}=this._descriptor;if(f&&(d=c),f||!u(l))if(p){if((0,o.pC)(l)){const r=l;if(m){if(null==s)throw new Error("Missing depth dimension for 3D texture upload");d.texSubImage3D(e,t,0,0,0,i,n,s,g,v,r)}else c.texSubImage2D(e,t,0,0,i,n,g,v,r)}}else{const a=(0,o.Wg)(l);if(m){if(null==s)throw new Error("Missing depth dimension for 3D texture upload");d.texImage3D(e,t,r,i,n,s,0,g,v,a)}else c.texImage2D(e,t,r,i,n,0,g,v,a)}else c.texImage2D(e,0,r,g,v,l)}_compressedTexImage(e,t,r,i,n,s,l){const c=this._context.gl;let d=null;const u=h(e),f=this._descriptor.isImmutable;if(u){if(this._context.type!==a.zO.WEBGL2)throw new Error("3D textures are not supported in WebGL1");d=c}if(f){if((0,o.pC)(l))if(u){if(null==s)throw new Error("Missing depth dimension for 3D texture upload");d.compressedTexSubImage3D(e,t,0,0,0,i,n,s,r,l)}else c.compressedTexSubImage2D(e,t,0,0,i,n,r,l)}else if(u){if(null==s)throw new Error("Missing depth dimension for 3D texture upload");d.compressedTexImage3D(e,t,r,i,n,s,0,l)}else c.compressedTexImage2D(e,t,r,i,n,0,l)}_forEachMipmapLevel(e,t=1/0){let{width:r,height:i,depth:o,hasMipmap:n,target:a}=this._descriptor;const l=a===s.No.TEXTURE_3D;if(null==r||null==i||l&&null==o)throw new Error("Missing texture dimensions for mipmap calculation");for(let a=0;e(a,r,i,o),n&&(1!==r||1!==i||l&&1!==o)&&!(a>=t);++a)r=Math.max(1,r>>1),i=Math.max(1,i>>1),l&&(o=Math.max(1,o>>1))}static _validateTexture(e,t){(null!=t.width&&t.width<0||null!=t.height&&t.height<0||null!=t.depth&&t.depth<0)&&console.error("Negative dimension parameters are not allowed!");const r=e.type===a.zO.WEBGL2,o=null!=t.width&&(0,i.wt)(t.width)&&null!=t.height&&(0,i.wt)(t.height);r||!t.isImmutable&&!h(t.target)||console.error("Immutable and 3D-like textures are not supported in WebGL1!"),r||o||("number"==typeof t.wrapMode?t.wrapMode!==s.e8.CLAMP_TO_EDGE&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):t.wrapMode.s===s.e8.CLAMP_TO_EDGE&&t.wrapMode.t===s.e8.CLAMP_TO_EDGE||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),t.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}static _applySamplingMode(e,t){let r=t.samplingMode,i=t.samplingMode;r===s.cw.LINEAR_MIPMAP_NEAREST||r===s.cw.LINEAR_MIPMAP_LINEAR?(r=s.cw.LINEAR,t.hasMipmap||(i=s.cw.LINEAR)):r!==s.cw.NEAREST_MIPMAP_NEAREST&&r!==s.cw.NEAREST_MIPMAP_LINEAR||(r=s.cw.NEAREST,t.hasMipmap||(i=s.cw.NEAREST)),e.texParameteri(t.target,e.TEXTURE_MAG_FILTER,r),e.texParameteri(t.target,e.TEXTURE_MIN_FILTER,i)}static _applyWrapMode(e,t){"number"==typeof t.wrapMode?(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode)):(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode.s),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode.t))}static _applyAnisotropicFilteringParameters(e,t){const r=e.capabilities.textureFilterAnisotropic;r&&e.gl.texParameterf(t.target,r.TEXTURE_MAX_ANISOTROPY,t.maxAnisotropy??1)}};function d(e){return(0,o.pC)(e)&&"type"in e&&"compressed"===e.type}function u(e){return(0,o.pC)(e)&&!d(e)&&!function(e){return(0,o.pC)(e)&&"byteLength"in e}(e)}function h(e){return e===s.No.TEXTURE_3D||e===s.No.TEXTURE_2D_ARRAY}function f(e,t,r,i=1){let o=Math.max(t,r);return e===s.No.TEXTURE_3D&&(o=Math.max(o,i)),Math.round(Math.log(o)/Math.LN2)+1}c.TEXTURE_UNIT_FOR_UPDATES=0},45762:(e,t,r)=>{r.d(t,{RG:()=>l,UF:()=>s,XP:()=>a,_V:()=>n,un:()=>c}),r(80442);var i=r(70586),o=r(35371);function n(e,t){return e.vertexBuffers[t].size/function(e){return e[0].stride}(e.layout[t])}function a(e,t,r,i,o=0){const n=e.gl,a=e.capabilities.instancing;e.bindBuffer(r);for(const e of i){const r=t.get(e.name);void 0===r&&console.error(`There is no location for vertex attribute '${e.name}' defined.`);const i=o*e.stride;if(e.count<=4)n.vertexAttribPointer(r,e.count,e.type,e.normalized,e.stride,e.offset+i),n.enableVertexAttribArray(r),e.divisor>0&&a&&a.vertexAttribDivisor(r,e.divisor);else if(9===e.count)for(let t=0;t<3;t++)n.vertexAttribPointer(r+t,3,e.type,e.normalized,e.stride,e.offset+12*t+i),n.enableVertexAttribArray(r+t),e.divisor>0&&a&&a.vertexAttribDivisor(r+t,e.divisor);else if(16===e.count)for(let t=0;t<4;t++)n.vertexAttribPointer(r+t,4,e.type,e.normalized,e.stride,e.offset+16*t+i),n.enableVertexAttribArray(r+t),e.divisor>0&&a&&a.vertexAttribDivisor(r+t,e.divisor);else console.error("Unsupported vertex attribute element count: "+e.count)}}function s(e,t,r,i){const n=e.gl,a=e.capabilities.instancing;e.bindBuffer(r);for(const e of i){const r=t.get(e.name);if(e.count<=4)n.disableVertexAttribArray(r),e.divisor&&e.divisor>0&&a&&a.vertexAttribDivisor(r,0);else if(9===e.count)for(let t=0;t<3;t++)n.disableVertexAttribArray(r+t),e.divisor&&e.divisor>0&&a&&a.vertexAttribDivisor(r+t,0);else if(16===e.count)for(let t=0;t<4;t++)n.disableVertexAttribArray(r+t),e.divisor&&e.divisor>0&&a&&a.vertexAttribDivisor(r+t,0);else console.error("Unsupported vertex attribute element count: "+e.count)}e.unbindBuffer(o.w0.ARRAY_BUFFER)}function l(e){switch(e){case o.VI.ALPHA:case o.VI.LUMINANCE:case o.VI.RED:case o.VI.RED_INTEGER:case o.lP.R8:case o.lP.R8I:case o.lP.R8UI:case o.lP.R8_SNORM:case o.Tg.STENCIL_INDEX8:return 1;case o.VI.LUMINANCE_ALPHA:case o.VI.RG:case o.VI.RG_INTEGER:case o.lP.RGBA4:case o.lP.R16F:case o.lP.R16I:case o.lP.R16UI:case o.lP.RG8:case o.lP.RG8I:case o.lP.RG8UI:case o.lP.RG8_SNORM:case o.lP.RGB565:case o.lP.RGB5_A1:case o.Tg.DEPTH_COMPONENT16:return 2;case o.VI.DEPTH_COMPONENT:case o.VI.RGB:case o.VI.RGB_INTEGER:case o.lP.RGB8:case o.lP.RGB8I:case o.lP.RGB8UI:case o.lP.RGB8_SNORM:case o.lP.SRGB8:case o.Tg.DEPTH_COMPONENT24:return 3;case o.VI.DEPTH_STENCIL:case o.VI.RGBA:case o.VI.RGBA_INTEGER:case o.lP.RGBA8:case o.lP.R32F:case o.lP.R11F_G11F_B10F:case o.lP.RG16F:case o.lP.R32I:case o.lP.R32UI:case o.lP.RG16I:case o.lP.RG16UI:case o.lP.RGBA8I:case o.lP.RGBA8UI:case o.lP.RGBA8_SNORM:case o.lP.SRGB8_ALPHA8:case o.lP.RGB9_E5:case o.lP.RGB10_A2UI:case o.lP.RGB10_A2:case o.Tg.DEPTH_STENCIL:case o.Tg.DEPTH_COMPONENT32F:case o.Tg.DEPTH24_STENCIL8:return 4;case o.Tg.DEPTH32F_STENCIL8:return 5;case o.lP.RGB16F:case o.lP.RGB16I:case o.lP.RGB16UI:return 6;case o.lP.RG32F:case o.lP.RG32I:case o.lP.RG32UI:case o.lP.RGBA16F:case o.lP.RGBA16I:case o.lP.RGBA16UI:return 8;case o.lP.RGB32F:case o.lP.RGB32I:case o.lP.RGB32UI:return 12;case o.lP.RGBA32F:case o.lP.RGBA32I:case o.lP.RGBA32UI:return 16;case o.q_.COMPRESSED_RGB_S3TC_DXT1_EXT:case o.q_.COMPRESSED_RGBA_S3TC_DXT1_EXT:return.5;case o.q_.COMPRESSED_RGBA_S3TC_DXT3_EXT:case o.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT:return 1;case o.q_.COMPRESSED_R11_EAC:case o.q_.COMPRESSED_SIGNED_R11_EAC:case o.q_.COMPRESSED_RGB8_ETC2:case o.q_.COMPRESSED_SRGB8_ETC2:case o.q_.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:case o.q_.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:return.5;case o.q_.COMPRESSED_RG11_EAC:case o.q_.COMPRESSED_SIGNED_RG11_EAC:case o.q_.COMPRESSED_RGBA8_ETC2_EAC:case o.q_.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:return 1}return 0}function c(e){if((0,i.Wi)(e))return 0;if("descriptor"in e)return e.glName?c(e.descriptor):0;const t=e.internalFormat||"pixelFormat"in e&&e.pixelFormat;if(!t)return 0;const r="hasMipmap"in e&&e.hasMipmap?1.3:1,o=e.width*e.height;return l(t)*o*r}},21968:(e,t,r)=>{r.d(t,{G:()=>i});class i{constructor(e,t,r,i,o,n=!1,a=0){this.name=e,this.count=t,this.type=r,this.offset=i,this.stride=o,this.normalized=n,this.divisor=a}}},49300:(e,t,r)=>{r.d(t,{hZ:()=>s,zu:()=>l});var i=r(20102),o=r(80442);const n=r(92604).Z.getLogger("esri.views.webgl.checkWebGLError"),a=!!(0,o.Z)("enable-feature:webgl-debug");function s(){return a}function l(e){if(s()){const t=e.getError();if(t){const r=function(e,t){switch(t){case e.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case e.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case e.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case e.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case e.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case e.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}(e,t),o=(new Error).stack;n.error(new i.Z("webgl-error","WebGL error occured",{message:r,stack:o}))}}}},54738:(e,t,r)=>{r.d(t,{Sh:()=>a,kr:()=>s,zO:()=>i});var i,o,n=r(80442);function a(e){const t=(0,n.Z)("esri-force-webgl");if(t===i.WEBGL1||t===i.WEBGL2)return[t];switch(e){case"2d":return(0,n.Z)("mac")&&(0,n.Z)("chrome")?[i.WEBGL1,i.WEBGL2]:[i.WEBGL2,i.WEBGL1];case"3d":return[i.WEBGL2,i.WEBGL1]}}function s(e,t,r={}){const o=t===i.WEBGL1?["webgl","experimental-webgl","webkit-3d","moz-webgl"]:["webgl2"];let n=null;for(const t of o){try{n=e.getContext(t,r)}catch(e){}if(n)break}return n}(o=i||(i={}))[o.WEBGL1=1]="WEBGL1",o[o.WEBGL2=2]="WEBGL2"},9820:(e,t,r)=>{function i(e,t){const r=e.length;for(let i=0;i<r;++i)n[0]=e[i],t[i]=n[0];return t}function o(e,t){const r=e.length;for(let i=0;i<r;++i)n[0]=e[i],n[1]=e[i]-n[0],t[i]=n[1];return t}r.d(t,{GB:()=>o,U8:()=>i});const n=new Float32Array(2)},27097:(e,t,r)=>{r.d(t,{BK:()=>u,LZ:()=>d,if:()=>n,sm:()=>T,wK:()=>a,zp:()=>c});var i=r(47026),o=r(35371);function n(e,t,r=o.db.ADD,i=[0,0,0,0]){return{srcRgb:e,srcAlpha:e,dstRgb:t,dstAlpha:t,opRgb:r,opAlpha:r,color:{r:i[0],g:i[1],b:i[2],a:i[3]}}}function a(e,t,r,i,n=o.db.ADD,a=o.db.ADD,s=[0,0,0,0]){return{srcRgb:e,srcAlpha:t,dstRgb:r,dstAlpha:i,opRgb:n,opAlpha:a,color:{r:s[0],g:s[1],b:s[2],a:s[3]}}}const s={face:o.LR.BACK,mode:o.Wf.CCW},l={face:o.LR.FRONT,mode:o.Wf.CCW},c=e=>e===i.Vr.Back?s:e===i.Vr.Front?l:null,d={zNear:0,zFar:1},u={r:!0,g:!0,b:!0,a:!0};function h(e){return E.intern(e)}function f(e){return S.intern(e)}function m(e){return C.intern(e)}function p(e){return M.intern(e)}function g(e){return P.intern(e)}function v(e){return I.intern(e)}function _(e){return D.intern(e)}function x(e){return H.intern(e)}function T(e){return U.intern(e)}class b{constructor(e,t){this._makeKey=e,this._makeRef=t,this._interns=new Map}intern(e){if(!e)return null;const t=this._makeKey(e),r=this._interns;return r.has(t)||r.set(t,this._makeRef(e)),r.get(t)??null}}function A(e){return"["+e.join(",")+"]"}const E=new b(w,(e=>({__tag:"Blending",...e})));function w(e){return e?A([e.srcRgb,e.srcAlpha,e.dstRgb,e.dstAlpha,e.opRgb,e.opAlpha,e.color.r,e.color.g,e.color.b,e.color.a]):null}const S=new b(y,(e=>({__tag:"Culling",...e})));function y(e){return e?A([e.face,e.mode]):null}const C=new b(R,(e=>({__tag:"PolygonOffset",...e})));function R(e){return e?A([e.factor,e.units]):null}const M=new b(O,(e=>({__tag:"DepthTest",...e})));function O(e){return e?A([e.func]):null}const P=new b(N,(e=>({__tag:"StencilTest",...e})));function N(e){return e?A([e.function.func,e.function.ref,e.function.mask,e.operation.fail,e.operation.zFail,e.operation.zPass]):null}const I=new b(L,(e=>({__tag:"DepthWrite",...e})));function L(e){return e?A([e.zNear,e.zFar]):null}const D=new b(F,(e=>({__tag:"ColorWrite",...e})));function F(e){return e?A([e.r,e.g,e.b,e.a]):null}const H=new b(B,(e=>({__tag:"StencilWrite",...e})));function B(e){return e?A([e.mask]):null}const U=new b((function(e){return e?A([w(e.blending),y(e.culling),R(e.polygonOffset),O(e.depthTest),N(e.stencilTest),L(e.depthWrite),F(e.colorWrite),B(e.stencilWrite)]):null}),(e=>({blending:h(e.blending),culling:f(e.culling),polygonOffset:m(e.polygonOffset),depthTest:p(e.depthTest),stencilTest:g(e.stencilTest),depthWrite:v(e.depthWrite),colorWrite:_(e.colorWrite),stencilWrite:x(e.stencilWrite)})))}}]);