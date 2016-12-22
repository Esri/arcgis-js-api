/* The implementation of the renderer is based on the article and implementation of MB described here:
* https://www.mapbox.com/blog/drawing-antialiased-lines/
*/

uniform mediump float u_lineHalfWidth;
uniform lowp vec4 u_color;
uniform mediump vec2 u_dasharray;
uniform lowp float u_blur;

varying mediump vec2 v_normal;
varying highp float v_accumulatedDistance;

void main()
{
  // dist represent the distance of the fragment from the line. 1.0 or -1.0 will be the values on the edge of the line,
  // and any value in between will be inside the line (the sign represent the direction - right or left).
  // since u_linewidth.s (half line width) is represented in pixels, dist is also given in pixels
  mediump float fragDist = length(v_normal) * u_lineHalfWidth;

  // calculate the alpha given the difference between the line-width and the distance of the fragment from the center-line.
  // We need to count for both sides of the line.
  lowp float alpha = clamp( min(fragDist + u_blur + 1.0, u_lineHalfWidth - fragDist) / u_blur, 0.0, 1.0);

  // now calculate the dashes given the accumulated distance of the line:
  // start with calculating a normalized position along the line
  lowp float dashPos =  mod(v_accumulatedDistance, u_dasharray.x + u_dasharray.y);

  // calculate the contribution to the alpha of the dash part. It is provided by the shortest portion of the position along the dash.
  // we must clamp since the value might be bigger than 1 or smaller than zero (when over a dash).
  //   | <--- pos along the dash part
  // -------_______-------_______
  // when the dashPos is over the 'gap' part of the dash u_dasharray.x - dashPos is negative and therefore the alpha will
  // get clamped to zero.
  // when u_dasharray.x - dashPos is positive, or when dashPos is smaller than 1.0, it gives us a soft edge to each dash part.
  // along the direction of the line.
  lowp float dashAlpha = clamp( min(dashPos, u_dasharray.x - dashPos), 0.0, 1.0);

  // if we don't have a no-data part to the dash then it is a solid line
  dashAlpha = max(sign(-u_dasharray.y), dashAlpha); //sign(-u_dasharray.y) > 0.0 ? 1.0 : dashAlpha;
  // finally multiply the fragment's alpha by the calculated dash-alpha
  alpha *= dashAlpha;

  // output the fragment color
 gl_FragColor = alpha * u_color;
}
