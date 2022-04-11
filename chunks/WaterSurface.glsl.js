/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientLighting.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateMainLighting.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/NormalUtils.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/Water.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/WaterDistortion.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/lib/VertexAttribute"],(function(e,a,i,r,o,t,l,n,d,s,g,v,c,u,p,m,h,w,b,f){"use strict";function y(e){const y=new b.ShaderBuilder;return y.include(o.Transform,{linearDepth:!1}),y.attributes.add(f.VertexAttribute.POSITION,"vec3"),y.attributes.add(f.VertexAttribute.UV0,"vec2"),y.vertex.uniforms.add("proj","mat4").add("view","mat4").add("localOrigin","vec3"),y.vertex.uniforms.add("waterColor","vec4"),e.output!==i.ShaderOutput.Color&&e.output!==i.ShaderOutput.Alpha||(y.include(g.NormalUtils,e),y.include(a.ForwardLinearDepth,e),y.varyings.add("vuv","vec2"),y.varyings.add("vpos","vec3"),y.varyings.add("vnormal","vec3"),y.varyings.add("vtbnMatrix","mat3"),y.fragment.uniforms.add("localOrigin","vec3"),e.multipassTerrainEnabled&&y.varyings.add("depth","float"),y.vertex.code.add(w.glsl`
      void main(void) {
        if (waterColor.a < ${w.glsl.float(m.symbolAlphaCutoff)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vuv = uv0;
        vpos = position;

        vnormal = getLocalUp(vpos, localOrigin);
        vtbnMatrix = getTBNMatrix(vnormal);

        ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}

        gl_Position = transformPosition(proj, view, vpos);
        ${e.output===i.ShaderOutput.Color?"forwardLinearDepth();":""}
      }
    `)),e.multipassTerrainEnabled&&(y.fragment.include(l.ReadLinearDepth),y.include(s.multipassTerrainTest,e)),e.output===i.ShaderOutput.Alpha&&(y.include(r.Slice,e),y.fragment.uniforms.add("waterColor","vec4"),y.fragment.code.add(w.glsl`
        void main() {
          discardBySlice(vpos);
          ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}

          gl_FragColor = vec4(waterColor.a);
        }
      `)),e.output===i.ShaderOutput.Color&&(y.include(d.EvaluateMainLighting),y.include(n.EvaluateAmbientLighting,{pbrMode:v.PBRMode.Disabled,lightingSphericalHarmonicsOrder:2}),y.include(p.WaterDistortion,e),y.include(r.Slice,e),e.receiveShadows&&y.include(c.ReadShadowMap,e),y.include(u.Water,e),y.fragment.uniforms.add("waterColor","vec4").add("lightingMainDirection","vec3").add("lightingMainIntensity","vec3").add("lightingSpecularStrength","float").add("lightingEnvironmentStrength","float").add("cameraPosition","vec3").add("timeElapsed","float").add("view","mat4"),y.fragment.include(h.ColorConversion),y.fragment.code.add(w.glsl`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        vec3 localUp = vnormal;
        // the created normal is in tangent space
        vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);

        // we rotate the normal according to the tangent-bitangent-normal-Matrix
        vec3 n = normalize(vtbnMatrix * tangentNormalFoam.xyz);
        vec3 v = -normalize(vpos - cameraPosition);
        float shadow = ${e.receiveShadows?w.glsl`1.0 - readShadowMap(vpos, linearDepth)`:"1.0"};
        vec4 vPosView = view*vec4(vpos, 1.0);
        vec4 final = vec4(getSeaColor(n, v, lightingMainDirection, waterColor.rgb, lightingMainIntensity, localUp, shadow, tangentNormalFoam.w, vPosView.xyz, vpos + localOrigin), waterColor.w);

        // gamma correction
        gl_FragColor = delinearizeGamma(final);
        gl_FragColor = highlightSlice(gl_FragColor, vpos);
        ${e.oitEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),e.output===i.ShaderOutput.Normal&&(y.include(g.NormalUtils,e),y.include(p.WaterDistortion,e),y.include(r.Slice,e),y.varyings.add("vpos","vec3"),y.varyings.add("vuv","vec2"),y.vertex.code.add(w.glsl`
        void main(void) {
          if (waterColor.a < ${w.glsl.float(m.symbolAlphaCutoff)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vuv = uv0;
          vpos = position;

          gl_Position = transformPosition(proj, view, vpos);
        }
    `),y.fragment.uniforms.add("timeElapsed","float"),y.fragment.code.add(w.glsl`void main() {
discardBySlice(vpos);
vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);
tangentNormalFoam.xyz = normalize(tangentNormalFoam.xyz);
gl_FragColor = vec4((tangentNormalFoam.xyz + vec3(1.0)) * 0.5, tangentNormalFoam.w);
}`)),e.output===i.ShaderOutput.Draped&&(y.varyings.add("vpos","vec3"),y.vertex.code.add(w.glsl`
        void main(void) {
          if (waterColor.a < ${w.glsl.float(m.symbolAlphaCutoff)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vpos = position;
          gl_Position = transformPosition(proj, view, vpos);
        }
    `),y.fragment.uniforms.add("waterColor","vec4"),y.fragment.code.add(w.glsl`void main() {
gl_FragColor = waterColor;
}`)),e.output===i.ShaderOutput.Highlight&&(y.include(t.OutputHighlight),y.varyings.add("vpos","vec3"),y.vertex.code.add(w.glsl`
      void main(void) {
        if (waterColor.a < ${w.glsl.float(m.symbolAlphaCutoff)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);
      }
    `),y.include(r.Slice,e),y.fragment.code.add(w.glsl`void main() {
discardBySlice(vpos);
outputHighlight();
}`)),y}const S=Object.freeze(Object.defineProperty({__proto__:null,build:y},Symbol.toStringTag,{value:"Module"}));e.WaterSurface=S,e.build=y}));
