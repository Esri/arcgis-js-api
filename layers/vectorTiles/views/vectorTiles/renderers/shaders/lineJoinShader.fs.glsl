uniform lowp vec4 u_color;
uniform mediump float u_lineHalfWidth;
uniform mediump float u_oneOverPixelRatio;

varying mediump vec2 v_vertexPosition;

void main()
{
  // get the distance of the current fragment from the actual vertex
  mediump float fragDist = length(v_vertexPosition - u_oneOverPixelRatio * gl_FragCoord.xy);

  // rounding the quare: calculate the alpha given the difference between the line-width and the distance of the fragment
  // from the center-line. We will end up with a nice round circle with a soft edge.
  lowp float alpha = clamp(u_lineHalfWidth - fragDist, 0.0, 1.0);

  // finally output the fragment color
  gl_FragColor = alpha * u_color;
}
