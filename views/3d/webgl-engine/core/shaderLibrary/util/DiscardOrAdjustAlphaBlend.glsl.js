/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{symbolAlphaCutoff as o}from"./AlphaCutoff.js";import{glsl as r}from"../../shaderModules/interfaces.js";function d(d){d.fragment.code.add(r`
    #define discardOrAdjustAlpha(color) { if (color.a < ${r.float(o)}) { discard; } }
  `)}export{d as DiscardOrAdjustAlphaBlend};
