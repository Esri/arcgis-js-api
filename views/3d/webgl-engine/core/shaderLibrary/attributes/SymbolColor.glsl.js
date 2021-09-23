/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../collections/Component/Material/shader/DecodeSymbolColor.glsl","../../shaderModules/interfaces"],(function(o,e,l){"use strict";function r(o,r){r.symbolColor?(o.include(e.DecodeSymbolColor),o.attributes.add("symbolColor","vec4"),o.varyings.add("colorMixMode","mediump float")):o.fragment.uniforms.add("colorMixMode","int"),r.symbolColor?o.vertex.code.add(l.glsl`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`):o.vertex.code.add(l.glsl`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`)}o.SymbolColor=r,Object.defineProperty(o,"__esModule",{value:!0})}));
