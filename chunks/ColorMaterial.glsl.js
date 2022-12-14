/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/ObjectAndLayerIdColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff","../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl","../views/3d/webgl-engine/core/shaderModules/Float4PassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/lib/TransparencyPassType","../views/3d/webgl-engine/lib/VertexAttribute"],(function(e,r,o,l,t,i,a,s,d,n,u,g,p,h,c,b,w,v){"use strict";function C(e){const C=new b.ShaderBuilder,{vertex:y,fragment:f}=C,O=e.output===o.ShaderOutput.Depth,L=e.hasMultipassTerrain&&(e.output===o.ShaderOutput.Color||e.output===o.ShaderOutput.Alpha);return p.addProjViewLocalOrigin(y,e),C.include(t.Transform,e),C.include(a.VertexColor,e),C.include(i.ObjectAndLayerIdColor,e),C.attributes.add(v.VertexAttribute.POSITION,"vec3"),C.varyings.add("vpos","vec3"),L&&C.varyings.add("depth","float"),O&&(C.include(s.OutputDepth,e),r.addNearFar(C),r.addLinearDepth(C)),y.code.add(c.glsl`
    void main(void) {
      vpos = position;
      forwardNormalizedVertexColor();
      forwardObjectAndLayerIdColor();
      ${L?"depth = (view * vec4(vpos, 1.0)).z;":""}
      gl_Position = ${O?c.glsl`transformPositionWithDepth(proj, view, vpos, nearFar, linearDepth);`:c.glsl`transformPosition(proj, view, vpos);`}
    }
  `),C.include(l.SliceDraw,e),L&&C.include(n.multipassTerrainTest,e),f.include(g.ColorConversion),f.uniforms.add(new h.Float4PassUniform("eColor",(e=>e.color))),e.output===o.ShaderOutput.Highlight&&C.include(d.OutputHighlight,e),f.code.add(c.glsl`
  void main() {
    discardBySlice(vpos);
    ${L?"terrainDepthTest(gl_FragCoord, depth);":""}
    vec4 fColor = ${e.hasVertexColors?"vColor * eColor;":"eColor;"}

    if (fColor.a < ${c.glsl.float(u.symbolAlphaCutoff)}) {
      discard;
    }

    ${e.output===o.ShaderOutput.Alpha?c.glsl`gl_FragColor = vec4(fColor.a);`:""}

    ${e.output===o.ShaderOutput.Color?c.glsl`gl_FragColor = highlightSlice(fColor, vpos); ${e.transparencyPassType===w.TransparencyPassType.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}`:""}
    ${e.output===o.ShaderOutput.Highlight?c.glsl`outputHighlight();`:""};
    ${e.output===o.ShaderOutput.Depth?c.glsl`outputDepth(linearDepth);`:""};
    ${e.output===o.ShaderOutput.ObjectAndLayerIdColor?c.glsl`outputObjectAndLayerIdColor();`:""}
  }
  `),C}const y=Object.freeze(Object.defineProperty({__proto__:null,build:C},Symbol.toStringTag,{value:"Module"}));e.ColorMaterial=y,e.build=C}));
