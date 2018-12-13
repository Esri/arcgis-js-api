#include <util/vsPrecision.glsl>

#include <materials/defaultMaterial/commonInputs.glsl>

uniform mat4 viewNormal;
attribute vec3 position;
#ifdef COMPRESSED_NORMALS
attribute vec2 normalCompressed;
#else
attribute vec3 normal;
#endif

#ifdef TEXTURING
attribute vec2 uv0;
varying vec2 vtc;
#ifdef TEXTURE_ATLAS
attribute vec4 region;
varying vec4 regionV;
#endif
#endif

varying vec3 vnormal;
varying vec3 vpos;

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
  vnormal = normalize((viewNormal * vec4(modelNormal * localNormal().xyz, 1.0)).xyz);

  vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
#ifdef IOS_SAFARI_FIX
  originDelta = originDelta - fract(originDelta * 1000000.0) * (1.0 / 1000000.0);
#endif
  vpos -= originDelta;

#ifdef VERTICAL_OFFSET
  vec3 centerPos = model * localCenter().xyz + originDelta;
  vpos += calculateVerticalOffset(centerPos, localOrigin);
#endif
#else /* INSTANCED_DOUBLE_PRECISION */
  vnormal = normalize((viewNormal * modelNormal * localNormal()).xyz);

#ifdef VERTICAL_OFFSET
  vec3 centerPos = (model * localCenter()).xyz;
  vpos += calculateVerticalOffset(centerPos, localOrigin);
#endif
#endif /* INSTANCED_DOUBLE_PRECISION */

  gl_Position = proj * view * vec4(vpos, 1.0);

#ifdef TEXTURING
#ifndef FLIPV
  vtc = uv0;
#else
  vtc = vec2(uv0.x, 1.0-uv0.y);
#endif
#ifdef TEXTURE_ATLAS
  regionV = region;
#endif
#endif /* TEXTURING */

}
