precision lowp float;

uniform lowp sampler2D u_texture;

varying mediump vec4 v_color;
varying mediump float v_antialiasingWidth;
varying mediump float v_edgeDistanceOffset;
varying mediump vec2 v_tex;
varying lowp float v_transparency;

#ifdef ID
varying highp vec4 v_id;
#endif // ID

void main()
{
  // read the distance from the SDF texture
  lowp float dist = texture2D(u_texture, v_tex).a;

  // the edge distance if a factor of the outline width
  float glyphEdgeDistance = 0.75 - v_edgeDistanceOffset;

  // use a smooth-step in order to calculate the geometry of the shape given by the distance field
  lowp float alpha = smoothstep(glyphEdgeDistance - v_antialiasingWidth, glyphEdgeDistance + v_antialiasingWidth, dist) * v_transparency;

  gl_FragColor = alpha * v_color;

#ifdef ID
  if (gl_FragColor.a < 1.0 / 255.0) {
    discard;
  }
  gl_FragColor = v_id;
#endif // ID
}
