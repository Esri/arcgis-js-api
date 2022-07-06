/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{ForwardLinearDepth as e}from"../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl.js";import{ShaderOutput as i}from"../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions.js";import{SliceDraw as r}from"../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js";import{Transform as o}from"../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl.js";import{OutputHighlight as a}from"../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl.js";import{EvaluateAmbientLighting as n}from"../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientLighting.glsl.js";import{MainLighting as t}from"../views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl.js";import{multipassTerrainTest as s}from"../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl.js";import{NormalUtils as l}from"../views/3d/webgl-engine/core/shaderLibrary/shading/NormalUtils.glsl.js";import{PBRMode as d}from"../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js";import{ReadShadowMapDraw as g}from"../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl.js";import{Water as v}from"../views/3d/webgl-engine/core/shaderLibrary/shading/Water.glsl.js";import{WaterDistortion as m}from"../views/3d/webgl-engine/core/shaderLibrary/shading/WaterDistortion.glsl.js";import{symbolAlphaCutoff as c}from"../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff.js";import{ColorConversion as p}from"../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl.js";import{addProjViewLocalOrigin as w,addCameraPosition as u}from"../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js";import{Float3PassUniform as h}from"../views/3d/webgl-engine/core/shaderModules/Float3PassUniform.js";import{Float4PassUniform as f}from"../views/3d/webgl-engine/core/shaderModules/Float4PassUniform.js";import{Float4Uniform as b}from"../views/3d/webgl-engine/core/shaderModules/Float4Uniform.js";import{FloatPassUniform as y}from"../views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js";import{glsl as j}from"../views/3d/webgl-engine/core/shaderModules/interfaces.js";import{Matrix4Uniform as C}from"../views/3d/webgl-engine/core/shaderModules/Matrix4Uniform.js";import{ShaderBuilder as M}from"../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js";import{TransparencyPassType as F}from"../views/3d/webgl-engine/lib/basicInterfaces.js";import{VertexAttribute as P}from"../views/3d/webgl-engine/lib/VertexAttribute.js";function L(L){const _=new M,{vertex:x,fragment:S}=_,D=w(_,L);return _.include(o),_.attributes.add(P.POSITION,"vec3"),_.attributes.add(P.UV0,"vec2"),x.uniforms.add(new f("waterColor",(e=>e.color))),L.output!==i.Color&&L.output!==i.Alpha||(_.include(l,L),_.include(e,L),_.varyings.add("vuv","vec2"),_.varyings.add("vpos","vec3"),_.varyings.add("vnormal","vec3"),_.varyings.add("vtbnMatrix","mat3"),S.uniforms.add(D),L.hasMultipassTerrain&&_.varyings.add("depth","float"),x.code.add(j`
      void main(void) {
        if (waterColor.a < ${j.float(c)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vuv = uv0;
        vpos = position;

        vnormal = getLocalUp(vpos, localOrigin);
        vtbnMatrix = getTBNMatrix(vnormal);

        ${L.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}

        gl_Position = transformPosition(proj, view, vpos);
        ${L.output===i.Color?"forwardLinearDepth();":""}
      }
    `)),_.include(s,L),L.output===i.Alpha&&(_.include(r,L),S.uniforms.add(new b("waterColor")),S.code.add(j`
        void main() {
          discardBySlice(vpos);
          ${L.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}

          gl_FragColor = vec4(waterColor.a);
        }
      `)),L.output===i.Color&&(_.include(t,{isGround:!1}),_.include(n,{pbrMode:d.Disabled,lightingSphericalHarmonicsOrder:2}),_.include(m),_.include(r,L),_.include(g,L),_.include(v,L),S.uniforms.add([new b("waterColor"),new h("lightingMainDirection",((e,i)=>i.lighting.lightingMainDirection)),new h("lightingMainIntensity",((e,i)=>i.lighting.mainLight.intensity)),new y("timeElapsed",(e=>e.timeElapsed)),new C("view")]),u(S,L),S.include(p),S.code.add(j`
      void main() {
        discardBySlice(vpos);
        ${L.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        vec3 localUp = vnormal;
        // the created normal is in tangent space
        vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);

        // we rotate the normal according to the tangent-bitangent-normal-Matrix
        vec3 n = normalize(vtbnMatrix * tangentNormalFoam.xyz);
        vec3 v = -normalize(vpos - cameraPosition);
        float shadow = ${L.receiveShadows?j`1.0 - readShadowMap(vpos, linearDepth)`:"1.0"};
        vec4 vPosView = view*vec4(vpos, 1.0);
        vec4 final = vec4(getSeaColor(n, v, lightingMainDirection, waterColor.rgb, lightingMainIntensity, localUp, shadow, tangentNormalFoam.w, vPosView.xyz, vpos + localOrigin), waterColor.w);

        // gamma correction
        gl_FragColor = delinearizeGamma(final);
        gl_FragColor = highlightSlice(gl_FragColor, vpos);
        ${L.transparencyPassType===F.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),L.output===i.Normal&&(_.include(l,L),_.include(m,L),_.include(r,L),_.varyings.add("vpos","vec3"),_.varyings.add("vuv","vec2"),x.code.add(j`
        void main(void) {
          if (waterColor.a < ${j.float(c)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vuv = uv0;
          vpos = position;

          gl_Position = transformPosition(proj, view, vpos);
        }
    `),S.uniforms.add(new y("timeElapsed",(e=>e.timeElapsed))),S.code.add(j`void main() {
discardBySlice(vpos);
vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);
tangentNormalFoam.xyz = normalize(tangentNormalFoam.xyz);
gl_FragColor = vec4((tangentNormalFoam.xyz + vec3(1.0)) * 0.5, tangentNormalFoam.w);
}`)),L.output===i.Draped&&(_.varyings.add("vpos","vec3"),x.code.add(j`
        void main(void) {
          if (waterColor.a < ${j.float(c)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vpos = position;
          gl_Position = transformPosition(proj, view, vpos);
        }
    `),S.uniforms.add(new b("waterColor")),S.code.add(j`void main() {
gl_FragColor = waterColor;
}`)),L.output===i.Highlight&&(_.include(a),_.varyings.add("vpos","vec3"),x.code.add(j`
      void main(void) {
        if (waterColor.a < ${j.float(c)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);
      }
    `),_.include(r,L),S.code.add(j`void main() {
discardBySlice(vpos);
outputHighlight();
}`)),_}const _=Object.freeze(Object.defineProperty({__proto__:null,build:L},Symbol.toStringTag,{value:"Module"}));export{_ as W,L as b};
