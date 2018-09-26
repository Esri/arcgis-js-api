vec4 getOverlayColor(sampler2D overlay0Tex, sampler2D overlay1Tex, vec4 texCoords, float opacity) {
  vec4 color = vec4(0, 0, 0, 0);

  if ((texCoords.x > 0.0) && (texCoords.x < 1.0) && (texCoords.y > 0.0) && (texCoords.y < 1.0)) {
    // inner overlay texture coordinates are within bounds -> sample from inner overlay
    color = texture2D(overlay0Tex, texCoords.xy);
  } else if ((texCoords.z > 0.0) && (texCoords.z < 1.0) && (texCoords.w > 0.0) && (texCoords.w < 1.0)) {
    // sample from outer overlay
    color = texture2D(overlay1Tex, texCoords.zw);
  }

  return color * opacity;
}
