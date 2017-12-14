precision mediump float;

float rgba2float(vec4 rgba) {
  return dot(rgba,  vec4(1.0/16777216.0, 1.0/65535.0, 1.0/256.0, 1.0));
}

uniform lowp sampler2D u_texture; // SDF texture
uniform lowp vec4 u_color; // a color to override the one of the vertex
uniform lowp vec4 u_outlineColor;
uniform mediump float u_outlineSize;

varying mediump vec2 v_tex;
// the calculated transparency to be applied by the fragment shader. It is incorporating both the fade as well as the
// opacity of the layer given by the painter
varying lowp float v_transparency;

varying mediump vec2 v_size;

#ifdef VV
#ifdef VV_COLOR
varying lowp vec4 v_vvColor;
#endif // VV_COLOR
#endif // VV

void main()
{
#ifdef VV
#ifdef VV_COLOR
  lowp vec4 fillPixelColor = v_vvColor;
#endif // VV_COLOR
#else
   lowp vec4 fillPixelColor = u_color;
#endif // VV

  fillPixelColor.a *= v_transparency;

  // Distance in [-0.5, 0.5]
  float d = rgba2float(texture2D(u_texture, v_tex)) - 0.5;

  // Work around loss of precision for 'd = 0.0'.
  // '0' gets normalised to 0.5 * 256 = 128 before float packing, but can only
  // be stored in the texture as 128 / 255 = 0.502.
  // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/7058#issuecomment-603110
  const float diff = (128.0/255.0 - 0.5);

  // adjust all values, not just those close to 0, to avoid discontinuities in
  // the outlines of other shapes e.g. circles
  d = d - diff;

  float size = min(v_size.x, v_size.y);
  float dist = d * size;

  fillPixelColor.a *= clamp(0.5 - dist, 0.0, 1.0);

  //if (u_outlineSize > 0.25) {
    vec4 outlinePixelColor = u_outlineColor;
    float clampedOutlineSize = min(u_outlineSize, 0.5 * size);

    outlinePixelColor.a *= clamp(0.5 - (abs(dist) - 0.5 * clampedOutlineSize), 0.0, 1.0);

    // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
    float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
    vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
      vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);
    compositeColor /= compositeAlpha;

    gl_FragColor = vec4(compositeColor, compositeAlpha);
  //}
  //else {
  //  gl_FragColor = fillPixelColor;
  //}
}
