#ifdef REQUIRES_FLOAT_OPERATIONS_FIX

/**
 * The dpAdd function requires precise floating point operation semantics and order of execution.
 * Unfortunately, glsl does not give any guarantees over this and optimizing compilers are free
 * for example to re-order operations that look algebraically equivalent. When this happens,
 * the double precision floating point arithmetic (especially the parts that deal with operation
 * precision) no longer work correctly which can ultimately cause jitter in object positions.
 *
 * This workaround uses the `mix` function to add or subtract two vectors which makes it impossible
 * for the compiler to re-order the operations. This obviously is not as efficient but there should
 * be good hardware support for the `mix` operation and no branching involved.
 *
 * See also:
 *   - https://stackoverflow.com/questions/35497160/glsl-compiler-optimizations-lead-to-incorrect-behavior-with-floating-point-opera
 */

vec3 dpPlusFrc(vec3 a, vec3 b) {
  return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}

vec3 dpMinusFrc(vec3 a, vec3 b) {
  return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}

// based on https://www.thasler.com/blog/blog/glsl-part2-emu
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
  vec3 t1 = dpPlusFrc(hiA, hiB);
  vec3 e = dpMinusFrc(t1, hiA);
  vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
  return t1 + t2;
}

#else

vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
  vec3 t1 = hiA + hiB;
  vec3 e = t1 - hiA;
  vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
  return t1 + t2;
}

#endif
