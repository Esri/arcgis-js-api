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
  #else


    //***********************************************************************************************************************************
    //****  Temporary solution to calculate tangents, based on                                                                       ****
    //****  http://www.opengl-tutorial.org/intermediate-tutorials/tutorial-13-normal-mapping/#computing-the-tangents-and-bitangents  ****
    //***********************************************************************************************************************************
    mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {

      vec3 Q1 = dFdx(pos);
      vec3 Q2 = dFdy(pos);

      vec2 stx = dFdx(st);
      vec2 sty = dFdy(st);

      float det = stx.t * sty.s - sty.t * stx.s;

      vec3 T = stx.t * Q2 - sty.t * Q1; // compute tangent
      T = T - normal * dot(normal, T); // orthogonalize tangent
      T *= inversesqrt(max(dot(T,T), 1.e-10)); // "soft" normalize - goes to 0 when T goes to 0 
      vec3 B = sign(det) * cross(normal, T); // assume normal is normalized, B has the same lenght as B
      return mat3(T, B, normal); // T and B go to 0 when the tangent space is not well defined by the uv coordinates
    }
  #endif // VERTEX_TANGENTS

#endif // VERTEX_SHADER
