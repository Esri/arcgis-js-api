precision mediump float;

#include <materials/label/common.glsl>

uniform mediump sampler2D u_referenceTex;
uniform mediump vec2 u_screenSize;
uniform highp float u_pixelRatio;
uniform lowp sampler2D u_texture;

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
  // We cap this to 0.25 to prevent this from becomming negative / running into the glyph boundaries
  float glyphEdgeDistance = max(0.75 - v_edgeDistanceOffset, 0.25);

  // use a smooth-step in order to calculate the geometry of the shape given by the distance field
  lowp float sdfAlpha = smoothstep(glyphEdgeDistance - v_antialiasingWidth, glyphEdgeDistance + v_antialiasingWidth, dist);

  gl_FragColor = fadeAlpha * sdfAlpha * v_color;
#endif
}
