vec4 highlightData(vec4 fragCoord, sampler2D depthTex, vec4 viewportPixelSize) {
  float sceneDepth = texture2D(depthTex, (fragCoord.xy - viewportPixelSize.xy) * viewportPixelSize.zw).r;
  if (fragCoord.z > sceneDepth + 5e-7) {
    return vec4(1.0, 1.0, 0.0, 1.0);
  }
  else {
    return vec4(1.0, 0.0, 1.0, 1.0);
  }
}
