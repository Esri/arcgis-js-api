/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../core/mathUtils","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass","../views/3d/webgl-engine/core/shaderLibrary/Laserline.glsl"],(function(e,t,i,n,a,l){"use strict";const s=t.deg2rad(6);function o(e){const t=new n.ShaderBuilder;return t.extensions.add("GL_OES_standard_derivatives"),t.include(a.ScreenSpacePass),t.include(l.Laserline,e),t.fragment.uniforms.add("angleCutoff","vec2"),t.fragment.uniforms.add("globalAlpha","float"),e.heightManifoldEnabled&&t.fragment.uniforms.add("heightPlane","vec4"),e.pointDistanceEnabled&&t.fragment.uniforms.add("pointDistanceSphere","vec4"),e.lineVerticalPlaneEnabled&&t.fragment.uniforms.add("lineVerticalPlane","vec4").add("lineVerticalStart","vec3").add("lineVerticalEnd","vec3"),(e.heightManifoldEnabled||e.pointDistanceEnabled||e.lineVerticalPlaneEnabled)&&t.fragment.uniforms.add("maxPixelDistance","float"),e.intersectsLineEnabled&&t.fragment.uniforms.add("intersectsLineStart","vec3").add("intersectsLineEnd","vec3").add("intersectsLineDirection","vec3").add("intersectsLineRadius","float").add("perScreenPixelRatio","float"),(e.lineVerticalPlaneEnabled||e.heightManifoldEnabled)&&t.fragment.code.add(i.glsl`
      float planeDistancePixels(vec4 plane, vec3 pos) {
        float dist = dot(plane.xyz, pos) + plane.w;
        float width = fwidth(dist);
        dist /= min(width, maxPixelDistance);
        return abs(dist);
      }`),e.pointDistanceEnabled&&t.fragment.code.add(i.glsl`
    float sphereDistancePixels(vec4 sphere, vec3 pos) {
      float dist = distance(sphere.xyz, pos) - sphere.w;
      float width = fwidth(dist);
      dist /= min(width, maxPixelDistance);
      return abs(dist);
    }
    `),e.intersectsLineEnabled&&t.fragment.code.add(i.glsl`
    float lineDistancePixels(vec3 start, vec3 dir, float radius, vec3 pos) {
      float dist = length(cross(dir, pos - start)) / (length(pos) * perScreenPixelRatio);
      return abs(dist) - radius;
    }
    `),(e.lineVerticalPlaneEnabled||e.intersectsLineEnabled)&&t.fragment.code.add(i.glsl`
    bool pointIsWithinLine(vec3 pos, vec3 start, vec3 end) {
      vec3 dir = end - start;
      float t2 = dot(dir, pos - start);
      float l2 = dot(dir, dir);
      return t2 >= 0.0 && t2 <= l2;
    }
    `),t.fragment.code.add(i.glsl`
  void main() {
    vec3 pos;
    vec3 normal;
    float depthDiscontinuityAlpha;

    if (!laserlineReconstructFromDepth(pos, normal, depthDiscontinuityAlpha)) {
      discard;
    }

    vec4 color = vec4(0, 0, 0, 0);
  `),e.heightManifoldEnabled&&t.fragment.code.add(i.glsl`
    {
      float heightManifoldAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, heightPlane.xyz)));
      vec4 heightManifoldColor = laserlineProfile(planeDistancePixels(heightPlane, pos));
      color = max(color, heightManifoldColor * heightManifoldAlpha);
    }
    `),e.pointDistanceEnabled&&t.fragment.code.add(i.glsl`
    {
      // distance to sphere
      float pointDistanceSphereDistance = sphereDistancePixels(pointDistanceSphere, pos);
      vec4 pointDistanceSphereColor = laserlineProfile(pointDistanceSphereDistance);
      float pointDistanceSphereAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, normalize(pos - pointDistanceSphere.xyz))));

      color = max(color, pointDistanceSphereColor * pointDistanceSphereAlpha);
    }
    `),e.lineVerticalPlaneEnabled&&t.fragment.code.add(i.glsl`
    {
      if (pointIsWithinLine(pos, lineVerticalStart, lineVerticalEnd)) {
        float lineVerticalDistance = planeDistancePixels(lineVerticalPlane, pos);

        vec4 lineVerticalColor = laserlineProfile(lineVerticalDistance);
        float lineVerticalAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, lineVerticalPlane.xyz)));

        color = max(color, lineVerticalColor * lineVerticalAlpha);
      }
    }
    `),e.intersectsLineEnabled&&t.fragment.code.add(i.glsl`
    {
      if (pointIsWithinLine(pos, intersectsLineStart, intersectsLineEnd)) {
        float intersectsLineDistance = lineDistancePixels(intersectsLineStart, intersectsLineDirection, intersectsLineRadius, pos);
        vec4 intersectsLineColor = laserlineProfile(intersectsLineDistance);
        float intersectsLineAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, 1.0 - abs(dot(normal, intersectsLineDirection)));

        color = max(color, intersectsLineColor * intersectsLineAlpha);
      }
    }
    `),t.fragment.code.add(i.glsl`
    gl_FragColor = laserlineOutput(color * depthDiscontinuityAlpha);
  }
  `),t}var r=Object.freeze({__proto__:null,defaultAngleCutoff:s,build:o});e.LaserlinesShader=r,e.build=o,e.defaultAngleCutoff=s}));
