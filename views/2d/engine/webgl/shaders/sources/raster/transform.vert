precision mediump float;

// Vertex position. Assumed normalized in the [0, 1] range.
attribute vec2 a_position;

// Transform matrix.
uniform highp mat4 u_transform;

// Output texture coordinates, for interpolation.
varying highp vec2 v_texcoord;

void main(void) {
  gl_Position = u_transform * vec4((2.0 * a_position - 1.0), 0.0, 1.0);
  v_texcoord = a_position;
}
