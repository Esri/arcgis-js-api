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
