
float rshift(in float u32, in int amount) {
  return floor(u32 / pow(2.0, float(amount)));
}


float getBit(in float bitset, in int bitIndex) {
  float offset = pow(2.0, float(bitIndex));

  return mod(floor(bitset / offset), 2.0);
}

float getFilterBit(in float bitset, in int bitIndex) {
  return getBit(bitset, bitIndex + 1); 
}

float getHighlightBit(in float bitset) {
  return getBit(bitset, 0); 
}

highp vec4 unpackDisplayIdTexel(in highp vec4 bitset) {
  float isAggregate = getBit(bitset.a, 7);
  return (1.0 - isAggregate) * bitset + isAggregate * (vec4(bitset.rgba) - vec4(0.0, 0.0, 0.0, float(0x80)));
}

vec4 unpack(in float u32) {
  float r = mod(rshift(u32, 0), 255.0);
  float g = mod(rshift(u32, 8), 255.0);
  float b = mod(rshift(u32, 16), 255.0);
  float a = mod(rshift(u32, 24), 255.0);
  
  return vec4(r, g, b, a);
}


vec4 norm(in vec4 v) {
  return v /= 255.0;
}


float max4(vec4 target) {
  return max(max(max(target.x, target.y), target.z), target.w);
}


// Unpack a normalized float (-1 -> 1) encoded into a byte
vec2 unpack_u8_nf32(vec2 bytes) {
  return (bytes - 127.0) / 127.0;
}
