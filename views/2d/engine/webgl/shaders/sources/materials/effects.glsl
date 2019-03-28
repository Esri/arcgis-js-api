
uniform mat4 u_insideEffectMat4[ MAX_FILTER_COUNT ];
uniform mat4 u_outsideEffectMat4[ MAX_FILTER_COUNT ];

vec4 getEffectColor(in vec4 color, in float filterFlags) {
  vec4 outColor = vec4(color);

  // default visibility filter is index 0, index 1+ are effects
  for (int i = 1; i < EFFECT_COUNT + 1; i++) {
    float bit = getBit(filterFlags, i);
    
    outColor = u_insideEffectMat4[ i ] * (bit  * outColor) + u_outsideEffectMat4[ i ] * ((1.0 - bit) * outColor);
  }
  
  return outColor; 
}

void applyFilter(inout vec4 color, inout vec3 pos, in float filterFlags) {

  // default visibility filter is index 0, index 1+ are effects
  for (int i = 0; i < EFFECT_COUNT + 1; i++) {
    float bit = getBit(filterFlags, i); 

    color = u_insideEffectMat4[ i ] * (bit  * color) + u_outsideEffectMat4[ i ] * ((1.0 - bit) * color);
  }

  // If we are not visible, clip the vertex if we are doing a hit-test
  pos.z += 2.0 * (1.0 - getBit(filterFlags, 0)); 
}

void applyFilterLabels(inout vec4 color, inout vec3 pos, in float filterFlags) {
  float bit = getBit(filterFlags, 0); 

  pos.z += 2.0 * (1.0 - bit);

  // When outsideLabelsVisible is false, we also clip labels if they fail any effect filter
#ifndef OUTSIDE_LABELS_VISIBLE
  for (int i = 1; i < EFFECT_COUNT + 1; i++) {
    float bit = getBit(filterFlags, i); 

    pos.z += 2.0 * (1.0 - bit);
  }
#endif
}
