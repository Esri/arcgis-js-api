uniform highp mat4 u_transformMatrix;
uniform highp vec2 u_normalized_origin;
uniform mediump float u_depth;
uniform mediump mat3 u_pattern_matrix; // can we use meduim precision??

attribute vec2 a_pos;

varying mediump vec2 v_tileTextureCoord;

void main()
{
  gl_Position = vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(a_pos, 0.0, 1.0);
  // calculate the texture coordinates of the current vertex. It will of course get interpolated.
  // The pattern matrix is a 3x3 scale matrix which 'tiles' the texture inside the tile, translating from tile coordinates
  // (-4k to 8k -1) to texture coordinates.
  v_tileTextureCoord = (u_pattern_matrix * vec3(a_pos, 1.0)).xy;
}
