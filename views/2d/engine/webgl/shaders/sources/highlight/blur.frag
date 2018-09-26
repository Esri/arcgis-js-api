// A gaussian blur shader. It blurs the alpha channel of its input
// according to 4 different sigma and stores the results into the
// four channel of the target framebuffer.

// It is intended to be called twice; the first time to perform an
// horizontal blur, and a second time to perform a vertical blur.

// This shader is used to turn the highlight mask into a highlight
// map. The highlight map is an approximation of the signed distance
// field of the mask.


// Interpolated texture coordinates.
varying mediump vec2 v_texcoord;

// Blur direction information. There are two possible
// configurations that the host code can use.
//  - [1, 0, 1/WIDTH, 0] Used when blurring horizontally. In this
//    case u_direction[0] = 1 is expressed in pixel and is fed to
//    the gauss function to produce the value of the gaussian weight
//    for that pixel, while u_direction[2] = 1/WIDTH is in texel units
//    and is used to sample the right texel from the texture map.
//  - [0, 1, 0, 1/HEIGHT] Used when blurring vertically. In this
//    case u_direction[1] = 1 is expressed in pixel and is fed to
//    the gauss function to produce the value of the gaussian weight
//    for that pixel, while u_direction[3] = 1/HEIGHT is in texel units
//    and is used to sample the right texel from the texture map.
uniform mediump vec4 u_direction;

// Source to destination channel selection matrix.
uniform mediump mat4 u_channelSelector;

// The highlight map is obtained by blurring the alpha channel of the highlight
// mask accroding to these 4 values of the gaussian's sigma parameter.
uniform mediump vec4 u_sigmas;

// This is the highlight mask if we have not blurred horizontally yet, otherwise
// it is the horizontally blurred highlight map and blurring it one more time
// vertically will complete the process.
uniform sampler2D u_texture;

// The gaussian kernel. Note that it lacks the normalization constant, because
// we want to store it unnormalized in the highlight map (i.e. having a peak
// value of 1). Note also that we are using the SIMD (single instruction, multiple
// data) capabilities of the GPU to compute four different gaussian kernels, one
// for each sigma.
mediump vec4 gauss(mediump vec2 dir) {
  return exp(-dot(dir, dir) / (2.0 * u_sigmas * u_sigmas));
}

mediump vec4 selectChannel(mediump vec4 sample) {
  return u_channelSelector * sample;
}

// Sample the input texture and accumulated its gaussian weighted value and the
// total weight.
void accumGauss(mediump float i, inout mediump vec4 tot, inout mediump vec4 weight) {
  // Computes the gaussian weights, one for each sigma.
  // Note that u_direction.xy is [1, 0] when blurring horizontally and [0, 1] when blurring vertically.
  mediump vec4 w = gauss(i * u_direction.xy);

  // Accumumates the values.
  // Note that u_direction.xy is [1/WIDTH, 0] when blurring horizontally and [0, 1/HEIGHT] when blurring vertically.
  tot += selectChannel(texture2D(u_texture, v_texcoord + i * u_direction.zw)) * w;

  // Accumulates the weights.
  weight += w;
}

void main(void) {
  // Initialize accumulated values and weights to zero.
  mediump vec4 tot = vec4(0.0, 0.0, 0.0, 0.0);
  mediump vec4 weight = vec4(0.0, 0.0, 0.0, 0.0);

  // Accumulates enough samples. These will be taken
  // horizontally or vertically depending on the value
  // of u_direction.
  accumGauss(-5.0, tot, weight);
  accumGauss(-4.0, tot, weight);
  accumGauss(-3.0, tot, weight);
  accumGauss(-2.0, tot, weight);
  accumGauss(-1.0, tot, weight);
  accumGauss(0.0, tot, weight);
  accumGauss(1.0, tot, weight);
  accumGauss(2.0, tot, weight);
  accumGauss(3.0, tot, weight);
  accumGauss(4.0, tot, weight);
  accumGauss(5.0, tot, weight);

  // Compute blurred values.
  mediump vec4 rgba = tot / weight;

  // Return the values. Note that each channel will contain
  // the result of a different blur operation, one for each
  // of the four chosen sigma.
  gl_FragColor = vec4(rgba);
}
