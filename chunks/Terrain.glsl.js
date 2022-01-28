/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexTangent.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/NormalUtils.glsl","../views/3d/webgl-engine/core/shaderLibrary/terrain/Overlay.glsl","../views/3d/webgl-engine/core/shaderLibrary/terrain/Skirts.glsl","../views/3d/webgl-engine/core/shaderLibrary/terrain/TerrainTexture.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/HeaderComment.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder"],(function(e,r,o,a,i,l,t,n,s,v,d,c,g,m){"use strict";function p(e){const p=new m.ShaderBuilder;if(p.include(c.HeaderComment,{name:"Terrain Shader",output:e.output}),p.include(v.Skirts),p.attributes.add("position","vec3"),p.attributes.add("uv0","vec2"),p.vertex.uniforms.add("proj","mat4").add("view","mat4").add("origin","vec3").add("skirtScale","float"),0===e.output){p.include(o.Transform,{linearDepth:!1}),p.include(n.NormalUtils,e),p.include(d.TerrainTexture,e);const i=0!==e.overlayMode,l=2===e.overlayMode;i&&p.include(s.Overlay,{pbrMode:3,useCustomDTRExponentForWater:!1,ssrEnabled:e.ssrEnabled,highStepCount:e.highStepCount}),l&&p.include(a.VertexTangent,e),p.varyings.add("vnormal","vec3"),p.varyings.add("vpos","vec3"),p.vertex.uniforms.add("viewNormal","mat4"),e.receiveShadows&&p.varyings.add("linearDepth","float"),e.tileBorders&&p.varyings.add("vuv","vec2"),e.atmosphere&&(p.vertex.uniforms.add("lightingMainDirection","vec3"),p.varyings.add("wnormal","vec3"),p.varyings.add("wlight","vec3")),e.screenSizePerspective&&(p.vertex.uniforms.add("screenSizePerspective","vec4"),p.varyings.add("screenSizeDistanceToCamera","float"),p.varyings.add("screenSizeCosAngle","float")),p.vertex.code.add(g.glsl`
      void main(void) {
        vpos = position;
        vnormal = getLocalUp(vpos, origin);

        vec2 uv = uv0;
        vpos = applySkirts(uv, vpos, vnormal, skirtScale);
        ${e.atmosphere?g.glsl`
        wnormal = normalize((viewNormal * vec4(normalize(vpos + origin), 1.0)).xyz);
        wlight = normalize((view  * vec4(lightingMainDirection, 1.0)).xyz);`:""}
        ${e.tileBorders?g.glsl`vuv = uv;`:""}
        ${e.screenSizePerspective?g.glsl`
        vec3 viewPos = (view * vec4(vpos, 1.0)).xyz;
        screenSizeDistanceToCamera = length(viewPos);
        vec3 viewSpaceNormal = (viewNormal * vec4(normalize(vpos + origin), 1.0)).xyz;
        screenSizeCosAngle = abs(viewSpaceNormal.z);`:""}
        gl_Position = transformPosition(proj, view, vpos);
        ${e.receiveShadows?g.glsl`linearDepth = gl_Position.w;`:""}
        forwardTextureCoordinates(uv);
        ${i?g.glsl`setOverlayVTC(uv);`:""}
        ${l?g.glsl`forwardVertexTangent(vnormal);`:g.glsl``}
      }
    `),p.extensions.add("GL_OES_standard_derivatives"),p.extensions.add("GL_EXT_shader_texture_lod"),p.include(r.Slice,e),p.include(t.EvaluateSceneLighting,e),p.fragment.uniforms.add("camPos","vec3").add("viewDirection","vec3").add("ssaoTex","sampler2D").add("viewportPixelSz","vec4"),e.screenSizePerspective&&p.fragment.uniforms.add("screenSizePerspective","vec4"),l&&(p.fragment.uniforms.add("ovWaterTex","sampler2D"),p.fragment.uniforms.add("view","mat4")),p.fragment.code.add(g.glsl`const float sliceOpacity = 0.2;
