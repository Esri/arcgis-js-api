#include <util/vsPrecision.glsl>
#include <util/alignPixel.glsl>

uniform mat4 proj;
uniform mat4 view;
uniform mat4 model;
uniform vec4 viewport;
uniform float pixelRatio;

attribute vec3 position;
attribute vec4 color;
attribute float size;

varying vec4 vcolor;
varying float vsize;

void main(void) {
  vec4 posProj = proj * view * model*vec4(position*1.0e25,1.0);//move infinitely far away
  gl_Position = alignToPixelCenter(posProj, viewport.zw); //pixel align position
  gl_Position.z = gl_Position.w; // project atmosphere onto the far plane
  vcolor = color / 1.2;
  vsize = size * 5.0 * pixelRatio;
  gl_PointSize = vsize;
}
