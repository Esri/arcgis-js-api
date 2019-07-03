precision mediump float;

uniform lowp sampler2D u_texture; // SDF texture
#ifdef SDF
uniform lowp vec4 u_color; // a color to override the one of the vertex
uniform lowp vec4 u_outlineColor;
uniform mediump float u_outlineSize;
#endif // SDF

varying mediump vec2 v_tex;
// the calculated transparency to be applied by the fragment shader. It is incorporating both the fade as well as the
// opacity of the layer given by the painter
varying lowp float v_transparency;

varying mediump vec2 v_size;

varying lowp vec4 v_color;

#ifdef ID
varying mediump vec4 v_id;
#endif // ID

// we need the conversion function from RGBA to float
#include <util/encoding.glsl>

vec4 mixColors(vec4 color1, vec4 color2) {
  // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Alpha_blending)
  // we use pre-multiplied colors hence the need for this kind of mixing. At lease we save ourselves an extra division...
  float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);
  vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);

  return vec4(compositeColor, compositeAlpha);
}

void main()
{
#ifdef SDF
  lowp vec4 fillPixelColor = v_color;

  // calculate the distance from the edge [-0.5, 0.5]
  float d = rgba2float(texture2D(u_texture, v_tex)) - 0.5;

  // the soft edge ratio is about 1.5 pixels allocated for the soft edge.
  // 1 / 86 represents a single pixel given the size of the SDF is 128 and we add 4 pixels margins to deal with
  // other non SDF types.
  // The rasterized geometry takes only 86 pixels because of the extra 16 pixels margin for the outline.
  const float sofetEdgeRatio = 0.248062016; // ==> (32.0 / 86.0) / 1.5;
  float size = max(v_size.x, v_size.y);
  float dist = d * sofetEdgeRatio * size;

  // set the fragment's transparency according to the distance from the edge
  fillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);

  // count for the outline
  // therefore tint the entire icon area.
  if (u_outlineSize > 0.25) {
    lowp vec4 outlinePixelColor = u_outlineColor;
    // the outline limit ratio is derived from the 16 pixels allocated for the outline and the fact that 1/86 represents
    // a single pixel.
    const float outlineLimitRatio = (16.0 / 86.0);
    float clampedOutlineSize = sofetEdgeRatio * min(u_outlineSize, outlineLimitRatio * max(v_size.x, v_size.y));

    outlinePixelColor *= clamp(0.5 - (abs(dist) - clampedOutlineSize), 0.0, 1.0);

    // finally combine the outline and the fill colors
    gl_FragColor = v_transparency * mixColors(fillPixelColor, outlinePixelColor);
  }
  else {
    gl_FragColor = v_transparency * fillPixelColor;
  }
#else // not an SDF
  lowp vec4 texColor = texture2D(u_texture, v_tex);
  gl_FragColor = v_transparency * texColor;
#endif // SDF

#ifdef ID
  if (gl_FragColor.a < 1.0 / 255.0) {
    discard;
  }
  gl_FragColor = v_id;
#endif // ID
}
