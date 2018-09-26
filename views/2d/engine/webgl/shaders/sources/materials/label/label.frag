precision lowp float;

uniform mediump sampler2D u_referenceTex;
uniform mediump vec2 u_screenSize;
uniform mediump float u_pixelRatio;

varying mediump float v_antialiasingWidth;
varying mediump float v_edgeDistanceOffset;
varying mediump vec2 v_tex;
varying lowp float v_transparency;

#ifdef ID
varying mediump float v_fadeStep;
#else
uniform lowp sampler2D u_texture;
varying mediump vec4 v_color;
#endif // ID

const vec3 epsilon = vec3(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0);

void main()
{
  mediump vec2 refTextPos = gl_FragCoord.xy / (u_pixelRatio * u_screenSize.xy);
  mediump vec4 referenceFragment = texture2D(u_referenceTex, refTextPos);
#ifdef ID
  mediump float alpha = clamp(referenceFragment.a + v_fadeStep, 0.0, 1.0);
  // fill the whole quad
  gl_FragColor = vec4(alpha);
#else
  // read the fade alpha
  lowp float fadeAlpha = referenceFragment.a;

  // read the distance from the SDF texture
  lowp float dist = texture2D(u_texture, v_tex).a;

  // the edge distance if a factor of the outline width
  float glyphEdgeDistance = 0.75 - v_edgeDistanceOffset;

  // use a smooth-step in order to calculate the geometry of the shape given by the distance field
  lowp float sdfAlpha = smoothstep(glyphEdgeDistance - v_antialiasingWidth, glyphEdgeDistance + v_antialiasingWidth, dist) * v_transparency;

  gl_FragColor = fadeAlpha * sdfAlpha * v_transparency * v_color;
#endif
}
