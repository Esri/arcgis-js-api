/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/lib/VertexAttribute"],(function(e,r,t,i,l,o,a,s,d,n,u,g,p,h){"use strict";function c(e){const c=new p.ShaderBuilder,v=e.output===r.ShaderOutput.Depth;return c.include(i.Transform,{linearDepth:v}),c.include(l.VertexColor,e),c.vertex.uniforms.add("proj","mat4").add("view","mat4"),c.attributes.add(h.VertexAttribute.POSITION,"vec3"),c.varyings.add("vpos","vec3"),e.multipassTerrainEnabled&&c.varyings.add("depth","float"),v&&(c.include(o.OutputDepth,e),c.vertex.uniforms.add("nearFar","vec2"),c.varyings.add("linearDepth","float")),c.vertex.code.add(g.glsl`
    void main(void) {
      vpos = position;
      forwardNormalizedVertexColor();
      ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
      gl_Position = ${v?g.glsl`transformPositionWithDepth(proj, view, vpos, nearFar, linearDepth);`:g.glsl`transformPosition(proj, view, vpos);`}
    }
  `),c.include(t.Slice,e),c.fragment.include(u.ColorConversion),e.multipassTerrainEnabled&&(c.fragment.include(s.ReadLinearDepth),c.include(d.multipassTerrainTest,e)),c.fragment.uniforms.add("eColor","vec4"),e.output===r.ShaderOutput.Highlight&&c.include(a.OutputHighlight),c.fragment.code.add(g.glsl`
  void main() {
    discardBySlice(vpos);
    ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
    vec4 fColor = ${e.attributeColor?"vColor * eColor;":"eColor;"}

    if (fColor.a < ${g.glsl.float(n.symbolAlphaCutoff)}) {
      discard;
    }

    ${e.output===r.ShaderOutput.Alpha?g.glsl`gl_FragColor = vec4(fColor.a);`:""}

    ${e.output===r.ShaderOutput.Color?g.glsl`gl_FragColor = highlightSlice(fColor, vpos); ${e.oitEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}`:""}
    ${e.output===r.ShaderOutput.Highlight?g.glsl`outputHighlight();`:""};
    ${e.output===r.ShaderOutput.Depth?g.glsl`outputDepth(linearDepth);`:""};
  }
  `),c}const v=Object.freeze(Object.defineProperty({__proto__:null,build:c},Symbol.toStringTag,{value:"Module"}));e.ColorMaterialShader=v,e.build=c}));
