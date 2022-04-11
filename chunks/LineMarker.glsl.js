/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../views/3d/layers/support/markerUtils","../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/RibbonVertexPosition.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/lib/VertexAttribute"],(function(e,r,t,i,a,o,l,s,n,d,c,p,v,u){"use strict";function g(e){const g=new v.ShaderBuilder;return g.include(a.RibbonVertexPosition,e),e.output===t.ShaderOutput.Depth&&g.include(o.OutputDepth,e),g.fragment.include(c.RgbaFloatEncoding),g.vertex.uniforms.add("proj","mat4").add("view","mat4").add("nearFar","vec2").add("pixelRatio","float").add("screenSize","vec2").add("inverseProjectionMatrix","mat4"),g.fragment.uniforms.add("tex","sampler2D"),g.attributes.add(u.VertexAttribute.POSITION,"vec3"),g.attributes.add(u.VertexAttribute.UV0,"vec2"),g.attributes.add(u.VertexAttribute.AUXPOS1,"vec3"),g.varyings.add("vColor","vec4"),g.varyings.add("vpos","vec3"),g.varyings.add("vUV","vec2"),g.varyings.add("vSize","float"),g.varyings.add("linearDepth","float"),e.multipassTerrainEnabled&&g.varyings.add("depth","float"),g.vertex.code.add(p.glsl`#define PERPENDICULAR(v) vec2(v.y, -v.x);
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}`),g.vertex.code.add(p.glsl`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= screenSize / posNdc.w;
return posNdc;
}`),g.vertex.code.add(p.glsl`
    void clipAndTransform(inout vec4 pos, inout vec4 prev) {
      float vnp = nearFar[0] * 0.99;

      if (prev.z > -nearFar[0]) {
        //previous behind ncp
        prev = mix(pos, prev, interp(vnp, pos, prev));
      }

      ${e.multipassTerrainEnabled?"depth = pos.z;":""}
      linearDepth = (-pos.z - nearFar[0]) / (nearFar[1] - nearFar[0]);

      pos = projectAndScale(pos);
      prev = projectAndScale(prev);
    }
  `),g.vertex.code.add(p.glsl`
    void main(void) {
      float coverage = 1.0;

      // Check for special value of uv0.y which is used by the Renderer when graphics
      // are removed before the VBO is recompacted. If this is the case, then we just
      // project outside of clip space.
      if (uv0.y == 0.0) {
        // Project out of clip space
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
      }
      else {
        float lineSize = getSize();
        float lineWidth = max(lineSize, 1.0) * pixelRatio;

        vec4 pos  = view * vec4(position.xyz, 1.0);
        vec4 prev = view * vec4(auxpos1.xyz, 1.0);
        clipAndTransform(pos, prev);

        // normalize vector along line segment
        vec2 segment = pos.xy - prev.xy;
        float segmentLen = length(segment);
        segment = (segmentLen > 0.001) ? segment / segmentLen : vec2(0.0, 0.0);

        // displace according to position in the texture
        vec2 displacementDirU = uv0.x * PERPENDICULAR(segment);
        vec2 displacementDirV = uv0.y * segment;

        vSize = ${p.glsl.float(r.MARKER_TEXTURE_SIZE/r.MARKER_THICKNESS)} * lineWidth;
        pos.xy += displacementDirU * vSize + displacementDirV * vSize;

        // Convert back into NDC
        pos.xy = (pos.xy / screenSize) * pos.w;

        // Convert texture coordinate into [0,1]
        vUV = (uv0 + 1.0) / 2.0;

        vColor = getColor();
        vColor.a *= coverage;

        // transform final position to camera space for slicing
        vpos = (inverseProjectionMatrix * pos).xyz;
        gl_Position = pos;
      }
    }
  `),e.multipassTerrainEnabled&&(g.fragment.include(l.ReadLinearDepth),g.include(s.multipassTerrainTest,e)),g.include(i.Slice,e),g.fragment.uniforms.add("intrinsicColor","vec4"),g.fragment.include(d.ColorConversion),g.fragment.code.add(p.glsl`
  void main() {
    discardBySlice(vpos);
    ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}

    vec4 finalColor = intrinsicColor * vColor;

    // Offset texture coordinate s.t. we sample texel centers
    float texelSize = ${p.glsl.float(1/r.MARKER_TEXTURE_SIZE)};
    vec2 samplePos = vUV + vec2(0.5, -0.5) * texelSize;

    // Evaluate sdf
    float sdf = rgba2float(texture2D(tex, samplePos)) - 0.5;
    float distance = sdf * vSize;

    // Grow by a halfpixel to make sure the line is fully covered by the cross marker
    // (otherwise there will be a halo if they are different colours)
    distance -= 0.5;

    finalColor.a *= clamp(0.5 - distance, 0.0, 1.0);

    if (finalColor.a < ${p.glsl.float(n.symbolAlphaCutoff)}) {
      discard;
    }

    ${e.output===t.ShaderOutput.Alpha?p.glsl`gl_FragColor = vec4(finalColor.a);`:""}
    ${e.output===t.ShaderOutput.Color?p.glsl`gl_FragColor = highlightSlice(finalColor, vpos);`:""}
    ${e.output===t.ShaderOutput.Color&&e.oitEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    ${e.output===t.ShaderOutput.Highlight?p.glsl`gl_FragColor = vec4(1.0);`:""}
    ${e.output===t.ShaderOutput.Depth?p.glsl`outputDepth(linearDepth);`:""}
  }
  `),g}const h=Object.freeze(Object.defineProperty({__proto__:null,build:g},Symbol.toStringTag,{value:"Module"}));e.LineMarkerShader=h,e.build=g}));
