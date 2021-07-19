/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../attributes/VertexColor.glsl","../util/MixExternalColor.glsl","../../shaderModules/interfaces"],(function(e,o,r,l){"use strict";function t(e,t){e.include(o.VertexColor,t),e.fragment.include(r.MixExternalColor);const a=e.fragment;a.uniforms.add("uBaseColor","vec4"),a.uniforms.add("uObjectOpacity","float"),t.attributeColor?a.code.add(l.glsl`vec3 _baseColor() {
return uBaseColor.rgb * vColor.rgb;
}
float _baseOpacity() {
return uBaseColor.a * vColor.a;
}`):a.code.add(l.glsl`vec3 _baseColor() {
return uBaseColor.rgb;
}
float _baseOpacity() {
return uBaseColor.a;
}`),a.code.add(l.glsl`vec4 computeMaterialColor(vec4 textureColor, vec4 externalColor, int externalColorMixMode) {
vec3 baseColor = _baseColor();
float baseOpacity = _baseOpacity();
vec3 color = mixExternalColor(
baseColor,
textureColor.rgb,
externalColor.rgb,
externalColorMixMode
);
float opacity = uObjectOpacity * mixExternalOpacity(
baseOpacity,
textureColor.a,
externalColor.a,
externalColorMixMode
);
return vec4(color, opacity);
}`)}e.ComputeMaterialColor=t,Object.defineProperty(e,"__esModule",{value:!0})}));
