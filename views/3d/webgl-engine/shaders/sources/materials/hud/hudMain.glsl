#ifdef SIGNED_DISTANCE_FIELD
  vec4 color = vec4(0.0, 0.0, 0.0, 0.0);
  vec4 fillPixelColor = overrideColor * vcolor;

  // Attempt to sample texel centers to avoid that thin cross outlines
  // disappear with large symbol sizes.
  // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/7058#issuecomment-603041
  const float txSize = 128.0;
  const float texelSize = 1.0 / txSize;
  // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
  vec2 scaleFactor = (vsize - txSize) * texelSize;
  vec2 samplePos = vtc + (vec2(1.0, -1.0) * texelSize) * scaleFactor;

  // Get distance and map it into [-0.5, 0.5]
  float d = rgba2float(texture2D(tex, samplePos)) - 0.5;

  // Distance in output units (i.e. pixels)
  float dist = d * vsize.x;

  // Create smooth transition from the icon into its outline
  fillPixelColor.a *= clamp(0.5 - dist, 0.0, 1.0);

  if (outlineSize > 0.25) {
    vec4 outlinePixelColor = outlineColor;
    float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

    // Create smooth transition around outline
    outlinePixelColor.a *= clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);

    // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
    float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
    vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
      vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

    gl_FragColor = vec4(compositeColor, compositeAlpha);
  }
  else {
    gl_FragColor = premultiplyAlpha(fillPixelColor);
  }

  // visualize SDF:
  // gl_FragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
#else

  // HUDMaterial is rendered with a blending mode that assumes a pre-multiplied
  // fragment color. Input textures should already be pre-multiplied and so
  // don't require adjustment, but the override and vertex colors must be
  // modulated by their alpha values.

  gl_FragColor = texture2D(tex, vtc, -0.5) * premultiplyAlpha(overrideColor * vcolor);

#endif

#ifdef DEBUG_DRAW_BORDER
   float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));
   gl_FragColor = mix(gl_FragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder);
#endif

  if (gl_FragColor.a < 0.1) {
    discard;
  }
