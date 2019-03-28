precision mediump float;

attribute mediump vec2 a_pos; // encoded values are 0 and 1

uniform mediump vec2 u_drawPos; // the center position of the magnifier
uniform mediump float u_width; // the width of the magnifier in normalized display coords
uniform mediump float u_height; // the height of the magnifier in normalized display coords

varying mediump vec2 v_texCoord;


void main(void)
{
  v_texCoord = a_pos;
  vec2 coord = u_drawPos + vec2(a_pos - 0.5) * vec2(u_width, u_height);
  gl_Position = vec4(coord, 0.0, 1.0);
}
