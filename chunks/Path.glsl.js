/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl","../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/NormalUtils.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/PathVertexPosition.glsl"],(function(e,a,o,i,l,r,d,n,t,s,c,g,v,m,u){"use strict";function h(e){const h=new i.ShaderBuilder;return h.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),h.varyings.add("vpos","vec3"),h.include(u.PathVertexPosition,e),0!==e.output&&7!==e.output||(h.include(o.Transform,{linearDepth:!1}),e.receiveShadows&&h.include(t.ReadShadowMap,e),h.include(s.ForwardLinearDepth,e),h.varyings.add("vnormal","vec3"),h.varyings.add("vcolor","vec4"),h.vertex.code.add(a.glsl`
      void main() {
        vpos = calculateVPos();
        vnormal = normalize(localNormal());

        gl_Position = transformPosition(proj, view, vpos);

        ${0===e.output?"forwardLinearDepth();":""}

        vcolor = getColor();
      }
    `)),7===e.output&&(h.include(r.Slice,e),h.fragment.uniforms.add("camPos","vec3"),h.fragment.uniforms.add("localOrigin","vec3"),h.fragment.uniforms.add("opacity","float"),h.fragment.code.add(a.glsl`
      void main() {
        discardBySlice(vpos);
        float combinedOpacity = vcolor.a * opacity;
        gl_FragColor = vec4(combinedOpacity);
      }
    `)),0===e.output&&(h.include(r.Slice,e),h.include(v.EvaluateSceneLighting,e),h.include(g.EvaluateAmbientOcclusion,e),e.receiveShadows&&h.include(t.ReadShadowMap,e),h.include(m.Normals,e),h.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("specular","vec3").add("opacity","float"),h.fragment.include(l.ColorConversion),h.fragment.code.add(a.glsl`
      void main() {
        discardBySlice(vpos);

        shadingParams.viewDirection = normalize(vpos - camPos);
        shadingParams.normalView = vnormal;
        vec3 normal = shadingNormal(shadingParams);
        float ssao = evaluateAmbientOcclusionInverse();

        float additionalAmbientScale = _oldHeuristicLighting(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
    `),e.receiveShadows?h.fragment.code.add(a.glsl`
        float shadow = readShadowMap(vpos, linearDepth);
      `):1===e.viewingMode?h.fragment.code.add(a.glsl`
        float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);
      `):h.fragment.code.add(a.glsl`
        float shadow = 0.0;
      `),h.fragment.code.add(a.glsl`
        vec3 albedo = vcolor.rgb * max(ambient, diffuse); // combine the old material parameters into a single one
        float combinedOpacity = vcolor.a * opacity;
        albedo += 0.25 * specular; // don't completely ignore specular for now

        vec3 shadedColor = evaluateSceneLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight);
        gl_FragColor = vec4(shadedColor, combinedOpacity);
        gl_FragColor = highlightSlice(gl_FragColor, vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),1!==e.output&&3!==e.output||(h.include(o.Transform,{linearDepth:!0}),h.vertex.uniforms.add("nearFar","vec2"),h.varyings.add("depth","float"),h.vertex.code.add(a.glsl`
        void main() {
          vpos = calculateVPos();
          gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
        }
    `),h.include(r.Slice,e),h.include(n.OutputDepth,e),h.fragment.uniforms.add("timeElapsed","float"),h.fragment.code.add(a.glsl`
        void main() {
          discardBySlice(vpos);
          outputDepth(depth);
        }
    `)),2===e.output&&(h.include(o.Transform,{linearDepth:!1}),h.include(c.NormalUtils,e),h.vertex.uniforms.add("viewNormal","mat4"),h.varyings.add("vnormal","vec3"),h.vertex.code.add(a.glsl`
        void main(void) {
          vpos = calculateVPos();
          vnormal = normalize((viewNormal * vec4(localNormal(), 1.0)).xyz);
          gl_Position = transformPosition(proj, view, vpos);
        }
    `),h.include(r.Slice,e),h.fragment.uniforms.add("waterColor","vec4"),h.fragment.code.add(a.glsl`
        void main() {
          discardBySlice(vpos);
          vec3 normal = normalize(vnormal);
          if (gl_FrontFacing == false) normal = -normal;
          gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
        }
    `)),4===e.output&&(h.include(o.Transform,{linearDepth:!1}),h.include(c.NormalUtils,e),h.vertex.uniforms.add("viewNormal","mat4"),h.varyings.add("vnormal","vec3"),h.vertex.code.add(a.glsl`
        void main(void) {
          vpos = calculateVPos();
          gl_Position = transformPosition(proj, view, vpos);
        }
    `),h.include(r.Slice,e),h.include(d.OutputHighlight),h.fragment.code.add(a.glsl`
      void main() {
        discardBySlice(vpos);
        outputHighlight();
      }
    `)),h}var p=Object.freeze({__proto__:null,build:h});e.PathShader=p,e.build=h}));
