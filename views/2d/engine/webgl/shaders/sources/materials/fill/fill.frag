precision highp float;

#include <materials/constants.glsl>

#ifdef ID

varying highp vec4 v_id;

#endif // ID

#ifdef PATTERN

uniform lowp sampler2D u_texture;

varying mediump vec4 v_tlbr;
varying mediump vec2 v_tileTextureCoord;

#endif // PATTERN

#ifdef DOT_DENSITY

uniform mediump mat4 u_dotColors[ 2 ];
uniform sampler2D u_dotTextures[ 2 ];
uniform vec4 u_dotBackgroundColor;

varying highp vec4 v_dotThresholds[ 2 ];
varying vec2 v_dotTextureCoords;

#endif

varying lowp vec4 v_color;
varying lowp float v_opacity;

float max4(vec4 target) {
  return max(max(max(target.x, target.y), target.z), target.w);
}

void main() {

#ifdef ID

  gl_FragColor = v_id;

#elif defined(PATTERN)

  // normalize the calculated texture coordinate such that it fits in the range of 0 to 1.
  mediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);
  // interpolate the image coordinate between the top-left and the bottom right to get the actual position to sample.
  // after normalizing the position, we get a value ranging between 0 and 1 which refers to the entire texture, however
  // we need to only sample from area that has our sprite in the mosaic.
  mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
  // sample the sprite mosaic
  lowp vec4 color = texture2D(u_texture, samplePos);
  gl_FragColor = v_opacity * v_color * color;

#elif defined(DOT_DENSITY) && !defined(HIGHLIGHT)

  vec4 textureThresholds0 = texture2D(u_dotTextures[0], v_dotTextureCoords);
  vec4 textureThresholds1 = texture2D(u_dotTextures[1], v_dotTextureCoords);

  vec4 difference0 = v_dotThresholds[0] - textureThresholds0;
  vec4 difference1 = v_dotThresholds[1] - textureThresholds1;

#ifdef DD_DOT_BLENDING

  vec4 isPositive0 = step(0.0, difference0);
  vec4 isPositive1 = step(0.0, difference1);

  float weightSum = dot(isPositive0, difference0) + dot(isPositive1, difference1);
  float lessThanEqZero = step(weightSum, 0.0);
  float greaterThanZero = 1.0 - lessThanEqZero ;
  float divisor = (weightSum + lessThanEqZero); // Guard against divide by zero

  vec4 weights0 = difference0 * isPositive0 / divisor;
  vec4 weights1 = difference1 * isPositive1 / divisor;

  vec4 dotColor = u_dotColors[0] * weights0 + u_dotColors[1] * weights1;

  gl_FragColor = greaterThanZero * dotColor + lessThanEqZero * u_dotBackgroundColor;

#else

  float diffMax = max(max4(difference0), max4(difference1));
  float lessThanZero = step(diffMax, 0.0);
  float greaterOrEqZero = 1.0 - lessThanZero;

  vec4 isMax0 = step(diffMax, difference0);
  vec4 isMax1 = step(diffMax, difference1);

  vec4 dotColor = u_dotColors[0] * isMax0 + u_dotColors[1] * isMax1;

  gl_FragColor = greaterOrEqZero * dotColor + lessThanZero * u_dotBackgroundColor;

#endif

#else

  gl_FragColor = v_opacity * v_color;

#endif // PATTERN

#ifdef HIGHLIGHT

  gl_FragColor.a = 1.0;

#endif // HIGHLIGHT
}
