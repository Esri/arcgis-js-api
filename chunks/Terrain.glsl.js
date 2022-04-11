/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexTangent.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/NormalUtils.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl","../views/3d/webgl-engine/core/shaderLibrary/terrain/Overlay.glsl","../views/3d/webgl-engine/core/shaderLibrary/terrain/Skirts.glsl","../views/3d/webgl-engine/core/shaderLibrary/terrain/TerrainTexture.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/HeaderComment.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/lib/VertexAttribute"],(function(e,r,o,a,i,l,t,n,s,v,d,c,g,m,p,u,h){"use strict";function w(e){const w=new u.ShaderBuilder;if(w.include(m.HeaderComment,{name:"Terrain Shader",output:e.output}),w.include(c.Skirts),w.attributes.add(h.VertexAttribute.POSITION,"vec3"),w.attributes.add(h.VertexAttribute.UV0,"vec2"),w.vertex.uniforms.add("proj","mat4").add("view","mat4").add("origin","vec3").add("skirtScale","float"),w.fragment.uniforms.add("origin","vec3"),e.output===r.ShaderOutput.Color){w.include(a.Transform,{linearDepth:!1}),w.include(s.NormalUtils,e),w.include(g.TerrainTexture,e),w.include(n.EvaluateSceneLighting,e);const r=e.overlayMode!==d.OverlayMode.Disabled,l=e.overlayMode===d.OverlayMode.EnabledWithWater;r&&w.include(d.Overlay,{pbrMode:v.PBRMode.Water,useCustomDTRExponentForWater:!1,ssrEnabled:e.ssrEnabled,highStepCount:e.highStepCount}),l&&w.include(i.VertexTangent,e),w.varyings.add("vnormal","vec3"),w.varyings.add("vpos","vec3"),w.vertex.uniforms.add("viewNormal","mat4"),e.receiveShadows&&w.varyings.add("linearDepth","float"),e.tileBorders&&w.varyings.add("vuv","vec2"),e.atmosphere&&(w.vertex.uniforms.add("lightingMainDirection","vec3"),w.varyings.add("wnormal","vec3"),w.varyings.add("wlight","vec3")),e.screenSizePerspective&&(w.vertex.uniforms.add("screenSizePerspective","vec4"),w.varyings.add("screenSizeDistanceToCamera","float"),w.varyings.add("screenSizeCosAngle","float")),w.vertex.code.add(p.glsl`
      void main(void) {
        vpos = position;
        vnormal = getLocalUp(vpos, origin);

        vec2 uv = uv0;
        vpos = applySkirts(uv, vpos, vnormal, skirtScale);
        ${e.atmosphere?p.glsl`
        wnormal = normalize((viewNormal * vec4(normalize(vpos + origin), 1.0)).xyz);
        wlight = normalize((view  * vec4(lightingMainDirection, 1.0)).xyz);`:""}
        ${e.tileBorders?p.glsl`vuv = uv;`:""}
        ${e.screenSizePerspective?p.glsl`
        vec3 viewPos = (view * vec4(vpos, 1.0)).xyz;
        screenSizeDistanceToCamera = length(viewPos);
        vec3 viewSpaceNormal = (viewNormal * vec4(normalize(vpos + origin), 1.0)).xyz;
        screenSizeCosAngle = abs(viewSpaceNormal.z);`:""}
        gl_Position = transformPosition(proj, view, vpos);
        ${e.receiveShadows?p.glsl`linearDepth = gl_Position.w;`:""}
        forwardTextureCoordinates(uv);
        ${r?p.glsl`setOverlayVTC(uv);`:""}
        ${l?p.glsl`forwardVertexTangent(vnormal);`:p.glsl``}
      }
    `),w.extensions.add("GL_OES_standard_derivatives"),w.extensions.add("GL_EXT_shader_texture_lod"),w.include(o.Slice,e),w.include(n.EvaluateSceneLighting,e),w.fragment.uniforms.add("cameraPosition","vec3").add("viewDirection","vec3").add("ssaoTex","sampler2D").add("viewportPixelSz","vec4"),e.screenSizePerspective&&w.fragment.uniforms.add("screenSizePerspective","vec4"),l&&(w.fragment.uniforms.add("ovWaterTex","sampler2D"),w.fragment.uniforms.add("view","mat4")),w.fragment.code.add(p.glsl`const float sliceOpacity = 0.2;
