attribute vec2 a_pos;
attribute vec2 a_offset;
attribute vec2 a_xnormal;

uniform highp mat4 u_transformMatrix;
uniform highp mat4 u_extrudeMatrix;
uniform highp vec2 u_normalized_origin;
uniform mediump float u_depth;
uniform mediump float u_outline_width;

varying lowp vec2 v_normal;

const float scale = 1.0 / 15.0;

void main()
{
  v_normal = a_xnormal;

   // calculate the relative distance from the centerline to the edge of the line. Since offset is given in integers (for the
    // sake of using less attribute memory, we need to scale it back to the original range of ~ 0: 1)
  mediump vec4 dist = vec4(u_outline_width * a_offset * scale, 0.0, 0.0);

  // Remove the texture normal bit of the position before scaling it with the
  // model/view matrix. Add the extrusion vector *after* the model/view matrix
  // because we're extruding the line in pixel space, regardless of the current
  // tile's zoom level.
  gl_Position = vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(a_pos, 0.0, 1.0) + u_extrudeMatrix * dist;
}
