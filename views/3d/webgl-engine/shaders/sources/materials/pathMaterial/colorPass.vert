#include <util/vsPrecision.glsl>
#include <util/transform.glsl>

#include <materials/pathMaterial/commonInputs.glsl>

varying vec3 vpos;
varying vec3 vnormal;

#ifdef RECEIVE_SHADOWS
varying float linearDepth;
#endif

// Workaround for https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/13452
// We pass the externalColor uniform from VS to FS through the vcolorExt varying because
// there is a driver bug for Intel Integrated Graphics which led to rendering artifacts
// since the introduction of https://devtopia.esri.com/WebGIS/arcgis-js-api/pull/12673
// This should be further cleaned up later with through the following issue:
// https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/12763
uniform vec4 externalColor;
// the vertex color variable will contain vvColor and/or vvOpacity or 1,1,1,1
varying vec4 vcolor;
varying vec4 vcolorExt;

#include <materials/pathMaterial/commonFunctions.glsl>

void main() {
  vpos = calculateVPos();

  vnormal = normalize((modelNormal * localNormal()).xyz);

  gl_Position = transformPosition(proj, view, vpos);

#ifdef RECEIVE_SHADOWS
  // Shadowmap's cascading index used to be based on '1.0 / gl_FragCoord.w'
  // (i.e. the perspective interpolation of 'gl_Position.w'). Precision
  // issues on iPad/iPhone with the 'w' component require the depth to be
  // passed as varying to properly drive the cascading shadow map index.
  linearDepth = gl_Position.w;
#endif

  vcolorExt = externalColor;
  vcolor = getColor();
}
