/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces"],(function(e,r){"use strict";function o(e){e.fragment.uniforms.add("u_colormap","sampler2D"),e.fragment.uniforms.add("u_colormapOffset","float"),e.fragment.uniforms.add("u_colormapMaxIndex","float"),e.fragment.code.add(r.glsl`vec4 colormap(vec4 currentPixel, bool isFloat) {
float clrIndex = isFloat ? currentPixel.r - u_colormapOffset : currentPixel.r * 255.0 - u_colormapOffset;
vec4 result;
if (currentPixel.a == 0.0 || clrIndex > u_colormapMaxIndex) {
result = vec4(0.0, 0.0, 0.0, 0.0);
} else {
vec2 clrPosition = vec2((clrIndex + 0.5) / (u_colormapMaxIndex + 1.0), 0.0);
vec4 color = texture2D(u_colormap, clrPosition);
result = vec4(color.rgb, 1.0) * color.a * u_opacity;
}
return result;
}`)}e.Colormap=o,Object.defineProperty(e,"__esModule",{value:!0})}));
