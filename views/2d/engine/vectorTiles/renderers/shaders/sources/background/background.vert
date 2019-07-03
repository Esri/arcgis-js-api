precision mediump float;

attribute vec2 a_pos;

#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif // ID

uniform highp mat4 u_transformMatrix;
uniform mediump vec2 u_normalized_origin;
uniform mediump float u_coord_range;
uniform mediump float u_depth;

#ifdef PATTERN
uniform mediump mat3 u_pattern_matrix; // can we use medium precision?
varying mediump vec2 v_tileTextureCoord;
#endif // PATTERN

void main() {
  gl_Position = vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(u_coord_range * a_pos, 0.0, 1.0);

#ifdef PATTERN
  // calculate the texture coordinates of the current vertex. It will of course get interpolated.
  // The pattern matrix is a 3x3 scale matrix which 'tiles' the texture inside the tile, translating from tile coordinates
  v_tileTextureCoord = (u_pattern_matrix * vec3(a_pos, 1.0)).xy;
#endif // PATTERN

#ifdef ID
  v_id = u_id / 255.0;
#endif // ID
}
