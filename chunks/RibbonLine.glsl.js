/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/RibbonVertexPosition.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/LineStipple.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/PiUtils.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder"],(function(e,t,i,n,r,o,a,l,s,d,p,c){"use strict";const g=1;function v(e){const v=new c.ShaderBuilder,f=e.stippleEnabled&&e.roundCaps,m=e.falloffEnabled||f,h=e.innerColorEnabled,u=e.stippleEnabled&&e.stippleScaleWithLineWidth||e.roundCaps,D=e.stippleEnabled&&e.stippleScaleWithLineWidth;return v.extensions.add("GL_OES_standard_derivatives"),v.include(l.PiUtils),v.include(i.RibbonVertexPosition,e),v.include(o.LineStipple,{...e,stippleRequiresStretchMeasure:f}),1===e.output&&v.include(n.OutputDepth,e),v.vertex.uniforms.add("proj","mat4").add("view","mat4").add("cameraNearFar","vec2").add("pixelRatio","float").add("miterLimit","float").add("screenSize","vec2"),v.attributes.add("position","vec3"),v.attributes.add("subdivisionFactor","float"),v.attributes.add("uv0","vec2"),v.attributes.add("auxpos1","vec3"),v.attributes.add("auxpos2","vec3"),v.varyings.add("vColor","vec4"),v.varyings.add("vpos","vec3"),v.varyings.add("linearDepth","float"),e.multipassTerrainEnabled&&v.varyings.add("depth","float"),u&&v.varyings.add("vLineWidth","float"),D&&v.varyings.add("vLineSizeInv","float"),h&&v.varyings.add("vLineDistance","float"),m&&v.varyings.add("vLineDistanceNorm","float"),e.falloffEnabled&&v.fragment.uniforms.add("falloff","float"),e.innerColorEnabled&&(v.fragment.uniforms.add("innerColor","vec4"),v.fragment.uniforms.add("innerWidth","float")),e.roundCaps&&v.varyings.add("vCapPosition","vec2"),f&&v.varyings.add("vStipplePatternStretch","float"),v.vertex.code.add(p.glsl`#define PERPENDICULAR(v) vec2(v.y, -v.x);
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`),v.vertex.code.add(p.glsl`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= screenSize / posNdc.w;
return posNdc;
}`),v.vertex.code.add(p.glsl`
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
`),v.vertex.code.add(p.glsl`
  void main(void) {
    // unpack values from uv0.y
    bool isStartVertex = abs(abs(uv0.y)-3.0) == 1.0;

    float coverage = 1.0;
    vpos = position;

    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      bool isJoin = abs(uv0.y) < 3.0;

      float lineSize = getSize();
      float lineWidth = lineSize * pixelRatio;

      ${u?p.glsl`vLineWidth = lineWidth;`:""}
      ${D?p.glsl`vLineSizeInv = 1.0 / lineSize;`:""}

      // convert sub-pixel coverage to alpha
      if (lineWidth < 1.0) {
        coverage = lineWidth;
        lineWidth = 1.0;
      }else{
        // Ribbon lines cannot properly render non-integer sizes. Round width to integer size if
        // larger than one for better quality. Note that we do render < 1 pixels more or less correctly
        // so we only really care to round anything larger than 1.
        lineWidth = floor(lineWidth + 0.5);
      }

      vec4 pos  = view * vec4(position.xyz, 1.0);
      vec4 prev = view * vec4(auxpos1.xyz, 1.0);
      vec4 next = view * vec4(auxpos2.xyz, 1.0);

      clipAndTransform(pos, prev, next, isStartVertex);

      vec2 left = (pos.xy - prev.xy);
      vec2 right = (next.xy - pos.xy);

      float leftLen = length(left);
      float rightLen = length(right);
  `),e.stippleEnabled&&v.vertex.code.add(p.glsl`float isEndVertex = float(!isStartVertex);
vec4 segmentInfo = mix(vec4(pos.xy, right), vec4(prev.xy, left), isEndVertex);
vec2 segmentOrigin = segmentInfo.xy;
vec2 segment = segmentInfo.zw;`),v.vertex.code.add(p.glsl`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = (left.x * right.y - left.y * right.x) * uv0.y > 0.0;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),e.roundJoins?v.vertex.code.add(p.glsl`
        vec2 startDir;
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

        float factor = ${e.stippleEnabled?p.glsl`min(1.0, subdivisionFactor * ${p.glsl.float((g+2)/(g+1))})`:p.glsl`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(uv0.y) * factor * rotationAngle);
      `):v.vertex.code.add(p.glsl`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = normalize(joinDisplacementDir);
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);`),v.vertex.code.add(p.glsl`displacementLen = lineWidth;
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
capDisplacementDir = isStartVertex ? -right : left;
capDisplacementDir *= subdivisionFactor;
}`),v.vertex.code.add(p.glsl`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;

    ${m||h?p.glsl`float lineDistNorm = sign(uv0.y) * pos.w;`:""}

    ${h?p.glsl`vLineDistance = lineWidth * lineDistNorm;`:""}
    ${m?p.glsl`vLineDistanceNorm = lineDistNorm;`:""}

    ${e.roundCaps?p.glsl`vCapPosition = isJoin ? vec2(0.0) : dpos;`:""}

    pos.xy += dpos;
  `),e.stippleEnabled&&(e.draped||v.vertex.code.add(p.glsl`vec3 segmentCenter = mix((auxpos2 + position) * 0.5, (position + auxpos1) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),v.vertex.code.add(p.glsl`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(auxpos2 - position, position - auxpos1, isEndVertex));`),e.draped?v.vertex.code.add(p.glsl`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = uv0.x * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):v.vertex.code.add(p.glsl`float startPseudoScreen = mix(uv0.x, uv0.x - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),v.vertex.code.add(p.glsl`
      float patternLength = ${e.stippleScaleWithLineWidth?"lineSize * ":""} stipplePatternPixelSize;

      // Compute the coordinates at both start and end of the line segment, because we need both to clamp to in the fragment shader
      // The 0.5 factor on the screen length is to correct for pixel ratio (it is calculated at double resolution)
      ${f?p.glsl`
            vec3 stippleSegmentInfo = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);
            vStippleDistanceLimits = stippleSegmentInfo.xy;
            vStipplePatternStretch = stippleSegmentInfo.z;`:p.glsl`
            vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);`}

      vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);

      // Adjust the coordinate to the displaced position (the pattern is shortened/overextended on the in/outside of joins)
      if (segmentLengthScreenDouble >= 0.001) {
        // Project the actual vertex position onto the line segment. Note that the resulting factor is within [0..1] at the
        // original vertex positions, and slightly outside of that range at the displaced positions
        vec2 stippleDisplacement = pos.xy - segmentOrigin;
        float stippleDisplacementFactor = dot(segment, stippleDisplacement) / (segmentLengthScreenDouble * segmentLengthScreenDouble);

        // Apply this offset to the actual vertex coordinate (can be screen or pseudo-screen space)
        vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
      }

      // Cancel out perspective correct interpolation because we want this length the really represent the screen distance
      vStippleDistanceLimits *= pos.w;
      vStippleDistance *= pos.w;
    `)),v.vertex.code.add(p.glsl`pos.xy = pos.xy / screenSize * pos.w;
vColor = getColor();
vColor.a *= coverage;
gl_Position = pos;
}
}`),e.multipassTerrainEnabled&&(v.fragment.include(r.ReadLinearDepth),v.include(a.multipassTerrainTest,e)),v.include(t.Slice,e),v.fragment.uniforms.add("intrinsicColor","vec4"),v.fragment.include(d.ColorConversion),v.fragment.code.add(p.glsl`
  void main() {
    discardBySlice(vpos);
    ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
  `),e.roundCaps&&v.fragment.code.add(p.glsl`
    float fragmentRadius = length(vCapPosition);
    float fragmentSDF = (fragmentRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
    float capCoverage = clamp(0.5 - fragmentSDF, 0.0, 1.0);
    if (capCoverage < ${p.glsl.float(s.symbolAlphaCutoff)}) {
      discard;
    }
  `),f?v.fragment.code.add(p.glsl`
      vec2 stipplePosition = vec2(
        max(1.0 - getStippleSDF() * 2.0 * vStipplePatternStretch, 0.0),
        vLineDistanceNorm * gl_FragCoord.w
      );
      float stippleRadius = length(stipplePosition * vLineWidth);
      float stippleCapSDF = (stippleRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${p.glsl.float(s.symbolAlphaCutoff)}, stippleCoverage);
    `):v.fragment.code.add(p.glsl`float stippleAlpha = getStippleAlpha();`),v.fragment.code.add(p.glsl`discardByStippleAlpha(stippleAlpha, stippleAlphaColorDiscard);
vec4 color = intrinsicColor * vColor;`),v.fragment.uniforms.add("pixelRatio","float"),e.innerColorEnabled&&v.fragment.code.add(p.glsl`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`),v.fragment.code.add(p.glsl`vec4 finalColor = blendStipple(color, stippleAlpha);`),e.falloffEnabled&&v.fragment.code.add(p.glsl`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`),v.fragment.code.add(p.glsl`
    if (finalColor.a < ${p.glsl.float(s.symbolAlphaCutoff)}) {
      discard;
    }

    ${7===e.output?p.glsl`gl_FragColor = vec4(finalColor.a);`:""}
    ${0===e.output?p.glsl`gl_FragColor = highlightSlice(finalColor, vpos);`:""}
    ${0===e.output&&e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    ${4===e.output?p.glsl`gl_FragColor = vec4(1.0);`:""}
    ${1===e.output?p.glsl`outputDepth(linearDepth);`:""}
  }
  `),v}const f=Object.freeze({__proto__:null,NUM_ROUND_JOIN_SUBDIVISIONS:g,build:v});e.NUM_ROUND_JOIN_SUBDIVISIONS=g,e.RibbonLineShader=f,e.build=v}));
