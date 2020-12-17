/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/WaterDistortion.glsl","../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/NormalUtils.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/Water.glsl"],(function(e,a,o,i,r,l,t,n,d,s,v,g,c){"use strict";function m(e){const m=new i.ShaderBuilder;return m.include(o.Transform,{linearDepth:!1}),m.attributes.add("position","vec3"),m.attributes.add("uv0","vec2"),m.vertex.uniforms.add("proj","mat4").add("view","mat4").add("localOrigin","vec3"),m.vertex.uniforms.add("waterColor","vec4"),0!==e.output&&7!==e.output||(m.include(g.NormalUtils,e),m.include(v.ForwardLinearDepth,e),m.varyings.add("vuv","vec2"),m.varyings.add("vpos","vec3"),m.varyings.add("vnormal","vec3"),m.varyings.add("vtbnMatrix","mat3"),m.vertex.code.add(a.glsl`
      void main(void) {
        if (waterColor.a < ${a.glsl.float(n.symbolAlphaCutoff)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vuv = uv0;
        vpos = position;

        vnormal = getLocalUp(vpos, localOrigin);
        vtbnMatrix = getTBNMatrix(vnormal);

        gl_Position = transformPosition(proj, view, vpos);
        ${0===e.output?"forwardLinearDepth();":""}
      }
    `)),7===e.output&&(m.include(l.Slice,e),m.fragment.uniforms.add("waterColor","vec4"),m.fragment.code.add(a.glsl`
        void main() {
          discardBySlice(vpos);

          gl_FragColor = vec4(waterColor.a);
        }
      `)),0===e.output&&(m.include(s.WaterDistortion,e),m.include(l.Slice,e),e.receiveShadows&&m.include(d.ReadShadowMap,e),m.include(c.Water,e),m.fragment.uniforms.add("waterColor","vec4").add("lightingMainDirection","vec3").add("lightingMainIntensity","vec3").add("camPos","vec3").add("timeElapsed","float").add("view","mat4"),m.fragment.include(r.ColorConversion),m.fragment.code.add(a.glsl`
      void main() {
        discardBySlice(vpos);
        vec3 localUp = vnormal;
        // the created normal is in tangent space
        vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);

        // we rotate the normal according to the tangent-bitangent-normal-Matrix
        vec3 n = normalize(vtbnMatrix * tangentNormalFoam.xyz);
        vec3 v = -normalize(vpos - camPos);
        vec3 l = normalize(-lightingMainDirection);
        float shadow = ${e.receiveShadows?a.glsl`1.0 - readShadowMap(vpos, linearDepth)`:"1.0"};
        vec4 vPosView = view*vec4(vpos, 1.0);
        vec4 final = vec4(getSeaColor(n, v, l, waterColor.rgb, lightingMainIntensity, localUp, shadow, tangentNormalFoam.w, vPosView.xyz), waterColor.w);

        // gamma correction
        gl_FragColor = delinearizeGamma(final);
        gl_FragColor = highlightSlice(gl_FragColor, vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),2===e.output&&(m.include(g.NormalUtils,e),m.include(s.WaterDistortion,e),m.include(l.Slice,e),m.varyings.add("vpos","vec3"),m.varyings.add("vuv","vec2"),m.vertex.code.add(a.glsl`
        void main(void) {
          if (waterColor.a < ${a.glsl.float(n.symbolAlphaCutoff)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vuv = uv0;
          vpos = position;

          gl_Position = transformPosition(proj, view, vpos);
        }
    `),m.fragment.uniforms.add("timeElapsed","float"),m.fragment.code.add(a.glsl`
        void main() {
          discardBySlice(vpos);

          // the created normal is in tangent space and foam
          vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);
          tangentNormalFoam.xyz = normalize(tangentNormalFoam.xyz);

          gl_FragColor = vec4((tangentNormalFoam.xyz + vec3(1.0)) * 0.5, tangentNormalFoam.w);
        }
    `)),5===e.output&&(m.varyings.add("vpos","vec3"),m.vertex.code.add(a.glsl`
        void main(void) {
          if (waterColor.a < ${a.glsl.float(n.symbolAlphaCutoff)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vpos = position;
          gl_Position = transformPosition(proj, view, vpos);
        }
    `),m.fragment.uniforms.add("waterColor","vec4"),m.fragment.code.add(a.glsl`
        void main() {
          gl_FragColor = waterColor;
        }
    `)),4===e.output&&(m.include(t.OutputHighlight),m.varyings.add("vpos","vec3"),m.vertex.code.add(a.glsl`
      void main(void) {
        if (waterColor.a < ${a.glsl.float(n.symbolAlphaCutoff)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);
      }
    `),m.include(l.Slice,e),m.fragment.code.add(a.glsl`
      void main() {
        discardBySlice(vpos);
        outputHighlight();
      }
    `)),m}var u=Object.freeze({__proto__:null,build:m});e.WaterSurface=u,e.build=m}));
