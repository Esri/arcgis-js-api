uniform mediump float u_lineHalfWidth;
uniform lowp float u_blur;
uniform lowp float u_opacity;
uniform mediump vec2 u_pattern_tl;
uniform mediump vec2 u_pattern_br;
uniform mediump vec2 u_spriteSize;
uniform sampler2D u_texture;

varying mediump vec2 v_normal;
varying highp float v_accumulatedDistance;

// Horizontal scale is used to scale the horizontal texture coordinate v_normal.x before adding it as an offset to the
// accumulated distance. Most vertices will have v_normal.x == 0, because the pattern must be sampled only depending on
// the v_accumulatedDistance value. But tessellation at caps can have vertices with v_normal.x != 0, thus allowing to
// "keep moving" for a few more pixel even when the line has ended or has not started yet.
const mediump float tileCoordRatio = 8.0;

void main()
{
  // dist represent the distance of the fragment from the line. 1.0 or -1.0 will be the values on the edge of the line,
  // and any value in between will be inside the line (the sign represent the direction - right or left).
  // since u_linewidth.s (half line width) is represented in pixels, dist is also given in pixels
  mediump float fragDist = length(v_normal) * u_lineHalfWidth;

  // calculate the alpha given the difference between the line-width and the distance of the fragment from the center-line.
  // We need to count for both sides of the line.
  lowp float alpha = clamp( min(fragDist + u_blur + 1.0, u_lineHalfWidth - fragDist) / u_blur, 0.0, 1.0);
  // add the line's opacity to the alpha
  alpha *= u_opacity;

  // we need to calculate the relative portion of the line texture along the line given the accumulated distance aliong the line
  // The computed value should is anumber btween 0 and 1 which will later be used to interpolate btween the BR and TL values
  mediump float relativeTexX = mod((v_accumulatedDistance + v_normal.x * u_lineHalfWidth * tileCoordRatio) / u_spriteSize.x, 1.0);

  // in order to calculate the texture coordinates prependicular to the line (Y axis), we use the interpolated normal values
  // which range from -1.0 to 1.0. On the line's centerline, the value of the interpolated normal is 0.0, however the relative
  // texture value shpould be 0.5 (given that at the bottom of the line, the texture coordinate must be equal to 0.0)
  // (TL) ---------------------------      --> left edge of line. Interpolatedf normal is 1.0
  //              | -> linwe-width / 2
  //      - - - - - - - - - - - - - -
  //              | -> linwe-width / 2
  //      ---------------------------- (BR)--> right edge of line. Interpolatedf normal is -1.0

  mediump float relativeTexY = 0.5 + (v_normal.y * u_lineHalfWidth / u_spriteSize.y);

  // claculate the actual texture coordinates by interpolating between the TL/BR pattern coordinates
  mediump vec2 texCoord = mix(u_pattern_tl, u_pattern_br, vec2(relativeTexX, relativeTexY));

  // get the color from the texture
  lowp vec4 color = texture2D(u_texture, texCoord);

  // finally write the fragment value
  gl_FragColor = alpha * color;
}
