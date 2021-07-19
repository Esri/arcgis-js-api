/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder"],(function(e,r,l,i,o,a,t,s,d,n,g,u){"use strict";function p(e){const p=new u.ShaderBuilder,c=1===e.output;return p.include(l.Transform,{linearDepth:c}),p.include(i.VertexColor,e),p.vertex.uniforms.add("proj","mat4").add("view","mat4"),p.attributes.add("position","vec3"),p.varyings.add("vpos","vec3"),e.multipassTerrainEnabled&&p.varyings.add("depth","float"),c&&(p.include(o.OutputDepth,e),p.vertex.uniforms.add("cameraNearFar","vec2"),p.varyings.add("linearDepth","float")),p.vertex.code.add(g.glsl`
    void main(void) {
      vpos = position;
      forwardNormalizedVertexColor();
      ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
      gl_Position = ${c?g.glsl`transformPositionWithDepth(proj, view, vpos, cameraNearFar, linearDepth);`:g.glsl`transformPosition(proj, view, vpos);`}
    }
  `),p.include(r.Slice,e),p.fragment.include(n.ColorConversion),e.multipassTerrainEnabled&&(p.fragment.include(t.ReadLinearDepth),p.include(s.multipassTerrainTest,e)),p.fragment.uniforms.add("eColor","vec4"),4===e.output&&p.include(a.OutputHighlight),p.fragment.code.add(g.glsl`
  void main() {
    discardBySlice(vpos);
    ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
    vec4 color = ${e.attributeColor?"vColor * eColor;":"eColor;"}

    if (color.a < ${g.glsl.float(d.symbolAlphaCutoff)}) {
      discard;
    }

    ${7===e.output?g.glsl`gl_FragColor = vec4(color.a);`:""}

    ${0===e.output?g.glsl`gl_FragColor = highlightSlice(color, vpos); ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}`:""}
    ${4===e.output?g.glsl`outputHighlight();`:""};
    ${1===e.output?g.glsl`outputDepth(linearDepth);`:""};
  }
  `),p}var c=Object.freeze({__proto__:null,build:p});e.ColorMaterialShader=c,e.build=p}));
