
vec4 computeWeights(float v) {
  float b = 1.0 / 6.0;
  float v2 = v * v; 
  float v3 = v2 * v; 
  
  float w0 = b * (-v3 + 3.0 * v2 - 3.0 * v + 1.0);
  float w1 = b * (3.0 * v3  - 6.0 * v2 + 4.0);
  float w2 = b * (-3.0 * v3 + 3.0 * v2 + 3.0 * v + 1.0);
  float w3 = b * v3;

  return vec4(w0, w1, w2, w3); 
}


vec4 bicubicOffsetsAndWeights(float v) {
  vec4 w = computeWeights(v);

  float g0 = w.x + w.y;
  float g1 = w.z + w.w;
  float h0 = 1.0 - (w.y / g0) + v;
  float h1 = 1.0 + (w.w / g1) - v;
  
  return vec4(h0, h1, g0, g1);
}

/** 
 * Adapted from https://developer.nvidia.com/gpugems/GPUGems2/gpugems2_chapter20.html
 * Assumes a samplingMode of LINEAR
 */
vec4 sampleBicubicBSpline(sampler2D sampler, vec2 coords, vec2 texSize) {
  vec2 eX = vec2(1.0 / texSize.x, 0.0);
  vec2 eY = vec2(0.0, 1.0 / texSize.y);
  vec2 texel = coords * texSize - 0.5;
  
  vec3 hgX = bicubicOffsetsAndWeights(fract(texel).x).xyz;
  vec3 hgY = bicubicOffsetsAndWeights(fract(texel).y).xyz;
  
  // Compute linear sampling coords
  vec2 coords10 = coords + hgX.x * eX;
  vec2 coords00 = coords - hgX.y * eX;

  vec2 coords11 = coords10 + hgY.x * eY;
  vec2 coords01 = coords00 + hgY.x * eY;

  coords10 = coords10 - hgY.y * eY;
  coords00 = coords00 - hgY.y * eY; 

  vec4 color00 = texture2D(sampler, coords00);
  vec4 color10 = texture2D(sampler, coords10);
  vec4 color01 = texture2D(sampler, coords01);
  vec4 color11 = texture2D(sampler, coords11);

  color00 = mix(color00, color01, hgY.z);
  color10 = mix(color10, color11, hgY.z);

  color00 = mix(color00, color10, hgX.z);

  return color00;
}
