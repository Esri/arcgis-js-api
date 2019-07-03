#include <util/vsPrecision.glsl>

#include <materials/defaultMaterial/commonInputs.glsl>

#define VERTEX_SHADER
#include <materials/defaultMaterial/vertexTangents.glsl>

#ifdef INSTANCEDCOLOR
attribute vec4 instanceColor;
#endif
attribute vec3 position;

#if (NORMALS == NORMALS_COMPRESSED)
  attribute vec2 normalCompressed;
  varying vec3 vnormal;
#elif (NORMALS == NORMALS_DEFAULT)
  attribute vec3 normal;
  varying vec3 vnormal;
#endif

varying vec3 vpos;
varying vec3 localvpos;

#ifdef TEXTURE_COORDINATES
    attribute vec2 uv0;
    varying vec2 vtc;
  #ifdef TEXTURE_ATLAS
    attribute vec4 region;
    varying vec4 regionV;
  #endif
#endif

#ifdef COMPONENTCOLORS
#include <materials/defaultMaterial/componentColors.glsl>
#endif

#ifdef RECEIVE_SHADOWS
varying float linearDepth;
#endif

#ifdef VERTEXCOLORS
attribute vec4 color;
#endif

#ifdef SYMBOLVERTEXCOLORS
attribute vec4 symbolColor;
#endif

#if defined(VERTEXCOLORS)
varying vec4 vcolor;
#endif

// Workaround for https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/13452
// We pass the externalColor uniform from VS to FS through the vcolorExt varying because
// there is a driver bug for Intel Integrated Graphics which led to rendering artifacts
// since the introduction of https://devtopia.esri.com/WebGIS/arcgis-js-api/pull/12673
// This should be further cleaned up later with through the following issue:
// https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/12763
uniform vec4 externalColor;
varying vec4 vcolorExt;

#if defined(SYMBOLVERTEXCOLORS) || defined(COMPONENTCOLORS)
varying mediump float colorMixMode; // varying int is not supported in WebGL
#endif

#include <util/visualVariables.glsl>

#if defined(VV_SIZE) || defined(VV_COLOR)
attribute vec4 instanceFeatureAttribute;
#endif

#include <materials/defaultMaterial/colorMixMode.glsl>
#include <materials/defaultMaterial/commonFunctions.glsl>
#include <materials/defaultMaterial/constants.glsl>
#include <materials/defaultMaterial/localCenter.glsl>
#include <materials/defaultMaterial/localNormal.glsl>

void main() {

#ifdef VERTEXCOLORS
  vcolor = color * 0.003921568627451; // = 1/255
#endif

  vcolorExt = externalColor;

#ifdef INSTANCEDCOLOR
  vcolorExt *= instanceColor;
#endif

#ifdef VV_COLOR
  vcolorExt *= vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
#endif

#ifdef SYMBOLVERTEXCOLORS
  int symbolColorMixMode;
  vcolorExt *= decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451; // = 1/255;
  colorMixMode = float(symbolColorMixMode) + 0.5; // add 0.5 to avoid interpolation artifacts
#endif

#ifdef COMPONENTCOLORS
  int symbolColorMixMode;
  vcolorExt *= decodeSymbolColor(readComponentColor() * 255.0, symbolColorMixMode) * 0.003921568627451; // = 1/255;
  colorMixMode = float(symbolColorMixMode) + 0.5; // add 0.5 to avoid interpolation artifacts
#endif

  if (vcolorExt.a < SYMBOL_ALPHA_CUTOFF) {
    // Discard this vertex
    gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
  }
  else {
    vpos = calculateVPos();
    localvpos = vpos - view[3].xyz;

#ifdef INSTANCED_DOUBLE_PRECISION
  #if (NORMALS == NORMALS_COMPRESSED) || (NORMALS == NORMALS_DEFAULT)
    vnormal = normalize(modelNormal * localNormal().xyz);
  #endif

  vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
  #ifdef IOS_SAFARI_FIX
    originDelta = originDelta - fract(originDelta * 1000000.0) * (1.0 / 1000000.0);
  #endif
  vpos -= originDelta;
#else /* INSTANCED_DOUBLE_PRECISION */
  #if (NORMALS == NORMALS_COMPRESSED) || (NORMALS == NORMALS_DEFAULT)
    vnormal = normalize((modelNormal * localNormal()).xyz);
  #endif
#endif /* INSTANCED_DOUBLE_PRECISION */

    #ifdef VERTICAL_OFFSET
      vpos += calculateVerticalOffset(vpos, localOrigin);
    #endif

    #if defined(VERTEX_TANGENTS)
      transformVertexTangent(mat3(modelNormal));
    #endif

    gl_Position = proj * view * vec4(vpos, 1.0);
  }

#ifdef RECEIVE_SHADOWS
  // Shadowmap's cascading index used to be based on '1.0 / gl_FragCoord.w'
  // (i.e. the perspective interpolation of 'gl_Position.w'). Precision
  // issues on iPad/iPhone with the 'w' component require the depth to be
  // passed as varying to properly drive the cascading shadow map index.
  linearDepth = gl_Position.w;
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
