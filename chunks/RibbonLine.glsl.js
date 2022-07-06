/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{unwrapOr as e}from"../core/maybe.js";import{ShaderOutput as t}from"../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions.js";import{SliceDraw as i}from"../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js";import{RibbonVertexPosition as o}from"../views/3d/webgl-engine/core/shaderLibrary/attributes/RibbonVertexPosition.glsl.js";import{OutputDepth as n}from"../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl.js";import{LineStipple as r}from"../views/3d/webgl-engine/core/shaderLibrary/shading/LineStipple.glsl.js";import{multipassTerrainTest as a}from"../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl.js";import{PiUtils as s}from"../views/3d/webgl-engine/core/shaderLibrary/shading/PiUtils.glsl.js";import{symbolAlphaCutoff as l}from"../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff.js";import{ColorConversion as p}from"../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl.js";import{addProjViewLocalOrigin as d}from"../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js";import{Float2PassUniform as c}from"../views/3d/webgl-engine/core/shaderModules/Float2PassUniform.js";import{Float4PassUniform as g}from"../views/3d/webgl-engine/core/shaderModules/Float4PassUniform.js";import{FloatPassUniform as m}from"../views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js";import{glsl as v}from"../views/3d/webgl-engine/core/shaderModules/interfaces.js";import{Matrix4PassUniform as f}from"../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform.js";import{ShaderBuilder as h}from"../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js";import{TransparencyPassType as u}from"../views/3d/webgl-engine/lib/basicInterfaces.js";import{VertexAttribute as D}from"../views/3d/webgl-engine/lib/VertexAttribute.js";import{CapType as S}from"../views/3d/webgl-engine/shaders/RibbonLineTechniqueConfiguration.js";const x=1;function b(b){const L=new h,w=b.hasMultipassTerrain&&(b.output===t.Color||b.output===t.Alpha);L.include(s),L.include(o,b),L.include(r,b),b.output===t.Depth&&L.include(n,b),d(L,b);const{vertex:y,fragment:C}=L;y.uniforms.add([new f("inverseProjectionMatrix",((e,t)=>t.camera.inverseProjectionMatrix)),new c("nearFar",((e,t)=>t.camera.nearFar)),new m("miterLimit",(e=>"miter"!==e.join?0:e.miterLimit)),new g("viewport",((e,t)=>t.camera.fullViewport))]),y.constants.add("LARGE_HALF_FLOAT","float",65500),L.attributes.add(D.POSITION,"vec3"),L.attributes.add(D.SUBDIVISIONFACTOR,"float"),L.attributes.add(D.UV0,"vec2"),L.attributes.add(D.AUXPOS1,"vec3"),L.attributes.add(D.AUXPOS2,"vec3"),L.varyings.add("vColor","vec4"),L.varyings.add("vpos","vec3"),L.varyings.add("linearDepth","float"),w&&L.varyings.add("depth","float");const j=b.capType===S.ROUND,R=b.stippleEnabled&&b.stippleScaleWithLineWidth||j;R&&L.varyings.add("vLineWidth","float");const A=b.stippleEnabled&&b.stippleScaleWithLineWidth;A&&L.varyings.add("vLineSizeInv","float");const F=b.innerColorEnabled||j;F&&L.varyings.add("vLineDistance","float");const P=b.stippleEnabled&&j,E=b.falloffEnabled||P;E&&L.varyings.add("vLineDistanceNorm","float"),j&&(L.varyings.add("vSegmentSDF","float"),L.varyings.add("vReverseSegmentSDF","float")),y.code.add(v`#define PERPENDICULAR(v) vec2(v.y, -v.x);
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`),y.code.add(v`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),y.code.add(v`
    void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
      float vnp = nearFar[0] * 0.99;

      if(pos.z > -nearFar[0]) {
        //current pos behind ncp --> we need to clip
        if (!isStartVertex) {
          if(prev.z < -nearFar[0]) {
            //previous in front of ncp
            pos = mix(prev, pos, interp(vnp, prev, pos));
            next = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        } else {
          if(next.z < -nearFar[0]) {
            //next in front of ncp
            pos = mix(pos, next, interp(vnp, pos, next));
            prev = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
      } else {
        //current position visible
        if (prev.z > -nearFar[0]) {
          //previous behind ncp
          prev = mix(pos, prev, interp(vnp, pos, prev));
        }
        if (next.z > -nearFar[0]) {
          //next behind ncp
          next = mix(next, pos, interp(vnp, next, pos));
        }
      }

      ${w?"depth = pos.z;":""}
      linearDepth = (-pos.z - nearFar[0]) / (nearFar[1] - nearFar[0]);

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);
    }
  `),y.uniforms.add(new m("pixelRatio",((e,t)=>t.camera.pixelRatio))),y.code.add(v`
  void main(void) {
    // unpack values from uv0.y
    bool isStartVertex = abs(abs(uv0.y)-3.0) == 1.0;

    float coverage = 1.0;

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

      ${R?v`vLineWidth = lineWidth;`:""}
      ${A?v`vLineSizeInv = 1.0 / lineSize;`:""}

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
  `);(b.stippleEnabled||j)&&y.code.add(v`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${j?v`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);`:""}
    `),y.code.add(v`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
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
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),b.roundJoins?y.code.add(v`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = PERPENDICULAR(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = PERPENDICULAR(endDir);

        float factor = ${b.stippleEnabled?v`min(1.0, subdivisionFactor * ${v.float((x+2)/(x+1))})`:v`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(uv0.y) * factor * rotationAngle);
      `):y.code.add(v`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);`);const T=b.capType!==S.BUTT;return y.code.add(v`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);

      ${T?v`capDisplacementDir = isStartVertex ? -right : left;`:""}
    }
  `),y.code.add(v`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;

    ${E||F?v`float lineDistNorm = sign(uv0.y) * pos.w;`:""}

    ${F?v`vLineDistance = lineWidth * lineDistNorm;`:""}
    ${E?v`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xy += dpos;
  `),j&&y.code.add(v`vec2 segmentDir = normalize(segment);
vSegmentSDF = (isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir) * pos.w) ;
vReverseSegmentSDF = (isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir) * pos.w);`),b.stippleEnabled&&(b.draped?y.uniforms.add(new m("worldToScreenRatio",((e,t)=>1/t.screenToPCSRatio))):y.code.add(v`vec3 segmentCenter = mix((auxpos2 + position) * 0.5, (position + auxpos1) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),y.code.add(v`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(auxpos2 - position, position - auxpos1, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),b.draped?y.code.add(v`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = uv0.x * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):y.code.add(v`float startPseudoScreen = mix(uv0.x, uv0.x - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),y.code.add(v`
      float patternLength = ${b.stippleScaleWithLineWidth?"lineSize * ":""} stipplePatternPixelSize;

      // Compute the coordinates at both start and end of the line segment, because we need both to clamp to in the fragment shader
      vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);

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

      // Disable stipple distance limits on caps
      vStippleDistanceLimits = isJoin ?
                                 vStippleDistanceLimits :
                                 isStartVertex ?
                                  vec2(-1e038, vStippleDistanceLimits.y) :
                                  vec2(vStippleDistanceLimits.x, 1e038);
    `)),y.code.add(v`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;

      vColor = getColor();
      vColor.a *= coverage;

      ${b.wireframe&&!b.draped?"pos.z -= 0.001 * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
    }
  }
  `),w&&L.include(a,b),L.include(i,b),C.include(p),C.code.add(v`
  void main() {
    discardBySlice(vpos);
    ${w?"terrainDepthTest(gl_FragCoord, depth);":""}
  `),b.wireframe?C.code.add(v`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(j&&C.code.add(v`
      float sdf = min(vSegmentSDF, vReverseSegmentSDF);
      vec2 fragmentPosition = vec2(
        min(sdf, 0.0),
        vLineDistance
      ) * gl_FragCoord.w;

      float fragmentRadius = length(fragmentPosition);
      float fragmentCapSDF = (fragmentRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

      if (capCoverage < ${v.float(l)}) {
        discard;
      }
    `),P?C.code.add(v`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        vLineDistanceNorm * gl_FragCoord.w
      );
      float stippleRadius = length(stipplePosition * vLineWidth);
      float stippleCapSDF = (stippleRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${v.float(l)}, stippleCoverage);
      `):C.code.add(v`float stippleAlpha = getStippleAlpha();`),C.uniforms.add(new g("intrinsicColor",(e=>e.color))),C.code.add(v`discardByStippleAlpha(stippleAlpha, stippleAlphaColorDiscard);
vec4 color = intrinsicColor * vColor;`),b.innerColorEnabled&&(C.uniforms.add(new g("innerColor",(t=>e(t.innerColor,t.color)))),C.uniforms.add(new m("innerWidth",((e,t)=>e.innerWidth*t.camera.pixelRatio))),C.code.add(v`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`)),C.code.add(v`vec4 finalColor = blendStipple(color, stippleAlpha);`),b.falloffEnabled&&(C.uniforms.add(new m("falloff",(e=>e.falloff))),C.code.add(v`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`))),C.code.add(v`
    if (finalColor.a < ${v.float(l)}) {
      discard;
    }

    ${b.output===t.Alpha?v`gl_FragColor = vec4(finalColor.a);`:""}
    ${b.output===t.Color?v`gl_FragColor = highlightSlice(finalColor, vpos);`:""}
    ${b.output===t.Color&&b.transparencyPassType===u.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    ${b.output===t.Highlight?v`gl_FragColor = vec4(1.0);`:""}
    ${b.output===t.Depth?v`outputDepth(linearDepth);`:""}
  }
  `),L}const L=Object.freeze(Object.defineProperty({__proto__:null,NUM_ROUND_JOIN_SUBDIVISIONS:x,build:b},Symbol.toStringTag,{value:"Module"}));export{x as N,L as R,b};
