/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{c as e}from"./vec4f64.js";import{ScreenSizeScaling as o}from"../views/3d/webgl-engine/core/shaderLibrary/ScreenSizeScaling.glsl.js";import{ShaderOutput as r}from"../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions.js";import{SliceDraw as i}from"../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js";import{Transform as a}from"../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl.js";import{multipassTerrainTest as s}from"../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl.js";import{symbolAlphaCutoff as d}from"../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff.js";import{ColorConversion as l}from"../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl.js";import{addProjViewLocalOrigin as n}from"../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js";import{Float3PassUniform as t}from"../views/3d/webgl-engine/core/shaderModules/Float3PassUniform.js";import{Float4PassUniform as c}from"../views/3d/webgl-engine/core/shaderModules/Float4PassUniform.js";import{glsl as g}from"../views/3d/webgl-engine/core/shaderModules/interfaces.js";import{Matrix4PassUniform as m}from"../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform.js";import{ShaderBuilder as v}from"../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js";import{TransparencyPassType as w}from"../views/3d/webgl-engine/lib/basicInterfaces.js";import{VertexAttribute as u}from"../views/3d/webgl-engine/lib/VertexAttribute.js";function f(e){const f=new v,b=e.hasMultipassTerrain&&(e.output===r.Color||e.output===r.Alpha);f.include(a),f.include(o,e),f.include(i,e);const{vertex:h,fragment:C}=f;return C.include(l),n(f,e),C.uniforms.add(new c("uColor",(e=>e.color))),f.attributes.add(u.POSITION,"vec3"),f.varyings.add("vWorldPosition","vec3"),b&&f.varyings.add("depth","float"),e.screenSizeEnabled&&f.attributes.add(u.OFFSET,"vec3"),e.shadingEnabled&&(h.uniforms.add(new m("viewNormal",((e,o)=>o.camera.viewInverseTransposeMatrix))),f.attributes.add(u.NORMAL,"vec3"),f.varyings.add("vViewNormal","vec3")),h.code.add(g`
    void main(void) {
      vWorldPosition = ${e.screenSizeEnabled?"screenSizeScaling(offset, position)":"position"};
  `),e.shadingEnabled&&h.code.add(g`vec3 worldNormal = normal;
vViewNormal = (viewNormal * vec4(worldNormal, 1)).xyz;`),h.code.add(g`
    ${b?"depth = (view * vec4(vWorldPosition, 1.0)).z;":""}
    gl_Position = transformPosition(proj, view, vWorldPosition);
  }
  `),b&&f.include(s,e),C.code.add(g`
    void main() {
      discardBySlice(vWorldPosition);
      ${b?"terrainDepthTest(gl_FragCoord, depth);":""}
    `),e.shadingEnabled?(C.uniforms.add(new t("shadingDirection",(e=>e.shadingDirection))),C.uniforms.add(new c("shadedColor",(e=>p(e.shadingTint,e.color)))),C.code.add(g`vec3 viewNormalNorm = normalize(vViewNormal);
float shadingFactor = 1.0 - clamp(-dot(viewNormalNorm, shadingDirection), 0.0, 1.0);
vec4 finalColor = mix(uColor, shadedColor, shadingFactor);`)):C.code.add(g`vec4 finalColor = uColor;`),C.code.add(g`
      if (finalColor.a < ${g.float(d)}) {
        discard;
      }
      ${e.output===r.Alpha?g`gl_FragColor = vec4(finalColor.a);`:""}

      ${e.output===r.Color?g`gl_FragColor = highlightSlice(finalColor, vWorldPosition); ${e.transparencyPassType===w.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}`:""}
    }
    `),f}function p(e,o){const r=1-e[3],i=e[3]+o[3]*r;return 0===i?(b[3]=i,b):(b[0]=(e[0]*e[3]+o[0]*o[3]*r)/i,b[1]=(e[1]*e[3]+o[1]*o[3]*r)/i,b[2]=(e[2]*e[3]+o[2]*o[3]*r)/i,b[3]=o[3],b)}const b=e(),h=Object.freeze(Object.defineProperty({__proto__:null,build:f},Symbol.toStringTag,{value:"Module"}));export{h as S,f as b};
