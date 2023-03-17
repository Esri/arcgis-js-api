/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../output/BlendOptions","../../shaderModules/interfaces"],(function(l,o,e){"use strict";function c(l,c){const b=c.blendMode;b!==o.LayerBlendMode.Normal&&(b===o.LayerBlendMode.Reflect&&l.code.add(e.glsl`float reflectBlend(in float cb, in float cl) {
return (cl == 1.0) ? cl : min(cb * cb / (1.0 - cl), 1.0);
}`),b!==o.LayerBlendMode.ColorDodge&&b!==o.LayerBlendMode.VividLight||l.code.add(e.glsl`float colorDodge(in float cb, in float cl) {
return (cb == 0.0) ? 0.0 : (cl == 1.0) ? 1.0 : min(1.0, cb / (1.0 - cl));
}`),b!==o.LayerBlendMode.ColorBurn&&b!==o.LayerBlendMode.VividLight||l.code.add(e.glsl`float colorBurn(in float cb, in float cl) {
return (cb == 1.0) ? 1.0 : (cl == 0.0) ? 0.0 : 1.0 - min(1.0, (1.0 - cb) / cl);
}`),b===o.LayerBlendMode.Overlay&&l.code.add(e.glsl`float overlay(in float cb, in float cl) {
return (1.0 - step(0.5, cl)) * (1.0 - 2.0 * (1.0 - cl ) * (1.0 - cb)) + step(0.5, cl) * (2.0 * cl * cb);
}`),b===o.LayerBlendMode.HardLight&&l.code.add(e.glsl`float hardLight(in float cb, in float cl) {
return (1.0 - step(0.5, cl)) * (2.0 * cl * cb) + step(0.5, cl) * (1.0 - 2.0 * (1.0 - cl) * (1.0 - cb));
}`),b===o.LayerBlendMode.SoftLight&&l.code.add(e.glsl`float softLight(in float cb, in float cl) {
if (cl <= 0.5) {
return cb - (1.0 - 2.0 * cl) * cb * (1.0 - cb);
}
if (cb <= 0.25) {
return cb + (2.0 * cl - 1.0) * cb * ((16.0 * cb - 12.0) * cb + 3.0);
}
return cb + (2.0 * cl - 1.0) * (sqrt(cb) - cb);
}`),b===o.LayerBlendMode.VividLight&&l.code.add(e.glsl`float vividLight(in float cb, in float cl) {
return (1.0 - step(0.5, cl)) * colorBurn(cb, 2.0 * cl) + step(0.5, cl) * colorDodge(cb, (2.0 * (cl - 0.5)));
}`),b!==o.LayerBlendMode.Hue&&b!==o.LayerBlendMode.Saturation&&b!==o.LayerBlendMode.Color&&b!==o.LayerBlendMode.Luminosity||(l.code.add(e.glsl`float minv3(in vec3 c) {
return min(min(c.r, c.g), c.b);
}
float maxv3(in vec3 c) {
return max(max(c.r, c.g), c.b);
}
float lumv3(in vec3 c) {
return dot(c, vec3(0.3, 0.59, 0.11));
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
return clipColor(cbase + vec3(lumv3(clum) - lumv3(cbase)));
}`),b!==o.LayerBlendMode.Hue&&b!==o.LayerBlendMode.Saturation||l.code.add(e.glsl`float satv3(vec3 c) {
return maxv3(c) - minv3(c);
}
vec3 setLumSat(vec3 cbase, vec3 csat, vec3 clum)
{
float minbase = minv3(cbase);
float sbase = satv3(cbase);
float ssat = satv3(csat);
return setLum(sbase > 0.0 ? (cbase - minbase) * ssat / sbase : vec3(0.0), clum);
}`)),l.code.add(e.glsl`
    vec4 applyBlendMode(vec3 cl, float ol, vec3 cb, float ob) {
      ${b===o.LayerBlendMode.Multiply?e.glsl`return vec4(cl * ol * cb * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:b===o.LayerBlendMode.Average?e.glsl`return vec4((cb + cl) * 0.5 * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:b===o.LayerBlendMode.Lighten?e.glsl`return vec4(max(cb, cl) * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:b===o.LayerBlendMode.Darken?e.glsl`return vec4(min(cl, cb) * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:b===o.LayerBlendMode.Lighter?e.glsl`return vec4(cl * ol + cb * ob, ol + ob);`:b===o.LayerBlendMode.Plus?e.glsl`return clamp(vec4(cl.rgb + cb.rgb, ol + ob), 0.0, 1.0);`:b===o.LayerBlendMode.Minus?e.glsl`return vec4(clamp(vec3(cb.rgb - cl.rgb), 0.0, 1.0), ob * ol);`:b===o.LayerBlendMode.Screen?e.glsl`return vec4((cl + cb - cl * cb) * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:b===o.LayerBlendMode.Difference?e.glsl`return vec4(abs(cb - cl) * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:b===o.LayerBlendMode.Invert?e.glsl`return vec4((1.0 - cb) * ol * ob + cb * ob * (1.0 - ol), ob);`:b===o.LayerBlendMode.DestinationOver?e.glsl`return vec4(cl * ol * (1.0 - ob) + cb * ob, ol + ob - ol * ob);`:b===o.LayerBlendMode.DestinationAtop?e.glsl`return vec4(cl * ol * (1.0 - ob) + cb * ob * ol, ol);`:b===o.LayerBlendMode.DestinationOut?e.glsl`return vec4(cb * ob * (1.0 - ol), ob * (1.0 - ol));`:b===o.LayerBlendMode.SourceAtop?e.glsl`return vec4(cl * ol * ob + cb * ob * (1.0 - ol), ob);`:b===o.LayerBlendMode.SourceOut?e.glsl`return vec4(cl * ol * (1.0 - ob), ol * (1.0 - ob));`:b===o.LayerBlendMode.Xor?e.glsl`return vec4(cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), ol * (1.0 - ob) + ob * (1.0 - ol));`:b===o.LayerBlendMode.DestinationIn?e.glsl`return vec4(cb * ob * ol, ol * ob);`:b===o.LayerBlendMode.SourceIn?e.glsl`return vec4(cl * ol * ob, ol * ob);`:b===o.LayerBlendMode.Hue?e.glsl`
          vec3 f = setLumSat(cl, cb, cb);
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:b===o.LayerBlendMode.Saturation?e.glsl`
          vec3 f = setLumSat(cb, cl, cb);
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:b===o.LayerBlendMode.Color?e.glsl`
          vec3 f = setLum(cl, cb);
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:b===o.LayerBlendMode.Luminosity?e.glsl`
          vec3 f = setLum(cb, cl);
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:b===o.LayerBlendMode.Exclusion?e.glsl`
          vec3 f = cl + cb - 2.0 * cl * cb;
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:b===o.LayerBlendMode.Reflect?e.glsl`
          vec3 f = vec3(reflectBlend(cb.r, cl.r), reflectBlend(cb.g, cl.g), reflectBlend(cb.b, cl.b));
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:b===o.LayerBlendMode.ColorDodge?e.glsl`
          vec3 f = vec3(colorDodge(cb.r, cl.r), colorDodge(cb.g, cl.g), colorDodge(cb.b, cl.b));
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:b===o.LayerBlendMode.ColorBurn?e.glsl`
          vec3 f = vec3(colorBurn(cb.r, cl.r), colorBurn(cb.g, cl.g), colorBurn(cb.b, cl.b));
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:b===o.LayerBlendMode.Overlay?e.glsl`
          vec3 f = vec3(overlay(cb.r, cl.r), overlay(cb.g, cl.g), overlay(cb.b, cl.b));
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:b===o.LayerBlendMode.SoftLight?e.glsl`
          vec3 f = vec3(softLight(cb.r, cl.r), softLight(cb.g, cl.g), softLight(cb.b, cl.b));
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:b===o.LayerBlendMode.HardLight?e.glsl`
          vec3 f = vec3(hardLight(cb.r, cl.r), hardLight(cb.g, cl.g), hardLight(cb.b, cl.b));
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:b===o.LayerBlendMode.VividLight?e.glsl`
          vec3 f = vec3(vividLight(cb.r, cl.r), vividLight(cb.g, cl.g), vividLight(cb.b, cl.b));
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:e.glsl``}
    }
  `))}l.BlendModes=c,Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})}));
