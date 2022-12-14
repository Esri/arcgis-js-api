/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","./AlphaCutoff","../../shaderModules/interfaces"],(function(e,l,d){"use strict";function o(e){e.fragment.code.add(d.glsl`
    #define discardOrAdjustAlpha(color) { if (color.a < ${d.glsl.float(l.symbolAlphaCutoff)}) { discard; } }
  `)}e.DiscardOrAdjustAlphaBlend=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
