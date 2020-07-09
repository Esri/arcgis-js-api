precision mediump float;

attribute vec2 a_pos;

uniform highp mat3 u_dvsMat3;      // premultiplies DisplayMat3 * ViewMat3 * ScreenMat3
uniform highp vec2 u_coordScale;
uniform highp float u_scale;
uniform highp vec2 u_offset;

varying highp vec2 v_texcoord;

void main()
{
  v_texcoord = a_pos * u_scale + u_offset;
  gl_Position = vec4(u_dvsMat3 * vec3(a_pos * u_coordScale, 1.0), 1.0);
}
