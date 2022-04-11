/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/lib/VertexAttribute","../views/3d/webgl-engine/materials/PatternStyle"],(function(e,t,a,r,l,o,i,n,d,s,c,g,u,p,v){"use strict";const f=.70710678118,m=f,h=.08715574274;function w(e){const w=new u.ShaderBuilder;e.draped||w.extensions.add("GL_OES_standard_derivatives");const b=e.output===t.ShaderOutput.Depth;w.include(r.Transform,{linearDepth:b}),w.include(l.VertexColor,e),w.vertex.uniforms.add("proj","mat4"),w.vertex.uniforms.add("view","mat4"),b&&(w.include(o.OutputDepth,e),w.vertex.uniforms.add("nearFar","vec2"),w.varyings.add("linearDepth","float")),e.draped?w.vertex.uniforms.add("worldToScreenRatio","float"):(w.vertex.uniforms.add("worldToScreenPerDistanceRatio","float"),w.vertex.uniforms.add("cameraPosition","vec3"),w.attributes.add(p.VertexAttribute.BOUNDINGRECT,"mat3")),w.attributes.add(p.VertexAttribute.POSITION,"vec3"),w.attributes.add(p.VertexAttribute.UVMAPSPACE,"vec4"),w.varyings.add("vpos","vec3"),w.varyings.add("vuv","vec2"),e.multipassTerrainEnabled&&w.varyings.add("depth","float");const y=e.style===v.Style.ForwardDiagonal||e.style===v.Style.BackwardDiagonal||e.style===v.Style.DiagonalCross;return y&&w.vertex.code.add(g.glsl`
      const mat2 rotate45 = mat2(${g.glsl.float(f)}, ${g.glsl.float(-m)},
                                 ${g.glsl.float(m)}, ${g.glsl.float(f)});
    `),e.draped||(w.vertex.code.add(g.glsl`vec3 projectPointToLineSegment(vec3 center, vec3 halfVector, vec3 point) {
float projectedLength = dot(halfVector, point - center) / dot(halfVector, halfVector);
return center + halfVector * clamp(projectedLength, -1.0, 1.0);
}`),w.vertex.code.add(g.glsl`vec3 intersectRayPlane(vec3 rayDir, vec3 rayOrigin, vec3 planeNormal, vec3 planePoint) {
float d = dot(planeNormal, planePoint);
float t = (d - dot(planeNormal, rayOrigin)) / dot(planeNormal, rayDir);
return rayOrigin + t * rayDir;
}`),w.vertex.code.add(g.glsl`
      float boundingRectDistanceToCamera() {
        vec3 center = vec3(boundingRect[0][0], boundingRect[0][1], boundingRect[0][2]);
        vec3 halfU = vec3(boundingRect[1][0], boundingRect[1][1], boundingRect[1][2]);
        vec3 halfV = vec3(boundingRect[2][0], boundingRect[2][1], boundingRect[2][2]);
        vec3 n = normalize(cross(halfU, halfV));

        vec3 viewDir = - vec3(view[0][2], view[1][2], view[2][2]);

        float viewAngle = dot(viewDir, n);
        float minViewAngle = ${g.glsl.float(h)};

        if (abs(viewAngle) < minViewAngle) {
          // view direction is (almost) parallel to plane -> clamp it to min angle
          float normalComponent = sign(viewAngle) * minViewAngle - viewAngle;
          viewDir = normalize(viewDir + normalComponent * n);
        }

        // intersect view direction with infinite plane that contains bounding rect
        vec3 planeProjected = intersectRayPlane(viewDir, cameraPosition, n, center);

        // clip to bounds by projecting to u and v line segments individually
        vec3 uProjected = projectPointToLineSegment(center, halfU, planeProjected);
        vec3 vProjected = projectPointToLineSegment(center, halfV, planeProjected);

        // use to calculate the closest point to camera on bounding rect
        vec3 closestPoint = uProjected + vProjected - center;

        return length(closestPoint - cameraPosition);
      }
    `)),w.vertex.code.add(g.glsl`
    vec2 scaledUV() {
      vec2 uv = uvMapSpace.xy ${y?" * rotate45":""};
      vec2 uvCellOrigin = uvMapSpace.zw ${y?" * rotate45":""};

      ${e.draped?"":g.glsl`
            float distanceToCamera = boundingRectDistanceToCamera();
            float worldToScreenRatio = worldToScreenPerDistanceRatio / distanceToCamera;
          `}

      // Logarithmically discretize ratio to avoid jittering
      float step = 0.1;
      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);

      vec2 uvOffset = mod(uvCellOrigin * discreteWorldToScreenRatio, ${g.glsl.float(e.patternSpacing)});
      return uvOffset + (uv * discreteWorldToScreenRatio);
    }
  `),w.vertex.code.add(g.glsl`
    void main(void) {
      vuv = scaledUV();
      vpos = position;
      ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
      forwardNormalizedVertexColor();
      gl_Position = ${b?g.glsl`transformPositionWithDepth(proj, view, vpos, nearFar, linearDepth);`:g.glsl`transformPosition(proj, view, vpos);`}
    }
  `),w.include(a.Slice,e),w.fragment.include(c.ColorConversion),w.fragment.uniforms.add("uColor","vec4"),e.draped&&w.fragment.uniforms.add("texelSize","float"),e.output===t.ShaderOutput.Highlight&&w.include(i.OutputHighlight),e.multipassTerrainEnabled&&(w.fragment.include(n.ReadLinearDepth),w.include(d.multipassTerrainTest,e)),e.output!==t.ShaderOutput.Highlight&&(w.fragment.code.add(g.glsl`
      const float lineWidth = ${g.glsl.float(e.lineWidth)};
      const float spacing = ${g.glsl.float(e.patternSpacing)};
      const float spacingINV = ${g.glsl.float(1/e.patternSpacing)};

      float coverage(float p, float txlSize) {
        p = mod(p, spacing);

        float halfTxlSize = txlSize / 2.0;

        float start = p - halfTxlSize;
        float end = p + halfTxlSize;

        float coverage = (ceil(end * spacingINV) - floor(start * spacingINV)) * lineWidth;
        coverage -= min(lineWidth, mod(start, spacing));
        coverage -= max(lineWidth - mod(end, spacing), 0.0);

        return coverage / txlSize;
      }
    `),e.draped||w.fragment.code.add(g.glsl`const int maxSamples = 5;
