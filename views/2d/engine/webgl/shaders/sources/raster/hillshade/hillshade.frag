precision mediump float;

// texture coordinates.
varying highp vec2 v_texcoord;

#include <raster/common/common.glsl>

// uniform to use for hillshade type. 0: traditional, 1: multi-directional
uniform int u_hillshadeType;

// uniform to use for sinZcosA
uniform float u_sinZcosAs[6];

// uniform to use for sinZsinA
uniform float u_sinZsinAs[6];

// uniform to use for cosZ
uniform float u_cosZs[6];

// uniform to use for weights
uniform float u_weights[6];

// uniform that represent a cell size adjusted exaggeration factor in the x and y direction
uniform vec2 u_factor;

// statistics min
uniform float u_minValue;

// statistics max
uniform float u_maxValue;

#include <raster/lut/colorize.glsl>

float getNeighborHoodAlpha(float a, float b, float c, float d, float e, float f, float g, float h, float i){
  if (a == 0.0 || a == 0.0 || a==0.0 || a == 0.0 || a == 0.0 || a==0.0 || a == 0.0 || a == 0.0 || a==0.0) {
    return 0.0;
  }
  else {
    return e;
  }
}

vec3 rgb2hsv(vec3 c) {
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
  vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
  float d = q.x - min(q.w, q.y);
  float e = 1.0e-10;
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}

vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

vec4 overlay(float val, float minValue, float maxValue, float hillshade) {
  val = clamp((val - minValue) / (maxValue - minValue), 0.0, 1.0);
  vec4 rgb = colorize(vec4(val, val, val, 1.0), 255.0);
  vec3 hsv = rgb2hsv(rgb.xyz);
  hsv.z = hillshade;
  return vec4(hsv2rgb(hsv), 1.0) * rgb.a;
}

void main() {
  vec2 pixelLocation = getPixelLocation(v_texcoord);
  if (isOutside(pixelLocation)) {
     gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
     return;
  }

  vec4 currentPixel = getPixel(pixelLocation);
  if (currentPixel.a == 0.0) {
    gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
    return;
  }

  //mirror edge pixels
  vec2 axy = vec2(-1.0, -1.0);
  vec2 bxy = vec2(0.0, -1.0);
  vec2 cxy = vec2(1.0, -1.0);
  vec2 dxy = vec2(-1.0, 0.0);
  vec2 fxy = vec2(1.0, 0.0);
  vec2 gxy = vec2(-1.0, 1.0);
  vec2 hxy = vec2(0.0, 1.0);
  vec2 ixy = vec2(1.0, 1.0);
  vec2 onePixel = 1.0 / u_srcImageSize;
  if (pixelLocation.s < onePixel.s) {
    axy[0] = 1.0;
    dxy[0] = 1.0;
    gxy[0] = 1.0;
  }
  if (pixelLocation.t < onePixel.t) {
    axy[1] = 1.0;
    bxy[1] = 1.0;
    cxy[1] = 1.0;
  }
  if (pixelLocation.s > 1.0 - onePixel.s) {
    cxy[0] = -1.0;
    fxy[0] = -1.0;
    ixy[0] = -1.0;
  }
  if (pixelLocation.t > 1.0 - onePixel.t) {
    gxy[1] = -1.0;
    hxy[1] = -1.0;
    ixy[1] = -1.0;
  }

  // calculate hillshade
  vec4 va = texture2D(u_image, pixelLocation + onePixel * axy);
  vec4 vb = texture2D(u_image, pixelLocation + onePixel * bxy);
  vec4 vc = texture2D(u_image, pixelLocation + onePixel * cxy);
  vec4 vd = texture2D(u_image, pixelLocation + onePixel * dxy);
  vec4 ve = texture2D(u_image, pixelLocation);
  vec4 vf = texture2D(u_image, pixelLocation + onePixel * fxy);
  vec4 vg = texture2D(u_image, pixelLocation + onePixel * gxy);
  vec4 vh = texture2D(u_image, pixelLocation + onePixel * hxy);
  vec4 vi = texture2D(u_image, pixelLocation + onePixel * ixy);

  // calculate the rate of z change along the x, y, and diagonal direction
  float dzx = (vc + 2.0 * vf + vi - va - 2.0 * vd - vg).r * u_factor.s;
  float dzy = (vg + 2.0 * vh + vi - va - 2.0 * vb - vc).r * u_factor.t;
  float dzd = sqrt(1.0 + dzx * dzx + dzy * dzy);
  float hillshade = 0.0;

  // traditional single light source
  if (u_hillshadeType == 0){
	   float cosDelta = u_sinZsinAs[0] * dzy - u_sinZcosAs[0] * dzx;
     float z = (u_cosZs[0] + cosDelta) / dzd;
     if (z < 0.0)  z = 0.0;
	   hillshade = z;
  } else {
    // multi-directional with 6 light sources
	  for (int k = 0; k < 6; k++) {
		 float cosDelta = u_sinZsinAs[k] * dzy - u_sinZcosAs[k] * dzx;
		 float z = (u_cosZs[k] + cosDelta) / dzd;
		 if (z < 0.0) z = 0.0;
     hillshade = hillshade + z * u_weights[k];
		 if (k == 5) break;
    }
  }

  // set color
  float alpha = getNeighborHoodAlpha(va.a, vb.a, vc.a, vd.a, ve.a, vf.a, vg.a, vh.a, vi.a);
#ifdef APPLY_COLORMAP
  gl_FragColor = overlay(ve.r, u_minValue, u_maxValue, hillshade) * alpha * u_opacity;
#else
  gl_FragColor = vec4(hillshade, hillshade, hillshade, 1.0) * alpha * u_opacity;
#endif
}