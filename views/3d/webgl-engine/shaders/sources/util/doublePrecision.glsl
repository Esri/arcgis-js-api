// based on https://www.thasler.com/blog/blog/glsl-part2-emu
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
  vec3 t1 = hiA + hiB;
  vec3 e = t1 - hiA;
  vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
  return t1 + t2;
}
