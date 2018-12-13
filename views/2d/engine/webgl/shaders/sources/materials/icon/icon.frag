precision mediump float;

uniform lowp sampler2D u_texture;

varying lowp vec2 v_tex;
varying lowp float v_transparency;
varying mediump vec2 v_size;
varying lowp vec4 v_color;

#ifdef SDF
varying lowp vec4 v_outlineColor;
varying mediump float v_outlineWidth;

// we need the conversion function from RGBA to float
#include <util/encoding.glsl>
#endif // SDF

#ifdef ID
varying highp vec4 v_id;
#endif // ID

const float softEdgeRatio = 1.0; // use blur here if needed

void main()
{
#ifdef SDF
  lowp vec4 fillPixelColor = v_color;

  // calculate the distance from the edge [-0.5, 0.5]
  float d = 0.5 - rgba2float(texture2D(u_texture, v_tex));

  // the soft edge ratio is about 1.5 pixels allocated for the soft edge.
  float size = max(v_size.x, v_size.y);
  float dist = d * size * softEdgeRatio;

  // set the fragment's transparency according to the distance from the edge
  fillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);

  // count for the outline
  // therefore tint the entire icon area.
  if (v_outlineWidth > 0.25) {
    lowp vec4 outlinePixelColor = v_outlineColor;

    // outlines can't be larger than the size of the symbol
    float clampedOutlineSize = min(v_outlineWidth, size);

    outlinePixelColor *= clamp(0.5 - abs(dist) + clampedOutlineSize * 0.5, 0.0, 1.0);

    // finally combine the outline and the fill colors (outline draws on top of fill)
    gl_FragColor = v_transparency * ((1.0 - outlinePixelColor.a) * fillPixelColor + outlinePixelColor);
  }
  else {
    gl_FragColor = v_transparency * fillPixelColor;
  }
#else // not an SDF
   lowp vec4 texColor = texture2D(u_texture, v_tex);
   gl_FragColor = v_transparency * texColor;
#endif // SDF

#ifdef HIGHLIGHT
  gl_FragColor.a = step(1.0 / 255.0, gl_FragColor.a);
#endif // HIGHLIGHT

#ifdef ID
  if (gl_FragColor.a < 1.0 / 255.0) {
    discard;
  }
  gl_FragColor = v_id;
#endif // ID
}
