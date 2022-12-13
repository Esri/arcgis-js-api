/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../core/maybe","./vec2f64","../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff","../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl","../views/3d/webgl-engine/core/shaderModules/Float2PassUniform","../views/3d/webgl-engine/core/shaderModules/FloatPassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform","../views/3d/webgl-engine/lib/TransparencyPassType","../views/3d/webgl-engine/lib/VertexAttribute"],(function(e,r,a,i,o,t,s,l,d,n,g,c,u,p,v,h,w){"use strict";function b(e){const b=new p.ShaderBuilder,{vertex:f,fragment:y}=b;return n.addProjViewLocalOrigin(f,e),b.include(t.Transform,e),b.attributes.add(w.VertexAttribute.POSITION,"vec3"),b.attributes.add(w.VertexAttribute.UV0,"vec2"),b.varyings.add("vpos","vec3"),e.hasMultipassTerrain&&b.varyings.add("depth","float"),f.uniforms.add(new g.Float2PassUniform("textureCoordinateScaleFactor",(e=>r.isSome(e.texture)&&r.isSome(e.texture.descriptor.textureCoordinateScaleFactor)?e.texture.descriptor.textureCoordinateScaleFactor:a.ONES))),f.code.add(u.glsl`
    void main(void) {
      vpos = position;
      ${e.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0 * textureCoordinateScaleFactor;
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),b.include(o.SliceDraw,e),b.include(s.multipassTerrainTest,e),y.uniforms.add([new v.Texture2DPassUniform("tex",(e=>e.texture)),new c.FloatPassUniform("opacity",(e=>e.opacity))]),b.varyings.add("vTexCoord","vec2"),e.output===i.ShaderOutput.Alpha?y.code.add(u.glsl`
    void main() {
      discardBySlice(vpos);
      ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}

      float alpha = texture2D(tex, vTexCoord).a * opacity;
      if (alpha  < ${u.glsl.float(l.defaultMaskAlphaCutoff)}) {
        discard;
      }

      gl_FragColor = vec4(alpha);
    }
    `):(y.include(d.ColorConversion),y.code.add(u.glsl`
    void main() {
      discardBySlice(vpos);
      ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
      gl_FragColor = texture2D(tex, vTexCoord) * opacity;

      if (gl_FragColor.a < ${u.glsl.float(l.defaultMaskAlphaCutoff)}) {
        discard;
      }

      gl_FragColor = highlightSlice(gl_FragColor, vpos);
      ${e.transparencyPassType===h.TransparencyPassType.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    }
    `)),b}const f=Object.freeze(Object.defineProperty({__proto__:null,build:b},Symbol.toStringTag,{value:"Module"}));e.ImageMaterial=f,e.build=b}));