float sample(float p) {
vec2 dxdy = abs(vec2(dFdx(p), dFdy(p)));
float fwidth = dxdy.x + dxdy.y;
ivec2 samples = 1 + ivec2(clamp(dxdy, 0.0, float(maxSamples - 1)));
vec2 invSamples = 1.0 / vec2(samples);
float accumulator = 0.0;
for (int j = 0; j < maxSamples; j++) {
if(j >= samples.y) {
break;
}
for (int i = 0; i < maxSamples; i++) {
if(i >= samples.x) {
break;
}
vec2 step = vec2(i,j) * invSamples - 0.5;
accumulator += coverage(p + step.x * dxdy.x + step.y * dxdy.y, fwidth);
}
}
accumulator /= float(samples.x * samples.y);
return accumulator;
}`)),w.fragment.code.add(g.glsl`
    void main() {
      discardBySlice(vpos);
      ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
      vec4 color = ${e.attributeColor?"vColor * uColor;":"uColor;"}
      color = highlightSlice(color, vpos);

      ${e.output!==t.ShaderOutput.Highlight?g.glsl`color.a *= ${S(e)};`:""}

      if (color.a < ${g.glsl.float(s.symbolAlphaCutoff)}) {
        discard;
      }

      ${e.output===t.ShaderOutput.Alpha?g.glsl`gl_FragColor = vec4(color.a);`:""}

      ${e.output===t.ShaderOutput.Color?g.glsl`gl_FragColor = color; ${e.oitEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}`:""}
      ${e.output===t.ShaderOutput.Highlight?g.glsl`outputHighlight();`:""}
      ${e.output===t.ShaderOutput.Depth?g.glsl`outputDepth(linearDepth);`:""};
    }
  `),w}function S(e){function t(t){return e.draped?g.glsl`coverage(vuv.${t}, texelSize)`:g.glsl`sample(vuv.${t})`}switch(e.style){case v.Style.ForwardDiagonal:case v.Style.Horizontal:return t("y");case v.Style.BackwardDiagonal:case v.Style.Vertical:return t("x");case v.Style.DiagonalCross:case v.Style.Cross:return g.glsl`
        1.0 - (1.0 - ${t("x")}) * (1.0 - ${t("y")})
      `;default:return"0.0"}}const b=Object.freeze(Object.defineProperty({__proto__:null,build:w},Symbol.toStringTag,{value:"Module"}));e.PatternShader=b,e.build=w}));
