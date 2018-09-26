#include <util/encoding.glsl>

// "matrix" parameter used to have const qualifier as well, but IE11 couldn't deal with it at time of writing.
// once IE11 is fine with it, const should probably be re-introduced
float evalShadow(const in vec3 vpos, const in float depth, const in sampler2D depthTex, const int num, const in vec4 distance, in mat4 matrix[4], const in float halfPxSz) {
  //choose correct cascade
  int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;

  if (i >= num) { return .0; }

  mat4 mat = i == 0 ? matrix[0] : i == 1 ? matrix[1] : i == 2 ? matrix[2] : matrix[3];

  vec4 lv = mat * vec4(vpos, 1.0);
  lv.xy /= lv.w;

  //vertex completely outside? -> no shadow
  vec3 lvpos = .5 * lv.xyz + vec3(.5);
  if (lvpos.z >= 1.0) { return .0; }
  if (lvpos.x < .0 || lvpos.x > 1.0 || lvpos.y < .0 || lvpos.y > 1.0) { return .0; }

  //calc coord in cascade texture
  vec2 uv = vec2(float(i - 2 * (i / 2)) *.5, float(i / 2) * .5) + .5 * lvpos.xy;

  float texSize = .5 / halfPxSz;

  //filter, offset by half pixels
  vec2 st = fract((vec2(halfPxSz) + uv) * texSize);

  float s00 = rgba2float(texture2D(depthTex, uv + vec2(-halfPxSz, -halfPxSz))) < lvpos.z ? 1.0 : .0;
  float s10 = rgba2float(texture2D(depthTex, uv + vec2(halfPxSz, -halfPxSz))) < lvpos.z ? 1.0 : .0;
  float s11 = rgba2float(texture2D(depthTex, uv + vec2(halfPxSz, halfPxSz))) < lvpos.z ? 1.0 : .0;
  float s01 = rgba2float(texture2D(depthTex, uv + vec2(-halfPxSz, halfPxSz))) < lvpos.z ? 1.0 : .0;

  return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
