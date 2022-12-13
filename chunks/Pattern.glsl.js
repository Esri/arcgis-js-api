/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff","../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl","../views/3d/webgl-engine/core/shaderModules/Float4PassUniform","../views/3d/webgl-engine/core/shaderModules/FloatPassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/lib/TransparencyPassType","../views/3d/webgl-engine/lib/VertexAttribute","../views/3d/webgl-engine/materials/PatternStyle"],(function(e,t,a,o,r,l,i,n,s,d,c,g,u,p,v,h,f,m,w){"use strict";const S=.70710678118,y=S,b=.08715574274;function x(e){const x=new h.ShaderBuilder,T=e.hasMultipassTerrain&&(e.output===a.ShaderOutput.Color||e.output===a.ShaderOutput.Alpha);e.draped||x.extensions.add("GL_OES_standard_derivatives");const{vertex:C,fragment:D}=x;g.addProjViewLocalOrigin(C,e),x.include(r.Transform,e),x.include(l.VertexColor,e),e.draped?C.uniforms.add(new p.FloatPassUniform("worldToScreenRatio",((e,t)=>1/t.screenToPCSRatio))):x.attributes.add(m.VertexAttribute.BOUNDINGRECT,"mat3"),x.attributes.add(m.VertexAttribute.POSITION,"vec3"),x.attributes.add(m.VertexAttribute.UVMAPSPACE,"vec4"),x.varyings.add("vpos","vec3"),x.varyings.add("vuv","vec2"),T&&x.varyings.add("depth","float");const O=e.style===w.Style.ForwardDiagonal||e.style===w.Style.BackwardDiagonal||e.style===w.Style.DiagonalCross;O&&C.code.add(v.glsl`
      const mat2 rotate45 = mat2(${v.glsl.float(S)}, ${v.glsl.float(-y)},
                                 ${v.glsl.float(y)}, ${v.glsl.float(S)});
    `),e.draped||(g.addCameraPosition(C,e),C.uniforms.add(new p.FloatPassUniform("worldToScreenPerDistanceRatio",((e,t)=>1/t.camera.perScreenPixelRatio))),C.code.add(v.glsl`vec3 projectPointToLineSegment(vec3 center, vec3 halfVector, vec3 point) {
float projectedLength = dot(halfVector, point - center) / dot(halfVector, halfVector);
return center + halfVector * clamp(projectedLength, -1.0, 1.0);
}`),C.code.add(v.glsl`vec3 intersectRayPlane(vec3 rayDir, vec3 rayOrigin, vec3 planeNormal, vec3 planePoint) {
float d = dot(planeNormal, planePoint);
float t = (d - dot(planeNormal, rayOrigin)) / dot(planeNormal, rayDir);
return rayOrigin + t * rayDir;
}`),C.code.add(v.glsl`
      float boundingRectDistanceToCamera() {
        vec3 center = vec3(boundingRect[0][0], boundingRect[0][1], boundingRect[0][2]);
        vec3 halfU = vec3(boundingRect[1][0], boundingRect[1][1], boundingRect[1][2]);
        vec3 halfV = vec3(boundingRect[2][0], boundingRect[2][1], boundingRect[2][2]);
        vec3 n = normalize(cross(halfU, halfV));

        vec3 viewDir = - vec3(view[0][2], view[1][2], view[2][2]);

        float viewAngle = dot(viewDir, n);
        float minViewAngle = ${v.glsl.float(b)};

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
    `)),C.code.add(v.glsl`
    vec2 scaledUV() {
      vec2 uv = uvMapSpace.xy ${O?" * rotate45":""};
      vec2 uvCellOrigin = uvMapSpace.zw ${O?" * rotate45":""};

      ${e.draped?"":v.glsl`
            float distanceToCamera = boundingRectDistanceToCamera();
            float worldToScreenRatio = worldToScreenPerDistanceRatio / distanceToCamera;
          `}

      // Logarithmically discretize ratio to avoid jittering
      float step = 0.1;
      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);

      vec2 uvOffset = mod(uvCellOrigin * discreteWorldToScreenRatio, ${v.glsl.float(e.patternSpacing)});
      return uvOffset + (uv * discreteWorldToScreenRatio);
    }
  `);const R=e.output===a.ShaderOutput.Depth;return R&&(x.include(i.OutputDepth,e),t.addNearFar(x),t.addLinearDepth(x)),C.code.add(v.glsl`
    void main(void) {
      vuv = scaledUV();
      vpos = position;
      ${T?"depth = (view * vec4(vpos, 1.0)).z;":""}
      forwardNormalizedVertexColor();
      gl_Position = ${R?v.glsl`transformPositionWithDepth(proj, view, vpos, nearFar, linearDepth);`:v.glsl`transformPosition(proj, view, vpos);`}
    }
  `),x.include(o.SliceDraw,e),D.include(c.ColorConversion),e.draped&&D.uniforms.add(new p.FloatPassUniform("texelSize",((e,t)=>1/t.camera.pixelRatio))),e.output===a.ShaderOutput.Highlight&&x.include(n.OutputHighlight,e),T&&x.include(s.multipassTerrainTest,e),e.output!==a.ShaderOutput.Highlight&&(D.code.add(v.glsl`
      const float lineWidth = ${v.glsl.float(e.lineWidth)};
      const float spacing = ${v.glsl.float(e.patternSpacing)};
      const float spacingINV = ${v.glsl.float(1/e.patternSpacing)};

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
    `),e.draped||D.code.add(v.glsl`const int maxSamples = 5;
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
}`)),D.uniforms.add(new u.Float4PassUniform("uColor",(e=>e.color))),D.code.add(v.glsl`
    void main() {
      discardBySlice(vpos);
      ${T?"terrainDepthTest(gl_FragCoord, depth);":""}
      vec4 color = ${e.hasVertexColors?"vColor * uColor;":"uColor;"}
      color = highlightSlice(color, vpos);

      ${e.output!==a.ShaderOutput.Highlight?v.glsl`color.a *= ${P(e)};`:""}

      if (color.a < ${v.glsl.float(d.symbolAlphaCutoff)}) {
        discard;
      }

      ${e.output===a.ShaderOutput.Alpha?v.glsl`gl_FragColor = vec4(color.a);`:""}

      ${e.output===a.ShaderOutput.Color?v.glsl`gl_FragColor = color; ${e.transparencyPassType===f.TransparencyPassType.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}`:""}
      ${e.output===a.ShaderOutput.Highlight?v.glsl`outputHighlight();`:""}
      ${e.output===a.ShaderOutput.Depth?v.glsl`outputDepth(linearDepth);`:""};
    }
  `),x}function P(e){function t(t){return e.draped?v.glsl`coverage(vuv.${t}, texelSize)`:v.glsl`sample(vuv.${t})`}switch(e.style){case w.Style.ForwardDiagonal:case w.Style.Horizontal:return t("y");case w.Style.BackwardDiagonal:case w.Style.Vertical:return t("x");case w.Style.DiagonalCross:case w.Style.Cross:return v.glsl`
        1.0 - (1.0 - ${t("x")}) * (1.0 - ${t("y")})
      `;default:return"0.0"}}const T=Object.freeze(Object.defineProperty({__proto__:null,build:x},Symbol.toStringTag,{value:"Module"}));e.Pattern=T,e.build=x}));
