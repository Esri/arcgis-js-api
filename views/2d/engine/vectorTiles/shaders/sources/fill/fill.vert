precision mediump float;

attribute vec2 a_pos;

uniform highp mat3 u_dvsMat3;         // premultiplies DisplayMat3 * ViewMat3 * ScreenMat3
uniform highp mat3 u_displayMat3;     // DisplayMat3
uniform mediump float u_depth;
uniform mediump vec2 u_fillTranslation;

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

  vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(u_fillTranslation, 0.0);
  gl_Position = vec4(pos.xy, u_depth, 1.0);
}
