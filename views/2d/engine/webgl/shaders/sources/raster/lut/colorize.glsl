// indexed colormap texture
uniform sampler2D u_colormap;

// indexed colormap offset if not 0 based
uniform float u_colormapOffset;

// indexec colormap max index (length-1)
uniform float u_colormapMaxIndex;

vec4 colorize(vec4 currentPixel, float scaleFactor) {
  // colormap is only applicable to integer data but could be already normalized to 0-1 float (use 255.0 for scaleFactor)
  float clrIndex = clamp(currentPixel.r * scaleFactor - u_colormapOffset, 0.0, u_colormapMaxIndex);
  // colormap lookup
  vec2 clrPosition = vec2((clrIndex + 0.5) / (u_colormapMaxIndex + 1.0), 0.0);
  vec4 color = texture2D(u_colormap, clrPosition);
  // caller's responsiblity to multiply alpha
  vec4 result = vec4(color.rgb, color.a * currentPixel.a);
  return result;
}
