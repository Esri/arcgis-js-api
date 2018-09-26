#include <util/fsPrecision.glsl>
#include <renderer/ssao/common.glsl>

#ifndef RADIUS
#define RADIUS 4
#endif

uniform sampler2D normalMap;
uniform sampler2D depthMap;
uniform sampler2D tex;

uniform vec2 blurSize;

uniform float g_BlurFalloff;
uniform float projScale;

uniform vec2    nearFar;
//set z scaling, used to prevent division in ortho mode
uniform vec2 zScale;

varying vec2 uv;

float BlurFunction(vec2 uv, float r, float center_d, inout float w_total, float sharpness) {
  float c = texture2D(tex, uv).r;
  float d = getDepthLinear(depthMap, nearFar, uv);

  float ddiff = d - center_d;

  float w = exp(-r*r*g_BlurFalloff - ddiff*ddiff*sharpness);

  w_total += w;

  return w*c;
}

void main(void) {
  float b = 0.0;
  float w_total = 0.0;

  float center_d =  getDepthLinear(depthMap, nearFar, uv);

  float sharpness = -0.05*projScale/(center_d*zScale.x+zScale.y);
  for (int r = -RADIUS; r <= RADIUS; ++r) {
    float rf = float(r);
    vec2 uvOffset = uv + rf*blurSize;
    b += BlurFunction(uvOffset, rf, center_d, w_total, sharpness);
  }

  gl_FragColor = vec4(b/w_total);
}
