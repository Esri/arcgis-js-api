/*
 * Transform the position using the view and the projection matrix.
 */
vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
  // Make sure the order of operations is the same as in transformPositionWithDepth. 
  return proj * (view * vec4(pos, 1.0));
}

/*
 * Transform the position using the view and the projection matrix.
 * Also returns the linear depth.
 */
vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
  vec4 eye = view * vec4(pos, 1.0);
  depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
  return proj * eye;
}