float lum(vec3 c) {
return (min(min(c.r, c.g), c.b) + max(max(c.r, c.g), c.b)) * 0.5;
}`),w.fragment.code.add(p.glsl`
      void main() {
        ${e.receiveShadows?p.glsl`float shadow = readShadowMap(vpos, linearDepth);`:p.glsl`float shadow = 0.0;`}
        float vndl = dot(normalize(vnormal), lightingMainDirection);

        float ssao = viewportPixelSz.w < .0 ? 1.0 : texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
        vec4 tileColor = getTileColor();
        ${r?p.glsl`
            vec4 overlayColorOpaque = getOverlayColor(ovColorTex, vtcOverlay);
            vec4 overlayColor = overlayOpacity * overlayColorOpaque;
            vec4 groundColor = tileColor;
            tileColor = tileColor * (1.0 - overlayColor.a) + overlayColor;`:""}
        if (rejectBySlice(vpos)) {
          tileColor *= sliceOpacity;
        }
        ${e.atmosphere?p.glsl`
            float ndotl = clamp(vndl, 0.0, 1.0);
            vec3 atm = vec3(clamp(1.0 - dot(-viewDirection, wnormal), 0.0, 1.0));
            atm *= clamp(1.0 - lum(tileColor.rgb) * 1.5, 0.0, 1.0); //avoid atmosphere on bright base maps
            atm *= clamp(ndotl * 2.0, 0.0, 1.0); // avoid atmosphere on dark side of the globe
            atm *= tileColor.a; // premultiply with tile alpha`:""}

        vec3 albedo = ${e.atmosphere?p.glsl`atm + tileColor.rgb;`:p.glsl`tileColor.rgb;`}
        vec3 normal = normalize(vnormal);

        // heuristic shading function used in the old terrain, now used to add ambient lighting
        float additionalAmbientScale = smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        gl_FragColor = vec4(evaluateSceneLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight), tileColor.a);
        ${l?p.glsl`
            vec4 overlayWaterMask = getOverlayColor(ovWaterTex, vtcOverlay);
            float waterNormalLength = length(overlayWaterMask);
            if (waterNormalLength > 0.95) {
              mat3 tbnMatrix = mat3(tbnTangent, tbnBiTangent, vnormal);
              vec4 waterOverlayColor = vec4(overlayColor.w > 0.0 ? overlayColorOpaque.xyz/overlayColor.w : vec3(1.0), overlayColor.w);
              vec4 viewPosition = view*vec4(vpos, 1.0);
              vec4 waterColorLinear = getOverlayWaterColor(overlayWaterMask, waterOverlayColor, -normalize(vpos - cameraPosition), shadow, vnormal, tbnMatrix, viewPosition.xyz,  vpos + origin);
              vec4 waterColorNonLinear = delinearizeGamma(vec4(waterColorLinear.xyz, 1.0));
              // un-gamma the ground color to mix in linear space
              gl_FragColor = mix(groundColor, waterColorNonLinear, waterColorLinear.w);
            }`:""}
        ${e.screenSizePerspective?p.glsl`
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
        ${e.tileBorders?p.glsl`
            vec2 dVuv = fwidth(vuv);
            vec2 edgeFactors = smoothstep(vec2(0.0), 1.5 * dVuv, min(vuv, 1.0 - vuv));
            float edgeFactor = 1.0 - min(edgeFactors.x, edgeFactors.y);
            gl_FragColor = mix(gl_FragColor, vec4(1.0, 0.0, 0.0, 1.0), edgeFactor);`:""}
        gl_FragColor = highlightSlice(gl_FragColor, vpos);
      }
    `)}return e.output!==r.ShaderOutput.Depth&&e.output!==r.ShaderOutput.Shadow||(w.include(a.Transform,{linearDepth:!0}),w.include(l.OutputDepth,{output:e.output}),w.include(s.NormalUtils,e),w.varyings.add("linearDepth","float"),w.vertex.uniforms.add("nearFar","vec2"),w.vertex.code.add(p.glsl`void main(void) {
vec3 normal = getLocalUp(position, origin);
vec2 uv = uv0;
vec3 vpos = applySkirts(uv, position, normal.xyz, skirtScale);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, linearDepth);
}`),w.fragment.code.add(p.glsl`void main() {
outputDepth(linearDepth);
}`)),e.output===r.ShaderOutput.Normal&&(w.include(a.Transform,{linearDepth:!1}),w.include(s.NormalUtils,e),w.varyings.add("vnormal","vec3"),w.varyings.add("vpos","vec3"),w.vertex.uniforms.add("viewNormal","mat4"),w.vertex.code.add(p.glsl`void main(void) {
vec3 normal = getLocalUp(position, origin);
vec2 uv = uv0;
vpos = applySkirts(uv, position, normal, skirtScale);
gl_Position = transformPosition(proj, view, vpos);
vnormal = normalize((viewNormal * vec4(normal, 1.0)).xyz);
}`),w.fragment.code.add(p.glsl`void main() {
vec3 normal = normalize(vnormal);
if (gl_FrontFacing == false) {
normal = -normal;
}
gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 0.0);
}`)),e.output===r.ShaderOutput.Highlight&&(w.include(a.Transform,{linearDepth:!1}),w.include(s.NormalUtils,e),w.include(d.Overlay,{pbrMode:v.PBRMode.Disabled}),w.vertex.code.add(p.glsl`void main() {
vec3 vnormal = getLocalUp(position, origin);
vec2 uv = uv0;
vec3 vpos = applySkirts(uv, position, vnormal, skirtScale);
setOverlayVTC(uv);
gl_Position = transformPosition(proj, view, vpos);
}`),w.include(t.OutputHighlight),w.fragment.code.add(p.glsl`void main() {
vec4 overlayColor = getCombinedOverlayColor();
if (overlayColor.a == 0.0) {
gl_FragColor = vec4(0.0);
return;
}
outputHighlight();
}`)),w}const y=Object.freeze(Object.defineProperty({__proto__:null,build:w},Symbol.toStringTag,{value:"Module"}));e.TerrainShader=y,e.build=w}));
