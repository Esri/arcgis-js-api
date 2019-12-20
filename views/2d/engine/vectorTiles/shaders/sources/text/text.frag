uniform lowp sampler2D u_texture;
uniform mediump float u_edgeDistance;

varying lowp vec2 v_tex;
varying lowp float v_transparency;
varying lowp vec4 v_color;
varying mediump float v_edgeWidth;
varying mediump float v_edgeDistance;

#ifdef ID
varying mediump vec4 v_id;
#endif // ID

// this is taken from http://www.valvesoftware.com/publications/2007/SIGGRAPH2007_AlphaTestedMagnification.pdf
// and https://www.mapbox.com/blog/text-signed-distance-fields/
// http://metalbyexample.com/rendering-text-in-metal-with-signed-distance-fields/

void main()
{
  // read the distance from the SDF texture
  lowp float dist = texture2D(u_texture, v_tex).a;

  // use a smooth-step in order to calculate the geometry of the shape given by the distance field
  mediump float alpha = smoothstep(v_edgeDistance - v_edgeWidth, v_edgeDistance + v_edgeWidth, dist) * v_transparency;

  gl_FragColor = alpha * v_color;

#ifdef ID
  if (gl_FragColor.a < 1.0 / 255.0) {
    discard;
  }
  gl_FragColor = v_id;
#endif // ID
}
