#include <util/vsPrecision.glsl>

#include <materials/pathMaterial/commonInputs.glsl>

uniform mat4 viewNormal;
attribute vec3 position;
attribute vec4 auxpos1; // direction offset
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

#include <materials/pathMaterial/visualVariables.glsl>

#if defined(VV_SIZE)
attribute vec4 auxpos2;
#endif

#include <materials/pathMaterial/commonFunctions.glsl>
#include <materials/pathMaterial/localNormal.glsl>

void main(void) {
  vpos = calculateVPos();

  vnormal = normalize((viewNormal * modelNormal * localNormal()).xyz);

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
