precision mediump float;
uniform sampler2D u_layerTexture;
uniform lowp float u_opacity;
uniform lowp float u_inFadeOpacity;

#ifndef NORMAL
uniform sampler2D u_backbufferTexture;
#endif

varying mediump vec2 v_uv;

float rgb2v(in vec3 c) {
  return max(c.x, max(c.y, c.z));
}

vec3 rgb2hsv(in vec3 c) {
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
  vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);

  float d = q.x - min(q.w, q.y);
  float e = 1.0e-10;
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}

vec3 hsv2rgb(in vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

vec3 tint(in vec3 Cb, in vec3 Cs) {
  float vIn = rgb2v(Cb);
  vec3 hsvTint = rgb2hsv(Cs);
  vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
  return hsv2rgb(hsvOut);
}

float overlay(in float Cb, in float Cs) {
  return (1.0 - step(0.5, Cs)) * (1.0 - 2.0 * (1.0 - Cs ) * (1.0 - Cb)) + step(0.5, Cs) * (2.0 * Cs * Cb);
}

float colorDodge(in float Cb, in float Cs) {
  return (Cb == 0.0) ? 0.0 : (Cs == 1.0) ? 1.0 : min(1.0, Cb / (1.0 - Cs));
}

float colorBurn(in float Cb, in float Cs) {
 return (Cb == 1.0) ? 1.0 : (Cs == 0.0) ? 0.0 : 1.0 - min(1.0, (1.0 - Cb) / Cs);
}

float hardLight(in float Cb, in float Cs) {
  return (1.0 - step(0.5, Cs)) * (2.0 * Cs * Cb) + step(0.5, Cs) * (1.0 - 2.0 * (1.0 - Cs) * (1.0 - Cb));
}

float reflectBlend(in float Cb, in float Cs) {
	return (Cs == 1.0) ? Cs : min(Cb * Cb / (1.0 - Cs), 1.0);
}

float softLight(in float Cb, in float Cs) {
  if (Cs <= 0.5) {
    return Cb - (1.0 - 2.0 * Cs) * Cb * (1.0 - Cb);
  }

  if (Cb <= 0.25) {
    return Cb + (2.0 * Cs - 1.0) * Cb * ((16.0 * Cb - 12.0) * Cb + 3.0);
  }

  return Cb + (2.0 * Cs - 1.0) * (sqrt(Cb) - Cb);
}

float vividLight(in float Cb, in float Cs) {
  return (1.0 - step(0.5, Cs)) * colorBurn(Cb, 2.0 * Cs) + step(0.5, Cs) * colorDodge(Cb, (2.0 * (Cs - 0.5)));
}

float minv3(in vec3 c) {
  return min(min(c.r, c.g), c.b);
}

float maxv3(in vec3 c) {
  return max(max(c.r, c.g), c.b);
}

float lumv3(in vec3 c) {
  return dot(c, vec3(0.3, 0.59, 0.11));
}

float satv3(vec3 c) {
  return maxv3(c) - minv3(c);
}

vec3 clipColor(vec3 color) {
  float lum = lumv3(color);
  float mincol = minv3(color);
  float maxcol = maxv3(color);

  if (mincol < 0.0) {
    color = lum + ((color - lum) * lum) / (lum - mincol);
  }

  if (maxcol > 1.0) {
    color = lum + ((color - lum) * (1.0 - lum)) / (maxcol - lum);
  }

  return color;
}

vec3 setLum(vec3 cbase, vec3 clum) {
  float lbase = lumv3(cbase);
  float llum = lumv3(clum);
  float ldiff = llum - lbase;
  vec3 color = cbase + vec3(ldiff);
  return clipColor(color);
}

vec3 setLumSat(vec3 cbase, vec3 csat, vec3 clum)
{
  float minbase = minv3(cbase);
  float sbase = satv3(cbase);
  float ssat = satv3(csat);
  vec3 color;
  if (sbase > 0.0) {
    // Equivalent (modulo rounding errors) to setting the
    // smallest (R,G,B) component to 0, the largest to <ssat>,
    // and interpolating the "middle" component based on its
    // original value relative to the smallest/largest.
    color = (cbase - minbase) * ssat / sbase;
  } else {
    color = vec3(0.0);
  }
  return setLum(color, clum);
}

void main() {
  vec4 src = texture2D(u_layerTexture, v_uv);
#ifdef NORMAL
  gl_FragColor = src *  u_opacity;
#else
 // all other modes (we need to access the color buffer of the backbuffer)
  vec4 dst = texture2D(u_backbufferTexture, v_uv);

  // un-premultiply the colors first
  vec3 Cs = src.a == 0.0 ? src.rgb : vec3(src.rgb / src.a);
  vec3 Cb = dst.a == 0.0 ? dst.rgb : vec3(dst.rgb / dst.a);
  float as = u_opacity * src.a;
  float ab = dst.a;

  #ifdef DESTINATION_OVER
    // co = as x Cs x (1 - ab) + ab x Cb
    // o = as + ab - as X ab
    gl_FragColor = vec4(as * Cs * (1.0 - ab) + ab * Cb, as + ab - as * ab);
  #endif

  #ifdef SOURCE_IN
    // co = as x Cs x ab
    // o = as x ab
    vec4 color = vec4(as * Cs * ab, as * ab);
    vec4 fadeColor = (1.0 - u_opacity) * u_inFadeOpacity * vec4(ab * Cb, ab);
    gl_FragColor = color + fadeColor;
  #endif


  #ifdef DESTINATION_IN
    // co = ab x Cb x as
    // o = ab x as
    vec4 color = vec4(ab * Cb * as, ab * as);
    vec4 fadeColor = (1.0 - u_opacity) * u_inFadeOpacity * vec4(ab * Cb, ab);
    gl_FragColor = color + fadeColor;
  #endif

  #ifdef SOURCE_OUT
    // co = as x Cs x (1 - ab)
    // o = as x (1 - ab)
    gl_FragColor = vec4(as * Cs * (1.0 - ab), as * (1.0 - ab));
  #endif

  #ifdef DESTINATION_OUT
    // co = ab x Cb x (1 - as)
    // o = ab x (1 - as)
    gl_FragColor = vec4(ab * Cb * (1.0 - as), ab * (1.0 - as));
  #endif

  #ifdef SOURCE_ATOP
    // co = as x Cs x ab + ab x Cb x (1 - as)
    // o = as x ab + ab x (1 - as) = ab
    gl_FragColor = vec4(as * Cs * ab + ab * Cb * (1.0 - as), ab);
  #endif

  #ifdef DESTINATION_ATOP
    // co = as x Cs x (1 - ab) + ab x Cb x as
    // o = as x (1 - ab) + ab x as = as
    gl_FragColor = vec4(as * Cs * (1.0 - ab) + ab * Cb * as, as);
  #endif

  #ifdef XOR
    // co = as x Cs x (1 - ab) + ab x Cb x (1 - as)
    // o = as x (1 - ab) + ab x (1 - as)
    gl_FragColor = vec4(as * Cs * (1.0 - ab) + ab * Cb * (1.0 - as),
                        as * (1.0 - ab) + ab * (1.0 - as));
  #endif

  #ifdef MULTIPLY
    // cp = Cs*Cb*As*Ab + Cs*As*(1-Ab) + Cb*Ab*(1-As);
    // o = As*Ab + As*(1-Ab) + Ab*(1-As) = As + Ab * (1 - As);
    gl_FragColor = vec4(as * Cs * ab * Cb + (1.0 - ab) * as * Cs + (1.0 - as) * ab * Cb,
                        as + ab * (1.0 - as));
  #endif

  #ifdef SCREEN
    // cp = (Cs+Cd-Cs*Cd)*As*Ab + Cs*As*(1-Ab) + Cb*Ab*(1-As);
    // o = As + Ab * (1 - As);
    gl_FragColor = vec4((Cs + Cb - Cs * Cb) * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
                        as + ab * (1.0 - as));
  #endif

  #ifdef OVERLAY
    // f(Cs,Cd) = 2*Cs*Cd, if Cd <= 0.5, 1-2*(1-Cs)*(1-Cd), otherwise
    // cp = f(Cs,Cb) * As*Ab + Cs*As*(1-Ab) + Cb*Ab*(1-As);
    // o = As + Ab * (1 - As);
    vec3 f = vec3(overlay(Cb.r, Cs.r), overlay(Cb.g, Cs.g), overlay(Cb.b, Cs.b));
    gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
                        as + ab * (1.0 - as));
  #endif

  #ifdef DARKEN
    // f(Cs,Cd) = min(Cs,Cd)
    // cp = min(Cs,Cb) * As*Ab + Cs*As*(1-Ab) + Cb*Ab*(1-As);
    // o = As + Ab * (1 - As);
    gl_FragColor = vec4(min(Cs, Cb) * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
                        as + ab * (1.0 - as));
  #endif

  #ifdef LIGHTER
    // co = αs x Cs + αb x Cb;
    // αo = αs + αb
    gl_FragColor = vec4(as * Cs + ab * Cb, as + ab);
  #endif

  #ifdef LIGHTEN
    // f(Cs,Cd) = max(Cs,Cd)
    // cp = max(Cs,Cb) * As*Ab + Cs*As*(1-Ab) + Cb*Ab*(1-As);
    // o = As + Ab * (1 - As);
    gl_FragColor = vec4(max(Cs, Cb) * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
                        as + ab * (1.0 - as));
  #endif

  #ifdef COLOR_DODGE
    // f(Cs,Cd) = 0, if Cd <= 0
    //            min(1,Cd/(1-Cs)), if Cd > 0 and Cs < 1
    //            1, if Cd > 0 and Cs >= 1
    vec3 f = vec3(colorDodge(Cb.r, Cs.r), colorDodge(Cb.g, Cs.g), colorDodge(Cb.b, Cs.b));
    gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
                        as + ab * (1.0 - as));
  #endif

  #ifdef COLOR_BURN
    // f(Cs,Cd) = 1, if Cd >= 1
    //            1 - min(1,(1-Cd)/Cs), if Cd < 1 and Cs > 0
    //            0, if Cd < 1 and Cs <= 0
    vec3 f = vec3(colorBurn(Cb.r, Cs.r), colorBurn(Cb.g, Cs.g), colorBurn(Cb.b, Cs.b));
    gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
                        as + ab * (1.0 - as));
  #endif

  #ifdef HARD_LIGHT
    // f(Cs,Cd) = 2*Cs*Cd, if Cs <= 0.5
    //            1-2*(1-Cs)*(1-Cd), otherwise
    vec3 f = vec3(hardLight(Cb.r, Cs.r), hardLight(Cb.g, Cs.g), hardLight(Cb.b, Cs.b));
    gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
                        as + ab * (1.0 - as));
  #endif

  #ifdef SOFT_LIGHT
    // f(Cs,Cd) =
    //            Cd-(1-2*Cs)*Cd*(1-Cd), if Cs <= 0.5
    //            Cd+(2*Cs-1)*Cd*((16*Cd-12)*Cd+3), if Cs > 0.5 and Cd <= 0.25
    //            Cd+(2*Cs-1)*(sqrt(Cd)-Cd), if Cs > 0.5 and Cd > 0.25
    vec3 f = vec3(softLight(Cb.r, Cs.r), softLight(Cb.g, Cs.g), softLight(Cb.b, Cs.b));
    gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
                        as + ab * (1.0 - as));
  #endif

  #ifdef DIFFERENCE
    // f(Cs,Cd) = abs(Cd-Cs)
    gl_FragColor = vec4(abs(Cb - Cs) * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
                        as + ab * (1.0 - as));
  #endif

  #ifdef EXCLUSION
    // f(Cs,Cd) = Cs+Cd-2*Cs*Cd
     vec3 f = Cs + Cb - 2.0 * Cs * Cb;
     gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
                        as + ab * (1.0 - as));
  #endif

  #ifdef INVERT
    // f(Cs,Cd) = 1 - Cd
    // co = (1 - Cd) * As * Ad + Cd * Ad * (1 - As)
    // o = As * Ad + Ad * (1 - As) = Ad
    gl_FragColor = vec4((1.0 - Cb) * as * ab + Cb * ab * (1.0 - as), ab);
  #endif

  #ifdef VIVID_LIGHT
    // f(Cs,Cd) = 1-min(1,(1-Cd)/(2*Cs)), if 0 < Cs < 0.5
    //            0, if Cs <= 0
    //            min(1,Cd/(2*(1-Cs))), if 0.5 <= Cs < 1
    //            1, if Cs >= 1
    vec3 f = vec3(vividLight(Cb.r, Cs.r),
                  vividLight(Cb.g, Cs.g),
                  vividLight(Cb.b, Cs.b));
    gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
                        as + ab * (1.0 - as));
  #endif

  #ifdef HUE
    // f(Cs,Cd) = SetLumSat(Cs,Cd,Cd);
    vec3 f = setLumSat(Cs,Cb,Cb);
    gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
                        as + ab * (1.0 - as));
  #endif

  #ifdef SATURATION
    // f(Cs,Cd) = SetLumSat(Cd,Cs,Cd);
    vec3 f = setLumSat(Cb,Cs,Cb);
    gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
                        as + ab * (1.0 - as));
  #endif

  #ifdef COLOR
    // f(Cs,Cd) = SetLum(Cs,Cd);
    vec3 f = setLum(Cs,Cb);
    gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
                        as + ab * (1.0 - as));
  #endif

  #ifdef LUMINOSITY
    // f(Cs,Cd) = setLum(Cd,Cs);
    vec3 f = setLum(Cb,Cs);
    gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
                        as + ab * (1.0 - as));
  #endif

  #ifdef PLUS
    // (R,G,B,A) = (Rs'+Rd, Gs'+Gd, Bs'+Bd,As'+Ad)
    gl_FragColor = clamp(vec4(src.r + Cb.r, src.g + Cb.g, src.b + Cb.b, as + ab), 0.0, 1.0);
  #endif

  #ifdef MINUS
    // (R,G,B,A) = (Rd-Rs', Gd-Gs', Bd-Bs', Ad-As)
     gl_FragColor = vec4(clamp(vec3(Cb.r - src.r, Cb.g - src.g, Cb.b - src.b), 0.0, 1.0), ab * as);
  #endif

  #ifdef AVERAGE
     // f(Cs,Cd) = (Cb + Cs) / 2.0;
     vec3 f = (Cb + Cs) / 2.0;
     gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
                        as + ab * (1.0 - as));
  #endif

  #ifdef REFLECT
    vec3 f = vec3(reflectBlend(Cb.r, Cs.r),
                  reflectBlend(Cb.g, Cs.g),
                  reflectBlend(Cb.b, Cs.b));
    gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
                        as + ab * (1.0 - as));
  #endif

#endif // NORMAL
}
