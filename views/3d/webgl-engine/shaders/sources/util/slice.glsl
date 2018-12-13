#ifdef SLICE
uniform vec3 slicePlaneOrigin;
uniform vec3 slicePlaneBasis1;
uniform vec3 slicePlaneBasis2;

struct SliceFactors {
  float front;
  float side0;
  float side1;
  float side2;
  float side3;
};

SliceFactors calculateSliceFactors(vec3 pos) {
  vec3 rel = pos - slicePlaneOrigin;

  vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
  float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);

  float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
  float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);

  float basis1Dot = dot(slicePlaneBasis1, rel);
  float basis2Dot = dot(slicePlaneBasis2, rel);

  return SliceFactors(
    dot(slicePlaneNormal, pos) + slicePlaneW,
    -basis1Dot - basis1Len2,
    basis1Dot - basis1Len2,
    -basis2Dot - basis2Len2,
    basis2Dot - basis2Len2
  );
}

bool sliceByFactors(SliceFactors factors) {
  return factors.front < 0.0
    && factors.side0 < 0.0
    && factors.side1 < 0.0
    && factors.side2 < 0.0
    && factors.side3 < 0.0;
}

bool sliceByPlane(vec3 pos) {
  return sliceByFactors(calculateSliceFactors(pos));
}

#ifdef EXTENSIONS_ENABLED

vec4 applySliceHighlight(vec4 color, vec3 pos) {
  SliceFactors factors = calculateSliceFactors(pos);

  if (sliceByFactors(factors)) {
    return color;
  }

  const float HIGHLIGHT_WIDTH = 1.0;
  const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);

  factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
  factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
  factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
  factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
  factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);

  float highlightFactor = (1.0 - step(0.5, factors.front))
    * (1.0 - step(0.5, factors.side0))
    * (1.0 - step(0.5, factors.side1))
    * (1.0 - step(0.5, factors.side2))
    * (1.0 - step(0.5, factors.side3));

  return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}

#else // EXTENSIONS_ENABLED

// GL_OES_standard_derivatives must be enabled for applySliceHighlight

#endif // EXTENSIONS_ENABLED

#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }
#define highlightSlice(_color_, _pos_) applySliceHighlight(_color_, _pos_)

#else // SLICE

#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)

#endif // SLICE
