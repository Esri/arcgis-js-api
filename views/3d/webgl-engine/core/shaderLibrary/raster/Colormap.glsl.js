/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{FloatPassUniform as o}from"../../shaderModules/FloatPassUniform.js";import{glsl as r}from"../../shaderModules/interfaces.js";import{Texture2DPassUniform as e}from"../../shaderModules/Texture2DPassUniform.js";function l(l){l.fragment.uniforms.add([new e("u_colormap",(o=>o.u_colormap)),new o("u_colormapOffset",(o=>o.colormap.u_colormapOffset)),new o("u_colormapMaxIndex",(o=>o.colormap.u_colormapMaxIndex)),new o("u_opacity",(o=>o.common.u_opacity))]),l.fragment.code.add(r`vec4 colormap(vec4 currentPixel, bool isFloat) {
float clrIndex = isFloat ? currentPixel.r - u_colormapOffset : currentPixel.r * 255.0 - u_colormapOffset;
vec4 result;
if (currentPixel.a == 0.0 || clrIndex > u_colormapMaxIndex) {
result = vec4(0.0, 0.0, 0.0, 0.0);
} else {
vec2 clrPosition = vec2((clrIndex + 0.5) / (u_colormapMaxIndex + 1.0), 0.0);
result = texture2D(u_colormap, clrPosition);
}
return result;
}`)}export{l as Colormap};
