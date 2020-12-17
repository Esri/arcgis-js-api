/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../shaderModules/interfaces","./output/ReadLinearDepth.glsl","./util/CameraSpace.glsl"],(function(e,o,r,a){"use strict";e.Laserline=function(e,l){e.extensions.add("GL_OES_standard_derivatives"),e.include(r.ReadLinearDepth),e.include(a.CameraSpace),e.fragment.uniforms.add("glowColor","vec3"),e.fragment.uniforms.add("glowWidth","float"),e.fragment.uniforms.add("glowFalloff","float"),e.fragment.uniforms.add("innerColor","vec3"),e.fragment.uniforms.add("innerWidth","float"),e.fragment.uniforms.add("depthMap","sampler2D"),e.fragment.uniforms.add("nearFar","vec2"),e.fragment.uniforms.add("frameColor","sampler2D"),l.contrastControlEnabled&&e.fragment.uniforms.add("globalAlphaContrastBoost","float"),e.fragment.code.add(o.glsl`
  vec4 blendPremultiplied(vec4 source, vec4 dest) {
    float oneMinusSourceAlpha = 1.0 - source.a;

    return vec4(
      source.rgb + dest.rgb * oneMinusSourceAlpha,
      source.a + dest.a * oneMinusSourceAlpha
    );
  }
  `),e.fragment.code.add(o.glsl`
  vec4 premultipliedColor(vec3 rgb, float alpha) {
    return vec4(rgb * alpha, alpha);
  }
  `),e.fragment.code.add(o.glsl`
  vec4 laserlineProfile(float dist) {
    if (dist > glowWidth) {
      return vec4(0.0);
    }

    float innerAlpha = (1.0 - smoothstep(0.0, innerWidth, dist));
    float glowAlpha = pow(max(0.0, 1.0 - dist / glowWidth), glowFalloff);

    return blendPremultiplied(
      premultipliedColor(innerColor, innerAlpha),
      premultipliedColor(glowColor, glowAlpha)
    );
  }
  `),e.fragment.code.add(o.glsl`
  bool laserlineReconstructFromDepth(out vec3 pos, out vec3 normal, out float depthDiscontinuityAlpha) {
    float depth = linearDepthFromTexture(depthMap, uv, nearFar);

    if (-depth == nearFar[0]) {
      return false;
    }

    pos = reconstructPosition(gl_FragCoord.xy, depth);
    normal = normalize(cross(dFdx(pos), dFdy(pos)));

    float ddepth = fwidth(depth);
    depthDiscontinuityAlpha = 1.0 - smoothstep(0.0, 0.01, -ddepth / depth);

    return true;
  }
  `),l.contrastControlEnabled?e.fragment.code.add(o.glsl`
    float rgbToLuminance(vec3 color) {
      return dot(vec3(0.2126, 0.7152, 0.0722), color);
    }

    vec4 laserlineOutput(vec4 color) {
      float backgroundLuminance = rgbToLuminance(texture2D(frameColor, uv).rgb);
      float alpha = clamp(globalAlpha * max(backgroundLuminance * globalAlphaContrastBoost, 1.0), 0.0, 1.0);

      return color * alpha;
    }
    `):e.fragment.code.add(o.glsl`
    vec4 laserlineOutput(vec4 color) {
      return color * globalAlpha;
    }
    `)},Object.defineProperty(e,"__esModule",{value:!0})}));
