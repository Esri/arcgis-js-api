#include <util/fsPrecision.glsl>

varying vec3 vnormal;
varying vec3 vpos;

void main() {
  vec3 normal = normalize(vnormal);
  if (gl_FrontFacing == false) normal = -normal;

#ifndef ALPHA_ZERO
  gl_FragColor = vec4(vec3(.5) + .5 * normal, 1.0);
#else
  gl_FragColor = vec4(vec3(.5) + .5 * normal, 0.0);
#endif
}
