vec4 getOverlayColor(sampler2D overlay0Tex, sampler2D overlay1Tex, vec4 texCoords, float opacity) {
  vec4 color = vec4(0.0);

  // read textures outside of conditions, to avoid artifacts likely related to non-uniform flow control:
  // - https://www.khronos.org/opengl/wiki/Sampler_(GLSL)#Non-uniform_flow_control
  // - https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/13657
  vec4 colorInner = texture2D(overlay0Tex, texCoords.xy);
  vec4 colorOuter = texture2D(overlay1Tex, texCoords.zw);

  if ((texCoords.x > 0.0) && (texCoords.x < 1.0) && (texCoords.y > 0.0) && (texCoords.y < 1.0)) {
    // inner overlay texture coordinates are within bounds -> sample from inner overlay
    color = colorInner;
  } else if ((texCoords.z > 0.0) && (texCoords.z < 1.0) && (texCoords.w > 0.0) && (texCoords.w < 1.0)) {
    // sample from outer overlay
    color = colorOuter;
  }

  return color * opacity;
}
