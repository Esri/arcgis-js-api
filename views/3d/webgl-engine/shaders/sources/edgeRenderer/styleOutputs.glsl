#if (MODE == MODE_UBER || MODE == MODE_SKETCH)

  uniform vec2 uStrokesTextureScale;
  uniform float uStrokesLog2Resolution;
  uniform float uStrokeVariants;

  varying vec2 vStrokeUV;
  varying float vLineIndex;

  void calculateStyleOutputsSketch(float lineLength, UnpackedAttributes unpackedAttributes) {
    vec2 sidenessNorm = unpackedAttributes.sidenessNorm;

    float lineIndex = clamp(ceil(log2(lineLength)), 0.0, uStrokesLog2Resolution);

    vStrokeUV = vec2(exp2(lineIndex) * sidenessNorm.y, lineIndex * uStrokeVariants + aVariantStroke + 0.5) * uStrokesTextureScale;
    vStrokeUV.x += aVariantOffset;

    vLineIndex = lineIndex;
  }
#endif

#if (MODE == MODE_SOLID)
  void calculateStyleOutputs(vec4 viewPosV0, vec4 viewPosV1, vec4 worldPosV0, vec4 worldPosV1, vec4 projPos, vec3 worldNormal, UnpackedAttributes unpackedAttributes) {
  }
#elif (MODE == MODE_SKETCH)
  void calculateStyleOutputs(vec4 viewPosV0, vec4 viewPosV1, vec4 worldPosV0, vec4 worldPosV1, vec4 projPos, vec3 worldNormal, UnpackedAttributes unpackedAttributes) {
    calculateStyleOutputsSketch(vLineLengthPixels, unpackedAttributes);
  }
#elif (MODE == MODE_UBER)
  varying float vType;

  void calculateStyleOutputs(vec4 viewPosV0, vec4 viewPosV1, vec4 worldPosV0, vec4 worldPosV1, vec4 projPos, vec3 worldNormal, UnpackedAttributes unpackedAttributes) {
    vType = unpackedAttributes.type;

    if (unpackedAttributes.type <= 0.0) {
      calculateStyleOutputsSketch(vLineLengthPixels, unpackedAttributes);
    }
  }
#endif
