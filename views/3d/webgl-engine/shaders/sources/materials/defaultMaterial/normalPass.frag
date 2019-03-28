#include <util/enableExtensions.glsl>
#include <util/fsPrecision.glsl>
#include <util/slice.glsl>

#if (NORMALS == NORMALS_COMPRESSED) || (NORMALS == NORMALS_DEFAULT)
  varying vec3 vnormal;
#endif

varying vec3 vpos;

#if defined(TEXTURING)
  #include <materials/defaultMaterial/texturingInputs.glsl>
  #include <materials/defaultMaterial/texturing.glsl>
#endif

void main() {
  discardBySlice(vpos);

  #if defined(TEXTURING)
    vec4 texColor = textureLookup(tex, vtc);
    discardOrAdjustTextureAlpha(texColor);
  #endif

#if (NORMALS == NORMALS_SCREEN_DERIVATIVE)
  vec3 normal = normalize(cross(dFdx(vpos),dFdy(vpos)));
#else
  vec3 normal = normalize(vnormal);
  if (gl_FrontFacing == false) normal = -normal;
#endif

  #ifndef ALPHA_ZERO
    gl_FragColor = vec4(vec3(.5) + .5 * normal, 1.0);
  #else
    gl_FragColor = vec4(vec3(.5) + .5 * normal, 0.0);
  #endif
}
