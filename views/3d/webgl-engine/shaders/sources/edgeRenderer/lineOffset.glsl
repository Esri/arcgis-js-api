#include <util/encoding.glsl>

// Sketch

#if (MODE == MODE_UBER || MODE == MODE_SKETCH)

  uniform sampler2D uStrokesTexture;
  uniform float uStrokesNormalizationScale;

  varying vec2 vStrokeUV;

  float calculateLineOffsetSketch() {
    float offsetNorm = rgba2float(texture2D(uStrokesTexture, vStrokeUV));
    return (offsetNorm - 0.5) * uStrokesNormalizationScale;
  }

  float calculateLinePressureSketch() {
    return rgba2float(texture2D(uStrokesTexture, vStrokeUV + vec2(0, 0.5)));
  }

#endif

#if (MODE == MODE_SKETCH)

  float calculateLineOffset() {
    return calculateLineOffsetSketch();
  }

  float calculateLinePressure() {
    return calculateLinePressureSketch();
  }

#endif

// Solid

#if (MODE == MODE_UBER || MODE == MODE_SOLID)

  float calculateLineOffsetSolid() {
    return 0.0;
  }

  float calculateLinePressureSolid() {
    return 1.0;
  }

#endif

#if (MODE == MODE_SOLID)

  float calculateLineOffset() {
    return calculateLineOffsetSolid();
  }

  float calculateLinePressure() {
    return calculateLinePressureSolid();
  }

#endif

// Uber

#if (MODE == MODE_UBER)
  varying float vType;

  float calculateLineOffset() {
    if (vType <= 0.0) {
      return calculateLineOffsetSketch();
    }
    else {
      return calculateLineOffsetSolid();
    }
  }

  float calculateLinePressure() {
    if (vType <= 0.0) {
      return calculateLinePressureSketch();
    }
    else {
      return calculateLinePressureSolid();
    }
  }
#endif
