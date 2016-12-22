uniform lowp vec4 u_color;
uniform mediump float u_lineHalfWidth;

varying mediump vec2 v_fragmentOffset;

void main()
{
  // Calculate the antialiasing fade factor
  lowp float alpha = clamp(u_lineHalfWidth * u_lineHalfWidth - dot(v_fragmentOffset, v_fragmentOffset), 0.0, 1.0);
  //lowp float alpha  = 1.0 - smoothstep(u_lineHalfWidth - 0.25, u_lineHalfWidth + 0.25, dist);
  // YF: if needed w can also use a smoothstep around the edge of the circle and use a single pixel or so as the edge width

  // finally output the fragment color
  gl_FragColor = alpha * u_color;
}
