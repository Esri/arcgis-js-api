/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientLighting.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/NormalUtils.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/Water.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/WaterDistortion.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff","../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl","../views/3d/webgl-engine/core/shaderModules/Float4PassUniform","../views/3d/webgl-engine/core/shaderModules/FloatPassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/lib/TransparencyPassType","../views/3d/webgl-engine/lib/VertexAttribute"],(function(e,a,i,r,o,l,t,s,n,d,g,v,c,u,p,h,m,w,b,f,y,C,S){"use strict";function P(e){const P=new y.ShaderBuilder,{vertex:L,fragment:F}=P;m.addProjViewLocalOrigin(L,e),P.include(o.Transform,e),P.attributes.add(S.VertexAttribute.POSITION,"vec3"),P.attributes.add(S.VertexAttribute.UV0,"vec2");const M=new w.Float4PassUniform("waterColor",(e=>e.color));if(e.output===i.ShaderOutput.Color&&e.isDraped)return P.varyings.add("vpos","vec3"),L.uniforms.add(M),L.code.add(f.glsl`
        void main(void) {
          if (waterColor.a < ${f.glsl.float(p.symbolAlphaCutoff)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vpos = position;
          gl_Position = transformPosition(proj, view, vpos);
        }
    `),F.uniforms.add(M),F.code.add(f.glsl`void main() {
gl_FragColor = waterColor;
}`),P;switch(e.output!==i.ShaderOutput.Color&&e.output!==i.ShaderOutput.Alpha||(P.include(d.NormalUtils,e),P.include(a.ForwardLinearDepth,e),P.varyings.add("vuv","vec2"),P.varyings.add("vpos","vec3"),P.varyings.add("vnormal","vec3"),P.varyings.add("vtbnMatrix","mat3"),e.hasMultipassTerrain&&P.varyings.add("depth","float"),L.uniforms.add(M),L.code.add(f.glsl`
      void main(void) {
        if (waterColor.a < ${f.glsl.float(p.symbolAlphaCutoff)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vuv = uv0;
        vpos = position;

        vnormal = getLocalUp(vpos, localOrigin);
        vtbnMatrix = getTBNMatrix(vnormal);

        ${e.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}

        gl_Position = transformPosition(proj, view, vpos);
        ${e.output===i.ShaderOutput.Color?"forwardLinearDepth();":""}
      }
    `)),P.include(n.multipassTerrainTest,e),e.output){case i.ShaderOutput.Alpha:P.include(r.SliceDraw,e),F.uniforms.add(M),F.code.add(f.glsl`
        void main() {
          discardBySlice(vpos);
          ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}

          gl_FragColor = vec4(waterColor.a);
        }
      `);break;case i.ShaderOutput.Color:P.include(s.MainLighting,e),P.include(t.EvaluateAmbientLighting,{pbrMode:g.PBRMode.Disabled,lightingSphericalHarmonicsOrder:2}),P.include(u.WaterDistortion),P.include(r.SliceDraw,e),P.include(v.ReadShadowMapDraw,e),P.include(c.Water,e),F.uniforms.add([M,new b.FloatPassUniform("timeElapsed",(e=>e.timeElapsed)),L.uniforms.get("view"),L.uniforms.get("localOrigin")]),m.addCameraPosition(F,e),F.include(h.ColorConversion),s.addMainLightDirection(F),s.addMainLightIntensity(F),F.code.add(f.glsl`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        vec3 localUp = vnormal;
        // the created normal is in tangent space
        vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);

        // we rotate the normal according to the tangent-bitangent-normal-Matrix
        vec3 n = normalize(vtbnMatrix * tangentNormalFoam.xyz);
        vec3 v = -normalize(vpos - cameraPosition);
        float shadow = ${e.receiveShadows?f.glsl`1.0 - readShadowMap(vpos, linearDepth)`:"1.0"};
        vec4 vPosView = view * vec4(vpos, 1.0);
        vec4 final = vec4(getSeaColor(n, v, mainLightDirection, waterColor.rgb, mainLightIntensity, localUp, shadow, tangentNormalFoam.w, vPosView.xyz, vpos + localOrigin), waterColor.w);

        // gamma correction
        gl_FragColor = delinearizeGamma(final);
        gl_FragColor = highlightSlice(gl_FragColor, vpos);
        ${e.transparencyPassType===C.TransparencyPassType.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `);break;case i.ShaderOutput.Normal:P.include(d.NormalUtils,e),P.include(u.WaterDistortion,e),P.include(r.SliceDraw,e),P.varyings.add("vpos","vec3"),P.varyings.add("vuv","vec2"),L.uniforms.add(M),L.code.add(f.glsl`
        void main(void) {
          if (waterColor.a < ${f.glsl.float(p.symbolAlphaCutoff)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vuv = uv0;
          vpos = position;

          gl_Position = transformPosition(proj, view, vpos);
        }
    `),F.uniforms.add(new b.FloatPassUniform("timeElapsed",(e=>e.timeElapsed))),F.code.add(f.glsl`void main() {
discardBySlice(vpos);
vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);
tangentNormalFoam.xyz = normalize(tangentNormalFoam.xyz);
gl_FragColor = vec4((tangentNormalFoam.xyz + vec3(1.0)) * 0.5, tangentNormalFoam.w);
}`);break;case i.ShaderOutput.Highlight:P.include(l.OutputHighlight,e),P.varyings.add("vpos","vec3"),L.uniforms.add(M),L.code.add(f.glsl`
      void main(void) {
        if (waterColor.a < ${f.glsl.float(p.symbolAlphaCutoff)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);
      }
    `),P.include(r.SliceDraw,e),F.code.add(f.glsl`void main() {
discardBySlice(vpos);
outputHighlight();
}`)}return P}const L=Object.freeze(Object.defineProperty({__proto__:null,build:P},Symbol.toStringTag,{value:"Module"}));e.WaterSurface=L,e.build=P}));
