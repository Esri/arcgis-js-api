#include <util/vsPrecision.glsl>
#include <materials/water/normalsUtils.glsl>

uniform mat4 proj;
uniform mat4 view;
uniform mat4 model;
uniform vec3 localOrigin;

attribute vec3 position;
attribute vec2 uv0;

#include <materials/defaultMaterial/commonFunctions.glsl>

varying vec2 uvOut;
varying vec3 posOut;
varying vec3 normalOut; // the normal from origin to the vertex
varying mat3 tbnMatrix; // tangent / bitangent / normal matrix

#ifdef RECEIVE_SHADOWS
varying float linearDepth;
#endif

void main(void) {
  uvOut = uv0;
  posOut = calculateVPos();

  normalOut = getLocalUp(posOut, localOrigin);
  tbnMatrix = getTBNMatrix(normalOut);

  gl_Position = proj * view * vec4(posOut.xyz, 1.0);

  #ifdef RECEIVE_SHADOWS
    // Shadowmap's cascading index used to be based on '1.0 / gl_FragCoord.w'
    // (i.e. the perspective interpolation of 'gl_Position.w'). Precision
    // issues on iPad/iPhone with the 'w' component require the depth to be
    // passed as varying to properly drive the cascading shadow map index.
    linearDepth = gl_Position.w;
  #endif
}
