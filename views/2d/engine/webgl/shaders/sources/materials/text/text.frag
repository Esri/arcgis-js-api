precision mediump float;

#include <materials/text/common.glsl>

uniform lowp sampler2D u_texture;

void main()
{
  // read the distance from the SDF texture
  lowp float dist = texture2D(u_texture, v_tex).a;

  // the edge distance if a factor of the outline width
  // We cap this to 0.25 to prevent this from becomming negative / running into the glyph boundaries
  float glyphEdgeDistance = max(0.75 - v_edgeDistanceOffset, 0.25);

  #ifdef HIGHLIGHT
    glyphEdgeDistance /= 2.0;
  #endif

  // use a smooth-step in order to calculate the geometry of the shape given by the distance field
  lowp float alpha = smoothstep(glyphEdgeDistance - v_antialiasingWidth, glyphEdgeDistance + v_antialiasingWidth, dist) * v_opacity;

  gl_FragColor = alpha * v_color;

#ifdef ID
  if (gl_FragColor.a < 1.0 / 255.0) {
    discard;
  }
  gl_FragColor = v_id;
#endif // ID
}
