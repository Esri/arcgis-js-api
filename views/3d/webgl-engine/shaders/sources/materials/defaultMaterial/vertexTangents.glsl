#if defined(VERTEX_SHADER)

  #if defined(VERTEX_TANGENTS)
    attribute vec4 aTangent;
    varying vec4 vTangent;

    void transformVertexTangent(mat3 modelTransformForNormals) {
      vTangent.xyz = modelTransformForNormals * aTangent.xyz;
      vTangent.w = aTangent.w;
    }
  #endif // VERTEX_TANGENTS

#elif defined(FRAGMENT_SHADER)

  #if defined(VERTEX_TANGENTS)
    varying vec4 vTangent;

    #if defined(WINDINGORDERDOUBLESIDED)
      mat3 computeTangentSpace(vec3 normal) {
        float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
        vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
        vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
        return mat3(tangent, bitangent, normal);
      }
    #else // WINDINGORDERDOUBLESIDED
      mat3 computeTangentSpace(vec3 normal) {
        float tangentHeadedness = vTangent.w;
        vec3 tangent = normalize(vTangent.xyz);
        vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
        return mat3(tangent, bitangent, normal);
      }
    #endif // WINDINGORDERDOUBLESIDED
  #endif // VERTEX_TANGENTS

#endif // VERTEX_SHADER
