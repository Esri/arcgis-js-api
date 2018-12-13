precision mediump float;

// Vertex position. Assumed normalized in the [-1, 1] range.
attribute vec2 a_position;

// Texture coordinates. Assumed normalized in the [-1, 1] range.
attribute vec2 a_texcoord;

// Transform matrix.
uniform mat4 u_transform;

// Scales applied to position and texture coordinates to get the
// "unnormalized" value.
uniform float u_positionScale;
uniform float u_texcoordScale;

// Output texture coordinates, for interpolation.
varying vec2 v_texcoord;

void main(void) {
  gl_Position = u_transform * vec4(a_position * u_positionScale, 0.0, 1.0);
  v_texcoord = a_texcoord * u_texcoordScale;
}
