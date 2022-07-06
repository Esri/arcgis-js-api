/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{DecodeSymbolColor as o}from"../../../collections/Component/Material/shader/DecodeSymbolColor.glsl.js";import{IntegerPassUniform as r}from"../../shaderModules/IntegerPassUniform.js";import{glsl as e}from"../../shaderModules/interfaces.js";import{VertexAttribute as l}from"../../../lib/VertexAttribute.js";import{colorMixModes as d}from"../../../materials/internal/MaterialUtil.js";function i(i,t){t.hasSymbolColors?(i.include(o),i.attributes.add(l.SYMBOLCOLOR,"vec4"),i.varyings.add("colorMixMode","mediump float"),i.vertex.code.add(e`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(i.fragment.uniforms.add(new r("colorMixMode",(o=>d[o.colorMixMode]))),i.vertex.code.add(e`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}export{i as SymbolColor};
