/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../layers/support/symbolColorUtils","./ColorConversion.glsl","../../shaderModules/interfaces"],(function(e,t,i,r){"use strict";function o(e){e.include(i.ColorConversion),e.code.add(r.glsl`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${r.glsl.int(t.ColorMixModeEnum.Multiply)}) {
        return allMixed;
      }
      if (mode == ${r.glsl.int(t.ColorMixModeEnum.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${r.glsl.int(t.ColorMixModeEnum.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${r.glsl.int(t.ColorMixModeEnum.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${r.glsl.int(t.ColorMixModeEnum.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}e.MixExternalColor=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
