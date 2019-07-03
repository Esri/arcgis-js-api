#include <util/enableExtensions.glsl>
#include <util/fsPrecision.glsl>
#include <util/encoding.glsl>
#include <util/color.glsl>

uniform sampler2D tex;
uniform vec4 overrideColor;
uniform vec4 outlineColor;
uniform float outlineSize;

varying vec4 vcolor;

varying vec2 vtc;
varying vec2 vsize;

#ifdef BINARY_HIGHLIGHT_OCCLUSION
varying float voccluded;
#endif

#ifdef DEBUG_DRAW_BORDER
varying vec4 debugBorderCoords;
#endif
