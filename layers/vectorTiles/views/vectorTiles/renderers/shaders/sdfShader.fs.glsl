uniform lowp sampler2D u_texture;
uniform lowp vec4 u_color;
uniform mediump float u_edgeDistance;
uniform mediump float u_edgeWidth;

varying lowp vec2 v_tex;
varying lowp float v_transparency;

// this is taken from http://www.valvesoftware.com/publications/2007/SIGGRAPH2007_AlphaTestedMagnification.pdf
// and https://www.mapbox.com/blog/text-signed-distance-fields/
// http://metalbyexample.com/rendering-text-in-metal-with-signed-distance-fields/

void main()
{
  // read the distance from the SDF texture
  lowp float dist = texture2D(u_texture, v_tex).a;
  // use a smooth-step in order to calculate the geometry of the shape given by the distance field
  mediump float alpha = smoothstep(u_edgeDistance - u_edgeWidth, u_edgeDistance + u_edgeWidth, dist) * v_transparency;

  gl_FragColor = alpha * u_color;

// YF: this code allow having both a fill and an outline colors combined in a single pass
//  lowp float geometryAlpha = smoothstep(0.75 - 0.21, 0.75 + 0.21, dist) * v_transparency;
//  lowp vec4 geometryColor = vec4(u_color.rgb, geometryAlpha * u_color.a);
//
//  if (true) {
//    lowp float haloAlpha = smoothstep(0.0 - 0.1, 0.0 + 0.1, dist) * v_transparency;
//    lowp vec4 haloColor = vec4(1.0, 1.0, 1.0, 1.0);
//    haloColor = vec4(haloColor.rgb, haloAlpha);
//
//    // calculate the composite color
//    lowp float compositeAlpha = geometryColor.a + haloColor.a * (1.0 - geometryColor.a);
//    lowp vec3 compositeColor = vec3(geometryColor) * geometryColor.a + vec3(haloColor) * haloColor.a * (1.0 - geometryColor.a);
//    compositeColor /= compositeAlpha;
//    gl_FragColor = vec4(compositeColor, compositeAlpha);
//  }
//  else {
//    gl_FragColor = geometryColor;
//  }
}
