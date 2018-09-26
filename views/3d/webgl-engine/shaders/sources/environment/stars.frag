#include <util/fsPrecision.glsl>

varying vec4 vcolor;
varying float vsize;

void main() {
  float cap = 0.7;
  float scale = 1.0/cap;
  float helper = clamp(length(abs(gl_PointCoord-vec2(0.5))),0.0,cap);
  float alpha = clamp((cap-helper)*scale,0.0,1.0);
  float intensity = alpha*alpha*alpha;
  if (vsize < 3.0)
    intensity *= 0.5;
  gl_FragColor = vec4(1.0,1.0,1.0,intensity);
  gl_FragColor.xyz *= vcolor.xyz;
}
