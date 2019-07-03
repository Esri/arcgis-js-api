/*
*   This function return the local up vector depending on 
*   the viewing mode.
*/
vec3 getLocalUp(in vec3 pos, in vec3 origin) {
  #if VIEWING_MODE == VIEWING_MODE_GLOBAL
    return normalize(pos + origin);
  #else
    return vec3(0.0, 0.0, 1.0); // WARNING: up-axis dependent code
  #endif
}

/*
*  This function return the TBN matrix depending for local/global
*  viewing mode. In global mode the coordinate system up vector is 
*  used to find the bitangent. The bitanget together with the
*  vertex normal give the tangent. 
*  In local mode we assume that surfaces point in z direction,
*  therefore the tangent is always the render systems x axis. 
*/
mat3 getTBNMatrix(in vec3 n) {
  #if VIEWING_MODE == VIEWING_MODE_GLOBAL
    vec3 t = normalize(cross(vec3(0.0, 0.0, 1.0), n));
    vec3 b = normalize(cross(n, t));
    return mat3(t, b, n);
  #else
    vec3 t = vec3(1.0, 0.0, 0.0);
    vec3 b = normalize(cross(n, t));
    return mat3(t, b, n);
  #endif
}
