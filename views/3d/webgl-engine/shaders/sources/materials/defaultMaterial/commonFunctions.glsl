#include <materials/defaultMaterial/localPosition.glsl>
#include <util/doublePrecision.glsl>

vec3 calculateVPos() {
#ifdef INSTANCED_DOUBLE_PRECISION
  return model * localPosition().xyz;
#else
  return (model * localPosition()).xyz;
#endif
}

#ifdef VERTICAL_OFFSET
#ifdef SCREEN_SIZE_PERSPECTIVE
#include <util/screenSizePerspective.glsl>
#endif

vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
  float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);

#if VIEWING_MODE == VIEWING_MODE_GLOBAL
  vec3 worldNormal = normalize(worldPos + localOrigin);
#else
  vec3 worldNormal = vec3(0.0, 0.0, 1.0);
#endif

#ifdef SCREEN_SIZE_PERSPECTIVE
  float cosAngle = dot(worldNormal, normalize(worldPos - camPos));

  float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);
#else
  float verticalOffsetScreenHeight = verticalOffset.x;
#endif

  // Screen sized offset in world space, used for example for line callouts
  float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);

  return worldNormal * worldOffset;
}
#endif
