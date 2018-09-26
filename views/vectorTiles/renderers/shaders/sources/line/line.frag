varying mediump vec2 v_normal;
varying highp float v_accumulatedDistance;

varying mediump float v_lineHalfWidth;
varying lowp vec4 v_color;

varying mediump float v_blur;

#ifdef PATTERN
uniform mediump vec2 u_pattern_tl;
uniform mediump vec2 u_pattern_br;
uniform mediump vec2 u_spriteSize;
uniform sampler2D u_texture;

// Horizontal scale is used to scale the horizontal texture coordinate v_normal.x before adding it as an offset to the
// accumulated distance. Most vertices will have v_normal.x == 0, because the pattern must be sampled only depending on
// the v_accumulatedDistance value. But tessellation at caps can have vertices with v_normal.x != 0, thus allowing to
// "keep moving" for a few more pixel even when the line has ended or has not started yet.
const mediump float tileCoordRatio = 8.0;
#else
varying mediump vec2 v_dasharray;
#endif

#ifdef ID
varying mediump vec4 v_id;
#endif // ID

void main()
{
  // dist represent the distance of the fragment from the line. 1.0 or -1.0 will be the values on the edge of the line,
  // and any value in between will be inside the line (the sign represent the direction - right or left).
  // since u_linewidth.s (half line width) is represented in pixels, dist is also given in pixels
  mediump float fragDist = length(v_normal) * v_lineHalfWidth;

  // calculate the alpha given the difference between the line-width and the distance of the fragment from the center-line.
  // We need to count for both sides of the line.
  lowp float alpha = clamp((v_lineHalfWidth - fragDist) / v_blur, 0.0, 1.0);

#ifdef PATTERN
  // we need to calculate the relative portion of the line texture along the line given the accumulated distance aliong the line
  // The computed value should is anumber btween 0 and 1 which will later be used to interpolate btween the BR and TL values
  mediump float relativeTexX = mod((v_accumulatedDistance + v_normal.x * v_lineHalfWidth * tileCoordRatio) / u_spriteSize.x, 1.0);

  // in order to calculate the texture coordinates perpendicular to the line (Y axis), we use the interpolated normal values
  // which range from -1.0 to 1.0. On the line's centerline, the value of the interpolated normal is 0.0, however the relative
  // texture value should be 0.5 (given that at the bottom of the line, the texture coordinate must be equal to 0.0)
  // (TL) ---------------------------      --> left edge of line. Interpolated normal is 1.0
  //              | -> line-width / 2
  //      - - - - - - - - - - - - - -
  //              | -> line-width / 2
  //      ---------------------------- (BR)--> right edge of line. Interpolated normal is -1.0

  mediump float relativeTexY = 0.5 + (v_normal.y * v_lineHalfWidth / u_spriteSize.y);

  // claculate the actual texture coordinates by interpolating between the TL/BR pattern coordinates
  mediump vec2 texCoord = mix(u_pattern_tl, u_pattern_br, vec2(relativeTexX, relativeTexY));

  // get the color from the texture
  lowp vec4 color = texture2D(u_texture, texCoord);

  // finally write the fragment value
  gl_FragColor = alpha * v_color[3] * color;
#else
  // now calculate the dashes given the accumulated distance of the line:
  // start with calculating a normalized position along the line
  lowp float dashPos =  mod(v_accumulatedDistance, v_dasharray.x + v_dasharray.y);

  // calculate the contribution to the alpha of the dash part. It is provided by the shortest portion of the position along the dash.
  // we must clamp since the value might be bigger than 1 or smaller than zero (when over a dash).
  //   | <--- pos along the dash part
  // -------_______-------_______
  // when the dashPos is over the 'gap' part of the dash dasharray.x - dashPos is negative and therefore the alpha will
  // get clamped to zero.
  // when dasharray.x - dashPos is positive, or when dashPos is smaller than 1.0, it gives us a soft edge to each dash part.
  // along the direction of the line.
  lowp float dashAlpha = clamp(min(dashPos, v_dasharray.x - dashPos) + 0.5, 0.0, 1.0);

  // if we don't have a no-data part to the dash then it is a solid line
  dashAlpha = max(sign(-v_dasharray.y), dashAlpha);
  // finally multiply the fragment's alpha by the calculated dash-alpha
  alpha *= dashAlpha;

  // output the fragment color
  gl_FragColor = alpha * v_color;
#endif // PATTERN

#ifdef ID
  if (gl_FragColor.a < 1.0 / 255.0) {
    discard;
  }
  gl_FragColor = v_id;
#endif // ID
}
