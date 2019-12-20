attribute vec2 a_pos;
attribute vec2 a_offset;
attribute vec2 a_xnormal;

#ifdef DD
attribute vec4 a_color;
#endif // DD
uniform lowp vec4 u_color;
varying lowp vec4 v_color;

#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif // ID

uniform highp mat3 u_dvsMat3;         // premultiplies DisplayMat3 * ViewMat3 * ScreenMat3
uniform highp mat3 u_displayMat3; // DisplayMat3 * ViewMat3
uniform mediump vec2 u_fillTranslation; // "outline-translate" given by the line style layer spec (pixels)
uniform mediump float u_depth;
uniform mediump float u_outline_width;

varying lowp vec2 v_normal;

const float scale = 1.0 / 15.0;

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

  v_normal = a_xnormal;

  // calculate the relative distance from the centerline to the edge of the line. Since offset is given in integers (for the
  // sake of using less attribute memory, we need to scale it back to the original range of ~ 0: 1)
  mediump vec2 dist = u_outline_width * scale * a_offset;
  mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(dist + u_fillTranslation, 0.0);
  gl_Position = vec4(pos.xy, u_depth, 1.0);
}
