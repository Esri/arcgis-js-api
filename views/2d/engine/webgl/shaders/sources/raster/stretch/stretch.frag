precision mediump float;

// texture coordinates.
varying highp vec2 v_texcoord;

#include <raster/common/common.glsl>

// min cut off pixel values
uniform float u_minCutOff[3];

// max cut off pixel values
uniform float u_maxCutOff[3];

// output mins
uniform float u_minOutput;

// output maxes
uniform float u_maxOutput;

// scaling factor
uniform float u_factor[3];

// whether to use gamma stretch
uniform bool u_useGamma;

// gamma values
uniform float u_gamma[3];

// gamma corrections
uniform float u_gammaCorrection[3];

#include <raster/lut/colorize.glsl>

float stretchOneValue(float val, float minCutOff, float maxCutOff, float minOutput, float maxOutput, float factor, bool useGamma, float gamma, float gammaCorrection) {
  // clamp values
  if (val >= maxCutOff) {
    return maxOutput;
  } else if (val <= minCutOff) {
    return minOutput;
  }

  // stretch a single value based on whether to use gamma
  float stretchedVal;
  if (useGamma) {
  	float tempf = 1.0;
	  float outRange = maxOutput - minOutput;
	  float relativeVal = (val - minCutOff) / (maxCutOff - minCutOff);
	  if (gamma > 1.0) {
      tempf -= pow(1.0 / outRange, relativeVal * gammaCorrection);
    }
    stretchedVal = (tempf * outRange * pow(relativeVal, 1.0 / gamma) + minOutput) / 255.0;
  } else {
    stretchedVal = minOutput + (val - minCutOff) * factor;
  }
  return stretchedVal;
}

void main() {
  vec2 pixelLocation = getPixelLocation(v_texcoord);
  if (isOutside(pixelLocation)) {
     gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
     return;
  }

  vec4 currentPixel = getPixel(pixelLocation);
  if (currentPixel.a == 0.0) {
    gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
    return;
  }

  if (u_bandCount == 1) {
    float grayVal = stretchOneValue(currentPixel.r, u_minCutOff[0], u_maxCutOff[0], u_minOutput, u_maxOutput, u_factor[0], u_useGamma, u_gamma[0], u_gammaCorrection[0]);
#ifdef APPLY_COLORMAP
      gl_FragColor = colorize(vec4(grayVal, grayVal, grayVal, currentPixel.a * u_opacity), !u_useGamma);
#else
      gl_FragColor = vec4(grayVal, grayVal, grayVal, 1.0) * currentPixel.a * u_opacity;
#endif
  } else {
    float redVal = stretchOneValue(currentPixel.r, u_minCutOff[0], u_maxCutOff[0], u_minOutput, u_maxOutput, u_factor[0], u_useGamma, u_gamma[0], u_gammaCorrection[0]);
    float greenVal = stretchOneValue(currentPixel.g, u_minCutOff[1], u_maxCutOff[1], u_minOutput, u_maxOutput, u_factor[1], u_useGamma, u_gamma[1], u_gammaCorrection[1]);
    float blueVal = stretchOneValue(currentPixel.b, u_minCutOff[2], u_maxCutOff[2], u_minOutput, u_maxOutput, u_factor[2], u_useGamma, u_gamma[2], u_gammaCorrection[2]);
    gl_FragColor = vec4(redVal, greenVal, blueVal, 1.0) * currentPixel.a * u_opacity;
  }
}
