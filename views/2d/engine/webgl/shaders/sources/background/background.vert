attribute vec2 a_pos;

uniform highp mat3 u_dvsMat3;
uniform mediump float u_coord_range;
uniform mediump float u_depth;

void main() {
  vec3 v_pos = u_dvsMat3 * vec3(u_coord_range * a_pos, 1.0);
  gl_Position = vec4(v_pos.xy, 0.0, 1.0);
}
