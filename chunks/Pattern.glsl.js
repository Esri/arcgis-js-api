/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl"],(function(e,t,a,l,o,r,i,n,s,d,c,g){"use strict";const p=.70710678118,v=p,u=.08715574274;function f(e){const f=new l.ShaderBuilder;e.draped||f.extensions.add("GL_OES_standard_derivatives");const h=1===e.output;f.include(a.Transform,{linearDepth:h}),f.include(g.VertexColor,e),f.vertex.uniforms.add("proj","mat4"),f.vertex.uniforms.add("view","mat4"),h&&(f.include(c.OutputDepth,e),f.vertex.uniforms.add("cameraNearFar","vec2"),f.varyings.add("linearDepth","float")),e.draped?f.vertex.uniforms.add("worldToScreenRatio","float"):(f.vertex.uniforms.add("worldToScreenPerDistanceRatio","float"),f.vertex.uniforms.add("camPos","vec3"),f.attributes.add("boundingRect","mat3")),f.attributes.add("position","vec3"),f.attributes.add("uvMapSpace","vec4"),f.varyings.add("vpos","vec3"),f.varyings.add("vuv","vec2"),e.multipassTerrainEnabled&&f.varyings.add("depth","float");const b=3===e.style||4===e.style||5===e.style;return b&&f.vertex.code.add(t.glsl`
      const mat2 rotate45 = mat2(${t.glsl.float(p)}, ${t.glsl.float(-v)},
                                 ${t.glsl.float(v)}, ${t.glsl.float(p)});
    `),e.draped||(f.vertex.code.add(t.glsl`
      vec3 projectPointToLineSegment(vec3 center, vec3 halfVector, vec3 point) {
        float projectedLength = dot(halfVector, point - center) / dot(halfVector, halfVector);
        return center + halfVector * clamp(projectedLength, -1.0, 1.0);
      }
    `),f.vertex.code.add(t.glsl`
      vec3 intersectRayPlane(vec3 rayDir, vec3 rayOrigin, vec3 planeNormal, vec3 planePoint) {
        float d = dot(planeNormal, planePoint);
        float t = (d - dot(planeNormal, rayOrigin)) / dot(planeNormal, rayDir);

        return rayOrigin + t * rayDir;
      }
    `),f.vertex.code.add(t.glsl`
      float boundingRectDistanceToCamera() {
        vec3 center = vec3(boundingRect[0][0], boundingRect[0][1], boundingRect[0][2]);
        vec3 halfU = vec3(boundingRect[1][0], boundingRect[1][1], boundingRect[1][2]);
        vec3 halfV = vec3(boundingRect[2][0], boundingRect[2][1], boundingRect[2][2]);
        vec3 n = normalize(cross(halfU, halfV));

        vec3 viewDir = - vec3(view[0][2], view[1][2], view[2][2]);

        float viewAngle = dot(viewDir, n);
        float minViewAngle = ${t.glsl.float(u)};

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
    `)),f.vertex.code.add(t.glsl`
    vec2 scaledUV() {
      vec2 uv = uvMapSpace.xy ${b?" * rotate45":""};
      vec2 uvCellOrigin = uvMapSpace.zw ${b?" * rotate45":""};

      ${e.draped?t.glsl`
            float ratio = worldToScreenRatio;
          `:t.glsl`
            float distanceToCamera = boundingRectDistanceToCamera();
            float ratio = worldToScreenPerDistanceRatio / distanceToCamera;

            // Logarithmically discretize ratio to avoid jittering
            float step = 0.1;
            ratio = log(ratio);
            ratio = ceil(ratio / step) * step;
            ratio = exp(ratio);
          `}

      vec2 uvOffset = mod(uvCellOrigin * ratio, ${t.glsl.float(e.patternSpacing)});
      return uvOffset + (uv * ratio);
    }
  `),f.vertex.code.add(t.glsl`
    void main(void) {
      vuv = scaledUV();
      vpos = position;
      ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
      forwardNormalizedVertexColor();
      gl_Position = ${h?t.glsl`transformPositionWithDepth(proj, view, vpos, cameraNearFar, linearDepth);`:t.glsl`transformPosition(proj, view, vpos);`}
    }
  `),f.include(r.Slice,e),f.fragment.include(o.ColorConversion),f.fragment.uniforms.add("matColor","vec4"),e.draped&&f.fragment.uniforms.add("texelSize","float"),4===e.output&&f.include(n.OutputHighlight),e.multipassTerrainEnabled&&(f.fragment.include(i.ReadLinearDepth),f.include(d.multipassTerrainTest,e)),4!==e.output&&(f.fragment.code.add(t.glsl`
      const float lineWidth = ${t.glsl.float(e.lineWidth)};
      const float spacing = ${t.glsl.float(e.patternSpacing)};
      const float spacingINV = ${t.glsl.float(1/e.patternSpacing)};

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
    `),e.draped||f.fragment.code.add(t.glsl`
        const int maxSamples = 5;

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
        }
      `)),f.fragment.code.add(t.glsl`
    void main() {
      discardBySlice(vpos);
      ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
      vec4 color = ${e.attributeColor?"vColor * matColor;":"matColor;"}
      color = highlightSlice(color, vpos);

      ${4!==e.output?t.glsl`color.a *= ${m(e)};`:""}

      if (color.a < ${t.glsl.float(s.symbolAlphaCutoff)}) {
        discard;
      }

      ${7===e.output?t.glsl`gl_FragColor = vec4(color.a);`:""}

      ${0===e.output?t.glsl`gl_FragColor = color; ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}`:""}
      ${4===e.output?t.glsl`outputHighlight();`:""}
      ${1===e.output?t.glsl`outputDepth(linearDepth);`:""};
    }
  `),f}function m(e){function a(a){return e.draped?t.glsl`coverage(vuv.${a}, texelSize)`:t.glsl`sample(vuv.${a})`}switch(e.style){case 3:case 0:return a("y");case 4:case 1:return a("x");case 5:case 2:return t.glsl`
        1.0 - (1.0 - ${a("x")}) * (1.0 - ${a("y")})
      `;default:return"0.0"}}var h=Object.freeze({__proto__:null,build:f});e.PatternShader=h,e.build=f}));
