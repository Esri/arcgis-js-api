/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces","../../../lib/basicInterfaces"],(function(a,e,d){"use strict";const o=.1,l=.001;function r(a,o){const r=a.fragment;switch(o.alphaDiscardMode){case d.AlphaDiscardMode.Blend:r.code.add(e.glsl`
        #define discardOrAdjustAlpha(color) { if (color.a < ${e.glsl.float(l)}) { discard; } }
      `);break;case d.AlphaDiscardMode.Opaque:r.code.add(e.glsl`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case d.AlphaDiscardMode.Mask:r.uniforms.add("textureAlphaCutoff","float"),r.code.add(e.glsl`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case d.AlphaDiscardMode.MaskBlend:a.fragment.uniforms.add("textureAlphaCutoff","float"),a.fragment.code.add(e.glsl`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}a.DiscardOrAdjustAlpha=r,a.defaultMaskAlphaCutoff=o,a.symbolAlphaCutoff=l,Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
