uniform mat4 proj;
uniform mat4 view;
#ifdef INSTANCED_DOUBLE_PRECISION
uniform vec3 viewOriginHi;
uniform vec3 viewOriginLo;
#endif
uniform vec3 camPos;
uniform vec3 localOrigin;

#ifdef INSTANCED
#ifdef INSTANCED_DOUBLE_PRECISION
attribute vec3 modelOriginHi;
attribute vec3 modelOriginLo;
attribute mat3 model;
attribute mat3 modelNormal;
#else /* INSTANCED_DOUBLE_PRECISION */
attribute mat4 model;
attribute mat4 modelNormal;
#endif /* INSTANCED_DOUBLE_PRECISION */
#else /* INSTANCED */
uniform mat4 model;
uniform mat4 modelNormal;
#endif /* INSTANCED */

#ifdef VERTICAL_OFFSET
// [ verticalOffsetPerDistance, minWorldLength, maxWorldLength ]
uniform vec4 verticalOffset;
#ifdef SCREEN_SIZE_PERSPECTIVE
uniform vec4 screenSizePerspectiveAlignment;
#endif
#endif
