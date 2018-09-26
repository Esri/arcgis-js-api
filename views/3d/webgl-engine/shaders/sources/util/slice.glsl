#ifdef SLICE
uniform vec3 slicePlaneOrigin;
uniform vec3 slicePlaneBasis1;
uniform vec3 slicePlaneBasis2;

bool sliceByPlane(vec3 pos) {
  vec3 rel = pos - slicePlaneOrigin;

  vec3 slicePlaneNormal = cross(slicePlaneBasis1, slicePlaneBasis2);
  float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);

  float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
  float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);

  float basis1Dot = dot(slicePlaneBasis1, rel);
  float basis2Dot = dot(slicePlaneBasis2, rel);

  return (dot(slicePlaneNormal, pos) + slicePlaneW) < 0.0
    && -basis1Dot - basis1Len2 < 0.0
    && basis1Dot - basis1Len2 < 0.0
    && -basis2Dot - basis2Len2 < 0.0
    && basis2Dot - basis2Len2 < 0.0;
}

#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }

#else // SLICE

#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}

#endif // SLICE
