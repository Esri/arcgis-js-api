// contrast offset
uniform float u_contrastOffset;

// brightness offset
uniform float u_brightnessOffset;

vec4 adjustContrastBrightness(vec4 currentPixel, bool isFloat) {
  vec4 pixelValue = isFloat ? currentPixel * 255.0 : currentPixel;
  float maxI = 255.0;
  float mid = 128.0;
  // c, b, v as they're from AO
  float c = u_contrastOffset;
  float b = u_brightnessOffset;
  vec4 v;
  if (c > 0.0 && c < 100.0) {
    v = (200.0 * pixelValue - 100.0 * maxI + 2.0 * maxI * b) / (2.0 * (100.0 - c)) + mid;
  } else if (c <= 0.0 && c > -100.0) {
    v = (200.0 * pixelValue - 100.0 * maxI + 2.0 * maxI * b) * (100.0 + c) / 20000.0 + mid;
  } else if (c == 100.0) {
    v = (200.0 * pixelValue - 100.0 * maxI + (maxI + 1.0) * (100.0 - c) + 2.0 * maxI * b);
    v = (sign(v) + 1.0) / 2.0; //binary contrast with extra mid tone at 0.5
  } else if (c == -100.0) {
    v = vec4(mid, mid, mid, currentPixel.a); //no contrast
  }
  return vec4(v.r / 255.0, v.g / 255.0, v.b / 255.0, currentPixel.a);
}