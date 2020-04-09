// raster texture
uniform sampler2D u_image;

// raster band count
uniform int u_bandCount;

// true if texture is float
uniform bool u_isFloatTexture;

// true if y axis needs to be flipped
uniform bool u_flipY;

// true if geometric transformformation is needed
uniform bool u_applyTransform;

// opacity
uniform float u_opacity;

// resampling method
uniform int u_resampling;

#include <raster/common/projection.glsl>

vec2 getPixelLocation(vec2 coords) {
  vec2 targetLocation = u_flipY ? vec2(coords.s, 1.0 - coords.t) : coords;
  if (!u_applyTransform) {
    return targetLocation;
  }
  return projectPixelLocation(targetLocation);
}

bool isOutside(vec2 coords){
   if (coords.t>1.00001 ||coords.t<-0.00001 || coords.s>1.00001 ||coords.s<-0.00001) {
     return true;
   } else {
     return false;
   }
}

vec4 getPixel(vec2 pixelLocation) {
  return texture2D(u_image, pixelLocation);
  // nearest
  // if (u_resampling == 0) {
  //   return texture2D(u_image, pixelLocation);
  // }
}
