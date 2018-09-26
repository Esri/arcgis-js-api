// Identity vertex shader that outputs an untransformed 2-D vertex
// and passes its texture coordinates unchanged to the interpolator.

// Vertex position.
attribute mediump vec2 a_position;

// Texture coordinates.
attribute mediump vec2 a_texcoord;

// Texture coordinates to be interpolated.
varying mediump vec2 v_texcoord;

void main(void) {
  // Pass the position unchanged.
  gl_Position = vec4(a_position, 0.0, 1.0);

  // Pass the texture coordinates unchanged.
  v_texcoord = a_texcoord;
}
