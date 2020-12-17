/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl"],(function(e,r,o,l,i,t,a,s,d,n){"use strict";function g(e){const g=new l.ShaderBuilder,u=1===e.output;return g.include(o.Transform,{linearDepth:u}),g.include(d.VertexColor,e),g.vertex.uniforms.add("proj","mat4").add("view","mat4"),g.attributes.add("position","vec3"),g.varyings.add("vpos","vec3"),u&&(g.include(n.OutputDepth,e),g.vertex.uniforms.add("nearFar","vec2"),g.varyings.add("linearDepth","float")),g.vertex.code.add(r.glsl`
    void main(void) {
      vpos = position;
      forwardNormalizedVertexColor();
      gl_Position = ${u?r.glsl`transformPositionWithDepth(proj, view, vpos, nearFar, linearDepth);`:r.glsl`transformPosition(proj, view, vpos);`}
    }
  `),g.include(t.Slice,e),g.fragment.include(i.ColorConversion),g.fragment.uniforms.add("eColor","vec4"),4===e.output&&g.include(a.OutputHighlight),g.fragment.code.add(r.glsl`
  void main() {
    discardBySlice(vpos);
    vec4 color = ${e.attributeColor?"vColor * eColor;":"eColor;"}

    if (color.a < ${r.glsl.float(s.symbolAlphaCutoff)}) {
      discard;
    }

    ${7===e.output?r.glsl`gl_FragColor = vec4(color.a);`:""}

    ${0===e.output?r.glsl`gl_FragColor = highlightSlice(color, vpos); ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}`:""}
    ${4===e.output?r.glsl`outputHighlight();`:""};
    ${1===e.output?r.glsl`outputDepth(linearDepth);`:""};
  }
  `),g}var u=Object.freeze({__proto__:null,build:g});e.ColorMaterialShader=u,e.build=g}));
