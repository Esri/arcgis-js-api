/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{ShaderOutput as e}from"../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions.js";import{SliceDraw as o}from"../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js";import{Transform as t}from"../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl.js";import{VertexColor as r}from"../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl.js";import{OutputDepth as a}from"../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl.js";import{OutputHighlight as i}from"../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl.js";import{multipassTerrainTest as n}from"../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl.js";import{symbolAlphaCutoff as l}from"../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff.js";import{ColorConversion as c}from"../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl.js";import{addProjViewLocalOrigin as d,addCameraPosition as s}from"../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js";import{Float2PassUniform as p}from"../views/3d/webgl-engine/core/shaderModules/Float2PassUniform.js";import{Float4PassUniform as g}from"../views/3d/webgl-engine/core/shaderModules/Float4PassUniform.js";import{FloatPassUniform as u}from"../views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js";import{glsl as v}from"../views/3d/webgl-engine/core/shaderModules/interfaces.js";import{ShaderBuilder as m}from"../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js";import{TransparencyPassType as f}from"../views/3d/webgl-engine/lib/basicInterfaces.js";import{VertexAttribute as h}from"../views/3d/webgl-engine/lib/VertexAttribute.js";import{Style as w}from"../views/3d/webgl-engine/materials/PatternStyle.js";const b=.70710678118,y=b,S=.08715574274;function j(j){const P=new m,T=j.hasMultipassTerrain&&(j.output===e.Color||j.output===e.Alpha);j.draped||P.extensions.add("GL_OES_standard_derivatives");const C=j.output===e.Depth,{vertex:D,fragment:R}=P;d(P,j),P.include(t,{hasModelTransformation:!1,linearDepth:C}),P.include(r,j),C&&(P.include(a,j),D.uniforms.add(new p("nearFar",((e,o)=>o.camera.nearFar))),P.varyings.add("linearDepth","float")),j.draped?D.uniforms.add(new u("worldToScreenRatio",((e,o)=>1/o.screenToPCSRatio))):P.attributes.add(h.BOUNDINGRECT,"mat3"),P.attributes.add(h.POSITION,"vec3"),P.attributes.add(h.UVMAPSPACE,"vec4"),P.varyings.add("vpos","vec3"),P.varyings.add("vuv","vec2"),T&&P.varyings.add("depth","float");const $=j.style===w.ForwardDiagonal||j.style===w.BackwardDiagonal||j.style===w.DiagonalCross;return $&&D.code.add(v`
      const mat2 rotate45 = mat2(${v.float(b)}, ${v.float(-y)},
                                 ${v.float(y)}, ${v.float(b)});
    `),j.draped||(s(D,j),D.uniforms.add(new u("worldToScreenPerDistanceRatio",((e,o)=>1/o.camera.perScreenPixelRatio))),D.code.add(v`vec3 projectPointToLineSegment(vec3 center, vec3 halfVector, vec3 point) {
float projectedLength = dot(halfVector, point - center) / dot(halfVector, halfVector);
return center + halfVector * clamp(projectedLength, -1.0, 1.0);
}`),D.code.add(v`vec3 intersectRayPlane(vec3 rayDir, vec3 rayOrigin, vec3 planeNormal, vec3 planePoint) {
float d = dot(planeNormal, planePoint);
float t = (d - dot(planeNormal, rayOrigin)) / dot(planeNormal, rayDir);
return rayOrigin + t * rayDir;
}`),D.code.add(v`
      float boundingRectDistanceToCamera() {
        vec3 center = vec3(boundingRect[0][0], boundingRect[0][1], boundingRect[0][2]);
        vec3 halfU = vec3(boundingRect[1][0], boundingRect[1][1], boundingRect[1][2]);
        vec3 halfV = vec3(boundingRect[2][0], boundingRect[2][1], boundingRect[2][2]);
        vec3 n = normalize(cross(halfU, halfV));

        vec3 viewDir = - vec3(view[0][2], view[1][2], view[2][2]);

        float viewAngle = dot(viewDir, n);
        float minViewAngle = ${v.float(S)};

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
    `)),D.code.add(v`
    vec2 scaledUV() {
      vec2 uv = uvMapSpace.xy ${$?" * rotate45":""};
      vec2 uvCellOrigin = uvMapSpace.zw ${$?" * rotate45":""};

      ${j.draped?"":v`
            float distanceToCamera = boundingRectDistanceToCamera();
            float worldToScreenRatio = worldToScreenPerDistanceRatio / distanceToCamera;
          `}

      // Logarithmically discretize ratio to avoid jittering
      float step = 0.1;
      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);

      vec2 uvOffset = mod(uvCellOrigin * discreteWorldToScreenRatio, ${v.float(j.patternSpacing)});
      return uvOffset + (uv * discreteWorldToScreenRatio);
    }
  `),D.code.add(v`
    void main(void) {
      vuv = scaledUV();
      vpos = position;
      ${T?"depth = (view * vec4(vpos, 1.0)).z;":""}
      forwardNormalizedVertexColor();
      gl_Position = ${C?v`transformPositionWithDepth(proj, view, vpos, nearFar, linearDepth);`:v`transformPosition(proj, view, vpos);`}
    }
  `),P.include(o,j),R.include(c),j.draped&&R.uniforms.add(new u("texelSize",((e,o)=>1/o.camera.pixelRatio))),j.output===e.Highlight&&P.include(i),T&&P.include(n,j),j.output!==e.Highlight&&(R.code.add(v`
      const float lineWidth = ${v.float(j.lineWidth)};
      const float spacing = ${v.float(j.patternSpacing)};
      const float spacingINV = ${v.float(1/j.patternSpacing)};

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
    `),j.draped||R.code.add(v`const int maxSamples = 5;
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
}`)),R.uniforms.add(new g("uColor",(e=>e.color))),R.code.add(v`
    void main() {
      discardBySlice(vpos);
      ${T?"terrainDepthTest(gl_FragCoord, depth);":""}
      vec4 color = ${j.hasVertexColors?"vColor * uColor;":"uColor;"}
      color = highlightSlice(color, vpos);

      ${j.output!==e.Highlight?v`color.a *= ${x(j)};`:""}

      if (color.a < ${v.float(l)}) {
        discard;
      }

      ${j.output===e.Alpha?v`gl_FragColor = vec4(color.a);`:""}

      ${j.output===e.Color?v`gl_FragColor = color; ${j.transparencyPassType===f.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}`:""}
      ${j.output===e.Highlight?v`outputHighlight();`:""}
      ${j.output===e.Depth?v`outputDepth(linearDepth);`:""};
    }
  `),P}function x(e){function o(o){return e.draped?v`coverage(vuv.${o}, texelSize)`:v`sample(vuv.${o})`}switch(e.style){case w.ForwardDiagonal:case w.Horizontal:return o("y");case w.BackwardDiagonal:case w.Vertical:return o("x");case w.DiagonalCross:case w.Cross:return v`
        1.0 - (1.0 - ${o("x")}) * (1.0 - ${o("y")})
      `;default:return"0.0"}}const P=Object.freeze(Object.defineProperty({__proto__:null,build:j},Symbol.toStringTag,{value:"Module"}));export{P,j as b};
