attribute vec2 a_pos;
attribute vec2 a_vertexOffset;

uniform highp mat4 u_transformMatrix;
uniform highp mat4 u_extrudeMatrix;
uniform highp vec2 u_normalized_origin;
uniform highp float u_depth;
// The width/height of the screen
uniform mediump vec2 u_screen;
// u_size is the diameter of the join in tile units
uniform mediump float u_size;

varying mediump vec2 v_fragmentOffset;

void main()
{
  // calculate the offset in pixels from the join's center to the vertex
  highp vec2 dist = u_size * a_vertexOffset;

  // calculate the position of the join's center in normalized coordinates
  highp vec4 center_pos = vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(a_pos, 0.0, 1.0);

  // offset in normalized display units
  highp vec4 vertex_offset = u_extrudeMatrix * vec4(dist, 0.0, 0.0);

  // calculate the vertex offset in windows coordinates
  v_fragmentOffset = u_screen * vertex_offset.xy;

  // finally calculate the vertex position
  gl_Position = center_pos + vertex_offset;
}
