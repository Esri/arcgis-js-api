#include <util/vsPrecision.glsl>

#include <materials/defaultMaterial/commonInputs.glsl>

uniform vec2 nearFar;
attribute vec3 position;

varying float depth;
varying vec3 vpos;

#ifdef TEXTURING
attribute vec2 uv0;
varying vec2 vtc;
#ifdef TEXTURE_ATLAS
attribute vec4 region;
varying vec4 regionV;
#endif
#endif

#include <util/visualVariables.glsl>

#if defined(VV_CUSTOM_MODEL_MATRIX)
attribute vec4 instanceFeatureAttribute;
#endif

#include <materials/defaultMaterial/commonFunctions.glsl>
#include <materials/defaultMaterial/localCenter.glsl>

#if defined(COMPONENTCOLORS)
#include <materials/defaultMaterial/componentColors.glsl>
#endif


void main(void) {
  vpos = calculateVPos();



#if defined(COMPONENTCOLORS)
  if( !readComponentCastShadowsFlag() ){
    // discard vertex so that it doesnt show up in depth buffer
    gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
  }else
  {
#endif


#ifdef INSTANCED_DOUBLE_PRECISION
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
#ifdef VERTICAL_OFFSET
  vec3 centerPos = (model * localCenter()).xyz;
  vpos += calculateVerticalOffset(centerPos, localOrigin);
#endif
#endif /* INSTANCED_DOUBLE_PRECISION */

  vec4 eye = view * vec4(vpos, 1.0);

  gl_Position = proj * eye;
  depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;

#if defined(COMPONENTCOLORS)
  } // if readComponentCastShadowsFlag==true
#endif

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
