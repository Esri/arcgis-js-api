precision mediump float;

uniform sampler2D u_colorTexture;
varying vec2 v_uv;
uniform vec2 u_texSize;


vec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);

mat3 G[2];

const mat3 g0 = mat3( 1.0, 2.0, 1.0, 0.0, 0.0, 0.0, -1.0, -2.0, -1.0 );
const mat3 g1 = mat3( 1.0, 0.0, -1.0, 2.0, 0.0, -2.0, 1.0, 0.0, -1.0 );


void main() {
  mat3 I;
  float cnv[2];
  vec3 sample;

  G[0] = g0;
  G[1] = g1;

  /* fetch the 3x3 neighbourhood and use the RGB vector's length as intensity value */
  for (float i = 0.0; i < 3.0; i++) {
    for (float j = 0.0; j < 3.0; j++) {
      sample = texture2D( u_colorTexture, v_uv + texel * vec2(i-1.0,j-1.0) ).rgb;
      I[int(i)][int(j)] = length(sample);
    }
  }

  /* calculate the convolution values for all the masks */
  for (int i = 0; i < 2; i++) {
    float dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);
    cnv[i] = dp3 * dp3;
  }

  gl_FragColor = vec4(vec3(0.5 * sqrt(cnv[0] * cnv[0] + cnv[1] * cnv[1])), texture2D(u_colorTexture, v_uv).a);
}
