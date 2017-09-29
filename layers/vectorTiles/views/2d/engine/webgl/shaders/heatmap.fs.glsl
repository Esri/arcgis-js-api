	precision mediump float;

	uniform lowp sampler2D u_texture;
	uniform lowp float u_opacity;
	uniform mediump vec2 u_minmax;
	uniform lowp sampler2D u_gradient;

	varying mediump vec2 v_uv;
  varying mediump float v_slope;

	vec4 getColor(float intensity) {
	  float normalizedIntensity = clamp((intensity - u_minmax.x) * v_slope, 0.0, 1.0);

		return texture2D(u_gradient, vec2(0.5, normalizedIntensity));
  }

	void main() {
	// sample the intnsity value
		lowp vec4 color = texture2D(u_texture, v_uv);

    // interpolate the color from the ramp using the intensity value
		gl_FragColor = getColor(color.r) *  u_opacity;
	}
