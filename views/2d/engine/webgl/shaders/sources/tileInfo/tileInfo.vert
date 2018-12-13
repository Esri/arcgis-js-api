attribute vec2 a_pos;

uniform highp mat3 u_dvsMat3;

uniform mediump float u_depth;
uniform mediump float u_coord_ratio;
uniform mediump vec2 u_delta; // in tile coordinates
uniform mediump vec2 u_dimensions; // in tile coordinates

varying mediump vec2 v_tex;

void main() {
  mediump vec2 offset = u_coord_ratio * vec2(u_delta + a_pos * u_dimensions);
  vec3 v_pos = u_dvsMat3 * vec3(offset, 1.0);
  
  gl_Position = vec4(v_pos.xy, 0.0, 1.0);

  v_tex = a_pos;
}
