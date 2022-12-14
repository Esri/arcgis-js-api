/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../util/WebGL2Utils","../../shaderModules/FloatPassUniform","../../shaderModules/interfaces","../../shaderModules/Texture2DPassUniform"],(function(e,o,r,a,l){"use strict";function t(e,t){e.fragment.uniforms.add([new l.Texture2DPassUniform("u_colormap",(e=>e.u_colormap)),new r.FloatPassUniform("u_colormapOffset",(e=>e.colormap.u_colormapOffset)),new r.FloatPassUniform("u_colormapMaxIndex",(e=>e.colormap.u_colormapMaxIndex)),new r.FloatPassUniform("u_opacity",(e=>e.common.u_opacity))]),e.fragment.code.add(a.glsl`
    vec4 colormap(vec4 currentPixel, bool isFloat) {
      float colorIndex = isFloat ? currentPixel.r - u_colormapOffset : currentPixel.r * 255.0 - u_colormapOffset;
      vec4 result;
      // handle no data and out of range pixels
      if (currentPixel.a == 0.0 || colorIndex > u_colormapMaxIndex) {
        result = vec4(0.0, 0.0, 0.0, 0.0);
      } else {
        // colormap lookup
        vec2 texelCoordinates = vec2((colorIndex + 0.5), 0.5);
        result = ${o.texelFetch(t,"u_colormap","texelCoordinates","(1.0 / vec2(u_colormapMaxIndex + 1.0, 1.0))")};
      }
      return result;
    }
  `)}e.Colormap=t,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
