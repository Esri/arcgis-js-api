// indexed colormap texture
uniform sampler2D u_colormap;

// indexed colormap offset if not 0 based
uniform float u_colormapOffset;

// indexec colormap max index (length-1)
uniform float u_colormapMaxIndex;

vec4 colorize(vec4 currentPixel, bool isFloat) {
  // colormap is only applicable to integer data but could be already normalized to 0-1 float
  float clrIndex = isFloat ? currentPixel.r - u_colormapOffset : currentPixel.r * 255.0 - u_colormapOffset;
  vec4 result;
  // handle no data and out of range pixels
  if (currentPixel.a == 0.0 || clrIndex > u_colormapMaxIndex) {
    result = vec4(0.0, 0.0, 0.0, 0.0);
  } else {
    // colormap lookup
    vec2 clrPosition = vec2((clrIndex + 0.5) / (u_colormapMaxIndex + 1.0), 0.0);
    vec4 color = texture2D(u_colormap, clrPosition);
    result = vec4(color.rgb, color.a * u_opacity);
  }
  return result;
}
