// This is the maximum float value representable as 32bit fixed point,
// it is rgba2float(vec4(1)) inlined.
const float MAX_RGBA_FLOAT =
  255.0 / 256.0 +
  255.0 / 256.0 / 256.0 +
  255.0 / 256.0 / 256.0 / 256.0 +
  255.0 / 256.0 / 256.0 / 256.0 / 256.0;

// Factors to convert to fixed point, i.e. factors (256^0, 256^1, 256^2, 256^3)
const vec4 fixedPointFactors = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);

vec4 float2rgba(const float value) {
  // Make sure value is in the domain we can represent
  float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);

  // Decompose value in 32bit fixed point parts represented as
  // uint8 rgba components. Decomposition uses the fractional part after multiplying
  // by a power of 256 (this removes the bits that are represented in the previous
  // component) and then converts the fractional part to 8bits.
  vec4 fixedPointU8 = floor(fract(valueInValidDomain * fixedPointFactors) * 256.0);

  // Convert uint8 values (from 0 to 255) to floating point representation for
  // the shader
  const float toU8AsFloat = 1.0 / 255.0;

  return fixedPointU8 * toU8AsFloat;
}

// Factors to convert rgba back to float
const vec4 rgba2float_factors = vec4(
  255.0 / (256.0),
  255.0 / (256.0 * 256.0),
  255.0 / (256.0 * 256.0 * 256.0),
  255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);

float rgba2float(vec4 rgba) {
  // Convert components from 0->1 back to 0->255 and then
  // add the components together with their corresponding
  // fixed point factors, i.e. (256^1, 256^2, 256^3, 256^4)
  return dot(rgba, rgba2float_factors);
}
