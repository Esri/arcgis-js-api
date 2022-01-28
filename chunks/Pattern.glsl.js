/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder"],(function(e,t,a,o,l,r,i,n,c,d,s,g){"use strict";const p=.70710678118,v=p,u=.08715574274;function f(e){const f=new g.ShaderBuilder;e.draped||f.extensions.add("GL_OES_standard_derivatives");const h=1===e.output;f.include(a.Transform,{linearDepth:h}),f.include(o.VertexColor,e),f.vertex.uniforms.add("proj","mat4"),f.vertex.uniforms.add("view","mat4"),h&&(f.include(l.OutputDepth,e),f.vertex.uniforms.add("cameraNearFar","vec2"),f.varyings.add("linearDepth","float")),e.draped?f.vertex.uniforms.add("worldToScreenRatio","float"):(f.vertex.uniforms.add("worldToScreenPerDistanceRatio","float"),f.vertex.uniforms.add("camPos","vec3"),f.attributes.add("boundingRect","mat3")),f.attributes.add("position","vec3"),f.attributes.add("uvMapSpace","vec4"),f.varyings.add("vpos","vec3"),f.varyings.add("vuv","vec2"),e.multipassTerrainEnabled&&f.varyings.add("depth","float");const w=3===e.style||4===e.style||5===e.style;return w&&f.vertex.code.add(s.glsl`
      const mat2 rotate45 = mat2(${s.glsl.float(p)}, ${s.glsl.float(-v)},
                                 ${s.glsl.float(v)}, ${s.glsl.float(p)});
    `),e.draped||(f.vertex.code.add(s.glsl`vec3 projectPointToLineSegment(vec3 center, vec3 halfVector, vec3 point) {
float projectedLength = dot(halfVector, point - center) / dot(halfVector, halfVector);
return center + halfVector * clamp(projectedLength, -1.0, 1.0);
}`),f.vertex.code.add(s.glsl`vec3 intersectRayPlane(vec3 rayDir, vec3 rayOrigin, vec3 planeNormal, vec3 planePoint) {
float d = dot(planeNormal, planePoint);
float t = (d - dot(planeNormal, rayOrigin)) / dot(planeNormal, rayDir);
return rayOrigin + t * rayDir;
}`),f.vertex.code.add(s.glsl`
      float boundingRectDistanceToCamera() {
        vec3 center = vec3(boundingRect[0][0], boundingRect[0][1], boundingRect[0][2]);
        vec3 halfU = vec3(boundingRect[1][0], boundingRect[1][1], boundingRect[1][2]);
        vec3 halfV = vec3(boundingRect[2][0], boundingRect[2][1], boundingRect[2][2]);
        vec3 n = normalize(cross(halfU, halfV));

        vec3 viewDir = - vec3(view[0][2], view[1][2], view[2][2]);

        float viewAngle = dot(viewDir, n);
        float minViewAngle = ${s.glsl.float(u)};

        if (abs(viewAngle) < minViewAngle) {
          // view direction is (almost) parallel to plane -> clamp it to min angle
          float normalComponent = sign(viewAngle) * minViewAngle - viewAngle;
          viewDir = normalize(viewDir + normalComponent * n);
        }

        // intersect view direction with infinite plane that contains bounding rect
        vec3 planeProjected = intersectRayPlane(viewDir, camPos, n, center);

        // clip to bounds by projecting to u and v line segments individually
        vec3 uProjected = projectPointToLineSegment(center, halfU, planeProjected);
        vec3 vProjected = projectPointToLineSegment(center, halfV, planeProjected);

        // use to calculate the closest point to camera on bounding rect
        vec3 closestPoint = uProjected + vProjected - center;

        return length(closestPoint - camPos);
      }
    `)),f.vertex.code.add(s.glsl`
    vec2 scaledUV() {
      vec2 uv = uvMapSpace.xy ${w?" * rotate45":""};
      vec2 uvCellOrigin = uvMapSpace.zw ${w?" * rotate45":""};

      ${e.draped?"":s.glsl`
            float distanceToCamera = boundingRectDistanceToCamera();
            float worldToScreenRatio = worldToScreenPerDistanceRatio / distanceToCamera;
          `}

      // Logarithmically discretize ratio to avoid jittering
      float step = 0.1;
      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);

      vec2 uvOffset = mod(uvCellOrigin * discreteWorldToScreenRatio, ${s.glsl.float(e.patternSpacing)});
      return uvOffset + (uv * discreteWorldToScreenRatio);
    }
  `),f.vertex.code.add(s.glsl`
    void main(void) {
      vuv = scaledUV();
      vpos = position;
      ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
      forwardNormalizedVertexColor();
      gl_Position = ${h?s.glsl`transformPositionWithDepth(proj, view, vpos, cameraNearFar, linearDepth);`:s.glsl`transformPosition(proj, view, vpos);`}
    }
  `),f.include(t.Slice,e),f.fragment.include(d.ColorConversion),f.fragment.uniforms.add("matColor","vec4"),e.draped&&f.fragment.uniforms.add("texelSize","float"),4===e.output&&f.include(r.OutputHighlight),e.multipassTerrainEnabled&&(f.fragment.include(i.ReadLinearDepth),f.include(n.multipassTerrainTest,e)),4!==e.output&&(f.fragment.code.add(s.glsl`
      const float lineWidth = ${s.glsl.float(e.lineWidth)};
      const float spacing = ${s.glsl.float(e.patternSpacing)};
      const float spacingINV = ${s.glsl.float(1/e.patternSpacing)};

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
    `),e.draped||f.fragment.code.add(s.glsl`const int maxSamples = 5;
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
}`)),f.fragment.code.add(s.glsl`
    void main() {
      discardBySlice(vpos);
      ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
      vec4 color = ${e.attributeColor?"vColor * matColor;":"matColor;"}
      color = highlightSlice(color, vpos);

      ${4!==e.output?s.glsl`color.a *= ${m(e)};`:""}

      if (color.a < ${s.glsl.float(c.symbolAlphaCutoff)}) {
        discard;
      }

      ${7===e.output?s.glsl`gl_FragColor = vec4(color.a);`:""}

      ${0===e.output?s.glsl`gl_FragColor = color; ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}`:""}
      ${4===e.output?s.glsl`outputHighlight();`:""}
      ${1===e.output?s.glsl`outputDepth(linearDepth);`:""};
    }
  `),f}function m(e){function t(t){return e.draped?s.glsl`coverage(vuv.${t}, texelSize)`:s.glsl`sample(vuv.${t})`}switch(e.style){case 3:case 0:return t("y");case 4:case 1:return t("x");case 5:case 2:return s.glsl`
        1.0 - (1.0 - ${t("x")}) * (1.0 - ${t("y")})
      `;default:return"0.0"}}const h=Object.freeze({__proto__:null,build:f});e.PatternShader=h,e.build=f}));
