const float GAMMA = 2.2;
const float INV_GAMMA = 0.4545454545; // 1 / GAMMA

// gamma correction
vec4 delinearizeGamma(vec4 color) { 
  return vec4(pow(color.rgb, vec3(INV_GAMMA)), color.w);
}

vec3 linearizeGamma(vec3 color) { 
  return pow(color, vec3(GAMMA));
}
