#include <util/vsPrecision.glsl>
#include <util/transform.glsl>

#include <materials/defaultMaterial/commonInputs.glsl>

uniform mat4 viewNormal;
attribute vec3 position;

#if (NORMALS == NORMALS_COMPRESSED)
  attribute vec2 normalCompressed;
  varying vec3 vnormal;
#elif (NORMALS == NORMALS_DEFAULT)
  attribute vec3 normal;
  varying vec3 vnormal;
#endif

#if defined(TEXTURE_COLOR)
attribute vec2 uv0;
varying vec2 vtc;
#ifdef TEXTURE_ATLAS
attribute vec4 region;
varying vec4 regionV;
#endif
#endif


varying vec3 vpos;
varying vec3 vPositionView;

#include <util/visualVariables.glsl>

#if defined(VV_CUSTOM_MODEL_MATRIX)
attribute vec4 instanceFeatureAttribute;
#endif

#include <materials/defaultMaterial/commonFunctions.glsl>
#include <materials/defaultMaterial/localCenter.glsl>
#include <materials/defaultMaterial/localNormal.glsl>

void main(void) {
  vpos = calculateVPos();

#ifdef INSTANCED_DOUBLE_PRECISION
  #if (NORMALS == NORMALS_COMPRESSED) || (NORMALS == NORMALS_DEFAULT)
    vnormal = normalize((viewNormal * vec4(modelNormal * localNormal().xyz, 1.0)).xyz);
  #endif

  vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
  vpos -= originDelta;
#else /* INSTANCED_DOUBLE_PRECISION */
  #if (NORMALS == NORMALS_COMPRESSED) || (NORMALS == NORMALS_DEFAULT)
    vnormal = normalize((viewNormal * modelNormal * localNormal()).xyz);
  #endif
#endif /* INSTANCED_DOUBLE_PRECISION */

  #ifdef VERTICAL_OFFSET
    vpos += calculateVerticalOffset(vpos, localOrigin);
  #endif

  gl_Position = transformPosition(proj, view, vpos);

#if defined(TEXTURE_COLOR)
#ifndef FLIPV
  vtc = uv0;
#else
  vtc = vec2(uv0.x, 1.0-uv0.y);
#endif
#ifdef TEXTURE_ATLAS
  regionV = region;
#endif
#endif /* TEXTURE_COLOR */

}
