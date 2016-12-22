uniform lowp vec4 u_color;
varying mediump vec2 v_normal;

void main()
{
  // Calculate the distance of the pixel from the line in pixels.
  lowp float dist = abs(v_normal.y);

  lowp float alpha = smoothstep(1.0, 0.0, dist);
  gl_FragColor = alpha * u_color;
}
