precision lowp float;

#ifdef PATTERN
uniform lowp sampler2D u_texture;

varying mediump vec4 v_tlbr;
varying mediump vec2 v_tileTextureCoord;
#endif // PATTERN

#ifdef ID
varying highp vec4 v_id;
#endif // ID

varying lowp vec4 v_color;
varying lowp float v_opacity;

void main()
{
#ifdef PATTERN
  // normalize the calculated texture coordinate such that it fits in the range of 0 to 1.
  mediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);
  // interpolate the image coordinate between the top-left and the bottom right to get the actual position to sample.
  // after normalizing the position, we get a value ranging between 0 and 1 which refers to the entire texture, however
  // we need to only sample from area that has our sprite in the mosaic.
  mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
  // sample the sprite mosaic
  lowp vec4 color = texture2D(u_texture, samplePos);
  gl_FragColor = v_opacity * v_color * color;
#else
  gl_FragColor = v_opacity * v_color;
#endif // PATTERN

#ifdef HIGHLIGHT
  gl_FragColor.a = step(1.0 / 255.0, gl_FragColor.a);
#endif // HIGHLIGHT

#ifdef ID
  //if (gl_FragColor.a < 1.0 / 255.0) {
  //  discard;
  //}
  gl_FragColor = v_id;
#endif // ID
}
