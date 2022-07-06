/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{ShaderOutput as e}from"../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions.js";import{SliceDraw as r}from"../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js";import{Transform as o}from"../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl.js";import{VertexColor as i}from"../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl.js";import{OutputDepth as t}from"../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl.js";import{OutputHighlight as s}from"../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl.js";import{multipassTerrainTest as l}from"../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl.js";import{symbolAlphaCutoff as a}from"../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff.js";import{ColorConversion as n}from"../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl.js";import{addProjViewLocalOrigin as d}from"../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js";import{Float2PassUniform as g}from"../views/3d/webgl-engine/core/shaderModules/Float2PassUniform.js";import{Float4PassUniform as p}from"../views/3d/webgl-engine/core/shaderModules/Float4PassUniform.js";import{glsl as u}from"../views/3d/webgl-engine/core/shaderModules/interfaces.js";import{ShaderBuilder as h}from"../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js";import{TransparencyPassType as m}from"../views/3d/webgl-engine/lib/basicInterfaces.js";import{VertexAttribute as c}from"../views/3d/webgl-engine/lib/VertexAttribute.js";function f(f){const v=new h,w=f.output===e.Depth,b=f.hasMultipassTerrain&&(f.output===e.Color||f.output===e.Alpha);d(v,f),v.include(o,{hasModelTransformation:!1,linearDepth:w}),v.include(i,f),v.attributes.add(c.POSITION,"vec3"),v.varyings.add("vpos","vec3"),b&&v.varyings.add("depth","float");const{vertex:C,fragment:j}=v;return w&&(v.include(t,f),C.uniforms.add(new g("nearFar",((e,r)=>r.camera.nearFar))),v.varyings.add("linearDepth","float")),C.code.add(u`
    void main(void) {
      vpos = position;
      forwardNormalizedVertexColor();
      ${b?"depth = (view * vec4(vpos, 1.0)).z;":""}
      gl_Position = ${w?u`transformPositionWithDepth(proj, view, vpos, nearFar, linearDepth);`:u`transformPosition(proj, view, vpos);`}
    }
  `),v.include(r,f),b&&v.include(l,f),j.include(n),j.uniforms.add(new p("eColor",(e=>e.color))),f.output===e.Highlight&&v.include(s),j.code.add(u`
  void main() {
    discardBySlice(vpos);
    ${b?"terrainDepthTest(gl_FragCoord, depth);":""}
    vec4 fColor = ${f.hasVertexColors?"vColor * eColor;":"eColor;"}

    if (fColor.a < ${u.float(a)}) {
      discard;
    }

    ${f.output===e.Alpha?u`gl_FragColor = vec4(fColor.a);`:""}

    ${f.output===e.Color?u`gl_FragColor = highlightSlice(fColor, vpos); ${f.transparencyPassType===m.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}`:""}
    ${f.output===e.Highlight?u`outputHighlight();`:""};
    ${f.output===e.Depth?u`outputDepth(linearDepth);`:""};
  }
  `),v}const v=Object.freeze(Object.defineProperty({__proto__:null,build:f},Symbol.toStringTag,{value:"Module"}));export{v as C,f as b};
