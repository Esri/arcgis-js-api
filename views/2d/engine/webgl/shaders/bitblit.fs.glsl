	uniform lowp sampler2D u_tex;
	uniform lowp float u_opacity;

	varying mediump vec2 v_uv;

	void main() {
		lowp vec4 color = texture2D(u_tex, v_uv);

    // Note: output in pre-multiplied alpha for correct alpha compositing
		gl_FragColor = color *  u_opacity;
	}
