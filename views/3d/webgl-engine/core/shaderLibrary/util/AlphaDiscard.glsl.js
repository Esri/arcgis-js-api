/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces"],(function(a,d){"use strict";a.DiscardOrAdjustAlpha=function(a,e){const o=a.fragment;switch(e.alphaDiscardMode){case 0:o.code.add(d.glsl`
        #define discardOrAdjustAlpha(color) { if (color.a < ${d.glsl.float(.001)}) { discard; } }
      `);break;case 1:o.code.add(d.glsl`
        void discardOrAdjustAlpha(inout vec4 color) {
          color.a = 1.0;
        }
      `);break;case 2:o.uniforms.add("textureAlphaCutoff","float"),o.code.add(d.glsl`
        #define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }
      `);break;case 3:a.fragment.uniforms.add("textureAlphaCutoff","float"),a.fragment.code.add(d.glsl`
        #define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }
      `)}},a.defaultMaskAlphaCutoff=.1,a.symbolAlphaCutoff=.001,Object.defineProperty(a,"__esModule",{value:!0})}));
