/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isSome as e}from"../core/maybe.js";import{O as r}from"./vec2f64.js";import{ShaderOutput as o}from"../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions.js";import{SliceDraw as i}from"../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js";import{Transform as a}from"../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl.js";import{multipassTerrainTest as t}from"../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl.js";import{defaultMaskAlphaCutoff as s}from"../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff.js";import{ColorConversion as d}from"../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl.js";import{addProjViewLocalOrigin as l}from"../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js";import{Float2PassUniform as n}from"../views/3d/webgl-engine/core/shaderModules/Float2PassUniform.js";import{FloatPassUniform as g}from"../views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js";import{glsl as c}from"../views/3d/webgl-engine/core/shaderModules/interfaces.js";import{ShaderBuilder as p}from"../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js";import{Texture2DPassUniform as u}from"../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js";import{TransparencyPassType as m}from"../views/3d/webgl-engine/lib/basicInterfaces.js";import{VertexAttribute as v}from"../views/3d/webgl-engine/lib/VertexAttribute.js";function f(f){const w=new p;l(w,f),w.include(a),w.attributes.add(v.POSITION,"vec3"),w.attributes.add(v.UV0,"vec2"),w.varyings.add("vpos","vec3"),f.hasMultipassTerrain&&w.varyings.add("depth","float");const{vertex:h,fragment:b}=w;return h.uniforms.add(new n("textureCoordinateScaleFactor",(o=>e(o.texture)&&e(o.texture.descriptor.textureCoordinateScaleFactor)?o.texture.descriptor.textureCoordinateScaleFactor:r))),h.code.add(c`
    void main(void) {
      vpos = position;
      ${f.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0 * textureCoordinateScaleFactor;
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),w.include(i,f),w.include(t,f),b.uniforms.add([new u("tex",(e=>e.texture)),new g("opacity",(e=>e.opacity))]),w.varyings.add("vTexCoord","vec2"),f.output===o.Alpha?b.code.add(c`
    void main() {
      discardBySlice(vpos);
      ${f.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}

      float alpha = texture2D(tex, vTexCoord).a * opacity;
      if (alpha  < ${c.float(s)}) {
        discard;
      }

      gl_FragColor = vec4(alpha);
    }
    `):(b.include(d),b.code.add(c`
    void main() {
      discardBySlice(vpos);
      ${f.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
      gl_FragColor = texture2D(tex, vTexCoord) * opacity;

      if (gl_FragColor.a < ${c.float(s)}) {
        discard;
      }

      gl_FragColor = highlightSlice(gl_FragColor, vpos);
      ${f.transparencyPassType===m.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    }
    `)),w}const w=Object.freeze(Object.defineProperty({__proto__:null,build:f},Symbol.toStringTag,{value:"Module"}));export{w as I,f as b};
