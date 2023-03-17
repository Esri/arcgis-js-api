/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../views/3d/support/engineContent/marker","../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/attributes/RibbonVertexPosition.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MarkerSizing.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff","../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl","../views/3d/webgl-engine/core/shaderModules/Float2PassUniform","../views/3d/webgl-engine/core/shaderModules/Float4PassUniform","../views/3d/webgl-engine/core/shaderModules/FloatPassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform","../views/3d/webgl-engine/lib/TransparencyPassType","../views/3d/webgl-engine/lib/VertexAttribute","../views/3d/webgl-engine/shaders/LineMarkerTechniqueConfiguration"],(function(e,r,a,i,o,t,n,s,l,d,c,p,v,g,h,u,f,m,S,w,y,b,x){"use strict";function P(e){const P=new S.ShaderBuilder,z=e.hasMultipassTerrain&&(e.output===i.ShaderOutput.Color||e.output===i.ShaderOutput.Alpha),L=e.space===x.LineMarkerSpace.World;e.hasTip&&L&&P.extensions.add("GL_OES_standard_derivatives"),P.include(t.RibbonVertexPosition,e),P.include(s.MarkerSizing,e),e.output===i.ShaderOutput.Depth&&P.include(n.OutputDepth,e);const{vertex:C,fragment:M}=P;return M.include(p.RgbaFloatEncoding),v.addProjViewLocalOrigin(C,e),P.attributes.add(b.VertexAttribute.POSITION,"vec3"),P.attributes.add(b.VertexAttribute.UV0,"vec2"),P.attributes.add(b.VertexAttribute.AUXPOS1,"vec3"),P.varyings.add("vColor","vec4"),P.varyings.add("vpos","vec3"),P.varyings.add("vUV","vec2"),P.varyings.add("vSize","float"),a.addLinearDepth(P),z&&P.varyings.add("depth","float"),e.hasTip&&P.varyings.add("vLineWidth","float"),C.uniforms.add([new g.Float2PassUniform("nearFar",((e,r)=>r.camera.nearFar)),new h.Float4PassUniform("viewport",((e,r)=>r.camera.fullViewport))]),C.code.add(f.glsl`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),C.code.add(f.glsl`void clip(vec4 pos, inout vec4 prev) {
float vnp = nearFar[0] * 0.99;
if (prev.z > -nearFar[0]) {
float interpolation = (-vnp - pos.z) / (prev.z - pos.z);
prev = mix(pos, prev, interpolation);
}
}`),L?(P.attributes.add(b.VertexAttribute.NORMAL,"vec3"),v.addViewNormal(C),C.constants.add("tiltThreshold","float",.7),C.code.add(f.glsl`vec3 perpendicular(vec3 v) {
vec3 n = (viewNormal * vec4(normal.xyz, 1.0)).xyz;
vec3 n2 = cross(v, n);
vec3 forward = vec3(0.0, 0.0, 1.0);
float tiltDot = dot(forward, n);
return abs(tiltDot) < tiltThreshold ? n : n2;
}`)):C.code.add(f.glsl`vec2 perpendicular(vec2 v) {
return vec2(v.y, -v.x);
}`),C.code.add(f.glsl`
      #define vecN ${L?"vec3":"vec2"}

      vecN normalizedSegment(vecN pos, vecN prev) {
        vecN segment = pos - prev;
        float segmentLen = length(segment);

        // normalize or zero if too short
        return (segmentLen > 0.001) ? segment / segmentLen : ${L?"vec3(0.0, 0.0, 0.0)":"vec2(0.0, 0.0)"};
      }

      vecN displace(vecN pos, vecN prev, float displacementLen) {
        vecN segment = normalizedSegment(pos, prev);

        vecN displacementDirU = perpendicular(segment);
        vecN displacementDirV = segment;

        ${e.anchor===x.LineMarkerAnchor.Tip?"pos -= 0.5 * displacementLen * displacementDirV;":""}

        return pos + displacementLen * (uv0.x * displacementDirU + uv0.y * displacementDirV);
      }
    `),e.space===x.LineMarkerSpace.Screen&&(C.uniforms.add(new m.Matrix4PassUniform("inverseProjectionMatrix",((e,r)=>r.camera.inverseProjectionMatrix))),C.code.add(f.glsl`vec3 inverseProject(vec4 posScreen) {
posScreen.xy = (posScreen.xy / viewport.zw) * posScreen.w;
return (inverseProjectionMatrix * posScreen).xyz;
}`),C.code.add(f.glsl`bool rayIntersectPlane(vec3 rayDir, vec3 planeOrigin, vec3 planeNormal, out vec3 intersection) {
float cos = dot(rayDir, planeNormal);
float t = dot(planeOrigin, planeNormal) / cos;
intersection = t * rayDir;
return abs(cos) > 0.001 && t > 0.0;
}`),C.uniforms.add(new u.FloatPassUniform("perScreenPixelRatio",((e,r)=>r.camera.perScreenPixelRatio))),C.code.add(f.glsl`
      vec4 toFront(vec4 displacedPosScreen, vec3 posLeft, vec3 posRight, vec3 prev, float lineWidth) {
        // Project displaced position back to camera space
        vec3 displacedPos = inverseProject(displacedPosScreen);

        // Calculate the plane that we want the marker to lie in. Note that this will always be an approximation since ribbon lines are generally
        // not planar and we do not know the actual position of the displaced prev vertices (they are offset in screen space, too).
        vec3 planeNormal = normalize(cross(posLeft - posRight, posLeft - prev));
        vec3 planeOrigin = posLeft;

        ${e.hasCap?"\n                if(prev.z > posLeft.z) {\n                  vec2 diff = posLeft.xy - posRight.xy;\n                  planeOrigin.xy += perpendicular(diff) / 2.0;\n                }\n              ":""};

        // Move the plane towards the camera by a margin dependent on the line width (approximated in world space). This tolerance corrects for the
        // non-planarity in most cases, but sharp joins can place the prev vertices at arbitrary positions so markers can still clip.
        float offset = lineWidth * perScreenPixelRatio;
        planeOrigin *= (1.0 - offset);

        // Intersect camera ray with the plane and make sure it is within clip space
        vec3 rayDir = normalize(displacedPos);
        vec3 intersection;
        if (rayIntersectPlane(rayDir, planeOrigin, planeNormal, intersection) && intersection.z < -nearFar[0] && intersection.z > -nearFar[1]) {
          return vec4(intersection.xyz, 1.0);
        }

        // Fallback: use depth of pos or prev, whichever is closer to the camera
        float minDepth = planeOrigin.z > prev.z ? length(planeOrigin) : length(prev);
        displacedPos *= minDepth / length(displacedPos);
        return vec4(displacedPos.xyz, 1.0);
      }
  `)),C.uniforms.add(new u.FloatPassUniform("pixelRatio",((e,r)=>r.camera.pixelRatio))),a.addCalculateLinearDepth(P),C.code.add(f.glsl`void main(void) {
if (uv0.y == 0.0) {
gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
}
else {
float lineWidth = getLineWidth();
float screenMarkerSize = getScreenMarkerSize();
vec4 pos  = view * vec4(position.xyz, 1.0);
vec4 prev = view * vec4(auxpos1.xyz, 1.0);
clip(pos, prev);`),L?(e.hideOnShortSegments&&C.code.add(f.glsl`if (areWorldMarkersHidden(pos, prev)) {
gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
return;
}`),C.code.add(f.glsl`pos.xyz = displace(pos.xyz, prev.xyz, getWorldMarkerSize(pos));
vec4 displacedPosScreen = projectAndScale(pos);`)):(C.code.add(f.glsl`vec4 posScreen = projectAndScale(pos);
vec4 prevScreen = projectAndScale(prev);
vec4 displacedPosScreen = posScreen;
displacedPosScreen.xy = displace(posScreen.xy, prevScreen.xy, screenMarkerSize);`),e.space===x.LineMarkerSpace.Screen&&C.code.add(f.glsl`vec2 displacementDirU = perpendicular(normalizedSegment(posScreen.xy, prevScreen.xy));
vec3 lineRight = inverseProject(posScreen + lineWidth * vec4(displacementDirU.xy, 0.0, 0.0));
vec3 lineLeft = pos.xyz + (pos.xyz - lineRight);
pos = toFront(displacedPosScreen, lineLeft, lineRight, prev.xyz, lineWidth);
displacedPosScreen = projectAndScale(pos);`)),C.code.add(f.glsl`
        ${z?"depth = pos.z;":""}
        linearDepth = calculateLinearDepth(nearFar,pos.z);

        // Convert back into NDC
        displacedPosScreen.xy = (displacedPosScreen.xy / viewport.zw) * displacedPosScreen.w;

        // Convert texture coordinate into [0,1]
        vUV = (uv0 + 1.0) / 2.0;

        ${L?"":"vUV *= displacedPosScreen.w;"}

        ${e.hasTip?"vLineWidth = lineWidth;":""}

        vSize = screenMarkerSize;
        vColor = getColor();

        // Use camera space for slicing
        vpos = pos.xyz;

        gl_Position = displacedPosScreen;
      }
    }
  `),z&&P.include(l.multipassTerrainTest,e),P.include(o.SliceDraw,e),M.uniforms.add([new h.Float4PassUniform("intrinsicColor",(e=>e.color)),new w.Texture2DPassUniform("tex",(e=>e.texture))]),M.include(c.ColorConversion),P.constants.add("texelSize","float",1/r.MARKER_TEXTURE_SIZE),M.code.add(f.glsl`float markerAlpha(vec2 samplePos) {
samplePos += vec2(0.5, -0.5) * texelSize;
float sdf = rgba2float(texture2D(tex, samplePos)) - 0.5;
float distance = sdf * vSize;
distance -= 0.5;
return clamp(0.5 - distance, 0.0, 1.0);
}`),e.hasTip&&(P.constants.add("relativeMarkerSize","float",r.MARKER_SYMBOL_SIZE/r.MARKER_TEXTURE_SIZE),P.constants.add("relativeTipLineWidth","float",r.MARKER_TIP_THICKNESS_FACTOR),M.code.add(f.glsl`
    float tipAlpha(vec2 samplePos) {
      // Convert coordinates s.t. they are in pixels and relative to the tip of an arrow marker
      samplePos -= vec2(0.5, 0.5 + 0.5 * relativeMarkerSize);
      samplePos *= vSize;

      float halfMarkerSize = 0.5 * relativeMarkerSize * vSize;
      float halfTipLineWidth = 0.5 * max(1.0, relativeTipLineWidth * vLineWidth);

      ${L?"halfTipLineWidth *= fwidth(samplePos.y);":""}

      float distance = max(abs(samplePos.x) - halfMarkerSize, abs(samplePos.y) - halfTipLineWidth);
      return clamp(0.5 - distance, 0.0, 1.0);
    }
  `)),P.constants.add("symbolAlphaCutoff","float",d.symbolAlphaCutoff),M.code.add(f.glsl`
  void main() {
    discardBySlice(vpos);
    ${z?"terrainDepthTest(gl_FragCoord, depth);":""}

    vec4 finalColor = intrinsicColor * vColor;

    ${L?"vec2 samplePos = vUV;":"vec2 samplePos = vUV * gl_FragCoord.w;"}

    ${e.hasTip?"finalColor.a *= max(markerAlpha(samplePos), tipAlpha(samplePos));":"finalColor.a *= markerAlpha(samplePos);"}

    ${e.output===i.ShaderOutput.ObjectAndLayerIdColor?f.glsl`finalColor.a = 1.0;`:""}

    if (finalColor.a < symbolAlphaCutoff) {
      discard;
    }

    ${e.output===i.ShaderOutput.Alpha?f.glsl`gl_FragColor = vec4(finalColor.a);`:""}
    ${e.output===i.ShaderOutput.Color?f.glsl`gl_FragColor = highlightSlice(finalColor, vpos);`:""}
    ${e.output===i.ShaderOutput.Color&&e.transparencyPassType===y.TransparencyPassType.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    ${e.output===i.ShaderOutput.Highlight?f.glsl`gl_FragColor = vec4(1.0);`:""}
    ${e.output===i.ShaderOutput.Depth?f.glsl`outputDepth(linearDepth);`:""}
  }
  `),P}const z=Object.freeze(Object.defineProperty({__proto__:null,build:P},Symbol.toStringTag,{value:"Module"}));e.LineMarker=z,e.build=P}));
