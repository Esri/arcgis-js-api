/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{MARKER_TEXTURE_SIZE as e,MARKER_THICKNESS as r}from"../views/3d/layers/support/markerUtils.js";import{ShaderOutput as o}from"../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions.js";import{SliceDraw as i}from"../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js";import{RibbonVertexPosition as t}from"../views/3d/webgl-engine/core/shaderLibrary/attributes/RibbonVertexPosition.glsl.js";import{OutputDepth as a}from"../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl.js";import{multipassTerrainTest as s}from"../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl.js";import{symbolAlphaCutoff as n}from"../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff.js";import{ColorConversion as l}from"../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl.js";import{RgbaFloatEncoding as c}from"../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl.js";import{addProjViewLocalOrigin as p}from"../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js";import{Float2PassUniform as d}from"../views/3d/webgl-engine/core/shaderModules/Float2PassUniform.js";import{Float4PassUniform as v}from"../views/3d/webgl-engine/core/shaderModules/Float4PassUniform.js";import{FloatPassUniform as g}from"../views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js";import{glsl as f}from"../views/3d/webgl-engine/core/shaderModules/interfaces.js";import{Matrix4PassUniform as m}from"../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform.js";import{ShaderBuilder as h}from"../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js";import{Texture2DPassUniform as u}from"../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js";import{TransparencyPassType as w}from"../views/3d/webgl-engine/lib/basicInterfaces.js";import{VertexAttribute as y}from"../views/3d/webgl-engine/lib/VertexAttribute.js";function b(b){const x=new h,P=b.hasMultipassTerrain&&(b.output===o.Color||b.output===o.Alpha);x.include(t,b),b.output===o.Depth&&x.include(a,b);const{vertex:S,fragment:j}=x;return j.include(c),p(x,b),x.attributes.add(y.POSITION,"vec3"),x.attributes.add(y.UV0,"vec2"),x.attributes.add(y.AUXPOS1,"vec3"),x.varyings.add("vColor","vec4"),x.varyings.add("vpos","vec3"),x.varyings.add("vUV","vec2"),x.varyings.add("vSize","float"),x.varyings.add("linearDepth","float"),P&&x.varyings.add("depth","float"),S.code.add(f`#define PERPENDICULAR(v) vec2(v.y, -v.x)
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}`),S.uniforms.add([new d("nearFar",((e,r)=>r.camera.nearFar)),new v("viewport",((e,r)=>r.camera.fullViewport))]),S.code.add(f`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),S.code.add(f`void clip(vec4 pos, inout vec4 prev) {
float vnp = nearFar[0] * 0.99;
if (prev.z > -nearFar[0]) {
prev = mix(pos, prev, interp(vnp, pos, prev));
}
}`),b.draped||(S.uniforms.add(new m("inverseProjectionMatrix",((e,r)=>r.camera.inverseProjectionMatrix))),S.code.add(f`vec3 inverseProject(vec4 posScreen) {
posScreen.xy = (posScreen.xy / viewport.zw) * posScreen.w;
return (inverseProjectionMatrix * posScreen).xyz;
}`),S.code.add(f`bool rayIntersectPlane(vec3 rayDir, vec3 planeOrigin, vec3 planeNormal, out vec3 intersection) {
float cos = dot(rayDir, planeNormal);
float t = dot(planeOrigin, planeNormal) / cos;
intersection = t * rayDir;
return abs(cos) > 0.001 && t > 0.0;
}`),S.uniforms.add(new g("perScreenPixelRatio",((e,r)=>r.camera.perScreenPixelRatio))),S.code.add(f`
      vec4 toFront(vec4 displacedPosScreen, vec3 posLeft, vec3 posRight, vec3 prev, float lineWidth) {
        // Project displaced position back to camera space
        vec3 displacedPos = inverseProject(displacedPosScreen);

        // Calculate the plane that we want the marker to lie in. Note that this will always be an approximation since ribbon lines are generally
        // not planar and we do not know the actual position of the displaced prev vertices (they are offset in screen space, too).
        vec3 planeNormal = normalize(cross(posLeft - posRight, posLeft - prev));
        vec3 planeOrigin = posLeft;

        ${b.hasCap?"\n                if(prev.z > posLeft.z) {\n                  vec2 diff = posLeft.xy - posRight.xy;\n                  planeOrigin.xy += PERPENDICULAR(diff) / 2.0;\n                }\n              ":""};

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
  `)),S.uniforms.add(new g("pixelRatio",((e,r)=>r.camera.pixelRatio))),S.code.add(f`
    void main(void) {
      float coverage = 1.0;

      // Check for special value of uv0.y which is used by the Renderer when graphics
      // are removed before the VBO is recompacted. If this is the case, then we just
      // project outside of clip space.
      if (uv0.y == 0.0) {
        // Project out of clip space
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
      }
      else {
        float lineSize = getSize();
        float lineWidth = max(lineSize, 1.0) * pixelRatio;

        vec4 pos  = view * vec4(position.xyz, 1.0);
        vec4 prev = view * vec4(auxpos1.xyz, 1.0);
        clip(pos, prev);

        vec4 posScreen = projectAndScale(pos);
        vec4 prevScreen = projectAndScale(prev);

        vec2 segment = posScreen.xy - prevScreen.xy;

        // normalize vector along line segment
        float segmentLen = length(segment);
        segment = (segmentLen > 0.001) ? segment / segmentLen : vec2(0.0, 0.0);

        // displace according to position in the texture
        vec2 displacementDirU = PERPENDICULAR(segment);
        vec2 displacementDirV = segment;

        float displacementLen = ${f.float(e/r)} * lineWidth;

        vec4 displacedPosScreen = posScreen;
        displacedPosScreen.xy += uv0.x * displacementDirU * displacementLen + uv0.y * displacementDirV * displacementLen;
  `),b.draped||S.code.add(f`vec3 posRight = inverseProject(posScreen + vec4(displacementDirU.xy, 0.0, 0.0) * lineWidth);
vec3 posLeft = pos.xyz + (pos.xyz - posRight);
pos = toFront(displacedPosScreen, posLeft, posRight, prev.xyz, lineWidth);
displacedPosScreen = projectAndScale(pos);`),S.code.add(f`
        ${P?"depth = pos.z;":""}
        linearDepth = (-pos.z - nearFar[0]) / (nearFar[1] - nearFar[0]);

        // Convert back into NDC
        displacedPosScreen.xy = (displacedPosScreen.xy / viewport.zw) * displacedPosScreen.w;

        // Convert texture coordinate into [0,1] and cancel out perspective correct interpolation
        vUV = (uv0 + 1.0) / 2.0;
        vUV *= displacedPosScreen.w;

        vSize = displacementLen;

        vColor = getColor();
        vColor.a *= coverage;

        // Use camera space for slicing
        vpos = pos.xyz;

        gl_Position = displacedPosScreen;
      }
    }
  `),P&&x.include(s,b),x.include(i,b),j.uniforms.add([new v("intrinsicColor",(e=>e.color)),new u("tex",(e=>e.texture))]),j.include(l),j.code.add(f`
  void main() {
    discardBySlice(vpos);
    ${P?"terrainDepthTest(gl_FragCoord, depth);":""}

    vec4 finalColor = intrinsicColor * vColor;

    // Offset texture coordinate s.t. we sample texel centers
    float texelSize = ${f.float(1/e)};
    vec2 samplePos = vUV * gl_FragCoord.w + vec2(0.5, -0.5) * texelSize;

    // Evaluate sdf
    float sdf = rgba2float(texture2D(tex, samplePos)) - 0.5;
    float distance = sdf * vSize;

    // Grow by a halfpixel to make sure the line is fully covered by the cross marker
    // (otherwise there will be a halo if they are different colours)
    distance -= 0.5;

    finalColor.a *= clamp(0.5 - distance, 0.0, 1.0);

    if (finalColor.a < ${f.float(n)}) {
      discard;
    }

    ${b.output===o.Alpha?f`gl_FragColor = vec4(finalColor.a);`:""}
    ${b.output===o.Color?f`gl_FragColor = highlightSlice(finalColor, vpos);`:""}
    ${b.output===o.Color&&b.transparencyPassType===w.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    ${b.output===o.Highlight?f`gl_FragColor = vec4(1.0);`:""}
    ${b.output===o.Depth?f`outputDepth(linearDepth);`:""}
  }
  `),x}const x=Object.freeze(Object.defineProperty({__proto__:null,build:b},Symbol.toStringTag,{value:"Module"}));export{x as L,b};
