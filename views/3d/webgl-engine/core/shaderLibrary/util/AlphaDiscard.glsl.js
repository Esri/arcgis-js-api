/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./DiscardOrAdjustAlphaBlend.glsl","../../shaderModules/FloatDrawUniform","../../shaderModules/FloatPassUniform","../../shaderModules/interfaces","../../../lib/basicInterfaces"],(function(a,e,d,r,s,o){"use strict";function l(a,e){c(a,e,new r.FloatPassUniform("textureAlphaCutoff",(a=>a.textureAlphaCutoff)))}function t(a,e){c(a,e,new d.FloatDrawUniform("textureAlphaCutoff",(a=>a.textureAlphaCutoff)))}function c(a,d,r){const l=a.fragment;switch(d.alphaDiscardMode!==o.AlphaDiscardMode.Mask&&d.alphaDiscardMode!==o.AlphaDiscardMode.MaskBlend||l.uniforms.add(r),d.alphaDiscardMode){case o.AlphaDiscardMode.Blend:return a.include(e.DiscardOrAdjustAlphaBlend);case o.AlphaDiscardMode.Opaque:l.code.add(s.glsl`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case o.AlphaDiscardMode.Mask:l.code.add(s.glsl`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case o.AlphaDiscardMode.MaskBlend:a.fragment.code.add(s.glsl`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}a.DiscardOrAdjustAlphaDraw=t,a.DiscardOrAdjustAlphaPass=l,Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})}));
