#include <util/vsPrecision.glsl>

#include <materials/defaultMaterial/commonInputs.glsl>

#ifdef INSTANCEDCOLOR
attribute vec4 instanceColor;
#endif
attribute vec3 position;
#ifdef COMPRESSED_NORMALS
attribute vec2 normalCompressed;
#else
attribute vec3 normal;
#endif
varying vec3 vpos;
varying vec3 vnormal;

#ifdef TEXTURING
attribute vec2 uv0;
varying vec2 vtc;
#ifdef TEXTURE_ATLAS
attribute vec4 region;
varying vec4 regionV;
#endif
#endif

#ifdef COMPONENTCOLORS
uniform sampler2D uComponentColorTex;
uniform vec2 uComponentColorTexInvDim;

attribute float componentIndex;

vec4 readComponentColor() {
  float normalizedIndex = (componentIndex + 0.5) * uComponentColorTexInvDim.x;
  vec2 indexCoord = vec2(
    mod(normalizedIndex, 1.0),
    (floor(normalizedIndex) + 0.5) * uComponentColorTexInvDim.y
  );
  return texture2D(uComponentColorTex, indexCoord);
}
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

#include <materials/defaultMaterial/commonFunctions.glsl>
#include <materials/defaultMaterial/localCenter.glsl>
#include <materials/defaultMaterial/localNormal.glsl>
#include <materials/defaultMaterial/colorMixMode.glsl>

void main() {
  vpos = calculateVPos();

#ifdef INSTANCED_DOUBLE_PRECISION
  vnormal = normalize(modelNormal * localNormal().xyz);

  vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
  vpos -= originDelta;

#ifdef VERTICAL_OFFSET
  vec3 centerPos = model * localCenter().xyz;
  vpos += calculateVerticalOffset(centerPos, localOrigin);
#endif
#else /* INSTANCED_DOUBLE_PRECISION */
  vnormal = normalize((modelNormal * localNormal()).xyz);

#ifdef VERTICAL_OFFSET
  vec3 centerPos = (model * localCenter()).xyz;
  vpos += calculateVerticalOffset(centerPos, localOrigin);
#endif
#endif /* INSTANCED_DOUBLE_PRECISION */

  gl_Position = proj * view * vec4(vpos, 1.0);

#ifdef RECEIVE_SHADOWS
  // Shadowmap's cascading index used to be based on '1.0 / gl_FragCoord.w'
  // (i.e. the perspective interpolation of 'gl_Position.w'). Precision
  // issues on iPad/iPhone with the 'w' component require the depth to be
  // passed as varying to properly drive the cascading shadow map index.
  linearDepth = gl_Position.w;
#endif

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
