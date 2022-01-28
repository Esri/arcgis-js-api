/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../attributes/VertexTextureCoordinates.glsl","../util/TextureAtlasLookup.glsl","../../shaderModules/interfaces"],(function(e,r,t,o){"use strict";function u(e,u){const s=e.fragment;u.baseColorTexture?(e.include(r.VertexTextureCoordinates,u),s.uniforms.add("uBaseColorTexture","sampler2D"),s.uniforms.add("uBaseColorTextureSize","vec2"),2===u.attributeTextureCoordinates?(e.include(t.TextureAtlasLookup),s.code.add(o.glsl`vec4 readBaseColorTexture() {
return textureAtlasLookup(
uBaseColorTexture,
uBaseColorTextureSize,
vuv0,
vuvRegion
);
}`)):s.code.add(o.glsl`vec4 readBaseColorTexture() {
return texture2D(uBaseColorTexture, vuv0);
}`)):s.code.add(o.glsl`vec4 readBaseColorTexture() { return vec4(1.0); }`)}e.ReadBaseColorTexture=u,Object.defineProperty(e,"__esModule",{value:!0})}));
