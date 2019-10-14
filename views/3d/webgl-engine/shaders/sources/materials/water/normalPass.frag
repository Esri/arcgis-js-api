#include <util/enableExtensions.glsl>
#include <util/fsPrecision.glsl>

uniform sampler2D texWaveNormal;
uniform sampler2D texWavePerturbation;

#include <materials/water/waterDistortion.glsl>
#include <util/slice.glsl>

uniform float timeElapsed;

varying vec2 vuv;
varying vec3 vpos;


// For the draped case we rende the normals in the r,g,b channels
// of the overlay texture. 

void main() {
  discardBySlice(vpos); 
  // the created normal is in tangent space
  vec3 tangentNormal = getSurfaceNormal(vuv, timeElapsed);
  tangentNormal = normalize(tangentNormal);
  gl_FragColor = vec4((tangentNormal + vec3(1.0)) * 0.5, 0.0);
}
