uniform lowp vec4 u_background;
uniform mediump sampler2D u_readbackTexture;
uniform mediump sampler2D u_maskTexture;
uniform mediump sampler2D u_overlyTexture;

varying mediump vec2 v_texCoord;

void main(void)
{
  lowp vec4 color = texture2D(u_readbackTexture, v_texCoord);
  color = color + (1.0 - color.a) * u_background;

  // calculate the grayscale value of the mask:
  lowp vec4 mask_color = texture2D(u_maskTexture, v_texCoord);
  lowp float gray = 1.0 - dot(mask_color, vec4(0.3, 0.59, 0.11, 0));
  // make all the map color outside the mask black
  color *= gray;

  lowp vec4 overley_color = texture2D(u_overlyTexture, v_texCoord);

  // premultiply the overlay color
  overley_color.rgb *= overley_color.a;
  gl_FragColor = overley_color + (1.0 - overley_color.a) * color;
}
