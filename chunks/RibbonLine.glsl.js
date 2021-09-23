/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../views/3d/support/debugFlags","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/RibbonVertexPosition.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/LineStipple.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/PiUtils.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder"],(function(e,t,i,n,l,a,r,o,s,p,d,c,g){"use strict";function v(e){const v=new g.ShaderBuilder;v.extensions.add("GL_OES_standard_derivatives"),v.include(s.PiUtils),v.include(n.RibbonVertexPosition,e),v.include(r.LineStipple,e),1===e.output&&v.include(l.OutputDepth,e),v.vertex.uniforms.add("proj","mat4").add("view","mat4").add("cameraNearFar","vec2").add("pixelRatio","float").add("miterLimit","float").add("screenSize","vec2"),v.attributes.add("position","vec3"),v.attributes.add("subdivisionFactor","float"),v.attributes.add("uv0","vec2"),v.attributes.add("auxpos1","vec3"),v.attributes.add("auxpos2","vec3"),v.varyings.add("vColor","vec4"),v.varyings.add("vpos","vec3"),v.varyings.add("linearDepth","float"),e.multipassTerrainEnabled&&v.varyings.add("depth","float");const f=e.draped&&t.ENABLE_CONTINUOUS_LINE_PATTERNS,m=e.falloffEnabled,u=f&&e.stippleEnabled&&e.roundCaps,D=e.innerColorEnabled||u;return u&&v.varyings.add("stippleCapRadius","float"),D&&v.varyings.add("vLineDistance","float"),m&&v.varyings.add("vLineDistanceNorm","float"),e.falloffEnabled&&v.fragment.uniforms.add("falloff","float"),e.innerColorEnabled&&(v.fragment.uniforms.add("innerColor","vec4"),v.fragment.uniforms.add("innerWidth","float")),v.vertex.code.add(c.glsl`#define PERPENDICULAR(v) vec2(v.y, -v.x);
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`),v.vertex.code.add(c.glsl`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= screenSize / posNdc.w;
return posNdc;
}`),v.vertex.code.add(c.glsl`
    void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
      float vnp = cameraNearFar[0] * 0.99;

      //current pos behind ncp --> we need to clip
      if(pos.z > -cameraNearFar[0]) {
        if (!isStartVertex) {
          //previous in front of ncp
          if(prev.z < -cameraNearFar[0]) {
            pos = mix(prev, pos, interp(vnp, prev, pos));
            next = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
        //next in front of ncp
        if(isStartVertex) {
          if(next.z < -cameraNearFar[0]) {
            pos = mix(pos, next, interp(vnp, pos, next));
            prev = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
      } else {
        //current position visible
        //previous behind ncp
        if (prev.z > -cameraNearFar[0]) {
          prev = mix(pos, prev, interp(vnp, pos, prev));
        }
        //next behind ncp
        if (next.z > -cameraNearFar[0]) {
          next = mix(next, pos, interp(vnp, next, pos));
        }
      }

      ${e.multipassTerrainEnabled?"depth = pos.z;":""}
      linearDepth = (-pos.z - cameraNearFar[0]) / (cameraNearFar[1] - cameraNearFar[0]);

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);
    }
`),v.vertex.code.add(c.glsl`void main(void) {
float uvY = floor(uv0.y);
float uvZ = fract(uv0.y) * 10.0;
float coverage = 1.0;
vpos = position;
if (uvY == 0.0) {
gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
}
else {
bool isStartVertex = abs(abs(uvY)-3.0) == 1.0;
bool isJoin = abs(uvY)-3.0 < 0.0;
float lineWidth = getSize() * pixelRatio;
if (lineWidth < 1.0) {
coverage = lineWidth;
lineWidth = 1.0;
}else{
lineWidth = floor(lineWidth + 0.5);
}
vec4 pos  = view * vec4(position.xyz, 1.0);
vec4 prev = view * vec4(auxpos1.xyz, 1.0);
vec4 next = view * vec4(auxpos2.xyz, 1.0);
clipAndTransform(pos, prev, next, isStartVertex);
vec2 left = (pos.xy - prev.xy);
vec2 right = (next.xy - pos.xy);
float leftLen = length(left);
float rightLen = length(right);`),e.stippleEnabled&&v.vertex.code.add(c.glsl`vec4 stippleSegmentInfo = mix(vec4(pos.xy, right), vec4(prev.xy, left), uvZ);
vec2 stippleSegmentOrigin = stippleSegmentInfo.xy;
vec2 stippleSegment = stippleSegmentInfo.zw;`),v.vertex.code.add(c.glsl`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = (left.x * right.y - left.y * right.x) * uvY > 0.0;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),e.roundJoins?v.vertex.code.add(c.glsl`vec2 startDir;
vec2 endDir;
if (leftLen < 0.001) {
startDir = right;
}
else{
startDir = left;
}
startDir = normalize(startDir);
startDir = PERPENDICULAR(startDir);
if (rightLen < 0.001) {
endDir = left;
}
else{
endDir = right;
}
endDir = normalize(endDir);
endDir = PERPENDICULAR(endDir);
float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
joinDisplacementDir = rotate(startDir, -sign(uvY) * subdivisionFactor * rotationAngle);`):v.vertex.code.add(c.glsl`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = isStartVertex ? right : left;
}
joinDisplacementDir = normalize(joinDisplacementDir);
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);`),v.vertex.code.add(c.glsl`displacementLen = lineWidth;
}
} else {
if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = isStartVertex ? right : left;
}
joinDisplacementDir = normalize(joinDisplacementDir);
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
displacementLen = lineWidth;
capDisplacementDir = isStartVertex ? -right : left;`),e.roundCaps?v.vertex.code.add(c.glsl`float angle = subdivisionFactor*PI*0.5;
joinDisplacementDir *= cos(angle);
capDisplacementDir *= sin(angle);`):v.vertex.code.add(c.glsl`capDisplacementDir *= subdivisionFactor;`),v.vertex.code.add(c.glsl`
  }

  // Displacement (in pixels) caused by join/or cap
  vec2 dpos = joinDisplacementDir * sign(uvY) * displacementLen + capDisplacementDir * displacementLen;

  ${u?c.glsl`stippleCapRadius = lineWidth;`:""}

  ${m||D?c.glsl`float lineDist = lineWidth * sign(uvY) * pos.w;`:""}

  ${D?c.glsl`vLineDistance = lineDist;`:""}
  ${m?c.glsl`vLineDistanceNorm = lineDist / lineWidth;`:""}

  pos.xy += dpos;
  `),e.stippleEnabled&&(f?v.vertex.code.add(c.glsl`{
stipplePatternUv = uv0.x;
float stippleSegmentScreenLength = length(stippleSegment);
float stippleSegmentRenderLength = length(mix(auxpos2 - position, position - auxpos1, uvZ));
if (stippleSegmentScreenLength >= 0.001) {
vec2 stippleDisplacement = pos.xy - stippleSegmentOrigin;
float stippleDisplacementFactor = dot(stippleSegment, stippleDisplacement) / (stippleSegmentScreenLength * stippleSegmentScreenLength);
stipplePatternUv += (stippleDisplacementFactor - uvZ) * stippleSegmentRenderLength;
}
stipplePatternUv *= worldToScreenRatio;
}`):(v.vertex.code.add(c.glsl`{
vec2 posVec = pos.xy - stippleSegmentOrigin;
float stippleSegmentDirectionLength = length(stippleSegment);`),e.stippleIntegerRepeatsEnabled&&v.vertex.code.add(c.glsl`float numberOfPatternRepeats = stippleSegmentDirectionLength * 0.5 * stipplePatternPixelSizeInv;
float roundedNumberOfPatternRepeats = floor(numberOfPatternRepeats);
stipplePatternUvMax = roundedNumberOfPatternRepeats;`),v.vertex.code.add(c.glsl`
        if (stippleSegmentDirectionLength >= 0.001) {
          // Project the vertex position onto the line segment.
          float projectedLength = dot(stippleSegment, posVec) / stippleSegmentDirectionLength * 0.5;
          ${e.stippleIntegerRepeatsEnabled?"float wholeNumberOfRepeatsScale = roundedNumberOfPatternRepeats / numberOfPatternRepeats;":"float wholeNumberOfRepeatsScale = 1.0;"}
          stipplePatternUv = projectedLength * wholeNumberOfRepeatsScale * stipplePatternPixelSizeInv * pos.w;
        } else {
          stipplePatternUv = 1.0;
        }
      }
    `))),v.vertex.code.add(c.glsl`pos.xy = pos.xy / screenSize * pos.w;
vColor = getColor();
vColor.a *= coverage;
gl_Position = pos;
}
}`),e.multipassTerrainEnabled&&(v.fragment.include(a.ReadLinearDepth),v.include(o.multipassTerrainTest,e)),v.include(i.Slice,e),v.fragment.uniforms.add("intrinsicColor","vec4"),v.fragment.include(d.ColorConversion),v.fragment.code.add(c.glsl`
  void main() {
    discardBySlice(vpos);
    ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
  `),u?v.fragment.code.add(c.glsl`vec2 stipplePosition = vec2(
clamp(stippleCapRadius - getStippleSDF(), 0.0, stippleCapRadius),
vLineDistance
) / stippleCapRadius;
float stippleRadius = dot(stipplePosition, stipplePosition);
float stippleAlpha = step(stippleRadius, 1.0);`):v.fragment.code.add(c.glsl`float stippleAlpha = getStippleAlpha();`),v.fragment.code.add(c.glsl`discardByStippleAlpha(stippleAlpha, stippleAlphaColorDiscard);
vec4 color = intrinsicColor * vColor;`),e.innerColorEnabled&&(v.fragment.uniforms.add("pixelRatio","float"),v.fragment.code.add(c.glsl`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`)),v.fragment.code.add(c.glsl`vec4 finalColor = blendStipple(color, stippleAlpha);`),e.falloffEnabled&&v.fragment.code.add(c.glsl`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`),v.fragment.code.add(c.glsl`
    if (finalColor.a < ${c.glsl.float(p.symbolAlphaCutoff)}) {
      discard;
    }

    ${7===e.output?c.glsl`gl_FragColor = vec4(finalColor.a);`:""}
    ${0===e.output?c.glsl`gl_FragColor = highlightSlice(finalColor, vpos);`:""}
    ${0===e.output&&e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    ${4===e.output?c.glsl`gl_FragColor = vec4(1.0);`:""}
    ${1===e.output?c.glsl`outputDepth(linearDepth);`:""}
  }
  `),v}var f=Object.freeze({__proto__:null,build:v});e.RibbonLineShader=f,e.build=v}));
