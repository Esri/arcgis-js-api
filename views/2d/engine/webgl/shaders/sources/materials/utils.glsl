
float getBit(in float bitset, in int bitIndex) {
  float offset = pow(2.0, float(bitIndex));

  return mod(floor(bitset / offset), 2.0);
}
