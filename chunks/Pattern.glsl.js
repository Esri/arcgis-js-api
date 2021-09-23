/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder"],(function(e,t,a,l,o,r,i,n,s,d,c,g){"use strict";const p=.70710678118,v=p,u=.08715574274;function f(e){const f=new g.ShaderBuilder;e.draped||f.extensions.add("GL_OES_standard_derivatives");const h=1===e.output;f.include(a.Transform,{linearDepth:h}),f.include(l.VertexColor,e),f.vertex.uniforms.add("proj","mat4"),f.vertex.uniforms.add("view","mat4"),h&&(f.include(o.OutputDepth,e),f.vertex.uniforms.add("cameraNearFar","vec2"),f.varyings.add("linearDepth","float")),e.draped?f.vertex.uniforms.add("worldToScreenRatio","float"):(f.vertex.uniforms.add("worldToScreenPerDistanceRatio","float"),f.vertex.uniforms.add("camPos","vec3"),f.attributes.add("boundingRect","mat3")),f.attributes.add("position","vec3"),f.attributes.add("uvMapSpace","vec4"),f.varyings.add("vpos","vec3"),f.varyings.add("vuv","vec2"),e.multipassTerrainEnabled&&f.varyings.add("depth","float");const b=3===e.style||4===e.style||5===e.style;return b&&f.vertex.code.add(c.glsl`
      const mat2 rotate45 = mat2(${c.glsl.float(p)}, ${c.glsl.float(-v)},
                                 ${c.glsl.float(v)}, ${c.glsl.float(p)});
    `),e.draped||(f.vertex.code.add(c.glsl`vec3 projectPointToLineSegment(vec3 center, vec3 halfVector, vec3 point) {
float projectedLength = dot(halfVector, point - center) / dot(halfVector, halfVector);
return center + halfVector * clamp(projectedLength, -1.0, 1.0);
}`),f.vertex.code.add(c.glsl`vec3 intersectRayPlane(vec3 rayDir, vec3 rayOrigin, vec3 planeNormal, vec3 planePoint) {
float d = dot(planeNormal, planePoint);
float t = (d - dot(planeNormal, rayOrigin)) / dot(planeNormal, rayDir);
return rayOrigin + t * rayDir;
}`),f.vertex.code.add(c.glsl`
      float boundingRectDistanceToCamera() {
        vec3 center = vec3(boundingRect[0][0], boundingRect[0][1], boundingRect[0][2]);
        vec3 halfU = vec3(boundingRect[1][0], boundingRect[1][1], boundingRect[1][2]);
        vec3 halfV = vec3(boundingRect[2][0], boundingRect[2][1], boundingRect[2][2]);
        vec3 n = normalize(cross(halfU, halfV));

        vec3 viewDir = - vec3(view[0][2], view[1][2], view[2][2]);

        float viewAngle = dot(viewDir, n);
        float minViewAngle = ${c.glsl.float(u)};

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
    `)),f.vertex.code.add(c.glsl`
    vec2 scaledUV() {
      vec2 uv = uvMapSpace.xy ${b?" * rotate45":""};
      vec2 uvCellOrigin = uvMapSpace.zw ${b?" * rotate45":""};

      ${e.draped?c.glsl`
            float ratio = worldToScreenRatio;
          `:c.glsl`
            float distanceToCamera = boundingRectDistanceToCamera();
            float ratio = worldToScreenPerDistanceRatio / distanceToCamera;

            // Logarithmically discretize ratio to avoid jittering
            float step = 0.1;
            ratio = log(ratio);
            ratio = ceil(ratio / step) * step;
            ratio = exp(ratio);
          `}

      vec2 uvOffset = mod(uvCellOrigin * ratio, ${c.glsl.float(e.patternSpacing)});
      return uvOffset + (uv * ratio);
    }
  `),f.vertex.code.add(c.glsl`
    void main(void) {
      vuv = scaledUV();
      vpos = position;
      ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
      forwardNormalizedVertexColor();
      gl_Position = ${h?c.glsl`transformPositionWithDepth(proj, view, vpos, cameraNearFar, linearDepth);`:c.glsl`transformPosition(proj, view, vpos);`}
    }
  `),f.include(t.Slice,e),f.fragment.include(d.ColorConversion),f.fragment.uniforms.add("matColor","vec4"),e.draped&&f.fragment.uniforms.add("texelSize","float"),4===e.output&&f.include(r.OutputHighlight),e.multipassTerrainEnabled&&(f.fragment.include(i.ReadLinearDepth),f.include(n.multipassTerrainTest,e)),4!==e.output&&(f.fragment.code.add(c.glsl`
      const float lineWidth = ${c.glsl.float(e.lineWidth)};
      const float spacing = ${c.glsl.float(e.patternSpacing)};
      const float spacingINV = ${c.glsl.float(1/e.patternSpacing)};

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
    `),e.draped||f.fragment.code.add(c.glsl`const int maxSamples = 5;
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
}`)),f.fragment.code.add(c.glsl`
    void main() {
      discardBySlice(vpos);
      ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
      vec4 color = ${e.attributeColor?"vColor * matColor;":"matColor;"}
      color = highlightSlice(color, vpos);

      ${4!==e.output?c.glsl`color.a *= ${m(e)};`:""}

      if (color.a < ${c.glsl.float(s.symbolAlphaCutoff)}) {
        discard;
      }

      ${7===e.output?c.glsl`gl_FragColor = vec4(color.a);`:""}

      ${0===e.output?c.glsl`gl_FragColor = color; ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}`:""}
      ${4===e.output?c.glsl`outputHighlight();`:""}
      ${1===e.output?c.glsl`outputDepth(linearDepth);`:""};
    }
  `),f}function m(e){function t(t){return e.draped?c.glsl`coverage(vuv.${t}, texelSize)`:c.glsl`sample(vuv.${t})`}switch(e.style){case 3:case 0:return t("y");case 4:case 1:return t("x");case 5:case 2:return c.glsl`
        1.0 - (1.0 - ${t("x")}) * (1.0 - ${t("y")})
      `;default:return"0.0"}}var h=Object.freeze({__proto__:null,build:f});e.PatternShader=h,e.build=f}));
