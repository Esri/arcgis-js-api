uniform vec2 uDepthBias;
uniform vec2 uViewportDimInv;

// Utility function to check for NaN values
bool isNaN(float val) {
  return ( val < 0.0 || 0.0 < val || val == 0.0 ) ? false : true;
  // important: some nVidias failed to cope with version below.
  // Probably wrong optimization.
  /*return ( val <= 0.0 || 0.0 <= val ) ? false : true;*/
}

// An offset in xy screen space, along the projected normal of the edge
// This reduces depth fighting when looking at a face from a flat angle
vec2 calculateProjectedBiasXY(vec4 projPos, vec3 worldNormal) {
  float offsetXY = uDepthBias.x;
  float offsetZ  = uDepthBias.y;

  // screen space pixel offset
  // we multiply by two to account for the fact that NDC go from -1 to 1
  // we multiply by projPos.w to compensate for the perspective divison that happens later
  // normalizing over xyz means that the xy influence is reduced the more the normal is pointing
  // towards the camera
  vec4 projNormal = uProj * uView * vec4(worldNormal, 0.0);

  return offsetXY * projPos.w * 2.0 * uViewportDimInv * normalize(projNormal.xyz).xy;
}

// A z-offset, using a depth based heuristic.
float calculateProjectedBiasZ(vec4 projPos) {
  float offsetZ = uDepthBias.y;
  return sqrt(projPos.z) * offsetZ;
}

vec4 adjustProjectedPosition(vec4 projPos, vec3 worldNormal, float lineWidth) {
  vec2 offsetXY = calculateProjectedBiasXY(projPos, worldNormal);

  // we currently have to do this check because some geometries come with 0 length edge normals.
  // see https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/12890
  if (!isNaN(offsetXY.x) && !isNaN(offsetXY.y)) {
    projPos.xy += offsetXY;
  }

  projPos.z += calculateProjectedBiasZ(projPos);

  return projPos;
}
