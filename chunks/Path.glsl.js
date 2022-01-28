/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/PathVertexPosition.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/NormalUtils.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder"],(function(e,a,i,o,r,l,d,n,t,s,c,g,v,m,u,p,h){"use strict";function b(e){const b=new h.ShaderBuilder;return b.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),b.varyings.add("vpos","vec3"),b.include(r.PathVertexPosition,e),0!==e.output&&7!==e.output||(b.include(o.Transform,{linearDepth:!1}),e.receiveShadows&&b.include(m.ReadShadowMap,e),b.include(a.ForwardLinearDepth,e),b.varyings.add("vnormal","vec3"),b.varyings.add("vcolor","vec4"),e.multipassTerrainEnabled&&b.varyings.add("depth","float"),b.vertex.code.add(p.glsl`
      void main() {
        vpos = calculateVPos();
        vnormal = normalize(localNormal());

        ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        gl_Position = transformPosition(proj, view, vpos);

        ${0===e.output?"forwardLinearDepth();":""}

        vcolor = getColor();
      }
    `)),e.multipassTerrainEnabled&&(b.fragment.include(n.ReadLinearDepth),b.include(c.multipassTerrainTest,e)),7===e.output&&(b.include(i.Slice,e),b.fragment.uniforms.add("camPos","vec3"),b.fragment.uniforms.add("localOrigin","vec3"),b.fragment.uniforms.add("opacity","float"),b.fragment.code.add(p.glsl`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        float combinedOpacity = vcolor.a * opacity;
        gl_FragColor = vec4(combinedOpacity);
      }
    `)),0===e.output&&(b.include(i.Slice,e),b.include(s.EvaluateSceneLighting,e),b.include(t.EvaluateAmbientOcclusion,e),e.receiveShadows&&b.include(m.ReadShadowMap,e),b.include(g.Normals,e),b.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("specular","vec3").add("opacity","float"),b.fragment.include(u.ColorConversion),b.fragment.code.add(p.glsl`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}

        shadingParams.viewDirection = normalize(vpos - camPos);
        shadingParams.normalView = vnormal;
        vec3 normal = shadingNormal(shadingParams);
        float ssao = evaluateAmbientOcclusionInverse();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 albedo = vcolor.rgb * max(ambient, diffuse); // combine the old material parameters into a single one
        float combinedOpacity = vcolor.a * opacity;
        albedo += 0.25 * specular; // don't completely ignore specular for now

        vec3 shadedColor = evaluateSceneLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight);
        gl_FragColor = vec4(shadedColor, combinedOpacity);
        gl_FragColor = highlightSlice(gl_FragColor, vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),1!==e.output&&3!==e.output||(b.include(o.Transform,{linearDepth:!0}),b.vertex.uniforms.add("nearFar","vec2"),b.varyings.add("depth","float"),b.vertex.code.add(p.glsl`void main() {
vpos = calculateVPos();
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
}`),b.include(i.Slice,e),b.include(l.OutputDepth,e),b.fragment.uniforms.add("timeElapsed","float"),b.fragment.code.add(p.glsl`void main() {
discardBySlice(vpos);
outputDepth(depth);
}`)),2===e.output&&(b.include(o.Transform,{linearDepth:!1}),b.include(v.NormalUtils,e),b.vertex.uniforms.add("viewNormal","mat4"),b.varyings.add("vnormal","vec3"),b.vertex.code.add(p.glsl`void main(void) {
vpos = calculateVPos();
vnormal = normalize((viewNormal * vec4(localNormal(), 1.0)).xyz);
gl_Position = transformPosition(proj, view, vpos);
}`),b.include(i.Slice,e),b.fragment.uniforms.add("waterColor","vec4"),b.fragment.code.add(p.glsl`void main() {
discardBySlice(vpos);
vec3 normal = normalize(vnormal);
if (gl_FrontFacing == false) normal = -normal;
gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
}`)),4===e.output&&(b.include(o.Transform,{linearDepth:!1}),b.include(v.NormalUtils,e),b.vertex.uniforms.add("viewNormal","mat4"),b.varyings.add("vnormal","vec3"),b.vertex.code.add(p.glsl`void main(void) {
vpos = calculateVPos();
gl_Position = transformPosition(proj, view, vpos);
}`),b.include(i.Slice,e),b.include(d.OutputHighlight),b.fragment.code.add(p.glsl`void main() {
discardBySlice(vpos);
outputHighlight();
}`)),b}const w=Object.freeze({__proto__:null,build:b});e.PathShader=w,e.build=b}));