float lum(vec3 c) {
return (min(min(c.r, c.g), c.b) + max(max(c.r, c.g), c.b)) * 0.5;
}`),p.fragment.code.add(g.glsl`
      void main() {
        ${e.receiveShadows?g.glsl`float shadow = readShadowMap(vpos, linearDepth);`:g.glsl`float shadow = 0.0;`}
        float vndl = dot(normalize(vnormal), lightingMainDirection);

        float ssao = viewportPixelSz.w < .0 ? 1.0 : texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
        vec4 tileColor = getTileColor();
        ${i?g.glsl`
            vec4 overlayColorOpaque = getOverlayColor(ovColorTex, vtcOverlay);
            vec4 overlayColor = overlayOpacity * overlayColorOpaque;
            vec4 groundColor = tileColor;
            tileColor = tileColor * (1.0 - overlayColor.a) + overlayColor;`:""}
        if (rejectBySlice(vpos)) {
          tileColor *= sliceOpacity;
        }
        ${e.atmosphere?g.glsl`
            float ndotl = clamp(vndl, 0.0, 1.0);
            vec3 atm = vec3(clamp(1.0 - dot(-viewDirection, wnormal), 0.0, 1.0));
            atm *= clamp(1.0 - lum(tileColor.rgb) * 1.5, 0.0, 1.0); //avoid atmosphere on bright base maps
            atm *= clamp(ndotl * 2.0, 0.0, 1.0); // avoid atmosphere on dark side of the globe
            atm *= tileColor.a; // premultiply with tile alpha`:""}

        vec3 albedo = ${e.atmosphere?g.glsl`atm + tileColor.rgb;`:g.glsl`tileColor.rgb;`}
        vec3 normal = normalize(vnormal);

        // heuristic shading function used in the old terrain, now used to add ambient lighting
        float additionalAmbientScale = smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        gl_FragColor = vec4(evaluateSceneLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight), tileColor.a);
        ${l?g.glsl`
            vec4 overlayWaterMask = getOverlayColor(ovWaterTex, vtcOverlay);
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
        ${e.screenSizePerspective?g.glsl`
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
        ${e.tileBorders?g.glsl`
            vec2 dVuv = fwidth(vuv);
            vec2 edgeFactors = smoothstep(vec2(0.0), 1.5 * dVuv, min(vuv, 1.0 - vuv));
            float edgeFactor = 1.0 - min(edgeFactors.x, edgeFactors.y);
            gl_FragColor = mix(gl_FragColor, vec4(1.0, 0.0, 0.0, 1.0), edgeFactor);`:""}
        gl_FragColor = highlightSlice(gl_FragColor, vpos);
      }
    `)}return 1!==e.output&&3!==e.output||(p.include(o.Transform,{linearDepth:!0}),p.include(i.OutputDepth,{output:e.output}),p.include(n.NormalUtils,e),p.varyings.add("linearDepth","float"),p.vertex.uniforms.add("nearFar","vec2"),p.vertex.code.add(g.glsl`void main(void) {
vec3 normal = getLocalUp(position, origin);
vec2 uv = uv0;
vec3 vpos = applySkirts(uv, position, normal.xyz, skirtScale);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, linearDepth);
}`),p.fragment.code.add(g.glsl`void main() {
outputDepth(linearDepth);
}`)),2===e.output&&(p.include(o.Transform,{linearDepth:!1}),p.include(n.NormalUtils,e),p.varyings.add("vnormal","vec3"),p.varyings.add("vpos","vec3"),p.vertex.uniforms.add("viewNormal","mat4"),p.vertex.code.add(g.glsl`void main(void) {
vec3 normal = getLocalUp(position, origin);
vec2 uv = uv0;
vpos = applySkirts(uv, position, normal, skirtScale);
gl_Position = transformPosition(proj, view, vpos);
vnormal = normalize((viewNormal * vec4(normal, 1.0)).xyz);
}`),p.fragment.code.add(g.glsl`void main() {
vec3 normal = normalize(vnormal);
if (gl_FrontFacing == false) {
normal = -normal;
}
gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 0.0);
}`)),4===e.output&&(p.include(o.Transform,{linearDepth:!1}),p.include(n.NormalUtils,e),p.include(s.Overlay,{pbrMode:0}),p.vertex.code.add(g.glsl`void main() {
vec3 vnormal = getLocalUp(position, origin);
vec2 uv = uv0;
vec3 vpos = applySkirts(uv, position, vnormal, skirtScale);
setOverlayVTC(uv);
gl_Position = transformPosition(proj, view, vpos);
}`),p.include(l.OutputHighlight),p.fragment.code.add(g.glsl`void main() {
vec4 overlayColor = getCombinedOverlayColor();
if (overlayColor.a == 0.0) {
gl_FragColor = vec4(0.0);
return;
}
outputHighlight();
}`)),p}const u=Object.freeze({__proto__:null,build:p});e.TerrainShader=u,e.build=p}));
