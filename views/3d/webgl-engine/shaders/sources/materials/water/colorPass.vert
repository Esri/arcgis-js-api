#include <util/vsPrecision.glsl>
#include <util/transform.glsl>
#include <materials/water/normalsUtils.glsl>

uniform mat4 proj;
uniform mat4 view;
uniform mat4 model;
uniform vec3 localOrigin;

attribute vec3 position;
attribute vec2 uv0;

#include <materials/defaultMaterial/commonFunctions.glsl>

varying vec2 vuv;
varying vec3 vpos;
varying vec3 vnormal; // the normal from origin to the vertex
varying mat3 vtbnMatrix; // tangent / bitangent / normal matrix at the vertex

#ifdef RECEIVE_SHADOWS
varying float linearDepth;
#endif

void main(void) {
  vuv = uv0;
  vpos = calculateVPos();

  vnormal = getLocalUp(vpos, localOrigin);
  vtbnMatrix = getTBNMatrix(vnormal);

  gl_Position = transformPosition(proj, view, vpos);

  #ifdef RECEIVE_SHADOWS
    // Shadowmap's cascading index used to be based on '1.0 / gl_FragCoord.w'
    // (i.e. the perspective interpolation of 'gl_Position.w'). Precision
    // issues on iPad/iPhone with the 'w' component require the depth to be
    // passed as varying to properly drive the cascading shadow map index.
    linearDepth = gl_Position.w;
  #endif
}
