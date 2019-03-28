#include <util/enableExtensions.glsl>
#include <util/fsPrecision.glsl>
#include <util/depth.glsl>

#ifndef SAMPLES
#define SAMPLES 4
#endif

uniform mat4 projMatrixInv;

uniform sampler2D normalMap;
uniform sampler2D depthMap;

uniform float intensity;

uniform float projScale;
uniform float radius;
uniform vec2 nearFar;
uniform vec4 projInfo;
uniform vec2 screenDimensions;

//noise texture lookup could be replaced with hash function if WebGL gets XOR functionality
uniform vec3 pSphere[SAMPLES]; //tap position
uniform vec2 rnmScale;
uniform sampler2D rnm; //noise texture

//set z scaling, used to prevent division in ortho mode
uniform vec2 zScale;

varying vec2  uv;
varying vec4  camPos;

float fallOffFunction(float vv, float vn, float bias) {
  float radius2 = radius * radius;

  // A: From the HPG12 paper
  // Note large epsilon to avoid overdarkening within cracks
  // return float(vv < radius2) * max((vn - bias) / (epsilon + vv), 0.0) * radius2 * 0.6;

  // B: Smoother transition to zero (lowers contrast, smoothing out corners). [Recommended]
  float f = max(radius2 - vv, 0.0); return f * f * f * max(vn-bias, 0.0);

  // C: Medium contrast (which looks better at high radii), no division.  Note that the
  // contribution still falls off with radius^2, but we've adjusted the rate in a way that is
  // more computationally efficient and happens to be aesthetically pleasing.
  // return 4.0 * max(1.0 - vv * invRadius2, 0.0) * max(vn - bias, 0.0);

  // D: Low contrast, no division operation
  // return 2.0 * float(vv < radius * radius) * max(vn - bias, 0.0);
}


/** Compute the occlusion due to sample point \a Q about camera-space point \a C with unit normal \a n_C */
float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
  vec3 v = Q - C;
  float vv = dot(v, v);
  float vn = dot(normalize(v), n_C);
  return fallOffFunction(vv, vn, 0.1);
}


/**
 * Reconstruct camera-space P.xyz from screen-space S = (x, y) in
 * pixels and camera-space z < 0.  Assumes that the upper-left pixel center
 * is at (0.5, 0.5) [but that need not be the location at which the sample tap
 * was placed!]
 *
 * Costs 3 MADD.  Error is on the order of 10^3 at the far plane, partly due to z precision.
 */
vec3 reconstructCSPosition(vec2 S, float z) {
  return vec3(( (S.xy) * projInfo.xy + projInfo.zw)*(z*zScale.x+zScale.y), z);
}

void main(void) {
  //Hash function used in the HPG12 AlchemyAO paper
  //Not supported in WebGL -> using texture lookup as in old SSAO shader instead
  //ivec2 ssC = ivec2(gl_FragCoord.xy);
  //float randomPatternRotationAngle = float((3 * ssC.x ^ ssC.y + ssC.x * ssC.y) * 10);
  vec3 fres = normalize((texture2D(rnm, uv * rnmScale).xyz * 2.0) - vec3(1.0));

  float currentPixelDepth = linearDepth(depthMap, uv, nearFar);

  if (-currentPixelDepth>nearFar.y || -currentPixelDepth<nearFar.x) {
    gl_FragColor = vec4(0.0);
    return;
  }

  vec3 currentPixelPos = reconstructCSPosition(gl_FragCoord.xy,currentPixelDepth);

  // get the normal of current fragment
  vec4 norm4 = texture2D(normalMap, uv);
  vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;
  bool isTerrain = norm4.w<0.5;

  float sum = .0;

  vec4 occluderFragment;
  vec3 ray;

  vec3 tapPixelPos;

  // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
  // bug or deviation from CE somewhere else?
  float ps = projScale/(2.0*currentPixelPos.z*zScale.x+zScale.y);

  for(int i = 0; i < SAMPLES; ++i) {
    // get a vector (randomized inside of a sphere with radius 1.0) from a texture and reflect it
    //float ssR;
    //vec2 unitOffset = tapLocation(i, randomPatternRotationAngle, ssR);
    // get the depth of the occluder fragment
    //vec2 offset = vec2(-unitOffset*radius*ssR*ps);

    vec2 unitOffset = reflect(pSphere[i], fres).xy;
    vec2 offset = vec2(-unitOffset*radius*ps);

    //don't use current or very nearby samples
    if ( abs(offset.x)<2.0 || abs(offset.y)<2.0) continue;

    vec2 tc = vec2(gl_FragCoord.xy + offset);
    if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenDimensions.x || tc.y > screenDimensions.y) continue;
    vec2 tcTap = tc/screenDimensions;
    float occluderFragmentDepth = linearDepth(depthMap, tcTap, nearFar);

    if (isTerrain) {
      bool isTerrainTap = texture2D(normalMap, tcTap).w<0.5;
      if (isTerrainTap) {
        continue;
      }
    }

    tapPixelPos = reconstructCSPosition(tc, occluderFragmentDepth);

    sum+= aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
  }

  // output the result

  float A = max(1.0-sum*intensity/float(SAMPLES),0.0);

  // Anti-tone map to reduce contrast and drag dark region farther
  // (x^0.2 + 1.2 * x^4)/2.2
  A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;

  //gl_FragColor = vec4(norm/2.0+0.5, 1.0);
  //gl_FragColor = vec4(-currentPixelDepth/1000.0);
  //gl_FragColor = vec4(tapPixelPos.x/100.0);
  gl_FragColor = vec4(A);
}
