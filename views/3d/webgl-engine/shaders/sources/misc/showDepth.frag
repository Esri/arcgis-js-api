#include <util/fsPrecision.glsl>
#include <util/encoding.glsl>

uniform sampler2D depthTex;
varying vec2 vtc;

void main() {
// gl_FragColor = vec4(vec3(texture2D(depthTex, vtc).a), 1.0);
   gl_FragColor = vec4(rgba2float(texture2D(depthTex, vtc)));
// gl_FragColor = texture2D(depthTex, vtc);
}
