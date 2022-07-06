/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{DiscardOrAdjustAlphaBlend as a}from"./DiscardOrAdjustAlphaBlend.glsl.js";import{FloatDrawUniform as e}from"../../shaderModules/FloatDrawUniform.js";import{FloatPassUniform as r}from"../../shaderModules/FloatPassUniform.js";import{glsl as o}from"../../shaderModules/interfaces.js";import{AlphaDiscardMode as d}from"../../../lib/basicInterfaces.js";function s(a,e){l(a,e,new r("textureAlphaCutoff",(a=>a.textureAlphaCutoff)))}function t(a,r){l(a,r,new e("textureAlphaCutoff",(a=>a.textureAlphaCutoff)))}function l(e,r,s){const t=e.fragment;switch(r.alphaDiscardMode!==d.Mask&&r.alphaDiscardMode!==d.MaskBlend||t.uniforms.add(s),r.alphaDiscardMode){case d.Blend:return e.include(a);case d.Opaque:t.code.add(o`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case d.Mask:t.code.add(o`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case d.MaskBlend:e.fragment.code.add(o`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}export{t as DiscardOrAdjustAlphaDraw,s as DiscardOrAdjustAlphaPass};
