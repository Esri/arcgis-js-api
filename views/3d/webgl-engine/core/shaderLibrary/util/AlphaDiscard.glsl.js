/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces"],(function(a,d){"use strict";const e=.1,o=.001;function r(a,e){const r=a.fragment;switch(e.alphaDiscardMode){case 0:r.code.add(d.glsl`
        #define discardOrAdjustAlpha(color) { if (color.a < ${d.glsl.float(o)}) { discard; } }
      `);break;case 1:r.code.add(d.glsl`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case 2:r.uniforms.add("textureAlphaCutoff","float"),r.code.add(d.glsl`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case 3:a.fragment.uniforms.add("textureAlphaCutoff","float"),a.fragment.code.add(d.glsl`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}a.DiscardOrAdjustAlpha=r,a.defaultMaskAlphaCutoff=e,a.symbolAlphaCutoff=o,Object.defineProperty(a,"__esModule",{value:!0})}));
