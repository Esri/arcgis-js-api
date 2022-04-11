/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../views/ViewingMode","../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/PathVertexPosition.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/NormalUtils.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder"],(function(e,a,i,o,r,l,d,n,t,s,c,g,u,v,m,p,h,w,b){"use strict";function f(e){const f=new b.ShaderBuilder;return f.vertex.uniforms.add("proj","mat4").add("view","mat4").add("cameraPosition","vec3").add("localOrigin","vec3"),f.varyings.add("vpos","vec3"),f.include(d.PathVertexPosition,e),e.output!==o.ShaderOutput.Color&&e.output!==o.ShaderOutput.Alpha||(f.include(l.Transform,{linearDepth:!1}),e.receiveShadows&&f.include(p.ReadShadowMap,e),f.include(i.ForwardLinearDepth,e),f.varyings.add("vnormal","vec3"),f.varyings.add("vcolor","vec4"),e.multipassTerrainEnabled&&f.varyings.add("depth","float"),f.vertex.code.add(w.glsl`
      void main() {
        vpos = calculateVPos();
        vnormal = normalize(localNormal());

        ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        gl_Position = transformPosition(proj, view, vpos);

        ${e.output===o.ShaderOutput.Color?"forwardLinearDepth();":""}

        vcolor = getColor();
      }
    `)),e.multipassTerrainEnabled&&(f.fragment.include(s.ReadLinearDepth),f.include(u.multipassTerrainTest,e)),e.output===o.ShaderOutput.Alpha&&(f.include(r.Slice,e),f.fragment.uniforms.add("cameraPosition","vec3"),f.fragment.uniforms.add("localOrigin","vec3"),f.fragment.uniforms.add("opacity","float"),f.fragment.code.add(w.glsl`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        float combinedOpacity = vcolor.a * opacity;
        gl_FragColor = vec4(combinedOpacity);
      }
    `)),e.output===o.ShaderOutput.Color&&(f.include(r.Slice,e),f.include(g.EvaluateSceneLighting,e),f.include(c.EvaluateAmbientOcclusion,e),e.receiveShadows&&f.include(p.ReadShadowMap,e),f.include(v.Normals,e),f.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("specular","vec3").add("opacity","float"),f.fragment.include(h.ColorConversion),f.fragment.code.add(w.glsl`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}

        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        shadingParams.normalView = vnormal;
        vec3 normal = shadingNormal(shadingParams);
        float ssao = evaluateAmbientOcclusionInverse();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.viewingMode===a.ViewingMode.Global?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 albedo = vcolor.rgb * max(ambient, diffuse); // combine the old material parameters into a single one
        float combinedOpacity = vcolor.a * opacity;
        albedo += 0.25 * specular; // don't completely ignore specular for now

        vec3 shadedColor = evaluateSceneLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight);
        gl_FragColor = vec4(shadedColor, combinedOpacity);
        gl_FragColor = highlightSlice(gl_FragColor, vpos);
        ${e.oitEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),e.output!==o.ShaderOutput.Depth&&e.output!==o.ShaderOutput.Shadow||(f.include(l.Transform,{linearDepth:!0}),f.vertex.uniforms.add("nearFar","vec2"),f.varyings.add("depth","float"),f.vertex.code.add(w.glsl`void main() {
vpos = calculateVPos();
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
}`),f.include(r.Slice,e),f.include(n.OutputDepth,e),f.fragment.uniforms.add("timeElapsed","float"),f.fragment.code.add(w.glsl`void main() {
discardBySlice(vpos);
outputDepth(depth);
}`)),e.output===o.ShaderOutput.Normal&&(f.include(l.Transform,{linearDepth:!1}),f.include(m.NormalUtils,e),f.vertex.uniforms.add("viewNormal","mat4"),f.varyings.add("vnormal","vec3"),f.vertex.code.add(w.glsl`void main(void) {
vpos = calculateVPos();
vnormal = normalize((viewNormal * vec4(localNormal(), 1.0)).xyz);
gl_Position = transformPosition(proj, view, vpos);
}`),f.include(r.Slice,e),f.fragment.uniforms.add("waterColor","vec4"),f.fragment.code.add(w.glsl`void main() {
discardBySlice(vpos);
vec3 normal = normalize(vnormal);
if (gl_FrontFacing == false) normal = -normal;
gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
}`)),e.output===o.ShaderOutput.Highlight&&(f.include(l.Transform,{linearDepth:!1}),f.include(m.NormalUtils,e),f.vertex.uniforms.add("viewNormal","mat4"),f.varyings.add("vnormal","vec3"),f.vertex.code.add(w.glsl`void main(void) {
vpos = calculateVPos();
gl_Position = transformPosition(proj, view, vpos);
}`),f.include(r.Slice,e),f.include(t.OutputHighlight),f.fragment.code.add(w.glsl`void main() {
discardBySlice(vpos);
outputHighlight();
}`)),f}const y=Object.freeze(Object.defineProperty({__proto__:null,build:f},Symbol.toStringTag,{value:"Module"}));e.PathShader=y,e.build=f}));
