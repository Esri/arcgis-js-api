// Takes as input the highlight map, estimated the signed distance field,
// and shades the fragments according to their estimated distance from the
// edge of the highlighted feature.

// A shade texture is used to turn distance values into colors; the shade
// texture is basically a color gradient and is recomputed on the host
// every time that the user alters the highlight options.

// Interpolated texture coordinates.
varying mediump vec2 v_texcoord;

// The highlight map. Each channel is a blurred
// version of the alpha channel of the highlight mask.
//  - Channel 0 (red) corresponds to a gaussian blur with sigma = u_sigmas[0];
//  - Channel 1 (green) corresponds to a gaussian blur with sigma = u_sigmas[1];
//  - Channel 2 (blue) corresponds to a gaussian blur with sigma = u_sigmas[2];
//  - Channel 3 (alpha) corresponds to a gaussian blur with sigma = u_sigmas[3];
// As of today, only channel 3 is used for distance estimation.
// But the availability of different amounts of blur leaves the
// door open to multi-scale approaches.
uniform sampler2D u_texture;

// The highlight map was obtained by blurring the alpha channel of the highlight
// mask accroding to these 4 values of the gaussian's sigma parameter.
uniform mediump vec4 u_sigmas;

// A 1-D texture used to shade the highlight.
uniform sampler2D u_shade;

// The 1-D shade texture is spreaded between u_minMaxDistance[0] and u_minMaxDistance[1].
uniform mediump vec2 u_minMaxDistance;

// Signed distance estimation.
mediump float estimateDistance() {
  // Use the largest sigma and the corresponding distance value stored in the
  // last channel of the highlight map.
  mediump float sigma = u_sigmas[3];
  mediump float y = texture2D(u_texture, v_texcoord)[3];

  // Estimates the distance by linearization and local inversion around
  // the inflection point. The inflection point is in x = 0.
  const mediump float y0 = 0.5;                           // Value of the convolution at the inflection point.
  mediump float m0 = 1.0 / (sqrt(2.0 * 3.1415) * sigma);  // Slope of the convolution at the inflection point.
  mediump float d = (y - y0) / m0;                        // Inversion of a local linearization.

  // Return the estimated distance.
  return d;
}

// Shading based on estimated distance.
mediump vec4 shade(mediump float d) {
  // Maps the sampled distance from the [A, D] range (see HighlightRenderer::setHighlightOptions) to [0, 1].
  mediump float mappedDistance = (d - u_minMaxDistance.x) / (u_minMaxDistance.y - u_minMaxDistance.x);

  // Force to [0, 1]; it should not be necessary because the shade texture uses the CLAMP address mode, so
  // this should happen anyway internally to the sampler, but in practice it is needed to avoid weird
  // banding artifacts.
  // We don't really know if we need this or not.
  mappedDistance = clamp(mappedDistance, 0.0, 1.0);

  // Sample the 1-D shade texture on its center line (i.e. on t=0.5).
  return texture2D(u_shade, vec2(mappedDistance, 0.5));
}

void main(void) {
  // Estimate the distance.
  mediump float d = estimateDistance();

  // Shade the distance.
  gl_FragColor = shade(d);
}
