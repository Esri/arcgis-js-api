precision lowp float;

#ifdef PATTERN
uniform mediump vec2 u_pattern_tl;
uniform mediump vec2 u_pattern_br;
uniform lowp sampler2D u_texture;
varying mediump vec2 v_tileTextureCoord;
#endif // PATTERN

#ifdef ID
varying mediump vec4 v_id;
#endif // ID

varying lowp vec4 v_color;

vec4 mixColors(vec4 color1, vec4 color2) {
  // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Alpha_blending)
  // we use pre-multiplied colors hence the need for this kind of mixing. At lease we save ourselves an extra division...
  float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);
  vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);

  return vec4(compositeColor, compositeAlpha);
}

void main()
{
#ifdef PATTERN
  // normalize the calculated texture coordinate such that it fits in the range of 0 to 1.
  mediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);

  // interpolate the image coordinate between the top-left and the bottom right to get the actual position to sample.
  // after normalizing the position, we get a value ranging between 0 and 1 which refers to the entire texture, however
  // we need to only sample from area that has our sprite in the mosaic.
  mediump vec2 samplePos = mix(u_pattern_tl, u_pattern_br, normalizedTextureCoord);

  // sample the sprite mosaic
  lowp vec4 color = texture2D(u_texture, samplePos);
  gl_FragColor = v_color[3] * color;
#else
  gl_FragColor = v_color;
#endif // PATTERN

#ifdef ID
  if (gl_FragColor.a < 1.0 / 255.0) {
    discard;
  }
  gl_FragColor = v_id;
#endif // ID
}
