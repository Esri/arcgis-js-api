/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","./_rollupPluginBabelHelpers","./vec3f64","../views/2d/engine/imagery/enums","../views/3d/webgl-engine/core/shaderLibrary/raster/Colormap.glsl","../views/3d/webgl-engine/core/shaderLibrary/raster/Common.glsl","../views/3d/webgl-engine/core/shaderLibrary/terrain/TileBackground.glsl","../views/3d/webgl-engine/core/shaderLibrary/terrain/TileComposite.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl","../views/3d/webgl-engine/core/shaderModules/BooleanPassUniform","../views/3d/webgl-engine/core/shaderModules/Float2PassUniform","../views/3d/webgl-engine/core/shaderModules/FloatPassUniform","../views/3d/webgl-engine/core/shaderModules/FloatsPassUniform","../views/3d/webgl-engine/core/shaderModules/IntegerPassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform"],(function(e,a,o,l,r,i,t,n,u,s,c,m,f,g,d,v,p){"use strict";let x=function(e){function l(a,l,r,i,t,n){var u;return(u=e.call(this,a,i,t)||this).colormap=l,u.symbolizer=r,u.u_colormap=n,u.backgroundColor=o.ZEROS,u.fboTexture=null,u.baseOpacity=1,u}return a._inheritsLoose(l,e),l}(i.CommonPassParameters),_=function(e){function o(){return e.apply(this,arguments)||this}return a._inheritsLoose(o,e),o}(x),y=function(e){function o(){return e.apply(this,arguments)||this}return a._inheritsLoose(o,e),o}(x);function h(e){const a=new v.ShaderBuilder;return a.include(n.TileComposite),a.include(i.Common,e),a.include(r.Colormap,e),a.include(t.TileBackground,e),a.fragment.code.add(d.glsl`vec4 applyBackgroundBlend(vec4 layerColor) {
vec4 bgColor = getBackground(vuv);
return blendLayers(bgColor, layerColor, u_opacity);
}`),e.colorizerType===l.RasterColorizerType.Stretch?b(a,e):e.colorizerType===l.RasterColorizerType.Lut?C(a):e.colorizerType===l.RasterColorizerType.Hillshade&&P(a,e),a}function C(e){e.fragment.code.add(d.glsl`void main() {
vec2 pixelLocation = getPixelLocation(uv);
if (isOutside(pixelLocation)) {
gl_FragColor = applyBackgroundBlend(vec4(0.0, 0.0, 0.0, 0.0));
return;
}
vec4 currentPixel = getPixel(pixelLocation);
gl_FragColor = applyBackgroundBlend(colormap(currentPixel, true));
}`)}function b(e,a){e.fragment.uniforms.add([new g.IntegerPassUniform("u_bandCount",(e=>e.symbolizer.u_bandCount)),new f.FloatsPassUniform("u_minCutOff",(e=>e.symbolizer.u_minCutOff),3),new f.FloatsPassUniform("u_maxCutOff",(e=>e.symbolizer.u_maxCutOff),3),new f.FloatsPassUniform("u_factor",(e=>e.symbolizer.u_factor),3),new m.FloatPassUniform("u_minOutput",(e=>e.symbolizer.u_minOutput)),new m.FloatPassUniform("u_maxOutput",(e=>e.symbolizer.u_maxOutput)),new s.BooleanPassUniform("u_useGamma",(e=>e.symbolizer.u_useGamma)),new f.FloatsPassUniform("u_gamma",(e=>e.symbolizer.u_gamma),3),new f.FloatsPassUniform("u_gammaCorrection",(e=>e.symbolizer.u_gammaCorrection),3),new m.FloatPassUniform("u_opacity",(e=>e.common.u_opacity))]),e.fragment.code.add(d.glsl`float stretchOneValue(float val, float minCutOff, float maxCutOff, float minOutput, float maxOutput, float factor, bool useGamma, float gamma, float gammaCorrection) {
if (val >= maxCutOff) {
return maxOutput;
} else if (val <= minCutOff) {
return minOutput;
}
float stretchedVal;
if (useGamma) {
float tempf = 1.0;
float outRange = maxOutput - minOutput;
float relativeVal = (val - minCutOff) / (maxCutOff - minCutOff);
if (gamma > 1.0) {
tempf -= pow(1.0 / outRange, relativeVal * gammaCorrection);
}
stretchedVal = (tempf * outRange * pow(relativeVal, 1.0 / gamma) + minOutput) / 255.0;
} else {
stretchedVal = minOutput + (val - minCutOff) * factor;
}
return stretchedVal;
}`);const o=a.applyColormap?d.glsl`gl_FragColor = applyBackgroundBlend(colormap(vec4(grayVal, grayVal, grayVal, currentPixel.a), !u_useGamma));`:d.glsl`gl_FragColor = applyBackgroundBlend(vec4(grayVal, grayVal, grayVal, currentPixel.a));`;e.fragment.code.add(d.glsl`
      void main() {
        vec2 pixelLocation = getPixelLocation(uv);
        if (isOutside(pixelLocation)) {
          gl_FragColor = applyBackgroundBlend(vec4(0.0, 0.0, 0.0, 0.0));
          return;
        }

        vec4 currentPixel = getPixel(pixelLocation);
        ${a.stretchType===l.RasterColorizerStretchType.Noop?d.glsl`
        gl_FragColor = applyBackgroundBlend(currentPixel);`:d.glsl`
        if (currentPixel.a == 0.0) {
          gl_FragColor = applyBackgroundBlend(vec4(0.0, 0.0, 0.0, 0.0));
          return;
        }
        if (u_bandCount == 1) {
          float grayVal = stretchOneValue(currentPixel.r, u_minCutOff[0], u_maxCutOff[0], u_minOutput, u_maxOutput, u_factor[0], u_useGamma, u_gamma[0], u_gammaCorrection[0]);
          ${o}
        } else {
          float redVal = stretchOneValue(currentPixel.r, u_minCutOff[0], u_maxCutOff[0], u_minOutput, u_maxOutput, u_factor[0], u_useGamma, u_gamma[0], u_gammaCorrection[0]);
          float greenVal = stretchOneValue(currentPixel.g, u_minCutOff[1], u_maxCutOff[1], u_minOutput, u_maxOutput, u_factor[1], u_useGamma, u_gamma[1], u_gammaCorrection[1]);
          float blueVal = stretchOneValue(currentPixel.b, u_minCutOff[2], u_maxCutOff[2], u_minOutput, u_maxOutput, u_factor[2], u_useGamma, u_gamma[2], u_gammaCorrection[2]);
          gl_FragColor = applyBackgroundBlend(vec4(redVal, greenVal, blueVal, currentPixel.a));
        }`}
      }`)}function P(e,a){const o=e.fragment;o.uniforms.add([new p.Texture2DPassUniform("u_image",(e=>e.u_image)),new g.IntegerPassUniform("u_hillshadeType",(e=>e.symbolizer.u_hillshadeType)),new f.FloatsPassUniform("u_sinZcosAs",(e=>e.symbolizer.u_sinZcosAs),6),new f.FloatsPassUniform("u_sinZsinAs",(e=>e.symbolizer.u_sinZsinAs),6),new f.FloatsPassUniform("u_cosZs",(e=>e.symbolizer.u_cosZs),6),new f.FloatsPassUniform("u_weights",(e=>e.symbolizer.u_weights),6),new c.Float2PassUniform("u_factor",(e=>e.symbolizer.u_factor)),new m.FloatPassUniform("u_minValue",(e=>e.symbolizer.u_minValue)),new m.FloatPassUniform("u_maxValue",(e=>e.symbolizer.u_maxValue)),new c.Float2PassUniform("u_srcImageSize",(e=>e.common.u_srcImageSize))]),o.include(u.ColorConversion),o.code.add(d.glsl`vec4 overlay(float val, float minValue, float maxValue, float hillshade, float alpha) {
val = clamp((val - minValue) / (maxValue - minValue), 0.0, 1.0);
vec3 hsv = rgb2hsv(colormap(vec4(val, val, val, 1.0), false).rgb);
hsv.z = hillshade;
return vec4(hsv2rgb(hsv) * alpha, alpha);
}`),o.code.add(d.glsl`float getNeighborHoodAlpha(float a, float b, float c, float d, float e, float f, float g, float h, float i){
if (a == 0.0 || a == 0.0 || a==0.0 || a == 0.0 || a == 0.0 || a==0.0 || a == 0.0 || a == 0.0 || a==0.0) {
return 0.0;
}  else {
return e;
}
}`);const l=a.applyColormap?d.glsl`gl_FragColor = applyBackgroundBlend(overlay(ve.r, u_minValue, u_maxValue, hillshade, alpha));`:d.glsl`hillshade *= alpha;
gl_FragColor = applyBackgroundBlend(vec4(hillshade, hillshade, hillshade, alpha));`;o.code.add(d.glsl`
    void main() {
      vec2 pixelLocation = getPixelLocation(uv);
      if (isOutside(pixelLocation)) {
        gl_FragColor = applyBackgroundBlend(vec4(0.0, 0.0, 0.0, 0.0));
        return;
      }

      vec4 currentPixel = getPixel(pixelLocation);
      if (currentPixel.a == 0.0) {
        gl_FragColor = applyBackgroundBlend(vec4(0.0, 0.0, 0.0, 0.0));
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
      alpha *= u_opacity;
      ${l}
    }
  `)}const z=Object.freeze(Object.defineProperty({__proto__:null,ColorizerUniforms:x,ColorizerStretchUniforms:_,ColorizerHillshadeUniforms:y,build:h},Symbol.toStringTag,{value:"Module"}));e.ColorizerHillshadeUniforms=y,e.ColorizerStretchUniforms=_,e.ColorizerUniforms=x,e.RasterColorizer=z,e.build=h}));
