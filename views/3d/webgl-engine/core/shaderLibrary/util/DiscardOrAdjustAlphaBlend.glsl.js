/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./AlphaCutoff","../../shaderModules/interfaces"],(function(e,d,l){"use strict";function o(e){e.fragment.code.add(l.glsl`
    #define discardOrAdjustAlpha(color) { if (color.a < ${l.glsl.float(d.symbolAlphaCutoff)}) { discard; } }
  `)}e.DiscardOrAdjustAlphaBlend=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
