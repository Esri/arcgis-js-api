/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","./DecodeSymbolColor.glsl","../../../../core/shaderModules/interfaces"],(function(o,e,r){"use strict";function l(o,l){1===l.componentData&&(o.vertex.uniforms.add("uComponentColorTex","sampler2D"),o.vertex.uniforms.add("uComponentColorTexInvDim","vec2"),o.attributes.add("componentIndex","float"),o.varyings.add("vExternalColorMixMode","mediump float"),o.varyings.add("vExternalColor","vec4"),o.include(e.DecodeSymbolColor),o.vertex.code.add(r.glsl`vec4 _readComponentColor() {
float normalizedIndex = (componentIndex + 0.5) * uComponentColorTexInvDim.x;
vec2 indexCoord = vec2(
mod(normalizedIndex, 1.0),
(floor(normalizedIndex) + 0.5) * uComponentColorTexInvDim.y
);
return texture2D(uComponentColorTex, indexCoord);
}
vec4 forwardExternalColor(out bool castShadows) {
vec4 componentColor = _readComponentColor() * 255.0;
float shadowFlag = mod(componentColor.b * 255.0, 2.0);
componentColor.b -= shadowFlag;
castShadows = shadowFlag >= 1.0;
int decodedColorMixMode;
vExternalColor = decodeSymbolColor(componentColor, decodedColorMixMode) * 0.003921568627451;
vExternalColorMixMode = float(decodedColorMixMode) + 0.5;
return vExternalColor;
}`),o.fragment.code.add(r.glsl`void readExternalColor(out vec4 externalColor, out int externalColorMixMode) {
externalColor = vExternalColor;
externalColorMixMode = int(vExternalColorMixMode);
}`)),0===l.componentData&&(o.vertex.uniforms.add("uExternalColor","vec4"),o.fragment.uniforms.add("uExternalColorMixMode","int"),o.varyings.add("vExternalColor","vec4"),o.vertex.code.add(r.glsl`vec4 forwardExternalColor(out bool castShadows) {
vExternalColor = uExternalColor;
castShadows = true;
return uExternalColor;
}`),o.fragment.code.add(r.glsl`void readExternalColor(out vec4 externalColor, out int externalColorMixMode) {
externalColor = vExternalColor;
externalColorMixMode = uExternalColorMixMode;
}`))}o.ComponentData=l,Object.defineProperty(o,"__esModule",{value:!0})}));
