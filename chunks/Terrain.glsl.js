/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{j as e}from"./mat4.js";import{c as r}from"./mat4f64.js";import{b as o,n as i,s as a}from"./vec3.js";import{c as n}from"./vec3f64.js";import{OverlayIndex as l}from"../views/3d/terrain/interfaces.js";import{ShaderOutput as t}from"../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions.js";import{SliceDraw as s}from"../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js";import{Transform as d}from"../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl.js";import{VertexTangent as v}from"../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexTangent.glsl.js";import{OutputDepth as c}from"../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl.js";import{OutputHighlight as g}from"../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl.js";import{EvaluateAmbientOcclusion as m}from"../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl.js";import{EvaluateSceneLighting as p}from"../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl.js";import{NormalUtils as w}from"../views/3d/webgl-engine/core/shaderLibrary/shading/NormalUtils.glsl.js";import{PBRMode as u}from"../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js";import{ReadShadowMapDraw as h}from"../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl.js";import{OverlayTerrainPassParameters as f,OverlayMode as b,OverlayTerrain as y}from"../views/3d/webgl-engine/core/shaderLibrary/terrain/Overlay.glsl.js";import{TerrainTexture as C}from"../views/3d/webgl-engine/core/shaderLibrary/terrain/TerrainTexture.glsl.js";import{HeaderComment as x}from"../views/3d/webgl-engine/core/shaderLibrary/util/HeaderComment.glsl.js";import{Float2PassUniform as S}from"../views/3d/webgl-engine/core/shaderModules/Float2PassUniform.js";import{Float3DrawUniform as j}from"../views/3d/webgl-engine/core/shaderModules/Float3DrawUniform.js";import{Float3PassUniform as M}from"../views/3d/webgl-engine/core/shaderModules/Float3PassUniform.js";import{FloatPassUniform as F}from"../views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js";import{glsl as _}from"../views/3d/webgl-engine/core/shaderModules/interfaces.js";import{Matrix4DrawUniform as L}from"../views/3d/webgl-engine/core/shaderModules/Matrix4DrawUniform.js";import{Matrix4PassUniform as P}from"../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform.js";import{ShaderBuilder as z}from"../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js";import{Texture2DPassUniform as O}from"../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js";import{VertexAttribute as T}from"../views/3d/webgl-engine/lib/VertexAttribute.js";import{ambientBoost as D}from"../views/3d/webgl-engine/lighting/SceneLighting.js";class N extends f{}function $(r){const n=new z;n.include(x,{name:"Terrain Shader",output:r.output}),n.attributes.add(T.POSITION,"vec3"),n.attributes.add(T.UV0,"vec2"),n.attributes.add(T.NORMAL,"vec3");const{vertex:f,fragment:N}=n;if(f.uniforms.add([new P("proj",((e,r)=>r.camera.projectionMatrix)),new L("view",((r,o)=>e(U,o.camera.viewMatrix,r.origin))),new j("origin",(e=>e.origin))]),N.uniforms.add(new j("origin",(e=>e.origin))),r.output===t.Color){n.include(d),n.include(w,r),n.include(C,r),n.include(p,r);const t=r.overlayMode!==b.Disabled,c=r.overlayMode===b.EnabledWithWater;t&&n.include(y,{...r,pbrMode:u.Water}),c&&n.include(v,r),n.varyings.add("vnormal","vec3"),n.varyings.add("vpos","vec3"),(r.atmosphere||r.screenSizePerspective)&&f.uniforms.add(new P("viewNormal",((e,r)=>r.camera.viewInverseTransposeMatrix)));const g=r.receiveShadows&&!r.renderOccluded;g&&n.varyings.add("linearDepth","float"),r.tileBorders&&n.varyings.add("vuv","vec2"),r.atmosphere&&(f.uniforms.add(new M("lightingMainDirection",((e,r)=>r.lighting.lightingMainDirection))),n.varyings.add("wnormal","vec3"),n.varyings.add("wlight","vec3")),r.screenSizePerspective&&(n.varyings.add("screenSizeDistanceToCamera","float"),n.varyings.add("screenSizeCosAngle","float")),f.code.add(_`
      void main(void) {
        vpos = position;
        vnormal = ${r.shading?_`normal`:_`getLocalUp(vpos, origin)`};
        vec2 uv = uv0;
        ${r.atmosphere?_`
        wnormal = normalize((viewNormal * vec4(normalize(vpos + origin), 1.0)).xyz);
        wlight = normalize((view  * vec4(lightingMainDirection, 1.0)).xyz);`:""}
        ${r.tileBorders?_`vuv = uv;`:""}
        ${r.screenSizePerspective?_`
        vec3 viewPos = (view * vec4(vpos, 1.0)).xyz;
        screenSizeDistanceToCamera = length(viewPos);
        vec3 viewSpaceNormal = (viewNormal * vec4(normalize(vpos + origin), 1.0)).xyz;
        screenSizeCosAngle = abs(viewSpaceNormal.z);`:""}
        gl_Position = transformPosition(proj, view, vpos);
        ${g?_`linearDepth = gl_Position.w;`:""}
        forwardTextureCoordinates(uv);
        ${t?_`setOverlayVTC(uv);`:""}
        ${c?_`forwardVertexTangent(vnormal);`:_``}
      }
    `),n.extensions.add("GL_OES_standard_derivatives"),n.extensions.add("GL_EXT_shader_texture_lod"),n.include(s,r),n.include(p,r),n.include(m,r),n.include(h,r),N.uniforms.add([new j("cameraPosition",((e,r)=>o(W,r.camera.eye,e.origin))),new M("viewDirection",((e,r)=>i(W,a(W,r.camera.viewMatrix[12],r.camera.viewMatrix[13],r.camera.viewMatrix[14])))),new F("lightingGlobalFactor",((e,r)=>r.lighting.globalFactor)),new M("lightingMainDirection",((e,r)=>r.lighting.lightingMainDirection)),new M("lightingMainIntensity",((e,r)=>r.lighting.mainLight.intensity))]),N.constants.add("ambientBoostFactor","float",D),c&&N.uniforms.add([new O("ovWaterTex",((e,r)=>0===r.overlays.length?null:r.overlays[l.INNER].getNormalTexture(e.overlaySource))),new L("view",((r,o)=>e(U,o.camera.viewMatrix,r.origin)))]),N.code.add(_`const float sliceOpacity = 0.2;
float lum(vec3 c) {
return (min(min(c.r, c.g), c.b) + max(max(c.r, c.g), c.b)) * 0.5;
}`),N.code.add(_`
      void main() {
        ${g?_`float shadow = readShadowMap(vpos, linearDepth);`:_`float shadow = 0.0;`}
        vec3 normal = normalize(vnormal);
        float vndl = dot(normal, lightingMainDirection);
        float ssao = evaluateAmbientOcclusionInverse();
        vec4 tileColor = getTileColor();
        ${t?_`
            vec4 overlayColorOpaque = getOverlayColor(ovColorTex, vtcOverlay);
            vec4 overlayColor = overlayOpacity * overlayColorOpaque;
            vec4 groundColor = tileColor;
            tileColor = tileColor * (1.0 - overlayColor.a) + overlayColor;`:""}
        if (rejectBySlice(vpos)) {
          tileColor *= sliceOpacity;
        }
        ${r.atmosphere?_`
            float ndotl = clamp(vndl, 0.0, 1.0);
            vec3 atm = vec3(clamp(1.0 - dot(-viewDirection, wnormal), 0.0, 1.0));
            atm *= clamp(1.0 - lum(tileColor.rgb) * 1.5, 0.0, 1.0); //avoid atmosphere on bright base maps
            atm *= clamp(ndotl * 2.0, 0.0, 1.0); // avoid atmosphere on dark side of the globe
            atm *= tileColor.a; // premultiply with tile alpha`:""}

        vec3 albedo = ${r.atmosphere?_`atm + tileColor.rgb;`:_`tileColor.rgb;`}

        // heuristic shading function used in the old terrain, now used to add ambient lighting
        float additionalAmbientScale = smoothstep(0.0, 1.0, clamp(vndl${r.shading?"":_`*2.5`}, 0.0, 1.0));

        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor ${r.shading?"":_`* lightingGlobalFactor`};

        gl_FragColor = vec4(evaluateSceneLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight), tileColor.a);
        ${c?_`
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
        ${r.screenSizePerspective?_`
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
        ${r.tileBorders?_`
            vec2 dVuv = fwidth(vuv);
            vec2 edgeFactors = smoothstep(vec2(0.0), 1.5 * dVuv, min(vuv, 1.0 - vuv));
            float edgeFactor = 1.0 - min(edgeFactors.x, edgeFactors.y);
            gl_FragColor = mix(gl_FragColor, vec4(1.0, 0.0, 0.0, 1.0), edgeFactor);`:""}
        gl_FragColor = highlightSlice(gl_FragColor, vpos);
      }
    `)}return r.output!==t.Depth&&r.output!==t.Shadow||(n.include(d,{hasModelTransformation:!1,linearDepth:!0}),n.include(c,{output:r.output}),n.include(w,r),n.varyings.add("linearDepth","float"),f.uniforms.add(new S("nearFar",((e,r)=>r.camera.nearFar))),f.code.add(_`void main(void) {
gl_Position = transformPositionWithDepth(proj, view, position, nearFar, linearDepth);
}`),N.code.add(_`void main() {
outputDepth(linearDepth);
}`)),r.output===t.Normal&&(n.include(d),n.include(w,r),n.varyings.add("vnormal","vec3"),n.varyings.add("vpos","vec3"),f.uniforms.add(new P("viewNormal",((e,r)=>r.camera.viewInverseTransposeMatrix))),f.code.add(_`
        void main(void) {
          vec3 normal = ${r.shading?_`normal`:_`getLocalUp(position, origin)`};
          vpos = position;

          gl_Position = transformPosition(proj, view, vpos);
          vnormal = normalize((viewNormal * vec4(normal, 1.0)).xyz);
        }
    `),N.code.add(_`void main() {
vec3 normal = normalize(vnormal);
if (gl_FrontFacing == false) {
normal = -normal;
}
gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 0.0);
}`)),r.output===t.Highlight&&(n.include(d),n.include(w,r),n.include(y,r),f.code.add(_`void main() {
setOverlayVTC(uv0);
gl_Position = transformPosition(proj, view, position);
}`),n.include(g),N.code.add(_`void main() {
vec4 overlayColor = getCombinedOverlayColor();
if (overlayColor.a == 0.0) {
gl_FragColor = vec4(0.0);
return;
}
outputHighlight();
}`)),n}const U=r(),W=n(),A=Object.freeze(Object.defineProperty({__proto__:null,TerrainPassParameters:N,build:$},Symbol.toStringTag,{value:"Module"}));export{N as T,A as a,$ as b};
