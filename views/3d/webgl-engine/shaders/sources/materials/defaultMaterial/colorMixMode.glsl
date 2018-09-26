#include <util/color.glsl>

/*
 * The color mix modes are encoded in the symbol color as follows:
 *  - Fully transparent symbols are represented with alpha 0 for
 *    all color mix modes (except ignore).
 *  - color mix mode ignore is encoded as multiply with white
 *  - the other 3 color mix modes (tint, replace, multiply) are
 *    equally distributed on the remaining 255 alpha values, which
 *    gives us 85 possible alpha values
 *
 * alpha             0 : fully transparent
 * alpha in [  1 -  85]: tint
 * alpha in [ 86 - 170]: replace
 * alpha in [171 - 255]: multiply
 */
vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
  float symbolAlpha = 0.0;

  const float maxTint = 85.0;
  const float maxReplace = 170.0;
  const float scaleAlpha = 3.0;

  if (symbolColor.a == 0.0) {
    colorMixMode = 1; // fully transparent -> multiply
    symbolAlpha = 0.0;
  }
  else if (symbolColor.a <= maxTint) {
    colorMixMode = 0; // tint
    symbolAlpha = scaleAlpha * symbolColor.a;
  }
  else if (symbolColor.a <= maxReplace) {
    colorMixMode = 3; // replace
    symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
  }
  else {
    colorMixMode = 1;  // multiply
    symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
  }

  return vec4(symbolColor.rgb, symbolAlpha);
}

vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {

  // workaround for artifacts in OSX using Intel Iris Pro
  // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
  vec3 internalMixed = internalColor * textureColor;
  vec3 allMixed = internalMixed * externalColor;

  if (mode == 1 /* multiply */) {
    return allMixed;
  }
  else if (mode == 2 /* ignore */ ) {
    return internalMixed;
  }
  else if (mode == 3 /* replace */ ) {
    return externalColor;
  }
  else {
    // tint (or something invalid)
    vec3 hsvIn = rgb2hsv(internalMixed);
    vec3 hsvTint = rgb2hsv(externalColor);
    vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, hsvIn.z * hsvTint.z);
    return hsv2rgb(hsvOut);
  }
}

float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {

  // workaround for artifacts in OSX using Intel Iris Pro
  // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
  float internalMixed = internalOpacity * textureOpacity;
  float allMixed = internalMixed * externalOpacity;

  if (mode == 2 /* ignore */ ) {
    return internalMixed;
  }
  else if (mode == 3 /* replace */ ) {
    return externalOpacity;
  }
  else {
    // multiply or tint (or something invalid)
    return allMixed;
  }
}
