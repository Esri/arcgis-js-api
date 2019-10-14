/**
 * Apply emulated polygon offset to backfaces, to reduce z fighting on transparent extruded polygons.
 *
 * See https://devtopia.esri.com/webgis/arcgis-js-api/issues/13432. Can be removed once correct transparency sorting is implemented.
 */
vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
  vec3 camToVert = posWorld - camPosWorld;

  bool isBackface = dot(camToVert, normalWorld) > 0.0;
  if (isBackface) {
    // - the offset is chosen by trial and error to avoid z fighting without causing
    //   significant artifacts when the face is pushed into the surface of the globe.
    // - the offset pushes this face away from the camera, because pushing it towards the
    //   camera can cause it to partially move in front of another face on the same geometry.
    //   that looks worse than the 'incorrect' sorting that the offset currently causes
    //   when the face is pushed behind a coplanar face from an adjacent geometry.

    posClip.z += 0.0000003 * posClip.w;
  }

  return posClip;
}