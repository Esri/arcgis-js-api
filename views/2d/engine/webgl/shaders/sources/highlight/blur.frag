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
mediump vec4 gauss4(mediump vec2 dir) {
  return exp(-dot(dir, dir) / (2.0 * u_sigmas * u_sigmas));
}

// Same as above but uses only channel 3, aka `w`, aka `q`, aka `a`.
mediump float gauss1(mediump vec2 dir) {
  return exp(-dot(dir, dir) / (2.0 * u_sigmas[3] * u_sigmas[3]));
}

mediump vec4 selectChannel(mediump vec4 sample) {
  return u_channelSelector * sample;
}

// Sample the input texture and accumulated its gaussian weighted value and the
// total weight; operates on all four channels.
void accumGauss4(mediump float i, inout mediump vec4 tot, inout mediump vec4 weight) {
  // Computes the gaussian weights, one for each sigma.
  // Note that u_direction.xy is [1, 0] when blurring horizontally and [0, 1] when blurring vertically.
  mediump vec4 w = gauss4(i * u_direction.xy);

  // Accumumates the values.
  // Note that u_direction.xy is [1/WIDTH, 0] when blurring horizontally and [0, 1/HEIGHT] when blurring vertically.
  tot += selectChannel(texture2D(u_texture, v_texcoord + i * u_direction.zw)) * w;

  // Accumulates the weights.
  weight += w;
}

// Sample the input texture and accumulated its gaussian weighted value and the
// total weight; operates on a single channel.
void accumGauss1(mediump float i, inout mediump float tot, inout mediump float weight) {
  // Computes the gaussian weights, using only the last sigma.
  // Note that u_direction.xy is [1, 0] when blurring horizontally and [0, 1] when blurring vertically.
  mediump float w = gauss1(i * u_direction.xy);

  // Accumumates the values.
  // Note that u_direction.xy is [1/WIDTH, 0] when blurring horizontally and [0, 1/HEIGHT] when blurring vertically.
  tot += selectChannel(texture2D(u_texture, v_texcoord + i * u_direction.zw))[3] * w;

  // Accumulates the weights.
  weight += w;
}

void main(void) {
  // Initialize accumulated values and weights to zero.
  mediump float tot = 0.0;
  mediump float weight = 0.0;

  // Accumulates enough samples. These will be taken
  // horizontally or vertically depending on the value
  // of u_direction.
  accumGauss1(-4.0, tot, weight);
  accumGauss1(-3.0, tot, weight);
  accumGauss1(-2.0, tot, weight);
  accumGauss1(-1.0, tot, weight);
  accumGauss1(0.0, tot, weight);
  accumGauss1(1.0, tot, weight);
  accumGauss1(2.0, tot, weight);
  accumGauss1(3.0, tot, weight);
  accumGauss1(4.0, tot, weight);

  // Originally we were performing 4 blurs in parallel;
  // Now we store the only result in the alpha component.
  // dari8942: In theory we could disable writing to rgb
  // using a color mask but I don't really feel like messing
  // with that now.
  gl_FragColor = vec4(0.0, 0.0, 0.0, tot / weight);
}
