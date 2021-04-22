/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl","../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/NormalUtils.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/PathVertexPosition.glsl"],(function(e,a,i,o,l,r,d,n,t,s,c,g,v,m,u,p,h){"use strict";function f(e){const f=new o.ShaderBuilder;return f.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),f.varyings.add("vpos","vec3"),f.include(h.PathVertexPosition,e),0!==e.output&&7!==e.output||(f.include(i.Transform,{linearDepth:!1}),e.receiveShadows&&f.include(c.ReadShadowMap,e),f.include(g.ForwardLinearDepth,e),f.varyings.add("vnormal","vec3"),f.varyings.add("vcolor","vec4"),e.multipassTerrainEnabled&&f.varyings.add("depth","float"),f.vertex.code.add(a.glsl`
      void main() {
        vpos = calculateVPos();
        vnormal = normalize(localNormal());

        ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        gl_Position = transformPosition(proj, view, vpos);

        ${0===e.output?"forwardLinearDepth();":""}

        vcolor = getColor();
      }
    `)),e.multipassTerrainEnabled&&(f.fragment.include(d.ReadLinearDepth),f.include(t.multipassTerrainTest,e)),7===e.output&&(f.include(r.Slice,e),f.fragment.uniforms.add("camPos","vec3"),f.fragment.uniforms.add("localOrigin","vec3"),f.fragment.uniforms.add("opacity","float"),f.fragment.code.add(a.glsl`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        float combinedOpacity = vcolor.a * opacity;
        gl_FragColor = vec4(combinedOpacity);
      }
    `)),0===e.output&&(f.include(r.Slice,e),f.include(u.EvaluateSceneLighting,e),f.include(m.EvaluateAmbientOcclusion,e),e.receiveShadows&&f.include(c.ReadShadowMap,e),f.include(p.Normals,e),f.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("specular","vec3").add("opacity","float"),f.fragment.include(l.ColorConversion),f.fragment.code.add(a.glsl`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}

        shadingParams.viewDirection = normalize(vpos - camPos);
        shadingParams.normalView = vnormal;
        vec3 normal = shadingNormal(shadingParams);
        float ssao = evaluateAmbientOcclusionInverse();

        float additionalAmbientScale = _oldHeuristicLighting(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
    `),e.receiveShadows?f.fragment.code.add(a.glsl`
        float shadow = readShadowMap(vpos, linearDepth);
      `):1===e.viewingMode?f.fragment.code.add(a.glsl`
        float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);
      `):f.fragment.code.add(a.glsl`
        float shadow = 0.0;
      `),f.fragment.code.add(a.glsl`
        vec3 albedo = vcolor.rgb * max(ambient, diffuse); // combine the old material parameters into a single one
        float combinedOpacity = vcolor.a * opacity;
        albedo += 0.25 * specular; // don't completely ignore specular for now

        vec3 shadedColor = evaluateSceneLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight);
        gl_FragColor = vec4(shadedColor, combinedOpacity);
        gl_FragColor = highlightSlice(gl_FragColor, vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),1!==e.output&&3!==e.output||(f.include(i.Transform,{linearDepth:!0}),f.vertex.uniforms.add("nearFar","vec2"),f.varyings.add("depth","float"),f.vertex.code.add(a.glsl`
        void main() {
          vpos = calculateVPos();
          gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
        }
    `),f.include(r.Slice,e),f.include(s.OutputDepth,e),f.fragment.uniforms.add("timeElapsed","float"),f.fragment.code.add(a.glsl`
        void main() {
          discardBySlice(vpos);
          outputDepth(depth);
        }
    `)),2===e.output&&(f.include(i.Transform,{linearDepth:!1}),f.include(v.NormalUtils,e),f.vertex.uniforms.add("viewNormal","mat4"),f.varyings.add("vnormal","vec3"),f.vertex.code.add(a.glsl`
        void main(void) {
          vpos = calculateVPos();
          vnormal = normalize((viewNormal * vec4(localNormal(), 1.0)).xyz);
          gl_Position = transformPosition(proj, view, vpos);
        }
    `),f.include(r.Slice,e),f.fragment.uniforms.add("waterColor","vec4"),f.fragment.code.add(a.glsl`
        void main() {
          discardBySlice(vpos);
          vec3 normal = normalize(vnormal);
          if (gl_FrontFacing == false) normal = -normal;
          gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
        }
    `)),4===e.output&&(f.include(i.Transform,{linearDepth:!1}),f.include(v.NormalUtils,e),f.vertex.uniforms.add("viewNormal","mat4"),f.varyings.add("vnormal","vec3"),f.vertex.code.add(a.glsl`
        void main(void) {
          vpos = calculateVPos();
          gl_Position = transformPosition(proj, view, vpos);
        }
    `),f.include(r.Slice,e),f.include(n.OutputHighlight),f.fragment.code.add(a.glsl`
      void main() {
        discardBySlice(vpos);
        outputHighlight();
      }
    `)),f}var w=Object.freeze({__proto__:null,build:f});e.PathShader=w,e.build=f}));
