vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
  // From clip space to (0 : 1), bias towards right pixel edge
  vec2 xy = vec2(.500123) + .5 * clipCoord.xy / clipCoord.w;

  // Size of a pixel in range (0 : 1)
  vec2 pixelSz = vec2(1.0) / widthHeight;

  // Round to nearest pixel center
  vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;

  // Convert back to clip space
  vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;

  return vec4(result, clipCoord.zw);
}

vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
  // From clip space to (0 : 1),
  vec2 xy = vec2(.5) + .5 * clipCoord.xy / clipCoord.w;

  // Size of a pixel in range (0 : 1)
  vec2 pixelSz = vec2(1.0) / widthHeight;

  // Round to nearest pixel border, (0 : 1)
  vec2 ij = floor((xy + .5 * pixelSz) * widthHeight) * pixelSz;

  // Convert back to clip space
  vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;

  return vec4(result, clipCoord.zw);
}
