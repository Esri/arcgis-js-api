uniform lowp sampler2D u_texture;
varying lowp vec2 v_tex;
varying lowp float v_transparency;

void main()
{
  lowp vec4 color = texture2D(u_texture, v_tex);
  gl_FragColor = v_transparency * color;
}
