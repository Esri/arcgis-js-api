// raster texture
uniform sampler2D u_image;

// raster band count
uniform int u_bandCount;

// true if texture is float
uniform bool u_isFloatTexture;

// true if y axis needs to be flipped
uniform bool u_flipY;

// opacity
uniform float u_opacity;

// resampling method
uniform int u_resampling;

// source image size
uniform vec2 u_srcImageSize;

#ifdef APPLY_PROJECTION
#include <raster/common/projection.glsl>
#endif

#ifdef BICUBIC
#include <filtering/bicubic.glsl>
#endif

vec2 getPixelLocation(vec2 coords) {
  vec2 targetLocation = u_flipY ? vec2(coords.s, 1.0 - coords.t) : coords;
#ifdef APPLY_PROJECTION
  targetLocation = projectPixelLocation(targetLocation);
#endif
  return targetLocation;
}

bool isOutside(vec2 coords){
   if (coords.t>1.00001 ||coords.t<-0.00001 || coords.s>1.00001 ||coords.s<-0.00001) {
     return true;
   } else {
     return false;
   }
}

vec4 getPixel(vec2 pixelLocation) {
#ifdef BICUBIC
  vec4 color = sampleBicubicBSpline(u_image, pixelLocation, u_srcImageSize);
#else
  vec4 color = texture2D(u_image, pixelLocation);
#endif
  return color;
}
