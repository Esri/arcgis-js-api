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
uniform int shadowsEnabled;

uniform vec3 camPos;
uniform float timeElapsed;

varying vec2 uvOut;
varying vec3 posOut;
// the incoming normal from vertex shader
// is either up or the normal from origin to the vertex
varying vec3 normalOut;
varying mat3 tbnMatrix;

void main() {
  discardBySlice(posOut);
  vec3 localUp = normalOut;
  vec2 uv = uvOut;  
  // the created normal is in tangent space
  vec3 tangentNormal = getSurfaceNormal(uv, timeElapsed);

  // we rotate the normal according to the tangent-bitangent-normal-Matrix
  vec3 n = normalize(tbnMatrix * tangentNormal);
  vec3 v = -normalize(posOut - camPos);
  vec3 l = normalize(-lightingMainDirection);

  // if receive shadows is off, then shadow value is always on for lighting
  float shadow = 1.0;
#ifdef RECEIVE_SHADOWS
  if(shadowsEnabled == 1) {
    shadow = 1.0 - evalShadow(posOut, linearDepth, depthTex, shadowMapNum, shadowMapDistance, shadowMapMatrix, depthHalfPixelSz);
  }
#endif
  vec4 final = vec4(getSeaColor(n, v, l, waterColor.rgb, localUp, shadow), waterColor.w);
  
  // gamma correction
  gl_FragColor = vec4(pow(final.rgb, vec3( 1.0 / 2.2)), final.w);
  gl_FragColor = highlightSlice(gl_FragColor, posOut);
}
