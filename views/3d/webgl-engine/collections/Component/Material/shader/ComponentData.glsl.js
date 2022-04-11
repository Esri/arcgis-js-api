/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","./DecodeSymbolColor.glsl","../../../../core/shaderModules/interfaces","../../../../lib/VertexAttribute"],(function(o,e,r,n){"use strict";var t;function l(t,l){l.componentData===o.ComponentDataType.Varying&&(t.vertex.uniforms.add("componentColorTex","sampler2D"),t.vertex.uniforms.add("componentColorTexInvDim","vec2"),t.attributes.add(n.VertexAttribute.COMPONENTINDEX,"float"),t.varyings.add("vExternalColorMixMode","mediump float"),t.varyings.add("vExternalColor","vec4"),t.include(e.DecodeSymbolColor),t.vertex.code.add(r.glsl`vec4 _readComponentColor() {
float normalizedIndex = (componentIndex + 0.5) * componentColorTexInvDim.x;
vec2 indexCoord = vec2(
mod(normalizedIndex, 1.0),
(floor(normalizedIndex) + 0.5) * componentColorTexInvDim.y
);
return texture2D(componentColorTex, indexCoord);
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
}`),t.fragment.code.add(r.glsl`void readExternalColor(out vec4 externalColor, out int externalColorMixMode) {
externalColor = vExternalColor;
externalColorMixMode = int(vExternalColorMixMode);
}`)),l.componentData===o.ComponentDataType.Uniform&&(t.vertex.uniforms.add("externalColor","vec4"),t.fragment.uniforms.add("externalColorMixMode","int"),t.varyings.add("vExternalColor","vec4"),t.vertex.code.add(r.glsl`vec4 forwardExternalColor(out bool castShadows) {
vExternalColor = externalColor;
castShadows = true;
return externalColor;
}`),t.fragment.code.add(r.glsl`void readExternalColor(out vec4 color, out int colorMixMode) {
color = vExternalColor;
colorMixMode = externalColorMixMode;
}`))}o.ComponentDataType=void 0,(t=o.ComponentDataType||(o.ComponentDataType={}))[t.Uniform=0]="Uniform",t[t.Varying=1]="Varying",t[t.COUNT=2]="COUNT",o.ComponentData=l,Object.defineProperties(o,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
