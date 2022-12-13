"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[7275],{32078:(e,t,r)=>{r.d(t,{D:()=>k,b:()=>W});var i=r(70586),o=r(13598),a=r(1391),n=r(62707),s=r(55039),l=r(51546),c=r(77171),d=r(47624),u=r(64267),h=r(37099),f=r(76056),m=r(135),p=r(11317),g=r(15719),v=r(92555),_=r(89136),x=r(15817),T=r(72160),b=r(89753),A=r(5802),E=r(42001),S=r(19419),w=r(26322),C=r(85504),y=r(22539),R=r(57806),M=r(82550),O=r(96310),N=r(85787),P=r(90692),I=r(93669),L=r(172),D=r(71250),F=r(21437),H=r(74709),B=r(8319),U=r(33680),z=r(98069),V=r(93144),G=r(35065);function W(e){const t=new U.kG,{vertex:r,fragment:W,varyings:k}=t;return(0,I.Sv)(r,e),t.include(h.f),k.add("vpos","vec3"),t.include(M.k,e),t.include(d.f,e),t.include(v.L,e),e.hasColorTextureTransform&&t.include(R.av),e.output!==s.H.Color&&e.output!==s.H.Alpha||(e.hasNormalTextureTransform&&t.include(R.NI),e.hasEmissionTextureTransform&&t.include(R.R5),e.hasOcclusionTextureTransform&&t.include(R.jF),e.hasMetallicRoughnessTextureTransform&&t.include(R.DT),(0,I.hY)(r,e),t.include(u.O,e),t.include(c.w,e),e.normalType===u.h.Attribute&&e.offsetBackfaces&&t.include(n.w),t.include(x.Q,e),t.include(g.Bb,e),e.instancedColor&&t.attributes.add(G.T.INSTANCECOLOR,"vec4"),k.add("localvpos","vec3"),t.include(m.D,e),t.include(a.qj,e),t.include(f.R,e),t.include(p.c,e),r.uniforms.add(new D.N("externalColor",(e=>e.externalColor))),k.add("vcolorExt","vec4"),e.hasMultipassTerrain&&k.add("depth","float"),e.hasModelTransformation&&r.uniforms.add(new B.g("model",(e=>(0,i.pC)(e.modelTransformation)?e.modelTransformation:o.I))),r.code.add(H.H`
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
    `)),e.output===s.H.Alpha&&(t.include(l.f5,e),t.include(N.z,e),t.include(E.l,e),W.uniforms.add([new F.p("opacity",(e=>e.opacity)),new F.p("layerOpacity",(e=>e.layerOpacity))]),e.hasColorTexture&&W.uniforms.add(new z.A("tex",(e=>e.texture))),W.include(P.y),W.code.add(H.H`
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
    `)),e.output===s.H.Color&&(t.include(l.f5,e),t.include(b.XP,e),t.include(T.K,e),t.include(N.z,e),t.include(e.instancedDoublePrecision?y.hb:y.XE,e),t.include(E.l,e),(0,I.hY)(W,e),W.uniforms.add([r.uniforms.get("localOrigin"),new L.J("ambient",(e=>e.ambient)),new L.J("diffuse",(e=>e.diffuse)),new F.p("opacity",(e=>e.opacity)),new F.p("layerOpacity",(e=>e.layerOpacity))]),e.hasColorTexture&&W.uniforms.add(new z.A("tex",(e=>e.texture))),t.include(C.jV,e),t.include(w.T,e),W.include(P.y),t.include(S.k,e),(0,b.PN)(W),(0,b.sC)(W),(0,A.F1)(W),W.code.add(H.H`
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
        ${e.pbrMode===C.f7.Normal?"applyPBRFactors();":""}
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

        ${e.pbrMode===C.f7.Normal||e.pbrMode===C.f7.Schematic?H.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?H.H`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:H.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===V.A.Color?H.H`gl_FragColor = premultiplyAlpha(gl_FragColor);`:""}
      }
    `)),t.include(_.s,e),t}const k=Object.freeze(Object.defineProperty({__proto__:null,build:W},Symbol.toStringTag,{value:"Module"}))},41846:(e,t,r)=>{r.d(t,{R:()=>H,b:()=>F});var i=r(1391),o=r(62707),a=r(55039),n=r(51546),s=r(77171),l=r(47624),c=r(64267),d=r(37099),u=r(76056),h=r(135),f=r(11317),m=r(92555),p=r(89136),g=r(72160),v=r(89753),_=r(5802),x=r(42001),T=r(26322),b=r(85504),A=r(22539),E=r(82550),S=r(96310),w=r(85787),C=r(90692),y=r(93669),R=r(172),M=r(71250),O=r(21437),N=r(74709),P=r(33680),I=r(98069),L=r(93144),D=r(35065);function F(e){const t=new P.kG,{vertex:r,fragment:F,varyings:H}=t;return(0,y.Sv)(r,e),t.include(d.f),H.add("vpos","vec3"),t.include(E.k,e),t.include(l.f,e),t.include(m.L,e),e.output!==a.H.Color&&e.output!==a.H.Alpha||((0,y.hY)(t.vertex,e),t.include(c.O,e),t.include(s.w,e),e.offsetBackfaces&&t.include(o.w),e.instancedColor&&t.attributes.add(D.T.INSTANCECOLOR,"vec4"),H.add("vNormalWorld","vec3"),H.add("localvpos","vec3"),e.hasMultipassTerrain&&H.add("depth","float"),t.include(h.D,e),t.include(i.qj,e),t.include(u.R,e),t.include(f.c,e),r.uniforms.add(new M.N("externalColor",(e=>e.externalColor))),H.add("vcolorExt","vec4"),r.code.add(N.H`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${N.H.float(S.b)}) {
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
          ${e.hasMultipassTerrain?N.H`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===a.H.Alpha&&(t.include(n.f5,e),t.include(w.z,e),t.include(x.l,e),F.uniforms.add([new O.p("opacity",(e=>e.opacity)),new O.p("layerOpacity",(e=>e.layerOpacity))]),e.hasColorTexture&&F.uniforms.add(new I.A("tex",(e=>e.texture))),F.include(C.y),F.code.add(N.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?N.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?N.H`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?N.H`colorUV`:N.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:N.H`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?N.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:N.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===a.H.Color&&(t.include(n.f5,e),t.include(v.XP,e),t.include(g.K,e),t.include(w.z,e),t.include(e.instancedDoublePrecision?A.hb:A.XE,e),t.include(x.l,e),(0,y.hY)(t.fragment,e),(0,_.Pe)(F),(0,v.PN)(F),(0,v.sC)(F),F.uniforms.add([r.uniforms.get("localOrigin"),r.uniforms.get("view"),new R.J("ambient",(e=>e.ambient)),new R.J("diffuse",(e=>e.diffuse)),new O.p("opacity",(e=>e.opacity)),new O.p("layerOpacity",(e=>e.layerOpacity))]),e.hasColorTexture&&F.uniforms.add(new I.A("tex",(e=>e.texture))),t.include(b.jV,e),t.include(T.T,e),F.include(C.y),t.extensions.add("GL_OES_standard_derivatives"),(0,_.F1)(F),F.code.add(N.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?N.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?N.H`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?N.H`colorUV`:N.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:N.H`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===b.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?N.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:N.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.snowCover?N.H`albedo = mix(albedo, vec3(1), 0.9);`:N.H``}
        ${N.H`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${e.pbrMode===b.f7.Normal||e.pbrMode===b.f7.Schematic?e.spherical?N.H`vec3 normalGround = normalize(vpos + localOrigin);`:N.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:N.H``}
        ${e.pbrMode===b.f7.Normal||e.pbrMode===b.f7.Schematic?N.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?N.H`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:N.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===L.A.Color?N.H`gl_FragColor = premultiplyAlpha(gl_FragColor);`:N.H``}
      }
    `)),t.include(p.s,e),t}const H=Object.freeze(Object.defineProperty({__proto__:null,build:F},Symbol.toStringTag,{value:"Module"}))},25377:(e,t,r)=>{r.d(t,{S:()=>v,b:()=>m});var i=r(70586),o=r(4307),a=r(97323),n=r(33929),s=r(5543),l=r(20787),c=r(19693),d=r(21437),u=r(74709),h=r(33680),f=r(98069);function m(){const e=new h.kG,t=e.fragment;return e.include(n.k),t.include(s.S),e.include(l.G),t.uniforms.add(new d.p("radius",((e,t)=>p(t)))),t.code.add(u.H`vec3 sphere[16];
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
}`),t.uniforms.add([new c.A("nearFar",((e,t)=>t.camera.nearFar)),new f.A("normalMap",(e=>e.normalTexture)),new f.A("depthMap",(e=>e.depthTexture)),new c.A("zScale",((e,t)=>(0,l.R)(t))),new d.p("projScale",(e=>e.projScale)),new f.A("rnm",(e=>e.noiseTexture)),new c.A("rnmScale",((e,t)=>(0,o.s)(g,t.camera.fullWidth/(0,i.Wg)(e.noiseTexture).descriptor.width,t.camera.fullHeight/(0,i.Wg)(e.noiseTexture).descriptor.height))),new d.p("intensity",((e,t)=>2/p(t)**6)),new c.A("screenSize",((e,t)=>(0,o.s)(g,t.camera.fullWidth,t.camera.fullHeight)))]),t.code.add(u.H`
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
  `),e}function p(e){return Math.max(10,20*e.camera.computeRenderPixelSizeAtDist(Math.abs(4*e.camera.relativeElevation)))}const g=(0,a.a)(),v=Object.freeze(Object.defineProperty({__proto__:null,build:m},Symbol.toStringTag,{value:"Module"}))},59915:(e,t,r)=>{r.d(t,{S:()=>m,b:()=>f});var i=r(17896),o=r(33929),a=r(5543),n=r(98925),s=r(19693),l=r(21437),c=r(74709),d=r(33680),u=r(16374),h=r(98069);function f(){const e=new d.kG,t=e.fragment;return e.include(o.k),t.include(a.S),t.uniforms.add([new h.A("depthMap",(e=>e.depthTexture)),new u.R("tex",(e=>e.colorTexture)),new n.q("blurSize",(e=>e.blurSize)),new l.p("projScale",((e,t)=>{const r=(0,i.i)(t.camera.eye,t.camera.center);return r>5e4?Math.max(0,e.projScale-(r-5e4)):e.projScale})),new s.A("nearFar",((e,t)=>t.camera.nearFar))]),t.code.add(c.H`
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
  `),e}const m=Object.freeze(Object.defineProperty({__proto__:null,build:f},Symbol.toStringTag,{value:"Module"}))},14682:(e,t,r)=>{function i(){const e=new Float32Array(9);return e[0]=1,e[4]=1,e[8]=1,e}function o(e,t,r,i,o,a,n,s,l){const c=new Float32Array(9);return c[0]=e,c[1]=t,c[2]=r,c[3]=i,c[4]=o,c[5]=a,c[6]=n,c[7]=s,c[8]=l,c}r.d(t,{c:()=>i,f:()=>o}),Object.freeze(Object.defineProperty({__proto__:null,create:i,clone:function(e){const t=new Float32Array(9);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t},fromValues:o,createView:function(e,t){return new Float32Array(e,t,9)}},Symbol.toStringTag,{value:"Module"}))},1265:(e,t,r)=>{function i(){return new Float32Array(2)}function o(e,t){const r=new Float32Array(2);return r[0]=e,r[1]=t,r}function a(){return i()}function n(){return o(1,1)}function s(){return o(1,0)}function l(){return o(0,1)}r.d(t,{O:()=>d,Z:()=>c,c:()=>i,f:()=>o});const c=a(),d=n(),u=s(),h=l();Object.freeze(Object.defineProperty({__proto__:null,create:i,clone:function(e){const t=new Float32Array(2);return t[0]=e[0],t[1]=e[1],t},fromValues:o,createView:function(e,t){return new Float32Array(e,t,2)},zeros:a,ones:n,unitX:s,unitY:l,ZEROS:c,ONES:d,UNIT_X:u,UNIT_Y:h},Symbol.toStringTag,{value:"Module"}))},20773:(e,t,r)=>{r.d(t,{a:()=>a,b:()=>l,n:()=>s,s:()=>n,t:()=>o});var i=r(72220);function o(e,t,r){if(e.count!==t.count)return void i.c.error("source and destination buffers need to have the same number of elements");const o=e.count,a=r[0],n=r[1],s=r[2],l=r[4],c=r[5],d=r[6],u=r[8],h=r[9],f=r[10],m=r[12],p=r[13],g=r[14],v=e.typedBuffer,_=e.typedBufferStride,x=t.typedBuffer,T=t.typedBufferStride;for(let e=0;e<o;e++){const t=e*_,r=e*T,i=x[r],o=x[r+1],b=x[r+2];v[t]=a*i+l*o+u*b+m,v[t+1]=n*i+c*o+h*b+p,v[t+2]=s*i+d*o+f*b+g}}function a(e,t,r){if(e.count!==t.count)return void i.c.error("source and destination buffers need to have the same number of elements");const o=e.count,a=r[0],n=r[1],s=r[2],l=r[3],c=r[4],d=r[5],u=r[6],h=r[7],f=r[8],m=e.typedBuffer,p=e.typedBufferStride,g=t.typedBuffer,v=t.typedBufferStride;for(let e=0;e<o;e++){const t=e*p,r=e*v,i=g[r],o=g[r+1],_=g[r+2];m[t]=a*i+l*o+u*_,m[t+1]=n*i+c*o+h*_,m[t+2]=s*i+d*o+f*_}}function n(e,t,r){const i=Math.min(e.count,t.count),o=e.typedBuffer,a=e.typedBufferStride,n=t.typedBuffer,s=t.typedBufferStride;for(let e=0;e<i;e++){const t=e*a,i=e*s;o[t]=r*n[i],o[t+1]=r*n[i+1],o[t+2]=r*n[i+2]}}function s(e,t){const r=Math.min(e.count,t.count),i=e.typedBuffer,o=e.typedBufferStride,a=t.typedBuffer,n=t.typedBufferStride;for(let e=0;e<r;e++){const t=e*o,r=e*n,s=a[r],l=a[r+1],c=a[r+2],d=s*s+l*l+c*c;if(d>0){const e=1/Math.sqrt(d);i[t]=e*s,i[t+1]=e*l,i[t+2]=e*c}}}function l(e,t,r){const i=Math.min(e.count,t.count),o=e.typedBuffer,a=e.typedBufferStride,n=t.typedBuffer,s=t.typedBufferStride;for(let e=0;e<i;e++){const t=e*a,i=e*s;o[t]=n[i]>>r,o[t+1]=n[i+1]>>r,o[t+2]=n[i+2]>>r}}Object.freeze(Object.defineProperty({__proto__:null,transformMat4:o,transformMat3:a,scale:n,normalize:s,shiftRight:l},Symbol.toStringTag,{value:"Module"}))},56067:(e,t,r)=>{function i(e,t,r){const i=e.typedBuffer,o=e.typedBufferStride,a=t.typedBuffer,n=t.typedBufferStride,s=r?r.count:t.count;let l=(r&&r.dstIndex?r.dstIndex:0)*o,c=(r&&r.srcIndex?r.srcIndex:0)*n;for(let e=0;e<s;++e)i[l]=a[c],i[l+1]=a[c+1],i[l+2]=a[c+2],l+=o,c+=n}function o(e,t,r,i,o){const a=e.typedBuffer,n=e.typedBufferStride,s=o?.count??e.count;let l=(o?.dstIndex??0)*n;for(let e=0;e<s;++e)a[l]=t,a[l+1]=r,a[l+2]=i,l+=n}r.d(t,{c:()=>i,f:()=>o}),Object.freeze(Object.defineProperty({__proto__:null,copy:i,fill:o},Symbol.toStringTag,{value:"Module"}))},88669:(e,t,r)=>{function i(){return[0,0,0,0]}function o(e,t,r,i){return[e,t,r,i]}function a(e,t){return new Float64Array(e,t,4)}function n(){return o(1,1,1,1)}function s(){return o(1,0,0,0)}function l(){return o(0,1,0,0)}function c(){return o(0,0,1,0)}function d(){return o(0,0,0,1)}r.d(t,{a:()=>a,c:()=>i,f:()=>o});const u=n(),h=s(),f=l(),m=c(),p=d();Object.freeze(Object.defineProperty({__proto__:null,create:i,clone:function(e){return[e[0],e[1],e[2],e[3]]},fromValues:o,fromArray:function(e){const t=[0,0,0,0],r=Math.min(4,e.length);for(let i=0;i<r;++i)t[i]=e[i];return t},createView:a,zeros:function(){return[0,0,0,0]},ones:n,unitX:s,unitY:l,unitZ:c,unitW:d,ZEROS:[0,0,0,0],ONES:u,UNIT_X:h,UNIT_Y:f,UNIT_Z:m,UNIT_W:p},Symbol.toStringTag,{value:"Module"}))},32243:(e,t,r)=>{function i(e){return e=e||globalThis.location.hostname,c.some((t=>null!=e?.match(t)))}function o(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(a)||null!=t.match(s)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(n)||null!=t.match(l)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}r.d(t,{XO:()=>i,pJ:()=>o});const a=/^devext.arcgis.com$/,n=/^qaext.arcgis.com$/,s=/^[\w-]*\.mapsdevext.arcgis.com$/,l=/^[\w-]*\.mapsqa.arcgis.com$/,c=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,a,n,/^jsapps.esri.com$/,s,l]},72220:(e,t,r)=>{r.d(t,{c:()=>i});const i=r(92604).Z.getLogger("esri.views.3d.support.buffer.math")},16996:(e,t,r)=>{r.d(t,{Ue:()=>l,nF:()=>d,zk:()=>c});var i=r(22021),o=r(22807),a=r(17896),n=r(65617),s=r(12981);function l(e){return e?{origin:(0,n.a)(e.origin),vector:(0,n.a)(e.vector)}:{origin:(0,n.c)(),vector:(0,n.c)()}}function c(e,t,r=l()){return(0,a.c)(r.origin,e),(0,a.b)(r.vector,t,e),r}function d(e,t,r){return function(e,t,r,o,n){const{vector:l,origin:c}=e,d=(0,a.b)(s.WM.get(),t,c),u=(0,a.e)(l,d)/(0,a.p)(l);return(0,a.g)(n,l,(0,i.uZ)(u,0,1)),(0,a.a)(n,n,e.origin)}(e,t,0,0,r)}(0,n.c)(),(0,n.c)(),new o.x((()=>l()))},99381:(e,t,r)=>{r.d(t,{t:()=>o});var i=r(3172);async function o(e,t){const{data:r}=await(0,i.default)(e,{responseType:"image",...t});return r}},17275:(e,t,r)=>{r.r(t),r.d(t,{fetch:()=>sr,gltfToEngineResources:()=>cr,parseUrl:()=>lr});var i=r(32243),o=r(70586),a=r(21787),n=r(46521),s=r(52138),l=r(13598),c=r(17896),d=r(65617),u=r(60437),h=r(56481),f=r(20773),m=r(11077),p=r(8323),g=r(40270),v=r(88246),_=r(91911),x=r(14682),T=r(1265);function b(e){if((0,o.Wi)(e))return null;const t=(0,o.pC)(e.offset)?e.offset:T.Z,r=(0,o.pC)(e.rotation)?e.rotation:0,i=(0,o.pC)(e.scale)?e.scale:T.O,n=(0,x.f)(1,0,0,0,1,0,t[0],t[1],1),s=(0,x.f)(Math.cos(r),-Math.sin(r),0,Math.sin(r),Math.cos(r),0,0,0,1),l=(0,x.f)(i[0],0,0,0,i[1],0,0,0,1),c=(0,x.c)();return(0,a.m)(c,s,l),(0,a.m)(c,n,c),c}class A{constructor(e,t,r,i,o){this.name=e,this.stageResources=t,this.lodThreshold=r,this.pivotOffset=i,this.numberOfVertices=o}}var E=r(3172),S=r(66643),w=r(43090),C=r(20102),y=r(92604),R=r(95330),M=r(23670),O=r(99381),N=r(47026),P=r(44553),I=r(11726);class L{constructor(e,t,r,i){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.indices=r,this.position=i,this.center=(0,d.c)(),this._children=void 0,(0,I.hu)(e.length>=1),(0,I.hu)(r.length%this._numIndexPerPrimitive==0),(0,I.hu)(r.length>=e.length*this._numIndexPerPrimitive),(0,I.hu)(3===i.size||4===i.size);const{data:o,size:a}=i,n=e.length;let s=a*r[this._numIndexPerPrimitive*e[0]];D.clear(),D.push(s),this.bbMin=(0,d.f)(o[s],o[s+1],o[s+2]),this.bbMax=(0,d.a)(this.bbMin);for(let t=0;t<n;++t){const i=this._numIndexPerPrimitive*e[t];for(let e=0;e<this._numIndexPerPrimitive;++e){s=a*r[i+e],D.push(s);let t=o[s];this.bbMin[0]=Math.min(t,this.bbMin[0]),this.bbMax[0]=Math.max(t,this.bbMax[0]),t=o[s+1],this.bbMin[1]=Math.min(t,this.bbMin[1]),this.bbMax[1]=Math.max(t,this.bbMax[1]),t=o[s+2],this.bbMin[2]=Math.min(t,this.bbMin[2]),this.bbMax[2]=Math.max(t,this.bbMax[2])}}(0,c.h)(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let l=this.radius*this.radius;for(let e=0;e<D.length;++e){s=D.getItemAt(e);const t=o[s]-this.center[0],r=o[s+1]-this.center[1],i=o[s+2]-this.center[2],a=t*t+r*r+i*i;if(a<=l)continue;const n=Math.sqrt(a),c=.5*(n-this.radius);this.radius=this.radius+c,l=this.radius*this.radius;const d=c/n;this.center[0]+=t*d,this.center[1]+=r*d,this.center[2]+=i*d}D.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if((0,c.d)(this.bbMin,this.bbMax)>1){const e=(0,c.h)((0,d.c)(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,r=new Uint8Array(t),i=new Array(8);for(let e=0;e<8;++e)i[e]=0;const{data:o,size:a}=this.position;for(let n=0;n<t;++n){let t=0;const s=this._numIndexPerPrimitive*this.primitiveIndices[n];let l=a*this.indices[s],c=o[l],d=o[l+1],u=o[l+2];for(let e=1;e<this._numIndexPerPrimitive;++e){l=a*this.indices[s+e];const t=o[l],r=o[l+1],i=o[l+2];t<c&&(c=t),r<d&&(d=r),i<u&&(u=i)}c<e[0]&&(t|=1),d<e[1]&&(t|=2),u<e[2]&&(t|=4),r[n]=t,++i[t]}let n=0;for(let e=0;e<8;++e)i[e]>0&&++n;if(n<2)return;const s=new Array(8);for(let e=0;e<8;++e)s[e]=i[e]>0?new Uint32Array(i[e]):void 0;for(let e=0;e<8;++e)i[e]=0;for(let e=0;e<t;++e){const t=r[e];s[t][i[t]++]=this.primitiveIndices[e]}this._children=new Array(8);for(let e=0;e<8;++e)void 0!==s[e]&&(this._children[e]=new L(s[e],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){D.prune()}}const D=new P.Z({deallocator:null});var F=r(17662),H=r(4726),B=r(22807),U=r(16996);function z(e,t,r){return(0,c.b)(V,t,e),(0,c.b)(G,r,e),(0,c.l)((0,c.f)(V,V,G))/2}r(12981),new B.x(U.Ue),new B.x((()=>{return e?{p0:(0,d.a)(e.p0),p1:(0,d.a)(e.p1),p2:(0,d.a)(e.p2)}:{p0:(0,d.c)(),p1:(0,d.c)(),p2:(0,d.c)()};var e}));const V=(0,d.c)(),G=(0,d.c)(),W=(0,d.c)(),k=(0,d.c)(),$=(0,d.c)(),q=(0,d.c)();var j=r(54388),X=r(35065);class J extends F.c{constructor(e,t=[],r=N.MX.Triangle,i=null,o=-1){super(),this._primitiveType=r,this.objectAndLayerIdColor=i,this.edgeIndicesLength=o,this.type=H.U.Geometry,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[t,r]of e)r&&this._vertexAttributes.set(t,{...r});if(null==t||0===t.length){const e=function(e){const t=e.values().next().value;return null==t?0:t.data.length/t.size}(this._vertexAttributes),t=(0,j.p)(e);this.edgeIndicesLength=this.edgeIndicesLength<0?e:this.edgeIndicesLength;for(const e of this._vertexAttributes.keys())this._indices.set(e,t)}else for(const[e,r]of t)r&&(this._indices.set(e,(0,j.mi)(r)),e===X.T.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(e).length:this.edgeIndicesLength))}cloneShallow(){const e=new J([],void 0,this._primitiveType,this.objectAndLayerIdColor,void 0),{_vertexAttributes:t,_indices:r}=e;return this._vertexAttributes.forEach(((e,r)=>t.set(r,e))),this._indices.forEach(((e,t)=>r.set(t,e))),e.screenToWorldRatio=this.screenToWorldRatio,e._boundingInfo=this._boundingInfo,e}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){const t=this._vertexAttributes.get(e);return t&&!t.exclusive&&(t.data=Array.from(t.data),t.exclusive=!0),t}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return(0,o.Wi)(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return this.primitiveType===N.MX.Triangle?this._computeAttachmentOriginTriangles(e):this._computeAttachmentOriginPoints(e)}_computeAttachmentOriginTriangles(e){const t=this.indices.get(X.T.POSITION);return function(e,t,r){if(!e||!t)return!1;const{size:i,data:o}=e;(0,c.s)(r,0,0,0),(0,c.s)(q,0,0,0);let a=0,n=0;for(let e=0;e<t.length-2;e+=3){const s=t[e+0]*i,l=t[e+1]*i,d=t[e+2]*i;(0,c.s)(W,o[s+0],o[s+1],o[s+2]),(0,c.s)(k,o[l+0],o[l+1],o[l+2]),(0,c.s)($,o[d+0],o[d+1],o[d+2]);const u=z(W,k,$);u?((0,c.a)(W,W,k),(0,c.a)(W,W,$),(0,c.g)(W,W,1/3*u),(0,c.a)(r,r,W),a+=u):((0,c.a)(q,q,W),(0,c.a)(q,q,k),(0,c.a)(q,q,$),n+=3)}return!(0===n&&0===a||(0!==a?((0,c.g)(r,r,1/a),0):0===n||((0,c.g)(r,q,1/n),0)))}(this.vertexAttributes.get(X.T.POSITION),t,e)}_computeAttachmentOriginPoints(e){const t=this.indices.get(X.T.POSITION);return function(e,t,r){if(!e||!t)return!1;const{size:i,data:o}=e;(0,c.s)(r,0,0,0);let a=-1,n=0;for(let e=0;e<t.length;e++){const s=t[e]*i;a!==s&&(r[0]+=o[s+0],r[1]+=o[s+1],r[2]+=o[s+2],n++),a=s}return n>1&&(0,c.g)(r,r,1/n),n>0}(this.vertexAttributes.get(X.T.POSITION),t,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get(X.T.POSITION);if(!e||0===e.length)return null;const t=this.primitiveType===N.MX.Triangle?3:1;(0,I.hu)(e.length%t==0,"Indexing error: "+e.length+" not divisible by "+t);const r=(0,j.p)(e.length/t),i=this.vertexAttributes.get(X.T.POSITION);return i?new L(r,t,e,i):null}}var Y=r(74085),K=r(32448),Z=r(22021),Q=r(1533),ee=r(17452),te=r(85958),re=r(88669),ie=r(33929),oe=r(71250),ae=r(74709),ne=r(33680),se=r(98069);class le extends ae.K{constructor(){super(...arguments),this.color=(0,re.f)(1,1,1,1)}}Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:le,build:function(){const e=new ne.kG;return e.include(ie.k),e.fragment.uniforms.add([new se.A("tex",(e=>e.texture)),new oe.N("uColor",(e=>e.color))]),e.fragment.code.add(ae.H`void main() {
vec4 texColor = texture2D(tex, uv);
gl_FragColor = texColor * uColor;
}`),e}},Symbol.toStringTag,{value:"Module"}));var ce=r(99880);let de;var ue;!function(e){e[e.ETC1_RGB=0]="ETC1_RGB",e[e.ETC2_RGBA=1]="ETC2_RGBA",e[e.BC1_RGB=2]="BC1_RGB",e[e.BC3_RGBA=3]="BC3_RGBA",e[e.BC4_R=4]="BC4_R",e[e.BC5_RG=5]="BC5_RG",e[e.BC7_M6_RGB=6]="BC7_M6_RGB",e[e.BC7_M5_RGBA=7]="BC7_M5_RGBA",e[e.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",e[e.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",e[e.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",e[e.ATC_RGB=11]="ATC_RGB",e[e.ATC_RGBA=12]="ATC_RGBA",e[e.FXT1_RGB=17]="FXT1_RGB",e[e.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",e[e.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",e[e.ETC2_EAC_R11=20]="ETC2_EAC_R11",e[e.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",e[e.RGBA32=13]="RGBA32",e[e.RGB565=14]="RGB565",e[e.BGR565=15]="BGR565",e[e.RGBA4444=16]="RGBA4444"}(ue||(ue={}));var he=r(35371),fe=r(75656),me=r(45762);let pe=null,ge=null;async function ve(){return(0,o.Wi)(ge)&&(ge=function(){if((0,o.Wi)(de)){const e=e=>(0,ce.V)(`esri/libs/basisu/${e}`);de=r.e(1421).then(r.bind(r,21421)).then((e=>e.b)).then((({default:t})=>t({locateFile:e}).then((e=>(e.initializeBasis(),delete e.then,e)))))}return de}(),pe=await ge),ge}function _e(e,t,r,i,o){const a=(0,me.RG)(t?he.q_.COMPRESSED_RGBA8_ETC2_EAC:he.q_.COMPRESSED_RGB8_ETC2),n=o&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(r*i*a*n)}function xe(e){return e.getNumImages()>=1&&!e.isUASTC()}function Te(e){return e.getFaces()>=1&&e.isETC1S()}function be(e,t,r,i,o,a,n,s){const{compressedTextureETC:l,compressedTextureS3TC:c}=e.capabilities,[d,u]=l?i?[ue.ETC2_RGBA,he.q_.COMPRESSED_RGBA8_ETC2_EAC]:[ue.ETC1_RGB,he.q_.COMPRESSED_RGB8_ETC2]:c?i?[ue.BC3_RGBA,he.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[ue.BC1_RGB,he.q_.COMPRESSED_RGB_S3TC_DXT1_EXT]:[ue.RGBA32,he.VI.RGBA],h=t.hasMipmap?r:Math.min(1,r),f=[];for(let e=0;e<h;e++)f.push(new Uint8Array(n(e,d))),s(e,d,f[e]);const m=f.length>1,p=m?he.cw.LINEAR_MIPMAP_LINEAR:he.cw.LINEAR,g={...t,samplingMode:p,hasMipmap:m,internalFormat:u,width:o,height:a};return new fe.x(e,g,{type:"compressed",levels:f})}const Ae=y.Z.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function Ee(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const Se=Ee("DXT1"),we=Ee("DXT3"),Ce=Ee("DXT5");var ye,Re,Me=r(89917),Oe=r(33696),Ne=r(46314);class Pe extends F.c{constructor(e,t){super(),this._data=e,this.type=H.U.Texture,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new K.Z,this._passParameters=new le,this.params=t||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:he.e8.REPEAT,t:he.e8.REPEAT},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||N.CE.STRETCH,this.estimatedTexMemRequired=Pe._estimateTexMemRequired(this._data,this.params),this._startPreload()}_startPreload(){const e=this._data;(0,o.Wi)(e)||(e instanceof HTMLVideoElement?this._startPreloadVideoElement(e):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!((0,ee.jc)(e.src)||"auto"===e.preload&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const t=!e.paused;if(e.src=e.src,t&&e.autoplay){const t=()=>{e.removeEventListener("canplay",t),e.play()};e.addEventListener("canplay",t)}}}_startPreloadImageElement(e){(0,ee.HK)(e.src)||(0,ee.jc)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static _getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static _estimateTexMemRequired(e,t){if((0,o.Wi)(e))return 0;if((0,Q.eP)(e)||(0,Q.lq)(e))return t.encoding===Pe.KTX2_ENCODING?function(e,t){if((0,o.Wi)(pe))return e.byteLength;const r=new pe.KTX2File(new Uint8Array(e)),i=Te(r)?_e(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),i}(e,t.mipmap):t.encoding===Pe.BASIS_ENCODING?function(e,t){if((0,o.Wi)(pe))return e.byteLength;const r=new pe.BasisFile(new Uint8Array(e)),i=xe(r)?_e(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),i}(e,t.mipmap):e.byteLength;const{width:r,height:i}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?Pe._getDataDimensions(e):t;return(t.mipmap?4/3:1)*r*i*(t.components||4)||0}dispose(){this._data=void 0}get width(){return this.params.width}get height(){return this.params.height}_createDescriptor(e){return{target:he.No.TEXTURE_2D,pixelFormat:he.VI.RGBA,dataType:he.Br.UNSIGNED_BYTE,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?he.cw.LINEAR_MIPMAP_LINEAR:he.cw.LINEAR,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:this.params.maxAnisotropy??(this.params.mipmap?e.parameters.maxMaxAnisotropy:1)}}get glTexture(){return this._glTexture}load(e,t){if((0,o.pC)(this._glTexture))return this._glTexture;if((0,o.pC)(this._loadingPromise))return this._loadingPromise;const r=this._data;return(0,o.Wi)(r)?(this._glTexture=new fe.x(e,this._createDescriptor(e),null),this._glTexture):"string"==typeof r?this._loadFromURL(e,t,r):r instanceof Image?this._loadFromImageElement(e,t,r):r instanceof HTMLVideoElement?this._loadFromVideoElement(e,t,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this._loadFromImage(e,r,t):((0,Q.eP)(r)||(0,Q.lq)(r))&&this.params.encoding===Pe.DDS_ENCODING?(this._data=void 0,this._loadFromDDSData(e,r)):((0,Q.eP)(r)||(0,Q.lq)(r))&&this.params.encoding===Pe.KTX2_ENCODING?(this._data=void 0,this._loadFromKTX2(e,r)):((0,Q.eP)(r)||(0,Q.lq)(r))&&this.params.encoding===Pe.BASIS_ENCODING?(this._data=void 0,this._loadFromBasis(e,r)):(0,Q.lq)(r)?this._loadFromPixelData(e,r):(0,Q.eP)(r)?this._loadFromPixelData(e,new Uint8Array(r)):null}get requiresFrameUpdates(){return this._data instanceof HTMLVideoElement}frameUpdate(e,t,r){if(!(this._data instanceof HTMLVideoElement)||(0,o.Wi)(this._glTexture))return r;if(this._data.readyState<ye.HAVE_CURRENT_DATA||r===this._data.currentTime)return r;if((0,o.pC)(this._powerOfTwoStretchInfo)){const{framebuffer:r,vao:i,sourceTexture:o}=this._powerOfTwoStretchInfo;o.setData(this._data),this._drawStretchedTexture(e,t,r,i,o,this._glTexture)}else{const{videoWidth:e,videoHeight:t}=this._data,{width:r,height:i}=this._glTexture.descriptor;e!==r||t!==i?this._glTexture.updateData(0,0,0,Math.min(e,r),Math.min(t,i),this._data):this._glTexture.setData(this._data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.params.updateCallback&&this.params.updateCallback(),this._data.currentTime}_loadFromDDSData(e,t){return this._glTexture=function(e,t,r){const{textureData:i,internalFormat:a,width:n,height:s}=(0,o.s3)(function(e,t){const r=new Int32Array(e,0,31);if(542327876!==r[0])return Ae.error("Invalid magic number in DDS header"),null;if(!(4&r[20]))return Ae.error("Unsupported format, must contain a FourCC code"),null;const i=r[21];let o,a;switch(i){case Se:o=8,a=he.q_.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case we:o=16,a=he.q_.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case Ce:o=16,a=he.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return Ae.error("Unsupported FourCC code:",function(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}(i)),null}let n=1,s=r[4],l=r[3];0==(3&s)&&0==(3&l)||(Ae.warn("Rounding up compressed texture size to nearest multiple of 4."),s=s+3&-4,l=l+3&-4);const c=s,d=l;let u,h;131072&r[2]&&!1!==t&&(n=Math.max(1,r[7])),1===n||(0,Z.wt)(s)&&(0,Z.wt)(l)||(Ae.warn("Ignoring mipmaps of non power of two sized compressed texture."),n=1);let f=r[1]+4;const m=[];for(let t=0;t<n;++t)h=(s+3>>2)*(l+3>>2)*o,u=new Uint8Array(e,f,h),m.push(u),f+=h,s=Math.max(1,s>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:m},internalFormat:a,width:c,height:d}}(r,t.hasMipmap??!1));return t.samplingMode=i.levels.length>1?he.cw.LINEAR_MIPMAP_LINEAR:he.cw.LINEAR,t.hasMipmap=i.levels.length>1,t.internalFormat=a,t.width=n,t.height=s,new fe.x(e,t,i)}(e,this._createDescriptor(e),t),this._glTexture}_loadFromKTX2(e,t){return this._loadAsync((()=>async function(e,t,r){(0,o.Wi)(pe)&&(pe=await ve());const i=new pe.KTX2File(new Uint8Array(r));if(!Te(i))return null;i.startTranscoding();const a=be(e,t,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),((e,t)=>i.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,r)=>i.transcodeImage(r,e,0,0,t,0,-1,-1)));return i.close(),i.delete(),a}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromBasis(e,t){return this._loadAsync((()=>async function(e,t,r){(0,o.Wi)(pe)&&(pe=await ve());const i=new pe.BasisFile(new Uint8Array(r));if(!xe(i))return null;i.startTranscoding();const a=be(e,t,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),((e,t)=>i.getImageTranscodedSizeInBytes(0,e,t)),((e,t,r)=>i.transcodeImage(r,0,e,t,0,0)));return i.close(),i.delete(),a}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromPixelData(e,t){(0,I.hu)(this.params.width>0&&this.params.height>0);const r=this._createDescriptor(e);return r.pixelFormat=1===this.params.components?he.VI.LUMINANCE:3===this.params.components?he.VI.RGB:he.VI.RGBA,r.width=this.params.width,r.height=this.params.height,this._glTexture=new fe.x(e,r,t),this._glTexture}_loadFromURL(e,t,r){return this._loadAsync((async i=>{const o=await(0,O.t)(r,{signal:i});return(0,R.k_)(i),this._loadFromImage(e,o,t)}))}_loadFromImageElement(e,t,r){return r.complete?this._loadFromImage(e,r,t):this._loadAsync((async i=>{const o=await(0,te.fY)(r,r.src,!1,i);return(0,R.k_)(i),this._loadFromImage(e,o,t)}))}_loadFromVideoElement(e,t,r){return r.readyState>=ye.HAVE_CURRENT_DATA?this._loadFromImage(e,r,t):this._loadFromVideoElementAsync(e,t,r)}_loadFromVideoElementAsync(e,t,r){return this._loadAsync((i=>new Promise(((a,n)=>{const s=()=>{r.removeEventListener("loadeddata",l),r.removeEventListener("error",c),(0,o.hw)(d)},l=()=>{r.readyState>=ye.HAVE_CURRENT_DATA&&(s(),a(this._loadFromImage(e,r,t)))},c=e=>{s(),n(e||new C.Z("Failed to load video"))};r.addEventListener("loadeddata",l),r.addEventListener("error",c);const d=(0,R.fu)(i,(()=>c((0,R.zE)())))}))))}_loadFromImage(e,t,r){const i=Pe._getDataDimensions(t);this.params.width=i.width,this.params.height=i.height;const o=this._createDescriptor(e);return o.pixelFormat=3===this.params.components?he.VI.RGB:he.VI.RGBA,!this._requiresPowerOfTwo(e,o)||(0,Z.wt)(i.width)&&(0,Z.wt)(i.height)?(o.width=i.width,o.height=i.height,this._glTexture=new fe.x(e,o,t),this._glTexture):(this._glTexture=this._makePowerOfTwoTexture(e,t,i,o,r),this._glTexture)}_loadAsync(e){const t=new AbortController;this._loadingController=t;const r=e(t.signal);this._loadingPromise=r;const i=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null)};return r.then(i,i),r}_requiresPowerOfTwo(e,t){const r=he.e8.CLAMP_TO_EDGE,i="number"==typeof t.wrapMode?t.wrapMode===r:t.wrapMode.s===r&&t.wrapMode.t===r;return!(0,Ne.Z)(e.gl)&&(t.hasMipmap||!i)}_makePowerOfTwoTexture(e,t,r,i,o){const{width:a,height:n}=r,s=(0,Z.Sf)(a),l=(0,Z.Sf)(n);let c;switch(i.width=s,i.height=l,this.params.powerOfTwoResizeMode){case N.CE.PAD:i.textureCoordinateScaleFactor=[a/s,n/l],c=new fe.x(e,i),c.updateData(0,0,0,a,n,t);break;case N.CE.STRETCH:case null:case void 0:c=this._stretchToPowerOfTwo(e,t,i,o());break;default:(0,Y.Bg)(this.params.powerOfTwoResizeMode)}return i.hasMipmap&&c.generateMipmap(),c}_stretchToPowerOfTwo(e,t,r,i){const o=new fe.x(e,r),a=new Oe.X(e,{colorTarget:he.Lm.TEXTURE,depthStencilTarget:he.OU.NONE},o),n=new fe.x(e,{target:he.No.TEXTURE_2D,pixelFormat:r.pixelFormat,dataType:he.Br.UNSIGNED_BYTE,wrapMode:he.e8.CLAMP_TO_EDGE,samplingMode:he.cw.LINEAR,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},t),s=(0,Me.ow)(e),l=e.getBoundFramebufferObject();return this._drawStretchedTexture(e,i,a,s,n,o),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:s,sourceTexture:n,framebuffer:a}:(s.dispose(!0),n.dispose(),a.detachColorTexture(),a.dispose()),e.bindFramebuffer(l),o}_drawStretchedTexture(e,t,r,i,o,a){this._passParameters.texture=o,e.bindFramebuffer(r);const n=e.getViewport();e.setViewport(0,0,a.descriptor.width,a.descriptor.height),e.bindTechnique(t,this._passParameters,null),e.bindVAO(i),e.drawArrays(he.MX.TRIANGLE_STRIP,0,(0,me._V)(i,"geometry")),e.bindFramebuffer(null),e.setViewport(n.x,n.y,n.width,n.height),this._passParameters.texture=null}unload(){if((0,o.pC)(this._powerOfTwoStretchInfo)){const{framebuffer:e,vao:t,sourceTexture:r}=this._powerOfTwoStretchInfo;t.dispose(!0),r.dispose(),e.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if((0,o.pC)(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),(0,o.pC)(this._loadingController)){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}Pe.DDS_ENCODING="image/vnd-ms.dds",Pe.KTX2_ENCODING="image/ktx2",Pe.BASIS_ENCODING="image/x.basis",(Re=ye||(ye={}))[Re.HAVE_NOTHING=0]="HAVE_NOTHING",Re[Re.HAVE_METADATA=1]="HAVE_METADATA",Re[Re.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",Re[Re.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",Re[Re.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA";var Ie=r(80442),Le=r(64822),De=r(65576),Fe=r(55039),He=r(64267),Be=r(19419),Ue=r(85504),ze=r(60537),Ve=r(82791),Ge=r(93144),We=r(27097);const ke=(0,We.wK)(he.zi.SRC_ALPHA,he.zi.ONE,he.zi.ONE_MINUS_SRC_ALPHA,he.zi.ONE_MINUS_SRC_ALPHA),$e=(0,We.if)(he.zi.ONE,he.zi.ONE),qe=(0,We.if)(he.zi.ZERO,he.zi.ONE_MINUS_SRC_ALPHA);function je(e){return e===Ge.A.FrontFace?null:e===Ge.A.Alpha?qe:$e}const Xe={factor:-1,units:-2};function Je(e,t=he.wb.LESS){return e===Ge.A.NONE||e===Ge.A.FrontFace?t:he.wb.LEQUAL}var Ye,Ke;(Ke=Ye||(Ye={}))[Ke.INTEGRATED_MESH=0]="INTEGRATED_MESH",Ke[Ke.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",Ke[Ke.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",Ke[Ke.TRANSPARENT_MATERIAL=3]="TRANSPARENT_MATERIAL",Ke[Ke.TRANSPARENT_TERRAIN=4]="TRANSPARENT_TERRAIN",Ke[Ke.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=5]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",Ke[Ke.OCCLUDED_TERRAIN=6]="OCCLUDED_TERRAIN",Ke[Ke.OCCLUDER_MATERIAL=7]="OCCLUDER_MATERIAL",Ke[Ke.TRANSPARENT_OCCLUDER_MATERIAL=8]="TRANSPARENT_OCCLUDER_MATERIAL",Ke[Ke.OCCLUSION_PIXELS=9]="OCCLUSION_PIXELS",Ke[Ke.POSTPROCESSING_ENVIRONMENT_OPAQUE=10]="POSTPROCESSING_ENVIRONMENT_OPAQUE",Ke[Ke.POSTPROCESSING_ENVIRONMENT_TRANSPARENT=11]="POSTPROCESSING_ENVIRONMENT_TRANSPARENT",Ke[Ke.LASERLINES=12]="LASERLINES",Ke[Ke.LASERLINES_CONTRAST_CONTROL=13]="LASERLINES_CONTRAST_CONTROL",Ke[Ke.HUD_MATERIAL=14]="HUD_MATERIAL",Ke[Ke.LABEL_MATERIAL=15]="LABEL_MATERIAL",Ke[Ke.LINE_CALLOUTS=16]="LINE_CALLOUTS",Ke[Ke.LINE_CALLOUTS_HUD_DEPTH=17]="LINE_CALLOUTS_HUD_DEPTH",Ke[Ke.DRAPED_MATERIAL=18]="DRAPED_MATERIAL",Ke[Ke.DRAPED_WATER=19]="DRAPED_WATER",Ke[Ke.VOXEL=20]="VOXEL",Ke[Ke.MAX_SLOTS=21]="MAX_SLOTS";var Ze=r(51305),Qe=r(94961),et=r(72119),tt=r(29268);const rt=(0,d.c)(),it=(0,d.c)(),ot=(0,d.c)(),at=new class{constructor(e=0){this.offset=e,this.sphere=(0,tt.c)(),this.tmpVertex=(0,d.c)()}applyToVertex(e,t,r){const i=this.objectTransform.transform;let o=i[0]*e+i[4]*t+i[8]*r+i[12],a=i[1]*e+i[5]*t+i[9]*r+i[13],n=i[2]*e+i[6]*t+i[10]*r+i[14];const s=this.offset/Math.sqrt(o*o+a*a+n*n);o+=o*s,a+=a*s,n+=n*s;const l=this.objectTransform.inverse;return this.tmpVertex[0]=l[0]*o+l[4]*a+l[8]*n+l[12],this.tmpVertex[1]=l[1]*o+l[5]*a+l[9]*n+l[13],this.tmpVertex[2]=l[2]*o+l[6]*a+l[10]*n+l[14],this.tmpVertex}applyToMinMax(e,t){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const i=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*i,t[1]+=t[1]*i,t[2]+=t[2]*i}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/t;return this.sphere[0]=e[0]+e[0]*r,this.sphere[1]=e[1]+e[1]*r,this.sphere[2]=e[2]+e[2]*r,this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}};new class{constructor(e=0){this.componentLocalOriginLength=0,this._tmpVertex=(0,d.c)(),this._mbs=(0,tt.c)(),this._obb={center:(0,d.c)(),halfSize:(0,et.c)(),quaternion:null},this._totalOffset=0,this._offset=0,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}applyToVertex(e,t,r){const i=e,o=t,a=r+this.componentLocalOriginLength,n=this._totalOffset/Math.sqrt(i*i+o*o+a*a);return this._tmpVertex[0]=e+i*n,this._tmpVertex[1]=t+o*n,this._tmpVertex[2]=r+a*n,this._tmpVertex}applyToAabb(e){const t=e[0],r=e[1],i=e[2]+this.componentLocalOriginLength,o=e[3],a=e[4],n=e[5]+this.componentLocalOriginLength,s=t*o<0?0:Math.min(Math.abs(t),Math.abs(o)),l=r*a<0?0:Math.min(Math.abs(r),Math.abs(a)),c=i*n<0?0:Math.min(Math.abs(i),Math.abs(n)),d=Math.sqrt(s*s+l*l+c*c);if(d<this._totalOffset)return e[0]-=t<0?this._totalOffset:0,e[1]-=r<0?this._totalOffset:0,e[2]-=i<0?this._totalOffset:0,e[3]+=o>0?this._totalOffset:0,e[4]+=a>0?this._totalOffset:0,e[5]+=n>0?this._totalOffset:0,e;const u=Math.max(Math.abs(t),Math.abs(o)),h=Math.max(Math.abs(r),Math.abs(a)),f=Math.max(Math.abs(i),Math.abs(n)),m=Math.sqrt(u*u+h*h+f*f),p=this._totalOffset/m,g=this._totalOffset/d;return e[0]+=t*(t>0?p:g),e[1]+=r*(r>0?p:g),e[2]+=i*(i>0?p:g),e[3]+=o*(o<0?p:g),e[4]+=a*(a<0?p:g),e[5]+=n*(n<0?p:g),e}applyToMbs(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this._totalOffset/t;return this._mbs[0]=e[0]+e[0]*r,this._mbs[1]=e[1]+e[1]*r,this._mbs[2]=e[2]+e[2]*r,this._mbs[3]=e[3]+e[3]*this._totalOffset/t,this._mbs}applyToObb(e){const t=e.center,r=this._totalOffset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);this._obb.center[0]=t[0]+t[0]*r,this._obb.center[1]=t[1]+t[1]*r,this._obb.center[2]=t[2]+t[2]*r,(0,c.q)(this._obb.halfSize,e.halfSize,e.quaternion),(0,c.a)(this._obb.halfSize,this._obb.halfSize,e.center);const i=this._totalOffset/Math.sqrt(this._obb.halfSize[0]*this._obb.halfSize[0]+this._obb.halfSize[1]*this._obb.halfSize[1]+this._obb.halfSize[2]*this._obb.halfSize[2]);return this._obb.halfSize[0]+=this._obb.halfSize[0]*i,this._obb.halfSize[1]+=this._obb.halfSize[1]*i,this._obb.halfSize[2]+=this._obb.halfSize[2]*i,(0,c.b)(this._obb.halfSize,this._obb.halfSize,e.center),(0,Ze.c)(nt,e.quaternion),(0,c.q)(this._obb.halfSize,this._obb.halfSize,nt),this._obb.halfSize[0]*=this._obb.halfSize[0]<0?-1:1,this._obb.halfSize[1]*=this._obb.halfSize[1]<0?-1:1,this._obb.halfSize[2]*=this._obb.halfSize[2]<0?-1:1,this._obb.quaternion=e.quaternion,this._obb}},new class{constructor(e=0){this.offset=e,this.tmpVertex=(0,d.c)()}applyToVertex(e,t,r){const i=e+this.localOrigin[0],o=t+this.localOrigin[1],a=r+this.localOrigin[2],n=this.offset/Math.sqrt(i*i+o*o+a*a);return this.tmpVertex[0]=e+i*n,this.tmpVertex[1]=t+o*n,this.tmpVertex[2]=r+a*n,this.tmpVertex}applyToAabb(e){for(let t=0;t<3;++t)rt[t]=e[0+t]+this.localOrigin[t],it[t]=e[3+t]+this.localOrigin[t],ot[t]=rt[t];const t=this.applyToVertex(rt[0],rt[1],rt[2]);for(let r=0;r<3;++r)e[r]=t[r],e[r+3]=t[r];const r=t=>{const r=this.applyToVertex(t[0],t[1],t[2]);for(let t=0;t<3;++t)e[t+0]=Math.min(e[t+0],r[t]),e[t+3]=Math.max(e[t+3],r[t])};for(let e=1;e<8;++e){for(let t=0;t<3;++t)ot[t]=0==(e&1<<t)?rt[t]:it[t];r(ot)}let i=0;for(let e=0;e<3;++e)rt[e]*it[e]<0&&(i|=1<<e);if(0!==i&&7!==i)for(let e=0;e<8;++e)if(0==(i&e)){for(let t=0;t<3;++t)i[t]?ot[t]=0:ot[t]=0!=(e&1<<t)?rt[t]:it[t];r(ot)}for(let t=0;t<3;++t)e[t+0]-=this.localOrigin[t],e[t+3]-=this.localOrigin[t];return e}};const nt=(0,Qe.a)();function st(e,t,r,i){const o=r.typedBuffer,a=r.typedBufferStride,n=e.length;i*=a;for(let r=0;r<n;++r){const n=2*e[r];o[i]=t[n],o[i+1]=t[n+1],i+=a}}function lt(e,t,r,i,o){const a=r.typedBuffer,n=r.typedBufferStride,s=e.length;if(i*=n,null==o||1===o)for(let r=0;r<s;++r){const o=3*e[r];a[i]=t[o],a[i+1]=t[o+1],a[i+2]=t[o+2],i+=n}else for(let r=0;r<s;++r){const s=3*e[r];for(let e=0;e<o;++e)a[i]=t[s],a[i+1]=t[s+1],a[i+2]=t[s+2],i+=n}}function ct(e,t,r,i,o,a=1){if(!r)return void lt(e,t,i,o,a);const n=i.typedBuffer,s=i.typedBufferStride,l=e.length,c=r[0],d=r[1],u=r[2],h=r[4],f=r[5],m=r[6],p=r[8],g=r[9],v=r[10],_=r[12],x=r[13],T=r[14];o*=s;let b=0,A=0,E=0;const S=mt(r)?e=>{b=t[e]+_,A=t[e+1]+x,E=t[e+2]+T}:e=>{const r=t[e],i=t[e+1],o=t[e+2];b=c*r+h*i+p*o+_,A=d*r+f*i+g*o+x,E=u*r+m*i+v*o+T};if(1===a)for(let t=0;t<l;++t)S(3*e[t]),n[o]=b,n[o+1]=A,n[o+2]=E,o+=s;else for(let t=0;t<l;++t){S(3*e[t]);for(let e=0;e<a;++e)n[o]=b,n[o+1]=A,n[o+2]=E,o+=s}}function dt(e,t,r,i,o,a=1){if(!r)return void lt(e,t,i,o,a);const n=r,l=i.typedBuffer,c=i.typedBufferStride,d=e.length,u=n[0],h=n[1],f=n[2],m=n[4],p=n[5],g=n[6],v=n[8],_=n[9],x=n[10],T=!(0,s.x)(n),b=1e-6,A=1-b;o*=c;let E=0,S=0,w=0;const C=mt(n)?e=>{E=t[e],S=t[e+1],w=t[e+2]}:e=>{const r=t[e],i=t[e+1],o=t[e+2];E=u*r+m*i+v*o,S=h*r+p*i+_*o,w=f*r+g*i+x*o};if(1===a)if(T)for(let t=0;t<d;++t){C(3*e[t]);const r=E*E+S*S+w*w;if(r<A&&r>b){const e=1/Math.sqrt(r);l[o]=E*e,l[o+1]=S*e,l[o+2]=w*e}else l[o]=E,l[o+1]=S,l[o+2]=w;o+=c}else for(let t=0;t<d;++t)C(3*e[t]),l[o]=E,l[o+1]=S,l[o+2]=w,o+=c;else for(let t=0;t<d;++t){if(C(3*e[t]),T){const e=E*E+S*S+w*w;if(e<A&&e>b){const t=1/Math.sqrt(e);E*=t,S*=t,w*=t}}for(let e=0;e<a;++e)l[o]=E,l[o+1]=S,l[o+2]=w,o+=c}}function ut(e,t,r,i,o,a=1){if(!r)return void function(e,t,r,i,o=1){const a=r.typedBuffer,n=r.typedBufferStride,s=e.length;if(i*=n,1===o)for(let r=0;r<s;++r){const o=4*e[r];a[i]=t[o],a[i+1]=t[o+1],a[i+2]=t[o+2],a[i+3]=t[o+3],i+=n}else for(let r=0;r<s;++r){const s=4*e[r];for(let e=0;e<o;++e)a[i]=t[s],a[i+1]=t[s+1],a[i+2]=t[s+2],a[i+3]=t[s+3],i+=n}}(e,t,i,o,a);const n=r,l=i.typedBuffer,c=i.typedBufferStride,d=e.length,u=n[0],h=n[1],f=n[2],m=n[4],p=n[5],g=n[6],v=n[8],_=n[9],x=n[10],T=!(0,s.x)(n),b=1e-6,A=1-b;if(o*=c,1===a)for(let r=0;r<d;++r){const i=4*e[r],a=t[i],n=t[i+1],s=t[i+2],d=t[i+3];let E=u*a+m*n+v*s,S=h*a+p*n+_*s,w=f*a+g*n+x*s;if(T){const e=E*E+S*S+w*w;if(e<A&&e>b){const t=1/Math.sqrt(e);E*=t,S*=t,w*=t}}l[o]=E,l[o+1]=S,l[o+2]=w,l[o+3]=d,o+=c}else for(let r=0;r<d;++r){const i=4*e[r],n=t[i],s=t[i+1],d=t[i+2],E=t[i+3];let S=u*n+m*s+v*d,w=h*n+p*s+_*d,C=f*n+g*s+x*d;if(T){const e=S*S+w*w+C*C;if(e<A&&e>b){const t=1/Math.sqrt(e);S*=t,w*=t,C*=t}}for(let e=0;e<a;++e)l[o]=S,l[o+1]=w,l[o+2]=C,l[o+3]=E,o+=c}}function ht(e,t,r,i,o,a=1){const n=i.typedBuffer,s=i.typedBufferStride,l=e.length;if(o*=s,r!==t.length||4!==r)if(1!==a)if(4!==r)for(let r=0;r<l;++r){const i=3*e[r];for(let e=0;e<a;++e)n[o]=t[i],n[o+1]=t[i+1],n[o+2]=t[i+2],n[o+3]=255,o+=s}else for(let r=0;r<l;++r){const i=4*e[r];for(let e=0;e<a;++e)n[o]=t[i],n[o+1]=t[i+1],n[o+2]=t[i+2],n[o+3]=t[i+3],o+=s}else{if(4===r){for(let r=0;r<l;++r){const i=4*e[r];n[o]=t[i],n[o+1]=t[i+1],n[o+2]=t[i+2],n[o+3]=t[i+3],o+=s}return}for(let r=0;r<l;++r){const i=3*e[r];n[o]=t[i],n[o+1]=t[i+1],n[o+2]=t[i+2],n[o+3]=255,o+=s}}else{n[o]=t[0],n[o+1]=t[1],n[o+2]=t[2],n[o+3]=t[3];const e=new Uint32Array(i.typedBuffer.buffer,i.start),r=s/4,c=e[o/=4];o+=r;const d=l*a;for(let t=1;t<d;++t)e[o]=c,o+=r}}function ft(e,t,r,i,o=1){const a=t.typedBuffer,n=t.typedBufferStride;if(i*=n,1===o)for(let t=0;t<r;++t)a[i]=e[0],a[i+1]=e[1],a[i+2]=e[2],a[i+3]=e[3],i+=n;else for(let t=0;t<r;++t)for(let t=0;t<o;++t)a[i]=e[0],a[i+1]=e[1],a[i+2]=e[2],a[i+3]=e[3],i+=n}function mt(e){return 1===e[0]&&0===e[1]&&0===e[2]&&0===e[4]&&1===e[5]&&0===e[6]&&0===e[8]&&0===e[9]&&1===e[10]}var pt=r(37782),gt=r(135),vt=r(15719),_t=r(96310),xt=r(89243),Tt=r(78869),bt=r(14589),At=r(83475),Et=r(59377);he.wb.LESS,he.wb.ALWAYS;const St={mask:255},wt={function:{func:he.wb.ALWAYS,ref:N.hU.OutlineVisualElementMask,mask:N.hU.OutlineVisualElementMask},operation:{fail:he.xS.KEEP,zFail:he.xS.KEEP,zPass:he.xS.ZERO}},Ct={function:{func:he.wb.ALWAYS,ref:N.hU.OutlineVisualElementMask,mask:N.hU.OutlineVisualElementMask},operation:{fail:he.xS.KEEP,zFail:he.xS.KEEP,zPass:he.xS.REPLACE}};he.wb.EQUAL,N.hU.OutlineVisualElementMask,N.hU.OutlineVisualElementMask,he.xS.KEEP,he.xS.KEEP,he.xS.KEEP,he.wb.NOTEQUAL,N.hU.OutlineVisualElementMask,N.hU.OutlineVisualElementMask,he.xS.KEEP,he.xS.KEEP,he.xS.KEEP;var yt=r(32078),Rt=r(54738);class Mt extends vt.d4{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=(0,d.f)(0,1,.5),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=N.Vr.Back,this.emissiveFactor=(0,d.f)(0,0,0),this.instancedDoublePrecision=!1,this.normals="default",this.receiveSSAO=!0,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=(0,d.f)(.2,.2,.2),this.diffuse=(0,d.f)(.8,.8,.8),this.externalColor=(0,re.f)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,d.c)(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSizeEnabled=!1,this.vvSizeMinSize=[1,1,1],this.vvSizeMaxSize=[100,100,100],this.vvSizeOffset=[0,0,0],this.vvSizeFactor=[1,1,1],this.vvSizeValue=[1,1,1],this.vvColorEnabled=!1,this.vvColorValues=[0,0,0,0,0,0,0,0],this.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],this.vvSymbolAnchor=[0,0,0],this.vvSymbolRotationMatrix=(0,n.c)(),this.vvOpacityEnabled=!1,this.vvOpacityValues=[],this.vvOpacityOpacities=[],this.transparent=!1,this.writeDepth=!0,this.customDepthTest=N.Gv.Less,this.textureAlphaMode=N.JJ.Blend,this.textureAlphaCutoff=_t.F,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=Ve.yD.Occlude}}class Ot extends bt.A{initializeConfiguration(e,t){t.hasWebGL2Context=e.rctx.type===Rt.zO.WEBGL2,t.spherical=e.viewingMode===Le.JY.Global,t.doublePrecisionRequiresObfuscation=(0,xt.I)(e.rctx),t.textureCoordinateType=t.hasColorTexture||t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture||t.hasNormalTexture?gt.N.Default:gt.N.None,t.objectAndLayerIdColorInstanced=t.instanced}initializeProgram(e){return this._initializeProgram(e,Ot.shader)}_initializeProgram(e,t){return new Et.$(e.rctx,t.get().build(this.configuration),At.i)}_convertDepthTestFunction(e){return e===N.Gv.Lequal?he.wb.LEQUAL:he.wb.LESS}_makePipeline(e,t){const r=this.configuration,i=e===Ge.A.NONE,o=e===Ge.A.FrontFace;return(0,We.sm)({blending:r.output!==Fe.H.Color&&r.output!==Fe.H.Alpha||!r.transparent?null:i?ke:je(e),culling:Nt(r)&&(0,We.zp)(r.cullFace),depthTest:{func:Je(e,this._convertDepthTestFunction(r.customDepthTest))},depthWrite:i||o?r.writeDepth&&We.LZ:null,colorWrite:We.BK,stencilWrite:r.hasOccludees?St:null,stencilTest:r.hasOccludees?t?Ct:wt:null,polygonOffset:i||o?null:(a=r.enableOffset,a?Xe:null)});var a}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}function Nt(e){return e.cullFace!==N.Vr.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}Ot.shader=new Tt.J(yt.D,(()=>r.e(9291).then(r.bind(r,79291))));var Pt=r(43697),It=r(51354),Lt=r(67498);class Dt extends It.m{constructor(){super(...arguments),this.hasWebGL2Context=!1}}(0,Pt._)([(0,It.o)({constValue:!0})],Dt.prototype,"hasSliceHighlight",void 0),(0,Pt._)([(0,It.o)({constValue:!1})],Dt.prototype,"hasSliceInVertexProgram",void 0),(0,Pt._)([(0,It.o)({constValue:!1})],Dt.prototype,"instancedDoublePrecision",void 0),(0,Pt._)([(0,It.o)({constValue:!1})],Dt.prototype,"useLegacyTerrainShading",void 0),(0,Pt._)([(0,It.o)({constValue:!1})],Dt.prototype,"hasModelTransformation",void 0),(0,Pt._)([(0,It.o)({constValue:Lt.P.Pass})],Dt.prototype,"pbrTextureBindType",void 0),(0,Pt._)([(0,It.o)()],Dt.prototype,"hasWebGL2Context",void 0);class Ft extends Dt{constructor(){super(...arguments),this.output=Fe.H.Color,this.alphaDiscardMode=N.JJ.Opaque,this.doubleSidedMode=Be.q.None,this.pbrMode=Ue.f7.Disabled,this.cullFace=N.Vr.None,this.transparencyPassType=Ge.A.NONE,this.normalType=He.h.Attribute,this.textureCoordinateType=gt.N.None,this.customDepthTest=N.Gv.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}(0,Pt._)([(0,It.o)({count:Fe.H.COUNT})],Ft.prototype,"output",void 0),(0,Pt._)([(0,It.o)({count:N.JJ.COUNT})],Ft.prototype,"alphaDiscardMode",void 0),(0,Pt._)([(0,It.o)({count:Be.q.COUNT})],Ft.prototype,"doubleSidedMode",void 0),(0,Pt._)([(0,It.o)({count:Ue.f7.COUNT})],Ft.prototype,"pbrMode",void 0),(0,Pt._)([(0,It.o)({count:N.Vr.COUNT})],Ft.prototype,"cullFace",void 0),(0,Pt._)([(0,It.o)({count:Ge.A.COUNT})],Ft.prototype,"transparencyPassType",void 0),(0,Pt._)([(0,It.o)({count:He.h.COUNT})],Ft.prototype,"normalType",void 0),(0,Pt._)([(0,It.o)({count:gt.N.COUNT})],Ft.prototype,"textureCoordinateType",void 0),(0,Pt._)([(0,It.o)({count:N.Gv.COUNT})],Ft.prototype,"customDepthTest",void 0),(0,Pt._)([(0,It.o)()],Ft.prototype,"spherical",void 0),(0,Pt._)([(0,It.o)()],Ft.prototype,"hasVertexColors",void 0),(0,Pt._)([(0,It.o)()],Ft.prototype,"hasSymbolColors",void 0),(0,Pt._)([(0,It.o)()],Ft.prototype,"hasVerticalOffset",void 0),(0,Pt._)([(0,It.o)()],Ft.prototype,"hasSlicePlane",void 0),(0,Pt._)([(0,It.o)()],Ft.prototype,"hasSliceHighlight",void 0),(0,Pt._)([(0,It.o)()],Ft.prototype,"hasColorTexture",void 0),(0,Pt._)([(0,It.o)()],Ft.prototype,"hasMetallicRoughnessTexture",void 0),(0,Pt._)([(0,It.o)()],Ft.prototype,"hasEmissionTexture",void 0),(0,Pt._)([(0,It.o)()],Ft.prototype,"hasOcclusionTexture",void 0),(0,Pt._)([(0,It.o)()],Ft.prototype,"hasNormalTexture",void 0),(0,Pt._)([(0,It.o)()],Ft.prototype,"hasScreenSizePerspective",void 0),(0,Pt._)([(0,It.o)()],Ft.prototype,"hasVertexTangents",void 0),(0,Pt._)([(0,It.o)()],Ft.prototype,"hasOccludees",void 0),(0,Pt._)([(0,It.o)()],Ft.prototype,"hasMultipassTerrain",void 0),(0,Pt._)([(0,It.o)()],Ft.prototype,"hasModelTransformation",void 0),(0,Pt._)([(0,It.o)()],Ft.prototype,"offsetBackfaces",void 0),(0,Pt._)([(0,It.o)()],Ft.prototype,"vvSize",void 0),(0,Pt._)([(0,It.o)()],Ft.prototype,"vvColor",void 0),(0,Pt._)([(0,It.o)()],Ft.prototype,"receiveShadows",void 0),(0,Pt._)([(0,It.o)()],Ft.prototype,"receiveAmbientOcclusion",void 0),(0,Pt._)([(0,It.o)()],Ft.prototype,"textureAlphaPremultiplied",void 0),(0,Pt._)([(0,It.o)()],Ft.prototype,"instanced",void 0),(0,Pt._)([(0,It.o)()],Ft.prototype,"instancedColor",void 0),(0,Pt._)([(0,It.o)()],Ft.prototype,"objectAndLayerIdColorInstanced",void 0),(0,Pt._)([(0,It.o)()],Ft.prototype,"instancedDoublePrecision",void 0),(0,Pt._)([(0,It.o)()],Ft.prototype,"doublePrecisionRequiresObfuscation",void 0),(0,Pt._)([(0,It.o)()],Ft.prototype,"writeDepth",void 0),(0,Pt._)([(0,It.o)()],Ft.prototype,"transparent",void 0),(0,Pt._)([(0,It.o)()],Ft.prototype,"enableOffset",void 0),(0,Pt._)([(0,It.o)()],Ft.prototype,"cullAboveGround",void 0),(0,Pt._)([(0,It.o)()],Ft.prototype,"snowCover",void 0),(0,Pt._)([(0,It.o)()],Ft.prototype,"hasColorTextureTransform",void 0),(0,Pt._)([(0,It.o)()],Ft.prototype,"hasEmissionTextureTransform",void 0),(0,Pt._)([(0,It.o)()],Ft.prototype,"hasNormalTextureTransform",void 0),(0,Pt._)([(0,It.o)()],Ft.prototype,"hasOcclusionTextureTransform",void 0),(0,Pt._)([(0,It.o)()],Ft.prototype,"hasMetallicRoughnessTextureTransform",void 0),(0,Pt._)([(0,It.o)({constValue:!0})],Ft.prototype,"hasVvInstancing",void 0),(0,Pt._)([(0,It.o)({constValue:!1})],Ft.prototype,"useCustomDTRExponentForWater",void 0),(0,Pt._)([(0,It.o)({constValue:!1})],Ft.prototype,"supportsTextureAtlas",void 0),(0,Pt._)([(0,It.o)({constValue:!0})],Ft.prototype,"useFillLights",void 0);var Ht=r(41846);class Bt extends Ot{initializeConfiguration(e,t){super.initializeConfiguration(e,t),t.hasMetallicRoughnessTexture=!1,t.hasEmissionTexture=!1,t.hasOcclusionTexture=!1,t.hasNormalTexture=!1,t.hasModelTransformation=!1,t.normalType=He.h.Attribute,t.doubleSidedMode=Be.q.WindingOrder,t.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,Bt.shader)}}Bt.shader=new Tt.J(Ht.R,(()=>r.e(8096).then(r.bind(r,38096))));class Ut extends Ve.F5{constructor(e){super(e,Vt),this.supportsEdges=!0,this._configuration=new Ft,this._vertexBufferLayout=function(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,r=(0,De.U$)().vec3f(X.T.POSITION).vec3f(X.T.NORMAL);return e.hasVertexTangents&&r.vec4f(X.T.TANGENT),t&&r.vec2f(X.T.UV0),e.hasVertexColors&&r.vec4u8(X.T.COLOR),e.hasSymbolColors&&r.vec4u8(X.T.SYMBOLCOLOR),(0,Ie.Z)("enable-feature:objectAndLayerId-rendering")&&r.vec4u8(X.T.OBJECTANDLAYERIDCOLOR),r}(this.parameters),this._instanceBufferLayout=e.instanced?function(e){let t=(0,De.U$)();return t=e.instancedDoublePrecision?t.vec3f(X.T.MODELORIGINHI).vec3f(X.T.MODELORIGINLO).mat3f(X.T.MODEL).mat3f(X.T.MODELNORMAL):t.mat4f(X.T.MODEL).mat4f(X.T.MODELNORMAL),(0,o.pC)(e.instanced)&&e.instanced.includes("color")&&(t=t.vec4f(X.T.INSTANCECOLOR)),(0,o.pC)(e.instanced)&&e.instanced.includes("featureAttribute")&&(t=t.vec4f(X.T.INSTANCEFEATUREATTRIBUTE)),(0,o.pC)(e.instanced)&&e.instanced.includes("objectAndLayerIdColor")&&(t=t.vec4u8(X.T.OBJECTANDLAYERIDCOLOR_INSTANCED)),t}(this.parameters):null}isVisibleForOutput(e){return e!==Fe.H.Shadow&&e!==Fe.H.ShadowExludeHighlight&&e!==Fe.H.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const{instanced:t,hasVertexColors:r,hasSymbolColors:i,vvColorEnabled:a}=e,n=(0,o.pC)(t)&&t.includes("color"),s="replace"===e.colorMixMode,l=e.opacity>0,c=e.externalColor&&e.externalColor[3]>0;return r&&(n||a||i)?!!s||l:r?s?c:l:n||a||i?!!s||l:s?c:l}getConfiguration(e,t){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=!!this.parameters.instanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=this.parameters.vvSizeEnabled,this._configuration.hasVerticalOffset=(0,o.pC)(this.parameters.verticalOffset),this._configuration.hasScreenSizePerspective=(0,o.pC)(this.parameters.screenSizePerspective),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType="screenDerivative"===this.parameters.normals?He.h.ScreenDerivative:He.h.Attribute,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,(0,o.pC)(this.parameters.customDepthTest)&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?N.Vr.None:this.parameters.cullFace,this._configuration.hasMultipassTerrain=t.multipassTerrain.enabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=(0,o.pC)(this.parameters.modelTransformation),e!==Fe.H.Color&&e!==Fe.H.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=Be.q.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?Be.q.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?Be.q.WindingOrder:Be.q.None,this._configuration.instancedColor=(0,o.pC)(this.parameters.instanced)&&this.parameters.instanced.includes("color"),this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=!!t.ssaoHelper.ready&&this.parameters.receiveSSAO,this._configuration.vvColor=this.parameters.vvColorEnabled,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?Ue.f7.Schematic:Ue.f7.Normal:Ue.f7.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<5e5,this._configuration.snowCover=this.hasSnowCover(t),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return(0,o.pC)(e.weather)&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}intersect(e,t,r,i,a,n,s){if((0,o.pC)(this.parameters.verticalOffset)){const e=i.camera;(0,c.s)(Xt,r[12],r[13],r[14]);let t=null;switch(i.viewingMode){case Le.JY.Global:t=(0,c.n)(qt,Xt);break;case Le.JY.Local:t=(0,c.c)(qt,$t)}let o=0;const s=(0,c.b)(Jt,Xt,e.eye),l=(0,c.l)(s),d=(0,c.g)(s,s,1/l);let u=null;this.parameters.screenSizePerspective&&(u=(0,c.e)(t,d)),o+=(0,pt.Hx)(e,l,this.parameters.verticalOffset,u,this.parameters.screenSizePerspective),(0,c.g)(t,t,o),(0,c.t)(jt,t,i.transform.inverseRotation),a=(0,c.b)(Wt,a,jt),n=(0,c.b)(kt,n,jt)}var l;(0,pt.Bw)(e,t,i,a,n,(l=i.verticalOffset,(0,o.pC)(l)?(at.offset=l,at):null),s)}requiresSlot(e,t){return!(t!==Fe.H.Color&&t!==Fe.H.Alpha&&t!==Fe.H.Depth&&t!==Fe.H.Normal&&t!==Fe.H.Shadow&&t!==Fe.H.ShadowHighlight&&t!==Fe.H.ShadowExludeHighlight&&t!==Fe.H.Highlight&&t!==Fe.H.ObjectAndLayerIdColor||e!==(this.parameters.transparent?this.parameters.writeDepth?Ye.TRANSPARENT_MATERIAL:Ye.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:Ye.OPAQUE_MATERIAL)&&e!==Ye.DRAPED_MATERIAL&&t!==Fe.H.ObjectAndLayerIdColor)}createGLMaterial(e){return new zt(e)}createBufferWriter(){return new Gt(this._vertexBufferLayout,this._instanceBufferLayout)}}class zt extends ze.F{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){const t=this._material.parameters;this.updateTexture(t.textureId);const r=e.camera.viewInverseTransposeMatrix;return(0,c.s)(t.origin,r[3],r[7],r[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(t.treeRendering?Bt:Ot,e)}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){return this._output!==Fe.H.Color&&this._output!==Fe.H.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e)),this._updateParameters(e)}}const Vt=new class extends Mt{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}};class Gt{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(X.T.POSITION).length}write(e,t,r,i,a){!function(e,t,r,i,a,n){for(const s of t.fieldNames){const t=e.vertexAttributes.get(s),l=e.indices.get(s);if(t&&l)switch(s){case X.T.POSITION:{(0,I.hu)(3===t.size);const e=a.getField(s,h.ct);e&&ct(l,t.data,r,e,n);break}case X.T.NORMAL:{(0,I.hu)(3===t.size);const e=a.getField(s,h.ct);e&&dt(l,t.data,i,e,n);break}case X.T.UV0:{(0,I.hu)(2===t.size);const e=a.getField(s,h.Eu);e&&st(l,t.data,e,n);break}case X.T.COLOR:{(0,I.hu)(3===t.size||4===t.size);const e=a.getField(s,h.mc);e&&ht(l,t.data,t.size,e,n);break}case X.T.SYMBOLCOLOR:{(0,I.hu)(3===t.size||4===t.size);const e=a.getField(s,h.mc);e&&ht(l,t.data,t.size,e,n);break}case X.T.TANGENT:{(0,I.hu)(4===t.size);const e=a.getField(s,h.ek);e&&ut(l,t.data,i,e,n);break}}else if(s===X.T.OBJECTANDLAYERIDCOLOR&&(0,o.pC)(e.objectAndLayerIdColor)&&4===e.objectAndLayerIdColor.length){const t=e.indices.get(X.T.POSITION);if(t){const r=t.length,i=a.getField(s,h.mc);ft(e.objectAndLayerIdColor,i,r,n)}}}}(r,this.vertexBufferLayout,e,t,i,a)}}const Wt=(0,d.c)(),kt=(0,d.c)(),$t=(0,d.f)(0,0,1),qt=(0,d.c)(),jt=(0,d.c)(),Xt=(0,d.c)(),Jt=(0,d.c)(),Yt=y.Z.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");function Kt(e){throw new C.Z("",`Request for object resource failed: ${e}`)}function Zt(e){const t=e.params,r=t.topology;let i=!0;switch(t.vertexAttributes||(Yt.warn("Geometry must specify vertex attributes"),i=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(Yt.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),i=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(Yt.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),i=!1)):(Yt.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),i=!1)}}else Yt.warn("Indexed geometries must specify faces"),i=!1;break}default:Yt.warn(`Unsupported topology '${r}'`),i=!1}e.params.material||(Yt.warn("Geometry requires material"),i=!1);const o=e.params.vertexAttributes;for(const e in o)o[e].values||(Yt.warn("Geometries with externally defined attributes are not yet supported"),i=!1);return i}function Qt(e){const t=(0,u.cS)();return e.forEach((e=>{const r=e.boundingInfo;(0,o.pC)(r)&&((0,u.pp)(t,r.getBBMin()),(0,u.pp)(t,r.getBBMax()))})),t}function er(e){switch(e){case"mask":return N.JJ.Mask;case"maskAndTransparency":return N.JJ.MaskBlend;case"none":return N.JJ.Opaque;default:return N.JJ.Blend}}function tr(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const rr=new M.G(1,2,"wosr");var ir=r(57758),or=r(10816),ar=r(75488),nr=r(56067);async function sr(e,t){const r=lr((0,i.pJ)(e));if("wosr"===r.fileType){const e=await(t.cache?t.cache.loadWOSR(r.url,t):async function(e,t){const r=await async function(e,t){const r=(0,o.pC)(t)&&t.streamDataRequester;if(r)return async function(e,t,r){const i=await(0,S.q6)(t.request(e,"json",r));if(!0===i.ok)return i.value;(0,R.r9)(i.error),Kt(i.error.details.url)}(e,r,t);const i=await(0,S.q6)((0,E.default)(e,(0,o.Wg)(t)));if(!0===i.ok)return i.value.data;(0,R.r9)(i.error),Kt(i.error)}(e,t),i=await async function(e,t){const r=[];for(const i in e){const a=e[i],n=a.images[0].data;if(!n){Yt.warn("Externally referenced texture data is not yet supported");continue}const s=a.encoding+";base64,"+n,l="/textureDefinitions/"+i,c="rgba"===a.channels?a.alphaChannelUsage||"transparency":"none",d={noUnpackFlip:!0,wrap:{s:he.e8.REPEAT,t:he.e8.REPEAT},preMultiplyAlpha:er(c)!==N.JJ.Opaque},u=(0,o.pC)(t)&&t.disableTextures?Promise.resolve(null):(0,O.t)(s,t);r.push(u.then((e=>({refId:l,image:e,params:d,alphaChannelUsage:c}))))}const i=await Promise.all(r),a={};for(const e of i)a[e.refId]=e;return a}(r.textureDefinitions,t);let a=0;for(const e in i)if(i.hasOwnProperty(e)){const t=i[e];a+=t?.image?t.image.width*t.image.height*4:0}return{resource:r,textures:i,size:a+(0,w.Ul)(r)}}(r.url,t)),{engineResources:i,referenceBoundingBox:a}=function(e,t){const r=[],i=[],a=[],n=[],s=e.resource,l=M.G.parse(s.version||"1.0","wosr");rr.validate(l);const c=s.model.name,u=s.model.geometries,h=s.materialDefinitions,f=e.textures;let m=0;const p=new Map;for(let e=0;e<u.length;e++){const s=u[e];if(!Zt(s))continue;const l=tr(s),c=s.params.vertexAttributes,g=[];for(const e in c){const t=c[e],r=t.values;g.push([e,{data:r,size:t.valuesPerElement,exclusive:!0}])}const v=[];if("PerAttributeArray"!==s.params.topology){const e=s.params.faces;for(const t in e)v.push([t,e[t].values])}const _=f&&f[l.texture];if(_&&!p.has(l.texture)){const{image:e,params:t}=_,r=new Pe(e,t);n.push(r),p.set(l.texture,r)}const x=p.get(l.texture),T=x?x.id:void 0;let b=a[l.material]?a[l.material][l.texture]:null;if(!b){const e=h[l.material.substring(l.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=_&&_.alphaChannelUsage,i=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,n=_?er(_.alphaChannelUsage):void 0,s={ambient:(0,d.d)(e.diffuse),diffuse:(0,d.d)(e.diffuse),opacity:1-(e.transparency||0),transparent:i,textureAlphaMode:n,textureAlphaCutoff:.33,textureId:T,initTextureTransparent:!0,doubleSided:!0,cullFace:N.Vr.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!!_&&!!_.params.preMultiplyAlpha};(0,o.pC)(t)&&t.materialParamsMixin&&Object.assign(s,t.materialParamsMixin),b=new Ut(s),a[l.material]||(a[l.material]={}),a[l.material][l.texture]=b}i.push(b);const A=new J(g,v);m+=v.position?v.position.length:0,r.push(A)}return{engineResources:[{name:c,stageResources:{textures:n,materials:i,geometries:r},pivotOffset:s.model.pivotOffset,numberOfVertices:m,lodThreshold:null}],referenceBoundingBox:Qt(r)}}(e,t);return{lods:i,referenceBoundingBox:a,isEsriSymbolResource:!1,isWosr:!0}}const a=await(t.cache?t.cache.loadGLTF(r.url,t,t.usePBR):(0,v.Q)(new g.C(t.streamDataRequester),r.url,t,t.usePBR)),n=(0,o.U2)(a.model.meta,"ESRI_proxyEllipsoid"),u=a.meta.isEsriSymbolResource&&(0,o.pC)(n)&&a.meta.uri.includes("/RealisticTrees/");u&&!a.customMeta.esriTreeRendering&&(a.customMeta.esriTreeRendering=!0,function(e,t){for(let r=0;r<e.model.lods.length;++r){const i=e.model.lods[r];for(const a of i.parts){const i=a.attributes.normal;if((0,o.Wi)(i))return;const n=a.attributes.position,u=n.count,f=(0,d.c)(),m=(0,d.c)(),g=(0,d.c)(),v=(0,p.gS)(h.mc,u),_=(0,p.gS)(h.ct,u),x=(0,s.a)((0,l.c)(),a.transform);for(let o=0;o<u;o++){n.getVec(o,m),i.getVec(o,f),(0,c.m)(m,m,a.transform),(0,c.b)(g,m,t.center),(0,c.C)(g,g,t.radius);const s=g[2],l=(0,c.l)(g),d=Math.min(.45+.55*l*l,1);(0,c.C)(g,g,t.radius),null!==x&&(0,c.m)(g,g,x),(0,c.n)(g,g),r+1!==e.model.lods.length&&e.model.lods.length>1&&(0,c.h)(g,g,f,s>-1?.2:Math.min(-4*s-3.8,1)),_.setVec(o,g),v.set(o,0,255*d),v.set(o,1,255*d),v.set(o,2,255*d),v.set(o,3,255)}a.attributes.normal=_,a.attributes.color=v}}}(a,n));const f=a.meta.isEsriSymbolResource?{usePBR:t.usePBR,isSchematic:!1,treeRendering:u,mrrFactors:[0,1,.2]}:{usePBR:t.usePBR,isSchematic:!1,treeRendering:!1,mrrFactors:[0,1,.5]},m={...t.materialParamsMixin,treeRendering:u},{engineResources:_,referenceBoundingBox:x}=cr(a,f,m,t.skipHighLods&&null==r.specifiedLodIndex?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:r.specifiedLodIndex});return{lods:_,referenceBoundingBox:x,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1}}function lr(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function cr(e,t,r,i){const n=e.model,s=new Array,l=new Map,c=new Map,d=n.lods.length,g=(0,u.cS)();return n.lods.forEach(((e,v)=>{const x=!0===i.skipHighLods&&(d>1&&0===v||d>3&&1===v)||!1===i.skipHighLods&&null!=i.singleLodIndex&&v!==i.singleLodIndex;if(x&&0!==v)return;const T=new Array;let E=0;if(e.parts.forEach((e=>{const{geometry:t,vertexCount:r}=function(e){const t=function(e,t){switch(t){case he.MX.TRIANGLES:return(0,_.nh)(e);case he.MX.TRIANGLE_STRIP:return(0,_.DA)(e);case he.MX.TRIANGLE_FAN:return(0,_.jX)(e)}}(e.indices||e.attributes.position.count,e.primitiveType),r=e.attributes.position.count,i=(0,p.gS)(h.ct,r);(0,f.t)(i,e.attributes.position,e.transform);const n=[[X.T.POSITION,{data:i.typedBuffer,size:i.elementCount,exclusive:!0}]],s=[[X.T.POSITION,t]];if((0,o.pC)(e.attributes.normal)){const i=(0,p.gS)(h.ct,r);(0,a.b)(dr,e.transform),(0,f.a)(i,e.attributes.normal,dr),n.push([X.T.NORMAL,{data:i.typedBuffer,size:i.elementCount,exclusive:!0}]),s.push([X.T.NORMAL,t])}if((0,o.pC)(e.attributes.tangent)){const i=(0,p.gS)(h.ek,r);(0,a.b)(dr,e.transform),(0,m.t)(i,e.attributes.tangent,dr),n.push([X.T.TANGENT,{data:i.typedBuffer,size:i.elementCount,exclusive:!0}]),s.push([X.T.TANGENT,t])}if((0,o.pC)(e.attributes.texCoord0)){const i=(0,p.gS)(h.Eu,r);(0,or.n)(i,e.attributes.texCoord0),n.push([X.T.UV0,{data:i.typedBuffer,size:i.elementCount,exclusive:!0}]),s.push([X.T.UV0,t])}if((0,o.pC)(e.attributes.color)){const i=(0,p.gS)(h.mc,r);if(4===e.attributes.color.elementCount)e.attributes.color instanceof h.ek?(0,m.s)(i,e.attributes.color,255):e.attributes.color instanceof h.mc?(0,ar.c)(i,e.attributes.color):e.attributes.color instanceof h.v6&&(0,m.s)(i,e.attributes.color,1/256);else{(0,ar.f)(i,255,255,255,255);const t=new h.ne(i.buffer,0,4);e.attributes.color instanceof h.ct?(0,f.s)(t,e.attributes.color,255):e.attributes.color instanceof h.ne?(0,nr.c)(t,e.attributes.color):e.attributes.color instanceof h.mw&&(0,f.s)(t,e.attributes.color,1/256)}n.push([X.T.COLOR,{data:i.typedBuffer,size:i.elementCount,exclusive:!0}]),s.push([X.T.COLOR,t])}return{geometry:new J(n,s),vertexCount:r}}(e);T.push(t),E+=r;const i=t.boundingInfo;(0,o.pC)(i)&&0===v&&((0,u.pp)(g,i.getBBMin()),(0,u.pp)(g,i.getBBMax()))})),x)return;const S=new A(e.name,{textures:new Array,materials:new Array,geometries:T},e.lodThreshold,[0,0,0],E);s.push(S),e.parts.forEach((e=>{const i=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),a=n.materials.get(e.material),s=(0,o.pC)(e.attributes.texCoord0),d=(0,o.pC)(e.attributes.normal);if((0,o.Wi)(a))return;const u=function(e){switch(e){case"BLEND":return N.JJ.Blend;case"MASK":return N.JJ.Mask;case"OPAQUE":case null:case void 0:return N.JJ.Opaque}}(a.alphaMode);if(!l.has(i)){if(s){const e=(e,t=!1)=>{if((0,o.pC)(e)&&!c.has(e)){const r=n.textures.get(e);(0,o.pC)(r)&&c.set(e,new Pe(r.data,t?{...r.parameters,preMultiplyAlpha:t}:r.parameters))}};e(a.textureColor,u!==N.JJ.Opaque),e(a.textureNormal),e(a.textureOcclusion),e(a.textureEmissive),e(a.textureMetallicRoughness)}const h=a.color[0]**(1/ir.K),f=a.color[1]**(1/ir.K),m=a.color[2]**(1/ir.K),p=a.emissiveFactor[0]**(1/ir.K),g=a.emissiveFactor[1]**(1/ir.K),v=a.emissiveFactor[2]**(1/ir.K),_=(0,o.pC)(a.textureColor)&&s?c.get(a.textureColor):null;l.set(i,new Ut({...t,transparent:u===N.JJ.Blend,customDepthTest:N.Gv.Lequal,textureAlphaMode:u,textureAlphaCutoff:a.alphaCutoff,diffuse:[h,f,m],ambient:[h,f,m],opacity:a.opacity,doubleSided:a.doubleSided,doubleSidedType:"winding-order",cullFace:a.doubleSided?N.Vr.None:N.Vr.Back,hasVertexColors:!!e.attributes.color,hasVertexTangents:!!e.attributes.tangent,normals:d?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:(0,o.pC)(_)?_.id:void 0,colorMixMode:a.colorMixMode,normalTextureId:(0,o.pC)(a.textureNormal)&&s?c.get(a.textureNormal).id:void 0,textureAlphaPremultiplied:(0,o.pC)(_)&&!!_.params.preMultiplyAlpha,occlusionTextureId:(0,o.pC)(a.textureOcclusion)&&s?c.get(a.textureOcclusion).id:void 0,emissiveTextureId:(0,o.pC)(a.textureEmissive)&&s?c.get(a.textureEmissive).id:void 0,metallicRoughnessTextureId:(0,o.pC)(a.textureMetallicRoughness)&&s?c.get(a.textureMetallicRoughness).id:void 0,emissiveFactor:[p,g,v],mrrFactors:[a.metallicFactor,a.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,colorTextureTransformMatrix:b(a.colorTextureTransform),normalTextureTransformMatrix:b(a.normalTextureTransform),occlusionTextureTransformMatrix:b(a.occlusionTextureTransform),emissiveTextureTransformMatrix:b(a.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:b(a.metallicRoughnessTextureTransform),...r}))}if(S.stageResources.materials.push(l.get(i)),s){const e=e=>{(0,o.pC)(e)&&S.stageResources.textures.push(c.get(e))};e(a.textureColor),e(a.textureNormal),e(a.textureOcclusion),e(a.textureEmissive),e(a.textureMetallicRoughness)}}))})),{engineResources:s,referenceBoundingBox:g}}const dr=(0,n.c)()},65576:(e,t,r)=>{r.d(t,{U$:()=>s});var i=r(56481),o=r(79583);class a{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const t of e.fieldNames){const r=e.fields.get(t);this[t]=new r.constructor(this.buffer,r.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const r=this[e];return r&&r.elementCount===t.ElementCount&&r.elementType===t.ElementType?r:null}slice(e,t){return new a(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t,r,i){const o=this.stride;if(o%4==0){const a=new Uint32Array(e.buffer,t*o,i*o/4);new Uint32Array(this.buffer,r*o,i*o/4).set(a)}else{const a=new Uint8Array(e.buffer,t*o,i*o);new Uint8Array(this.buffer,r*o,i*o).set(a)}}}class n{constructor(){this.stride=0,this.fields=new Map,this.fieldNames=[]}vec2f(e,t){return this._appendField(e,i.Eu,t),this}vec2f64(e,t){return this._appendField(e,i.q6,t),this}vec3f(e,t){return this._appendField(e,i.ct,t),this}vec3f64(e,t){return this._appendField(e,i.fP,t),this}vec4f(e,t){return this._appendField(e,i.ek,t),this}vec4f64(e,t){return this._appendField(e,i.Cd,t),this}mat3f(e,t){return this._appendField(e,i.gK,t),this}mat3f64(e,t){return this._appendField(e,i.ey,t),this}mat4f(e,t){return this._appendField(e,i.bj,t),this}mat4f64(e,t){return this._appendField(e,i.O1,t),this}vec4u8(e,t){return this._appendField(e,i.mc,t),this}f32(e,t){return this._appendField(e,i.ly,t),this}f64(e,t){return this._appendField(e,i.oS,t),this}u8(e,t){return this._appendField(e,i.D_,t),this}u16(e,t){return this._appendField(e,i.av,t),this}i8(e,t){return this._appendField(e,i.Hz,t),this}vec2i8(e,t){return this._appendField(e,i.Vs,t),this}vec2i16(e,t){return this._appendField(e,i.or,t),this}vec2u8(e,t){return this._appendField(e,i.xA,t),this}vec4u16(e,t){return this._appendField(e,i.v6,t),this}u32(e,t){return this._appendField(e,i.Nu,t),this}_appendField(e,t,r){const i=t.ElementCount*(0,o.n1)(t.ElementType),a=this.stride;this.fields.set(e,{size:i,constructor:t,offset:a,optional:r}),this.stride+=i,this.fieldNames.push(e)}alignTo(e){return this.stride=Math.floor((this.stride+e-1)/e)*e,this}hasField(e){return this.fieldNames.includes(e)}createBuffer(e){return new a(this,e)}createView(e){return new a(this,e)}clone(){const e=new n;return e.stride=this.stride,e.fields=new Map,this.fields.forEach(((t,r)=>e.fields.set(r,t))),e.fieldNames=this.fieldNames.slice(),e.BufferType=this.BufferType,e}}function s(){return new n}},1391:(e,t,r)=>{r.d(t,{Zu:()=>l,bA:()=>c,qj:()=>d});var i=r(55039),o=r(2095),a=r(19693),n=r(74709);function s(e){e.varyings.add("linearDepth","float")}function l(e){e.vertex.uniforms.add(new a.A("nearFar",((e,t)=>t.camera.nearFar)))}function c(e){e.vertex.code.add(n.H`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function d(e,t){const{vertex:r}=e;switch(t.output){case i.H.Color:if(t.receiveShadows)return s(e),void r.code.add(n.H`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case i.H.Depth:case i.H.Shadow:case i.H.ShadowHighlight:case i.H.ShadowExludeHighlight:return e.include(o.up,t),s(e),l(e),c(e),void r.code.add(n.H`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(n.H`void forwardLinearDepth() {}`)}},62707:(e,t,r)=>{r.d(t,{w:()=>o});var i=r(74709);function o(e){e.vertex.code.add(i.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},33929:(e,t,r)=>{r.d(t,{k:()=>a});var i=r(74709),o=r(35065);function a(e,t=!0){e.attributes.add(o.T.POSITION,"vec2"),t&&e.varyings.add("uv","vec2"),e.vertex.code.add(i.H`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?i.H`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}},55039:(e,t,r)=>{var i;r.d(t,{H:()=>i}),function(e){e[e.Color=0]="Color",e[e.Depth=1]="Depth",e[e.Normal=2]="Normal",e[e.Shadow=3]="Shadow",e[e.ShadowHighlight=4]="ShadowHighlight",e[e.ShadowExludeHighlight=5]="ShadowExludeHighlight",e[e.Highlight=6]="Highlight",e[e.Alpha=7]="Alpha",e[e.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",e[e.COUNT=9]="COUNT"}(i||(i={}))},51546:(e,t,r)=>{r.d(t,{f5:()=>d});var i=r(70586),o=r(52138),a=r(13598),n=r(17896),s=r(65617),l=r(70582),c=(r(172),r(74709));function d(e,t){!function(e,t,r){if(!t.hasSlicePlane){const r=c.H`#define rejectBySlice(_pos_) false
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
}`,a=t.hasSliceHighlight?c.H`
        ${o}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:c.H`#define highlightSlice(_color_, _pos_) (_color_)`;t.hasSliceInVertexProgram&&e.vertex.code.add(i),e.fragment.code.add(i),e.fragment.code.add(a)}(e,t,[new l.B("slicePlaneOrigin",((e,r)=>function(e,t,r){if((0,i.Wi)(r.slicePlane))return s.Z;const o=u(e,t,r),a=h(o,r.slicePlane),l=f(e,o,r);return(0,i.pC)(l)?(0,n.m)(g,a,l):a}(t,e,r))),new l.B("slicePlaneBasis1",((e,r)=>m(t,e,r,(0,i.Wg)(r.slicePlane)?.basis1))),new l.B("slicePlaneBasis2",((e,r)=>m(t,e,r,(0,i.Wg)(r.slicePlane)?.basis2)))])}function u(e,t,r){return e.instancedDoublePrecision?(0,n.s)(p,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function h(e,t){return(0,i.pC)(e)?(0,n.b)(g,t.origin,e):t.origin}function f(e,t,r){return e.hasSliceTranslatedView?(0,i.pC)(t)?(0,o.v)(_,r.camera.viewMatrix,t):r.camera.viewMatrix:null}function m(e,t,r,o){if((0,i.Wi)(o)||(0,i.Wi)(r.slicePlane))return s.Z;const a=u(e,t,r),l=h(a,r.slicePlane),c=f(e,a,r);return(0,i.pC)(c)?((0,n.a)(v,o,l),(0,n.m)(g,l,c),(0,n.m)(v,v,c),(0,n.b)(v,v,g)):o}const p=(0,s.c)(),g=(0,s.c)(),v=(0,s.c)(),_=(0,a.c)()},77171:(e,t,r)=>{r.d(t,{w:()=>a});var i=r(1391),o=r(74709);function a(e,t){if((0,i.bA)(e),t.hasModelTransformation)return e.vertex.code.add(o.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, mat4 model, vec3 pos, vec2 nearFar, out float depth) {
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
}`)}},47624:(e,t,r)=>{r.d(t,{f:()=>p});var i=r(43697),o=r(17896),a=r(65617),n=r(55039),s=r(89243),l=r(93669),c=r(70582),d=r(74709),u=r(51354),h=r(35065),f=r(9820);class m extends u.m{constructor(){super(...arguments),this.instancedDoublePrecision=!1}}function p(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add(h.T.MODELORIGINHI,"vec3"),e.attributes.add(h.T.MODELORIGINLO,"vec3"),e.attributes.add(h.T.MODEL,"mat3"),e.attributes.add(h.T.MODELNORMAL,"mat3"));const r=e.vertex;t.instancedDoublePrecision&&(r.include(s.$,t),r.uniforms.add(new c.B("viewOriginHi",((e,t)=>(0,f.U8)((0,o.s)(g,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),g)))),r.uniforms.add(new c.B("viewOriginLo",((e,t)=>(0,f.GB)((0,o.s)(g,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),g))))),r.code.add(d.H`
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
    `),t.output===n.H.Normal&&((0,l._8)(r),r.code.add(d.H`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),t.hasVertexTangents&&r.code.add(d.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `)}(0,i._)([(0,u.o)()],m.prototype,"instancedDoublePrecision",void 0);const g=(0,a.c)()},64267:(e,t,r)=>{r.d(t,{O:()=>l,h:()=>a});var i=r(74709);function o(e){const t=i.H`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;e.vertex.code.add(t)}var a,n,s=r(35065);function l(e,t){t.normalType===a.Attribute&&(e.attributes.add(s.T.NORMAL,"vec3"),e.vertex.code.add(i.H`vec3 normalModel() {
return normal;
}`)),t.normalType===a.CompressedAttribute&&(e.include(o),e.attributes.add(s.T.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(i.H`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),t.normalType===a.ScreenDerivative&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(i.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}(n=a||(a={}))[n.Attribute=0]="Attribute",n[n.CompressedAttribute=1]="CompressedAttribute",n[n.Ground=2]="Ground",n[n.ScreenDerivative=3]="ScreenDerivative",n[n.COUNT=4]="COUNT"},37099:(e,t,r)=>{r.d(t,{f:()=>a});var i=r(74709),o=r(35065);function a(e){e.attributes.add(o.T.POSITION,"vec3"),e.vertex.code.add(i.H`vec3 positionModel() { return position; }`)}},76056:(e,t,r)=>{r.d(t,{R:()=>c});var i=r(6206),o=r(74709);function a(e){e.vertex.code.add(o.H`
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
  `)}var n=r(15736),s=r(35065),l=r(37782);function c(e,t){t.hasSymbolColors?(e.include(a),e.attributes.add(s.T.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(o.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new n._("colorMixMode",(e=>l.FZ[e.colorMixMode]))),e.vertex.code.add(o.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}},135:(e,t,r)=>{r.d(t,{D:()=>l,N:()=>i});var i,o,a=r(74085),n=r(74709),s=r(35065);function l(e,t){switch(t.textureCoordinateType){case i.Default:return e.attributes.add(s.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(n.H`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case i.Compressed:return e.attributes.add(s.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(n.H`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case i.Atlas:return e.attributes.add(s.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(s.T.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(n.H`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:(0,a.Bg)(t.textureCoordinateType);case i.None:return void e.vertex.code.add(n.H`void forwardTextureCoordinates() {}`);case i.COUNT:return}}(o=i||(i={}))[o.None=0]="None",o[o.Default=1]="Default",o[o.Atlas=2]="Atlas",o[o.Compressed=3]="Compressed",o[o.COUNT=4]="COUNT"},11317:(e,t,r)=>{r.d(t,{c:()=>a});var i=r(74709),o=r(35065);function a(e,t){t.hasVertexColors?(e.attributes.add(o.T.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(i.H`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(i.H`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(i.H`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}},15719:(e,t,r)=>{r.d(t,{Bb:()=>c,d4:()=>d});var i=r(46521),o=(r(88669),r(64267)),a=r(2095),n=r(74709),s=r(52114),l=r(19850);function c(e,t){t.normalType===o.h.Attribute||t.normalType===o.h.CompressedAttribute?(e.include(o.O,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add([new s.j("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel)),new l.c("transformNormalViewFromGlobal",(e=>e.transformNormalViewFromGlobal))]),e.vertex.code.add(n.H`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`)):t.normalType===o.h.Ground?(e.include(a.up,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(n.H`
    void forwardNormal() {
      vNormalWorld = ${t.spherical?n.H`normalize(vPositionWorldCameraRelative);`:n.H`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(n.H`void forwardNormal() {}`)}class d extends a.su{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,i.c)()}}},2095:(e,t,r)=>{r.d(t,{su:()=>p,up:()=>m});var i=r(46521),o=r(13598),a=(r(72119),r(65617)),n=r(37099),s=r(89243),l=r(70582),c=r(172),d=r(74709),u=r(52114),h=r(19850),f=r(8319);function m(e,t){e.include(n.f);const r=e.vertex;r.include(s.$,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),r.uniforms.add([new c.J("transformWorldFromViewTH",(e=>e.transformWorldFromViewTH)),new c.J("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL)),new h.c("transformViewFromCameraRelativeRS",(e=>e.transformViewFromCameraRelativeRS)),new f.g("transformProjFromView",(e=>e.transformProjFromView)),new u.j("transformWorldFromModelRS",(e=>e.transformWorldFromModelRS)),new l.B("transformWorldFromModelTH",(e=>e.transformWorldFromModelTH)),new l.B("transformWorldFromModelTL",(e=>e.transformWorldFromModelTL))]),r.code.add(d.H`vec3 positionWorldCameraRelative() {
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
}`)}class p extends d.K{constructor(){super(...arguments),this.transformWorldFromViewTH=(0,a.c)(),this.transformWorldFromViewTL=(0,a.c)(),this.transformViewFromCameraRelativeRS=(0,i.c)(),this.transformProjFromView=(0,o.c)()}}},91982:(e,t,r)=>{r.d(t,{i:()=>s});var i=r(74085),o=r(135),a=r(74709);function n(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(a.H`#ifndef GL_EXT_shader_texture_lod
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
}`)}function s(e,t){switch(e.include(o.D,t),e.fragment.code.add(a.H`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),t.textureCoordinateType){case o.N.Default:case o.N.Compressed:return void e.fragment.code.add(a.H`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return texture2D(texture, params.uv);
}`);case o.N.Atlas:return e.include(n),void e.fragment.code.add(a.H`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return textureAtlasLookup(texture, params.size, params.uv, vuvRegion);
}`);default:(0,i.Bg)(t.textureCoordinateType);case o.N.None:case o.N.COUNT:return}}},92555:(e,t,r)=>{r.d(t,{L:()=>d});var i=r(98766),o=r(88669),a=r(71250),n=r(74709);function s(e){e.vertex.code.add(n.H`float screenSizePerspectiveMinSize(float size, vec4 factor) {
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
}`),e.vertex.code.add(n.H`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(n.H`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),e.vertex.code.add(n.H`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),e.vertex.code.add(n.H`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(n.H`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),e.vertex.code.add(n.H`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}const l=(0,o.c)();var c=r(93669);function d(e,t){const r=e.vertex;t.hasVerticalOffset?(function(e){e.uniforms.add(new a.N("verticalOffset",((e,t)=>{const{minWorldLength:r,maxWorldLength:o,screenLength:a}=e.verticalOffset,n=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),s=t.camera.pixelRatio||1;return(0,i.s)(u,a*s,n,r,o)})))}(r),t.hasScreenSizePerspective&&(e.include(s),function(e){e.uniforms.add(new a.N("screenSizePerspectiveAlignment",(e=>function(e){return(0,i.s)(l,e.parameters.divisor,e.parameters.offset,e.parameters.minPixelSize,e.paddingPixelsOverride)}(e.screenSizePerspectiveAlignment||e.screenSizePerspective))))}(r),(0,c.hY)(e.vertex,t)),r.code.add(n.H`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${t.spherical?n.H`vec3 worldNormal = normalize(worldPos + localOrigin);`:n.H`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${t.hasScreenSizePerspective?n.H`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:n.H`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(n.H`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const u=(0,o.c)()},89136:(e,t,r)=>{r.d(t,{s:()=>M});var i=r(70586),o=r(13598),a=r(1391),n=r(55039),s=r(51546),l=r(77171),c=r(64267),d=r(74709),u=r(35065);function h(e,t){const r=t.output===n.H.ObjectAndLayerIdColor,i=t.objectAndLayerIdColorInstanced;r&&(e.varyings.add("objectAndLayerIdColorVarying","vec4"),i?e.attributes.add(u.T.OBJECTANDLAYERIDCOLOR_INSTANCED,"vec4"):e.attributes.add(u.T.OBJECTANDLAYERIDCOLOR,"vec4")),e.vertex.code.add(d.H`
     void forwardObjectAndLayerIdColor() {
      ${r?i?d.H`objectAndLayerIdColorVarying = objectAndLayerIdColor_instanced * 0.003921568627451;`:d.H`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:d.H``} }`),e.fragment.code.add(d.H`
      void outputObjectAndLayerIdColor() {
        ${r?d.H`gl_FragColor = objectAndLayerIdColorVarying;`:d.H``} }`)}var f=r(135),m=r(15719),p=r(20285);function g(e,t){switch(e.fragment.include(p.n),t.output){case n.H.Shadow:case n.H.ShadowHighlight:case n.H.ShadowExludeHighlight:e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(d.H`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`);break;case n.H.Depth:e.fragment.code.add(d.H`void outputDepth(float _linearDepth) {
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
  `)}var S=r(82550),w=r(85787),C=r(93669),y=r(8319),R=r(47026);function M(e,t){const{vertex:r,fragment:u}=e,p=t.hasModelTransformation;p&&r.uniforms.add(new y.g("model",(e=>(0,i.pC)(e.modelTransformation)?e.modelTransformation:o.I)));const v=t.hasColorTexture&&t.alphaDiscardMode!==R.JJ.Opaque;switch(t.output){case n.H.Depth:case n.H.Shadow:case n.H.ShadowHighlight:case n.H.ShadowExludeHighlight:case n.H.ObjectAndLayerIdColor:(0,C.Sv)(r,t),e.include(l.w,t),e.include(f.D,t),e.include(S.k,t),e.include(g,t),e.include(s.f5,t),e.include(h,t),(0,a.Zu)(e),e.varyings.add("depth","float"),v&&u.uniforms.add(new x.A("tex",(e=>e.texture))),r.code.add(d.H`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPositionWithDepth(proj, view, ${p?"model,":""} vpos, nearFar, depth);
            forwardTextureCoordinates();
            forwardObjectAndLayerIdColor();
          }
        `),e.include(w.z,t),u.code.add(d.H`
          void main(void) {
            discardBySlice(vpos);
            ${v?d.H`
                    vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?d.H`colorUV`:d.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${t.output===n.H.ObjectAndLayerIdColor?d.H`outputObjectAndLayerIdColor();`:d.H`outputDepth(depth);`}
          }
        `);break;case n.H.Normal:(0,C.Sv)(r,t),e.include(l.w,t),e.include(c.O,t),e.include(m.Bb,t),e.include(f.D,t),e.include(S.k,t),v&&u.uniforms.add(new x.A("tex",(e=>e.texture))),e.varyings.add("vPositionView","vec3"),r.code.add(d.H`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            ${t.normalType===c.h.Attribute?d.H`
            vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${p?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),e.include(s.f5,t),e.include(w.z,t),u.code.add(d.H`
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
        `);break;case n.H.Highlight:(0,C.Sv)(r,t),e.include(l.w,t),e.include(f.D,t),e.include(S.k,t),v&&u.uniforms.add(new x.A("tex",(e=>e.texture))),r.code.add(d.H`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${p?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),e.include(s.f5,t),e.include(w.z,t),e.include(E,t),u.code.add(d.H`
          void main() {
            discardBySlice(vpos);
            ${v?d.H`
                    vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?d.H`colorUV`:d.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}},5543:(e,t,r)=>{r.d(t,{S:()=>a});var i=r(20285),o=r(74709);function a(e){e.include(i.n),e.code.add(o.H`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}},15817:(e,t,r)=>{r.d(t,{Q:()=>f});var i=r(135),o=r(91982),a=r(19419),n=r(87449),s=r(74709),l=r(16374),c=r(98069),d=r(4511),u=r(67498),h=r(35065);function f(e,t){const r=e.fragment;if(t.hasVertexTangents?(e.attributes.add(h.T.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===a.q.WindingOrder?r.code.add(s.H`mat3 computeTangentSpace(vec3 normal) {
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
      ${t.supportsTextureAtlas?s.H`vtc.size = ${(0,n.w_)(t,"normalTexture")};`:""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `)}}},72160:(e,t,r)=>{r.d(t,{K:()=>g});var i=r(87449),o=r(74709),a=r(98069),n=r(4511),s=(r(4307),r(99381),r(89917),r(78869)),l=r(14589),c=r(83475),d=r(59377),u=r(59915),h=r(27097);class f extends l.A{initializeProgram(e){return new d.$(e.rctx,f.shader.get().build(),c.i)}initializePipeline(){return(0,h.sm)({colorWrite:h.BK})}}f.shader=new s.J(u.S,(()=>r.e(8092).then(r.bind(r,88092))));var m=r(25377);class p extends l.A{initializeProgram(e){return new d.$(e.rctx,p.shader.get().build(),c.i)}initializePipeline(){return(0,h.sm)({colorWrite:h.BK})}}function g(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add((0,a.J)("ssaoTex",((e,t)=>t.ssaoHelper.colorTexture),t.hasWebGL2Context?n.D.None:n.D.InvSize)),r.constants.add("blurSizePixelsInverse","float",.5),r.code.add(o.H`
      float evaluateAmbientOcclusionInverse() {
        vec2 ssaoTextureSizeInverse = ${(0,i.w_)(t,"ssaoTex",!0)};
        return texture2D(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).a;
      }

      float evaluateAmbientOcclusion() {
        return 1.0 - evaluateAmbientOcclusionInverse();
      }
    `)):r.code.add(o.H`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}p.shader=new s.J(m.S,(()=>r.e(9243).then(r.bind(r,49243)))),r(97323),r(35371),r(33696),r(75656),r(45762)},89753:(e,t,r)=>{r.d(t,{XP:()=>w,PN:()=>E,sC:()=>S});var i=r(74085),o=r(17896),a=r(65617),n=r(98766),s=r(88669),l=r(85504),c=r(172),d=r(71250),u=r(74709);function h(e,t){const r=e.fragment,i=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===i?(r.uniforms.add(new c.J("lightingAmbientSH0",((e,t)=>(0,o.s)(f,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),r.code.add(u.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===i?(r.uniforms.add([new d.N("lightingAmbientSH_R",((e,t)=>(0,n.s)(m,t.lighting.sh.r[0],t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3]))),new d.N("lightingAmbientSH_G",((e,t)=>(0,n.s)(m,t.lighting.sh.g[0],t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3]))),new d.N("lightingAmbientSH_B",((e,t)=>(0,n.s)(m,t.lighting.sh.b[0],t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3])))]),r.code.add(u.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):2===i&&(r.uniforms.add([new c.J("lightingAmbientSH0",((e,t)=>(0,o.s)(f,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new d.N("lightingAmbientSH_R1",((e,t)=>(0,n.s)(m,t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3],t.lighting.sh.r[4]))),new d.N("lightingAmbientSH_G1",((e,t)=>(0,n.s)(m,t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3],t.lighting.sh.g[4]))),new d.N("lightingAmbientSH_B1",((e,t)=>(0,n.s)(m,t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3],t.lighting.sh.b[4]))),new d.N("lightingAmbientSH_R2",((e,t)=>(0,n.s)(m,t.lighting.sh.r[5],t.lighting.sh.r[6],t.lighting.sh.r[7],t.lighting.sh.r[8]))),new d.N("lightingAmbientSH_G2",((e,t)=>(0,n.s)(m,t.lighting.sh.g[5],t.lighting.sh.g[6],t.lighting.sh.g[7],t.lighting.sh.g[8]))),new d.N("lightingAmbientSH_B2",((e,t)=>(0,n.s)(m,t.lighting.sh.b[5],t.lighting.sh.b[6],t.lighting.sh.b[7],t.lighting.sh.b[8])))]),r.code.add(u.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`))}const f=(0,a.c)(),m=(0,s.c)();var p=r(72160),g=r(5802),v=r(26322),_=r(27754),x=r(79884),T=r(67498);class b extends x.x{constructor(e,t){super(e,"bool",T.P.Pass,((r,i,o)=>r.setUniform1b(e,t(i,o))))}}var A=r(21437);function E(e){e.constants.add("ambientBoostFactor","float",.4)}function S(e){e.uniforms.add(new A.p("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)))}function w(e,t){const r=e.fragment;switch(e.include(p.K,t),t.pbrMode!==l.f7.Disabled&&e.include(v.T,t),e.include(h,t),e.include(_.e),r.code.add(u.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===l.f7.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),E(r),S(r),(0,g.Pe)(r),r.code.add(u.H`
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
vec3 mainLightDirection = mainLightDirection;
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
    `);break;default:(0,i.Bg)(t.pbrMode);case l.f7.COUNT:}}r(22021),(0,a.c)(),(0,a.c)()},5802:(e,t,r)=>{r.d(t,{F1:()=>s,Pe:()=>n,kR:()=>l});var i=r(172),o=r(21437),a=r(74709);function n(e){e.uniforms.add(new i.J("mainLightDirection",((e,t)=>t.lighting.mainLight.direction)))}function s(e){e.uniforms.add(new i.J("mainLightIntensity",((e,t)=>t.lighting.mainLight.intensity)))}function l(e,t){const r=e.fragment;n(r),s(r),function(e,t){t.useLegacyTerrainShading?e.uniforms.add(new o.p("lightingFixedFactor",((e,t)=>t.lighting.noonFactor*(1-t.lighting.globalFactor)))):e.constants.add("lightingFixedFactor","float",0)}(r,t),r.code.add(a.H`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}},42001:(e,t,r)=>{r.d(t,{l:()=>s});var i=r(5543),o=r(19693),a=r(74709),n=r(98069);function s(e,t){t.hasMultipassTerrain&&(e.fragment.include(i.S),e.fragment.uniforms.add(new n.A("terrainDepthTexture",((e,t)=>t.multipassTerrain.linearDepthTexture))),e.fragment.uniforms.add(new o.A("nearFar",((e,t)=>t.camera.nearFar))),e.fragment.uniforms.add(new o.A("inverseViewport",((e,t)=>t.inverseViewport))),e.fragment.code.add(a.H`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `))}},19419:(e,t,r)=>{r.d(t,{k:()=>s,q:()=>i});var i,o,a=r(74085),n=r(74709);function s(e,t){const r=e.fragment;switch(r.code.add(n.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case i.None:r.code.add(n.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case i.View:r.code.add(n.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case i.WindingOrder:r.code.add(n.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,a.Bg)(t.doubleSidedMode);case i.COUNT:}}(o=i||(i={}))[o.None=0]="None",o[o.View=1]="View",o[o.WindingOrder=2]="WindingOrder",o[o.COUNT=3]="COUNT"},26322:(e,t,r)=>{r.d(t,{T:()=>s});var i=r(74709);function o(e){const t=e.fragment.code;t.add(i.H`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
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
}`)}var a=r(85504),n=r(27754);function s(e,t){const r=e.fragment.code;e.include(n.e),t.pbrMode===a.f7.Water||t.pbrMode===a.f7.WaterOnIntegratedMesh?(r.add(i.H`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),r.add(i.H`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),r.add(i.H`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),r.add(i.H`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),r.add(i.H`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)):t.pbrMode!==a.f7.Normal&&t.pbrMode!==a.f7.Schematic||(e.include(o),r.add(i.H`struct PBRShadingInfo
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
};`),r.add(i.H`float normalDistribution(float NdotH, float roughness)
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
}`),r.add(i.H`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
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
}`))}},85504:(e,t,r)=>{r.d(t,{f7:()=>i,jV:()=>p});var i,o,a=r(72119),n=r(91982),s=r(87449),l=r(70582),c=r(172),d=r(74709),u=r(16374),h=r(98069),f=r(4511),m=r(67498);function p(e,t){const r=e.fragment,o=t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;if(t.pbrMode===i.Normal&&o&&e.include(n.i,t),t.pbrMode!==i.Schematic)if(t.pbrMode!==i.Disabled){if(t.pbrMode===i.Normal){r.code.add(d.H`vec3 mrr;
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
float getBakedOcclusion() { return 1.0; }`)}r(60537),(0,a.f)(0,.6,.2),(o=i||(i={}))[o.Disabled=0]="Disabled",o[o.Normal=1]="Normal",o[o.Schematic=2]="Schematic",o[o.Water=3]="Water",o[o.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",o[o.COUNT=5]="COUNT"},27754:(e,t,r)=>{r.d(t,{e:()=>o});var i=r(74709);function o(e){e.vertex.code.add(i.H`const float PI = 3.141592653589793;`),e.fragment.code.add(i.H`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}},22539:(e,t,r)=>{r.d(t,{XE:()=>p,hb:()=>m}),r(65617);var i=r(20285),o=r(87449),a=r(71250),n=r(15736),s=r(74709),l=r(79884),c=r(67498);class d extends l.x{constructor(e,t,r){super(e,"mat4",c.P.Draw,((r,i,o)=>r.setUniformMatrix4fv(e,t(i,o))),r)}}class u extends l.x{constructor(e,t,r){super(e,"mat4",c.P.Pass,((r,i,o)=>r.setUniformMatrix4fv(e,t(i,o))),r)}}var h=r(98069),f=r(4511);function m(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new u("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),g(e,t))}function p(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new d("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),g(e,t))}function g(e,t){const r=e.fragment;r.include(i.n),r.uniforms.add([...(0,h.J)("shadowMapTex",((e,t)=>t.shadowMap.depthTexture),t.hasWebGL2Context?f.D.None:f.D.Size),new n._("numCascades",((e,t)=>t.shadowMap.numCascades)),new a.N("cascadeDistances",((e,t)=>t.shadowMap.cascadeDistances))]),r.code.add(s.H`
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
  `)}},57806:(e,t,r)=>{r.d(t,{DT:()=>u,NI:()=>l,R5:()=>c,av:()=>s,jF:()=>d});var i=r(70586),o=r(14682),a=r(74709),n=r(19850);function s(e){e.vertex.uniforms.add(new n.c("colorTextureTransformMatrix",(e=>(0,i.pC)(e.colorTextureTransformMatrix)?e.colorTextureTransformMatrix:(0,o.c)()))),e.varyings.add("colorUV","vec2"),e.vertex.code.add(a.H`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function l(e){e.vertex.uniforms.add(new n.c("normalTextureTransformMatrix",(e=>(0,i.pC)(e.normalTextureTransformMatrix)?e.normalTextureTransformMatrix:(0,o.c)()))),e.varyings.add("normalUV","vec2"),e.vertex.code.add(a.H`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function c(e){e.vertex.uniforms.add(new n.c("emissiveTextureTransformMatrix",(e=>(0,i.pC)(e.emissiveTextureTransformMatrix)?e.emissiveTextureTransformMatrix:(0,o.c)()))),e.varyings.add("emissiveUV","vec2"),e.vertex.code.add(a.H`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function d(e){e.vertex.uniforms.add(new n.c("occlusionTextureTransformMatrix",(e=>(0,i.pC)(e.occlusionTextureTransformMatrix)?e.occlusionTextureTransformMatrix:(0,o.c)()))),e.varyings.add("occlusionUV","vec2"),e.vertex.code.add(a.H`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function u(e){e.vertex.uniforms.add(new n.c("metallicRoughnessTextureTransformMatrix",(e=>(0,i.pC)(e.metallicRoughnessTextureTransformMatrix)?e.metallicRoughnessTextureTransformMatrix:(0,o.c)()))),e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.code.add(a.H`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}},82550:(e,t,r)=>{r.d(t,{k:()=>u});var i=r(172),o=r(79884),a=r(67498);class n extends o.x{constructor(e,t,r){super(e,"vec4",a.P.Pass,((r,i,o)=>r.setUniform4fv(e,t(i,o))),r)}}class s extends o.x{constructor(e,t,r){super(e,"float",a.P.Pass,((r,i,o)=>r.setUniform1fv(e,t(i,o))),r)}}var l=r(74709),c=r(19850),d=r(35065);function u(e,t){t.hasVvInstancing&&(t.vvSize||t.vvColor)&&e.attributes.add(d.T.INSTANCEFEATUREATTRIBUTE,"vec4");const r=e.vertex;t.vvSize?(r.uniforms.add(new i.J("vvSizeMinSize",(e=>e.vvSizeMinSize))),r.uniforms.add(new i.J("vvSizeMaxSize",(e=>e.vvSizeMaxSize))),r.uniforms.add(new i.J("vvSizeOffset",(e=>e.vvSizeOffset))),r.uniforms.add(new i.J("vvSizeFactor",(e=>e.vvSizeFactor))),r.uniforms.add(new c.c("vvSymbolRotationMatrix",(e=>e.vvSymbolRotationMatrix))),r.uniforms.add(new i.J("vvSymbolAnchor",(e=>e.vvSymbolAnchor))),r.code.add(l.H`vec3 vvScale(vec4 _featureAttribute) {
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
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(r.constants.add("vvColorNumber","int",8),t.hasVvInstancing&&r.uniforms.add([new s("vvColorValues",(e=>e.vvColorValues),8),new n("vvColorColors",(e=>e.vvColorColors),8)]),r.code.add(l.H`
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
    `)):r.code.add(l.H`vec4 vvColor() { return vec4(1.0); }`)}r(46521),r(65617),r(82791)},96310:(e,t,r)=>{r.d(t,{F:()=>i,b:()=>o});const i=.1,o=.001},85787:(e,t,r)=>{r.d(t,{z:()=>l});var i=r(96310),o=r(74709);function a(e){e.fragment.code.add(o.H`
    #define discardOrAdjustAlpha(color) { if (color.a < ${o.H.float(i.b)}) { discard; } }
  `)}r(79884),r(67498);var n=r(21437),s=r(47026);function l(e,t){!function(e,t,r){const i=e.fragment;switch(t.alphaDiscardMode!==s.JJ.Mask&&t.alphaDiscardMode!==s.JJ.MaskBlend||i.uniforms.add(r),t.alphaDiscardMode){case s.JJ.Blend:return e.include(a);case s.JJ.Opaque:i.code.add(o.H`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case s.JJ.Mask:i.code.add(o.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case s.JJ.MaskBlend:e.fragment.code.add(o.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}(e,t,new n.p("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}},20787:(e,t,r)=>{r.d(t,{G:()=>d,R:()=>h});var i=r(4307),o=r(97323),a=r(98766),n=r(88669),s=r(19693),l=r(71250),c=r(74709);function d(e){e.fragment.uniforms.add(new l.N("projInfo",((e,t)=>function(e){const t=e.camera.projectionMatrix;return 0===t[11]?(0,a.s)(u,2/(e.camera.fullWidth*t[0]),2/(e.camera.fullHeight*t[5]),(1+t[12])/t[0],(1+t[13])/t[5]):(0,a.s)(u,-2/(e.camera.fullWidth*t[0]),-2/(e.camera.fullHeight*t[5]),(1-t[8])/t[0],(1-t[9])/t[5])}(t)))),e.fragment.uniforms.add(new s.A("zScale",((e,t)=>h(t)))),e.fragment.code.add(c.H`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}const u=(0,n.c)();function h(e){return 0===e.camera.projectionMatrix[11]?(0,i.s)(f,0,1):(0,i.s)(f,1,0)}const f=(0,o.a)()},89243:(e,t,r)=>{r.d(t,{$:()=>a,I:()=>n});var i=r(80442),o=r(74709);function a({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(o.H`vec3 dpPlusFrc(vec3 a, vec3 b) {
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
}`):e.add(o.H`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function n(e){return!!(0,i.Z)("force-double-precision-obfuscation")||e.driverTest.doublePrecisionRequiresObfuscation}},90692:(e,t,r)=>{r.d(t,{y:()=>n});var i=r(6206),o=r(74709);function a(e){e.code.add(o.H`vec4 premultiplyAlpha(vec4 v) {
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
}`)}function n(e){e.include(a),e.code.add(o.H`
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
}`)}},93669:(e,t,r)=>{r.d(t,{hY:()=>f,Sv:()=>m,_8:()=>v});var i=r(52138),o=r(10937),a=r(17896),n=r(65617),s=r(70582),l=r(172),c=r(79884),d=r(67498);class u extends c.x{constructor(e,t){super(e,"mat4",d.P.Draw,((r,i,o)=>r.setUniformMatrix4fv(e,t(i,o))))}}var h=r(8319);function f(e,t){t.instancedDoublePrecision?e.constants.add("cameraPosition","vec3",n.Z):e.uniforms.add(new s.B("cameraPosition",((e,t)=>(0,a.s)(g,t.camera.viewInverseTransposeMatrix[3]-e.origin[0],t.camera.viewInverseTransposeMatrix[7]-e.origin[1],t.camera.viewInverseTransposeMatrix[11]-e.origin[2]))))}function m(e,t){if(!t.instancedDoublePrecision)return void e.uniforms.add([new h.g("proj",((e,t)=>t.camera.projectionMatrix)),new u("view",((e,t)=>(0,i.v)(p,t.camera.viewMatrix,e.origin))),new s.B("localOrigin",(e=>e.origin))]);const r=e=>(0,a.s)(g,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]);e.uniforms.add([new h.g("proj",((e,t)=>t.camera.projectionMatrix)),new h.g("view",((e,t)=>(0,i.v)(p,t.camera.viewMatrix,r(t)))),new l.J("localOrigin",((e,t)=>r(t)))])}const p=(0,o.c)(),g=(0,n.c)();function v(e){e.uniforms.add(new h.g("viewNormal",((e,t)=>t.camera.viewInverseTransposeMatrix)))}},87449:(e,t,r)=>{r.d(t,{aU:()=>a,b6:()=>s,o_:()=>o,w_:()=>n});var i=r(74709);const o="Size",a="InvSize";function n(e,t,r=!1,n=0){if(e.hasWebGL2Context){const e=i.H`vec2(textureSize(${t}, ${i.H.int(n)}))`;return r?"(1.0 / "+e+")":e}return r?t+a:t+o}function s(e,t,r,o=null,n=0){if(e.hasWebGL2Context)return i.H`texelFetch(${t}, ivec2(${r}), ${i.H.int(n)})`;let s=i.H`texture2D(${t}, ${r} * `;return s+=o?i.H`(${o}))`:i.H`${t+a})`,s}},98925:(e,t,r)=>{r.d(t,{q:()=>a});var i=r(79884),o=r(67498);class a extends i.x{constructor(e,t){super(e,"vec2",o.P.Draw,((r,i,o,a)=>r.setUniform2fv(e,t(i,o,a))))}}},19693:(e,t,r)=>{r.d(t,{A:()=>a});var i=r(79884),o=r(67498);class a extends i.x{constructor(e,t){super(e,"vec2",o.P.Pass,((r,i,o)=>r.setUniform2fv(e,t(i,o))))}}},70582:(e,t,r)=>{r.d(t,{B:()=>a});var i=r(79884),o=r(67498);class a extends i.x{constructor(e,t){super(e,"vec3",o.P.Draw,((r,i,o,a)=>r.setUniform3fv(e,t(i,o,a))))}}},172:(e,t,r)=>{r.d(t,{J:()=>a});var i=r(79884),o=r(67498);class a extends i.x{constructor(e,t){super(e,"vec3",o.P.Pass,((r,i,o)=>r.setUniform3fv(e,t(i,o))))}}},71250:(e,t,r)=>{r.d(t,{N:()=>a});var i=r(79884),o=r(67498);class a extends i.x{constructor(e,t){super(e,"vec4",o.P.Pass,((r,i,o)=>r.setUniform4fv(e,t(i,o))))}}},21437:(e,t,r)=>{r.d(t,{p:()=>a});var i=r(79884),o=r(67498);class a extends i.x{constructor(e,t){super(e,"float",o.P.Pass,((r,i,o)=>r.setUniform1f(e,t(i,o))))}}},15736:(e,t,r)=>{r.d(t,{_:()=>a});var i=r(79884),o=r(67498);class a extends i.x{constructor(e,t){super(e,"int",o.P.Pass,((r,i,o)=>r.setUniform1i(e,t(i,o))))}}},52114:(e,t,r)=>{r.d(t,{j:()=>a});var i=r(79884),o=r(67498);class a extends i.x{constructor(e,t){super(e,"mat3",o.P.Draw,((r,i,o)=>r.setUniformMatrix3fv(e,t(i,o))))}}},19850:(e,t,r)=>{r.d(t,{c:()=>a});var i=r(79884),o=r(67498);class a extends i.x{constructor(e,t){super(e,"mat3",o.P.Pass,((r,i,o)=>r.setUniformMatrix3fv(e,t(i,o))))}}},8319:(e,t,r)=>{r.d(t,{g:()=>a});var i=r(79884),o=r(67498);class a extends i.x{constructor(e,t){super(e,"mat4",o.P.Pass,((r,i,o)=>r.setUniformMatrix4fv(e,t(i,o))))}}},33680:(e,t,r)=>{r.d(t,{kG:()=>l});var i=r(20102),o=r(92604),a=r(70586);const n=o.Z.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class s{constructor(){this._includedModules=new Map}include(e,t){if(this._includedModules.has(e)){const r=this._includedModules.get(e);if(r!==t){n.error("Trying to include shader module multiple times with different sets of options.");const t=new Set;for(const i of Object.keys(r))r[i]!==e[i]&&t.add(i);for(const i of Object.keys(e))r[i]!==e[i]&&t.add(i);t.forEach((t=>console.error(`  ${t}: current ${r[t]} new ${e[t]}`)))}}else this._includedModules.set(e,t),e(this.builder,t)}}class l extends s{constructor(){super(...arguments),this.vertex=new u,this.fragment=new u,this.attributes=new h,this.varyings=new f,this.extensions=new m,this.constants=new p}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),i=this.varyings.generateSource(),o="vertex"===e?this.vertex:this.fragment,a=o.uniforms.generateSource(),n=o.code.generateSource(),s="vertex"===e?v:g,l=this.constants.generateSource().concat(o.constants.generateSource());return`\n${t.join("\n")}\n\n${s}\n\n${l.join("\n")}\n\n${a.join("\n")}\n\n${r.join("\n")}\n\n${i.join("\n")}\n\n${n.join("\n")}`}generateBind(e,t){const r=new Map;this.vertex.uniforms.entries.forEach((t=>{const i=t.bind[e];(0,a.pC)(i)&&r.set(t.name,i)})),this.fragment.uniforms.entries.forEach((t=>{const i=t.bind[e];(0,a.pC)(i)&&r.set(t.name,i)}));const i=Array.from(r.values()),o=i.length;return(e,r,a)=>{for(let n=0;n<o;++n)i[n](t,e,r,a)}}}class c{constructor(){this._entries=new Map}add(e){if(!Array.isArray(e))return this._add(e);for(const t of e)this._add(t)}get(e){return this._entries.get(e)}_add(e){if((0,a.Wi)(e))n.error(`Trying to add null Uniform from ${(new Error).stack}.`);else{if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new i.Z(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}}generateSource(){return Array.from(this._entries.values()).map((e=>(0,a.pC)(e.arraySize)?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`))}get entries(){return Array.from(this._entries.values())}}class d{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class u extends s{constructor(){super(...arguments),this.uniforms=new c,this.code=new d,this.constants=new p}get builder(){return this}}class h{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`attribute ${e[1]} ${e[0]};`))}}class f{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(){return this._entries.map((e=>`varying ${e[1]} ${e[0]};`))}}class m{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?m.ALLOWLIST_VERTEX:m.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}m.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],m.ALLOWLIST_VERTEX=[];class p{constructor(){this._entries=new Set}add(e,t,r){let i="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":i=p._numberToFloatStr(r);break;case"int":i=p._numberToIntStr(r);break;case"bool":i=r.toString();break;case"vec2":i=`vec2(${p._numberToFloatStr(r[0])},                            ${p._numberToFloatStr(r[1])})`;break;case"vec3":i=`vec3(${p._numberToFloatStr(r[0])},                            ${p._numberToFloatStr(r[1])},                            ${p._numberToFloatStr(r[2])})`;break;case"vec4":i=`vec4(${p._numberToFloatStr(r[0])},                            ${p._numberToFloatStr(r[1])},                            ${p._numberToFloatStr(r[2])},                            ${p._numberToFloatStr(r[3])})`;break;case"ivec2":i=`ivec2(${p._numberToIntStr(r[0])},                             ${p._numberToIntStr(r[1])})`;break;case"ivec3":i=`ivec3(${p._numberToIntStr(r[0])},                             ${p._numberToIntStr(r[1])},                             ${p._numberToIntStr(r[2])})`;break;case"ivec4":i=`ivec4(${p._numberToIntStr(r[0])},                             ${p._numberToIntStr(r[1])},                             ${p._numberToIntStr(r[2])},                             ${p._numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${t}(${Array.prototype.map.call(r,(e=>p._numberToFloatStr(e))).join(", ")})`}return this._entries.add(`const ${t} ${e} = ${i};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const g="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",v="precision highp float;\nprecision highp sampler2D;"},16374:(e,t,r)=>{r.d(t,{F:()=>h,R:()=>u});var i=r(70586),o=r(4307),a=r(97323),n=r(87449),s=r(98925),l=r(4511),c=r(79884),d=r(67498);class u extends c.x{constructor(e,t){super(e,"sampler2D",d.P.Draw,((r,i,o)=>r.bindTexture(e,t(i,o))))}}function h(e,t,r=l.D.None){const c=[new u(e,t)];if(r&l.D.Size){const r=e+n.o_;c.push(new s.q(r,((e,r)=>{const n=t(e,r);return(0,i.pC)(n)?(0,o.s)(f,n.descriptor.width,n.descriptor.height):a.Z})))}if(r&l.D.InvSize){const r=e+n.aU;c.push(new s.q(r,((e,r)=>{const n=t(e,r);return(0,i.pC)(n)?(0,o.s)(f,1/n.descriptor.width,1/n.descriptor.height):a.Z})))}return c}const f=(0,a.a)()},98069:(e,t,r)=>{r.d(t,{A:()=>u,J:()=>h});var i=r(70586),o=r(4307),a=r(97323),n=r(87449),s=r(19693),l=r(4511),c=r(79884),d=r(67498);class u extends c.x{constructor(e,t){super(e,"sampler2D",d.P.Pass,((r,i,o)=>r.bindTexture(e,t(i,o))))}}function h(e,t,r=l.D.None){const c=[new u(e,t)];if(r&l.D.Size){const r=e+n.o_;c.push(new s.A(r,((e,r)=>{const n=t(e,r);return(0,i.pC)(n)?(0,o.s)(f,n.descriptor.width,n.descriptor.height):a.Z})))}if(r&l.D.InvSize){const r=e+n.aU;c.push(new s.A(r,((e,r)=>{const n=t(e,r);return(0,i.pC)(n)?(0,o.s)(f,1/n.descriptor.width,1/n.descriptor.height):a.Z})))}return c}const f=(0,a.a)()},4511:(e,t,r)=>{var i;r.d(t,{D:()=>i}),function(e){e[e.None=0]="None",e[e.Size=1]="Size",e[e.InvSize=2]="InvSize"}(i||(i={}))},79884:(e,t,r)=>{r.d(t,{x:()=>a});var i=r(70586),o=r(67498);class a{constructor(e,t,r,a,n=null){this.name=e,this.type=t,this.arraySize=n,this.bind={[o.P.Pass]:null,[o.P.Draw]:null},(0,i.pC)(r)&&(0,i.pC)(a)&&(this.bind[r]=a)}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}},74709:(e,t,r)=>{r.d(t,{H:()=>o,K:()=>i});class i{}function o(e,...t){let r="";for(let i=0;i<t.length;i++)r+=e[i]+t[i];return r+=e[e.length-1],r}!function(e){e.int=function(e){return Math.round(e).toString()},e.float=function(e){return e.toPrecision(8)}}(o||(o={}))},67498:(e,t,r)=>{var i;r.d(t,{P:()=>i}),function(e){e[e.Pass=0]="Pass",e[e.Draw=1]="Draw"}(i||(i={}))},78869:(e,t,r)=>{r.d(t,{J:()=>i});class i{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}},14589:(e,t,r)=>{r.d(t,{A:()=>a});var i=r(70586),o=r(35371);class a{constructor(e,t,r){this.release=r,this.initializeConfiguration(e,t),this._configuration=t.snapshot(),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}destroy(){this._program=(0,i.M2)(this._program),this._pipeline=this._configuration=null}reload(e){(0,i.M2)(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}get program(){return this._program}get compiled(){return this.program.isCompiled}get key(){return this._configuration.key}get configuration(){return this._configuration}bindPipelineState(e,t=null,r){e.setPipelineState(this.getPipelineState(t,r))}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return o.MX.TRIANGLES}getPipelineState(e,t){return this._pipeline}initializeConfiguration(e,t){}}},51354:(e,t,r)=>{r.d(t,{m:()=>i,o:()=>o});class i{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map((()=>0)):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}}function o(e={}){return(t,r)=>{if(t._parameterNames=t._parameterNames??[],t._parameterNames.push(r),null!=e.constValue)Object.defineProperty(t,r,{get:()=>e.constValue});else{const i=t._parameterNames.length-1,o=e.count||2,a=Math.ceil(Math.log2(o)),n=t._parameterBits??[0];let s=0;for(;n[s]+a>16;)s++,s>=n.length&&n.push(0);t._parameterBits=n;const l=n[s],c=(1<<a)-1<<l;n[s]+=a,Object.defineProperty(t,r,{get(){return this[i]},set(e){if(this[i]!==e&&(this[i]=e,this._keyDirty=!0,this._parameterBits[s]=this._parameterBits[s]&~c|+e<<l&c,"number"!=typeof e&&"boolean"!=typeof e))throw"Configuration value for "+r+" must be boolean or number, got "+typeof e}})}}}},17662:(e,t,r)=>{r.d(t,{c:()=>o});var i=r(99001);class o{constructor(){this.id=(0,i.D)()}unload(){}}},4726:(e,t,r)=>{var i;r.d(t,{U:()=>i}),function(e){e[e.Layer=0]="Layer",e[e.Object=1]="Object",e[e.Geometry=2]="Geometry",e[e.Material=3]="Material",e[e.Texture=4]="Texture",e[e.COUNT=5]="COUNT"}(i||(i={}))},83475:(e,t,r)=>{r.d(t,{i:()=>o});var i=r(35065);const o=new Map([[i.T.POSITION,0],[i.T.NORMAL,1],[i.T.UV0,2],[i.T.COLOR,3],[i.T.SIZE,4],[i.T.TANGENT,4],[i.T.AUXPOS1,5],[i.T.SYMBOLCOLOR,5],[i.T.AUXPOS2,6],[i.T.FEATUREATTRIBUTE,6],[i.T.INSTANCEFEATUREATTRIBUTE,6],[i.T.INSTANCECOLOR,7],[i.T.OBJECTANDLAYERIDCOLOR,7],[i.T.OBJECTANDLAYERIDCOLOR_INSTANCED,7],[i.T.MODEL,8],[i.T.MODELNORMAL,12],[i.T.MODELORIGINHI,11],[i.T.MODELORIGINLO,15]])},60537:(e,t,r)=>{r.d(t,{F:()=>l});var i=r(70586),o=r(95330),a=r(74709),n=r(47026);class s{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}ensureTechnique(e,t,r=this._output){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(r,t),this._technique),this._technique}ensureResources(e){return n.Rw.LOADED}}class l extends s{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId,(e=>this._texture=e)),this._acquire(e.normalTextureId,(e=>this._textureNormal=e)),this._acquire(e.emissiveTextureId,(e=>this._textureEmissive=e)),this._acquire(e.occlusionTextureId,(e=>this._textureOcclusion=e)),this._acquire(e.metallicRoughnessTextureId,(e=>this._textureMetallicRoughness=e))}dispose(){this._texture=(0,i.RY)(this._texture),this._textureNormal=(0,i.RY)(this._textureNormal),this._textureEmissive=(0,i.RY)(this._textureEmissive),this._textureOcclusion=(0,i.RY)(this._textureOcclusion),this._textureMetallicRoughness=(0,i.RY)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?n.Rw.LOADED:n.Rw.LOADING}get textureBindParameters(){return new c((0,i.pC)(this._texture)?this._texture.glTexture:null,(0,i.pC)(this._textureNormal)?this._textureNormal.glTexture:null,(0,i.pC)(this._textureEmissive)?this._textureEmissive.glTexture:null,(0,i.pC)(this._textureOcclusion)?this._textureOcclusion.glTexture:null,(0,i.pC)(this._textureMetallicRoughness)?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){((0,i.Wi)(this._texture)||e!==this._texture.id)&&(this._texture=(0,i.RY)(this._texture),this._textureId=e,this._acquire(this._textureId,(e=>this._texture=e)))}_acquire(e,t){if((0,i.Wi)(e))return void t(null);const r=this._textureRepository.acquire(e);if((0,o.y8)(r))return++this._numLoading,void r.then((e=>{if(this._disposed)return(0,i.RY)(e),void t(null);t(e)})).finally((()=>--this._numLoading));t(r)}}class c extends a.K{constructor(e=null,t=null,r=null,i=null,o=null){super(),this.texture=e,this.textureNormal=t,this.textureEmissive=r,this.textureOcclusion=i,this.textureMetallicRoughness=o}}},82791:(e,t,r)=>{r.d(t,{F5:()=>d,yD:()=>i});var i,o,a=r(70586),n=(r(74709),r(17662)),s=r(4726),l=r(83475),c=r(37782);class d extends n.c{constructor(e,t){super(),this.type=s.U.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=l.i,this._parameters=(0,c.Uf)(e,t),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e,t=!0){(0,c.LO)(this._parameters,e)&&(this.validateParameters(this._parameters),t&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&0!=(this.renderOccluded&e.renderOccludedMask)}isVisibleForOutput(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){(0,a.pC)(this.repository)&&this.repository.materialChanged(this)}}(o=i||(i={}))[o.Occlude=1]="Occlude",o[o.Transparent=2]="Transparent",o[o.OccludeAndTransparent=4]="OccludeAndTransparent",o[o.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",o[o.Opaque=16]="Opaque"},59377:(e,t,r)=>{r.d(t,{$:()=>s});var i=r(70586),o=r(44553),a=r(67498),n=r(49300);class s{constructor(e,t,r){this._context=e,this._locations=r,this._textures=new Map,this._freeTextureUnits=new o.Z({deallocator:null}),this._glProgram=e.programCache.acquire(t.generate("vertex"),t.generate("fragment"),r),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=t.generateBind(a.P.Pass,this),this.bindDraw=t.generateBind(a.P.Draw,this),this._fragmentUniforms=(0,n.hZ)()?t.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get isCompiled(){return this._glProgram.isCompiled}setUniform1b(e,t){this._glProgram.setUniform1i(e,t?1:0)}setUniform1i(e,t){this._glProgram.setUniform1i(e,t)}setUniform1f(e,t){this._glProgram.setUniform1f(e,t)}setUniform2fv(e,t){this._glProgram.setUniform2fv(e,t)}setUniform3fv(e,t){this._glProgram.setUniform3fv(e,t)}setUniform4fv(e,t){this._glProgram.setUniform4fv(e,t)}setUniformMatrix3fv(e,t){this._glProgram.setUniformMatrix3fv(e,t)}setUniformMatrix4fv(e,t){this._glProgram.setUniformMatrix4fv(e,t)}setUniform1fv(e,t){this._glProgram.setUniform1fv(e,t)}setUniform1iv(e,t){this._glProgram.setUniform1iv(e,t)}setUniform2iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform3iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform4iv(e,t){this._glProgram.setUniform4iv(e,t)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if((0,i.Wi)(t)||null==t.glName){const t=this._textures.get(e);return t&&(this._context.bindTexture(null,t.unit),this._freeTextureUnit(t),this._textures.delete(e)),null}let r=this._textures.get(e);return null==r?(r=this._allocTextureUnit(t),this._textures.set(e,r)):r.texture=t,this._context.useProgram(this),this.setUniform1i(e,r.unit),this._context.bindTexture(t,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)})),(0,i.pC)(this._fragmentUniforms)&&this._fragmentUniforms.forEach((e=>{"sampler2D"!==e.type&&"samplerCube"!==e.type||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)}))}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}},93144:(e,t,r)=>{var i;r.d(t,{A:()=>i}),function(e){e[e.Color=0]="Color",e[e.Alpha=1]="Alpha",e[e.FrontFace=2]="FrontFace",e[e.NONE=3]="NONE",e[e.COUNT=4]="COUNT"}(i||(i={}))},11726:(e,t,r)=>{r.d(t,{hu:()=>o,yK:()=>a}),r(97323),r(98766),(0,r(88669).c)();class i{constructor(e){this.message=e}toString(){return`AssertException: ${this.message}`}}function o(e,t){if(!e)throw t=t||"assert",console.log(new Error(t).stack),new i(t)}function a(e,t,r,i){let o,a=(r[0]-e[0])/t[0],n=(i[0]-e[0])/t[0];a>n&&(o=a,a=n,n=o);let s=(r[1]-e[1])/t[1],l=(i[1]-e[1])/t[1];if(s>l&&(o=s,s=l,l=o),a>l||s>n)return!1;s>a&&(a=s),l<n&&(n=l);let c=(r[2]-e[2])/t[2],d=(i[2]-e[2])/t[2];return c>d&&(o=c,c=d,d=o),!(a>d||c>n||(d<n&&(n=d),n<0))}},47026:(e,t,r)=>{var i,o,a,n,s,l,c,d,u,h,f,m;r.d(t,{CE:()=>u,Gv:()=>o,JJ:()=>f,MX:()=>d,Rw:()=>n,Vr:()=>i,hU:()=>s}),function(e){e[e.None=0]="None",e[e.Front=1]="Front",e[e.Back=2]="Back",e[e.COUNT=3]="COUNT"}(i||(i={})),function(e){e[e.Less=0]="Less",e[e.Lequal=1]="Lequal",e[e.COUNT=2]="COUNT"}(o||(o={})),function(e){e[e.BACKGROUND=0]="BACKGROUND",e[e.UPDATE=1]="UPDATE"}(a||(a={})),function(e){e[e.NOT_LOADED=0]="NOT_LOADED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(n||(n={})),function(e){e[e.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",e[e.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(s||(s={})),function(e){e[e.ASYNC=0]="ASYNC",e[e.SYNC=1]="SYNC"}(l||(l={})),function(e){e[e.Highlight=0]="Highlight",e[e.MaskOccludee=1]="MaskOccludee",e[e.COUNT=2]="COUNT"}(c||(c={})),function(e){e[e.Triangle=0]="Triangle",e[e.Point=1]="Point",e[e.Line=2]="Line"}(d||(d={})),function(e){e[e.STRETCH=1]="STRETCH",e[e.PAD=2]="PAD"}(u||(u={})),function(e){e[e.CHANGED=0]="CHANGED",e[e.UNCHANGED=1]="UNCHANGED"}(h||(h={})),function(e){e[e.Blend=0]="Blend",e[e.Opaque=1]="Opaque",e[e.Mask=2]="Mask",e[e.MaskBlend=3]="MaskBlend",e[e.COUNT=4]="COUNT"}(f||(f={})),function(e){e[e.OFF=0]="OFF",e[e.ON=1]="ON"}(m||(m={}))},89917:(e,t,r)=>{r.d(t,{ow:()=>g});var i=r(83475),o=r(35065),a=r(35371),n=r(21968);new n.G(o.T.POSITION,3,a.g.FLOAT,0,12),new n.G(o.T.POSITION,3,a.g.FLOAT,0,20),new n.G(o.T.UV0,2,a.g.FLOAT,12,20),new n.G(o.T.POSITION,3,a.g.FLOAT,0,32),new n.G(o.T.NORMAL,3,a.g.FLOAT,12,32),new n.G(o.T.UV0,2,a.g.FLOAT,24,32),new n.G(o.T.POSITION,3,a.g.FLOAT,0,16),new n.G(o.T.COLOR,4,a.g.UNSIGNED_BYTE,12,16);const s=[new n.G(o.T.POSITION,2,a.g.FLOAT,0,8)],l=[new n.G(o.T.POSITION,2,a.g.FLOAT,0,16),new n.G(o.T.UV0,2,a.g.FLOAT,8,16)];var c=r(92604),d=r(70586),u=r(45762);const h=c.Z.getLogger("esri.views.webgl.VertexArrayObject");class f{constructor(e,t,r,i,o=null){this._context=e,this._locations=t,this._layout=r,this._buffers=i,this._indexBuffer=o,this._glName=null,this._initialized=!1,e.instanceCounter.increment(a._g.VertexArrayObject,this)}get glName(){return this._glName}get context(){return this._context}get vertexBuffers(){return this._buffers}get indexBuffer(){return this._indexBuffer}get size(){return Object.keys(this._buffers).reduce(((e,t)=>e+this._buffers[t].size),(0,d.pC)(this._indexBuffer)?this._indexBuffer.size:0)}get layout(){return this._layout}get locations(){return this._locations}dispose(e=!0){if(this._context){if(this._glName){const e=this._context?.capabilities?.vao;e?(e.deleteVertexArray(this._glName),this._glName=null):h.warn("Leaked WebGL VAO")}if(this._context.getBoundVAO()===this&&this._context.bindVAO(null),e){for(const e in this._buffers)this._buffers[e]?.dispose(),delete this._buffers[e];this._indexBuffer=(0,d.M2)(this._indexBuffer)}this._context.instanceCounter.decrement(a._g.VertexArrayObject,this),this._context=(0,d.wN)(this._context)}else(this._glName||e&&Object.getOwnPropertyNames(this._buffers).length>0)&&h.warn("Leaked WebGL VAO")}initialize(){if(this._initialized)return;const e=this._context.capabilities.vao;if(e){const t=e.createVertexArray();e.bindVertexArray(t),this._bindLayout(),e.bindVertexArray(null),this._glName=t}this._initialized=!0}bind(){this.initialize();const e=this._context.capabilities.vao;e?e.bindVertexArray(this.glName):(this._context.bindVAO(null),this._bindLayout())}_bindLayout(){const{_buffers:e,_layout:t,_indexBuffer:r}=this;e||h.error("Vertex buffer dictionary is empty!");const i=this._context.gl;for(const r in e){const i=e[r];i||h.error("Vertex buffer is uninitialized!");const o=t[r];o||h.error("Vertex element descriptor is empty!"),(0,u.XP)(this._context,this._locations,i,o)}(0,d.pC)(r)&&(this._context.capabilities.vao?i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,r.glName):this._context.bindBuffer(r))}unbind(){this.initialize();const e=this._context.capabilities.vao;e?e.bindVertexArray(null):this._unbindLayout()}_unbindLayout(){const{_buffers:e,_layout:t}=this;e||h.error("Vertex buffer dictionary is empty!");for(const r in e){const i=e[r];i||h.error("Vertex buffer is uninitialized!");const o=t[r];(0,u.UF)(this._context,this._locations,i,o)}(0,d.pC)(this._indexBuffer)&&this._context.unbindBuffer(this._indexBuffer.bufferType)}}class m extends f{}var p=r(63587);function g(e,t=s,r=i.i,o=-1,n=1){let c=null;return c=t===l?new Float32Array([o,o,0,0,n,o,1,0,o,n,0,1,n,n,1,1]):new Float32Array([o,o,n,o,o,n,n,n]),new m(e,r,{geometry:t},{geometry:p.f.createVertex(e,a.l1.STATIC_DRAW,c)})}r(75656)},37782:(e,t,r)=>{r.d(t,{FZ:()=>R,Uf:()=>w,Bw:()=>g,LO:()=>C,Hx:()=>S});var i=r(67676),o=r(22021),a=r(70586),n=r(17896),s=r(65617),l=r(60437),c=r(47026);function d(e,t){return Math.max((0,o.t7)(e*t.scale,e,t.factor),function(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}(e,t))}r(64822),(0,o.Vl)(10),(0,o.Vl)(12),(0,o.Vl)(70),(0,o.Vl)(40);const u={scale:0,factor:0,minPixelSize:0,paddingPixels:0};var h=r(11726),f=r(35065),m=(r(52138),r(13598));r(9820),new Float64Array(3),new Float32Array(6),(0,m.c)();const p=(0,l.Ue)();function g(e,t,r,i,o,n,s){if(!function(e){return!!(0,a.pC)(e)&&!e.visible}(t))if(e.boundingInfo){(0,h.hu)(e.primitiveType===c.MX.Triangle);const t=r.tolerance;_(e.boundingInfo,i,o,t,n,s)}else{const t=e.indices.get(f.T.POSITION),r=e.vertexAttributes.get(f.T.POSITION);T(i,o,0,t.length/3,t,r,void 0,n,s)}}const v=(0,s.c)();function _(e,t,r,i,o,s){if((0,a.Wi)(e))return;const c=function(e,t,r){return(0,n.s)(r,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}(t,r,v);if((0,l.op)(p,e.getBBMin()),(0,l.Tn)(p,e.getBBMax()),(0,a.pC)(o)&&o.applyToAabb(p),function(e,t,r,i){return function(e,t,r,i,o){const a=(e[0]-i-t[0])*r[0],n=(e[3]+i-t[0])*r[0];let s=Math.min(a,n),l=Math.max(a,n);const c=(e[1]-i-t[1])*r[1],d=(e[4]+i-t[1])*r[1];if(l=Math.min(l,Math.max(c,d)),l<0)return!1;if(s=Math.max(s,Math.min(c,d)),s>l)return!1;const u=(e[2]-i-t[2])*r[2],h=(e[5]+i-t[2])*r[2];return l=Math.min(l,Math.max(u,h)),!(l<0)&&(s=Math.max(s,Math.min(u,h)),!(s>l)&&s<1/0)}(e,t,r,i)}(p,t,c,i)){const{primitiveIndices:a,indices:n,position:l}=e,c=a?a.length:n.length/3;if(c>M){const a=e.getChildren();if(void 0!==a){for(let e=0;e<8;++e)void 0!==a[e]&&_(a[e],t,r,i,o,s);return}}T(t,r,0,c,n,l,a,o,s)}}const x=(0,s.c)();function T(e,t,r,i,o,n,s,l,c){if(s)return function(e,t,r,i,o,n,s,l,c){const d=n.data,u=n.stride||n.size,h=e[0],f=e[1],m=e[2],p=t[0]-h,g=t[1]-f,v=t[2]-m;for(let e=r;e<i;++e){const t=s[e];let r=3*t,i=u*o[r++],n=d[i++],_=d[i++],T=d[i];i=u*o[r++];let b=d[i++],A=d[i++],S=d[i];i=u*o[r];let w=d[i++],C=d[i++],y=d[i];(0,a.pC)(l)&&([n,_,T]=l.applyToVertex(n,_,T,e),[b,A,S]=l.applyToVertex(b,A,S,e),[w,C,y]=l.applyToVertex(w,C,y,e));const R=b-n,M=A-_,O=S-T,N=w-n,P=C-_,I=y-T,L=g*I-P*v,D=v*N-I*p,F=p*P-N*g,H=R*L+M*D+O*F;if(Math.abs(H)<=Number.EPSILON)continue;const B=h-n,U=f-_,z=m-T,V=B*L+U*D+z*F;if(H>0){if(V<0||V>H)continue}else if(V>0||V<H)continue;const G=U*O-M*z,W=z*R-O*B,k=B*M-R*U,$=p*G+g*W+v*k;if(H>0){if($<0||V+$>H)continue}else if($>0||V+$<H)continue;const q=(N*G+P*W+I*k)/H;q>=0&&c(q,E(R,M,O,N,P,I,x),t,!1)}}(e,t,r,i,o,n,s,l,c);const d=n.data,u=n.stride||n.size,h=e[0],f=e[1],m=e[2],p=t[0]-h,g=t[1]-f,v=t[2]-m;for(let e=r,t=3*r;e<i;++e){let r=u*o[t++],i=d[r++],n=d[r++],s=d[r];r=u*o[t++];let _=d[r++],T=d[r++],b=d[r];r=u*o[t++];let A=d[r++],S=d[r++],w=d[r];(0,a.pC)(l)&&([i,n,s]=l.applyToVertex(i,n,s,e),[_,T,b]=l.applyToVertex(_,T,b,e),[A,S,w]=l.applyToVertex(A,S,w,e));const C=_-i,y=T-n,R=b-s,M=A-i,O=S-n,N=w-s,P=g*N-O*v,I=v*M-N*p,L=p*O-M*g,D=C*P+y*I+R*L;if(Math.abs(D)<=Number.EPSILON)continue;const F=h-i,H=f-n,B=m-s,U=F*P+H*I+B*L;if(D>0){if(U<0||U>D)continue}else if(U>0||U<D)continue;const z=H*R-y*B,V=B*C-R*F,G=F*y-C*H,W=p*z+g*V+v*G;if(D>0){if(W<0||U+W>D)continue}else if(W>0||U+W<D)continue;const k=(M*z+O*V+N*G)/D;k>=0&&c(k,E(C,y,R,M,O,N,x),e,!1)}}const b=(0,s.c)(),A=(0,s.c)();function E(e,t,r,i,o,a,s){return(0,n.s)(b,e,t,r),(0,n.s)(A,i,o,a),(0,n.f)(s,b,A),(0,n.n)(s,s),s}function S(e,t,r,i,n){let s=(r.screenLength||0)*e.pixelRatio;(0,a.pC)(n)&&(s=function(e,t,r,i){return d(e,function(e,t,r){const i=r.parameters,o=r.paddingPixelsOverride;return u.scale=Math.min(i.divisor/(t-i.offset),1),u.factor=function(e){return Math.abs(e*e*e)}(e),u.minPixelSize=i.minPixelSize,u.paddingPixels=o,u}(t,r,i))}(s,i,t,n));const l=s*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return(0,o.uZ)(l*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}function w(e,t){const r=t?w(t):{};for(const t in e){let i=e[t];i&&i.forEach&&(i=y(i)),null==i&&t in r||(r[t]=i)}return r}function C(e,t){let r=!1;for(const o in t){const a=t[o];void 0!==a&&(Array.isArray(a)?null===e[o]?(e[o]=a.slice(),r=!0):(0,i.Vx)(e[o],a)&&(r=!0):e[o]!==a&&(r=!0,e[o]=a))}return r}function y(e){const t=[];return e.forEach((e=>t.push(e))),t}const R={multiply:1,ignore:2,replace:3,tint:4},M=1e3},63587:(e,t,r)=>{r.d(t,{f:()=>u});var i=r(67676),o=r(92604),a=r(70586),n=r(1533),s=r(49300),l=r(54738),c=r(35371);const d=o.Z.getLogger("esri.views.webgl.BufferObject");class u{constructor(e,t,r,i){this._context=e,this.bufferType=t,this.usage=r,this._glName=null,this._size=-1,this._indexType=void 0,e.instanceCounter.increment(c._g.BufferObject,this),this._glName=this._context.gl.createBuffer(),(0,s.zu)(this._context.gl),i&&this.setData(i)}static createIndex(e,t,r){return new u(e,c.w0.ELEMENT_ARRAY_BUFFER,t,r)}static createVertex(e,t,r){return new u(e,c.w0.ARRAY_BUFFER,t,r)}static createUniform(e,t,r){if(e.type!==l.zO.WEBGL2)throw new Error("Uniform buffers are supported in WebGL2 only!");return new u(e,c.w0.UNIFORM_BUFFER,t,r)}static createPixelPack(e,t=c.l1.STREAM_READ,r){if(e.type!==l.zO.WEBGL2)throw new Error("Pixel pack buffers are supported in WebGL2 only!");const i=new u(e,c.w0.PIXEL_PACK_BUFFER,t);return r&&i.setSize(r),i}static createPixelUnpack(e,t=c.l1.STREAM_DRAW,r){if(e.type!==l.zO.WEBGL2)throw new Error("Pixel unpack buffers are supported in WebGL2 only!");return new u(e,c.w0.PIXEL_UNPACK_BUFFER,t,r)}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get byteSize(){return this.bufferType===c.w0.ELEMENT_ARRAY_BUFFER?this._indexType===c.g.UNSIGNED_INT?4*this._size:2*this._size:this._size}get _isVAOAware(){return this.bufferType===c.w0.ELEMENT_ARRAY_BUFFER||this.bufferType===c.w0.ARRAY_BUFFER}dispose(){this._context?.gl?(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement(c._g.BufferObject,this),this._context=(0,a.wN)(this._context)):this._glName&&d.warn("Leaked WebGL buffer object")}setSize(e,t=null){if(e<=0&&d.error("Buffer size needs to be positive!"),this.bufferType===c.w0.ELEMENT_ARRAY_BUFFER&&(0,a.pC)(t))switch(this._indexType=t,t){case c.g.UNSIGNED_SHORT:e*=2;break;case c.g.UNSIGNED_INT:e*=4}this._setBufferData(e)}setData(e){if(!e)return;let t=e.byteLength;this.bufferType===c.w0.ELEMENT_ARRAY_BUFFER&&((0,n.Uc)(e)&&(t/=2,this._indexType=c.g.UNSIGNED_SHORT),(0,n.ZY)(e)&&(t/=4,this._indexType=c.g.UNSIGNED_INT)),this._setBufferData(t,e)}_setBufferData(e,t=null){this._size=e;const r=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const i=this._context.gl;(0,a.pC)(t)?i.bufferData(this.bufferType,t,this.usage):i.bufferData(this.bufferType,e,this.usage),(0,s.zu)(i),this._isVAOAware&&this._context.bindVAO(r)}setSubData(e,t,r,i){if(!e)return;(t<0||t>=this._size)&&d.error("offset is out of range!"),r>=i&&d.error("end must be bigger than start!"),t+(i-r)>this._size&&d.error("An attempt to write beyond the end of the buffer!");const o=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const a=this._context.gl;if(this._context.type===l.zO.WEBGL2)a.bufferSubData(this.bufferType,t*e.BYTES_PER_ELEMENT,e,r,i-r);else{const o=0===r&&i===e.length?e:e.subarray(r,i);a.bufferSubData(this.bufferType,t*e.BYTES_PER_ELEMENT,o)}(0,s.zu)(a),this._isVAOAware&&this._context.bindVAO(o)}getSubData(e,t=0,r,o){if(this._context.type!==l.zO.WEBGL2)return void d.error("Get buffer subdata is supported in WebGL2 only!");if(r<0||o<0)return void d.error("Problem getting subdata: offset and length were less than zero!");const a=function(e){return(0,i.zG)(e)}(e)?e.BYTES_PER_ELEMENT:1;if(a*((r??0)+(o??0))>e.byteLength)return void d.error("Problem getting subdata: offset and length exceeded destination size!");t+a*(o??0)>this.byteSize&&d.warn("Potential problem getting subdata: requested data exceeds buffer size!");const n=this._context.gl;this._context.bindBuffer(this,c.w0.COPY_READ_BUFFER),n.getBufferSubData(c.w0.COPY_READ_BUFFER,t,e,r,o),this._context.unbindBuffer(c.w0.COPY_READ_BUFFER)}async getSubDataAsync(e,t=0,r,i){this._context.type===l.zO.WEBGL2?(await this._context.clientWaitAsync(),this.getSubData(e,t,r,i)):d.error("Get buffer subdata is supported in WebGL2 only!")}}},33696:(e,t,r)=>{r.d(t,{X:()=>h});var i=r(92604),o=r(70586),a=r(63587),n=r(49300),s=r(54738),l=r(35371);class c{constructor(e,t){this._context=e,this._desc=t,this.type="renderbuffer",this._context.instanceCounter.increment(l._g.Renderbuffer,this);const r=this._context.gl;this.glName=r.createRenderbuffer(),this._context.bindRenderbuffer(this);const{width:i,height:o,internalFormat:a,multisampled:n}=t;if(n){if(this._context.type!==s.zO.WEBGL2)throw new Error("Multisampled renderbuffers are not supported in WebGL1!");r.renderbufferStorageMultisample(r.RENDERBUFFER,this.samples,a,i,o)}else r.renderbufferStorage(r.RENDERBUFFER,a,i,o)}get descriptor(){return this._desc}get samples(){const e=this._desc.samples,t=this._context.parameters.maxSamples;return e?Math.min(e,t):t}resize(e,t){const r=this._desc;if(r.width===e&&r.height===t)return;r.width=e,r.height=t;const i=this._context.gl;this._context.bindRenderbuffer(this),r.multisampled?i.renderbufferStorageMultisample(i.RENDERBUFFER,this.samples,r.internalFormat,r.width,r.height):i.renderbufferStorage(i.RENDERBUFFER,r.internalFormat,r.width,r.height)}dispose(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(l._g.Renderbuffer,this),this._context=(0,o.wN)(this._context))}}var d=r(75656),u=r(45762);class h{constructor(e,t,r=null,i=null){if(this._context=e,this._glName=null,this._depthAttachment=null,this._stencilAttachment=null,this._colorAttachments=new Map,this._depthStencilTexture=null,this._initialized=!1,this._desc={...t},e.instanceCounter.increment(l._g.FramebufferObject,this),(0,o.pC)(r)){Array.isArray(r)||(r=[r]);for(let e=0;e<r.length;++e){const t=r[e],i=l.VY.COLOR_ATTACHMENT0+e;let o;p(t)?(f(t)?(o=t.descriptor,this._colorAttachments.set(i,t)):(o=t,this._colorAttachments.set(i,new d.x(this._context,o))),g(o,this._desc)):(m(t)?(o=t.descriptor,this._colorAttachments.set(i,t)):(o=t,this._colorAttachments.set(i,new c(this._context,o))),v(o,this._desc)),this._validateColorAttachmentPoint(i)}}if((0,o.pC)(i)){let e,t;if(p(i))this._context.capabilities.depthTexture||console.error("Setting the depth/stencil texture as an attachment requires WEBGL_depth_texture or WebGL2"),f(i)?(t=i.descriptor,this._depthStencilTexture=i):(t=i,this._depthStencilTexture=new d.x(this._context,t)),g(t,this._desc);else{m(i)?(t=i.descriptor,e=i):(t=i,e=new c(this._context,t));const r=this._desc.depthStencilTarget??l.OU.DEPTH_STENCIL_RENDER_BUFFER;r===l.OU.STENCIL_RENDER_BUFFER?this._stencilAttachment=e:r===l.OU.DEPTH_RENDER_BUFFER||r===l.OU.DEPTH_STENCIL_RENDER_BUFFER?this._depthAttachment=e:console.error('If a Renderbuffer is provided, "depthStencilTarget" must be one of STENCIL_RENDER_BUFFER, DEPTH_RENDER_BUFFER or DEPTH_STENCIL_RENDER_BUFFER'),this._desc.depthStencilTarget=r,v(t,this._desc)}}}dispose(){if(!this._desc)return;const e=this._context.getBoundFramebufferObject();this._disposeColorAttachments(),this._disposeDepthStencilAttachments(),this._glName&&(this._context.gl.deleteFramebuffer(this._glName),this._glName=null),this._context.bindFramebuffer(e),this._context.instanceCounter.decrement(l._g.FramebufferObject,this),this._desc=null}get glName(){return this._glName}get descriptor(){return this._desc}get colorTexture(){const e=this._colorAttachments.get(l.VY.COLOR_ATTACHMENT0);return e&&f(e)?e:null}get colorAttachment(){return this._colorAttachments.get(l.VY.COLOR_ATTACHMENT0)}get depthStencilAttachment(){return this._depthStencilTexture||this._depthAttachment||this._stencilAttachment}get depthStencilTexture(){return this._depthStencilTexture}get width(){return this._desc.width??0}get height(){return this._desc.height??0}get gpuMemoryUsage(){return[...this._colorAttachments].reduce(((e,[t,r])=>e+(0,u.un)(r)),0)+(0,u.un)(this.depthStencilAttachment)}getColorTexture(e){const t=this._colorAttachments.get(e);return t&&f(t)?t:null}attachColorTexture(e,t=l.VY.COLOR_ATTACHMENT0){e&&(this._validateColorAttachmentPoint(t),g(e.descriptor,this._desc),this._disposeColorAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(e.glName,t)),this._colorAttachments.set(t,e))}detachColorTexture(e=l.VY.COLOR_ATTACHMENT0){const t=this._colorAttachments.get(e);if(f(t)){const r=t;return this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e)),this._colorAttachments.delete(e),r}}setColorTextureTarget(e,t=l.VY.COLOR_ATTACHMENT0){const r=this._colorAttachments.get(t);f(r)&&this._framebufferTexture2D(r.glName,t,e)}attachDepthStencilTexture(e){if((0,o.Wi)(e))return;const t=e.descriptor;t.pixelFormat!==l.VI.DEPTH_STENCIL&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),t.dataType!==l.Br.UNSIGNED_INT_24_8&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!"),g(t,this._desc),this._desc.depthStencilTarget&&this._desc.depthStencilTarget!==l.OU.DEPTH_STENCIL_TEXTURE&&(this._desc.depthStencilTarget=l.OU.DEPTH_STENCIL_TEXTURE),this._disposeDepthStencilAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(e.glName,l.Lu)),this._depthStencilTexture=e}detachDepthStencilTexture(){const e=this._depthStencilTexture;return e&&this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,l.Lu)),this._depthStencilTexture=null,e}attachDepthStencilBuffer(e){if((0,o.Wi)(e))return;const t=e.descriptor;if(t.internalFormat!==l.Tg.DEPTH_STENCIL&&t.internalFormat!==l.Tg.DEPTH_COMPONENT16&&console.error("Depth/Stencil buffer must have correct internalFormat"),v(t,this._desc),this._disposeDepthStencilAttachments(),this._desc.depthStencilTarget=t.internalFormat===l.Tg.DEPTH_STENCIL?l.OU.DEPTH_STENCIL_RENDER_BUFFER:l.OU.DEPTH_RENDER_BUFFER,this._initialized){this._context.bindFramebuffer(this);const t=this._context.gl,r=this._desc.depthStencilTarget===l.OU.DEPTH_RENDER_BUFFER?t.DEPTH_ATTACHMENT:t.DEPTH_STENCIL_ATTACHMENT;t.framebufferRenderbuffer(l.qi.FRAMEBUFFER,r,t.RENDERBUFFER,e.glName)}this._depthAttachment=e}detachDepthStencilBuffer(){const e=this._context.gl,t=this._depthAttachment;if(t&&this._initialized){this._context.bindFramebuffer(this);const t=this._desc.depthStencilTarget===l.OU.DEPTH_RENDER_BUFFER?e.DEPTH_ATTACHMENT:e.DEPTH_STENCIL_ATTACHMENT;e.framebufferRenderbuffer(l.qi.FRAMEBUFFER,t,e.RENDERBUFFER,null)}return this._depthAttachment=null,t}detachAll(){this._colorAttachments.forEach(((e,t)=>this._detachColorAttachment(t))),this.detachDepthStencilBuffer(),this.detachDepthStencilTexture()}copyToTexture(e,t,r,i,o,a,n){(e<0||t<0||o<0||a<0)&&console.error("Offsets cannot be negative!"),(r<=0||i<=0)&&console.error("Copy width and height must be greater than zero!");const s=this._desc,c=n.descriptor;n.descriptor.target!==l.No.TEXTURE_2D&&console.error("Texture target must be TEXTURE_2D!"),(null==s?.width||null==s?.height||null==c?.width||null==c?.height||e+r>s.width||t+i>s.height||o+r>c.width||a+i>c.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");const u=this._context,h=u.bindTexture(n,d.x.TEXTURE_UNIT_FOR_UPDATES);u.setActiveTexture(d.x.TEXTURE_UNIT_FOR_UPDATES),u.bindFramebuffer(this),u.gl.copyTexSubImage2D(l.No.TEXTURE_2D,0,o,a,e,t,r,i),u.bindTexture(h,d.x.TEXTURE_UNIT_FOR_UPDATES)}readPixels(e,t,r,i,o,a,n){(r<=0||i<=0)&&console.error("Copy width and height must be greater than zero!"),n||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this),this._context.gl.readPixels(e,t,r,i,o,a,n)}async readPixelsAsync(e,t,r,i,o,c,d){if(this._context.type!==s.zO.WEBGL2)return(0,n.hZ)()&&console.warn("Attempting to read pixels using pixel buffer object without WebGL2"),void this.readPixels(e,t,r,i,o,c,d);const u=this._context.gl,h=a.f.createPixelPack(this._context,l.l1.STREAM_READ,d.byteLength);this._context.bindBuffer(h),this._context.bindFramebuffer(this),u.readPixels(e,t,r,i,o,c,0),this._context.unbindBuffer(l.w0.PIXEL_PACK_BUFFER),await h.getSubDataAsync(d),h.dispose()}resize(e,t){const r=this._desc;if(r.width!==e||r.height!==t){if(!this._initialized)return r.width=e,r.height=t,this._colorAttachments.forEach((r=>{r&&r.resize(e,t)})),void(this._depthStencilTexture&&this._depthStencilTexture.resize(e,t));r.width=e,r.height=t,this._colorAttachments.forEach((r=>{r&&r.resize(e,t)})),null!=this._depthStencilTexture?this._depthStencilTexture.resize(e,t):(this._depthAttachment||this._stencilAttachment)&&(this._depthAttachment&&this._depthAttachment.resize(e,t),this._stencilAttachment&&this._stencilAttachment.resize(e,t)),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1}}initializeAndBind(e=l.qi.FRAMEBUFFER){const t=this._context.gl;if(this._initialized)return void t.bindFramebuffer(e,this.glName);this._glName&&t.deleteFramebuffer(this._glName);const r=this._context,i=t.createFramebuffer(),o=this._desc,a=o.colorTarget??l.Lm.RENDER_BUFFER,s=o.width??1,u=o.height??1;if(t.bindFramebuffer(e,i),0===this._colorAttachments.size)if(a===l.Lm.TEXTURE||a===l.Lm.CUBEMAP)this._colorAttachments.set(l.VY.COLOR_ATTACHMENT0,function(e,t,r){return new d.x(e,{target:r,pixelFormat:l.VI.RGBA,dataType:l.Br.UNSIGNED_BYTE,samplingMode:l.cw.NEAREST,wrapMode:l.e8.CLAMP_TO_EDGE,width:t.width,height:t.height})}(r,o,this.descriptor.colorTarget===l.Lm.CUBEMAP?l.No.TEXTURE_CUBE_MAP:l.No.TEXTURE_2D));else{const e=new c(r,{internalFormat:l.lP.RGBA4,width:s,height:u});this._colorAttachments.set(l.VY.COLOR_ATTACHMENT0,e)}this._colorAttachments.forEach(((r,i)=>{r&&(f(r)?this._framebufferTexture2D(r.glName,i,_(r),e):t.framebufferRenderbuffer(e,i,t.RENDERBUFFER,r.glName))}));const h=o.depthStencilTarget??l.OU.NONE;switch(h){case l.OU.DEPTH_RENDER_BUFFER:case l.OU.DEPTH_STENCIL_RENDER_BUFFER:{this._depthAttachment||(this._depthAttachment=new c(r,{internalFormat:o.depthStencilTarget===l.OU.DEPTH_RENDER_BUFFER?l.Tg.DEPTH_COMPONENT16:l.Tg.DEPTH_STENCIL,width:s,height:u}));const i=h===l.OU.DEPTH_RENDER_BUFFER?t.DEPTH_ATTACHMENT:t.DEPTH_STENCIL_ATTACHMENT;t.framebufferRenderbuffer(e,i,t.RENDERBUFFER,this._depthAttachment.glName);break}case l.OU.STENCIL_RENDER_BUFFER:this._stencilAttachment||(this._stencilAttachment=new c(r,{internalFormat:l.Tg.STENCIL_INDEX8,width:s,height:u})),t.framebufferRenderbuffer(e,t.STENCIL_ATTACHMENT,t.RENDERBUFFER,this._stencilAttachment.glName);break;case l.OU.DEPTH_STENCIL_TEXTURE:if(!this._depthStencilTexture){r.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!");const e={target:l.No.TEXTURE_2D,pixelFormat:l.VI.DEPTH_STENCIL,dataType:l.Br.UNSIGNED_INT_24_8,samplingMode:l.cw.NEAREST,wrapMode:l.e8.CLAMP_TO_EDGE,width:s,height:u};this._depthStencilTexture=new d.x(r,e)}this._framebufferTexture2D(this._depthStencilTexture.glName,t.DEPTH_STENCIL_ATTACHMENT,_(this._depthStencilTexture),e)}(0,n.hZ)()&&t.checkFramebufferStatus(e)!==t.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!"),this._glName=i,this._initialized=!0}_framebufferTexture2D(e,t=l.VY.COLOR_ATTACHMENT0,r=l.No.TEXTURE_2D,i=l.qi.FRAMEBUFFER,o=0){this._context.gl.framebufferTexture2D(i,t,r,e,o)}_detachColorAttachment(e){(0,n.hZ)()&&console.warn("Detaching an FBO attachment can be a slow due to invalidating framebuffer completeness!");const t=this._context.gl,r=this._colorAttachments.get(e);return f(r)?this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e)):this._initialized&&(this._context.bindFramebuffer(this),t.framebufferRenderbuffer(l.qi.FRAMEBUFFER,e,t.RENDERBUFFER,null)),this._colorAttachments.delete(e),r}_disposeColorAttachments(){this._colorAttachments.forEach(((e,t)=>{this._detachColorAttachment(t),e.dispose()})),this._colorAttachments.clear()}_disposeDepthStencilAttachments(){const e=this._context.gl;if(this._depthAttachment){if(this._initialized){this._context.bindFramebuffer(this);const t=this._desc.depthStencilTarget===l.OU.DEPTH_RENDER_BUFFER?e.DEPTH_ATTACHMENT:e.DEPTH_STENCIL_ATTACHMENT;e.framebufferRenderbuffer(l.qi.FRAMEBUFFER,t,e.RENDERBUFFER,null)}this._depthAttachment.dispose(),this._depthAttachment=null}this._stencilAttachment&&(this._initialized&&(this._context.bindFramebuffer(this),e.framebufferRenderbuffer(l.qi.FRAMEBUFFER,e.STENCIL_ATTACHMENT,e.RENDERBUFFER,null)),this._stencilAttachment.dispose(),this._stencilAttachment=null),this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e.DEPTH_STENCIL_ATTACHMENT)),this._depthStencilTexture.dispose(),this._depthStencilTexture=null)}_validateColorAttachmentPoint(e){if(-1===h._MAX_COLOR_ATTACHMENTS){const e=this._context.capabilities.drawBuffers;if(e){const t=this._context.gl;h._MAX_COLOR_ATTACHMENTS=t.getParameter(e.MAX_COLOR_ATTACHMENTS)}else h._MAX_COLOR_ATTACHMENTS=1}const t=e-l.VY.COLOR_ATTACHMENT0;t+1>h._MAX_COLOR_ATTACHMENTS&&i.Z.getLogger("esri.views.webgl.FrameBufferObject").error("esri.FrameBufferObject",`illegal attachment point for color attachment: ${t+1}. Implementation supports up to ${h._MAX_COLOR_ATTACHMENTS} color attachments`)}}function f(e){return null!=e&&"type"in e&&"texture"===e.type}function m(e){return null!=e&&"type"in e&&"renderbuffer"===e.type}function p(e){return f(e)||null!=e&&"pixelFormat"in e}function g(e,t){e.target!==l.No.TEXTURE_2D&&e.target!==l.No.TEXTURE_CUBE_MAP&&console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"),void 0!==t.width&&t.width>=0&&void 0!==t.height&&t.height>=0?t.width===e.width&&t.height===e.height||console.error("Color attachment texture must match the framebuffer's!"):(t.width=e.width,t.height=e.height)}function v(e,t){void 0!==t.width&&t.width>=0&&void 0!==t.height&&t.height>=0?t.width===e.width&&t.height===e.height||console.error("Renderbuffer dimensions must match the framebuffer's!"):(t.width=e.width,t.height=e.height)}function _(e){return e.descriptor.target===l.No.TEXTURE_CUBE_MAP?l.No.TEXTURE_CUBE_MAP_POSITIVE_X:l.No.TEXTURE_2D}h._MAX_COLOR_ATTACHMENTS=-1},75656:(e,t,r)=>{r.d(t,{x:()=>d}),r(80442);var i=r(22021),o=r(70586),a=r(49300),n=r(54738),s=r(35371),l=r(46314);const c={target:s.No.TEXTURE_2D,samplingMode:s.cw.LINEAR,wrapMode:s.e8.REPEAT,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1,isImmutable:!1};class d{constructor(e,t,r=null){this._context=e,this.type="texture",this._glName=null,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._wasImmutablyAllocated=!1,e.instanceCounter.increment(s._g.Texture,this),this._descriptor={...c,...t};for(const e in c)void 0===this._descriptor[e]&&(this._descriptor[e]=c[e]);if(e.type!==n.zO.WEBGL2&&(this._descriptor.isImmutable&&(this._descriptor.isImmutable=!1),f(this._descriptor.target)))throw new Error("3D and array textures are not supported in WebGL1");this._descriptor.target===s.No.TEXTURE_CUBE_MAP?this._setDataCubeMap(r):this.setData(r)}get glName(){return this._glName}get descriptor(){return this._descriptor}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._context.gl&&this._glName&&(this._context.unbindTexture(this),this._context.gl.deleteTexture(this._glName),this._glName=null,this._context.instanceCounter.decrement(s._g.Texture,this))}release(){this.dispose()}resize(e,t){const r=this._descriptor;if(r.width!==e||r.height!==t){if(this._wasImmutablyAllocated)throw new Error("Immutable textures can't be resized!");r.width=e,r.height=t,this._descriptor.target===s.No.TEXTURE_CUBE_MAP?this._setDataCubeMap(null):this.setData(null)}}_setDataCubeMap(e=null){for(let t=s.No.TEXTURE_CUBE_MAP_POSITIVE_X;t<=s.No.TEXTURE_CUBE_MAP_NEGATIVE_Z;t++)this._setData(e,t)}setData(e){this._setData(e)}_setData(e,t){if(!this._context||!this._context.gl)return;const r=this._context.gl;this._glName||(this._glName=r.createTexture()),void 0===e&&(e=null);const i=this._descriptor,n=t??i.target,c=f(n);null===e&&(i.width=i.width||4,i.height=i.height||4,c&&(i.depth=i.depth??1));const p=this._context.bindTexture(this,d.TEXTURE_UNIT_FOR_UPDATES);this._context.setActiveTexture(d.TEXTURE_UNIT_FOR_UPDATES),d._validateTexture(this._context,i),this._configurePixelStorage(),(0,a.zu)(r);const g=i.pixelFormat;let v=i.internalFormat??this._deriveInternalFormat(g,i.dataType);if(h(e)){let t=e.width,o=e.height;const s=1;e instanceof HTMLVideoElement&&(t=e.videoWidth,o=e.videoHeight),i.width&&i.height,c&&i.depth,i.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(n,v,i.hasMipmap,t,o,s),this._texImage(n,0,v,t,o,s,e),(0,a.zu)(r),i.hasMipmap&&this.generateMipmap(),void 0===i.width&&(i.width=t),void 0===i.height&&(i.height=o),c&&void 0===i.depth&&(i.depth=s)}else{const{width:t,height:d,depth:h}=i;if(null==t||null==d)throw new Error("Width and height must be specified!");if(c&&null==h)throw new Error("Depth must be specified!");if(i.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(n,v,i.hasMipmap,t,d,h),r.DEPTH24_STENCIL8&&v===r.DEPTH_STENCIL&&(v=r.DEPTH24_STENCIL8),u(e)){const o=e.levels,a=m(n,t,d,h),c=Math.min(a-1,o.length-1);(0,l.Z)(r)?r.texParameteri(i.target,r.TEXTURE_MAX_LEVEL,c):i.hasMipmap=i.hasMipmap&&a===o.length;const u=v;if(!function(e){return e in s.q_}(u))throw new Error("Attempting to use compressed data with an umcompressed format!");this._forEachMipmapLevel(((e,t,r,i)=>{const a=o[Math.min(e,o.length-1)];this._compressedTexImage(n,e,u,t,r,i,a)}),c)}else(0,o.pC)(e)?(this._texImage(n,0,v,t,d,h,e),(0,a.zu)(r),i.hasMipmap&&this.generateMipmap()):this._forEachMipmapLevel(((e,t,i,o)=>{this._texImage(n,e,v,t,i,o,null),(0,a.zu)(r)}))}d._applySamplingMode(r,this._descriptor),d._applyWrapMode(r,this._descriptor),d._applyAnisotropicFilteringParameters(this._context,this._descriptor),(0,a.zu)(r),this._context.bindTexture(p,d.TEXTURE_UNIT_FOR_UPDATES)}updateData(e,t,r,i,o,a,n=0){a||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const s=this._context.gl,c=this._descriptor,{pixelFormat:f,dataType:m,target:p,isImmutable:g}=c,v=c.internalFormat??this._deriveInternalFormat(f,m);if(g&&!this._wasImmutablyAllocated)throw new Error("Cannot update immutable texture before allocation!");const _=this._context.bindTexture(this,d.TEXTURE_UNIT_FOR_UPDATES,!0);if((t<0||r<0||i>c.width||o>c.height||t+i>c.width||r+o>c.height)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),n){if(!(0,l.Z)(s))return void console.error("Webgl2 must be enabled to use dataRowOffset!");s.pixelStorei(s.UNPACK_SKIP_ROWS,n)}if(h(a)?(0,l.Z)(s)?s.texSubImage2D(p,e,t,r,i,o,f,m,a):s.texSubImage2D(p,e,t,r,f,m,a):u(a)?s.compressedTexSubImage2D(p,e,t,r,i,o,v,a.levels[e]):s.texSubImage2D(p,e,t,r,i,o,f,m,a),n){if(!(0,l.Z)(s))return void console.error("Webgl2 must be enabled to use dataRowOffset!");s.pixelStorei(s.UNPACK_SKIP_ROWS,0)}this._context.bindTexture(_,d.TEXTURE_UNIT_FOR_UPDATES)}updateData3D(e,t,r,i,o,a,n,s){s||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const c=this._context.gl;if(!(0,l.Z)(c))throw new Error("3D textures are not supported in WebGL1");const h=this._descriptor,{pixelFormat:m,dataType:p,isImmutable:g,target:v}=h,_=h.internalFormat??this._deriveInternalFormat(m,p);if(g&&!this._wasImmutablyAllocated)throw new Error("Cannot update immutable texture before allocation!");f(v)||console.warn("Attempting to set 3D texture data on a non-3D texture");const x=this._context.bindTexture(this,d.TEXTURE_UNIT_FOR_UPDATES);if(this._context.setActiveTexture(d.TEXTURE_UNIT_FOR_UPDATES),(t<0||r<0||i<0||o>h.width||a>h.height||n>h.depth||t+o>h.width||r+a>h.height||i+n>h.depth)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),u(s))s=s.levels[e],c.compressedTexSubImage3D(v,e,t,r,i,o,a,n,_,s);else{const l=s;c.texSubImage3D(v,e,t,r,i,o,a,n,m,p,l)}this._context.bindTexture(x,d.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const e=this._descriptor;if(!e.hasMipmap){if(this._wasImmutablyAllocated)throw new Error("Cannot add mipmaps to immutable texture after allocation");e.hasMipmap=!0,this._samplingModeDirty=!0,d._validateTexture(this._context,e)}e.samplingMode===s.cw.LINEAR?(this._samplingModeDirty=!0,e.samplingMode=s.cw.LINEAR_MIPMAP_NEAREST):e.samplingMode===s.cw.NEAREST&&(this._samplingModeDirty=!0,e.samplingMode=s.cw.NEAREST_MIPMAP_NEAREST);const t=this._context.bindTexture(this,d.TEXTURE_UNIT_FOR_UPDATES);this._context.setActiveTexture(d.TEXTURE_UNIT_FOR_UPDATES),this._context.gl.generateMipmap(e.target),this._context.bindTexture(t,d.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,this._samplingModeDirty=!0)}setWrapMode(e){e!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=e,d._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const e=this._context.gl,t=this._descriptor;this._samplingModeDirty&&(d._applySamplingMode(e,t),this._samplingModeDirty=!1),this._wrapModeDirty&&(d._applyWrapMode(e,t),this._wrapModeDirty=!1)}_deriveInternalFormat(e,t){if(this._context.type===n.zO.WEBGL1)return e;switch(t){case s.Br.FLOAT:switch(e){case s.VI.RGBA:return s.lP.RGBA32F;case s.VI.RGB:return s.lP.RGB32F;default:throw new Error("Unable to derive format")}case s.Br.UNSIGNED_BYTE:switch(e){case s.VI.RGBA:return s.lP.RGBA8;case s.VI.RGB:return s.lP.RGB8}default:return e}}_configurePixelStorage(){const e=this._context.gl,{unpackAlignment:t,flipped:r,preMultiplyAlpha:i}=this._descriptor;e.pixelStorei(e.UNPACK_ALIGNMENT,t),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r?1:0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i?1:0)}_texStorage(e,t,r,i,o,a){const n=this._context.gl;if(!(0,l.Z)(n))throw new Error("Immutable textures are not supported in WebGL1");if(!function(e){return e in s.lP}(t))throw new Error("Immutable textures must have a sized internal format");if(!this._descriptor.isImmutable)return;const c=r?m(e,i,o,a):1;if(f(e)){if(null==a)throw new Error("Missing depth dimension for 3D texture upload");n.texStorage3D(e,c,t,i,o,a)}else n.texStorage2D(e,c,t,i,o);this._wasImmutablyAllocated=!0}_texImage(e,t,r,i,a,s,l){const c=this._context.gl;let d=null;const u=this._context.type===n.zO.WEBGL2,m=f(e),{isImmutable:p,pixelFormat:g,dataType:v}=this._descriptor;if(u&&(d=c),u||!h(l))if(p){if((0,o.pC)(l)){const r=l;if(m){if(null==s)throw new Error("Missing depth dimension for 3D texture upload");d.texSubImage3D(e,t,0,0,0,i,a,s,g,v,r)}else c.texSubImage2D(e,t,0,0,i,a,g,v,r)}}else{const n=(0,o.Wg)(l);if(m){if(null==s)throw new Error("Missing depth dimension for 3D texture upload");d.texImage3D(e,t,r,i,a,s,0,g,v,n)}else c.texImage2D(e,t,r,i,a,0,g,v,n)}else c.texImage2D(e,0,r,g,v,l)}_compressedTexImage(e,t,r,i,a,s,l){const c=this._context.gl;let d=null;const u=f(e),h=this._descriptor.isImmutable;if(u){if(this._context.type!==n.zO.WEBGL2)throw new Error("3D textures are not supported in WebGL1");d=c}if(h){if((0,o.pC)(l))if(u){if(null==s)throw new Error("Missing depth dimension for 3D texture upload");d.compressedTexSubImage3D(e,t,0,0,0,i,a,s,r,l)}else c.compressedTexSubImage2D(e,t,0,0,i,a,r,l)}else if(u){if(null==s)throw new Error("Missing depth dimension for 3D texture upload");d.compressedTexImage3D(e,t,r,i,a,s,0,l)}else c.compressedTexImage2D(e,t,r,i,a,0,l)}_forEachMipmapLevel(e,t=1/0){let{width:r,height:i,depth:o,hasMipmap:a,target:n}=this._descriptor;const l=n===s.No.TEXTURE_3D;if(null==r||null==i||l&&null==o)throw new Error("Missing texture dimensions for mipmap calculation");for(let n=0;e(n,r,i,o),a&&(1!==r||1!==i||l&&1!==o)&&!(n>=t);++n)r=Math.max(1,r>>1),i=Math.max(1,i>>1),l&&(o=Math.max(1,o>>1))}static _validateTexture(e,t){(null!=t.width&&t.width<0||null!=t.height&&t.height<0||null!=t.depth&&t.depth<0)&&console.error("Negative dimension parameters are not allowed!");const r=(0,l.Z)(e.gl),o=null!=t.width&&(0,i.wt)(t.width)&&null!=t.height&&(0,i.wt)(t.height);r||!t.isImmutable&&!f(t.target)||console.error("Immutable and 3D-like textures are not supported in WebGL1!"),r||o||("number"==typeof t.wrapMode?t.wrapMode!==s.e8.CLAMP_TO_EDGE&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):t.wrapMode.s===s.e8.CLAMP_TO_EDGE&&t.wrapMode.t===s.e8.CLAMP_TO_EDGE||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),t.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}static _applySamplingMode(e,t){let r=t.samplingMode,i=t.samplingMode;r===s.cw.LINEAR_MIPMAP_NEAREST||r===s.cw.LINEAR_MIPMAP_LINEAR?(r=s.cw.LINEAR,t.hasMipmap||(i=s.cw.LINEAR)):r!==s.cw.NEAREST_MIPMAP_NEAREST&&r!==s.cw.NEAREST_MIPMAP_LINEAR||(r=s.cw.NEAREST,t.hasMipmap||(i=s.cw.NEAREST)),e.texParameteri(t.target,e.TEXTURE_MAG_FILTER,r),e.texParameteri(t.target,e.TEXTURE_MIN_FILTER,i)}static _applyWrapMode(e,t){"number"==typeof t.wrapMode?(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode)):(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode.s),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode.t))}static _applyAnisotropicFilteringParameters(e,t){const r=e.capabilities.textureFilterAnisotropic;r&&e.gl.texParameterf(t.target,r.TEXTURE_MAX_ANISOTROPY,t.maxAnisotropy??1)}}function u(e){return(0,o.pC)(e)&&"type"in e&&"compressed"===e.type}function h(e){return(0,o.pC)(e)&&!u(e)&&!function(e){return(0,o.pC)(e)&&"byteLength"in e}(e)}function f(e){return e===s.No.TEXTURE_3D||e===s.No.TEXTURE_2D_ARRAY}function m(e,t,r,i=1){let o=Math.max(t,r);return e===s.No.TEXTURE_3D&&(o=Math.max(o,i)),Math.round(Math.log(o)/Math.LN2)+1}d.TEXTURE_UNIT_FOR_UPDATES=0},45762:(e,t,r)=>{r.d(t,{RG:()=>l,UF:()=>s,XP:()=>n,_V:()=>a,un:()=>c}),r(80442);var i=r(70586),o=r(35371);function a(e,t){return e.vertexBuffers[t].size/function(e){return e[0].stride}(e.layout[t])}function n(e,t,r,i,o=0){const a=e.gl,n=e.capabilities.instancing;e.bindBuffer(r);for(const e of i){const r=t.get(e.name);void 0===r&&console.error(`There is no location for vertex attribute '${e.name}' defined.`);const i=o*e.stride;if(e.count<=4)a.vertexAttribPointer(r,e.count,e.type,e.normalized,e.stride,e.offset+i),a.enableVertexAttribArray(r),e.divisor>0&&n&&n.vertexAttribDivisor(r,e.divisor);else if(9===e.count)for(let t=0;t<3;t++)a.vertexAttribPointer(r+t,3,e.type,e.normalized,e.stride,e.offset+12*t+i),a.enableVertexAttribArray(r+t),e.divisor>0&&n&&n.vertexAttribDivisor(r+t,e.divisor);else if(16===e.count)for(let t=0;t<4;t++)a.vertexAttribPointer(r+t,4,e.type,e.normalized,e.stride,e.offset+16*t+i),a.enableVertexAttribArray(r+t),e.divisor>0&&n&&n.vertexAttribDivisor(r+t,e.divisor);else console.error("Unsupported vertex attribute element count: "+e.count)}}function s(e,t,r,i){const a=e.gl,n=e.capabilities.instancing;e.bindBuffer(r);for(const e of i){const r=t.get(e.name);if(e.count<=4)a.disableVertexAttribArray(r),e.divisor&&e.divisor>0&&n&&n.vertexAttribDivisor(r,0);else if(9===e.count)for(let t=0;t<3;t++)a.disableVertexAttribArray(r+t),e.divisor&&e.divisor>0&&n&&n.vertexAttribDivisor(r+t,0);else if(16===e.count)for(let t=0;t<4;t++)a.disableVertexAttribArray(r+t),e.divisor&&e.divisor>0&&n&&n.vertexAttribDivisor(r+t,0);else console.error("Unsupported vertex attribute element count: "+e.count)}e.unbindBuffer(o.w0.ARRAY_BUFFER)}function l(e){switch(e){case o.VI.ALPHA:case o.VI.LUMINANCE:case o.VI.RED:case o.VI.RED_INTEGER:case o.lP.R8:case o.lP.R8I:case o.lP.R8UI:case o.lP.R8_SNORM:case o.Tg.STENCIL_INDEX8:return 1;case o.VI.LUMINANCE_ALPHA:case o.VI.RG:case o.VI.RG_INTEGER:case o.lP.RGBA4:case o.lP.R16F:case o.lP.R16I:case o.lP.R16UI:case o.lP.RG8:case o.lP.RG8I:case o.lP.RG8UI:case o.lP.RG8_SNORM:case o.lP.RGB565:case o.lP.RGB5_A1:case o.Tg.DEPTH_COMPONENT16:return 2;case o.VI.DEPTH_COMPONENT:case o.VI.RGB:case o.VI.RGB_INTEGER:case o.lP.RGB8:case o.lP.RGB8I:case o.lP.RGB8UI:case o.lP.RGB8_SNORM:case o.lP.SRGB8:case o.Tg.DEPTH_COMPONENT24:return 3;case o.VI.DEPTH_STENCIL:case o.VI.RGBA:case o.VI.RGBA_INTEGER:case o.lP.RGBA8:case o.lP.R32F:case o.lP.R11F_G11F_B10F:case o.lP.RG16F:case o.lP.R32I:case o.lP.R32UI:case o.lP.RG16I:case o.lP.RG16UI:case o.lP.RGBA8I:case o.lP.RGBA8UI:case o.lP.RGBA8_SNORM:case o.lP.SRGB8_ALPHA8:case o.lP.RGB9_E5:case o.lP.RGB10_A2UI:case o.lP.RGB10_A2:case o.Tg.DEPTH_STENCIL:case o.Tg.DEPTH_COMPONENT32F:case o.Tg.DEPTH24_STENCIL8:return 4;case o.Tg.DEPTH32F_STENCIL8:return 5;case o.lP.RGB16F:case o.lP.RGB16I:case o.lP.RGB16UI:return 6;case o.lP.RG32F:case o.lP.RG32I:case o.lP.RG32UI:case o.lP.RGBA16F:case o.lP.RGBA16I:case o.lP.RGBA16UI:return 8;case o.lP.RGB32F:case o.lP.RGB32I:case o.lP.RGB32UI:return 12;case o.lP.RGBA32F:case o.lP.RGBA32I:case o.lP.RGBA32UI:return 16;case o.q_.COMPRESSED_RGB_S3TC_DXT1_EXT:case o.q_.COMPRESSED_RGBA_S3TC_DXT1_EXT:return.5;case o.q_.COMPRESSED_RGBA_S3TC_DXT3_EXT:case o.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT:return 1;case o.q_.COMPRESSED_R11_EAC:case o.q_.COMPRESSED_SIGNED_R11_EAC:case o.q_.COMPRESSED_RGB8_ETC2:case o.q_.COMPRESSED_SRGB8_ETC2:case o.q_.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:case o.q_.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:return.5;case o.q_.COMPRESSED_RG11_EAC:case o.q_.COMPRESSED_SIGNED_RG11_EAC:case o.q_.COMPRESSED_RGBA8_ETC2_EAC:case o.q_.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:return 1}return 0}function c(e){if((0,i.Wi)(e))return 0;if("descriptor"in e)return e.glName?c(e.descriptor):0;const t=e.internalFormat||"pixelFormat"in e&&e.pixelFormat;if(!t)return 0;const r="hasMipmap"in e&&e.hasMipmap?1.3:1,o=e.width*e.height;return l(t)*o*r}},21968:(e,t,r)=>{r.d(t,{G:()=>i});class i{constructor(e,t,r,i,o,a=!1,n=0){this.name=e,this.count=t,this.type=r,this.offset=i,this.stride=o,this.normalized=a,this.divisor=n}}},46314:(e,t,r)=>{function i(e){return window.WebGL2RenderingContext&&e instanceof window.WebGL2RenderingContext}r.d(t,{Z:()=>i})},49300:(e,t,r)=>{r.d(t,{hZ:()=>s,zu:()=>l});var i=r(20102),o=r(80442);const a=r(92604).Z.getLogger("esri.views.webgl.checkWebGLError"),n=!!(0,o.Z)("enable-feature:webgl-debug");function s(){return n}function l(e){if(s()){const t=e.getError();if(t){const r=function(e,t){switch(t){case e.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case e.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case e.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case e.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case e.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case e.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}(e,t),o=(new Error).stack;a.error(new i.Z("webgl-error","WebGL error occured",{message:r,stack:o}))}}}},54738:(e,t,r)=>{r.d(t,{Sh:()=>n,kr:()=>s,zO:()=>i});var i,o,a=r(80442);function n(e){const t=(0,a.Z)("esri-force-webgl");if(t===i.WEBGL1||t===i.WEBGL2)return[t];switch(e){case"2d":return(0,a.Z)("mac")&&(0,a.Z)("chrome")?[i.WEBGL1,i.WEBGL2]:[i.WEBGL2,i.WEBGL1];case"3d":return[i.WEBGL2,i.WEBGL1]}}function s(e,t,r={}){const o=t===i.WEBGL1?["webgl","experimental-webgl","webkit-3d","moz-webgl"]:["webgl2"];let a=null;for(const t of o){try{a=e.getContext(t,r)}catch(e){}if(a)break}return a}(o=i||(i={}))[o.WEBGL1=1]="WEBGL1",o[o.WEBGL2=2]="WEBGL2"},9820:(e,t,r)=>{function i(e,t){const r=e.length;for(let i=0;i<r;++i)a[0]=e[i],t[i]=a[0];return t}function o(e,t){const r=e.length;for(let i=0;i<r;++i)a[0]=e[i],a[1]=e[i]-a[0],t[i]=a[1];return t}r.d(t,{GB:()=>o,U8:()=>i});const a=new Float32Array(2)},27097:(e,t,r)=>{r.d(t,{BK:()=>u,LZ:()=>d,if:()=>a,sm:()=>T,wK:()=>n,zp:()=>c});var i=r(47026),o=r(35371);function a(e,t,r=o.db.ADD,i=[0,0,0,0]){return{srcRgb:e,srcAlpha:e,dstRgb:t,dstAlpha:t,opRgb:r,opAlpha:r,color:{r:i[0],g:i[1],b:i[2],a:i[3]}}}function n(e,t,r,i,a=o.db.ADD,n=o.db.ADD,s=[0,0,0,0]){return{srcRgb:e,srcAlpha:t,dstRgb:r,dstAlpha:i,opRgb:a,opAlpha:n,color:{r:s[0],g:s[1],b:s[2],a:s[3]}}}const s={face:o.LR.BACK,mode:o.Wf.CCW},l={face:o.LR.FRONT,mode:o.Wf.CCW},c=e=>e===i.Vr.Back?s:e===i.Vr.Front?l:null,d={zNear:0,zFar:1},u={r:!0,g:!0,b:!0,a:!0};function h(e){return E.intern(e)}function f(e){return w.intern(e)}function m(e){return y.intern(e)}function p(e){return M.intern(e)}function g(e){return N.intern(e)}function v(e){return I.intern(e)}function _(e){return D.intern(e)}function x(e){return H.intern(e)}function T(e){return U.intern(e)}class b{constructor(e,t){this._makeKey=e,this._makeRef=t,this._interns=new Map}intern(e){if(!e)return null;const t=this._makeKey(e),r=this._interns;return r.has(t)||r.set(t,this._makeRef(e)),r.get(t)??null}}function A(e){return"["+e.join(",")+"]"}const E=new b(S,(e=>({__tag:"Blending",...e})));function S(e){return e?A([e.srcRgb,e.srcAlpha,e.dstRgb,e.dstAlpha,e.opRgb,e.opAlpha,e.color.r,e.color.g,e.color.b,e.color.a]):null}const w=new b(C,(e=>({__tag:"Culling",...e})));function C(e){return e?A([e.face,e.mode]):null}const y=new b(R,(e=>({__tag:"PolygonOffset",...e})));function R(e){return e?A([e.factor,e.units]):null}const M=new b(O,(e=>({__tag:"DepthTest",...e})));function O(e){return e?A([e.func]):null}const N=new b(P,(e=>({__tag:"StencilTest",...e})));function P(e){return e?A([e.function.func,e.function.ref,e.function.mask,e.operation.fail,e.operation.zFail,e.operation.zPass]):null}const I=new b(L,(e=>({__tag:"DepthWrite",...e})));function L(e){return e?A([e.zNear,e.zFar]):null}const D=new b(F,(e=>({__tag:"ColorWrite",...e})));function F(e){return e?A([e.r,e.g,e.b,e.a]):null}const H=new b(B,(e=>({__tag:"StencilWrite",...e})));function B(e){return e?A([e.mask]):null}const U=new b((function(e){return e?A([S(e.blending),C(e.culling),R(e.polygonOffset),O(e.depthTest),P(e.stencilTest),L(e.depthWrite),F(e.colorWrite),B(e.stencilWrite)]):null}),(e=>({blending:h(e.blending),culling:f(e.culling),polygonOffset:m(e.polygonOffset),depthTest:p(e.depthTest),stencilTest:g(e.stencilTest),depthWrite:v(e.depthWrite),colorWrite:_(e.colorWrite),stencilWrite:x(e.stencilWrite)})))}}]);