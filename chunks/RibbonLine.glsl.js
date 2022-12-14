/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../core/maybe","../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/ObjectAndLayerIdColor.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/RibbonVertexPosition.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/LineStipple.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MarkerSizing.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/PiUtils.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff","../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl","../views/3d/webgl-engine/core/shaderModules/Float2PassUniform","../views/3d/webgl-engine/core/shaderModules/Float4PassUniform","../views/3d/webgl-engine/core/shaderModules/FloatPassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/lib/TransparencyPassType","../views/3d/webgl-engine/lib/VertexAttribute","../views/3d/webgl-engine/shaders/LineMarkerTechniqueConfiguration","../views/3d/webgl-engine/shaders/RibbonLineTechniqueConfiguration"],(function(e,t,i,n,o,r,a,s,l,d,p,c,g,v,f,h,m,u,S,D,b,x,L,w,y){"use strict";const C=1;function P(e){const P=new b.ShaderBuilder,{vertex:A,fragment:F}=P,R=e.hasMultipassTerrain&&(e.output===n.ShaderOutput.Color||e.output===n.ShaderOutput.Alpha);P.include(c.PiUtils),P.include(a.RibbonVertexPosition,e),P.include(l.LineStipple,e);const O=e.applyMarkerOffset&&!e.draped;O&&(A.uniforms.add(new u.FloatPassUniform("markerScale",(e=>e.markerScale))),P.include(d.MarkerSizing,{space:w.LineMarkerSpace.World})),e.output===n.ShaderOutput.Depth&&P.include(s.OutputDepth,e),P.include(r.ObjectAndLayerIdColor,e),f.addProjViewLocalOrigin(A,e),A.uniforms.add([new D.Matrix4PassUniform("inverseProjectionMatrix",((e,t)=>t.camera.inverseProjectionMatrix)),new h.Float2PassUniform("nearFar",((e,t)=>t.camera.nearFar)),new u.FloatPassUniform("miterLimit",(e=>"miter"!==e.join?0:e.miterLimit)),new m.Float4PassUniform("viewport",((e,t)=>t.camera.fullViewport))]),A.constants.add("LARGE_HALF_FLOAT","float",65500),P.attributes.add(L.VertexAttribute.POSITION,"vec3"),P.attributes.add(L.VertexAttribute.SUBDIVISIONFACTOR,"float"),P.attributes.add(L.VertexAttribute.UV0,"vec2"),P.attributes.add(L.VertexAttribute.AUXPOS1,"vec3"),P.attributes.add(L.VertexAttribute.AUXPOS2,"vec3"),P.varyings.add("vColor","vec4"),P.varyings.add("vpos","vec3"),i.addLinearDepth(P),R&&P.varyings.add("depth","float");const T=e.capType===y.CapType.ROUND,j=e.stippleEnabled&&e.stippleScaleWithLineWidth||T;j&&P.varyings.add("vLineWidth","float");const z=e.stippleEnabled&&e.stippleScaleWithLineWidth;z&&P.varyings.add("vLineSizeInv","float");const V=e.innerColorEnabled||T;V&&P.varyings.add("vLineDistance","float");const E=e.stippleEnabled&&T,U=e.falloffEnabled||E;U&&P.varyings.add("vLineDistanceNorm","float"),T&&(P.varyings.add("vSegmentSDF","float"),P.varyings.add("vReverseSegmentSDF","float")),A.code.add(S.glsl`#define PERPENDICULAR(v) vec2(v.y, -v.x);
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`),A.code.add(S.glsl`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),i.addCalculateLinearDepth(P),A.code.add(S.glsl`
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

      ${R?"depth = pos.z;":""}
      linearDepth = calculateLinearDepth(nearFar,pos.z);

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);
    }
  `),A.uniforms.add(new u.FloatPassUniform("pixelRatio",((e,t)=>t.camera.pixelRatio))),A.code.add(S.glsl`
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

      ${j?S.glsl`vLineWidth = lineWidth;`:""}
      ${z?S.glsl`vLineSizeInv = 1.0 / lineSize;`:""}

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
  `),O&&A.code.add(S.glsl`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos, other);
if(!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos) * 0.5;
}`),A.code.add(S.glsl`clipAndTransform(pos, prev, next, isStartVertex);
vec2 left = (pos.xy - prev.xy);
vec2 right = (next.xy - pos.xy);
float leftLen = length(left);
float rightLen = length(right);`);(e.stippleEnabled||T)&&A.code.add(S.glsl`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${T?S.glsl`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);`:""}
    `),A.code.add(S.glsl`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
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
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),e.roundJoins?A.code.add(S.glsl`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = PERPENDICULAR(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = PERPENDICULAR(endDir);

        float factor = ${e.stippleEnabled?S.glsl`min(1.0, subdivisionFactor * ${S.glsl.float((C+2)/(C+1))})`:S.glsl`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(uv0.y) * factor * rotationAngle);
      `):A.code.add(S.glsl`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);`);const W=e.capType!==y.CapType.BUTT;return A.code.add(S.glsl`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);

      ${W?S.glsl`capDisplacementDir = isStartVertex ? -right : left;`:""}
    }
  `),A.code.add(S.glsl`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;

    ${U||V?S.glsl`float lineDistNorm = sign(uv0.y) * pos.w;`:""}

    ${V?S.glsl`vLineDistance = lineWidth * lineDistNorm;`:""}
    ${U?S.glsl`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xy += dpos;
  `),T&&A.code.add(S.glsl`vec2 segmentDir = normalize(segment);
vSegmentSDF = (isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir) * pos.w) ;
vReverseSegmentSDF = (isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir) * pos.w);`),e.stippleEnabled&&(e.draped?A.uniforms.add(new u.FloatPassUniform("worldToScreenRatio",((e,t)=>1/t.screenToPCSRatio))):A.code.add(S.glsl`vec3 segmentCenter = mix((auxpos2 + position) * 0.5, (position + auxpos1) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),A.code.add(S.glsl`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(auxpos2 - position, position - auxpos1, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),e.draped?A.code.add(S.glsl`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = uv0.x * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):A.code.add(S.glsl`float startPseudoScreen = mix(uv0.x, uv0.x - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),A.uniforms.add(new u.FloatPassUniform("stipplePatternPixelSize",(e=>l.computePixelSize(e)))),A.code.add(S.glsl`
      float patternLength = ${e.stippleScaleWithLineWidth?"lineSize * ":""} stipplePatternPixelSize;

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
    `)),A.code.add(S.glsl`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;

      vColor = getColor();
      vColor.a *= coverage;

      ${e.wireframe&&!e.draped?"pos.z -= 0.001 * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }
  }
  `),R&&P.include(p.multipassTerrainTest,e),P.include(o.SliceDraw,e),F.include(v.ColorConversion),F.code.add(S.glsl`
  void main() {
    discardBySlice(vpos);
    ${R?"terrainDepthTest(gl_FragCoord, depth);":""}
  `),e.wireframe?F.code.add(S.glsl`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(T&&F.code.add(S.glsl`
      float sdf = min(vSegmentSDF, vReverseSegmentSDF);
      vec2 fragmentPosition = vec2(
        min(sdf, 0.0),
        vLineDistance
      ) * gl_FragCoord.w;

      float fragmentRadius = length(fragmentPosition);
      float fragmentCapSDF = (fragmentRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

      if (capCoverage < ${S.glsl.float(g.symbolAlphaCutoff)}) {
        discard;
      }
    `),E?F.code.add(S.glsl`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        vLineDistanceNorm * gl_FragCoord.w
      );
      float stippleRadius = length(stipplePosition * vLineWidth);
      float stippleCapSDF = (stippleRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${S.glsl.float(g.symbolAlphaCutoff)}, stippleCoverage);
      `):F.code.add(S.glsl`float stippleAlpha = getStippleAlpha();`),F.uniforms.add(new m.Float4PassUniform("intrinsicColor",(e=>e.color))),F.code.add(S.glsl`discardByStippleAlpha(stippleAlpha, stippleAlphaColorDiscard);
vec4 color = intrinsicColor * vColor;`),e.innerColorEnabled&&(F.uniforms.add(new m.Float4PassUniform("innerColor",(e=>t.unwrapOr(e.innerColor,e.color)))),F.uniforms.add(new u.FloatPassUniform("innerWidth",((e,t)=>e.innerWidth*t.camera.pixelRatio))),F.code.add(S.glsl`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`)),F.code.add(S.glsl`vec4 finalColor = blendStipple(color, stippleAlpha);`),e.falloffEnabled&&(F.uniforms.add(new u.FloatPassUniform("falloff",(e=>e.falloff))),F.code.add(S.glsl`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`))),F.code.add(S.glsl`
    if (finalColor.a < ${S.glsl.float(g.symbolAlphaCutoff)}) {
      discard;
    }

    ${e.output===n.ShaderOutput.Alpha?S.glsl`gl_FragColor = vec4(finalColor.a);`:""}
    ${e.output===n.ShaderOutput.Color?S.glsl`gl_FragColor = highlightSlice(finalColor, vpos);`:""}
    ${e.output===n.ShaderOutput.Color&&e.transparencyPassType===x.TransparencyPassType.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    ${e.output===n.ShaderOutput.Highlight?S.glsl`gl_FragColor = vec4(1.0);`:""}
    ${e.output===n.ShaderOutput.Depth?S.glsl`outputDepth(linearDepth);`:""}
    ${e.output===n.ShaderOutput.ObjectAndLayerIdColor?S.glsl`outputObjectAndLayerIdColor();`:""}
  }
  `),P}const A=Object.freeze(Object.defineProperty({__proto__:null,NUM_ROUND_JOIN_SUBDIVISIONS:C,build:P},Symbol.toStringTag,{value:"Module"}));e.NUM_ROUND_JOIN_SUBDIVISIONS=C,e.RibbonLine=A,e.build=P}));
