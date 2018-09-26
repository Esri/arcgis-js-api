// Solid

#if (MODE == MODE_UBER || MODE == MODE_SOLID)

  float calculateLineAmplitudeSolid() {
    return 0.0;
  }

#endif

#if (MODE == MODE_SOLID)

  float calculateLineAmplitude(UnpackedAttributes unpackedAttributes) {
    return calculateLineAmplitudeSolid();
  }

#endif

// Sketch

#if (MODE == MODE_UBER || MODE == MODE_SKETCH)

  uniform float uStrokesAmplitude;

  float calculateLineAmplitudeSketch() {
    return uStrokesAmplitude;
  }

#endif

#if (MODE == MODE_SKETCH)

  float calculateLineAmplitude(UnpackedAttributes unpackedAttributes) {
    return calculateLineAmplitudeSketch();
  }

#endif

// Uber

#if (MODE == MODE_UBER)

  float calculateLineAmplitude(UnpackedAttributes unpackedAttributes) {
    float type = unpackedAttributes.type;

    if (type <= 0.0) {
      return calculateLineAmplitudeSketch();
    }
    else {
      return calculateLineAmplitudeSolid();
    }
  }

#endif
