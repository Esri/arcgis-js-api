/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{ForwardLinearDepth as e}from"../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl.js";import{ShaderOutput as o}from"../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions.js";import{SliceDraw as i}from"../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js";import{Transform as a}from"../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl.js";import{PathVertexPosition as r}from"../views/3d/webgl-engine/core/shaderLibrary/attributes/PathVertexPosition.glsl.js";import{OutputDepth as l}from"../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl.js";import{OutputHighlight as n}from"../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl.js";import{EvaluateAmbientOcclusion as s}from"../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl.js";import{EvaluateSceneLighting as t}from"../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl.js";import{multipassTerrainTest as d}from"../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl.js";import{Normals as c}from"../views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl.js";import{NormalUtils as g}from"../views/3d/webgl-engine/core/shaderLibrary/shading/NormalUtils.glsl.js";import{ReadShadowMapDraw as m}from"../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl.js";import{ColorConversion as p}from"../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl.js";import{addProjViewLocalOrigin as v,addCameraPosition as u}from"../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js";import{Float2PassUniform as h}from"../views/3d/webgl-engine/core/shaderModules/Float2PassUniform.js";import{Float3PassUniform as w}from"../views/3d/webgl-engine/core/shaderModules/Float3PassUniform.js";import{Float4Uniform as b}from"../views/3d/webgl-engine/core/shaderModules/Float4Uniform.js";import{FloatPassUniform as f}from"../views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js";import{glsl as y}from"../views/3d/webgl-engine/core/shaderModules/interfaces.js";import{Matrix4PassUniform as j}from"../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform.js";import{ShaderBuilder as F}from"../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js";import{TransparencyPassType as P}from"../views/3d/webgl-engine/lib/basicInterfaces.js";import{ambientBoost as L}from"../views/3d/webgl-engine/lighting/SceneLighting.js";function S(S){const M=new F,C=v(M,S),{vertex:_,fragment:O}=M;return M.varyings.add("vpos","vec3"),M.include(r,S),S.output!==o.Color&&S.output!==o.Alpha||(M.include(a),M.include(m,S),M.include(e,S),M.varyings.add("vnormal","vec3"),M.varyings.add("vcolor","vec4"),S.hasMultipassTerrain&&M.varyings.add("depth","float"),_.code.add(y`
      void main() {
        vpos = calculateVPos();
        vnormal = normalize(localNormal());

        ${S.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        gl_Position = transformPosition(proj, view, vpos);

        ${S.output===o.Color?"forwardLinearDepth();":""}

        vcolor = getColor();
      }
    `)),M.include(d,S),S.output===o.Alpha&&(M.include(i,S),O.uniforms.add(new f("opacity",(e=>e.opacity))),O.code.add(y`
      void main() {
        discardBySlice(vpos);
        ${S.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        float combinedOpacity = vcolor.a * opacity;
        gl_FragColor = vec4(combinedOpacity);
      }
    `)),S.output===o.Color&&(M.include(i,S),M.include(t,S),M.include(s,S),M.include(m,S),M.include(c,S),u(O,S),O.uniforms.add([C,new w("ambient",(e=>e.ambient)),new w("diffuse",(e=>e.diffuse)),new w("specular",(e=>e.specular)),new f("opacity",(e=>e.opacity)),new f("lightingGlobalFactor",((e,o)=>o.lighting.globalFactor)),new w("lightingMainIntensity",((e,o)=>o.lighting.mainLight.intensity))]),O.constants.add("ambientBoostFactor","float",L),O.include(p),O.code.add(y`
      void main() {
        discardBySlice(vpos);
        ${S.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}

        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        shadingParams.normalView = vnormal;
        vec3 normal = shadingNormal(shadingParams);
        float ssao = evaluateAmbientOcclusionInverse();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${S.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":S.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 albedo = vcolor.rgb * max(ambient, diffuse); // combine the old material parameters into a single one
        float combinedOpacity = vcolor.a * opacity;
        albedo += 0.25 * specular; // don't completely ignore specular for now

        vec3 shadedColor = evaluateSceneLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight);
        gl_FragColor = vec4(shadedColor, combinedOpacity);
        gl_FragColor = highlightSlice(gl_FragColor, vpos);
        ${S.transparencyPassType===P.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),S.output!==o.Depth&&S.output!==o.Shadow||(M.include(a,{hasModelTransformation:!1,linearDepth:!0}),_.uniforms.add(new h("nearFar",((e,o)=>o.camera.nearFar))),M.varyings.add("depth","float"),_.code.add(y`void main() {
vpos = calculateVPos();
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
}`),M.include(i,S),M.include(l,S),O.code.add(y`void main() {
discardBySlice(vpos);
outputDepth(depth);
}`)),S.output===o.Normal&&(M.include(a),M.include(g,S),_.uniforms.add(new j("viewNormal",((e,o)=>o.camera.viewInverseTransposeMatrix))),M.varyings.add("vnormal","vec3"),_.code.add(y`void main(void) {
vpos = calculateVPos();
vnormal = normalize((viewNormal * vec4(localNormal(), 1.0)).xyz);
gl_Position = transformPosition(proj, view, vpos);
}`),M.include(i,S),O.uniforms.add(new b("waterColor")),O.code.add(y`void main() {
discardBySlice(vpos);
vec3 normal = normalize(vnormal);
if (gl_FrontFacing == false) normal = -normal;
gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
}`)),S.output===o.Highlight&&(M.include(a),M.include(g,S),M.varyings.add("vnormal","vec3"),_.code.add(y`void main(void) {
vpos = calculateVPos();
gl_Position = transformPosition(proj, view, vpos);
}`),M.include(i,S),M.include(n),O.code.add(y`void main() {
discardBySlice(vpos);
outputHighlight();
}`)),M}const M=Object.freeze(Object.defineProperty({__proto__:null,build:S},Symbol.toStringTag,{value:"Module"}));export{M as P,S as b};
