/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isSome as e}from"../core/maybe.js";import{Z as a}from"./vec3f64.js";import{RasterColorizerType as o,RasterColorizerStretchType as r}from"../views/2d/engine/imagery/enums.js";import{LayerBlendMode as l}from"../views/3d/webgl-engine/core/shaderLibrary/output/BlendOptions.js";import{Colormap as i}from"../views/3d/webgl-engine/core/shaderLibrary/raster/Colormap.glsl.js";import{CommonPassParameters as t,Common as n}from"../views/3d/webgl-engine/core/shaderLibrary/raster/Common.glsl.js";import{BackgroundGrid as u}from"../views/3d/webgl-engine/core/shaderLibrary/terrain/BackgroundGrid.glsl.js";import{TileBlendInput as s}from"../views/3d/webgl-engine/core/shaderLibrary/terrain/TileBlendInput.js";import{TileComposite as c}from"../views/3d/webgl-engine/core/shaderLibrary/terrain/TileComposite.glsl.js";import{a as m}from"./BlendLayers.glsl.js";import{BlendModes as d}from"../views/3d/webgl-engine/core/shaderLibrary/util/BlendModes.glsl.js";import{ColorConversion as f}from"../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl.js";import{BooleanPassUniform as g}from"../views/3d/webgl-engine/core/shaderModules/BooleanPassUniform.js";import{Float2PassUniform as p}from"../views/3d/webgl-engine/core/shaderModules/Float2PassUniform.js";import{Float3PassUniform as x}from"../views/3d/webgl-engine/core/shaderModules/Float3PassUniform.js";import{FloatPassUniform as v}from"../views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js";import{FloatsPassUniform as y}from"../views/3d/webgl-engine/core/shaderModules/FloatsPassUniform.js";import{IntegerPassUniform as _}from"../views/3d/webgl-engine/core/shaderModules/IntegerPassUniform.js";import{glsl as b}from"../views/3d/webgl-engine/core/shaderModules/interfaces.js";import{ShaderBuilder as h}from"../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js";import{Texture2DPassUniform as C}from"../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js";class w extends t{constructor(e,o,r,l,i,t){super(e,l,i),this.colormap=o,this.symbolizer=r,this.u_colormap=t,this.backgroundColor=a,this.fboTexture=null,this.baseOpacity=1}}class O extends w{}class z extends w{}function L(a){const r=new h;r.include(c),r.include(n),r.include(i),a.tileBlendInput===s.GridComposite&&(r.extensions.add("GL_OES_standard_derivatives"),r.fragment.include(u));const t=a.tileBlendInput===s.ColorComposite;t&&r.fragment.uniforms.add(new x("backgroundColor",(e=>e.backgroundColor))),a.baseOpacityMode!==m.One&&r.fragment.uniforms.add(new v("baseOpacity",(e=>e.baseOpacity)));const f=a.baseOpacityMode===m.OnBaseLayer,g=a.baseOpacityMode===m.OnBackground||a.baseOpacityMode===m.OnBaseLayer,p=a.blendMode!==l.Normal;r.fragment.include(d,a);const y=a.tileBlendInput!==s.LayerOnly;return(p&&!y||f)&&(r.fragment.uniforms.add(new C("fboColor",(e=>e.fboTexture))),r.fragment.uniforms.add(new v("tileSize",(a=>e(a.fboTexture)?a.fboTexture.descriptor.width:1)))),r.fragment.code.add(b`
    vec4 applyBackgroundBlend(vec4 layerColor) {
      ${y||f?b`
          vec4 bgColor = ${f?b`texture2D(fboColor, gl_FragCoord.xy / tileSize)`:t?b`vec4(backgroundColor, 1.0)`:b`gridColor(vuv)`};
          ${g?b`bgColor *= baseOpacity;`:""}`:""}
      ${p?b`
            vec3 pmColorLayer = layerColor.rgb * layerColor.a;
            vec4 fboTex = ${y?b`bgColor;`:b`texture2D(fboColor, gl_FragCoord.xy / tileSize) ${f?" * baseOpacity":""};`}
            vec3 Cb = fboTex.a == 0.0 ? fboTex.rgb : vec3(fboTex.rgb * fboTex.a);
            return applyBlendMode(pmColorLayer.rgb, layerColor.a * u_opacity, Cb, fboTex.a);`:y||f?b`
            float composeAlpha = layerColor.a * u_opacity;
            vec4 pmColorLayer = vec4(layerColor.rgb, 1.0);
            return mix(bgColor, pmColorLayer, composeAlpha);`:b`
            return layerColor * layerColor.a * u_opacity;`}
    }
  `),a.colorizerType===o.Stretch?B(r,a):a.colorizerType===o.Lut?P(r):a.colorizerType===o.Hillshade&&V(r,a),r}function P(e){e.fragment.code.add(b`void main() {
vec2 pixelLocation = getPixelLocation(uv);
if (isOutside(pixelLocation)) {
gl_FragColor = applyBackgroundBlend(vec4(0.0, 0.0, 0.0, 0.0));
return;
}
vec4 currentPixel = getPixel(pixelLocation);
gl_FragColor = applyBackgroundBlend(colormap(currentPixel, true));
}`)}function B(e,a){e.fragment.uniforms.add([new _("u_bandCount",(e=>e.symbolizer.u_bandCount)),new y("u_minCutOff",(e=>e.symbolizer.u_minCutOff),3),new y("u_maxCutOff",(e=>e.symbolizer.u_maxCutOff),3),new y("u_factor",(e=>e.symbolizer.u_factor),3),new v("u_minOutput",(e=>e.symbolizer.u_minOutput)),new v("u_maxOutput",(e=>e.symbolizer.u_maxOutput)),new g("u_useGamma",(e=>e.symbolizer.u_useGamma)),new y("u_gamma",(e=>e.symbolizer.u_gamma),3),new y("u_gammaCorrection",(e=>e.symbolizer.u_gammaCorrection),3),new v("u_opacity",(e=>e.common.u_opacity))]),e.fragment.code.add(b`float stretchOneValue(float val, float minCutOff, float maxCutOff, float minOutput, float maxOutput, float factor, bool useGamma, float gamma, float gammaCorrection) {
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
}`);const o=a.applyColormap?b`gl_FragColor = applyBackgroundBlend(colormap(vec4(grayVal, grayVal, grayVal, currentPixel.a), !u_useGamma));`:b`gl_FragColor = applyBackgroundBlend(vec4(grayVal, grayVal, grayVal, currentPixel.a));`;e.fragment.code.add(b`
      void main() {
        vec2 pixelLocation = getPixelLocation(uv);
        if (isOutside(pixelLocation)) {
          gl_FragColor = applyBackgroundBlend(vec4(0.0, 0.0, 0.0, 0.0));
          return;
        }

        vec4 currentPixel = getPixel(pixelLocation);
        ${a.stretchType===r.Noop?b`
        gl_FragColor = applyBackgroundBlend(currentPixel);`:b`
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
      }`)}function V(e,a){const o=e.fragment;o.uniforms.add([new C("u_image",(e=>e.u_image)),new _("u_hillshadeType",(e=>e.symbolizer.u_hillshadeType)),new y("u_sinZcosAs",(e=>e.symbolizer.u_sinZcosAs),6),new y("u_sinZsinAs",(e=>e.symbolizer.u_sinZsinAs),6),new y("u_cosZs",(e=>e.symbolizer.u_cosZs),6),new y("u_weights",(e=>e.symbolizer.u_weights),6),new p("u_factor",(e=>e.symbolizer.u_factor)),new v("u_minValue",(e=>e.symbolizer.u_minValue)),new v("u_maxValue",(e=>e.symbolizer.u_maxValue)),new p("u_srcImageSize",(e=>e.common.u_srcImageSize))]),o.include(f),o.code.add(b`vec4 overlay(float val, float minValue, float maxValue, float hillshade, float alpha) {
val = clamp((val - minValue) / (maxValue - minValue), 0.0, 1.0);
vec3 hsv = rgb2hsv(colormap(vec4(val, val, val, 1.0), false).rgb);
hsv.z = hillshade;
return vec4(hsv2rgb(hsv) * alpha, alpha);
}`),o.code.add(b`float getNeighborHoodAlpha(float a, float b, float c, float d, float e, float f, float g, float h, float i){
if (a == 0.0 || a == 0.0 || a==0.0 || a == 0.0 || a == 0.0 || a==0.0 || a == 0.0 || a == 0.0 || a==0.0) {
return 0.0;
}  else {
return e;
}
}`);const r=a.applyColormap?b`gl_FragColor = applyBackgroundBlend(overlay(ve.r, u_minValue, u_maxValue, hillshade, alpha));`:b`hillshade *= alpha;
gl_FragColor = applyBackgroundBlend(vec4(hillshade, hillshade, hillshade, alpha));`;o.code.add(b`
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
      ${r}
    }
  `)}const k=Object.freeze(Object.defineProperty({__proto__:null,ColorizerUniforms:w,ColorizerStretchUniforms:O,ColorizerHillshadeUniforms:z,build:L},Symbol.toStringTag,{value:"Module"}));export{w as C,k as R,O as a,z as b,L as c};
