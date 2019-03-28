precision lowp float;

#include <util/encoding.glsl>
#include <materials/constants.glsl>

uniform lowp float u_blur;
uniform mediump float u_antialiasing;

varying mediump vec2 v_normal;
varying mediump float v_lineHalfWidth;
varying lowp vec4 v_color;
varying lowp float v_transparency;

#if defined(PATTERN) || defined(SDF)
uniform sampler2D u_texture;
uniform mediump float u_zoomFactor;

varying mediump vec4 v_tlbr; // normalized pattern coordinates [0, 1]
varying mediump vec2 v_patternSize;
varying highp float v_accumulatedDistance;
#endif // PATTERN SDF

#ifdef SDF
const float sdfPatternHalfWidth = 15.5; // YF: assumed that the width will be set to 31
const float widthFactor = 2.0;
#endif // SDF

#ifdef ID
varying highp vec4 v_id;
#endif // ID


void main()
{
  // for now assume that a thin line is a line which is under 2 pixels (1 pixels on either sides of the centerline)
  mediump float thinLineFactor = max(THIN_LINE_WIDTH_FACTOR * step(v_lineHalfWidth, THIN_LINE_HALF_WIDTH), 1.0);

  // dist represent the distance of the fragment from the line. 1.0 or -1.0 will be the values on the edge of the line,
  // and any value in between will be inside the line (the sign represent the direction - right or left).
  // since u_linewidth.s (half line width) is represented in pixels, dist is also given in pixels
  mediump float fragDist = length(v_normal) * v_lineHalfWidth;

  // calculate the alpha given the difference between the line-width and the distance of the fragment from the center-line.
  // when it is a thin line then use a slightly shallower slope in order to add more feathering
  lowp float alpha = clamp(thinLineFactor * (v_lineHalfWidth - fragDist) / (u_blur + thinLineFactor - 1.0), 0.0, 1.0);

#if defined(SDF) && !defined(HIGHLIGHT) // When we render the highlight, we want to treat the line as if it was solid
  mediump float lineHalfWidth = widthFactor * v_lineHalfWidth;
  mediump float lineWidthRatio = lineHalfWidth / sdfPatternHalfWidth;
  mediump float relativeTexX = mod((u_zoomFactor * v_accumulatedDistance + v_normal.x * lineHalfWidth) / (lineWidthRatio * v_patternSize.x), 1.0);
  mediump float relativeTexY = 0.5 + 0.5 * v_normal.y;

  // claculate the actual texture coordinates by interpolating between the TL/BR pattern coordinates
  mediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));

  // calculate the distance from the edge [-0.5, 0.5]
  mediump float d = rgba2float(texture2D(u_texture, texCoord)) - 0.5;

  // the distance is a proportional to the line width
  float dist = d * lineHalfWidth;

  lowp vec4 fillPixelColor = v_transparency * alpha * clamp(0.5 - dist, 0.0, 1.0) * v_color;
  gl_FragColor = fillPixelColor;
#elif defined(PATTERN) && !defined(HIGHLIGHT)  // When we render the highlight, we want to treat the line as if it was solid
  // we need to calculate the relative portion of the line texture along the line given the accumulated distance along the line
  // The computed value should is anumber btween 0 and 1 which will later be used to interpolate btween the BR and TL values
  mediump float relativeTexX = mod((u_zoomFactor * v_accumulatedDistance + v_normal.x * v_lineHalfWidth) / v_patternSize.x, 1.0);

  // in order to calculate the texture coordinates prependicular to the line (Y axis), we use the interpolated normal values
  // which range from -1.0 to 1.0. On the line's centerline, the value of the interpolated normal is 0.0, however the relative
  // texture value shpould be 0.5 (given that at the bottom of the line, the texture coordinate must be equal to 0.0)
  // (TL) ---------------------------      --> left edge of line. Interpolatedf normal is 1.0
  //              | -> line-width / 2
  //      - - - - - - - - - - - - - -
  //              | -> line-width / 2
  //      ---------------------------- (BR)--> right edge of line. Interpolatedf normal is -1.0

  mediump float relativeTexY = 0.5 + (v_normal.y * v_lineHalfWidth / v_patternSize.y);

  // claculate the actual texture coordinates by interpolating between the TL/BR pattern coordinates
  mediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));

  // get the color from the texture
  lowp vec4 color = texture2D(u_texture, texCoord);

  gl_FragColor = v_transparency * alpha * v_color * color;
#else // solid line (no texture, no pattern)
  // output the fragment color
  gl_FragColor = v_transparency * alpha * v_color;
#endif // SDF

#ifdef HIGHLIGHT
  gl_FragColor.a = step(1.0 / 255.0, gl_FragColor.a);
#endif // HIGHLIGHT

#ifdef ID
  if (gl_FragColor.a < 1.0 / 255.0) {
    discard;
  }
  gl_FragColor = v_id;
#endif // ID
}
