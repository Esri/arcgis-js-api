precision mediump float;

#include <materials/label/common.glsl>

uniform mediump vec2 u_screenSize;
uniform highp float u_pixelRatio;
uniform lowp sampler2D u_texture;

void main()
{
  mediump vec2 refTextPos = gl_FragCoord.xy / (u_pixelRatio * u_screenSize.xy);

  // read the distance from the SDF texture
  lowp float dist = texture2D(u_texture, v_tex).a;

  // the edge distance if a factor of the outline width
  // We cap this to 0.25 to prevent this from becomming negative / running into the glyph boundaries
  float glyphEdgeDistance = max(0.75 - v_edgeDistanceOffset, 0.25);

  // use a smooth-step in order to calculate the geometry of the shape given by the distance field
  lowp float sdfAlpha = smoothstep(glyphEdgeDistance - v_antialiasingWidth, glyphEdgeDistance + v_antialiasingWidth, dist);

  gl_FragColor = v_animation.r * sdfAlpha * v_color;
}
