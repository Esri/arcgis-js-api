#include <materials/water/waterSurface.glsl>
#include <util/color.glsl>

/* 
* [overlay0Tex, overlay1Tex] is one of:
* - [inner overlay texture, outer overlay texture]
* - [inner overlay texture, invalid]
* - [outer overlay texture, invalid]
* - [invalid, invalid]
*/
vec4 getOverlayColor(sampler2D ov0Tex, sampler2D ov1Tex, vec4 texCoords) {
  vec4 color = vec4(0.0);

  // read textures outside of conditions, to avoid artifacts likely related to non-uniform flow control:
  // - https://www.khronos.org/opengl/wiki/Sampler_(GLSL)#Non-uniform_flow_control
  // - https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/13657
  vec4 color0 = texture2D(ov0Tex, texCoords.xy);
  vec4 color1 = texture2D(ov1Tex, texCoords.zw);

  if ((texCoords.x > 0.0) && (texCoords.x < 1.0) && (texCoords.y > 0.0) && (texCoords.y < 1.0)) {
    color = color0;
  } else if ((texCoords.z > 0.0) && (texCoords.z < 1.0) && (texCoords.w > 0.0) && (texCoords.w < 1.0)) {
    color = color1;
  }

  return color;
}

#ifdef OVERLAY
// returns the shaded pixel when hitting a water layer.  
// @parameter: tileColor: the color of the underlying tile
// @parameter: ovInput: input from the water mask
// @parameter: opacity: the opacity set on the terrain for draped graphics
vec4 getOverlayWaterColor( in vec4 tileColor, vec4 maskInput, vec4 colorInput,
                     vec3 vpos, float shadow, vec3 localUp, vec3 eye, mat3 tbn) {

  // reproject normal from 0...1 => -1...1 
  // and project it to worldspace.
  vec3 n = normalize(tbn *  (2.0 * maskInput.rgb - vec3(1.0)));
  vec3 v = -normalize(vpos - eye);
  vec3 l = normalize(-lightingMainDirection);
  vec3 final = getSeaColor(n, v, l, colorInput.rgb, localUp, 1.0 - shadow);
  // the terrain renderer assumes a premultiplied color output without gamma. 
  return premultiplyAlpha(vec4(final, colorInput.w));
}
#endif // OVERLAY
