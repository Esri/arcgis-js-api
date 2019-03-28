#if defined(TEXTURE_NORMALS)
  uniform sampler2D texNormal;

  vec3 computeTextureNormal(mat3 tangentSpace) {
    vec3 rawNormal = texture2D(texNormal, vtc).rgb * 2.0 - 1.0;
    return tangentSpace * rawNormal;
  }
#endif