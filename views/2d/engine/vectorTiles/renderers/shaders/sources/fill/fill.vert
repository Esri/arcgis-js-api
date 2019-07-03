precision mediump float;

attribute vec2 a_pos;

uniform highp mat4 u_transformMatrix;
uniform highp vec2 u_normalized_origin;
uniform mediump float u_depth;

#ifdef PATTERN
uniform mediump mat3 u_pattern_matrix;
varying mediump vec2 v_tileTextureCoord;
#endif // PATTERN

#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif // ID

#ifdef DD
attribute vec4 a_color;
#endif // DD
uniform lowp vec4 u_color;
varying lowp vec4 v_color;

void main()
{
#ifdef DD
  v_color = a_color * u_color;
#else
  v_color = u_color;
#endif // DD

#ifdef ID
  v_id = u_id / 255.0;
#endif // ID

#ifdef PATTERN
  // calculate the texture coordinates of the current vertex. It will of course get interpolated.
  // The pattern matrix is a 3x3 scale matrix which 'tiles' the texture inside the tile, translating from tile coordinates
  // (-4k to 8k -1) to texture coordinates.
  v_tileTextureCoord = (u_pattern_matrix * vec3(a_pos, 1.0)).xy;
#endif // PATTERN

  gl_Position = vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(a_pos, 0, 1.0);
}
