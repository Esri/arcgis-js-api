/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../layers/support/symbolColorUtils","./ColorConversion.glsl","../../shaderModules/interfaces"],(function(e,t,i,l){"use strict";function r(e){e.include(i.ColorConversion),e.code.add(l.glsl`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${l.glsl.int(t.ColorMixModeEnum.Multiply)}) {
        return allMixed;
      }
      else if (mode == ${l.glsl.int(t.ColorMixModeEnum.Ignore)}) {
        return internalMixed;
      }
      else if (mode == ${l.glsl.int(t.ColorMixModeEnum.Replace)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${l.glsl.int(t.ColorMixModeEnum.Ignore)}) {
        return internalMixed;
      }
      else if (mode == ${l.glsl.int(t.ColorMixModeEnum.Replace)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}e.MixExternalColor=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
