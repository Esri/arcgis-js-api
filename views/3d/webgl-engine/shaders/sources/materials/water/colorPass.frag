#include <util/enableExtensions.glsl>
#include <util/fsPrecision.glsl>

uniform sampler2D texWaveNormal;
uniform sampler2D texWavePerturbation;

#include <materials/water/waterDistortion.glsl>
#include <util/slice.glsl>

#ifdef RECEIVE_SHADOWS
uniform sampler2D depthTex;
uniform int shadowMapNum;
uniform vec4 shadowMapDistance;
uniform mat4 shadowMapMatrix[4];
uniform float depthHalfPixelSz;
varying float linearDepth;
#include <util/shadow.glsl>
#endif

#include <materials/water/waterSurface.glsl>

uniform vec4 waterColor; 
uniform vec3 lightingMainDirection;
uniform vec3 lightingMainIntensity; // the incoming light color

uniform vec3 camPos;
uniform float timeElapsed;

varying vec2 vuv;
varying vec3 vpos;
// the incoming normal from vertex shader
// is either up or the normal from origin to the vertex
varying vec3 vnormal;
varying mat3 vtbnMatrix;

void main() {
  discardBySlice(vpos);
  vec3 localUp = vnormal;  
  // the created normal is in tangent space
  vec3 tangentNormal = getSurfaceNormal(vuv, timeElapsed);

  // we rotate the normal according to the tangent-bitangent-normal-Matrix
  vec3 n = normalize(vtbnMatrix * tangentNormal);
  vec3 v = -normalize(vpos - camPos);
  vec3 l = normalize(-lightingMainDirection);

  // if receive shadows is off, then shadow value is always on for lighting
  float shadow = 1.0;
#ifdef RECEIVE_SHADOWS
    shadow = 1.0 - evalShadow(vpos, linearDepth, depthTex, shadowMapNum, shadowMapDistance, shadowMapMatrix, depthHalfPixelSz);
#endif
  vec4 final = vec4(getSeaColor(n, v, l, waterColor.rgb, lightingMainIntensity, localUp, shadow), waterColor.w);
  
  // gamma correction
  gl_FragColor = delinearizeGamma(final);
  gl_FragColor = highlightSlice(gl_FragColor, vpos);
}
