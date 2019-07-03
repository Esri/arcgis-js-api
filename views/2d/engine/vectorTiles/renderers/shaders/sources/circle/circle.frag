precision lowp float;

varying lowp vec4 v_color;
varying lowp vec4 v_stroke_color;
varying mediump float v_blur;
varying mediump float v_stroke_width;
varying mediump float v_radius;
varying mediump vec2 v_offset;

#ifdef ID
varying mediump vec4 v_id;
#endif // ID

void main()
{
  mediump float dist = length(v_offset);

  mediump float alpha = smoothstep(0.0, -v_blur, dist - 1.0);

  lowp float color_mix_ratio = v_stroke_width < 0.01 ? 0.0 : smoothstep(-v_blur, 0.0, dist - v_radius / (v_radius + v_stroke_width));

  gl_FragColor = alpha * mix(v_color, v_stroke_color, color_mix_ratio);

#ifdef ID
  if (gl_FragColor.a < 1.0 / 255.0) {
    discard;
  }
  gl_FragColor = v_id;
#endif // ID
}
