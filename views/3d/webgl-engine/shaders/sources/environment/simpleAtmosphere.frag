#include <util/fsPrecision.glsl>

uniform sampler2D tex;

varying vec2 vtc;
varying float falloff;

#ifndef PANORAMIC
uniform float altitudeFade;
varying float innerFactor;
#endif

void main() {
  vec4 texColor = texture2D(tex, vtc);

#ifdef PANORAMIC
  gl_FragColor = texColor * falloff;
#else
  vec4 atmosphereColor = texColor * falloff;
  vec4 innerColor = vec4(texColor.rgb * falloff, 1.0 - altitudeFade);
  gl_FragColor = mix(atmosphereColor, innerColor, smoothstep(0.0, 1.0, innerFactor));
#endif
}
