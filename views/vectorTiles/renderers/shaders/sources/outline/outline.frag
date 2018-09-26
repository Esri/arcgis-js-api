varying lowp vec4 v_color;
varying mediump vec2 v_normal;

#ifdef ID
varying mediump vec4 v_id;
#endif // ID

void main()
{
  // Calculate the distance of the pixel from the line in pixels.
  lowp float dist = abs(v_normal.y);

  lowp float alpha = smoothstep(1.0, 0.0, dist);
  gl_FragColor = alpha * v_color;

#ifdef ID
  if (gl_FragColor.a < 1.0 / 255.0) {
    discard;
  }
  gl_FragColor = v_id;
#endif // ID
}
