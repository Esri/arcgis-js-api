precision mediump float;

varying highp vec2 v_texcoord;

uniform sampler2D u_texture;
uniform highp vec2 u_coordScale;

#include <filtering/bicubic.glsl>

void main() {

#ifdef BICUBIC
  vec4 color = sampleBicubicBSpline(u_texture, v_texcoord, u_coordScale);
#else
  vec4 color = texture2D(u_texture, v_texcoord);
#endif

  gl_FragColor = vec4(color.rgb * color.a, color.a);
}
